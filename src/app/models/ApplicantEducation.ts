import { User } from './User';
import { Major } from './Major';

export class ApplicantEducation {
    private id: string;
    private school: string;
    private startDate: Date;
    private endDate: Date;
    private gpa: number;
    private user: User;
    private major: Major;

    constructor(
        school: string,
        startDate: Date,
        endDate: Date,
        gpa: number,
        user: User,
        major: Major
        ){}

    setUser(user){
        this.user = user;
    }
    setId(id){
        this.id = id;
    }
}