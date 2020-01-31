export class Role {
     id: string;
     roleCode: string;
     roleName: string;
     activeState: boolean;

    constructor(roleCode: string,
                roleName: string,
                activeState: boolean){

    }

    setId(id){
        this.id = id;
    }
}