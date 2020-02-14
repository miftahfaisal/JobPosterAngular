import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchjobdetailComponent } from './searchjobdetail/searchjobdetail.component';
import { SignuprecruiterComponent } from './signuprecruiter/signuprecruiter.component';
import { SignupComponent } from './signup/signup.component';
import { SearchjobComponent } from './searchjob/searchjob.component';
import { AppComponent } from './app.component';

import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api/menuitem';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { SidebarModule } from 'primeng/sidebar';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { PasswordModule } from 'primeng/password';
import { HttpClientModule } from '@angular/common/http';
import { StorageModule } from '@ngx-pwa/local-storage';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FieldsetModule } from 'primeng/fieldset';
import {AccordionModule} from 'primeng/accordion';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ProgressBarModule} from 'primeng/progressbar';
import {FileUploadModule} from 'primeng/fileupload';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {PdfViewerModule} from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SignupComponent,
    SearchjobComponent,
    SearchjobdetailComponent,
    SignuprecruiterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    TabMenuModule,
    InputTextModule,
    ButtonModule,
    SplitButtonModule,
    DialogModule,
    ToolbarModule,
    PasswordModule,
    CalendarModule,
    SidebarModule,
    HttpClientModule,
    ScrollPanelModule,
    StorageModule.forRoot({ IDBNoWrap: true }),
    CardModule,
    ToastModule,
    FieldsetModule,
    AccordionModule,
    InputTextareaModule,
    ProgressBarModule,
    FileUploadModule,
    TableModule,
    TabViewModule,
    PdfViewerModule
  ],
  providers: [MessageService, HomepageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
