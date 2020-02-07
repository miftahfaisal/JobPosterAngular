import { User } from './User';
import { JobLevel } from './JobLevel';
import { JobCategory } from './JobCategory';

export class ApplicantWorkExperience {
    private id: string;
    private jobTitle: string;
    private company: string;
    private startDate: Date;
    private endDate: Date;
    private description: string;
    private salary: number;
    private user: User;
    private jobLevel: JobLevel;
    private jobCategory: JobCategory;

    constructor(jobTitle: string,
                company: string,
                startDate: Date,
                endDate: Date,
                description: string,
                salary: number,
                user: User,
                jobLevel:JobLevel,
                jobCategory: JobCategory){
                    
                }
                
    setUser(user){
        this.user = user;
    }
}