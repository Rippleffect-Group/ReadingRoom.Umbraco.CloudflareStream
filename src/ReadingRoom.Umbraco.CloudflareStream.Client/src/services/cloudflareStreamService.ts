import 'reflect-metadata';
import {plainToInstance} from 'class-transformer';
import {CloudflareStreamMediaDetails} from "../models/cloudflareStreamMediaDetails.ts";

export class CloudflareStreamService {
// @ts-ignore
    private static baseurl = `${window.Umbraco.Sys.ServerVariables.umbracoSettings.umbracoPath}/backoffice/api/cloudflarestream`
    static initialiseEndpoint = `${CloudflareStreamService.baseurl}/initialise`
    static statusEndpoint = `${CloudflareStreamService.baseurl}/status`

    static async getVideoDetails(id: string): Promise<CloudflareStreamMediaDetails | undefined> {
        try {
            const response = await fetch(`${CloudflareStreamService.statusEndpoint}?id=${id}`);
            if (response.status === 404) {
                return undefined;
            }
            const json = await response.json();
            return plainToInstance(CloudflareStreamMediaDetails, json);
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
            throw error;
        }
    }
}