import { Component, OnInit } from '@angular/core';
import { AdvertService } from 'src/app/services/advert.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Fuel } from 'src/app/models/fuel';
import { Model } from 'src/app/models/model';
import { Brand } from 'src/app/models/brand';
import { Advert } from 'src/app/models/advert';

@Component({
  selector: 'app-advert-list-display',
  templateUrl: './advert-list-display.component.html',
  styleUrls: ['./advert-list-display.component.css']
})
export class AdvertListDisplayComponent implements OnInit {
  public adverts: Advert[];
  public filteredAdverts: Advert[];

  public brands: Brand[];
  public models: Model[];
  public relatedModels: Model[];
  public fuels: Fuel[];

  public years: number[];
  public kms: number[];
  public prices: number[];

  public selectedBrandId: number;
  public selectedModelId: number;
  public selectedFuelId: number;
  public selectedMinYear: number;
  public selectedMaxYear: number;
  public selectedMinKm: number;
  public selectedMaxKm: number;
  public selectedMinPrice: number;
  public selectedMaxPrice: number;

  public myYearRange: number[];
  public myKmRange: number[];
  public myPriceRange: number[];
  constructor(private _advertService: AdvertService, private _domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this._advertService.getAllAdvertsForMainView()
      .subscribe(
        res => {
          this.adverts = res;
          this.filteredAdverts = this.adverts;
        },
        err => console.log(err)
      );

    // get filters
    this._advertService.getFuels()
      .subscribe(
        res => {
          this.fuels = res;
        },
        err => console.log(err)
      );
    this._advertService.getModels()
      .subscribe(
        res => {
          this.models = res;
          this.relatedModels = this.models;
        },
        err => console.log(err)
      );
    this._advertService.getBrands()
      .subscribe(
        res => {
          this.brands = res;
        },
        err => console.log(err)
      );
    this.years = this._advertService.getYears();
    this.kms = this._advertService.getKms();
    this.prices = this._advertService.getPrices();

  }
  onChange(optionBrandValue) {
    this.relatedModels = this.models.filter(function (m) {
      return m.brand_id == optionBrandValue;
    })
  }

  onFilter() {
    this.filteredAdverts = this.adverts;
    if (this.selectedBrandId !== undefined){
      this.filteredAdverts = this.adverts.filter((a) => {
        return a.brand_id == this.selectedBrandId;
      })
    }
    if (this.selectedModelId !== undefined){
      this.filteredAdverts = this.filteredAdverts.filter((a) => {
        return a.model_id == this.selectedModelId;
      })
    }
    if (this.selectedFuelId !== undefined){
      this.filteredAdverts = this.filteredAdverts.filter((a) => {
        return a.fuel_id == this.selectedFuelId;
      })
    }
    if (this.selectedMinYear !== undefined){
      this.filteredAdverts = this.filteredAdverts.filter((a) => {
        return a.year_started_at >= this.selectedMinYear;
      })
    }
    if (this.selectedMaxYear !== undefined){
      this.filteredAdverts = this.filteredAdverts.filter((a) => {
        return a.year_started_at >= this.selectedMaxYear;
      })
    }
    if (this.selectedMinKm !== undefined){
      this.filteredAdverts = this.filteredAdverts.filter((a) => {
        return a.km >= this.selectedMinKm;
      })
    }
    if (this.selectedMaxKm !== undefined){
      this.filteredAdverts = this.filteredAdverts.filter((a) => {
        return a.km >= this.selectedMaxKm;
      })
    }
    if (this.selectedMinPrice !== undefined){
      this.filteredAdverts = this.filteredAdverts.filter((a) => {
        return a.price >= this.selectedMinPrice;
      })
    }
    if (this.selectedMaxPrice !== undefined){
      this.filteredAdverts = this.filteredAdverts.filter((a) => {
        return a.price >= this.selectedMaxPrice;
      })
    }
    
  }



  onFilterClear(){
    this.selectedBrandId = undefined;
    this.selectedModelId = undefined;
    this.selectedFuelId = undefined;
    this.selectedMinYear = undefined;
    this.selectedMaxYear = undefined;
    this.selectedMinKm = undefined;
    this.selectedMaxKm = undefined;
    this.selectedMinPrice = undefined;
    this.selectedMaxPrice = undefined;
    this.filteredAdverts = this.adverts;
  }

}
