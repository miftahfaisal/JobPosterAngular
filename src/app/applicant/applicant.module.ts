import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicantRoutingModule } from './applicant-routing.module';
import { ApplicantprofileComponent } from './applicantprofile/applicantprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { WorkexperienceeditComponent } from './workexperienceedit/workexperienceedit.component';
import { EducationeditComponent } from './educationedit/educationedit.component';
import { SkilleditComponent } from './skilledit/skilledit.component';
import { ApplicationlistComponent } from './applicationlist/applicationlist.component';
import { ResumeComponent } from './resume/resume.component';
import { SearchjobsComponent } from './searchjobs/searchjobs.component';

import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api/menuitem';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { CalendarModule } from 'primeng/calendar';
import { ScrollPanelModule } from 'primeng/scrollpanel';

import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { SearchjobsComponent } from './searchjobs/searchjobs.component';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import {AccordionModule} from 'primeng/accordion';
import { ToastModule } from 'primeng/toast';
import {ProgressBarModule} from 'primeng/progressbar';
import { ProjecteditComponent } from './projectedit/projectedit.component';
import {FileUploadModule} from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import {TabMenuModule} from 'primeng/tabmenu';
import { ApplicantdocumentComponent } from './applicantdocument/applicantdocument.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';

@NgModule({
  declarations: [ApplicantprofileComponent, EditprofileComponent, WorkexperienceeditComponent, EducationeditComponent, SkilleditComponent, ApplicationlistComponent, ResumeComponent, SearchjobsComponent, ProjecteditComponent, ApplicantdocumentComponent],
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
    SidebarModule,
    CalendarModule,
    ScrollPanelModule,
    CardModule,
    FieldsetModule,
    AccordionModule,
    ToastModule,
    ProgressBarModule,
    FileUploadModule,
    TableModule,
    TabMenuModule,
    PdfViewerModule
  ]
})
export class ApplicantModule { }
