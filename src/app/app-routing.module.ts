import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { SearchjobComponent } from './searchjob/searchjob.component';
import { SearchjobdetailComponent } from './searchjobdetail/searchjobdetail.component';
import { SignuprecruiterComponent } from './signuprecruiter/signuprecruiter.component';


const routes: Routes = [
  {
    path: '', component: HomepageComponent
  },{
    path: 'sign-up', component: SignupComponent
  },{
    path: 'sign-up-recruiter', component : SignuprecruiterComponent
  },{
    path: 'search-job', component: SearchjobComponent
  },{
    path: 'search-job/detail/:id', component: SearchjobdetailComponent
  },{
    path: 'applicant', loadChildren : () => import('./applicant/applicant.module').then(m => m.ApplicantModule)
  },{
    path: 'recruiter', loadChildren : () => import('./recruiter/recruiter.module').then(m => m.RecruiterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
