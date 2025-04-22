export class Status {
    ErrorReasonCode: string;
    ErrorReasonText: string;
    PctComplete: string;
    State: string;


    constructor() {
        this.ErrorReasonCode = '';
        this.ErrorReasonText = '';
        this.PctComplete = '';
        this.State = '';
    }
}