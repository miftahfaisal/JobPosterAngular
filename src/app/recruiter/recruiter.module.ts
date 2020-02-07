import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruiterRoutingModule } from './recruiter-routing.module';
import { RecruiterhomepageComponent } from './recruiterhomepage/recruiterhomepage.component';
import { JobpostingComponent } from './jobposting/jobposting.component';
import { JobpostingdetailComponent } from './jobpostingdetail/jobpostingdetail.component';

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
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { JobpostingeditComponent } from './jobpostingedit/jobpostingedit.component';
import { TabViewModule } from 'primeng/tabview';
import {PdfViewerModule} from 'ng2-pdf-viewer';


@NgModule({
  declarations: [RecruiterhomepageComponent, JobpostingComponent, JobpostingdetailComponent, JobpostingeditComponent],
  imports: [
    CommonModule,
    RecruiterRoutingModule,
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
    TableModule,
    InputTextareaModule,
    TabViewModule,
    PdfViewerModule
  ]
})
export class RecruiterModule { }
