import { Component, OnInit } from '@angular/core';
import { AdvertService } from 'src/app/services/advert.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-advert-detail-display',
  templateUrl: './advert-detail-display.component.html',
  styleUrls: ['./advert-detail-display.component.css']
})
export class AdvertDetailDisplayComponent implements OnInit {

  public advert = {};
  public photos = [];
  constructor(private _advertService: AdvertService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // get the id from the url
    let advertId = +this._activatedRoute.snapshot.paramMap.get('advertId')
    this._advertService.getOneAdvertForDetailView(advertId)
      .subscribe(
        res => {
          this.advert = res;
        },
        err => console.log(err)
      );
    this._advertService.getPhotosByAdvertId(advertId)
      .subscribe(
        res => {
          res.forEach(e => this.photos.push(e.photo));
        },
        err => console.log(err)
      );
  }

}
