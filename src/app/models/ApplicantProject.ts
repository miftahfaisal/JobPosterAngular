import { User } from './User';

export class ApplicantProject {
    private id: string;
    private projectName: string;
    private role: string;
    private startDate: Date;
    private endDate: Date;
    private link: string;
    private description: string;
    private user: User;

    constructor(
        projectName: string,
        role: string,
        startDate: Date,
        endDate: Date,
        link: string,
        description: string,
        user: User){}

    setUser(user){
        this.user = user
    }

}