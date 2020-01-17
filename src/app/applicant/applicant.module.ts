import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicantRoutingModule } from './applicant-routing.module';
import { ApplicantprofileComponent } from './applicantprofile/applicantprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { WorkexperienceComponent } from './workexperience/workexperience.component';
import { WorkexperienceeditComponent } from './workexperienceedit/workexperienceedit.component';
import { EducationComponent } from './education/education.component';
import { EducationeditComponent } from './educationedit/educationedit.component';
import { SkillComponent } from './skill/skill.component';
import { SkilleditComponent } from './skilledit/skilledit.component';
import { ApplicationlistComponent } from './applicationlist/applicationlist.component';
import { ResumeComponent } from './resume/resume.component';

import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api/menuitem';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';

import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  declarations: [ApplicantprofileComponent, EditprofileComponent, WorkexperienceComponent, WorkexperienceeditComponent, EducationComponent, EducationeditComponent, SkillComponent, SkilleditComponent, ApplicationlistComponent, ResumeComponent],
  imports: [
    CommonModule,
    ApplicantRoutingModule,
    DropdownModule,
    FormsModule,
    MenuModule,
    InputTextModule,
    ButtonModule,
    SplitButtonModule,
    DialogModule,
    ToolbarModule,
    SidebarModule
  ]
})
export class ApplicantModule { }
