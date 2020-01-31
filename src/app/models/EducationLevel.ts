export class EducationLevel{
    private id: string;
    private educationLevelCode: string;
    private educationLevelName: string;
    private activeState: boolean;

    constructor(
        educationLevelCode: string,
        educationLevelName: string,
        activeState: boolean
        ){}
}