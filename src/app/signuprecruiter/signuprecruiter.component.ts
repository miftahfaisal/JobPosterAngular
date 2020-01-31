import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { UserService } from '../services/user.service';
import { RoleService } from '../services/role.service';
import { Register } from '../models/Register';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-signuprecruiter',
  templateUrl: './signuprecruiter.component.html',
  styleUrls: ['./signuprecruiter.component.css']
})
export class SignuprecruiterComponent implements OnInit {

  tabMenu: MenuItem[];
  role: any;
  register: Register = new Register("","","","",null,"","",null,null)

  constructor(
    private service: UserService,
    private messageService: MessageService,
    private roleService: RoleService
  ) { }

  ngOnInit() {
    let respRole = this.roleService.getRoleByName("Recruiter");
    respRole.subscribe((data)=>{
      this.role=data
      this.register.setRole(this.role)
    });
    
    this.tabMenu = [
      {label: 'Applicant', icon: 'pi pi-users', routerLink:'/sign-up'},
      {label: 'Recruiter', icon: 'pi pi-user', routerLink:'/sign-up-recruiter'}
    ];
  }

  public reg(){
    let resp = this.service.registerUser(this.register)
    resp.subscribe((data)=>{
      this.messageService.add({key:'success', severity:'success', summary:'Message', detail:'Check your email for password'})
    },
    (error)=>
    {
      this.messageService.add({key:'error', severity:'error', summary:'Message', detail: error.error})
    });
  }
}
