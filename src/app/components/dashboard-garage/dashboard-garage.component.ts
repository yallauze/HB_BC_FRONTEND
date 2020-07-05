import { Component, OnInit } from '@angular/core';
import { GarageService } from 'src/app/services/garage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-garage',
  templateUrl: './dashboard-garage.component.html',
  styleUrls: ['./dashboard-garage.component.css']
})
export class DashboardGarageComponent implements OnInit {
  public garages = [];
  public nb_garage: number;
  constructor(private _garageService: GarageService, private _router: Router) { }

  ngOnInit() {
    this._garageService.adminGetGarages()
      .subscribe(
        res => {
          this.garages = res;
          this.nb_garage = this.garages.length;
        },
        err => console.log(err)
      );
  }

  onDelete(garageId) {
    this._garageService.adminDeleteGarageByGarageId(garageId)
      .subscribe(
        res => {
          this._garageService.adminGetGarages()
            .subscribe(
              res => {
                this.garages = res;
              },
              err => console.log(err)
            );
        },
        err => console.log(err)
      );
  }

}
