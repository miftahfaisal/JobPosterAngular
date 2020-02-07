import { JobPosting } from './JobPosting';

export class JobRequirement {
    private id: string;
    private jobRequirementCode: string;
    private jobRequirementName: string;
    private jobPosting: JobPosting;

    constructor(
        jobRequirementName: string,
        jobPosting: JobPosting
        ){}
}