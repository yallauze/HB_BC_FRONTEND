import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-pro-profil',
  templateUrl: './pro-profil.component.html',
  styleUrls: ['./pro-profil.component.css']
})
export class ProProfilComponent implements OnInit {

  public section_compte = true;
  public section_garage = false;
  public section_advert = false;
  public section_name: string;
  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {    
    // if there is an optional param, then navigate to the corresponding child
    this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.section_name = params.get('section_name');
    });
    if(this.section_name){
      this.changeSection(this.section_name);
    } else {
      this.changeSection('compte');
    }
    
  }

  changeSection(section){
    switch(section) {
      case 'compte':
        this.section_compte = true;
        this.section_garage = false;
        this.section_advert = false;
        this._router.navigate(['proprofilcompte'], {relativeTo: this._activatedRoute});
        break;
      case 'garage':
        this.section_compte = false;
        this.section_garage = true;
        this.section_advert = false;
        this._router.navigate(['proprofilgarage'], {relativeTo: this._activatedRoute});
        break;
      case 'advert':
        this.section_compte = false;
        this.section_garage = false;
        this.section_advert = true;
        this._router.navigate(['proprofiladvert'], {relativeTo: this._activatedRoute});
        break;
    }
  }

}
