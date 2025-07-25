export class Watermark {
    Created: Date;
    DownloadedFrom: string;
    Height: number;
    Name: string;
    Opacity: number;
    Padding: number;
    Position: string;
    Scale: number;
    Size: number;
    Uid: string;
    Width: number;

    constructor() {
        this.Created = new Date();
        this.DownloadedFrom = '';
        this.Height = 0;
        this.Name = '';
        this.Opacity = 0;
        this.Padding = 0;
        this.Position = '';
        this.Scale = 0;
        this.Size = 0;
        this.Uid = '';
        this.Width = 0;
    }
}