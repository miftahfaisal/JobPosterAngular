import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomepageComponent } from 'src/app/homepage/homepage.component';
import { ApplicantprojectService } from 'src/app/services/applicantproject.service';
import { ApplicantProject } from 'src/app/models/ApplicantProject';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-projectedit',
  templateUrl: './projectedit.component.html',
  styleUrls: ['./projectedit.component.css']
})
export class ProjecteditComponent implements OnInit {

  user: any;
  token: any;
  id: any;

  aplprojectedit: any;

  aplProjectList: any;
  aplProjectModel: ApplicantProject = new ApplicantProject(null,null,null,null,null,null,null);

  constructor(
    private router: Router,
    // private hp: HomepageComponent,
    private aplProjectService: ApplicantprojectService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(this.auth.getUser());
    if(this.user!=null){
      this.getProjectApplicant(this.user.id);
      this.aplProjectModel.setUser(this.user);    
      this.token = this.auth.getToken();
    }else{
      this.router.navigateByUrl("/")
    }
  }

  getProjectApplicant(id){
    this.aplProjectService.getProjectByApplicant(id).subscribe(
      (data)=>
      {
        this.aplProjectList = data;
      }
    );
  }

  searchAplProjectById(id){
    this.aplProjectService.getProjectById(id).subscribe(
      (data)=>
      {
        this.aplprojectedit = data;
      }
    )
  }

  addProject(){
    this.aplProjectService.inputProject(this.aplProjectModel).subscribe(
      (data)=>
      {
        this.backToProfile();
      }
    )
  }

  editProject(){
    this.aplProjectService.alterProject(this.aplprojectedit).subscribe(
      (data)=>
      {
        this.backToProfile();
      }
    )
  }

  deleteProject(){
    this.aplProjectService.dropProject(this.id).subscribe(
      (data)=>
      {
        this.backToProfile();
      }
    )
  }

  backToProfile(){
    this.router.navigateByUrl('/applicant/myprofile')
  }

  displayAddProject: boolean = false;
  showDialogAddProject(){
    this.displayAddProject = true;
  }
  cancelDialogAdd(){
    this.displayAddProject = false;
  }

  displayDeleteProject: boolean = false;
  showDialogDeleteProject(id){
    this.id = id;
    this.displayDeleteProject = true;
  }
  cancelDialogDelete(){
    this.displayDeleteProject = false;
  }

  displayEditProject: boolean = false;
  showDialogEditProject(id){
    this.id = id;
    this.displayEditProject = true;
    this.searchAplProjectById(this.id); 
  }
  cancelDialogEdit(){
    this.displayEditProject = false;
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
