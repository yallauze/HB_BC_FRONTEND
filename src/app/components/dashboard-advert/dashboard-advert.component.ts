import { Component, OnInit } from '@angular/core';
import { AdvertService } from 'src/app/services/advert.service';

@Component({
  selector: 'app-dashboard-advert',
  templateUrl: './dashboard-advert.component.html',
  styleUrls: ['./dashboard-advert.component.css']
})
export class DashboardAdvertComponent implements OnInit {

  public adverts = [];
  public filteredAdverts = [];
  public nb_advert: number;
  constructor(private _advertService: AdvertService) { }

  ngOnInit() {
    this._advertService.adminGetAllAdverts()
      .subscribe(
        res => {
          this.adverts = res;
          this.filteredAdverts = this.adverts;
          this.nb_advert = this.adverts.length;
        },
        err => console.log(err)
      );
  }

  onDelete(advertId){
    this._advertService.adminDeleteAdvertByAdvertId(advertId)
    .subscribe(
      res => {
        console.log(res);
        this._advertService.adminGetAllAdverts()
          .subscribe(
            res => {
              this.adverts = res;
              this.filteredAdverts = this.adverts;
            },
            err => console.log(err)
          );
      },
      err => console.log(err)
    )
  }

  onFilter(_id){
    this.filteredAdverts = this.adverts;
    if (_id != 0){
      this.filteredAdverts = this.adverts.filter((a) => {
        return a.id == _id;
      })
    }
  }

}
