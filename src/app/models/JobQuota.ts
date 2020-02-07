import { JobPosting } from './JobPosting';

export class JobQuota {
    private id: string;
    private jobPosting: JobPosting;
    private jobQuota: number;

    constructor(jobPosting: JobPosting,
                jobQuota: number){

    }
}