import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MessageService } from 'primeng/api';
import { StorageMap } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  user: User = new User("","","","","",null,"","","",null,"","",null,null,null,null,null);
  
  list : any;
  token: any;
  userin: any;

  constructor(
    private service: UserService,
    private route: Router,
    private authService: AuthService,
    private messageService: MessageService,
    public storage: StorageMap
    ) { }

  ngOnInit() {
  }
  public login(){
    this.authService.authenticate(this.user).subscribe(
      (data)=>
      {
        this.storage.set('user',data[0]).subscribe(()=>{});
        this.storage.set('token',data[1]).subscribe(()=>{});
        this.auth();
      },
      (error)=>
      {
        this.messageService.add({key:'tc',severity:'warn',summary:'Warn Message', detail:'Login failed, please try again'});
      }
    );
  }

  auth(){
    this.storage.get('user').subscribe((user)=>{
      this.userin = user;
      console.log(this.userin)
      this.storage.get('token').subscribe((token)=>{});
      if(this.userin.role.roleName == "Applicant"){
        this.route.navigateByUrl('/applicant/myprofile')
      } else {
        this.route.navigateByUrl('/recruiter/homepage')
      }
    });
  }
}
