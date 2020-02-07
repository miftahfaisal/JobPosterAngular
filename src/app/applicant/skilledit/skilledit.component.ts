import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomepageComponent } from 'src/app/homepage/homepage.component';
import { ApplicantskillService } from 'src/app/services/applicantskill.service';
import { SkilllevelService } from 'src/app/services/skilllevel.service';
import { ApplicantSkill } from 'src/app/models/ApplicantSkill';
import { MessageService, SelectItem } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-skilledit',
  templateUrl: './skilledit.component.html',
  styleUrls: ['./skilledit.component.css']
})
export class SkilleditComponent implements OnInit {

  user: any;
  token: any;
  id: any;

  aplskilledit: any;

  aplSkillList: any;
  aplSkillModel: ApplicantSkill = new ApplicantSkill(null,null,null);

  skillLevel: SelectItem[];

  constructor(
    private router : Router,
    private hp: HomepageComponent,
    private aplSkillService: ApplicantskillService,
    private skillLevelService: SkilllevelService,
    private messageService: MessageService,
    private auth: AuthService

  ) { }

  ngOnInit() {
    this.user = JSON.parse(this.auth.getUser());
    if(this.user!=null){
      this.getSkillApplicant(this.user.id);
      this.aplSkillModel.setUser(this.user);
      this.token = this.auth.getToken();
    }else{
      this.router.navigateByUrl("/")
    }

    this.skillLevel = [
      {label: 'Beginner', value: 'Beginner'},
      {label: 'Novice', value: 'Novice'},
      {label: 'Intermediate', value: 'Intermediate'},
      {label: 'Higher Intermediate', value: 'Higher Intermediate'},
      {label: 'Expert', value: 'Expert'}
    ];
  }

  getSkillApplicant(id){
    this.aplSkillService.getSkillByApplicant(id).subscribe(
      (data)=>
      {
        this.aplSkillList = data;
      });
  }

  addSkill(){
    this.aplSkillService.inputSkill(this.aplSkillModel).subscribe(
      (data)=>
      {
        this.backToProfile();
      }
    )
  }

  editSkill(){
    this.aplSkillService.alterSkill(this.aplskilledit).subscribe(
      (data)=>
      {
        this.backToProfile();
      }
    )
  }

  deleteSkill(){
    this.aplSkillService.dropSkill(this.id).subscribe(
      (data)=>
      {
        this.backToProfile();
      }
    )
  }

  searchAplSkillById(id){
    this.aplSkillService.getSkillById(id).subscribe(
      (data)=>
      {
        this.aplskilledit = data;
      }
    )
  }

  backToProfile(){
    this.router.navigateByUrl('/applicant/myprofile')
  }

  sidebarProfile: boolean = false;
  sidebarProfileActive(){
    this.sidebarProfile = true;
  }
  sidebarProfileInactive(){
    this.sidebarProfile = false;
  }

  displayAddSkill: boolean = false;
  showDialogAddSkill() {
      this.displayAddSkill = true;
  }
  cancelDialogAdd(){
      this.displayAddSkill = false;
  }
  
  displayDeleteSkill: boolean = false;
  showDialogDeleteSkill(id) {
      this.id = id;
      this.displayDeleteSkill = true;
  }
  cancelDialogDelete(){
      this.displayDeleteSkill = false;
  }

  displayEditSkill: boolean = false;
  showDialogEditSkill(id) {
    this.id = id;
    this.displayEditSkill = true;
    this.searchAplSkillById(this.id);
  }

  cancelDialogEdit(){
    this.displayEditSkill = false;
  }
  
  logOut(){
    this.auth.logout();
  }
}
