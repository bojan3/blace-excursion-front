import { Component, OnInit } from '@angular/core';
import { PastExcursionDTO } from 'src/app/entity/PastExcursionDTO';
import { ExcursionService } from 'src/app/service/excursion.service';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
// import { BoundDirectivePropertyAst, TmplAstTemplate } from '@angular/compiler';
import { TourguideService } from 'src/app/service/tourguide.service';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements OnInit {


  pastExcursions: PastExcursionDTO[] = [];
  constructor(
    private excursionService: ExcursionService,
    private tourguideService: TourguideService
  ) { }

  ngOnInit(): void {
    this.tourguideService.getTourGuidePastExcursions().subscribe((pastExcursions) => {
      this.pastExcursions = pastExcursions;
      this.generatePDF();
    })
  }

  generatePDF() {
    var total = 0;

    var content: { table: { headerRows: number; widths: string[]; body: ((string | number | Date)[] | (string | { text: string; colSpan: number; })[])[]; }; }[] = [];
    var body = [];

    body.push(['Location', 'Date', 'Price per person', 'Number of persons', 'Total per excursion']);

    //TREBA DA SE POPRAVI OVO 

    // for (let pastExcursion of this.pastExcursions) {
    //     body.push([pastExcursion.excursionDTO.locationDTO.name, pastExcursion.excursionDTO.date, pastExcursion.excursionDTO.price, pastExcursion.numberOfPersons, pastExcursion.excursionDTO.price * pastExcursion.numberOfPersons]);
    //     total += pastExcursion.excursionDTO.price * pastExcursion.numberOfPersons;
    //   }

        let table = { headerRows: 2, widths: ['auto', 'auto', 'auto', 'auto', 'auto'], body: body };
        content.push({table});

          let docDefinition = {
            header: 'Report: Earings for excursions ' + '(Total: ' + total + ')',
            content: content
          };

          pdfMake.createPdf(docDefinition).download();
    }

}
