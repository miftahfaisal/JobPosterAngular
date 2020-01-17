import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { AppComponent } from './app.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api/menuitem';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { SidebarModule } from 'primeng/sidebar';

import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { PasswordModule } from 'primeng/password';
import { SignupComponent } from './signup/signup.component';
import { SearchjobComponent } from './searchjob/searchjob.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SignupComponent,
    SearchjobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    MenuModule,
    InputTextModule,
    ButtonModule,
    SplitButtonModule,
    DialogModule,
    ToolbarModule,
    PasswordModule,
    CalendarModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
