// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.js';
import {Configuration} from '../configuration.js';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.js';
import  FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer.js';
import {ApiException} from './exception.js';
import {canConsumeForm, isCodeInRange} from '../util.js';
import {SecurityAuthentication} from '../auth/auth.js';


import { CustomLimitOffsetPageSimpleRomSchema } from '../models/CustomLimitOffsetPageSimpleRomSchema.js';
import { DetailedRomSchema } from '../models/DetailedRomSchema.js';
import { HTTPValidationError } from '../models/HTTPValidationError.js';
import { MessageResponse } from '../models/MessageResponse.js';
import { RomFileSchema } from '../models/RomFileSchema.js';
import { RomUserSchema } from '../models/RomUserSchema.js';

/**
 * no description
 */
export class RomsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Upload single rom endpoint  Args:     request (Request): Fastapi Request object  Raises:     HTTPException: No files were uploaded
     * Add Rom
     */
    public async addRomApiRomsPost(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/api/roms';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["OAuth2PasswordBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["HTTPBasic"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Upload manuals for a rom  Args:     request (Request): Fastapi Request object  Raises:     HTTPException: No files were uploaded
     * Add Rom Manuals
     * @param id 
     */
    public async addRomManualsApiRomsIdManualsPost(id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("RomsApi", "addRomManualsApiRomsIdManualsPost", "id");
        }


        // Path Params
        const localVarPath = '/api/roms/{id}/manuals'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["OAuth2PasswordBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["HTTPBasic"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete roms endpoint  Args:     request (Request): Fastapi Request object.         {             \"roms\": List of rom\'s ids to delete         }     delete_from_fs (bool, optional): Flag to delete rom from filesystem. Defaults to False.  Returns:     MessageResponse: Standard message response
     * Delete Roms
     */
    public async deleteRomsApiRomsDeletePost(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/api/roms/delete';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["OAuth2PasswordBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["HTTPBasic"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get rom endpoint  Args:     request (Request): Fastapi Request object     id (int): Rom internal id  Returns:     DetailedRomSchema: Rom stored in the database
     * Get Rom
     * @param id 
     */
    public async getRomApiRomsIdGet(id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("RomsApi", "getRomApiRomsIdGet", "id");
        }


        // Path Params
        const localVarPath = '/api/roms/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["OAuth2PasswordBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["HTTPBasic"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Download rom endpoint (one single file or multiple zipped files for multi-part roms)  Args:     request (Request): Fastapi Request object     id (int): Rom internal id     file_name: Zip file output name  Returns:     Response: Returns a response with headers  Yields:     FileResponse: Returns one file for single file roms     FileRedirectResponse: Redirects to the file download path     ZipResponse: Returns a response for nginx to serve a Zip file for multi-part roms
     * Get Rom Content
     * @param id 
     * @param fileName 
     */
    public async getRomContentApiRomsIdContentFileNameGet(id: number, fileName: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("RomsApi", "getRomContentApiRomsIdContentFileNameGet", "id");
        }


        // verify required parameter 'fileName' is not null or undefined
        if (fileName === null || fileName === undefined) {
            throw new RequiredError("RomsApi", "getRomContentApiRomsIdContentFileNameGet", "fileName");
        }


        // Path Params
        const localVarPath = '/api/roms/{id}/content/{file_name}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'file_name' + '}', encodeURIComponent(String(fileName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["OAuth2PasswordBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["HTTPBasic"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get Romfile
     * @param id 
     */
    public async getRomfileApiRomsfilesIdGet(id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("RomsApi", "getRomfileApiRomsfilesIdGet", "id");
        }


        // Path Params
        const localVarPath = '/api/romsfiles/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["OAuth2PasswordBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["HTTPBasic"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Download rom file endpoint  Args:     request (Request): Fastapi Request object     id (int): RomFile internal id     file_name (str): What to name the file when downloading  Returns:     FileResponse: Returns the response with headers
     * Get Romfile Content
     * @param id 
     * @param fileName 
     */
    public async getRomfileContentApiRomsfilesIdContentFileNameGet(id: number, fileName: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("RomsApi", "getRomfileContentApiRomsfilesIdContentFileNameGet", "id");
        }


        // verify required parameter 'fileName' is not null or undefined
        if (fileName === null || fileName === undefined) {
            throw new RequiredError("RomsApi", "getRomfileContentApiRomsfilesIdContentFileNameGet", "fileName");
        }


        // Path Params
        const localVarPath = '/api/romsfiles/{id}/content/{file_name}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'file_name' + '}', encodeURIComponent(String(fileName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["OAuth2PasswordBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["HTTPBasic"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get roms endpoint  Args:     request: Fastapi Request object     platform_id (int, optional): Platform internal id. Defaults to None.     collection_id (int, optional): Collection internal id. Defaults to None.     virtual_collection_id (str, optional): Virtual collection internal id. Defaults to None.     search_term (str, optional): Search term to filter roms. Defaults to None.     order_by (str, optional): Field to order by. Defaults to \"name\".     order_dir (str, optional): Order direction. Defaults to \"asc\".     matched (bool, optional): Filter for matched or unmatched roms. Defaults to None.     favourite (bool, optional): Filter for favourite or non-favourite roms. Defaults to None.     duplicate (bool, optional): Filter for duplicate or non-duplicate roms. Defaults to None.     playable (bool, optional): Filter for playable or non-playable roms. Defaults to None.     unmatched_only (bool, optional): Filter only unmatched roms. Defaults to False. DEPRECATED: use `matched` instead.     matched_only (bool, optional): Filter only matched roms. Defaults to False. DEPRECATED: use `matched` instead.     favourites_only (bool, optional): Filter only favourite roms. Defaults to False. DEPRECATED: use `favourite` instead.     duplicates_only (bool, optional): Filter only duplicate roms. Defaults to False. DEPRECATED: use `duplicate` instead.     playables_only (bool, optional): Filter only playable roms by emulatorjs. Defaults to False. DEPRECATED: use `playable` instead.     ra_only (bool, optional): Filter only roms with Retroachievements compatibility.     group_by_meta_id (bool, optional): Group roms by igdb/moby/ssrf ID. Defaults to False.     selected_genre (str, optional): Filter by genre. Defaults to None.     selected_franchise (str, optional): Filter by franchise. Defaults to None.     selected_collection (str, optional): Filter by collection. Defaults to None.     selected_company (str, optional): Filter by company. Defaults to None.     selected_age_rating (str, optional): Filter by age rating. Defaults to None.     selected_status (str, optional): Filter by status. Defaults to None.     selected_region (str, optional): Filter by region tag. Defaults to None.     selected_language (str, optional): Filter by language tag. Defaults to None.  Returns:     list[RomSchema | SimpleRomSchema]: List of ROMs stored in the database
     * Get Roms
     * @param platformId 
     * @param collectionId 
     * @param virtualCollectionId 
     * @param searchTerm 
     * @param orderBy 
     * @param orderDir 
     * @param matched 
     * @param favourite 
     * @param duplicate 
     * @param playable 
     * @param unmatchedOnly 
     * @param matchedOnly 
     * @param favouritesOnly 
     * @param duplicatesOnly 
     * @param playablesOnly 
     * @param raOnly 
     * @param groupByMetaId 
     * @param selectedGenre 
     * @param selectedFranchise 
     * @param selectedCollection 
     * @param selectedCompany 
     * @param selectedAgeRating 
     * @param selectedStatus 
     * @param selectedRegion 
     * @param selectedLanguage 
     * @param limit Page size limit
     * @param offset Page offset
     */
    public async getRomsApiRomsGet(platformId?: number, collectionId?: number, virtualCollectionId?: string, searchTerm?: string, orderBy?: string, orderDir?: string, matched?: boolean, favourite?: boolean, duplicate?: boolean, playable?: boolean, unmatchedOnly?: boolean, matchedOnly?: boolean, favouritesOnly?: boolean, duplicatesOnly?: boolean, playablesOnly?: boolean, raOnly?: boolean, groupByMetaId?: boolean, selectedGenre?: string, selectedFranchise?: string, selectedCollection?: string, selectedCompany?: string, selectedAgeRating?: string, selectedStatus?: string, selectedRegion?: string, selectedLanguage?: string, limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




























        // Path Params
        const localVarPath = '/api/roms';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (platformId !== undefined) {
            requestContext.setQueryParam("platform_id", ObjectSerializer.serialize(platformId, "number", ""));
        }

        // Query Params
        if (collectionId !== undefined) {
            requestContext.setQueryParam("collection_id", ObjectSerializer.serialize(collectionId, "number", ""));
        }

        // Query Params
        if (virtualCollectionId !== undefined) {
            requestContext.setQueryParam("virtual_collection_id", ObjectSerializer.serialize(virtualCollectionId, "string", ""));
        }

        // Query Params
        if (searchTerm !== undefined) {
            requestContext.setQueryParam("search_term", ObjectSerializer.serialize(searchTerm, "string", ""));
        }

        // Query Params
        if (orderBy !== undefined) {
            requestContext.setQueryParam("order_by", ObjectSerializer.serialize(orderBy, "string", ""));
        }

        // Query Params
        if (orderDir !== undefined) {
            requestContext.setQueryParam("order_dir", ObjectSerializer.serialize(orderDir, "string", ""));
        }

        // Query Params
        if (matched !== undefined) {
            requestContext.setQueryParam("matched", ObjectSerializer.serialize(matched, "boolean", ""));
        }

        // Query Params
        if (favourite !== undefined) {
            requestContext.setQueryParam("favourite", ObjectSerializer.serialize(favourite, "boolean", ""));
        }

        // Query Params
        if (duplicate !== undefined) {
            requestContext.setQueryParam("duplicate", ObjectSerializer.serialize(duplicate, "boolean", ""));
        }

        // Query Params
        if (playable !== undefined) {
            requestContext.setQueryParam("playable", ObjectSerializer.serialize(playable, "boolean", ""));
        }

        // Query Params
        if (unmatchedOnly !== undefined) {
            requestContext.setQueryParam("unmatched_only", ObjectSerializer.serialize(unmatchedOnly, "boolean", ""));
        }

        // Query Params
        if (matchedOnly !== undefined) {
            requestContext.setQueryParam("matched_only", ObjectSerializer.serialize(matchedOnly, "boolean", ""));
        }

        // Query Params
        if (favouritesOnly !== undefined) {
            requestContext.setQueryParam("favourites_only", ObjectSerializer.serialize(favouritesOnly, "boolean", ""));
        }

        // Query Params
        if (duplicatesOnly !== undefined) {
            requestContext.setQueryParam("duplicates_only", ObjectSerializer.serialize(duplicatesOnly, "boolean", ""));
        }

        // Query Params
        if (playablesOnly !== undefined) {
            requestContext.setQueryParam("playables_only", ObjectSerializer.serialize(playablesOnly, "boolean", ""));
        }

        // Query Params
        if (raOnly !== undefined) {
            requestContext.setQueryParam("ra_only", ObjectSerializer.serialize(raOnly, "boolean", ""));
        }

        // Query Params
        if (groupByMetaId !== undefined) {
            requestContext.setQueryParam("group_by_meta_id", ObjectSerializer.serialize(groupByMetaId, "boolean", ""));
        }

        // Query Params
        if (selectedGenre !== undefined) {
            requestContext.setQueryParam("selected_genre", ObjectSerializer.serialize(selectedGenre, "string", ""));
        }

        // Query Params
        if (selectedFranchise !== undefined) {
            requestContext.setQueryParam("selected_franchise", ObjectSerializer.serialize(selectedFranchise, "string", ""));
        }

        // Query Params
        if (selectedCollection !== undefined) {
            requestContext.setQueryParam("selected_collection", ObjectSerializer.serialize(selectedCollection, "string", ""));
        }

        // Query Params
        if (selectedCompany !== undefined) {
            requestContext.setQueryParam("selected_company", ObjectSerializer.serialize(selectedCompany, "string", ""));
        }

        // Query Params
        if (selectedAgeRating !== undefined) {
            requestContext.setQueryParam("selected_age_rating", ObjectSerializer.serialize(selectedAgeRating, "string", ""));
        }

        // Query Params
        if (selectedStatus !== undefined) {
            requestContext.setQueryParam("selected_status", ObjectSerializer.serialize(selectedStatus, "string", ""));
        }

        // Query Params
        if (selectedRegion !== undefined) {
            requestContext.setQueryParam("selected_region", ObjectSerializer.serialize(selectedRegion, "string", ""));
        }

        // Query Params
        if (selectedLanguage !== undefined) {
            requestContext.setQueryParam("selected_language", ObjectSerializer.serialize(selectedLanguage, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["OAuth2PasswordBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["HTTPBasic"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Head rom content endpoint  Args:     request (Request): Fastapi Request object     id (int): Rom internal id     file_name (str): File name to download     file_ids (list[int]): List of file ids to download for multi-part roms  Returns:     FileResponse: Returns the response with headers
     * Head Rom Content
     * @param id 
     * @param fileName 
     */
    public async headRomContentApiRomsIdContentFileNameHead(id: number, fileName: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("RomsApi", "headRomContentApiRomsIdContentFileNameHead", "id");
        }


        // verify required parameter 'fileName' is not null or undefined
        if (fileName === null || fileName === undefined) {
            throw new RequiredError("RomsApi", "headRomContentApiRomsIdContentFileNameHead", "fileName");
        }


        // Path Params
        const localVarPath = '/api/roms/{id}/content/{file_name}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'file_name' + '}', encodeURIComponent(String(fileName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.HEAD);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["OAuth2PasswordBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["HTTPBasic"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update rom endpoint  Args:     request (Request): Fastapi Request object     id (Rom): Rom internal id     artwork (UploadFile, optional): Custom artwork to set as cover. Defaults to File(None).     unmatch_metadata: Remove the metadata matches for this game. Defaults to False.  Raises:     HTTPException: Rom not found in database  Returns:     DetailedRomSchema: Rom stored in the database
     * Update Rom
     * @param id 
     * @param removeCover 
     * @param unmatchMetadata 
     * @param artwork 
     */
    public async updateRomApiRomsIdPut(id: number, removeCover?: boolean, unmatchMetadata?: boolean, artwork?: HttpFile, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("RomsApi", "updateRomApiRomsIdPut", "id");
        }





        // Path Params
        const localVarPath = '/api/roms/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (removeCover !== undefined) {
            requestContext.setQueryParam("remove_cover", ObjectSerializer.serialize(removeCover, "boolean", ""));
        }

        // Query Params
        if (unmatchMetadata !== undefined) {
            requestContext.setQueryParam("unmatch_metadata", ObjectSerializer.serialize(unmatchMetadata, "boolean", ""));
        }

        // Form Params
        const useForm = canConsumeForm([
            'multipart/form-data',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (artwork !== undefined) {
             // TODO: replace .append with .set
             if (localVarFormParams instanceof FormData) {
                 localVarFormParams.append('artwork', artwork.data, artwork.name);
             }
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "multipart/form-data"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
        }

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["OAuth2PasswordBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["HTTPBasic"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update Rom User
     * @param id 
     */
    public async updateRomUserApiRomsIdPropsPut(id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("RomsApi", "updateRomUserApiRomsIdPropsPut", "id");
        }


        // Path Params
        const localVarPath = '/api/roms/{id}/props'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["OAuth2PasswordBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["HTTPBasic"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class RomsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addRomApiRomsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addRomApiRomsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addRomManualsApiRomsIdManualsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addRomManualsApiRomsIdManualsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteRomsApiRomsDeletePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteRomsApiRomsDeletePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MessageResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MessageResponse", ""
            ) as MessageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MessageResponse", ""
            ) as MessageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRomApiRomsIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRomApiRomsIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DetailedRomSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DetailedRomSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DetailedRomSchema", ""
            ) as DetailedRomSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DetailedRomSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DetailedRomSchema", ""
            ) as DetailedRomSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRomContentApiRomsIdContentFileNameGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRomContentApiRomsIdContentFileNameGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRomfileApiRomsfilesIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRomfileApiRomsfilesIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RomFileSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RomFileSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RomFileSchema", ""
            ) as RomFileSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RomFileSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RomFileSchema", ""
            ) as RomFileSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRomfileContentApiRomsfilesIdContentFileNameGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRomfileContentApiRomsfilesIdContentFileNameGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRomsApiRomsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRomsApiRomsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomLimitOffsetPageSimpleRomSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CustomLimitOffsetPageSimpleRomSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomLimitOffsetPageSimpleRomSchema", ""
            ) as CustomLimitOffsetPageSimpleRomSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CustomLimitOffsetPageSimpleRomSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomLimitOffsetPageSimpleRomSchema", ""
            ) as CustomLimitOffsetPageSimpleRomSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to headRomContentApiRomsIdContentFileNameHead
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async headRomContentApiRomsIdContentFileNameHeadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateRomApiRomsIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateRomApiRomsIdPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DetailedRomSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DetailedRomSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DetailedRomSchema", ""
            ) as DetailedRomSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DetailedRomSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DetailedRomSchema", ""
            ) as DetailedRomSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateRomUserApiRomsIdPropsPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateRomUserApiRomsIdPropsPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RomUserSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RomUserSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RomUserSchema", ""
            ) as RomUserSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RomUserSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RomUserSchema", ""
            ) as RomUserSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
