// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.js';
import {Configuration} from '../configuration.js';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.js';
import {ObjectSerializer} from '../models/ObjectSerializer.js';
import {ApiException} from './exception.js';
import {canConsumeForm, isCodeInRange} from '../util.js';
import {SecurityAuthentication} from '../auth/auth.js';


import { BodyCreateUserFromInviteApiUsersRegisterPost } from '../models/BodyCreateUserFromInviteApiUsersRegisterPost.js';
import { HTTPValidationError } from '../models/HTTPValidationError.js';
import { InviteLinkSchema } from '../models/InviteLinkSchema.js';
import { MessageResponse } from '../models/MessageResponse.js';
import { UserSchema } from '../models/UserSchema.js';

/**
 * no description
 */
export class UsersApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create user endpoint  Args:     request (Request): Fastapi Requests object     username (str): User username     password (str): User password     email (str): User email     role (str): RomM Role object represented as string  Returns:     UserSchema: Newly created user
     * Add User
     * @param username 
     * @param password 
     * @param email 
     * @param role 
     */
    public async addUserApiUsersPost(username: string, password: string, email: string, role: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'username' is not null or undefined
        if (username === null || username === undefined) {
            throw new RequiredError("UsersApi", "addUserApiUsersPost", "username");
        }


        // verify required parameter 'password' is not null or undefined
        if (password === null || password === undefined) {
            throw new RequiredError("UsersApi", "addUserApiUsersPost", "password");
        }


        // verify required parameter 'email' is not null or undefined
        if (email === null || email === undefined) {
            throw new RequiredError("UsersApi", "addUserApiUsersPost", "email");
        }


        // verify required parameter 'role' is not null or undefined
        if (role === null || role === undefined) {
            throw new RequiredError("UsersApi", "addUserApiUsersPost", "role");
        }


        // Path Params
        const localVarPath = '/api/users';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (username !== undefined) {
            requestContext.setQueryParam("username", ObjectSerializer.serialize(username, "string", ""));
        }

        // Query Params
        if (password !== undefined) {
            requestContext.setQueryParam("password", ObjectSerializer.serialize(password, "string", ""));
        }

        // Query Params
        if (email !== undefined) {
            requestContext.setQueryParam("email", ObjectSerializer.serialize(email, "string", ""));
        }

        // Query Params
        if (role !== undefined) {
            requestContext.setQueryParam("role", ObjectSerializer.serialize(role, "string", ""));
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
     * Create an invite link for a user.  Args:     request (Request): FastAPI Request object     role (str): The role of the user  Returns:     InviteLinkSchema: Invite link
     * Create Invite Link
     * @param role 
     */
    public async createInviteLinkApiUsersInviteLinkPost(role: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'role' is not null or undefined
        if (role === null || role === undefined) {
            throw new RequiredError("UsersApi", "createInviteLinkApiUsersInviteLinkPost", "role");
        }


        // Path Params
        const localVarPath = '/api/users/invite-link';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (role !== undefined) {
            requestContext.setQueryParam("role", ObjectSerializer.serialize(role, "string", ""));
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
     * Create user endpoint with invite link  Args:     username (str): User username     email (str): User email     password (str): User password     token (str): Invite link token  Returns:     UserSchema: Newly created user
     * Create User From Invite
     * @param bodyCreateUserFromInviteApiUsersRegisterPost 
     */
    public async createUserFromInviteApiUsersRegisterPost(bodyCreateUserFromInviteApiUsersRegisterPost: BodyCreateUserFromInviteApiUsersRegisterPost, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bodyCreateUserFromInviteApiUsersRegisterPost' is not null or undefined
        if (bodyCreateUserFromInviteApiUsersRegisterPost === null || bodyCreateUserFromInviteApiUsersRegisterPost === undefined) {
            throw new RequiredError("UsersApi", "createUserFromInviteApiUsersRegisterPost", "bodyCreateUserFromInviteApiUsersRegisterPost");
        }


        // Path Params
        const localVarPath = '/api/users/register';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bodyCreateUserFromInviteApiUsersRegisterPost, "BodyCreateUserFromInviteApiUsersRegisterPost", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete user endpoint  Args:     request (Request): Fastapi Request object     user_id (int): User internal id  Raises:     HTTPException: User is not found in database     HTTPException: User deleting itself     HTTPException: User is the last admin user  Returns:     MessageResponse: Standard message response
     * Delete User
     * @param id 
     */
    public async deleteUserApiUsersIdDelete(id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("UsersApi", "deleteUserApiUsersIdDelete", "id");
        }


        // Path Params
        const localVarPath = '/api/users/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
     * Get current user endpoint  Args:     request (Request): Fastapi Request object  Returns:     UserSchema | None: Current user
     * Get Current User
     */
    public async getCurrentUserApiUsersMeGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/api/users/me';

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
     * Get user endpoint  Args:     request (Request): Fastapi Request object  Returns:     UserSchem: User stored in the RomM\'s database
     * Get User
     * @param id 
     */
    public async getUserApiUsersIdGet(id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("UsersApi", "getUserApiUsersIdGet", "id");
        }


        // Path Params
        const localVarPath = '/api/users/{id}'
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
     * Get all users endpoint  Args:     request (Request): Fastapi Request object  Returns:     list[UserSchema]: All users stored in the RomM\'s database
     * Get Users
     */
    public async getUsersApiUsersGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/api/users';

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
     * Refresh Retro Achievements
     * @param id 
     */
    public async refreshRetroAchievementsApiUsersIdRaRefreshPost(id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("UsersApi", "refreshRetroAchievementsApiUsersIdRaRefreshPost", "id");
        }


        // Path Params
        const localVarPath = '/api/users/{id}/ra/refresh'
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
     * Update user endpoint  Args:     request (Request): Fastapi Requests object     user_id (int): User internal id     form_data (Annotated[UserUpdateForm, Depends): Form Data with user updated info  Raises:     HTTPException: User is not found in database     HTTPException: Username already in use by another user  Returns:     UserSchema: Updated user info
     * Update User
     * @param id 
     * @param username 
     * @param password 
     * @param email 
     * @param role 
     * @param enabled 
     * @param raUsername 
     * @param avatar 
     */
    public async updateUserApiUsersIdPut(id: number, username?: string, password?: string, email?: string, role?: string, enabled?: boolean, raUsername?: string, avatar?: HttpFile, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("UsersApi", "updateUserApiUsersIdPut", "id");
        }









        // Path Params
        const localVarPath = '/api/users/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (username !== undefined) {
            requestContext.setQueryParam("username", ObjectSerializer.serialize(username, "string", ""));
        }

        // Query Params
        if (password !== undefined) {
            requestContext.setQueryParam("password", ObjectSerializer.serialize(password, "string", ""));
        }

        // Query Params
        if (email !== undefined) {
            requestContext.setQueryParam("email", ObjectSerializer.serialize(email, "string", ""));
        }

        // Query Params
        if (role !== undefined) {
            requestContext.setQueryParam("role", ObjectSerializer.serialize(role, "string", ""));
        }

        // Query Params
        if (enabled !== undefined) {
            requestContext.setQueryParam("enabled", ObjectSerializer.serialize(enabled, "boolean", ""));
        }

        // Query Params
        if (raUsername !== undefined) {
            requestContext.setQueryParam("ra_username", ObjectSerializer.serialize(raUsername, "string", ""));
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

        if (avatar !== undefined) {
             // TODO: replace .append with .set
             if (localVarFormParams instanceof FormData) {
                 localVarFormParams.append('avatar', avatar, avatar.name);
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

}

export class UsersApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addUserApiUsersPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addUserApiUsersPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: UserSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserSchema", ""
            ) as UserSchema;
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
            const body: UserSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserSchema", ""
            ) as UserSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createInviteLinkApiUsersInviteLinkPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createInviteLinkApiUsersInviteLinkPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<InviteLinkSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: InviteLinkSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InviteLinkSchema", ""
            ) as InviteLinkSchema;
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
            const body: InviteLinkSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InviteLinkSchema", ""
            ) as InviteLinkSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createUserFromInviteApiUsersRegisterPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createUserFromInviteApiUsersRegisterPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: UserSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserSchema", ""
            ) as UserSchema;
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
            const body: UserSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserSchema", ""
            ) as UserSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteUserApiUsersIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteUserApiUsersIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MessageResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MessageResponse", ""
            ) as MessageResponse;
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
            const body: MessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MessageResponse", ""
            ) as MessageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCurrentUserApiUsersMeGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCurrentUserApiUsersMeGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserSchema", ""
            ) as UserSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UserSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserSchema", ""
            ) as UserSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUserApiUsersIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getUserApiUsersIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserSchema", ""
            ) as UserSchema;
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
            const body: UserSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserSchema", ""
            ) as UserSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsersApiUsersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getUsersApiUsersGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<UserSchema> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<UserSchema> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<UserSchema>", ""
            ) as Array<UserSchema>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<UserSchema> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<UserSchema>", ""
            ) as Array<UserSchema>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to refreshRetroAchievementsApiUsersIdRaRefreshPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async refreshRetroAchievementsApiUsersIdRaRefreshPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MessageResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MessageResponse", ""
            ) as MessageResponse;
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
            const body: MessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MessageResponse", ""
            ) as MessageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateUserApiUsersIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateUserApiUsersIdPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserSchema", ""
            ) as UserSchema;
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
            const body: UserSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserSchema", ""
            ) as UserSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
