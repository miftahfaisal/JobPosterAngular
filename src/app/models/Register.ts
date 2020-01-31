import { Role } from './Role';
import { City } from './City';

export class Register {
    private firstName: string;
    private lastName: string;
    private email: string;
    private address: string;
    private dateOfBirthday: Date;
    private gender: string;
    private phone: string;
    private city: City;
    private role: Role;

    constructor(firstName: string,
                lastName: string,
                email: string,
                address: string,
                dateOfBirthday: Date,
                gender: string,
                phone: string,
                city: City,
                role: Role){

    }

    setRole(role){
        this.role = role;
    }
}