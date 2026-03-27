import 'reflect-metadata';
import { plainToInstance } from 'class-transformer';
import { CloudflareStreamMediaDetails } from "../models/cloudflareStreamMediaDetails.ts";

export class CloudflareStreamService {
    // @ts-ignore
    private static baseurl = `/umbraco/backoffice/api/cloudflarestream`
    static initialiseEndpoint = `${CloudflareStreamService.baseurl}/initialise`
    static statusEndpoint = `${CloudflareStreamService.baseurl}/status`

    static async getVideoDetails(id: string, token: string): Promise<CloudflareStreamMediaDetails | undefined> {
        try {
            if (token == '') {
                return undefined;
            }
            
            const response = await fetch(`${CloudflareStreamService.statusEndpoint}?id=${id}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            
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