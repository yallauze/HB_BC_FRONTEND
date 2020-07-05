import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  public registerUserData = {};
  constructor(private _authService: AuthService, private _router: Router) { }
  ngOnInit() {

  }

  onSubmit() {
    console.log(this.registerUserData);

    this._authService.adminRegisterUser(this.registerUserData)
      .subscribe(
        res => {
         this._router.navigate(['/admin/dashboard', { section_name: 'pro' }]); // si section_name non précisé, c'est pro par default
        },
        err => console.log(err)
      );
  }

}
