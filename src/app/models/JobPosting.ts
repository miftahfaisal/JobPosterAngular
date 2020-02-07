import { City } from './City';
import { JobPosition } from './JobPosition';
import { User } from './User';

export class JobPosting {
    private id: string;
    private jobTitleName: string;
    private salary: number;
    private startDate: Date;
    private endDate: Date;
    private address: String;
    private city: City;
    private company: string;
    private jobPosition: JobPosition;
    private user: User;
    private activeState: boolean;

    constructor(
        jobTitleName: string,
        salary: number,
        startDate: Date,
        endDate: Date,
        address: string,
        city: City,
        company: string,
        jobPosition: JobPosition,
        user: User,
        activeState: boolean
        ){}
    
    setUser(user){
        this.user = user;
    }
}