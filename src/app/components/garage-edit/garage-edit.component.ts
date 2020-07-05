import { Component, OnInit } from '@angular/core';
import { Garage } from 'src/app/models/garage';
import { GarageService } from 'src/app/services/garage.service';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-garage-edit',
  templateUrl: './garage-edit.component.html',
  styleUrls: ['./garage-edit.component.css']
})
export class GarageEditComponent implements OnInit {

  public editGarage: Garage;

  constructor(private _garageService: GarageService, private _authService: AuthService, private _activatedRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    let editGarageId = +this._activatedRoute.snapshot.paramMap.get('garageId');
    if (this._authService.getRole() === "ROLE_ADMIN") {
      this._garageService.adminGetGarageByGarageId(editGarageId)
        .subscribe(
          res => this.editGarage = res,
          err => console.log(err)
        );
    }
    if (this._authService.getRole() === "ROLE_PRO") {
      this._garageService.proGetGarageByGarageId(editGarageId)
        .subscribe(
          res => this.editGarage = res,
          err => console.log(err)
        );
    }
  }


  onSubmit() {
    if (this._authService.getRole() === "ROLE_ADMIN") {
      this._garageService.adminUpdateGarageByGarageId(this.editGarage)
        .subscribe(
          res => {
            console.log(res);
            // redirect back to the pro_profil_compte
            this._router.navigate(['/admin/dashboard', {section_name: 'garage'}]); // si section_name non précisé, c'est pro par default
          },
          err => console.log(err)
        );
    }

    if (this._authService.getRole() === "ROLE_PRO") {
      this._garageService.proUpdateGarageByGarageId(this.editGarage)
        .subscribe(
          res => {
            console.log(res);
            // redirect back to the pro_profil_compte
            this._router.navigate(['/pro/profil', { section_name: 'garage' }]); // si section_name non précisé, c'est compte par default
          },
          err => console.log(err)
        );
    }

  }

}
