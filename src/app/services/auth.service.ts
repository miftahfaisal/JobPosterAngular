import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { StorageModule, StorageMap, LocalStorage } from '@ngx-pwa/local-storage';

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
 

  constructor(
    public storage: StorageMap,
    private httpClient: HttpClient,
    private router: Router
  ) { }

  list:any;

  authenticate(user){
    return this.httpClient.post<any>(this.apiURL + '/login', user);
      // userData => {
      //   this.storage.set('user', userData[0]).subscribe(() => {});
      //   this.storage.set('token', userData[1]).subscribe(() => {});
      // }        
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('user')
    return !(user === null)
  }  

  logout(){
    this.storage.clear().subscribe(() => {});
    this.storage.get('user').subscribe((user) => {
      console.log(user);
    });
    this.router.navigateByUrl('/')
  }

}
