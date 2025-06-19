import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.js';
import { Configuration, ConfigurationOptions } from '../configuration.js'
import type { Middleware } from '../middleware.js';

import { AddFirmwareResponse } from '../models/AddFirmwareResponse.js';
import { BodyCreateUserFromInviteApiUsersRegisterPost } from '../models/BodyCreateUserFromInviteApiUsersRegisterPost.js';
import { BodyRequestPasswordResetApiForgotPasswordPost } from '../models/BodyRequestPasswordResetApiForgotPasswordPost.js';
import { BodyResetPasswordApiResetPasswordPost } from '../models/BodyResetPasswordApiResetPasswordPost.js';
import { CollectionSchema } from '../models/CollectionSchema.js';
import { ConfigResponse } from '../models/ConfigResponse.js';
import { CustomLimitOffsetPageSimpleRomSchema } from '../models/CustomLimitOffsetPageSimpleRomSchema.js';
import { DetailedRomSchema } from '../models/DetailedRomSchema.js';
import { EarnedAchievement } from '../models/EarnedAchievement.js';
import { EmulationDict } from '../models/EmulationDict.js';
import { FilesystemDict } from '../models/FilesystemDict.js';
import { FirmwareSchema } from '../models/FirmwareSchema.js';
import { FrontendDict } from '../models/FrontendDict.js';
import { HTTPValidationError } from '../models/HTTPValidationError.js';
import { HeartbeatResponse } from '../models/HeartbeatResponse.js';
import { IGDBAgeRating } from '../models/IGDBAgeRating.js';
import { IGDBMetadataPlatform } from '../models/IGDBMetadataPlatform.js';
import { IGDBRelatedGame } from '../models/IGDBRelatedGame.js';
import { InviteLinkSchema } from '../models/InviteLinkSchema.js';
import { MessageResponse } from '../models/MessageResponse.js';
import { MetadataSourcesDict } from '../models/MetadataSourcesDict.js';
import { MobyMetadataPlatform } from '../models/MobyMetadataPlatform.js';
import { OIDCDict } from '../models/OIDCDict.js';
import { PlatformSchema } from '../models/PlatformSchema.js';
import { RAGameRomAchievement } from '../models/RAGameRomAchievement.js';
import { RAProgression } from '../models/RAProgression.js';
import { RAUserGameProgression } from '../models/RAUserGameProgression.js';
import { Role } from '../models/Role.js';
import { RomFileCategory } from '../models/RomFileCategory.js';
import { RomFileSchema } from '../models/RomFileSchema.js';
import { RomIGDBMetadata } from '../models/RomIGDBMetadata.js';
import { RomMetadataSchema } from '../models/RomMetadataSchema.js';
import { RomMobyMetadata } from '../models/RomMobyMetadata.js';
import { RomRAMetadata } from '../models/RomRAMetadata.js';
import { RomSSMetadata } from '../models/RomSSMetadata.js';
import { RomUserSchema } from '../models/RomUserSchema.js';
import { RomUserStatus } from '../models/RomUserStatus.js';
import { SaveSchema } from '../models/SaveSchema.js';
import { SchedulerDict } from '../models/SchedulerDict.js';
import { ScreenshotSchema } from '../models/ScreenshotSchema.js';
import { SearchCoverSchema } from '../models/SearchCoverSchema.js';
import { SearchRomSchema } from '../models/SearchRomSchema.js';
import { SiblingRomSchema } from '../models/SiblingRomSchema.js';
import { SimpleRomSchema } from '../models/SimpleRomSchema.js';
import { StateSchema } from '../models/StateSchema.js';
import { StatsReturn } from '../models/StatsReturn.js';
import { SystemDict } from '../models/SystemDict.js';
import { TaskDict } from '../models/TaskDict.js';
import { TinfoilFeedFileSchema } from '../models/TinfoilFeedFileSchema.js';
import { TinfoilFeedSchema } from '../models/TinfoilFeedSchema.js';
import { TinfoilFeedTitleDBSchema } from '../models/TinfoilFeedTitleDBSchema.js';
import { TokenResponse } from '../models/TokenResponse.js';
import { UserNotesSchema } from '../models/UserNotesSchema.js';
import { UserSchema } from '../models/UserSchema.js';
import { ValidationError } from '../models/ValidationError.js';
import { ValidationErrorLocInner } from '../models/ValidationErrorLocInner.js';
import { VirtualCollectionSchema } from '../models/VirtualCollectionSchema.js';
import { WatcherDict } from '../models/WatcherDict.js';
import { WebrcadeFeedCategorySchema } from '../models/WebrcadeFeedCategorySchema.js';
import { WebrcadeFeedItemPropsSchema } from '../models/WebrcadeFeedItemPropsSchema.js';
import { WebrcadeFeedItemSchema } from '../models/WebrcadeFeedItemSchema.js';
import { WebrcadeFeedSchema } from '../models/WebrcadeFeedSchema.js';

import { ObservableAuthApi } from "./ObservableAPI.js";
import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi.js";

export interface AuthApiAuthOpenidApiOauthOpenidGetRequest {
}

export interface AuthApiLoginApiLoginPostRequest {
}

export interface AuthApiLoginViaOpenidApiLoginOpenidGetRequest {
}

export interface AuthApiLogoutApiLogoutPostRequest {
}

export interface AuthApiRequestPasswordResetApiForgotPasswordPostRequest {
    /**
     * 
     * @type BodyRequestPasswordResetApiForgotPasswordPost
     * @memberof AuthApirequestPasswordResetApiForgotPasswordPost
     */
    bodyRequestPasswordResetApiForgotPasswordPost: BodyRequestPasswordResetApiForgotPasswordPost
}

export interface AuthApiResetPasswordApiResetPasswordPostRequest {
    /**
     * 
     * @type BodyResetPasswordApiResetPasswordPost
     * @memberof AuthApiresetPasswordApiResetPasswordPost
     */
    bodyResetPasswordApiResetPasswordPost: BodyResetPasswordApiResetPasswordPost
}

export interface AuthApiTokenApiTokenPostRequest {
    /**
     * 
     * Defaults to: &#39;password&#39;
     * @type string
     * @memberof AuthApitokenApiTokenPost
     */
    grantType?: string
    /**
     * 
     * Defaults to: &#39;&#39;
     * @type string
     * @memberof AuthApitokenApiTokenPost
     */
    scope?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApitokenApiTokenPost
     */
    username?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApitokenApiTokenPost
     */
    password?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApitokenApiTokenPost
     */
    clientId?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApitokenApiTokenPost
     */
    clientSecret?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApitokenApiTokenPost
     */
    refreshToken?: string
}

export class ObjectAuthApi {
    private api: ObservableAuthApi

    public constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * OIDC callback endpoint  Args:     request (Request): Fastapi Request object  Raises:     OIDCDisabledException: OAuth is disabled     OIDCNotConfiguredException: OAuth not configured     AuthCredentialsException: Invalid credentials     UserDisabledException: Auth is disabled  Returns:     RedirectResponse: Redirect to home page
     * Auth Openid
     * @param param the request object
     */
    public authOpenidApiOauthOpenidGetWithHttpInfo(param: AuthApiAuthOpenidApiOauthOpenidGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.authOpenidApiOauthOpenidGetWithHttpInfo( options).toPromise();
    }

    /**
     * OIDC callback endpoint  Args:     request (Request): Fastapi Request object  Raises:     OIDCDisabledException: OAuth is disabled     OIDCNotConfiguredException: OAuth not configured     AuthCredentialsException: Invalid credentials     UserDisabledException: Auth is disabled  Returns:     RedirectResponse: Redirect to home page
     * Auth Openid
     * @param param the request object
     */
    public authOpenidApiOauthOpenidGet(param: AuthApiAuthOpenidApiOauthOpenidGetRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.authOpenidApiOauthOpenidGet( options).toPromise();
    }

    /**
     * Session login endpoint  Args:     request (Request): Fastapi Request object     credentials: Defaults to Depends(HTTPBasic()).  Raises:     CredentialsException: Invalid credentials     UserDisabledException: Auth is disabled  Returns:     MessageResponse: Standard message response
     * Login
     * @param param the request object
     */
    public loginApiLoginPostWithHttpInfo(param: AuthApiLoginApiLoginPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        return this.api.loginApiLoginPostWithHttpInfo( options).toPromise();
    }

    /**
     * Session login endpoint  Args:     request (Request): Fastapi Request object     credentials: Defaults to Depends(HTTPBasic()).  Raises:     CredentialsException: Invalid credentials     UserDisabledException: Auth is disabled  Returns:     MessageResponse: Standard message response
     * Login
     * @param param the request object
     */
    public loginApiLoginPost(param: AuthApiLoginApiLoginPostRequest = {}, options?: ConfigurationOptions): Promise<MessageResponse> {
        return this.api.loginApiLoginPost( options).toPromise();
    }

    /**
     * OIDC login endpoint  Args:     request (Request): Fastapi Request object  Raises:     OIDCDisabledException: OAuth is disabled     OIDCNotConfiguredException: OAuth not configured  Returns:     RedirectResponse: Redirect to OIDC provider
     * Login Via Openid
     * @param param the request object
     */
    public loginViaOpenidApiLoginOpenidGetWithHttpInfo(param: AuthApiLoginViaOpenidApiLoginOpenidGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.loginViaOpenidApiLoginOpenidGetWithHttpInfo( options).toPromise();
    }

    /**
     * OIDC login endpoint  Args:     request (Request): Fastapi Request object  Raises:     OIDCDisabledException: OAuth is disabled     OIDCNotConfiguredException: OAuth not configured  Returns:     RedirectResponse: Redirect to OIDC provider
     * Login Via Openid
     * @param param the request object
     */
    public loginViaOpenidApiLoginOpenidGet(param: AuthApiLoginViaOpenidApiLoginOpenidGetRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.loginViaOpenidApiLoginOpenidGet( options).toPromise();
    }

    /**
     * Session logout endpoint  Args:     request (Request): Fastapi Request object  Returns:     MessageResponse: Standard message response
     * Logout
     * @param param the request object
     */
    public logoutApiLogoutPostWithHttpInfo(param: AuthApiLogoutApiLogoutPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        return this.api.logoutApiLogoutPostWithHttpInfo( options).toPromise();
    }

    /**
     * Session logout endpoint  Args:     request (Request): Fastapi Request object  Returns:     MessageResponse: Standard message response
     * Logout
     * @param param the request object
     */
    public logoutApiLogoutPost(param: AuthApiLogoutApiLogoutPostRequest = {}, options?: ConfigurationOptions): Promise<MessageResponse> {
        return this.api.logoutApiLogoutPost( options).toPromise();
    }

    /**
     * \"Request a password reset link for the user.  Args:     username (str): Username of the user requesting the reset Returns:     MessageResponse: Confirmation message
     * Request Password Reset
     * @param param the request object
     */
    public requestPasswordResetApiForgotPasswordPostWithHttpInfo(param: AuthApiRequestPasswordResetApiForgotPasswordPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        return this.api.requestPasswordResetApiForgotPasswordPostWithHttpInfo(param.bodyRequestPasswordResetApiForgotPasswordPost,  options).toPromise();
    }

    /**
     * \"Request a password reset link for the user.  Args:     username (str): Username of the user requesting the reset Returns:     MessageResponse: Confirmation message
     * Request Password Reset
     * @param param the request object
     */
    public requestPasswordResetApiForgotPasswordPost(param: AuthApiRequestPasswordResetApiForgotPasswordPostRequest, options?: ConfigurationOptions): Promise<MessageResponse> {
        return this.api.requestPasswordResetApiForgotPasswordPost(param.bodyRequestPasswordResetApiForgotPasswordPost,  options).toPromise();
    }

    /**
     * Reset password using the token.  Args:     token (str): Reset token from the URL     new_password (str): New user password  Returns:     MessageResponse: Confirmation message
     * Reset Password
     * @param param the request object
     */
    public resetPasswordApiResetPasswordPostWithHttpInfo(param: AuthApiResetPasswordApiResetPasswordPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        return this.api.resetPasswordApiResetPasswordPostWithHttpInfo(param.bodyResetPasswordApiResetPasswordPost,  options).toPromise();
    }

    /**
     * Reset password using the token.  Args:     token (str): Reset token from the URL     new_password (str): New user password  Returns:     MessageResponse: Confirmation message
     * Reset Password
     * @param param the request object
     */
    public resetPasswordApiResetPasswordPost(param: AuthApiResetPasswordApiResetPasswordPostRequest, options?: ConfigurationOptions): Promise<MessageResponse> {
        return this.api.resetPasswordApiResetPasswordPost(param.bodyResetPasswordApiResetPasswordPost,  options).toPromise();
    }

