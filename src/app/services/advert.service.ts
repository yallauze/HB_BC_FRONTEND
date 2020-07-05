import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Advert } from '../models/advert';
import { Fuel } from '../models/fuel';
import { Model } from '../models/model';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {
  private _advertUrl: string = "http://localhost:80/BC/CentreAutoCCas_api/public/index.php/advert";
  private _fuelUrl: string = "http://localhost:80/BC/CentreAutoCCas_api/public/index.php/fuel";
  private _modelUrl: string = "http://localhost:80/BC/CentreAutoCCas_api/public/index.php/model";
  private _brandUrl: string = "http://localhost:80/BC/CentreAutoCCas_api/public/index.php/brand";
  private _admin_advertUrl: string = "http://localhost:80/BC/CentreAutoCCas_api/public/index.php/admin/advert";
  private _pro_advertUrl: string = "http://localhost:80/BC/CentreAutoCCas_api/public/index.php/pro/advert";

  constructor(private _httpClient: HttpClient) { }
  // for public => with limited info with one photo
  getAllAdvertsForMainView(): Observable<any[]> {
    return this._httpClient.get<any[]>(this._advertUrl).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  // for public => with limited info with all photos
  getOneAdvertForDetailView(advertId: number): Observable<any> {
    return this._httpClient.get<any>(`${this._advertUrl}/${advertId}`).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  // admin get all adverts
  adminGetAllAdverts(): Observable<Advert[]> {
    return this._httpClient.get<Advert[]>(`${this._admin_advertUrl}`).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  // admin get one advert
  adminGetAdvertByAdvertId(advertId): Observable<Advert> {
    return this._httpClient.get<Advert>(`${this._admin_advertUrl}/${advertId}`).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  // admin add one advert
  adminAddAdvert(advert: Advert): Observable<Advert> {
    return this._httpClient.post<Advert>(`${this._admin_advertUrl}`, advert).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  // admin update one advert
  adminUpdateAdvertByAdvertId(updateAdvert: Advert): Observable<Advert> {
    return this._httpClient.put<Advert>(`${this._admin_advertUrl}/${updateAdvert.id}`, updateAdvert).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  // admin delete one advert
  adminDeleteAdvertByAdvertId(deleteAdvertId): Observable<Advert> {
    return this._httpClient.delete<Advert>(`${this._admin_advertUrl}/${deleteAdvertId}`).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  // Admin get statics
  adminGetNbTotalAdverts(): Observable<any> {
    return this._httpClient.get<any>(`${this._admin_advertUrl}/total`).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  // pro
  // pro get all adverts
  proGetAllAdverts(): Observable<Advert[]> {
    return this._httpClient.get<Advert[]>(`${this._pro_advertUrl}`).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  // pro get one advert
  proGetAdvertByAdvertId(advertId): Observable<Advert> {
    return this._httpClient.get<Advert>(`${this._pro_advertUrl}/${advertId}`).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  // pro add one advert
  proAddAdvert(advert: Advert): Observable<Advert> {
    return this._httpClient.post<Advert>(`${this._pro_advertUrl}`, advert).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  // pro update one advert
  proUpdateAdvertByAdvertId(updateAdvert: Advert): Observable<Advert> {
    return this._httpClient.put<Advert>(`${this._pro_advertUrl}/${updateAdvert.id}`, updateAdvert).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  // pro delete one advert
  proDeleteAdvertByAdvertId(deleteAdvertId): Observable<Advert> {
    return this._httpClient.delete<Advert>(`${this._pro_advertUrl}/${deleteAdvertId}`).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }



  // get all the photos by advertId
  getPhotosByAdvertId(advertId): Observable<any[]> {
    return this._httpClient.get<any[]>(`${this._advertUrl}/photo/${advertId}`).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  // get all the fuels
  getFuels(): Observable<Fuel[]> {
    return this._httpClient.get<Fuel[]>(`${this._fuelUrl}`).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  // get all the models
  getModels(): Observable<Model[]> {
    return this._httpClient.get<Model[]>(`${this._modelUrl}`).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  // get all the models
  getBrands(): Observable<Brand[]> {
    return this._httpClient.get<Brand[]>(`${this._brandUrl}`).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  // get all the years
  getYears() {
    let currentYear = (new Date()).getFullYear();
    let years = [];
    for (let i = 20; i > 0; i--) {
      years.push(currentYear);
      currentYear = currentYear - 1;
    }
    return years;
  }
  // get all the kms
  getKms() {
    let kms = [];
    for (let i = 0; i <= 30000; i += 1000) {
      kms.push(i);
    }
    return kms;
  }
  // get all the prices
  getPrices() {
    let prices = [];
    for (let i = 0; i <= 20000; i += 500) {
      prices.push(i);
    }
    return prices;
  }

  errorHandler(_error: HttpErrorResponse) {
    if (_error.error instanceof ErrorEvent) { // Get client-side error
      console.error(`A client side error occurred: ${_error.error.message}`);
    } else { // Get server-side error
      console.error(
        `Backend returned code ${_error.status}, ` +
        `body was: ${_error.error}`);
    }
    return throwError(`Something bad happened (error code: ${_error.status}); please try again later.`);
  }

}
