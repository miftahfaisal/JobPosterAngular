import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { StorageModule, StorageMap, LocalStorage } from '@ngx-pwa/local-storage';
import { MessageService } from 'primeng/api';

export class User{
  constructor(
    public status:string,
  ){}
}

export class JwtResponse{
  constructor(
    public jwttoken:string,
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter2/user';
 
  public userData: any;
  public tokenData: any;

  constructor(
    public storage: StorageMap,
    private httpClient: HttpClient,
    private router: Router,
    private messageService: MessageService
  ) { }

  list:any;

  authenticate(user){
    this.httpClient.post<any>(this.apiURL + '/login', user).subscribe(
      (data)=>{
        localStorage.setItem('user',JSON.stringify(data[0]));
        localStorage.setItem('token',data[1]);
        this.auth();
      },
      (error)=>
      {
        this.messageService.add({key:'tc',severity:'warn',summary:'Warn Message', detail:'Login failed, please try again'});
      }
    )
    
  }

  auth(){
    this.userData = localStorage.getItem('user');
    this.tokenData = localStorage.getItem('token');
    this.userData = JSON.parse(this.userData);
    if(this.userData.role.roleName == "Applicant"){
      this.router.navigateByUrl('/applicant/myprofile')
    } else {
      this.router.navigateByUrl('/recruiter/job-posting')
    }
  }

  public getUser():any{
    return localStorage.getItem('user');
  }

  public getToken():any{
    return localStorage.getItem('token');
  }  

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/')
  }
}