    /**
     * OAuth2 token endpoint  Args:     form_data (Annotated[OAuth2RequestForm, Depends): Form Data with OAuth2 info  Raises:     HTTPException: Missing refresh token     HTTPException: Invalid refresh token     HTTPException: Missing username or password     HTTPException: Invalid username or password     HTTPException: Client credentials are not yet supported     HTTPException: Invalid or unsupported grant type     HTTPException: Insufficient scope  Returns:     TokenResponse: TypedDict with the new generated token info
     * Token
     * @param param the request object
     */
    public tokenApiTokenPostWithHttpInfo(param: AuthApiTokenApiTokenPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<TokenResponse>> {
        return this.api.tokenApiTokenPostWithHttpInfo(param.grantType, param.scope, param.username, param.password, param.clientId, param.clientSecret, param.refreshToken,  options).toPromise();
    }

    /**
     * OAuth2 token endpoint  Args:     form_data (Annotated[OAuth2RequestForm, Depends): Form Data with OAuth2 info  Raises:     HTTPException: Missing refresh token     HTTPException: Invalid refresh token     HTTPException: Missing username or password     HTTPException: Invalid username or password     HTTPException: Client credentials are not yet supported     HTTPException: Invalid or unsupported grant type     HTTPException: Insufficient scope  Returns:     TokenResponse: TypedDict with the new generated token info
     * Token
     * @param param the request object
     */
    public tokenApiTokenPost(param: AuthApiTokenApiTokenPostRequest = {}, options?: ConfigurationOptions): Promise<TokenResponse> {
        return this.api.tokenApiTokenPost(param.grantType, param.scope, param.username, param.password, param.clientId, param.clientSecret, param.refreshToken,  options).toPromise();
    }

}

import { ObservableCollectionsApi } from "./ObservableAPI.js";
import { CollectionsApiRequestFactory, CollectionsApiResponseProcessor} from "../apis/CollectionsApi.js";

export interface CollectionsApiAddCollectionApiCollectionsPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type HttpFile
     * @memberof CollectionsApiaddCollectionApiCollectionsPost
     */
    artwork?: HttpFile
}

export interface CollectionsApiDeleteCollectionsApiCollectionsIdDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof CollectionsApideleteCollectionsApiCollectionsIdDelete
     */
    id: number
}

export interface CollectionsApiGetCollectionApiCollectionsIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof CollectionsApigetCollectionApiCollectionsIdGet
     */
    id: number
}

export interface CollectionsApiGetCollectionsApiCollectionsGetRequest {
}

export interface CollectionsApiGetVirtualCollectionApiCollectionsVirtualIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CollectionsApigetVirtualCollectionApiCollectionsVirtualIdGet
     */
    id: string
}

export interface CollectionsApiGetVirtualCollectionsApiCollectionsVirtualGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CollectionsApigetVirtualCollectionsApiCollectionsVirtualGet
     */
    type: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof CollectionsApigetVirtualCollectionsApiCollectionsVirtualGet
     */
    limit?: number
}

export interface CollectionsApiUpdateCollectionApiCollectionsIdPutRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof CollectionsApiupdateCollectionApiCollectionsIdPut
     */
    id: number
    /**
     * 
     * Defaults to: false
     * @type boolean
     * @memberof CollectionsApiupdateCollectionApiCollectionsIdPut
     */
    removeCover?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof CollectionsApiupdateCollectionApiCollectionsIdPut
     */
    isPublic?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type HttpFile
     * @memberof CollectionsApiupdateCollectionApiCollectionsIdPut
     */
    artwork?: HttpFile
}

export class ObjectCollectionsApi {
    private api: ObservableCollectionsApi

