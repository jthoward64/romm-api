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

import { MobyMetadataPlatform } from '../models/MobyMetadataPlatform.js';
import { HttpFile } from '../http/http.js';

export class RomMobyMetadata {
    'mobyScore'?: string;
    'genres'?: Array<string>;
    'alternateTitles'?: Array<string>;
    'platforms'?: Array<MobyMetadataPlatform>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "mobyScore",
            "baseName": "moby_score",
            "type": "string",
            "format": ""
        },
        {
            "name": "genres",
            "baseName": "genres",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "alternateTitles",
            "baseName": "alternate_titles",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "platforms",
            "baseName": "platforms",
            "type": "Array<MobyMetadataPlatform>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RomMobyMetadata.attributeTypeMap;
    }

    public constructor() {
    }
}
