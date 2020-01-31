import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { Register } from '../models/Register';
import { UserService } from '../services/user.service';
import { Role } from '../models/Role';
import { RoleService } from '../services/role.service';
import { MenuItem } from 'primeng/api/menuitem';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  tabMenu: MenuItem[];
  
  date : Date;
  gender: SelectItem[];

  role: any;
  register: Register = new Register("","","","",null,"","",null,null)
  constructor(
    private service: UserService,
    private roleService: RoleService,
    private messageService: MessageService,
    private router: Router
    ) {
    
    this.gender = [
      {label: 'Male', value: 'Male'},
      {label: 'Female', value: 'Female'}
    ];
  }

  ngOnInit() {
    let respRole = this.roleService.getRoleByName("Applicant");
    respRole.subscribe((data)=>{
      this.role=data
      this.register.setRole(this.role)
    });

    this.tabMenu = [
      {label: 'Applicant', icon: 'pi pi-users', routerLink:'/sign-up'},
      {label: 'Recruiter', icon: 'pi pi-user', routerLink:'/sign-up-recruiter'}
    ];
  }
  
  public findRoleById(id){
    let resp = this.roleService.getRoleById(id);
    resp.subscribe((data)=>this.role=data);
  }

  public reg(){
    let resp = this.service.registerUser(this.register)
    resp.subscribe((data)=>
    {
      this.messageService.add({key:'success', severity:'success', summary:'Message', detail:'Check your email for password'})
    },
    (error)=>
    {
      this.messageService.add({key:'error', severity:'error', summary:'Message', detail: error.error})
    }
    );
  }
}
