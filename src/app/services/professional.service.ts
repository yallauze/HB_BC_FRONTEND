import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  private _adminUrl: string = "http://localhost:80/BC/CentreAutoCCas_api/public/index.php/admin/professional";
  private _proUrl: string = "http://localhost:80/BC/CentreAutoCCas_api/public/index.php/pro/professional";
  constructor(private _httpClient: HttpClient, private _authService: AuthService) { }

  adminGetProfessionals(): Observable<any[]> {
    return this._httpClient.get<any[]>(this._adminUrl).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  adminGetProfessionalById(proId): Observable<any> {
    return this._httpClient.get<any>(`${this._adminUrl}/${proId}`).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  adminUpdateProfessionalById(pro_object): Observable<any> {
    return this._httpClient.put<any>(`${this._adminUrl}/${pro_object.id}`, pro_object).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  adminDeleteProfessionalById(proId): Observable<any> {
    return this._httpClient.delete<any>(`${this._adminUrl}/${proId}`).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

    // Admin get statics
    adminGetNbTotalProfessionals(): Observable<any> {
      return this._httpClient.get<any>(`${this._adminUrl}/total`).pipe(
        retry(1),
        catchError(this.errorHandler)
      );
    }


  proGetProfessional(): Observable<any> {
    //à utiliser pour admin lors qu'il veux un pro info
    return this._httpClient.get<any>(`${this._proUrl}`).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  proUpdateProfessional(pro_object): Observable<any> {
    //à utiliser pour admin lors qu'il veux un pro info
    return this._httpClient.put<any>(`${this._proUrl}`, pro_object).pipe(
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
