import { Time } from '@angular/common';
import { Application } from './Application';

export class InterviewSchedule{
    private id: string;
    private interviewCode: string;
	private interviewDate: Date;
	private interviewTime: Time;
	private interviewResult: string;
	private attend: boolean;
	private reschedule: boolean;
	private reject: boolean;
    private rescheduleReason: string;
    private interviewLocation: string;
    private rejectReason: string;
    private application : Application;
    constructor(
        interviewDate: Date,
        interviewTime: Time,
        interviewLocation: string
        ){
            this.interviewDate = interviewDate;
            this.interviewTime = interviewTime;
            this.interviewLocation = interviewLocation
        }
    
    setId(id){
        this.id = id;
    }
    // setState(state){
    //     this.interviewState = state;
    // }
    setResult(result){
        this.interviewResult = result;
    }
}