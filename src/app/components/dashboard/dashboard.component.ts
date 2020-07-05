import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public section_pro = true;
  public section_garage = false;
  public section_advert = false;
  public section_name: string;

  constructor(private _router: Router, 
              private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // if there is an optional param, then navigate to the corresponding child
    this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.section_name = params.get('section_name');
    });
    if(this.section_name){
      this.changeSection(this.section_name);
    } else {
      this.changeSection('pro');
    }

  }
  changeSection(section){
    switch(section) {
      case 'pro':
        this.section_pro = true;
        this.section_garage = false;
        this.section_advert = false;
        this._router.navigate(['dbpro'], {relativeTo: this._activatedRoute});
        break;
      case 'garage':
        this.section_pro = false;
        this.section_garage = true;
        this.section_advert = false;
        this._router.navigate(['dbgarage'], {relativeTo: this._activatedRoute});
        break;
      case 'advert':
        this.section_pro = false;
        this.section_garage = false;
        this.section_advert = true;
        this._router.navigate(['dbadvert'], {relativeTo: this._activatedRoute});
        break;
    }
  }

}
