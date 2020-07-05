import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-shared-header',
  templateUrl: './shared-header.component.html',
  styleUrls: ['./shared-header.component.css']
})
export class SharedHeaderComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

}
