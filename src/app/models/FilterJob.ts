import { Province } from './Province';
import { JobCategory } from './JobCategory';

export class FilterJob{
    private provinceName: string;
    private jobCategoryName: string;
    private salaryMin: number;
    private salaryMax: number;

    constructor(
        province: string,
        jobCategoryName: string,
        salaryMin: number,
        salaryMax: number
    ){}

    public setProvinceName(name:string){
        this.provinceName = name;
    }

    public setJobCategoryName(name:string){
        this.jobCategoryName = name;
    }
}