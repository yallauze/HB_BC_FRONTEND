import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ProProfilComponent } from './components/pro-profil/pro-profil.component';
import { ApiTokenInterceptorService } from './services/api-token-interceptor.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardProComponent } from './components/dashboard-pro/dashboard-pro.component';
import { DashboardGarageComponent } from './components/dashboard-garage/dashboard-garage.component';
import { DashboardAdvertComponent } from './components/dashboard-advert/dashboard-advert.component';
import { ProProfilCompteComponent } from './components/pro-profil-compte/pro-profil-compte.component';
import { ProProfilGarageComponent } from './components/pro-profil-garage/pro-profil-garage.component';
import { ProProfilAdvertComponent } from './components/pro-profil-advert/pro-profil-advert.component';
import { GarageAddComponent } from './components/garage-add/garage-add.component';
import { GarageEditComponent } from './components/garage-edit/garage-edit.component';
import { AdvertAddComponent } from './components/advert-add/advert-add.component';
import { AdvertEditComponent } from './components/advert-edit/advert-edit.component';
import { NpnSliderModule } from "npn-slider";
import { AdvertListDisplayComponent } from './components/advert-list-display/advert-list-display.component';
import { AdvertDetailDisplayComponent } from './components/advert-detail-display/advert-detail-display.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { SharedHeaderComponent } from './components/shared-header/shared-header.component';
import { SharedFooterComponent } from './components/shared-footer/shared-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProProfilComponent,
    DashboardComponent,
    DashboardProComponent,
    DashboardGarageComponent,
    DashboardAdvertComponent,
    ProProfilCompteComponent,
    ProProfilGarageComponent,
    ProProfilAdvertComponent,
    GarageAddComponent,
    GarageEditComponent,
    AdvertAddComponent,
    AdvertEditComponent,
    AdvertListDisplayComponent,
    AdvertDetailDisplayComponent,
    UserEditComponent,
    UserRegisterComponent,
    UserLoginComponent,
    SharedHeaderComponent,
    SharedFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FormsModule,
    HttpClientModule,
    NpnSliderModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiTokenInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
