import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobpostingService } from 'src/app/services/jobposting.service';

@Component({
  selector: 'app-jobpostingdetail',
  templateUrl: './jobpostingdetail.component.html',
  styleUrls: ['./jobpostingdetail.component.css']
})
export class JobpostingdetailComponent implements OnInit {

  jobPost: any;
  id: any;
  constructor(
    private route : ActivatedRoute,
    private jobPostingService : JobpostingService
  ){}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.jobPostingService.getJobPostingById(this.id).subscribe((data)=>{
      this.jobPost = data
    });
  }

}
