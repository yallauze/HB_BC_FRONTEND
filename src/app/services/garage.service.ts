import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GarageService {

  private _adminGarageUrl: string = "http://localhost:80/BC/CentreAutoCCas_api/public/index.php/admin/garage";
  private _proGarageUrl: string = "http://localhost:80/BC/CentreAutoCCas_api/public/index.php/pro/garage";
  constructor(private _httpClient: HttpClient) { }
  
  // Admin Add garage for a professional
  adminAddGarageByProId(garageObject, proId): Observable<any> {
    return this._httpClient.post<any>(`${this._adminGarageUrl}/pro/${proId}`, garageObject).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  // Admin Get All Garages From All pros
  adminGetGarages(): Observable<any[]> {
    return this._httpClient.get<any[]>(`${this._adminGarageUrl}`).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  // Admin Get All Garages From one pro
  adminGetGaragesByProId(proId): Observable<any[]> {
    return this._httpClient.get<any[]>(`${this._adminGarageUrl}/pro/${proId}`).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  // Admin Get Garage by garageId
  adminGetGarageByGarageId(garageId): Observable<any> {
    return this._httpClient.get<any>(`${this._adminGarageUrl}/${garageId}`).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  // Admin Get Garage by garageId
  adminUpdateGarageByGarageId(garageObject): Observable<any> {
    return this._httpClient.put<any>(`${this._adminGarageUrl}/${garageObject.id}`, garageObject).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  // Admin Get Garage by garageId
  adminDeleteGarageByGarageId(garageId): Observable<any> {
    return this._httpClient.delete<any>(`${this._adminGarageUrl}/${garageId}`).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  // Admin get statics
  adminGetNbTotalGarages(): Observable<any> {
    return this._httpClient.get<any>(`${this._adminGarageUrl}/total`).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }


  // Pro Add garage
  proAddGarage(garageObject): Observable<any> {
    return this._httpClient.post<any>(`${this._proGarageUrl}`, garageObject).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  // Pro Get garages
  proGetGarages(): Observable<any[]> {
    return this._httpClient.get<any[]>(this._proGarageUrl).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  // Pro Get One Garage
  proGetGarageByGarageId(garageId): Observable<any> {
    return this._httpClient.get<any>(`${this._proGarageUrl}/${garageId}`).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  
  // Pro Update One Garage
  proUpdateGarageByGarageId(garageObject): Observable<any> {
    return this._httpClient.put<any>(`${this._proGarageUrl}/${garageObject.id}`, garageObject).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  // Pro Delete One Garage
  proDeletGarageByGarageId(garageId): Observable<any> {
    return this._httpClient.delete<any>(`${this._proGarageUrl}/${garageId}`).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
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
