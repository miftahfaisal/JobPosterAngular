export class Province {
    public id: string;
    public provinceCode: string;
    public provinceName: string;
    public activeState: boolean;

    constructor(provinceCode: string,
                provinceName: string,
                activeState: boolean){
        this.provinceName = provinceName

    }

}