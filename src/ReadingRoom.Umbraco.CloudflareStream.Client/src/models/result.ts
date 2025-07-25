import {Type} from "class-transformer";

import {Status} from "./status.ts";
import {Input} from "./input.ts";
import {Meta} from "./meta.ts";
import {Playback} from "./playback.ts";
import {Watermark} from "./watermark.ts";

export class Result {
    AllowedOrigins: string[];
    Created: Date;
    Creator: string;
    Duration: number;
    @Type(() => Input)

    Input: Input;
    LiveInput: string;
    MaxDurationSeconds: number;
    @Type(() => Meta)

    Meta: Meta;
    Modified: Date;
    @Type(() => Playback)

    Playback: Playback;
    Preview: string;
    ReadyToStream: boolean;
    ReadyToStreamAt: Date;
    RequireSignedURLs: boolean;
    ScheduledDeletion: Date;
    Size: number;
    @Type(() => Status)

    Status: Status;
    Thumbnail: string;
    ThumbnailTimestampPct: number;
    Uid: string;
    UploadExpiry: Date;
    Uploaded: Date;
    @Type(() => Watermark)

    Watermark: Watermark;

    constructor() {
        this.AllowedOrigins = [];
        this.Created = new Date();
        this.Creator = '';
        this.Duration = 0;
        this.Input = new Input();
        this.LiveInput = '';
        this.MaxDurationSeconds = 0;
        this.Meta = new Meta();
        this.Modified = new Date();
        this.Playback = new Playback();
        this.Preview = '';
        this.ReadyToStream = false;
        this.ReadyToStreamAt = new Date();
        this.RequireSignedURLs = false;
        this.ScheduledDeletion = new Date();
        this.Size = 0;
        this.Status = new Status();
        this.Thumbnail = '';
        this.ThumbnailTimestampPct = 0;
        this.Uid = '';
        this.UploadExpiry = new Date();
        this.Uploaded = new Date();
        this.Watermark = new Watermark();
    }
}