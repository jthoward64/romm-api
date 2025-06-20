/**
 * RomM API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 3.10.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TinfoilFeedFileSchema } from '../models/TinfoilFeedFileSchema.js';
import { TinfoilFeedTitleDBSchema } from '../models/TinfoilFeedTitleDBSchema.js';
import { HttpFile } from '../http/http.js';

export class TinfoilFeedSchema {
    'files': Array<TinfoilFeedFileSchema>;
    'directories': Array<string>;
    'titledb'?: { [key: string]: TinfoilFeedTitleDBSchema; };
    'success'?: string;
    'error'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "files",
            "baseName": "files",
            "type": "Array<TinfoilFeedFileSchema>",
            "format": ""
        },
        {
            "name": "directories",
            "baseName": "directories",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "titledb",
            "baseName": "titledb",
            "type": "{ [key: string]: TinfoilFeedTitleDBSchema; }",
            "format": ""
        },
        {
            "name": "success",
            "baseName": "success",
            "type": "string",
            "format": ""
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TinfoilFeedSchema.attributeTypeMap;
    }

    public constructor() {
    }
}
