import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  date : Date;
  gender: SelectItem[];

  constructor() {
    this.gender = [
      {label: 'Male', value: 'Male'},
      {label: 'Female', value: 'Female'}
    ];
  }

  ngOnInit() {
  }

  display: boolean = false;

  showDialogLogin() {
      this.display = true;
  }  
}
