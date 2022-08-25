import { Component, OnInit } from '@angular/core';
import { TourGuideDTO } from 'src/app/entity/TourGuideDTO';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-tourguides',
  templateUrl: './tourguides.component.html',
  styleUrls: ['./tourguides.component.css']
})
export class TourguidesComponent implements OnInit {

  tourguides: TourGuideDTO[] = [];

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.adminService.getTourGuides().subscribe((tourguides) => (this.tourguides = tourguides));
  }

}
