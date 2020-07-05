import { Component, OnInit } from '@angular/core';
import { Advert } from 'src/app/models/advert';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AdvertService } from 'src/app/services/advert.service';
import { Fuel } from 'src/app/models/fuel';
import { Model } from 'src/app/models/model';
import { Brand } from 'src/app/models/brand';

@Component({
  selector: 'app-advert-edit',
  templateUrl: './advert-edit.component.html',
  styleUrls: ['./advert-edit.component.css']
})
export class AdvertEditComponent implements OnInit {

  public editAdvert: Advert;
  public editAdvertId: number = null; // to add to every creation of advert
  public garageName: string = ""; // to display for info lors de la creation for pro/admin
  public fuels: Fuel[];
  public years: number[];
  public models: Model[];
  public filteredModels: Model[];
  public brands: Brand[];

  uploadedphotos = [];
  editAdvertPhotos = [];
  constructor(private _authService: AuthService, 
              private _activatedRoute: ActivatedRoute, 
              private _advertService: AdvertService,
              private _router: Router
              ) { }


  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.garageName = params.get('garageName');
    });

    this.editAdvertId = +this._activatedRoute.snapshot.paramMap.get('advertId');
    if (this._authService.getRole() === "ROLE_ADMIN") {
      this._advertService.adminGetAdvertByAdvertId(this.editAdvertId)
        .subscribe(
          res => this.editAdvert = res,
          err => console.log(err)
        );
    }
    if (this._authService.getRole() === "ROLE_PRO") {
      this._advertService.proGetAdvertByAdvertId(this.editAdvertId)
        .subscribe(
          res => this.editAdvert = res,
          err => console.log(err)
        );
    }

    console.log(this.editAdvert);

    this._advertService.getPhotosByAdvertId(this.editAdvertId)
      .subscribe(
        res => {
          res.forEach(e => this.editAdvertPhotos.push(e.photo));
        },
        err => console.log(err)
      );

    //get 
    this._advertService.getFuels()
      .subscribe(
        res => this.fuels = res,
        err => console.log(err)
      );
    this._advertService.getModels()
      .subscribe(
        res => {
          this.models = res;
          this.filteredModels = this.models;
        },
        err => console.log(err)
      );
    this._advertService.getBrands()
      .subscribe(
        res => this.brands = res,
        err => console.log(err)
      );
    this.years = this._advertService.getYears();
  }


  onChange(optionBrandValue) {
    this.filteredModels = this.models.filter(function (m) {
      return m.brand_id == optionBrandValue;
    })
  }

  onSubmit() {
    this.editAdvert.photos = this.editAdvertPhotos.concat(this.uploadedphotos);
    if (this._authService.getRole() === "ROLE_ADMIN") {
      this._advertService.adminUpdateAdvertByAdvertId(this.editAdvert)
        .subscribe(
          res => {
            console.log(res);
            // redirect back to admin
            this._router.navigate(['/admin/dashboard', { section_name: 'advert' }]); // si section_name non précisé, c'est pro par default
          },
          err => console.log(err)
        );
    }

    if (this._authService.getRole() === "ROLE_PRO") {
      this._advertService.proUpdateAdvertByAdvertId(this.editAdvert)
      .subscribe(
        res => {
          console.log(res);
          // redirect back to the pro_profil_compte
          this._router.navigate(['/pro/profil', { section_name: 'advert' }]); // si section_name non précisé, c'est compte par default
        },
        err => console.log(err)
      );
    }
  }

  // Images
  public picked(event) {
    this.uploadedphotos = [];
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      for (let i = 0; i < fileList.length; i++) {
        let file: File = fileList[i];
        this.handleInputChange(file);
      }
    }
  }

  handleInputChange(file) {
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    let reader = e.target;
    var base64result = reader.result.substr(reader.result.indexOf(',') + 1);
    this.uploadedphotos.push(base64result);
  }

  onDeletePhotos(i){
    this.editAdvertPhotos.splice(i, 1);
  }

}
