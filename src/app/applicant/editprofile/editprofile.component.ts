import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomepageComponent } from 'src/app/homepage/homepage.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  user: any;
  token: any;
  constructor(
    private router: Router,
    private hp: HomepageComponent,
    private userService: UserService
  ) { }

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

  displayChangePassword : boolean = false;
  dialogChangePassword(){
    this.displayChangePassword = true;
  }
  cancelDialog(){
    this.displayChangePassword = false;
  }

  update(){
    this.userService.alterUser(this.user).subscribe((data)=>{
      console.log(data)
      this.router.navigateByUrl('/applicant/myprofile')
    })
  }

  sidebarProfile: boolean = false;
  sidebarProfileActive(){
    this.sidebarProfile = true;
  }
  sidebarProfileInactive(){
    this.sidebarProfile = false;
  }
}
