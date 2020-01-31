import { EducationLevel } from './EducationLevel';

export class Major{
    id: string;
    majorCode: string;
    majorName: string;
    eduLevel: EducationLevel;
    activeState: boolean;
    constructor(
        majorCode: string,
        majorName: string,
        eduLevel: EducationLevel
        ){}
}