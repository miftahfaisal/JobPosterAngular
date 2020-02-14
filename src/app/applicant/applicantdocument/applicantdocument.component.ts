import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { SelectItem } from 'primeng/api/selectitem';
import { MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api/menuitem';
import { DocumenttypeService } from 'src/app/services/documenttype.service';
import { HttpClient, HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-applicantdocument',
  templateUrl: './applicantdocument.component.html',
  styleUrls: ['./applicantdocument.component.css']
})
export class ApplicantdocumentComponent implements OnInit {

  apiURL = 'http://bootcamp.linovhr.com:8080/jobposter2/user';

  docType:any;
  docTypeId: any;

  user: any;
  tabMenu: MenuItem[];

  id: any;

  file:any;
  progressBar: any;

  constructor(  
    private router: Router,
    private userService: UserService,
    private auth: AuthService,
    private messageService: MessageService,
    private documentTypeService: DocumenttypeService,
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.user = JSON.parse(this.auth.getUser());
    if(this.user != null){
      this.tabMenu = [
        {label: 'Profile', icon: 'pi pi-user', routerLink:'/applicant/edit-profile'},
        {label: 'Document', icon: 'pi pi-envelope', routerLink:'/applicant/document'}
      ]
    }else{
      this.router.navigateByUrl('/');
    }
  }

  s:string= 'a'
  uploadDocument(){
    this.s =='b';
    let formData = new FormData();
    this.progressBar = 0;
    formData.append("upload",this.file);
    this.httpClient.post(this.apiURL+"/upload/"+this.id+"/"+this.docTypeId,formData,{reportProgress:true,observe:'events'}).subscribe((events)=>{
      this.displayProgressBar = true;
      if(events.type === HttpEventType.UploadProgress){
        this.progressBar = Math.round(events.loaded/events.total * 100);
      } else if (events.type === HttpEventType.Response){
        this.progressBar = '';
        localStorage.setItem('user',JSON.stringify(events.body));
        location.href = '/applicant/myprofile'
      }
    })
  }

  getFile(event){
    this.file = <File> event.target.files[0];
  }

  displayUploadCV: boolean = false;
  showDialogUploadCV(id){
    this.id = id;
    this.documentTypeService.getDocumentTypeByCode("CV").subscribe((data)=>{
      this.docType = data;
      this.docTypeId = this.docType.id;
    })
    this.displayUploadCV = true;
  }
  cancelDialogUploadCV(){
    this.displayUploadCV = false;
  }

  displayUploadIjazah: boolean = false;
  showDialogUploadIjazah(id){
    this.id = id;
    this.documentTypeService.getDocumentTypeByCode("IJZ").subscribe((data)=>{
      this.docType = data;
      this.docTypeId = this.docType.id;
    })
    this.displayUploadIjazah = true;
  }
  cancelDialogUploadIjazah(){
    this.displayUploadIjazah = false;
  }

  displayUploadSertif: boolean = false;
  showDialogUploadSertif(id){
    this.id = id;
    this.documentTypeService.getDocumentTypeByCode("SERTIF").subscribe((data)=>{
      this.docType = data;
      this.docTypeId = this.docType.id;
    })
    this.displayUploadSertif = true;
  }
  cancelDialogUploadSertif(){
    this.displayUploadSertif = false;
  }

  sidebarProfile: boolean = false;
  sidebarProfileActive(){
    this.sidebarProfile = true;
  }
  sidebarProfileInactive(){
    this.sidebarProfile = false;
  }

  displayProgressBar: boolean = false;

  logOut(){
    this.auth.logout();
  }

}
