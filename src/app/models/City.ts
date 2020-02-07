import { Province } from './Province';

export class City {
    private id: string;
    private cityCode: string;
    private cityName: string;
    private province: Province;
    private activeState: boolean;

    constructor(cityCode: string,
                cityName: string,
                province: Province,
                activeState: boolean){

    }
}