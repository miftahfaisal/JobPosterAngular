export class JobPostingPojo{
    private idCity: string;
    private idJobPosition: string;
    private idUser: string;
    private jobTitleName: string;
    private company: string;
    private salary: number;
    private startDate: Date;
    private endDate: Date;
    private address: string;
    private quota: number;
    constructor(
        idCity: string,
        idJobPosition: string,
        idUser: string,
        jobTitleName: string,
        company: string,
        salary: number,
        startDate: Date,
        endDate: Date,
        address: string,
        quota: number
    ){}
    setUserId(id){
        this.idUser = id
    }
    setCityId(id){
        this.idCity = id
    }
    setJobPositionId(id){
        this.idJobPosition = id
    }
}