import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessionalService } from 'src/app/services/professional.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  public editUserData = {};
  public editPro: boolean;
  public editUserId: number;
  public loggedInUserRole: string;
  constructor(private _authService: AuthService, private _activatedRoute: ActivatedRoute, private _proService: ProfessionalService, private _router: Router) { }

  ngOnInit() {
    // Get the user à editer
    let id = +this._activatedRoute.snapshot.paramMap.get('userId');
    if (this._authService.getRole() === "ROLE_ADMIN") {
      this.loggedInUserRole = "ROLE_ADMIN";
      this._proService.adminGetProfessionalById(id)
        .subscribe(
          res => {
            this.editUserData = res;
            this.editPro = this.editUserData["siretNumber"] ? true : false;
            this.editUserId = this.editUserData["id"]
          },
          err => console.log(err)
        );
    } else if (this._authService.getRole() === "ROLE_PRO") {
      this.loggedInUserRole = "ROLE_PRO";
      console.log(id);
      this._proService.proGetProfessional()
        .subscribe(
          res => {
            this.editUserData = res;
            this.editPro = this.editUserData["siretNumber"] ? true : false;
            this.editUserId = this.editUserData["id"]
          },
          err => console.log(err)
        );
    }

  }


  onSubmit() {
    console.log(this.editUserData);
    if (this.loggedInUserRole === "ROLE_PRO") {
      this._proService.proUpdateProfessional(this.editUserData)
        .subscribe(
          res => {
            this._router.navigate(['/pro/profil', { section_name: 'compte' }]); // si section_name non précisé, c'est compte par default
          },
          err => console.log(err)
        );
    } else if (this.loggedInUserRole === "ROLE_ADMIN") {
      this._proService.adminUpdateProfessionalById(this.editUserData)
        .subscribe(
          res => {
            this._router.navigate(['/admin/dashboard', { section_name: 'pro' }]); // si section_name non précisé, c'est pro par default
          },
          err => console.log(err)
        );
    }
  }




}
