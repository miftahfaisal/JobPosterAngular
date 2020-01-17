import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { SearchjobComponent } from './searchjob/searchjob.component';


const routes: Routes = [
  {
    path: '', component: HomepageComponent
  },{
    path: 'sign-up', component: SignupComponent
  },{
    path: 'search-job', component: SearchjobComponent
  },{
    path: 'applicant', loadChildren : () => import('./applicant/applicant.module').then(m => m.ApplicantModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
