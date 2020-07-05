import { Component, OnInit } from '@angular/core';
import { ProfessionalService } from 'src/app/services/professional.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pro-profil-compte',
  templateUrl: './pro-profil-compte.component.html',
  styleUrls: ['./pro-profil-compte.component.css']
})
export class ProProfilCompteComponent implements OnInit {

  public pro = {};
  public is_editing = false;
  constructor(private _proService: ProfessionalService, private _router: Router) { }

  ngOnInit() {
    //getProfessionals will return my own account
    this._proService.proGetProfessional()
      .subscribe(
        res => {
          this.pro = res;
          console.log(this.pro);
        },
        err => console.log(err)
      );
  }

}
