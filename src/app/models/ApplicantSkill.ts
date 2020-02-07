import { SkillLevel } from './Skilllevel';
import { User } from './User';

export class ApplicantSkill {
    private id: String;
    private skillName: string;
    private user: User;
    private skillLevel: SkillLevel;

    constructor(
        skillName: string,
        user: User,
        skillLevel: SkillLevel){}
    setUser(user){
        this.user = user;
    }
}