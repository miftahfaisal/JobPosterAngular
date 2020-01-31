import { Component, OnInit } from '@angular/core';
import { HomepageComponent } from 'src/app/homepage/homepage.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruiterhomepage',
  templateUrl: './recruiterhomepage.component.html',
  styleUrls: ['./recruiterhomepage.component.css']
})
export class RecruiterhomepageComponent implements OnInit {

  token: any;
  user: any;

  constructor(
    private hp: HomepageComponent,
    private router: Router
  ){}

  ngOnInit() {
    if(this.hp.storage.get('token')!=null){
      this.hp.storage.get('user').subscribe((user) => {
        this.user = user;
      });
      this.hp.storage.get('token').subscribe((token) => {
        this.token = token;
      });
    }else{
      this.router.navigateByUrl('/')
    }
  }

  // method untuk pop-up dan sidebar
  sidebarAccount: boolean = false;
  sidebarAccountActive(){
    this.sidebarAccount = true;
  }
  sidebarAccountInactive(){
    this.sidebarAccount = false;
  }

  logOut(){

  }
}
