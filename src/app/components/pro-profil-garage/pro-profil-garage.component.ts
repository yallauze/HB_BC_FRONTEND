import { Component, OnInit } from '@angular/core';
import { GarageService } from 'src/app/services/garage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pro-profil-garage',
  templateUrl: './pro-profil-garage.component.html',
  styleUrls: ['./pro-profil-garage.component.css']
})
export class ProProfilGarageComponent implements OnInit {

  public garages = [];
  constructor(private _garageService: GarageService, private _router: Router) { }

  ngOnInit() {
    this._garageService.proGetGarages()
      .subscribe(
        res => {
          this.garages = res;
        },
        err => console.log(err)
      );
  }


  onDelete(garageId) {
    this._garageService.proDeletGarageByGarageId(garageId)
      .subscribe(
        res => {
          console.log(res);
          this._garageService.proGetGarages()
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
