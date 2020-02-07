import { JobPosting } from './JobPosting';

export class JobBenefit {
    private id: string;
    private jobBenefitCode: string;
    private jobBenefitName: string;
    private jobPosting: JobPosting;

    constructor(
        jobBenefitName: string,
        jobPosting: JobPosting
        ){}
}