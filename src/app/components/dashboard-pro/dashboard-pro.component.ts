import { Component, OnInit } from '@angular/core';
import { ProfessionalService } from 'src/app/services/professional.service';

@Component({
  selector: 'app-dashboard-pro',
  templateUrl: './dashboard-pro.component.html',
  styleUrls: ['./dashboard-pro.component.css']
})
export class DashboardProComponent implements OnInit {

  public pros = [];
    // Statistics
    public nb_professional: number;
  constructor(private _proService: ProfessionalService) { }

  ngOnInit() {
    this._proService.adminGetProfessionals()
      .subscribe(
        res => { 
          this.pros = res; 
          this.nb_professional = this.pros.length;
        },
        err => console.log(err)
      );
  }

  onDelete(proId) {
    this._proService.adminDeleteProfessionalById(proId)
      .subscribe(
        res => {
          this._proService.adminGetProfessionals()
            .subscribe(
              res => { 
                this.pros = res; 
                console.log(this.pros);
              },
              err => console.log(err)
            );
        },
        err => console.log(err)
      );
  }
}
