import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  user: User = new User("","","","","",null,"","","",null,"","",null,null,null,null,null);
  
  list : any;
  token: any;
  users: any;

  public userData: any;
  public tokenData: any;

  constructor(
    private service: UserService,
    private route: Router,
    private authService: AuthService,
    private messageService: MessageService
    ) { }

  ngOnInit() {
  }
  public login(){
    this.authService.authenticate(this.user)
  }
}
