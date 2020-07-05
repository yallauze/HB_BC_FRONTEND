import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiTokenInterceptorService implements HttpInterceptor {

  constructor(private _authService: AuthService) { }
  intercept(req: HttpRequest<any>, next:HttpHandler){
    if (this._authService.checkIfLoggedIn()){
      let tokenizedReq = req.clone({
        setHeaders: {
          'X-AUTH-TOKEN': this._authService.getToken()
        }
      });
      return next.handle(tokenizedReq);
    } 
    return next.handle(req);
  }
}

