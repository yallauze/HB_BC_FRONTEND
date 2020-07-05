import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _adminUserUrl: string = "http://localhost:80/BC/CentreAutoCCas_api/public/index.php/admin/user";
  private _loginUserUrl: string = "http://localhost:80/BC/CentreAutoCCas_api/public/index.php/login";
  constructor(private _httpClient: HttpClient, private _router: Router) { }

  // Add a new user les méthodes nécessaires liées à l'authentication
  adminRegisterUser(resgisterUserData): Observable<any> {
    return this._httpClient.post<any>(this._adminUserUrl, resgisterUserData).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  // public endpoint for connection
  loginUser(loginUserData): Observable<any> {
    return this._httpClient.post<any>(this._loginUserUrl, loginUserData).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  //Local information about the connected user (Only Local, infos used for frontend component display)
  // Attention, this is only for displaying pages, 
  // to get the real data from database, ApiToken is checked on the backend
  checkIfLoggedIn() {
    return !!localStorage.getItem('apiToken');
  }
  getToken() {
    if (this.checkIfLoggedIn()) {
      return localStorage.getItem('apiToken');
    } else {
      return "";
    }
  }
  getUsername() {
    if (this.checkIfLoggedIn()) {
      return localStorage.getItem('username');
    } else {
      return "";
    }
  }
  getRole() {
    if (this.checkIfLoggedIn()) {
      return localStorage.getItem('roles');
    } else {
      return "";
    }
  }
  logoutUser() {
    localStorage.clear();
    this._router.navigate(['/annonce']);
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
