export class JobCategory{
    public id: string;
    public jobCategoryCode: string;
    public jobCategoryName: string;
    public activeState: boolean;

    constructor(jobCategoryCode: string,
                jobCategoryName: string,
                activeState: boolean){
        this.jobCategoryName = jobCategoryName;
    }
}