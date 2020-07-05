import { Component, OnInit } from '@angular/core';
import { AdvertService } from 'src/app/services/advert.service';

@Component({
  selector: 'app-pro-profil-advert',
  templateUrl: './pro-profil-advert.component.html',
  styleUrls: ['./pro-profil-advert.component.css']
})
export class ProProfilAdvertComponent implements OnInit {

  public adverts = [];
  constructor(private _advertService: AdvertService) { }

  ngOnInit() {
    this._advertService.proGetAllAdverts()
      .subscribe(
        res => this.adverts = res,
        err => console.log(err)
      );
  }

  onDelete(advertId) {
    this._advertService.proDeleteAdvertByAdvertId(advertId)
      .subscribe(
        res => {
          console.log(res);
          this._advertService.proGetAllAdverts()
            .subscribe(
              res => this.adverts = res,
              err => console.log(err)
            );
        },
        err => console.log(err)
      )
  }

}
