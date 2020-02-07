import { JobCategory } from './JobCategory';

export class JobPosition {
    private id: string;
    private jobPositionCode: string;
    private jobPositionName: string;
    private jobCategory: JobCategory;
    private activeState: boolean;

    constructor(jobPositionCode: string,
                jobPositionName: string,
                jobCategory: JobCategory,
                activeState: boolean){
                    
                }
}