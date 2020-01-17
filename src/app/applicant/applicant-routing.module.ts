import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicantprofileComponent } from './applicantprofile/applicantprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { EducationComponent } from './education/education.component';
import { EducationeditComponent } from './educationedit/educationedit.component';
import { WorkexperienceComponent } from './workexperience/workexperience.component';
import { WorkexperienceeditComponent } from './workexperienceedit/workexperienceedit.component';
import { SkillComponent } from './skill/skill.component';
import { SkilleditComponent } from './skilledit/skilledit.component';
import { ApplicationlistComponent } from './applicationlist/applicationlist.component';
import { ResumeComponent } from './resume/resume.component';


const routes: Routes = [
  {
    path: 'myprofile', component : ApplicantprofileComponent
  },{
    path: 'edit-profile', component : EditprofileComponent
  },{
    path: 'education', component : EducationComponent
  },{
    path: 'edit-education', component : EducationeditComponent
  },{
    path: 'work-experience', component : WorkexperienceComponent
  },{
    path: 'edit-work-experience', component : WorkexperienceeditComponent
  },{
    path: 'skill', component : SkillComponent
  },{
    path: 'edit-skill', component : SkilleditComponent
  },{
    path: 'application-list', component : ApplicationlistComponent
  },{
    path: 'resume', component : ResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantRoutingModule { }
