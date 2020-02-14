export class ReportInput {
    public recruiter : string;
    public year: string;
    public job: string;

    constructor(recruiter: string,
                year: string,
                job: string){}

    public setRecruiter(recruiter){
        this.recruiter = recruiter;
    }

    public setYear(year){
        this.year = year;
    }

    public setJob(job){
        this.job = job;
    }
}