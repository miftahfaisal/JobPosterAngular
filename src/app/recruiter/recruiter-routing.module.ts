import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecruiterhomepageComponent } from './recruiterhomepage/recruiterhomepage.component';
import { JobpostingComponent } from './jobposting/jobposting.component';
import { JobpostingdetailComponent } from './jobpostingdetail/jobpostingdetail.component';
import { JobpostingeditComponent } from './jobpostingedit/jobpostingedit.component';


const routes: Routes = [
  {
    path: 'homepage', component : RecruiterhomepageComponent
  },{
    path: 'job-posting', component : JobpostingComponent
  },{
    path: 'job-posting/detail/:id', component : JobpostingdetailComponent
  },{
    path: 'job-posting/edit/:id', component: JobpostingeditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruiterRoutingModule { }
