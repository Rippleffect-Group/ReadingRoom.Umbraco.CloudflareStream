import {Type} from "class-transformer";
import {Result} from "./result.ts";

export class CloudflareStreamMediaDetails {
    Errors: string[];
    Messages: string[];
    @Type(() => Result)
    Result: Result;
    Success: boolean;

    constructor() {
        this.Errors = [];
        this.Messages = [];
        this.Result = new Result();
        this.Success = false;
    }
}