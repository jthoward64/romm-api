// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.js';
import {Configuration} from '../configuration.js';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.js';
import {ObjectSerializer} from '../models/ObjectSerializer.js';
import {ApiException} from './exception.js';
import {canConsumeForm, isCodeInRange} from '../util.js';
import {SecurityAuthentication} from '../auth/auth.js';


import { StatsReturn } from '../models/StatsReturn.js';

/**
 * no description
 */
export class StatsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Endpoint to return the current RomM stats  Returns:     dict: Dictionary with all the stats
     * Stats
     */
    public async statsApiStatsGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/api/stats';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class StatsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsApiStatsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsApiStatsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<StatsReturn >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StatsReturn = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StatsReturn", ""
            ) as StatsReturn;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: StatsReturn = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StatsReturn", ""
            ) as StatsReturn;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
