import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProProfilComponent } from './components/pro-profil/pro-profil.component';
import { AuthGuard } from './guards/auth.guard';
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
import { AdvertListDisplayComponent } from './components/advert-list-display/advert-list-display.component';
import { AdvertDetailDisplayComponent } from './components/advert-detail-display/advert-detail-display.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserLoginComponent } from './components/user-login/user-login.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/annonce',
    pathMatch: 'full'
  },
  {
    path: 'annonce',
    component: AdvertListDisplayComponent
  },
  {
    path: 'annonce/detail/:advertId',
    component: AdvertDetailDisplayComponent
  },
  {
    path: 'annonce/add/:garageId',
    component: AdvertAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'annonce/edit/:advertId',
    component: AdvertEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'garage/add',
    component: GarageAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'garage/edit/:garageId',
    component: GarageEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/add',
    component: UserRegisterComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/edit/:userId',
    component: UserEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'connecxion',
    component: UserLoginComponent
  },
  {
    path: 'pro/profil',
    component: ProProfilComponent,
    children: [
      {
        path: 'proprofilcompte',
        component: ProProfilCompteComponent
      },
      {
        path: 'proprofilgarage',
        component: ProProfilGarageComponent
      },
      {
        path: 'proprofiladvert',
        component: ProProfilAdvertComponent
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/dashboard',
    component: DashboardComponent,
    children: [
      { path: 'dbpro', component: DashboardProComponent},
      { path: 'dbgarage', component: DashboardGarageComponent },
      { path: 'dbadvert', component: DashboardAdvertComponent }
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
