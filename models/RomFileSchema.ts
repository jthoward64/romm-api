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

import { RomFileCategory } from '../models/RomFileCategory.js';
import { HttpFile } from '../http/http.js';

export class RomFileSchema {
    'id': number;
    'romId': number;
    'fileName': string;
    'filePath': string;
    'fileSizeBytes': number;
    'fullPath': string;
    'createdAt': Date;
    'updatedAt': Date;
    'lastModified': Date;
    'crcHash': string | null;
    'md5Hash': string | null;
    'sha1Hash': string | null;
    'category': RomFileCategory | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "romId",
            "baseName": "rom_id",
            "type": "number",
            "format": ""
        },
        {
            "name": "fileName",
            "baseName": "file_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "filePath",
            "baseName": "file_path",
            "type": "string",
            "format": ""
        },
        {
            "name": "fileSizeBytes",
            "baseName": "file_size_bytes",
            "type": "number",
            "format": ""
        },
        {
            "name": "fullPath",
            "baseName": "full_path",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastModified",
            "baseName": "last_modified",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "crcHash",
            "baseName": "crc_hash",
            "type": "string",
            "format": ""
        },
        {
            "name": "md5Hash",
            "baseName": "md5_hash",
            "type": "string",
            "format": ""
        },
        {
            "name": "sha1Hash",
            "baseName": "sha1_hash",
            "type": "string",
            "format": ""
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "RomFileCategory",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RomFileSchema.attributeTypeMap;
    }

    public constructor() {
    }
}


