import { ApplicationState } from './ApplicationState';
import { Application } from './Application';

export class ApplicationStateChange {
    private id: string;
    private dateChanged: Date;
    private state: ApplicationState;
    private application: Application;

    constructor(application: Application,
                state: ApplicationState,
                dateChanged: Date){
                    
                }
}