import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {


  public loginUserData = {};
  
  constructor(private _authservice: AuthService, private _router: Router) { }
  ngOnInit() {
  }

  onSubmit(){
    console.log(this.loginUserData);
    this._authservice.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('apiToken', res.apiToken);
          localStorage.setItem('roles', res.roles[0]);
          localStorage.setItem('username', res.username);
          // Navigate the user if needed
          if (res.roles[0] == 'ROLE_PRO'){
            this._router.navigate(['/pro/profil']);
          } else if(res.roles[0] == 'ROLE_ADMIN'){
            this._router.navigate(['/admin/dashboard']);
          }
        },
        err => console.log(err)
      );
  }

}
