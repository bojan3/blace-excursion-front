import { Component, OnInit } from '@angular/core';
import { PastExcursionDTO } from 'src/app/entity/PastExcursionDTO';
import { ExcursionService } from 'src/app/service/excursion.service';
import * as pdfMake from "pdfmake/build/pdfmake";
// import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements OnInit {


  pastExcursions: PastExcursionDTO[] = [];
  constructor(
    private excursionService: ExcursionService
  ) { }

  ngOnInit(): void {
    this.excursionService.getTourGuidePastExcursions().subscribe((pastExcursions) => {
      this.pastExcursions = pastExcursions;
      this.generatePDF();
    })
  }

  generatePDF() {
    var counter = 0;
    var content: { table: { headerRows: number; widths: string[]; body: (number[] | (string | { text: string; colSpan: number; })[])[]; }; }[] = [];

    for (let pastExcursion of this.pastExcursions) {
      // this.restaurantService.getStatsByRestName(restaurant.name).subscribe((stats) => {
        var body = [];

        body.push(['Location', 'Date', 'Price']);
        body.push([pastExcursion.excursionDTO.locationDTO.name, pastExcursion.excursionDTO.date, pastExcursion.excursionDTO.price]);


        let table = { headerRows: 2, widths: ['auto', 'auto', 'auto'], body: body };
        content.push({table});

        counter++;
        // if(counter == this.restaurants.length){
          let docDefinition = {
            header: 'Извештај о броју резервација и броју људи по дану у протеклих месец дана',
            content: content
          };

          pdfMake.createPdf(docDefinition).open();
        }

      })
    }

  }

}
