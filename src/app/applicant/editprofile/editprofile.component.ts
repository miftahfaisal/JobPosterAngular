import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomepageComponent } from 'src/app/homepage/homepage.component';
import { UserService } from 'src/app/services/user.service';
import { ReligionService } from 'src/app/services/religion.service';
import { CityService } from 'src/app/services/city.service';
import { MaritalstatusService } from 'src/app/services/maritalstatus.service';
import { AuthService } from 'src/app/services/auth.service';
import { SelectItem } from 'primeng/api/selectitem';
import { PasswordPojo } from 'src/app/models/PasswordPojo';
import { MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  user: any;
  token: any;

  city: any;

  passwordPojo: PasswordPojo = new PasswordPojo(null,null,null);

  religion: SelectItem[];
  maritalStatus: SelectItem[];

  tabMenu: MenuItem[];

  constructor(
    private router: Router,
    private userService: UserService,
    private cityService: CityService,
    private auth: AuthService,
    private messageService: MessageService
  ) { 
    this.religion = [
      {label: 'Islam', value: 'Islam'},
      {label: 'Protestant', value: 'Protestant'},
      {label: 'Catholic', value: 'Catholic'},
      {label: 'Buddha', value: 'Buddha'},
      {label: 'Hindu', value: 'Hindu'},
      {label: 'Confucianism', value: 'Confucianism'}
    ];
    this.maritalStatus = [
      {label: 'Single', value: 'Single'},
      {label: 'Married', value: 'Married'}
    ];
  }

  ngOnInit() {
    this.user = JSON.parse(this.auth.getUser());
    if(this.user!=null){
        this.getAllCity();
        this.passwordPojo.setId(this.user.id);
        this.token = this.auth.getToken();

        this.tabMenu = [
          {label: 'Profile', icon: 'pi pi-user', routerLink:'/applicant/edit-profile'},
          {label: 'Document', icon: 'pi pi-envelope', routerLink:'/applicant/document'}
        ]
    }else{
      this.router.navigateByUrl('/')
    }
  }

  getAllCity(){
    this.cityService.getAllCity().subscribe(
      (data)=>{this.city = data;}
    )
  }

  update(){
    this.userService.alterUser(this.user).subscribe((data)=>{
      localStorage.setItem('user',JSON.stringify(data));
      this.router.navigateByUrl('/applicant/myprofile')
    })
  }

  changePassword(){
    this.userService.changePassword(this.passwordPojo).subscribe(
      (data)=>{
        this.messageService.add({key:'success', severity:'success', summary:'Message', detail:'Password successfully changed'})
      },
      (error)=>{
        this.messageService.add({key:'error', severity:'error', summary:'Message', detail: error.error});
      }
    )
  }

  onConfirm(){
    this.messageService.clear('success');
    this.logOut();
  }

  onReject(){
    this.messageService.clear('success');
  }


  displayChangePassword : boolean = false;
  dialogChangePassword(){
    this.displayChangePassword = true;
  }
  cancelDialog(){
    this.displayChangePassword = false;
  }

  sidebarProfile: boolean = false;
  sidebarProfileActive(){
    this.sidebarProfile = true;
  }
  sidebarProfileInactive(){
    this.sidebarProfile = false;
  }

  logOut(){
    this.auth.logout();
  }
}
