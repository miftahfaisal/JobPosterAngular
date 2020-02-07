import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicantprofileComponent } from './applicantprofile/applicantprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { EducationeditComponent } from './educationedit/educationedit.component';
import { WorkexperienceeditComponent } from './workexperienceedit/workexperienceedit.component';
import { SkilleditComponent } from './skilledit/skilledit.component';
import { ApplicationlistComponent } from './applicationlist/applicationlist.component';
import { ResumeComponent } from './resume/resume.component';
import { SearchjobsComponent } from './searchjobs/searchjobs.component';
import { ProjecteditComponent } from './projectedit/projectedit.component';
import { ApplicantdocumentComponent } from './applicantdocument/applicantdocument.component';


const routes: Routes = [
  {
    path: 'myprofile', component : ApplicantprofileComponent
  },{
    path: 'edit-profile', component : EditprofileComponent
  },{
    path: 'edit-education', component : EducationeditComponent
  },{
    path: 'edit-work-experience', component : WorkexperienceeditComponent
  },{
    path: 'edit-skill', component : SkilleditComponent
  },{
    path: 'application-list', component : ApplicationlistComponent
  },{
    path: 'resume', component : ResumeComponent
  },{
    path: 'search-job', component : SearchjobsComponent
  },{
    path: 'edit-project', component : ProjecteditComponent
  },{
    path: 'document', component : ApplicantdocumentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantRoutingModule { }
