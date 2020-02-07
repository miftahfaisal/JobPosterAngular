import { City } from './City';
import { Role } from './Role';
import { Religion } from './Religion';
import { MaritalStatus } from './MaritalStatus';
import { Major } from './Major';

export class User{
    id: string;
     firstName: string;
     lastName: string;
     password: string;
     username: string;
     address: string;
     dateOfBirthday: Date;
     gender: string;
     phone: string;
     selfDescription: string;
     image: any[];
     imageType: string;
     imageFileName: string;
     city: City;
     role: Role;
     age: number;
     religion: Religion;
     maritalStatus: MaritalStatus;
     major: Major;

    constructor(
        firstName: string,
        lastName: string,
        password: string,
        username: string,
        address: string,
        dateOfBirthday: Date,
        gender: string,
        phone: string,
        selfDescription: string,
        image: any[],
        imageType: string,
        imageFileName: string,
        city: City,
        role: Role,
        religion: Religion,
        maritalStatus: MaritalStatus,
        major: Major
    ){

    }

}