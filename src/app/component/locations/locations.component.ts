import { Component, OnInit } from '@angular/core';
import { LocationDTO } from 'src/app/entity/LocationDTO';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  locations: LocationDTO[] = [];

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    // this.adminService.getLocations().subscribe((locations) => (this.locations = locations))
    this.adminService.getLocations().subscribe((locations) => {
      this.locations = locations
      console.log(locations)
    })
  
  }

}
