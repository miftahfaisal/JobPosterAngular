import { User } from './User';
import { DocumentType } from './DocumentType';

export class Document {
    private id: string;
    private fileName: string;
    private file: any[];
    private fileType: string;
    private docType: DocumentType;
    private user: User

    constructor(fileName: string,
                file: any[],
                fileType: string,
                docType: DocumentType,
                user: User){

    }
}