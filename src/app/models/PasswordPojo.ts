export class PasswordPojo {
    
    private id: string;
    private oldPas: string;
    private newPas: string;

    constructor(id:string,
                oldPas: string,
                newPas: string){
                    
                }
    
    public setId(id){
        this.id = id;
    }
}