import { Component, OnInit } from '@angular/core';
import { Garage } from 'src/app/models/garage';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GarageService } from 'src/app/services/garage.service';

@Component({
  selector: 'app-garage-add',
  templateUrl: './garage-add.component.html',
  styleUrls: ['./garage-add.component.css']
})
export class GarageAddComponent implements OnInit {

  public addGarage: Garage;
  public proId: number = null;
  public proFullname: string = "";

  constructor(private _authService: AuthService, private _activatedRoute: ActivatedRoute, private _router: Router, private _garageService: GarageService) { }

  ngOnInit() {
    this.addGarage = new Garage();
    if (this._authService.getRole() === "ROLE_ADMIN") {
      this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
        this.proId = +params.get('proId');
        this.proFullname = params.get('proFullname');
      });
    }
  }

  onSubmit() {
    if (this._authService.getRole() === "ROLE_ADMIN") {
      this._garageService.adminAddGarageByProId(this.addGarage, this.proId)
        .subscribe(
          res => {
            console.log(res);
            this._router.navigate(['/admin/dashboard', {section_name: 'garage'}]);
          },
          err => console.log(err)
        );
    }

    if (this._authService.getRole() === "ROLE_PRO") {
      this._garageService.proAddGarage(this.addGarage)
        .subscribe(
          res => {
            console.log(res);
            this._router.navigate(['/pro/profil', {section_name: 'garage'}]);
          },
          err => console.log(err)
        );
    }

  }

}