    public constructor(configuration: Configuration, requestFactory?: CollectionsApiRequestFactory, responseProcessor?: CollectionsApiResponseProcessor) {
        this.api = new ObservableCollectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create collection endpoint  Args:     request (Request): Fastapi Request object  Returns:     CollectionSchema: Just created collection
     * Add Collection
     * @param param the request object
     */
    public addCollectionApiCollectionsPostWithHttpInfo(param: CollectionsApiAddCollectionApiCollectionsPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionSchema>> {
        return this.api.addCollectionApiCollectionsPostWithHttpInfo(param.artwork,  options).toPromise();
    }

    /**
     * Create collection endpoint  Args:     request (Request): Fastapi Request object  Returns:     CollectionSchema: Just created collection
     * Add Collection
     * @param param the request object
     */
    public addCollectionApiCollectionsPost(param: CollectionsApiAddCollectionApiCollectionsPostRequest = {}, options?: ConfigurationOptions): Promise<CollectionSchema> {
        return this.api.addCollectionApiCollectionsPost(param.artwork,  options).toPromise();
    }

    /**
     * Delete collections endpoint  Args:     request (Request): Fastapi Request object     {         \"collections\": List of rom\'s ids to delete     }  Raises:     HTTPException: Collection not found  Returns:     MessageResponse: Standard message response
     * Delete Collections
     * @param param the request object
     */
    public deleteCollectionsApiCollectionsIdDeleteWithHttpInfo(param: CollectionsApiDeleteCollectionsApiCollectionsIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        return this.api.deleteCollectionsApiCollectionsIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete collections endpoint  Args:     request (Request): Fastapi Request object     {         \"collections\": List of rom\'s ids to delete     }  Raises:     HTTPException: Collection not found  Returns:     MessageResponse: Standard message response
     * Delete Collections
     * @param param the request object
     */
    public deleteCollectionsApiCollectionsIdDelete(param: CollectionsApiDeleteCollectionsApiCollectionsIdDeleteRequest, options?: ConfigurationOptions): Promise<MessageResponse> {
        return this.api.deleteCollectionsApiCollectionsIdDelete(param.id,  options).toPromise();
    }

    /**
     * Get collections endpoint  Args:     request (Request): Fastapi Request object     id (int, optional): Collection id. Defaults to None.  Returns:     CollectionSchema: Collection
     * Get Collection
     * @param param the request object
     */
    public getCollectionApiCollectionsIdGetWithHttpInfo(param: CollectionsApiGetCollectionApiCollectionsIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionSchema>> {
        return this.api.getCollectionApiCollectionsIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get collections endpoint  Args:     request (Request): Fastapi Request object     id (int, optional): Collection id. Defaults to None.  Returns:     CollectionSchema: Collection
     * Get Collection
     * @param param the request object
     */
    public getCollectionApiCollectionsIdGet(param: CollectionsApiGetCollectionApiCollectionsIdGetRequest, options?: ConfigurationOptions): Promise<CollectionSchema> {
        return this.api.getCollectionApiCollectionsIdGet(param.id,  options).toPromise();
    }

    /**
     * Get collections endpoint  Args:     request (Request): Fastapi Request object     id (int, optional): Collection id. Defaults to None.  Returns:     list[CollectionSchema]: List of collections
     * Get Collections
     * @param param the request object
     */
    public getCollectionsApiCollectionsGetWithHttpInfo(param: CollectionsApiGetCollectionsApiCollectionsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<CollectionSchema>>> {
        return this.api.getCollectionsApiCollectionsGetWithHttpInfo( options).toPromise();
    }

    /**
     * Get collections endpoint  Args:     request (Request): Fastapi Request object     id (int, optional): Collection id. Defaults to None.  Returns:     list[CollectionSchema]: List of collections
     * Get Collections
     * @param param the request object
     */
    public getCollectionsApiCollectionsGet(param: CollectionsApiGetCollectionsApiCollectionsGetRequest = {}, options?: ConfigurationOptions): Promise<Array<CollectionSchema>> {
        return this.api.getCollectionsApiCollectionsGet( options).toPromise();
    }

    /**
     * Get virtual collections endpoint  Args:     request (Request): Fastapi Request object     id (str): Virtual collection id  Returns:     VirtualCollectionSchema: Virtual collection
     * Get Virtual Collection
     * @param param the request object
     */
    public getVirtualCollectionApiCollectionsVirtualIdGetWithHttpInfo(param: CollectionsApiGetVirtualCollectionApiCollectionsVirtualIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<VirtualCollectionSchema>> {
        return this.api.getVirtualCollectionApiCollectionsVirtualIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get virtual collections endpoint  Args:     request (Request): Fastapi Request object     id (str): Virtual collection id  Returns:     VirtualCollectionSchema: Virtual collection
     * Get Virtual Collection
     * @param param the request object
     */
    public getVirtualCollectionApiCollectionsVirtualIdGet(param: CollectionsApiGetVirtualCollectionApiCollectionsVirtualIdGetRequest, options?: ConfigurationOptions): Promise<VirtualCollectionSchema> {
        return this.api.getVirtualCollectionApiCollectionsVirtualIdGet(param.id,  options).toPromise();
    }

    /**
     * Get virtual collections endpoint  Args:     request (Request): Fastapi Request object  Returns:     list[VirtualCollectionSchema]: List of virtual collections
     * Get Virtual Collections
     * @param param the request object
     */
    public getVirtualCollectionsApiCollectionsVirtualGetWithHttpInfo(param: CollectionsApiGetVirtualCollectionsApiCollectionsVirtualGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<VirtualCollectionSchema>>> {
        return this.api.getVirtualCollectionsApiCollectionsVirtualGetWithHttpInfo(param.type, param.limit,  options).toPromise();
    }

    /**
     * Get virtual collections endpoint  Args:     request (Request): Fastapi Request object  Returns:     list[VirtualCollectionSchema]: List of virtual collections
     * Get Virtual Collections
     * @param param the request object
     */
    public getVirtualCollectionsApiCollectionsVirtualGet(param: CollectionsApiGetVirtualCollectionsApiCollectionsVirtualGetRequest, options?: ConfigurationOptions): Promise<Array<VirtualCollectionSchema>> {
        return this.api.getVirtualCollectionsApiCollectionsVirtualGet(param.type, param.limit,  options).toPromise();
    }

    /**
     * Update collection endpoint  Args:     request (Request): Fastapi Request object  Returns:     MessageResponse: Standard message response
     * Update Collection
     * @param param the request object
     */
    public updateCollectionApiCollectionsIdPutWithHttpInfo(param: CollectionsApiUpdateCollectionApiCollectionsIdPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionSchema>> {
        return this.api.updateCollectionApiCollectionsIdPutWithHttpInfo(param.id, param.removeCover, param.isPublic, param.artwork,  options).toPromise();
    }

    /**
     * Update collection endpoint  Args:     request (Request): Fastapi Request object  Returns:     MessageResponse: Standard message response
     * Update Collection
     * @param param the request object
     */
    public updateCollectionApiCollectionsIdPut(param: CollectionsApiUpdateCollectionApiCollectionsIdPutRequest, options?: ConfigurationOptions): Promise<CollectionSchema> {
        return this.api.updateCollectionApiCollectionsIdPut(param.id, param.removeCover, param.isPublic, param.artwork,  options).toPromise();
    }

}

import { ObservableConfigApi } from "./ObservableAPI.js";
import { ConfigApiRequestFactory, ConfigApiResponseProcessor} from "../apis/ConfigApi.js";

export interface ConfigApiAddExclusionApiConfigExcludePostRequest {
}

export interface ConfigApiAddPlatformBindingApiConfigSystemPlatformsPostRequest {
}

export interface ConfigApiAddPlatformVersionApiConfigSystemVersionsPostRequest {
}

export interface ConfigApiDeleteExclusionApiConfigExcludeExclusionTypeExclusionValueDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ConfigApideleteExclusionApiConfigExcludeExclusionTypeExclusionValueDelete
     */
    exclusionType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ConfigApideleteExclusionApiConfigExcludeExclusionTypeExclusionValueDelete
     */
    exclusionValue: string
}

export interface ConfigApiDeletePlatformBindingApiConfigSystemPlatformsFsSlugDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ConfigApideletePlatformBindingApiConfigSystemPlatformsFsSlugDelete
     */
    fsSlug: string
}

export interface ConfigApiDeletePlatformVersionApiConfigSystemVersionsFsSlugDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ConfigApideletePlatformVersionApiConfigSystemVersionsFsSlugDelete
     */
    fsSlug: string
}

export interface ConfigApiGetConfigApiConfigGetRequest {
}

export class ObjectConfigApi {
    private api: ObservableConfigApi

    public constructor(configuration: Configuration, requestFactory?: ConfigApiRequestFactory, responseProcessor?: ConfigApiResponseProcessor) {
        this.api = new ObservableConfigApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add platform exclusion to the configuration
     * Add Exclusion
     * @param param the request object
     */
    public addExclusionApiConfigExcludePostWithHttpInfo(param: ConfigApiAddExclusionApiConfigExcludePostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        return this.api.addExclusionApiConfigExcludePostWithHttpInfo( options).toPromise();
    }

    /**
     * Add platform exclusion to the configuration
     * Add Exclusion
     * @param param the request object
     */
    public addExclusionApiConfigExcludePost(param: ConfigApiAddExclusionApiConfigExcludePostRequest = {}, options?: ConfigurationOptions): Promise<MessageResponse> {
        return this.api.addExclusionApiConfigExcludePost( options).toPromise();
    }

    /**
     * Add platform binding to the configuration
     * Add Platform Binding
     * @param param the request object
     */
    public addPlatformBindingApiConfigSystemPlatformsPostWithHttpInfo(param: ConfigApiAddPlatformBindingApiConfigSystemPlatformsPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        return this.api.addPlatformBindingApiConfigSystemPlatformsPostWithHttpInfo( options).toPromise();
    }

    /**
     * Add platform binding to the configuration
     * Add Platform Binding
     * @param param the request object
     */
    public addPlatformBindingApiConfigSystemPlatformsPost(param: ConfigApiAddPlatformBindingApiConfigSystemPlatformsPostRequest = {}, options?: ConfigurationOptions): Promise<MessageResponse> {
        return this.api.addPlatformBindingApiConfigSystemPlatformsPost( options).toPromise();
    }

    /**
     * Add platform version to the configuration
     * Add Platform Version
     * @param param the request object
     */
    public addPlatformVersionApiConfigSystemVersionsPostWithHttpInfo(param: ConfigApiAddPlatformVersionApiConfigSystemVersionsPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        return this.api.addPlatformVersionApiConfigSystemVersionsPostWithHttpInfo( options).toPromise();
    }

    /**
     * Add platform version to the configuration
     * Add Platform Version
     * @param param the request object
     */
    public addPlatformVersionApiConfigSystemVersionsPost(param: ConfigApiAddPlatformVersionApiConfigSystemVersionsPostRequest = {}, options?: ConfigurationOptions): Promise<MessageResponse> {
        return this.api.addPlatformVersionApiConfigSystemVersionsPost( options).toPromise();
    }

    /**
     * Delete platform binding from the configuration
     * Delete Exclusion
     * @param param the request object
     */
    public deleteExclusionApiConfigExcludeExclusionTypeExclusionValueDeleteWithHttpInfo(param: ConfigApiDeleteExclusionApiConfigExcludeExclusionTypeExclusionValueDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        return this.api.deleteExclusionApiConfigExcludeExclusionTypeExclusionValueDeleteWithHttpInfo(param.exclusionType, param.exclusionValue,  options).toPromise();
    }

    /**
     * Delete platform binding from the configuration
     * Delete Exclusion
     * @param param the request object
     */
    public deleteExclusionApiConfigExcludeExclusionTypeExclusionValueDelete(param: ConfigApiDeleteExclusionApiConfigExcludeExclusionTypeExclusionValueDeleteRequest, options?: ConfigurationOptions): Promise<MessageResponse> {
        return this.api.deleteExclusionApiConfigExcludeExclusionTypeExclusionValueDelete(param.exclusionType, param.exclusionValue,  options).toPromise();
    }

    /**
     * Delete platform binding from the configuration
     * Delete Platform Binding
     * @param param the request object
     */
    public deletePlatformBindingApiConfigSystemPlatformsFsSlugDeleteWithHttpInfo(param: ConfigApiDeletePlatformBindingApiConfigSystemPlatformsFsSlugDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        return this.api.deletePlatformBindingApiConfigSystemPlatformsFsSlugDeleteWithHttpInfo(param.fsSlug,  options).toPromise();
    }

    /**
     * Delete platform binding from the configuration
     * Delete Platform Binding
     * @param param the request object
     */
    public deletePlatformBindingApiConfigSystemPlatformsFsSlugDelete(param: ConfigApiDeletePlatformBindingApiConfigSystemPlatformsFsSlugDeleteRequest, options?: ConfigurationOptions): Promise<MessageResponse> {
        return this.api.deletePlatformBindingApiConfigSystemPlatformsFsSlugDelete(param.fsSlug,  options).toPromise();
    }

    /**
     * Delete platform version from the configuration
     * Delete Platform Version
     * @param param the request object
     */
    public deletePlatformVersionApiConfigSystemVersionsFsSlugDeleteWithHttpInfo(param: ConfigApiDeletePlatformVersionApiConfigSystemVersionsFsSlugDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        return this.api.deletePlatformVersionApiConfigSystemVersionsFsSlugDeleteWithHttpInfo(param.fsSlug,  options).toPromise();
    }

    /**
     * Delete platform version from the configuration
     * Delete Platform Version
     * @param param the request object
     */
    public deletePlatformVersionApiConfigSystemVersionsFsSlugDelete(param: ConfigApiDeletePlatformVersionApiConfigSystemVersionsFsSlugDeleteRequest, options?: ConfigurationOptions): Promise<MessageResponse> {
        return this.api.deletePlatformVersionApiConfigSystemVersionsFsSlugDelete(param.fsSlug,  options).toPromise();
    }

    /**
     * Get config endpoint  Returns:     ConfigResponse: RomM\'s configuration
     * Get Config
     * @param param the request object
     */
    public getConfigApiConfigGetWithHttpInfo(param: ConfigApiGetConfigApiConfigGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ConfigResponse>> {
        return this.api.getConfigApiConfigGetWithHttpInfo( options).toPromise();
    }

    /**
     * Get config endpoint  Returns:     ConfigResponse: RomM\'s configuration
     * Get Config
     * @param param the request object
     */
    public getConfigApiConfigGet(param: ConfigApiGetConfigApiConfigGetRequest = {}, options?: ConfigurationOptions): Promise<ConfigResponse> {
        return this.api.getConfigApiConfigGet( options).toPromise();
    }

}

import { ObservableFeedsApi } from "./ObservableAPI.js";
import { FeedsApiRequestFactory, FeedsApiResponseProcessor} from "../apis/FeedsApi.js";

export interface FeedsApiPlatformsWebrcadeFeedApiWebrcadeFeedGetRequest {
}

export interface FeedsApiTinfoilIndexFeedApiTinfoilFeedGetRequest {
    /**
     * 
     * Defaults to: &#39;switch&#39;
     * @type string
     * @memberof FeedsApitinfoilIndexFeedApiTinfoilFeedGet
     */
    slug?: string
}

export class ObjectFeedsApi {
    private api: ObservableFeedsApi

    public constructor(configuration: Configuration, requestFactory?: FeedsApiRequestFactory, responseProcessor?: FeedsApiResponseProcessor) {
        this.api = new ObservableFeedsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get webrcade feed endpoint https://docs.webrcade.com/feeds/format/  Args:     request (Request): Fastapi Request object  Returns:     WebrcadeFeedSchema: Webrcade feed object schema
     * Platforms Webrcade Feed
     * @param param the request object
     */
    public platformsWebrcadeFeedApiWebrcadeFeedGetWithHttpInfo(param: FeedsApiPlatformsWebrcadeFeedApiWebrcadeFeedGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<WebrcadeFeedSchema>> {
        return this.api.platformsWebrcadeFeedApiWebrcadeFeedGetWithHttpInfo( options).toPromise();
    }

    /**
     * Get webrcade feed endpoint https://docs.webrcade.com/feeds/format/  Args:     request (Request): Fastapi Request object  Returns:     WebrcadeFeedSchema: Webrcade feed object schema
     * Platforms Webrcade Feed
     * @param param the request object
     */
    public platformsWebrcadeFeedApiWebrcadeFeedGet(param: FeedsApiPlatformsWebrcadeFeedApiWebrcadeFeedGetRequest = {}, options?: ConfigurationOptions): Promise<WebrcadeFeedSchema> {
        return this.api.platformsWebrcadeFeedApiWebrcadeFeedGet( options).toPromise();
    }

    /**
     * Get tinfoil custom index feed endpoint https://blawar.github.io/tinfoil/custom_index/  Args:     request (Request): Fastapi Request object     slug (str, optional): Platform slug. Defaults to \"switch\".  Returns:     TinfoilFeedSchema: Tinfoil feed object schema
     * Tinfoil Index Feed
     * @param param the request object
     */
    public tinfoilIndexFeedApiTinfoilFeedGetWithHttpInfo(param: FeedsApiTinfoilIndexFeedApiTinfoilFeedGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<TinfoilFeedSchema>> {
        return this.api.tinfoilIndexFeedApiTinfoilFeedGetWithHttpInfo(param.slug,  options).toPromise();
    }

    /**
     * Get tinfoil custom index feed endpoint https://blawar.github.io/tinfoil/custom_index/  Args:     request (Request): Fastapi Request object     slug (str, optional): Platform slug. Defaults to \"switch\".  Returns:     TinfoilFeedSchema: Tinfoil feed object schema
     * Tinfoil Index Feed
     * @param param the request object
     */
    public tinfoilIndexFeedApiTinfoilFeedGet(param: FeedsApiTinfoilIndexFeedApiTinfoilFeedGetRequest = {}, options?: ConfigurationOptions): Promise<TinfoilFeedSchema> {
        return this.api.tinfoilIndexFeedApiTinfoilFeedGet(param.slug,  options).toPromise();
    }

}

import { ObservableFirmwareApi } from "./ObservableAPI.js";
import { FirmwareApiRequestFactory, FirmwareApiResponseProcessor} from "../apis/FirmwareApi.js";

export interface FirmwareApiAddFirmwareApiFirmwarePostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FirmwareApiaddFirmwareApiFirmwarePost
     */
    platformId: number
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;HttpFile&gt;
     * @memberof FirmwareApiaddFirmwareApiFirmwarePost
     */
    files: Array<HttpFile>
}

export interface FirmwareApiDeleteFirmwareApiFirmwareDeletePostRequest {
}

export interface FirmwareApiGetFirmwareApiFirmwareIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FirmwareApigetFirmwareApiFirmwareIdGet
     */
    id: number
}

export interface FirmwareApiGetFirmwareContentApiFirmwareIdContentFileNameGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FirmwareApigetFirmwareContentApiFirmwareIdContentFileNameGet
     */
    id: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FirmwareApigetFirmwareContentApiFirmwareIdContentFileNameGet
     */
    fileName: string
}

export interface FirmwareApiGetPlatformFirmwareApiFirmwareGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FirmwareApigetPlatformFirmwareApiFirmwareGet
     */
    platformId?: number
}

export interface FirmwareApiHeadFirmwareContentApiFirmwareIdContentFileNameHeadRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FirmwareApiheadFirmwareContentApiFirmwareIdContentFileNameHead
     */
    id: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FirmwareApiheadFirmwareContentApiFirmwareIdContentFileNameHead
     */
    fileName: string
}

export class ObjectFirmwareApi {
    private api: ObservableFirmwareApi

    public constructor(configuration: Configuration, requestFactory?: FirmwareApiRequestFactory, responseProcessor?: FirmwareApiResponseProcessor) {
        this.api = new ObservableFirmwareApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Upload firmware files endpoint  Args:     request (Request): Fastapi Request object     platform_slug (str): Slug of the platform where to upload the files     files (list[UploadFile], optional): List of files to upload  Raises:     HTTPException  Returns:     AddFirmwareResponse: Standard message response
     * Add Firmware
     * @param param the request object
     */
    public addFirmwareApiFirmwarePostWithHttpInfo(param: FirmwareApiAddFirmwareApiFirmwarePostRequest, options?: ConfigurationOptions): Promise<HttpInfo<AddFirmwareResponse>> {
        return this.api.addFirmwareApiFirmwarePostWithHttpInfo(param.platformId, param.files,  options).toPromise();
    }

    /**
     * Upload firmware files endpoint  Args:     request (Request): Fastapi Request object     platform_slug (str): Slug of the platform where to upload the files     files (list[UploadFile], optional): List of files to upload  Raises:     HTTPException  Returns:     AddFirmwareResponse: Standard message response
     * Add Firmware
     * @param param the request object
     */
    public addFirmwareApiFirmwarePost(param: FirmwareApiAddFirmwareApiFirmwarePostRequest, options?: ConfigurationOptions): Promise<AddFirmwareResponse> {
        return this.api.addFirmwareApiFirmwarePost(param.platformId, param.files,  options).toPromise();
    }

    /**
     * Delete firmware endpoint  Args:     request (Request): Fastapi Request object.         {             \"firmware\": List of firmware IDs to delete         }     delete_from_fs (bool, optional): Flag to delete rom from filesystem. Defaults to False.  Returns:     MessageResponse: Standard message response
     * Delete Firmware
     * @param param the request object
     */
    public deleteFirmwareApiFirmwareDeletePostWithHttpInfo(param: FirmwareApiDeleteFirmwareApiFirmwareDeletePostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        return this.api.deleteFirmwareApiFirmwareDeletePostWithHttpInfo( options).toPromise();
    }

    /**
     * Delete firmware endpoint  Args:     request (Request): Fastapi Request object.         {             \"firmware\": List of firmware IDs to delete         }     delete_from_fs (bool, optional): Flag to delete rom from filesystem. Defaults to False.  Returns:     MessageResponse: Standard message response
     * Delete Firmware
     * @param param the request object
     */
    public deleteFirmwareApiFirmwareDeletePost(param: FirmwareApiDeleteFirmwareApiFirmwareDeletePostRequest = {}, options?: ConfigurationOptions): Promise<MessageResponse> {
        return this.api.deleteFirmwareApiFirmwareDeletePost( options).toPromise();
    }

    /**
     * Get firmware endpoint  Args:     request (Request): Fastapi Request object     id (int): Firmware internal id  Returns:     FirmwareSchema: Firmware stored in the database
     * Get Firmware
     * @param param the request object
     */
    public getFirmwareApiFirmwareIdGetWithHttpInfo(param: FirmwareApiGetFirmwareApiFirmwareIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<FirmwareSchema>> {
        return this.api.getFirmwareApiFirmwareIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get firmware endpoint  Args:     request (Request): Fastapi Request object     id (int): Firmware internal id  Returns:     FirmwareSchema: Firmware stored in the database
     * Get Firmware
     * @param param the request object
     */
    public getFirmwareApiFirmwareIdGet(param: FirmwareApiGetFirmwareApiFirmwareIdGetRequest, options?: ConfigurationOptions): Promise<FirmwareSchema> {
        return this.api.getFirmwareApiFirmwareIdGet(param.id,  options).toPromise();
    }

    /**
     * Download firmware endpoint  Args:     request (Request): Fastapi Request object     id (int): Rom internal id     file_name (str): Required due to a bug in emulatorjs  Returns:     FileResponse: Returns the firmware file
     * Get Firmware Content
     * @param param the request object
     */
    public getFirmwareContentApiFirmwareIdContentFileNameGetWithHttpInfo(param: FirmwareApiGetFirmwareContentApiFirmwareIdContentFileNameGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.getFirmwareContentApiFirmwareIdContentFileNameGetWithHttpInfo(param.id, param.fileName,  options).toPromise();
    }

    /**
     * Download firmware endpoint  Args:     request (Request): Fastapi Request object     id (int): Rom internal id     file_name (str): Required due to a bug in emulatorjs  Returns:     FileResponse: Returns the firmware file
     * Get Firmware Content
     * @param param the request object
     */
    public getFirmwareContentApiFirmwareIdContentFileNameGet(param: FirmwareApiGetFirmwareContentApiFirmwareIdContentFileNameGetRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.getFirmwareContentApiFirmwareIdContentFileNameGet(param.id, param.fileName,  options).toPromise();
    }

    /**
     * Get firmware endpoint  Args:     request (Request): Fastapi Request object  Returns:     list[FirmwareSchema]: Firmware stored in the database
     * Get Platform Firmware
     * @param param the request object
     */
    public getPlatformFirmwareApiFirmwareGetWithHttpInfo(param: FirmwareApiGetPlatformFirmwareApiFirmwareGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<FirmwareSchema>>> {
        return this.api.getPlatformFirmwareApiFirmwareGetWithHttpInfo(param.platformId,  options).toPromise();
    }

    /**
     * Get firmware endpoint  Args:     request (Request): Fastapi Request object  Returns:     list[FirmwareSchema]: Firmware stored in the database
     * Get Platform Firmware
     * @param param the request object
     */
    public getPlatformFirmwareApiFirmwareGet(param: FirmwareApiGetPlatformFirmwareApiFirmwareGetRequest = {}, options?: ConfigurationOptions): Promise<Array<FirmwareSchema>> {
        return this.api.getPlatformFirmwareApiFirmwareGet(param.platformId,  options).toPromise();
    }

    /**
     * Head firmware content endpoint  Args:     request (Request): Fastapi Request object     id (int): Rom internal id     file_name (str): Required due to a bug in emulatorjs  Returns:     FileResponse: Returns the response with headers
     * Head Firmware Content
     * @param param the request object
     */
    public headFirmwareContentApiFirmwareIdContentFileNameHeadWithHttpInfo(param: FirmwareApiHeadFirmwareContentApiFirmwareIdContentFileNameHeadRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.headFirmwareContentApiFirmwareIdContentFileNameHeadWithHttpInfo(param.id, param.fileName,  options).toPromise();
    }

    /**
     * Head firmware content endpoint  Args:     request (Request): Fastapi Request object     id (int): Rom internal id     file_name (str): Required due to a bug in emulatorjs  Returns:     FileResponse: Returns the response with headers
     * Head Firmware Content
     * @param param the request object
     */
    public headFirmwareContentApiFirmwareIdContentFileNameHead(param: FirmwareApiHeadFirmwareContentApiFirmwareIdContentFileNameHeadRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.headFirmwareContentApiFirmwareIdContentFileNameHead(param.id, param.fileName,  options).toPromise();
    }

}

import { ObservablePlatformsApi } from "./ObservableAPI.js";
import { PlatformsApiRequestFactory, PlatformsApiResponseProcessor} from "../apis/PlatformsApi.js";

export interface PlatformsApiAddPlatformsApiPlatformsPostRequest {
}

export interface PlatformsApiDeletePlatformsApiPlatformsIdDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof PlatformsApideletePlatformsApiPlatformsIdDelete
     */
    id: number
}

export interface PlatformsApiGetPlatformApiPlatformsIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof PlatformsApigetPlatformApiPlatformsIdGet
     */
    id: number
}

export interface PlatformsApiGetPlatformsApiPlatformsGetRequest {
}

export interface PlatformsApiGetSupportedPlatformsApiPlatformsSupportedGetRequest {
}

export interface PlatformsApiUpdatePlatformApiPlatformsIdPutRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof PlatformsApiupdatePlatformApiPlatformsIdPut
     */
    id: number
}

export class ObjectPlatformsApi {
    private api: ObservablePlatformsApi

    public constructor(configuration: Configuration, requestFactory?: PlatformsApiRequestFactory, responseProcessor?: PlatformsApiResponseProcessor) {
        this.api = new ObservablePlatformsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create platform endpoint  Args:     request (Request): Fastapi Request object  Returns:     PlatformSchema: Just created platform
     * Add Platforms
     * @param param the request object
     */
    public addPlatformsApiPlatformsPostWithHttpInfo(param: PlatformsApiAddPlatformsApiPlatformsPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PlatformSchema>> {
        return this.api.addPlatformsApiPlatformsPostWithHttpInfo( options).toPromise();
    }

    /**
     * Create platform endpoint  Args:     request (Request): Fastapi Request object  Returns:     PlatformSchema: Just created platform
     * Add Platforms
     * @param param the request object
     */
    public addPlatformsApiPlatformsPost(param: PlatformsApiAddPlatformsApiPlatformsPostRequest = {}, options?: ConfigurationOptions): Promise<PlatformSchema> {
        return this.api.addPlatformsApiPlatformsPost( options).toPromise();
    }

    /**
     * Delete platforms endpoint  Args:     request (Request): Fastapi Request object     {         \"platforms\": List of rom\'s ids to delete     }  Raises:     HTTPException: Platform not found  Returns:     MessageResponse: Standard message response
     * Delete Platforms
     * @param param the request object
     */
    public deletePlatformsApiPlatformsIdDeleteWithHttpInfo(param: PlatformsApiDeletePlatformsApiPlatformsIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        return this.api.deletePlatformsApiPlatformsIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete platforms endpoint  Args:     request (Request): Fastapi Request object     {         \"platforms\": List of rom\'s ids to delete     }  Raises:     HTTPException: Platform not found  Returns:     MessageResponse: Standard message response
     * Delete Platforms
     * @param param the request object
     */
    public deletePlatformsApiPlatformsIdDelete(param: PlatformsApiDeletePlatformsApiPlatformsIdDeleteRequest, options?: ConfigurationOptions): Promise<MessageResponse> {
        return this.api.deletePlatformsApiPlatformsIdDelete(param.id,  options).toPromise();
    }

    /**
     * Get platforms endpoint  Args:     request (Request): Fastapi Request object     id (int, optional): Platform id. Defaults to None.  Returns:     PlatformSchema: Platform
     * Get Platform
     * @param param the request object
     */
    public getPlatformApiPlatformsIdGetWithHttpInfo(param: PlatformsApiGetPlatformApiPlatformsIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<PlatformSchema>> {
        return this.api.getPlatformApiPlatformsIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get platforms endpoint  Args:     request (Request): Fastapi Request object     id (int, optional): Platform id. Defaults to None.  Returns:     PlatformSchema: Platform
     * Get Platform
     * @param param the request object
     */
    public getPlatformApiPlatformsIdGet(param: PlatformsApiGetPlatformApiPlatformsIdGetRequest, options?: ConfigurationOptions): Promise<PlatformSchema> {
        return this.api.getPlatformApiPlatformsIdGet(param.id,  options).toPromise();
    }

    /**
     * Get platforms endpoint  Args:     request (Request): Fastapi Request object     id (int, optional): Platform id. Defaults to None.  Returns:     list[PlatformSchema]: List of platforms
     * Get Platforms
     * @param param the request object
     */
    public getPlatformsApiPlatformsGetWithHttpInfo(param: PlatformsApiGetPlatformsApiPlatformsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<PlatformSchema>>> {
        return this.api.getPlatformsApiPlatformsGetWithHttpInfo( options).toPromise();
    }

    /**
     * Get platforms endpoint  Args:     request (Request): Fastapi Request object     id (int, optional): Platform id. Defaults to None.  Returns:     list[PlatformSchema]: List of platforms
     * Get Platforms
     * @param param the request object
     */
    public getPlatformsApiPlatformsGet(param: PlatformsApiGetPlatformsApiPlatformsGetRequest = {}, options?: ConfigurationOptions): Promise<Array<PlatformSchema>> {
        return this.api.getPlatformsApiPlatformsGet( options).toPromise();
    }

    /**
     * Get list of supported platforms endpoint  Args:     request (Request): Fastapi Request object  Returns:     list[PlatformSchema]: List of supported platforms
     * Get Supported Platforms
     * @param param the request object
     */
    public getSupportedPlatformsApiPlatformsSupportedGetWithHttpInfo(param: PlatformsApiGetSupportedPlatformsApiPlatformsSupportedGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<PlatformSchema>>> {
        return this.api.getSupportedPlatformsApiPlatformsSupportedGetWithHttpInfo( options).toPromise();
    }

    /**
     * Get list of supported platforms endpoint  Args:     request (Request): Fastapi Request object  Returns:     list[PlatformSchema]: List of supported platforms
     * Get Supported Platforms
     * @param param the request object
     */
    public getSupportedPlatformsApiPlatformsSupportedGet(param: PlatformsApiGetSupportedPlatformsApiPlatformsSupportedGetRequest = {}, options?: ConfigurationOptions): Promise<Array<PlatformSchema>> {
        return this.api.getSupportedPlatformsApiPlatformsSupportedGet( options).toPromise();
    }

    /**
     * Update platform endpoint  Args:     request (Request): Fastapi Request object     id (int): Platform id  Returns:     MessageResponse: Standard message response
     * Update Platform
     * @param param the request object
     */
    public updatePlatformApiPlatformsIdPutWithHttpInfo(param: PlatformsApiUpdatePlatformApiPlatformsIdPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<PlatformSchema>> {
        return this.api.updatePlatformApiPlatformsIdPutWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Update platform endpoint  Args:     request (Request): Fastapi Request object     id (int): Platform id  Returns:     MessageResponse: Standard message response
     * Update Platform
     * @param param the request object
     */
    public updatePlatformApiPlatformsIdPut(param: PlatformsApiUpdatePlatformApiPlatformsIdPutRequest, options?: ConfigurationOptions): Promise<PlatformSchema> {
        return this.api.updatePlatformApiPlatformsIdPut(param.id,  options).toPromise();
    }

}

import { ObservableRawApi } from "./ObservableAPI.js";
import { RawApiRequestFactory, RawApiResponseProcessor} from "../apis/RawApi.js";

export interface RawApiGetRawAssetApiRawAssetsPathGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RawApigetRawAssetApiRawAssetsPathGet
     */
    path: string
}

export interface RawApiHeadRawAssetApiRawAssetsPathHeadRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RawApiheadRawAssetApiRawAssetsPathHead
     */
    path: string
}

export class ObjectRawApi {
    private api: ObservableRawApi

    public constructor(configuration: Configuration, requestFactory?: RawApiRequestFactory, responseProcessor?: RawApiResponseProcessor) {
        this.api = new ObservableRawApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Download a single asset file  Args:     request (Request): Fastapi Request object  Returns:     FileResponse: Returns a single asset file
     * Get Raw Asset
     * @param param the request object
     */
    public getRawAssetApiRawAssetsPathGetWithHttpInfo(param: RawApiGetRawAssetApiRawAssetsPathGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.getRawAssetApiRawAssetsPathGetWithHttpInfo(param.path,  options).toPromise();
    }

    /**
     * Download a single asset file  Args:     request (Request): Fastapi Request object  Returns:     FileResponse: Returns a single asset file
     * Get Raw Asset
     * @param param the request object
     */
    public getRawAssetApiRawAssetsPathGet(param: RawApiGetRawAssetApiRawAssetsPathGetRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.getRawAssetApiRawAssetsPathGet(param.path,  options).toPromise();
    }

    /**
     * Head Raw Asset
     * @param param the request object
     */
    public headRawAssetApiRawAssetsPathHeadWithHttpInfo(param: RawApiHeadRawAssetApiRawAssetsPathHeadRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.headRawAssetApiRawAssetsPathHeadWithHttpInfo(param.path,  options).toPromise();
    }

    /**
     * Head Raw Asset
     * @param param the request object
     */
    public headRawAssetApiRawAssetsPathHead(param: RawApiHeadRawAssetApiRawAssetsPathHeadRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.headRawAssetApiRawAssetsPathHead(param.path,  options).toPromise();
    }

}

import { ObservableRomsApi } from "./ObservableAPI.js";
import { RomsApiRequestFactory, RomsApiResponseProcessor} from "../apis/RomsApi.js";

export interface RomsApiAddRomApiRomsPostRequest {
}

export interface RomsApiAddRomManualsApiRomsIdManualsPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RomsApiaddRomManualsApiRomsIdManualsPost
     */
    id: number
}

export interface RomsApiDeleteRomsApiRomsDeletePostRequest {
}

export interface RomsApiGetRomApiRomsIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RomsApigetRomApiRomsIdGet
     */
    id: number
}

export interface RomsApiGetRomContentApiRomsIdContentFileNameGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RomsApigetRomContentApiRomsIdContentFileNameGet
     */
    id: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RomsApigetRomContentApiRomsIdContentFileNameGet
     */
    fileName: string
}

export interface RomsApiGetRomfileApiRomsfilesIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RomsApigetRomfileApiRomsfilesIdGet
     */
    id: number
}

export interface RomsApiGetRomfileContentApiRomsfilesIdContentFileNameGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RomsApigetRomfileContentApiRomsfilesIdContentFileNameGet
     */
    id: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RomsApigetRomfileContentApiRomsfilesIdContentFileNameGet
     */
    fileName: string
}

export interface RomsApiGetRomsApiRomsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RomsApigetRomsApiRomsGet
     */
    platformId?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RomsApigetRomsApiRomsGet
     */
    collectionId?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RomsApigetRomsApiRomsGet
     */
    virtualCollectionId?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RomsApigetRomsApiRomsGet
     */
    searchTerm?: string
    /**
     * 
     * Defaults to: &#39;name&#39;
     * @type string
     * @memberof RomsApigetRomsApiRomsGet
     */
    orderBy?: string
    /**
     * 
     * Defaults to: &#39;asc&#39;
     * @type string
     * @memberof RomsApigetRomsApiRomsGet
     */
    orderDir?: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof RomsApigetRomsApiRomsGet
     */
    matched?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof RomsApigetRomsApiRomsGet
     */
    favourite?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof RomsApigetRomsApiRomsGet
     */
    duplicate?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof RomsApigetRomsApiRomsGet
     */
    playable?: boolean
    /**
     * 
     * Defaults to: false
     * @type boolean
     * @memberof RomsApigetRomsApiRomsGet
     */
    unmatchedOnly?: boolean
    /**
     * 
     * Defaults to: false
     * @type boolean
     * @memberof RomsApigetRomsApiRomsGet
     */
    matchedOnly?: boolean
    /**
     * 
     * Defaults to: false
     * @type boolean
     * @memberof RomsApigetRomsApiRomsGet
     */
    favouritesOnly?: boolean
    /**
     * 
     * Defaults to: false
     * @type boolean
     * @memberof RomsApigetRomsApiRomsGet
     */
    duplicatesOnly?: boolean
    /**
     * 
     * Defaults to: false
     * @type boolean
     * @memberof RomsApigetRomsApiRomsGet
     */
    playablesOnly?: boolean
    /**
     * 
     * Defaults to: false
     * @type boolean
     * @memberof RomsApigetRomsApiRomsGet
     */
    raOnly?: boolean
    /**
     * 
     * Defaults to: false
     * @type boolean
     * @memberof RomsApigetRomsApiRomsGet
     */
    groupByMetaId?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RomsApigetRomsApiRomsGet
     */
    selectedGenre?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RomsApigetRomsApiRomsGet
     */
    selectedFranchise?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RomsApigetRomsApiRomsGet
     */
    selectedCollection?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RomsApigetRomsApiRomsGet
     */
    selectedCompany?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RomsApigetRomsApiRomsGet
     */
    selectedAgeRating?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RomsApigetRomsApiRomsGet
     */
    selectedStatus?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RomsApigetRomsApiRomsGet
     */
    selectedRegion?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RomsApigetRomsApiRomsGet
     */
    selectedLanguage?: string
    /**
     * Page size limit
     * Minimum: 1
     * Maximum: 10000
     * Defaults to: 50
     * @type number
     * @memberof RomsApigetRomsApiRomsGet
     */
    limit?: number
    /**
     * Page offset
     * Minimum: 0
     * Defaults to: 0
     * @type number
     * @memberof RomsApigetRomsApiRomsGet
     */
    offset?: number
}

export interface RomsApiHeadRomContentApiRomsIdContentFileNameHeadRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RomsApiheadRomContentApiRomsIdContentFileNameHead
     */
    id: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RomsApiheadRomContentApiRomsIdContentFileNameHead
     */
    fileName: string
}

export interface RomsApiUpdateRomApiRomsIdPutRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RomsApiupdateRomApiRomsIdPut
     */
    id: number
    /**
     * 
     * Defaults to: false
     * @type boolean
     * @memberof RomsApiupdateRomApiRomsIdPut
     */
    removeCover?: boolean
    /**
     * 
     * Defaults to: false
     * @type boolean
     * @memberof RomsApiupdateRomApiRomsIdPut
     */
    unmatchMetadata?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type HttpFile
     * @memberof RomsApiupdateRomApiRomsIdPut
     */
    artwork?: HttpFile
}

export interface RomsApiUpdateRomUserApiRomsIdPropsPutRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RomsApiupdateRomUserApiRomsIdPropsPut
     */
    id: number
}

export class ObjectRomsApi {
    private api: ObservableRomsApi

    public constructor(configuration: Configuration, requestFactory?: RomsApiRequestFactory, responseProcessor?: RomsApiResponseProcessor) {
        this.api = new ObservableRomsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Upload single rom endpoint  Args:     request (Request): Fastapi Request object  Raises:     HTTPException: No files were uploaded
     * Add Rom
     * @param param the request object
     */
    public addRomApiRomsPostWithHttpInfo(param: RomsApiAddRomApiRomsPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.addRomApiRomsPostWithHttpInfo( options).toPromise();
    }

    /**
     * Upload single rom endpoint  Args:     request (Request): Fastapi Request object  Raises:     HTTPException: No files were uploaded
     * Add Rom
     * @param param the request object
     */
    public addRomApiRomsPost(param: RomsApiAddRomApiRomsPostRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.addRomApiRomsPost( options).toPromise();
    }

    /**
     * Upload manuals for a rom  Args:     request (Request): Fastapi Request object  Raises:     HTTPException: No files were uploaded
     * Add Rom Manuals
     * @param param the request object
     */
    public addRomManualsApiRomsIdManualsPostWithHttpInfo(param: RomsApiAddRomManualsApiRomsIdManualsPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.addRomManualsApiRomsIdManualsPostWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Upload manuals for a rom  Args:     request (Request): Fastapi Request object  Raises:     HTTPException: No files were uploaded
     * Add Rom Manuals
     * @param param the request object
     */
    public addRomManualsApiRomsIdManualsPost(param: RomsApiAddRomManualsApiRomsIdManualsPostRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.addRomManualsApiRomsIdManualsPost(param.id,  options).toPromise();
    }

    /**
     * Delete roms endpoint  Args:     request (Request): Fastapi Request object.         {             \"roms\": List of rom\'s ids to delete         }     delete_from_fs (bool, optional): Flag to delete rom from filesystem. Defaults to False.  Returns:     MessageResponse: Standard message response
     * Delete Roms
     * @param param the request object
     */
    public deleteRomsApiRomsDeletePostWithHttpInfo(param: RomsApiDeleteRomsApiRomsDeletePostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        return this.api.deleteRomsApiRomsDeletePostWithHttpInfo( options).toPromise();
    }

    /**
     * Delete roms endpoint  Args:     request (Request): Fastapi Request object.         {             \"roms\": List of rom\'s ids to delete         }     delete_from_fs (bool, optional): Flag to delete rom from filesystem. Defaults to False.  Returns:     MessageResponse: Standard message response
     * Delete Roms
     * @param param the request object
     */
    public deleteRomsApiRomsDeletePost(param: RomsApiDeleteRomsApiRomsDeletePostRequest = {}, options?: ConfigurationOptions): Promise<MessageResponse> {
        return this.api.deleteRomsApiRomsDeletePost( options).toPromise();
    }

    /**
     * Get rom endpoint  Args:     request (Request): Fastapi Request object     id (int): Rom internal id  Returns:     DetailedRomSchema: Rom stored in the database
     * Get Rom
     * @param param the request object
     */
    public getRomApiRomsIdGetWithHttpInfo(param: RomsApiGetRomApiRomsIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<DetailedRomSchema>> {
        return this.api.getRomApiRomsIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get rom endpoint  Args:     request (Request): Fastapi Request object     id (int): Rom internal id  Returns:     DetailedRomSchema: Rom stored in the database
     * Get Rom
     * @param param the request object
     */
    public getRomApiRomsIdGet(param: RomsApiGetRomApiRomsIdGetRequest, options?: ConfigurationOptions): Promise<DetailedRomSchema> {
        return this.api.getRomApiRomsIdGet(param.id,  options).toPromise();
    }

    /**
     * Download rom endpoint (one single file or multiple zipped files for multi-part roms)  Args:     request (Request): Fastapi Request object     id (int): Rom internal id     file_name: Zip file output name  Returns:     Response: Returns a response with headers  Yields:     FileResponse: Returns one file for single file roms     FileRedirectResponse: Redirects to the file download path     ZipResponse: Returns a response for nginx to serve a Zip file for multi-part roms
     * Get Rom Content
     * @param param the request object
     */
    public getRomContentApiRomsIdContentFileNameGetWithHttpInfo(param: RomsApiGetRomContentApiRomsIdContentFileNameGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.getRomContentApiRomsIdContentFileNameGetWithHttpInfo(param.id, param.fileName,  options).toPromise();
    }

    /**
     * Download rom endpoint (one single file or multiple zipped files for multi-part roms)  Args:     request (Request): Fastapi Request object     id (int): Rom internal id     file_name: Zip file output name  Returns:     Response: Returns a response with headers  Yields:     FileResponse: Returns one file for single file roms     FileRedirectResponse: Redirects to the file download path     ZipResponse: Returns a response for nginx to serve a Zip file for multi-part roms
     * Get Rom Content
     * @param param the request object
     */
    public getRomContentApiRomsIdContentFileNameGet(param: RomsApiGetRomContentApiRomsIdContentFileNameGetRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.getRomContentApiRomsIdContentFileNameGet(param.id, param.fileName,  options).toPromise();
    }

    /**
     * Get Romfile
     * @param param the request object
     */
    public getRomfileApiRomsfilesIdGetWithHttpInfo(param: RomsApiGetRomfileApiRomsfilesIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<RomFileSchema>> {
        return this.api.getRomfileApiRomsfilesIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Romfile
     * @param param the request object
     */
    public getRomfileApiRomsfilesIdGet(param: RomsApiGetRomfileApiRomsfilesIdGetRequest, options?: ConfigurationOptions): Promise<RomFileSchema> {
        return this.api.getRomfileApiRomsfilesIdGet(param.id,  options).toPromise();
    }

    /**
     * Download rom file endpoint  Args:     request (Request): Fastapi Request object     id (int): RomFile internal id     file_name (str): What to name the file when downloading  Returns:     FileResponse: Returns the response with headers
     * Get Romfile Content
     * @param param the request object
     */
    public getRomfileContentApiRomsfilesIdContentFileNameGetWithHttpInfo(param: RomsApiGetRomfileContentApiRomsfilesIdContentFileNameGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.getRomfileContentApiRomsfilesIdContentFileNameGetWithHttpInfo(param.id, param.fileName,  options).toPromise();
    }

    /**
     * Download rom file endpoint  Args:     request (Request): Fastapi Request object     id (int): RomFile internal id     file_name (str): What to name the file when downloading  Returns:     FileResponse: Returns the response with headers
     * Get Romfile Content
     * @param param the request object
     */
    public getRomfileContentApiRomsfilesIdContentFileNameGet(param: RomsApiGetRomfileContentApiRomsfilesIdContentFileNameGetRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.getRomfileContentApiRomsfilesIdContentFileNameGet(param.id, param.fileName,  options).toPromise();
    }

    /**
     * Get roms endpoint  Args:     request: Fastapi Request object     platform_id (int, optional): Platform internal id. Defaults to None.     collection_id (int, optional): Collection internal id. Defaults to None.     virtual_collection_id (str, optional): Virtual collection internal id. Defaults to None.     search_term (str, optional): Search term to filter roms. Defaults to None.     order_by (str, optional): Field to order by. Defaults to \"name\".     order_dir (str, optional): Order direction. Defaults to \"asc\".     matched (bool, optional): Filter for matched or unmatched roms. Defaults to None.     favourite (bool, optional): Filter for favourite or non-favourite roms. Defaults to None.     duplicate (bool, optional): Filter for duplicate or non-duplicate roms. Defaults to None.     playable (bool, optional): Filter for playable or non-playable roms. Defaults to None.     unmatched_only (bool, optional): Filter only unmatched roms. Defaults to False. DEPRECATED: use `matched` instead.     matched_only (bool, optional): Filter only matched roms. Defaults to False. DEPRECATED: use `matched` instead.     favourites_only (bool, optional): Filter only favourite roms. Defaults to False. DEPRECATED: use `favourite` instead.     duplicates_only (bool, optional): Filter only duplicate roms. Defaults to False. DEPRECATED: use `duplicate` instead.     playables_only (bool, optional): Filter only playable roms by emulatorjs. Defaults to False. DEPRECATED: use `playable` instead.     ra_only (bool, optional): Filter only roms with Retroachievements compatibility.     group_by_meta_id (bool, optional): Group roms by igdb/moby/ssrf ID. Defaults to False.     selected_genre (str, optional): Filter by genre. Defaults to None.     selected_franchise (str, optional): Filter by franchise. Defaults to None.     selected_collection (str, optional): Filter by collection. Defaults to None.     selected_company (str, optional): Filter by company. Defaults to None.     selected_age_rating (str, optional): Filter by age rating. Defaults to None.     selected_status (str, optional): Filter by status. Defaults to None.     selected_region (str, optional): Filter by region tag. Defaults to None.     selected_language (str, optional): Filter by language tag. Defaults to None.  Returns:     list[RomSchema | SimpleRomSchema]: List of ROMs stored in the database
     * Get Roms
     * @param param the request object
     */
    public getRomsApiRomsGetWithHttpInfo(param: RomsApiGetRomsApiRomsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CustomLimitOffsetPageSimpleRomSchema>> {
        return this.api.getRomsApiRomsGetWithHttpInfo(param.platformId, param.collectionId, param.virtualCollectionId, param.searchTerm, param.orderBy, param.orderDir, param.matched, param.favourite, param.duplicate, param.playable, param.unmatchedOnly, param.matchedOnly, param.favouritesOnly, param.duplicatesOnly, param.playablesOnly, param.raOnly, param.groupByMetaId, param.selectedGenre, param.selectedFranchise, param.selectedCollection, param.selectedCompany, param.selectedAgeRating, param.selectedStatus, param.selectedRegion, param.selectedLanguage, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Get roms endpoint  Args:     request: Fastapi Request object     platform_id (int, optional): Platform internal id. Defaults to None.     collection_id (int, optional): Collection internal id. Defaults to None.     virtual_collection_id (str, optional): Virtual collection internal id. Defaults to None.     search_term (str, optional): Search term to filter roms. Defaults to None.     order_by (str, optional): Field to order by. Defaults to \"name\".     order_dir (str, optional): Order direction. Defaults to \"asc\".     matched (bool, optional): Filter for matched or unmatched roms. Defaults to None.     favourite (bool, optional): Filter for favourite or non-favourite roms. Defaults to None.     duplicate (bool, optional): Filter for duplicate or non-duplicate roms. Defaults to None.     playable (bool, optional): Filter for playable or non-playable roms. Defaults to None.     unmatched_only (bool, optional): Filter only unmatched roms. Defaults to False. DEPRECATED: use `matched` instead.     matched_only (bool, optional): Filter only matched roms. Defaults to False. DEPRECATED: use `matched` instead.     favourites_only (bool, optional): Filter only favourite roms. Defaults to False. DEPRECATED: use `favourite` instead.     duplicates_only (bool, optional): Filter only duplicate roms. Defaults to False. DEPRECATED: use `duplicate` instead.     playables_only (bool, optional): Filter only playable roms by emulatorjs. Defaults to False. DEPRECATED: use `playable` instead.     ra_only (bool, optional): Filter only roms with Retroachievements compatibility.     group_by_meta_id (bool, optional): Group roms by igdb/moby/ssrf ID. Defaults to False.     selected_genre (str, optional): Filter by genre. Defaults to None.     selected_franchise (str, optional): Filter by franchise. Defaults to None.     selected_collection (str, optional): Filter by collection. Defaults to None.     selected_company (str, optional): Filter by company. Defaults to None.     selected_age_rating (str, optional): Filter by age rating. Defaults to None.     selected_status (str, optional): Filter by status. Defaults to None.     selected_region (str, optional): Filter by region tag. Defaults to None.     selected_language (str, optional): Filter by language tag. Defaults to None.  Returns:     list[RomSchema | SimpleRomSchema]: List of ROMs stored in the database
     * Get Roms
     * @param param the request object
     */
    public getRomsApiRomsGet(param: RomsApiGetRomsApiRomsGetRequest = {}, options?: ConfigurationOptions): Promise<CustomLimitOffsetPageSimpleRomSchema> {
        return this.api.getRomsApiRomsGet(param.platformId, param.collectionId, param.virtualCollectionId, param.searchTerm, param.orderBy, param.orderDir, param.matched, param.favourite, param.duplicate, param.playable, param.unmatchedOnly, param.matchedOnly, param.favouritesOnly, param.duplicatesOnly, param.playablesOnly, param.raOnly, param.groupByMetaId, param.selectedGenre, param.selectedFranchise, param.selectedCollection, param.selectedCompany, param.selectedAgeRating, param.selectedStatus, param.selectedRegion, param.selectedLanguage, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Head rom content endpoint  Args:     request (Request): Fastapi Request object     id (int): Rom internal id     file_name (str): File name to download     file_ids (list[int]): List of file ids to download for multi-part roms  Returns:     FileResponse: Returns the response with headers
     * Head Rom Content
     * @param param the request object
     */
    public headRomContentApiRomsIdContentFileNameHeadWithHttpInfo(param: RomsApiHeadRomContentApiRomsIdContentFileNameHeadRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.headRomContentApiRomsIdContentFileNameHeadWithHttpInfo(param.id, param.fileName,  options).toPromise();
    }

    /**
     * Head rom content endpoint  Args:     request (Request): Fastapi Request object     id (int): Rom internal id     file_name (str): File name to download     file_ids (list[int]): List of file ids to download for multi-part roms  Returns:     FileResponse: Returns the response with headers
     * Head Rom Content
     * @param param the request object
     */
    public headRomContentApiRomsIdContentFileNameHead(param: RomsApiHeadRomContentApiRomsIdContentFileNameHeadRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.headRomContentApiRomsIdContentFileNameHead(param.id, param.fileName,  options).toPromise();
    }

    /**
     * Update rom endpoint  Args:     request (Request): Fastapi Request object     id (Rom): Rom internal id     artwork (UploadFile, optional): Custom artwork to set as cover. Defaults to File(None).     unmatch_metadata: Remove the metadata matches for this game. Defaults to False.  Raises:     HTTPException: Rom not found in database  Returns:     DetailedRomSchema: Rom stored in the database
     * Update Rom
     * @param param the request object
     */
    public updateRomApiRomsIdPutWithHttpInfo(param: RomsApiUpdateRomApiRomsIdPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<DetailedRomSchema>> {
        return this.api.updateRomApiRomsIdPutWithHttpInfo(param.id, param.removeCover, param.unmatchMetadata, param.artwork,  options).toPromise();
    }

    /**
     * Update rom endpoint  Args:     request (Request): Fastapi Request object     id (Rom): Rom internal id     artwork (UploadFile, optional): Custom artwork to set as cover. Defaults to File(None).     unmatch_metadata: Remove the metadata matches for this game. Defaults to False.  Raises:     HTTPException: Rom not found in database  Returns:     DetailedRomSchema: Rom stored in the database
     * Update Rom
     * @param param the request object
     */
    public updateRomApiRomsIdPut(param: RomsApiUpdateRomApiRomsIdPutRequest, options?: ConfigurationOptions): Promise<DetailedRomSchema> {
        return this.api.updateRomApiRomsIdPut(param.id, param.removeCover, param.unmatchMetadata, param.artwork,  options).toPromise();
    }

    /**
     * Update Rom User
     * @param param the request object
     */
    public updateRomUserApiRomsIdPropsPutWithHttpInfo(param: RomsApiUpdateRomUserApiRomsIdPropsPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<RomUserSchema>> {
        return this.api.updateRomUserApiRomsIdPropsPutWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Update Rom User
     * @param param the request object
     */
    public updateRomUserApiRomsIdPropsPut(param: RomsApiUpdateRomUserApiRomsIdPropsPutRequest, options?: ConfigurationOptions): Promise<RomUserSchema> {
        return this.api.updateRomUserApiRomsIdPropsPut(param.id,  options).toPromise();
    }

}

import { ObservableSavesApi } from "./ObservableAPI.js";
import { SavesApiRequestFactory, SavesApiResponseProcessor} from "../apis/SavesApi.js";

export interface SavesApiAddSaveApiSavesPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof SavesApiaddSaveApiSavesPost
     */
    romId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SavesApiaddSaveApiSavesPost
     */
    emulator?: string
}

export interface SavesApiDeleteSavesApiSavesDeletePostRequest {
}

export interface SavesApiGetSaveApiSavesIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof SavesApigetSaveApiSavesIdGet
     */
    id: number
}

export interface SavesApiGetSavesApiSavesGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof SavesApigetSavesApiSavesGet
     */
    romId?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof SavesApigetSavesApiSavesGet
     */
    platformId?: number
}

export interface SavesApiUpdateSaveApiSavesIdPutRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof SavesApiupdateSaveApiSavesIdPut
     */
    id: number
}

export class ObjectSavesApi {
    private api: ObservableSavesApi

    public constructor(configuration: Configuration, requestFactory?: SavesApiRequestFactory, responseProcessor?: SavesApiResponseProcessor) {
        this.api = new ObservableSavesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add Save
     * @param param the request object
     */
    public addSaveApiSavesPostWithHttpInfo(param: SavesApiAddSaveApiSavesPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<SaveSchema>> {
        return this.api.addSaveApiSavesPostWithHttpInfo(param.romId, param.emulator,  options).toPromise();
    }

    /**
     * Add Save
     * @param param the request object
     */
    public addSaveApiSavesPost(param: SavesApiAddSaveApiSavesPostRequest, options?: ConfigurationOptions): Promise<SaveSchema> {
        return this.api.addSaveApiSavesPost(param.romId, param.emulator,  options).toPromise();
    }

    /**
     * Delete Saves
     * @param param the request object
     */
    public deleteSavesApiSavesDeletePostWithHttpInfo(param: SavesApiDeleteSavesApiSavesDeletePostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<number | null>>> {
        return this.api.deleteSavesApiSavesDeletePostWithHttpInfo( options).toPromise();
    }

    /**
     * Delete Saves
     * @param param the request object
     */
    public deleteSavesApiSavesDeletePost(param: SavesApiDeleteSavesApiSavesDeletePostRequest = {}, options?: ConfigurationOptions): Promise<Array<number | null>> {
        return this.api.deleteSavesApiSavesDeletePost( options).toPromise();
    }

    /**
     * Get Save
     * @param param the request object
     */
    public getSaveApiSavesIdGetWithHttpInfo(param: SavesApiGetSaveApiSavesIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<SaveSchema>> {
        return this.api.getSaveApiSavesIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Save
     * @param param the request object
     */
    public getSaveApiSavesIdGet(param: SavesApiGetSaveApiSavesIdGetRequest, options?: ConfigurationOptions): Promise<SaveSchema> {
        return this.api.getSaveApiSavesIdGet(param.id,  options).toPromise();
    }

    /**
     * Get Saves
     * @param param the request object
     */
    public getSavesApiSavesGetWithHttpInfo(param: SavesApiGetSavesApiSavesGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<SaveSchema>>> {
        return this.api.getSavesApiSavesGetWithHttpInfo(param.romId, param.platformId,  options).toPromise();
    }

    /**
     * Get Saves
     * @param param the request object
     */
    public getSavesApiSavesGet(param: SavesApiGetSavesApiSavesGetRequest = {}, options?: ConfigurationOptions): Promise<Array<SaveSchema>> {
        return this.api.getSavesApiSavesGet(param.romId, param.platformId,  options).toPromise();
    }

    /**
     * Update Save
     * @param param the request object
     */
    public updateSaveApiSavesIdPutWithHttpInfo(param: SavesApiUpdateSaveApiSavesIdPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<SaveSchema>> {
        return this.api.updateSaveApiSavesIdPutWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Update Save
     * @param param the request object
     */
    public updateSaveApiSavesIdPut(param: SavesApiUpdateSaveApiSavesIdPutRequest, options?: ConfigurationOptions): Promise<SaveSchema> {
        return this.api.updateSaveApiSavesIdPut(param.id,  options).toPromise();
    }

}

import { ObservableScreenshotsApi } from "./ObservableAPI.js";
import { ScreenshotsApiRequestFactory, ScreenshotsApiResponseProcessor} from "../apis/ScreenshotsApi.js";

export interface ScreenshotsApiAddScreenshotApiScreenshotsPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ScreenshotsApiaddScreenshotApiScreenshotsPost
     */
    romId: number
}

export class ObjectScreenshotsApi {
    private api: ObservableScreenshotsApi

    public constructor(configuration: Configuration, requestFactory?: ScreenshotsApiRequestFactory, responseProcessor?: ScreenshotsApiResponseProcessor) {
        this.api = new ObservableScreenshotsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add Screenshot
     * @param param the request object
     */
    public addScreenshotApiScreenshotsPostWithHttpInfo(param: ScreenshotsApiAddScreenshotApiScreenshotsPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<ScreenshotSchema>> {
        return this.api.addScreenshotApiScreenshotsPostWithHttpInfo(param.romId,  options).toPromise();
    }

    /**
     * Add Screenshot
     * @param param the request object
     */
    public addScreenshotApiScreenshotsPost(param: ScreenshotsApiAddScreenshotApiScreenshotsPostRequest, options?: ConfigurationOptions): Promise<ScreenshotSchema> {
        return this.api.addScreenshotApiScreenshotsPost(param.romId,  options).toPromise();
    }

}

import { ObservableSearchApi } from "./ObservableAPI.js";
import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi.js";

export interface SearchApiSearchCoverApiSearchCoverGetRequest {
    /**
     * 
     * Defaults to: &#39;&#39;
     * @type string
     * @memberof SearchApisearchCoverApiSearchCoverGet
     */
    searchTerm?: string
}

export interface SearchApiSearchRomApiSearchRomsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof SearchApisearchRomApiSearchRomsGet
     */
    romId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SearchApisearchRomApiSearchRomsGet
     */
    searchTerm?: string
    /**
     * 
     * Defaults to: &#39;name&#39;
     * @type string
     * @memberof SearchApisearchRomApiSearchRomsGet
     */
    searchBy?: string
}

export class ObjectSearchApi {
    private api: ObservableSearchApi

    public constructor(configuration: Configuration, requestFactory?: SearchApiRequestFactory, responseProcessor?: SearchApiResponseProcessor) {
        this.api = new ObservableSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Search Cover
     * @param param the request object
     */
    public searchCoverApiSearchCoverGetWithHttpInfo(param: SearchApiSearchCoverApiSearchCoverGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<SearchCoverSchema>>> {
        return this.api.searchCoverApiSearchCoverGetWithHttpInfo(param.searchTerm,  options).toPromise();
    }

    /**
     * Search Cover
     * @param param the request object
     */
    public searchCoverApiSearchCoverGet(param: SearchApiSearchCoverApiSearchCoverGetRequest = {}, options?: ConfigurationOptions): Promise<Array<SearchCoverSchema>> {
        return this.api.searchCoverApiSearchCoverGet(param.searchTerm,  options).toPromise();
    }

    /**
     * Search for rom in metadata providers  Args:     request (Request): FastAPI request     rom_id (int): Rom ID     source (str): Source of the rom     search_term (str, optional): Search term. Defaults to None.     search_by (str, optional): Search by name or ID. Defaults to \"name\".     search_extended (bool, optional): Search extended info. Defaults to False.  Returns:     list[SearchRomSchema]: List of matched roms
     * Search Rom
     * @param param the request object
     */
    public searchRomApiSearchRomsGetWithHttpInfo(param: SearchApiSearchRomApiSearchRomsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<SearchRomSchema>>> {
        return this.api.searchRomApiSearchRomsGetWithHttpInfo(param.romId, param.searchTerm, param.searchBy,  options).toPromise();
    }

    /**
     * Search for rom in metadata providers  Args:     request (Request): FastAPI request     rom_id (int): Rom ID     source (str): Source of the rom     search_term (str, optional): Search term. Defaults to None.     search_by (str, optional): Search by name or ID. Defaults to \"name\".     search_extended (bool, optional): Search extended info. Defaults to False.  Returns:     list[SearchRomSchema]: List of matched roms
     * Search Rom
     * @param param the request object
     */
    public searchRomApiSearchRomsGet(param: SearchApiSearchRomApiSearchRomsGetRequest, options?: ConfigurationOptions): Promise<Array<SearchRomSchema>> {
        return this.api.searchRomApiSearchRomsGet(param.romId, param.searchTerm, param.searchBy,  options).toPromise();
    }

}

import { ObservableStatesApi } from "./ObservableAPI.js";
import { StatesApiRequestFactory, StatesApiResponseProcessor} from "../apis/StatesApi.js";

export interface StatesApiAddStateApiStatesPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof StatesApiaddStateApiStatesPost
     */
    romId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof StatesApiaddStateApiStatesPost
     */
    emulator?: string
}

export interface StatesApiDeleteStatesApiStatesDeletePostRequest {
}

export interface StatesApiGetStateApiStatesIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof StatesApigetStateApiStatesIdGet
     */
    id: number
}

export interface StatesApiGetStatesApiStatesGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof StatesApigetStatesApiStatesGet
     */
    romId?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof StatesApigetStatesApiStatesGet
     */
    platformId?: number
}

export interface StatesApiUpdateStateApiStatesIdPutRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof StatesApiupdateStateApiStatesIdPut
     */
    id: number
}

export class ObjectStatesApi {
    private api: ObservableStatesApi

    public constructor(configuration: Configuration, requestFactory?: StatesApiRequestFactory, responseProcessor?: StatesApiResponseProcessor) {
        this.api = new ObservableStatesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add State
     * @param param the request object
     */
    public addStateApiStatesPostWithHttpInfo(param: StatesApiAddStateApiStatesPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<StateSchema>> {
        return this.api.addStateApiStatesPostWithHttpInfo(param.romId, param.emulator,  options).toPromise();
    }

    /**
     * Add State
     * @param param the request object
     */
    public addStateApiStatesPost(param: StatesApiAddStateApiStatesPostRequest, options?: ConfigurationOptions): Promise<StateSchema> {
        return this.api.addStateApiStatesPost(param.romId, param.emulator,  options).toPromise();
    }

    /**
     * Delete States
     * @param param the request object
     */
    public deleteStatesApiStatesDeletePostWithHttpInfo(param: StatesApiDeleteStatesApiStatesDeletePostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<number | null>>> {
        return this.api.deleteStatesApiStatesDeletePostWithHttpInfo( options).toPromise();
    }

    /**
     * Delete States
     * @param param the request object
     */
    public deleteStatesApiStatesDeletePost(param: StatesApiDeleteStatesApiStatesDeletePostRequest = {}, options?: ConfigurationOptions): Promise<Array<number | null>> {
        return this.api.deleteStatesApiStatesDeletePost( options).toPromise();
    }

    /**
     * Get State
     * @param param the request object
     */
    public getStateApiStatesIdGetWithHttpInfo(param: StatesApiGetStateApiStatesIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<StateSchema>> {
        return this.api.getStateApiStatesIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get State
     * @param param the request object
     */
    public getStateApiStatesIdGet(param: StatesApiGetStateApiStatesIdGetRequest, options?: ConfigurationOptions): Promise<StateSchema> {
        return this.api.getStateApiStatesIdGet(param.id,  options).toPromise();
    }

    /**
     * Get States
     * @param param the request object
     */
    public getStatesApiStatesGetWithHttpInfo(param: StatesApiGetStatesApiStatesGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<StateSchema>>> {
        return this.api.getStatesApiStatesGetWithHttpInfo(param.romId, param.platformId,  options).toPromise();
    }

    /**
     * Get States
     * @param param the request object
     */
    public getStatesApiStatesGet(param: StatesApiGetStatesApiStatesGetRequest = {}, options?: ConfigurationOptions): Promise<Array<StateSchema>> {
        return this.api.getStatesApiStatesGet(param.romId, param.platformId,  options).toPromise();
    }

    /**
     * Update State
     * @param param the request object
     */
    public updateStateApiStatesIdPutWithHttpInfo(param: StatesApiUpdateStateApiStatesIdPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<StateSchema>> {
        return this.api.updateStateApiStatesIdPutWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Update State
     * @param param the request object
     */
    public updateStateApiStatesIdPut(param: StatesApiUpdateStateApiStatesIdPutRequest, options?: ConfigurationOptions): Promise<StateSchema> {
        return this.api.updateStateApiStatesIdPut(param.id,  options).toPromise();
    }

}

import { ObservableStatsApi } from "./ObservableAPI.js";
import { StatsApiRequestFactory, StatsApiResponseProcessor} from "../apis/StatsApi.js";

export interface StatsApiStatsApiStatsGetRequest {
}

export class ObjectStatsApi {
    private api: ObservableStatsApi

    public constructor(configuration: Configuration, requestFactory?: StatsApiRequestFactory, responseProcessor?: StatsApiResponseProcessor) {
        this.api = new ObservableStatsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Endpoint to return the current RomM stats  Returns:     dict: Dictionary with all the stats
     * Stats
     * @param param the request object
     */
    public statsApiStatsGetWithHttpInfo(param: StatsApiStatsApiStatsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<StatsReturn>> {
        return this.api.statsApiStatsGetWithHttpInfo( options).toPromise();
    }

    /**
     * Endpoint to return the current RomM stats  Returns:     dict: Dictionary with all the stats
     * Stats
     * @param param the request object
     */
    public statsApiStatsGet(param: StatsApiStatsApiStatsGetRequest = {}, options?: ConfigurationOptions): Promise<StatsReturn> {
        return this.api.statsApiStatsGet( options).toPromise();
    }

}

import { ObservableSystemApi } from "./ObservableAPI.js";
import { SystemApiRequestFactory, SystemApiResponseProcessor} from "../apis/SystemApi.js";

export interface SystemApiHeartbeatApiHeartbeatGetRequest {
}

export class ObjectSystemApi {
    private api: ObservableSystemApi

    public constructor(configuration: Configuration, requestFactory?: SystemApiRequestFactory, responseProcessor?: SystemApiResponseProcessor) {
        this.api = new ObservableSystemApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Endpoint to set the CSRF token in cache and return all the basic RomM config  Returns:     HeartbeatReturn: TypedDict structure with all the defined values in the HeartbeatReturn class.
     * Heartbeat
     * @param param the request object
     */
    public heartbeatApiHeartbeatGetWithHttpInfo(param: SystemApiHeartbeatApiHeartbeatGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<HeartbeatResponse>> {
        return this.api.heartbeatApiHeartbeatGetWithHttpInfo( options).toPromise();
    }

    /**
     * Endpoint to set the CSRF token in cache and return all the basic RomM config  Returns:     HeartbeatReturn: TypedDict structure with all the defined values in the HeartbeatReturn class.
     * Heartbeat
     * @param param the request object
     */
    public heartbeatApiHeartbeatGet(param: SystemApiHeartbeatApiHeartbeatGetRequest = {}, options?: ConfigurationOptions): Promise<HeartbeatResponse> {
        return this.api.heartbeatApiHeartbeatGet( options).toPromise();
    }

}

import { ObservableTasksApi } from "./ObservableAPI.js";
import { TasksApiRequestFactory, TasksApiResponseProcessor} from "../apis/TasksApi.js";

export interface TasksApiRunTaskApiTasksTaskRunPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TasksApirunTaskApiTasksTaskRunPost
     */
    task: string
}

export interface TasksApiRunTasksApiTasksRunPostRequest {
}

export class ObjectTasksApi {
    private api: ObservableTasksApi

    public constructor(configuration: Configuration, requestFactory?: TasksApiRequestFactory, responseProcessor?: TasksApiResponseProcessor) {
        this.api = new ObservableTasksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Run all tasks endpoint  Args:     request (Request): Fastapi Request object Returns:     RunTasksResponse: Standard message response
     * Run Task
     * @param param the request object
     */
    public runTaskApiTasksTaskRunPostWithHttpInfo(param: TasksApiRunTaskApiTasksTaskRunPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        return this.api.runTaskApiTasksTaskRunPostWithHttpInfo(param.task,  options).toPromise();
    }

    /**
     * Run all tasks endpoint  Args:     request (Request): Fastapi Request object Returns:     RunTasksResponse: Standard message response
     * Run Task
     * @param param the request object
     */
    public runTaskApiTasksTaskRunPost(param: TasksApiRunTaskApiTasksTaskRunPostRequest, options?: ConfigurationOptions): Promise<MessageResponse> {
        return this.api.runTaskApiTasksTaskRunPost(param.task,  options).toPromise();
    }

    /**
     * Run all tasks endpoint  Args:     request (Request): Fastapi Request object Returns:     RunTasksResponse: Standard message response
     * Run Tasks
     * @param param the request object
     */
    public runTasksApiTasksRunPostWithHttpInfo(param: TasksApiRunTasksApiTasksRunPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        return this.api.runTasksApiTasksRunPostWithHttpInfo( options).toPromise();
    }

    /**
     * Run all tasks endpoint  Args:     request (Request): Fastapi Request object Returns:     RunTasksResponse: Standard message response
     * Run Tasks
     * @param param the request object
     */
    public runTasksApiTasksRunPost(param: TasksApiRunTasksApiTasksRunPostRequest = {}, options?: ConfigurationOptions): Promise<MessageResponse> {
        return this.api.runTasksApiTasksRunPost( options).toPromise();
    }

}

import { ObservableUsersApi } from "./ObservableAPI.js";
import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi.js";

export interface UsersApiAddUserApiUsersPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApiaddUserApiUsersPost
     */
    username: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApiaddUserApiUsersPost
     */
    password: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApiaddUserApiUsersPost
     */
    email: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApiaddUserApiUsersPost
     */
    role: string
}

export interface UsersApiCreateInviteLinkApiUsersInviteLinkPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApicreateInviteLinkApiUsersInviteLinkPost
     */
    role: string
}

export interface UsersApiCreateUserFromInviteApiUsersRegisterPostRequest {
    /**
     * 
     * @type BodyCreateUserFromInviteApiUsersRegisterPost
     * @memberof UsersApicreateUserFromInviteApiUsersRegisterPost
     */
    bodyCreateUserFromInviteApiUsersRegisterPost: BodyCreateUserFromInviteApiUsersRegisterPost
}

export interface UsersApiDeleteUserApiUsersIdDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof UsersApideleteUserApiUsersIdDelete
     */
    id: number
}

export interface UsersApiGetCurrentUserApiUsersMeGetRequest {
}

export interface UsersApiGetUserApiUsersIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof UsersApigetUserApiUsersIdGet
     */
    id: number
}

export interface UsersApiGetUsersApiUsersGetRequest {
}

export interface UsersApiRefreshRetroAchievementsApiUsersIdRaRefreshPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof UsersApirefreshRetroAchievementsApiUsersIdRaRefreshPost
     */
    id: number
}

export interface UsersApiUpdateUserApiUsersIdPutRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof UsersApiupdateUserApiUsersIdPut
     */
    id: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApiupdateUserApiUsersIdPut
     */
    username?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApiupdateUserApiUsersIdPut
     */
    password?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApiupdateUserApiUsersIdPut
     */
    email?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApiupdateUserApiUsersIdPut
     */
    role?: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof UsersApiupdateUserApiUsersIdPut
     */
    enabled?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApiupdateUserApiUsersIdPut
     */
    raUsername?: string
    /**
     * 
     * Defaults to: undefined
     * @type HttpFile
     * @memberof UsersApiupdateUserApiUsersIdPut
     */
    avatar?: HttpFile
}

export class ObjectUsersApi {
    private api: ObservableUsersApi

    public constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create user endpoint  Args:     request (Request): Fastapi Requests object     username (str): User username     password (str): User password     email (str): User email     role (str): RomM Role object represented as string  Returns:     UserSchema: Newly created user
     * Add User
     * @param param the request object
     */
    public addUserApiUsersPostWithHttpInfo(param: UsersApiAddUserApiUsersPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserSchema>> {
        return this.api.addUserApiUsersPostWithHttpInfo(param.username, param.password, param.email, param.role,  options).toPromise();
    }

    /**
     * Create user endpoint  Args:     request (Request): Fastapi Requests object     username (str): User username     password (str): User password     email (str): User email     role (str): RomM Role object represented as string  Returns:     UserSchema: Newly created user
     * Add User
     * @param param the request object
     */
    public addUserApiUsersPost(param: UsersApiAddUserApiUsersPostRequest, options?: ConfigurationOptions): Promise<UserSchema> {
        return this.api.addUserApiUsersPost(param.username, param.password, param.email, param.role,  options).toPromise();
    }

    /**
     * Create an invite link for a user.  Args:     request (Request): FastAPI Request object     role (str): The role of the user  Returns:     InviteLinkSchema: Invite link
     * Create Invite Link
     * @param param the request object
     */
    public createInviteLinkApiUsersInviteLinkPostWithHttpInfo(param: UsersApiCreateInviteLinkApiUsersInviteLinkPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<InviteLinkSchema>> {
        return this.api.createInviteLinkApiUsersInviteLinkPostWithHttpInfo(param.role,  options).toPromise();
    }

    /**
     * Create an invite link for a user.  Args:     request (Request): FastAPI Request object     role (str): The role of the user  Returns:     InviteLinkSchema: Invite link
     * Create Invite Link
     * @param param the request object
     */
    public createInviteLinkApiUsersInviteLinkPost(param: UsersApiCreateInviteLinkApiUsersInviteLinkPostRequest, options?: ConfigurationOptions): Promise<InviteLinkSchema> {
        return this.api.createInviteLinkApiUsersInviteLinkPost(param.role,  options).toPromise();
    }

    /**
     * Create user endpoint with invite link  Args:     username (str): User username     email (str): User email     password (str): User password     token (str): Invite link token  Returns:     UserSchema: Newly created user
     * Create User From Invite
     * @param param the request object
     */
    public createUserFromInviteApiUsersRegisterPostWithHttpInfo(param: UsersApiCreateUserFromInviteApiUsersRegisterPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserSchema>> {
        return this.api.createUserFromInviteApiUsersRegisterPostWithHttpInfo(param.bodyCreateUserFromInviteApiUsersRegisterPost,  options).toPromise();
    }

    /**
     * Create user endpoint with invite link  Args:     username (str): User username     email (str): User email     password (str): User password     token (str): Invite link token  Returns:     UserSchema: Newly created user
     * Create User From Invite
     * @param param the request object
     */
    public createUserFromInviteApiUsersRegisterPost(param: UsersApiCreateUserFromInviteApiUsersRegisterPostRequest, options?: ConfigurationOptions): Promise<UserSchema> {
        return this.api.createUserFromInviteApiUsersRegisterPost(param.bodyCreateUserFromInviteApiUsersRegisterPost,  options).toPromise();
    }

    /**
     * Delete user endpoint  Args:     request (Request): Fastapi Request object     user_id (int): User internal id  Raises:     HTTPException: User is not found in database     HTTPException: User deleting itself     HTTPException: User is the last admin user  Returns:     MessageResponse: Standard message response
     * Delete User
     * @param param the request object
     */
    public deleteUserApiUsersIdDeleteWithHttpInfo(param: UsersApiDeleteUserApiUsersIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        return this.api.deleteUserApiUsersIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete user endpoint  Args:     request (Request): Fastapi Request object     user_id (int): User internal id  Raises:     HTTPException: User is not found in database     HTTPException: User deleting itself     HTTPException: User is the last admin user  Returns:     MessageResponse: Standard message response
     * Delete User
     * @param param the request object
     */
    public deleteUserApiUsersIdDelete(param: UsersApiDeleteUserApiUsersIdDeleteRequest, options?: ConfigurationOptions): Promise<MessageResponse> {
        return this.api.deleteUserApiUsersIdDelete(param.id,  options).toPromise();
    }

    /**
     * Get current user endpoint  Args:     request (Request): Fastapi Request object  Returns:     UserSchema | None: Current user
     * Get Current User
     * @param param the request object
     */
    public getCurrentUserApiUsersMeGetWithHttpInfo(param: UsersApiGetCurrentUserApiUsersMeGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<UserSchema>> {
        return this.api.getCurrentUserApiUsersMeGetWithHttpInfo( options).toPromise();
    }

    /**
     * Get current user endpoint  Args:     request (Request): Fastapi Request object  Returns:     UserSchema | None: Current user
     * Get Current User
     * @param param the request object
     */
    public getCurrentUserApiUsersMeGet(param: UsersApiGetCurrentUserApiUsersMeGetRequest = {}, options?: ConfigurationOptions): Promise<UserSchema> {
        return this.api.getCurrentUserApiUsersMeGet( options).toPromise();
    }

    /**
     * Get user endpoint  Args:     request (Request): Fastapi Request object  Returns:     UserSchem: User stored in the RomM\'s database
     * Get User
     * @param param the request object
     */
    public getUserApiUsersIdGetWithHttpInfo(param: UsersApiGetUserApiUsersIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserSchema>> {
        return this.api.getUserApiUsersIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get user endpoint  Args:     request (Request): Fastapi Request object  Returns:     UserSchem: User stored in the RomM\'s database
     * Get User
     * @param param the request object
     */
    public getUserApiUsersIdGet(param: UsersApiGetUserApiUsersIdGetRequest, options?: ConfigurationOptions): Promise<UserSchema> {
        return this.api.getUserApiUsersIdGet(param.id,  options).toPromise();
    }

    /**
     * Get all users endpoint  Args:     request (Request): Fastapi Request object  Returns:     list[UserSchema]: All users stored in the RomM\'s database
     * Get Users
     * @param param the request object
     */
    public getUsersApiUsersGetWithHttpInfo(param: UsersApiGetUsersApiUsersGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<UserSchema>>> {
        return this.api.getUsersApiUsersGetWithHttpInfo( options).toPromise();
    }

    /**
     * Get all users endpoint  Args:     request (Request): Fastapi Request object  Returns:     list[UserSchema]: All users stored in the RomM\'s database
     * Get Users
     * @param param the request object
     */
    public getUsersApiUsersGet(param: UsersApiGetUsersApiUsersGetRequest = {}, options?: ConfigurationOptions): Promise<Array<UserSchema>> {
        return this.api.getUsersApiUsersGet( options).toPromise();
    }

    /**
     * Refresh Retro Achievements
     * @param param the request object
     */
    public refreshRetroAchievementsApiUsersIdRaRefreshPostWithHttpInfo(param: UsersApiRefreshRetroAchievementsApiUsersIdRaRefreshPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        return this.api.refreshRetroAchievementsApiUsersIdRaRefreshPostWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Refresh Retro Achievements
     * @param param the request object
     */
    public refreshRetroAchievementsApiUsersIdRaRefreshPost(param: UsersApiRefreshRetroAchievementsApiUsersIdRaRefreshPostRequest, options?: ConfigurationOptions): Promise<MessageResponse> {
        return this.api.refreshRetroAchievementsApiUsersIdRaRefreshPost(param.id,  options).toPromise();
    }

    /**
     * Update user endpoint  Args:     request (Request): Fastapi Requests object     user_id (int): User internal id     form_data (Annotated[UserUpdateForm, Depends): Form Data with user updated info  Raises:     HTTPException: User is not found in database     HTTPException: Username already in use by another user  Returns:     UserSchema: Updated user info
     * Update User
     * @param param the request object
     */
    public updateUserApiUsersIdPutWithHttpInfo(param: UsersApiUpdateUserApiUsersIdPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserSchema>> {
        return this.api.updateUserApiUsersIdPutWithHttpInfo(param.id, param.username, param.password, param.email, param.role, param.enabled, param.raUsername, param.avatar,  options).toPromise();
    }

    /**
     * Update user endpoint  Args:     request (Request): Fastapi Requests object     user_id (int): User internal id     form_data (Annotated[UserUpdateForm, Depends): Form Data with user updated info  Raises:     HTTPException: User is not found in database     HTTPException: Username already in use by another user  Returns:     UserSchema: Updated user info
     * Update User
     * @param param the request object
     */
    public updateUserApiUsersIdPut(param: UsersApiUpdateUserApiUsersIdPutRequest, options?: ConfigurationOptions): Promise<UserSchema> {
        return this.api.updateUserApiUsersIdPut(param.id, param.username, param.password, param.email, param.role, param.enabled, param.raUsername, param.avatar,  options).toPromise();
    }

}
