import { JobPosting } from './JobPosting';
import { User } from './User';

export class Application {
    private id: string;
    private dateOfApplication: Date;
    private jobPosting: JobPosting;
    private user: User;

    constructor(user: User,
                jobPosting: JobPosting,
                dateOfApplication:Date){
                    
                }
}