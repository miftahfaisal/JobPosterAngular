import { JobPosting } from './JobPosting';

export class JobDescription {
    private id: string;
    private jobDescriptionCode: string;
    private jobDescriptionName: string;
    private jobPosting: JobPosting;

    constructor(
        jobDescriptionName: string,
        jobPosting: JobPosting
        ){}
}