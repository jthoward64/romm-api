import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, PromiseConfigurationOptions, wrapOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

import { AddFirmwareResponse } from '../models/AddFirmwareResponse';
import { BodyCreateUserFromInviteApiUsersRegisterPost } from '../models/BodyCreateUserFromInviteApiUsersRegisterPost';
import { BodyRequestPasswordResetApiForgotPasswordPost } from '../models/BodyRequestPasswordResetApiForgotPasswordPost';
import { BodyResetPasswordApiResetPasswordPost } from '../models/BodyResetPasswordApiResetPasswordPost';
import { CollectionSchema } from '../models/CollectionSchema';
import { ConfigResponse } from '../models/ConfigResponse';
import { CustomLimitOffsetPageSimpleRomSchema } from '../models/CustomLimitOffsetPageSimpleRomSchema';
import { DetailedRomSchema } from '../models/DetailedRomSchema';
import { EarnedAchievement } from '../models/EarnedAchievement';
import { EmulationDict } from '../models/EmulationDict';
import { FilesystemDict } from '../models/FilesystemDict';
import { FirmwareSchema } from '../models/FirmwareSchema';
import { FrontendDict } from '../models/FrontendDict';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { HeartbeatResponse } from '../models/HeartbeatResponse';
import { IGDBAgeRating } from '../models/IGDBAgeRating';
import { IGDBMetadataPlatform } from '../models/IGDBMetadataPlatform';
import { IGDBRelatedGame } from '../models/IGDBRelatedGame';
import { InviteLinkSchema } from '../models/InviteLinkSchema';
import { MessageResponse } from '../models/MessageResponse';
import { MetadataSourcesDict } from '../models/MetadataSourcesDict';
import { MobyMetadataPlatform } from '../models/MobyMetadataPlatform';
import { OIDCDict } from '../models/OIDCDict';
import { PlatformSchema } from '../models/PlatformSchema';
import { RAGameRomAchievement } from '../models/RAGameRomAchievement';
import { RAProgression } from '../models/RAProgression';
import { RAUserGameProgression } from '../models/RAUserGameProgression';
import { Role } from '../models/Role';
import { RomFileCategory } from '../models/RomFileCategory';
import { RomFileSchema } from '../models/RomFileSchema';
import { RomIGDBMetadata } from '../models/RomIGDBMetadata';
import { RomMetadataSchema } from '../models/RomMetadataSchema';
import { RomMobyMetadata } from '../models/RomMobyMetadata';
import { RomRAMetadata } from '../models/RomRAMetadata';
import { RomSSMetadata } from '../models/RomSSMetadata';
import { RomUserSchema } from '../models/RomUserSchema';
import { RomUserStatus } from '../models/RomUserStatus';
import { SaveSchema } from '../models/SaveSchema';
import { SchedulerDict } from '../models/SchedulerDict';
import { ScreenshotSchema } from '../models/ScreenshotSchema';
import { SearchCoverSchema } from '../models/SearchCoverSchema';
import { SearchRomSchema } from '../models/SearchRomSchema';
import { SiblingRomSchema } from '../models/SiblingRomSchema';
import { SimpleRomSchema } from '../models/SimpleRomSchema';
import { StateSchema } from '../models/StateSchema';
import { StatsReturn } from '../models/StatsReturn';
import { SystemDict } from '../models/SystemDict';
import { TaskDict } from '../models/TaskDict';
import { TinfoilFeedFileSchema } from '../models/TinfoilFeedFileSchema';
import { TinfoilFeedSchema } from '../models/TinfoilFeedSchema';
import { TinfoilFeedTitleDBSchema } from '../models/TinfoilFeedTitleDBSchema';
import { TokenResponse } from '../models/TokenResponse';
import { UserNotesSchema } from '../models/UserNotesSchema';
import { UserSchema } from '../models/UserSchema';
import { ValidationError } from '../models/ValidationError';
import { ValidationErrorLocInner } from '../models/ValidationErrorLocInner';
import { VirtualCollectionSchema } from '../models/VirtualCollectionSchema';
import { WatcherDict } from '../models/WatcherDict';
import { WebrcadeFeedCategorySchema } from '../models/WebrcadeFeedCategorySchema';
import { WebrcadeFeedItemPropsSchema } from '../models/WebrcadeFeedItemPropsSchema';
import { WebrcadeFeedItemSchema } from '../models/WebrcadeFeedItemSchema';
import { WebrcadeFeedSchema } from '../models/WebrcadeFeedSchema';
import { ObservableAuthApi } from './ObservableAPI';

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class PromiseAuthApi {
    private api: ObservableAuthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * OIDC callback endpoint  Args:     request (Request): Fastapi Request object  Raises:     OIDCDisabledException: OAuth is disabled     OIDCNotConfiguredException: OAuth not configured     AuthCredentialsException: Invalid credentials     UserDisabledException: Auth is disabled  Returns:     RedirectResponse: Redirect to home page
     * Auth Openid
     */
    public authOpenidApiOauthOpenidGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authOpenidApiOauthOpenidGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * OIDC callback endpoint  Args:     request (Request): Fastapi Request object  Raises:     OIDCDisabledException: OAuth is disabled     OIDCNotConfiguredException: OAuth not configured     AuthCredentialsException: Invalid credentials     UserDisabledException: Auth is disabled  Returns:     RedirectResponse: Redirect to home page
     * Auth Openid
     */
    public authOpenidApiOauthOpenidGet(_options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authOpenidApiOauthOpenidGet(observableOptions);
        return result.toPromise();
    }

    /**
     * Session login endpoint  Args:     request (Request): Fastapi Request object     credentials: Defaults to Depends(HTTPBasic()).  Raises:     CredentialsException: Invalid credentials     UserDisabledException: Auth is disabled  Returns:     MessageResponse: Standard message response
     * Login
     */
    public loginApiLoginPostWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.loginApiLoginPostWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Session login endpoint  Args:     request (Request): Fastapi Request object     credentials: Defaults to Depends(HTTPBasic()).  Raises:     CredentialsException: Invalid credentials     UserDisabledException: Auth is disabled  Returns:     MessageResponse: Standard message response
     * Login
     */
    public loginApiLoginPost(_options?: PromiseConfigurationOptions): Promise<MessageResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.loginApiLoginPost(observableOptions);
        return result.toPromise();
    }

    /**
     * OIDC login endpoint  Args:     request (Request): Fastapi Request object  Raises:     OIDCDisabledException: OAuth is disabled     OIDCNotConfiguredException: OAuth not configured  Returns:     RedirectResponse: Redirect to OIDC provider
     * Login Via Openid
     */
    public loginViaOpenidApiLoginOpenidGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.loginViaOpenidApiLoginOpenidGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * OIDC login endpoint  Args:     request (Request): Fastapi Request object  Raises:     OIDCDisabledException: OAuth is disabled     OIDCNotConfiguredException: OAuth not configured  Returns:     RedirectResponse: Redirect to OIDC provider
     * Login Via Openid
     */
    public loginViaOpenidApiLoginOpenidGet(_options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.loginViaOpenidApiLoginOpenidGet(observableOptions);
        return result.toPromise();
    }

    /**
     * Session logout endpoint  Args:     request (Request): Fastapi Request object  Returns:     MessageResponse: Standard message response
     * Logout
     */
    public logoutApiLogoutPostWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.logoutApiLogoutPostWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Session logout endpoint  Args:     request (Request): Fastapi Request object  Returns:     MessageResponse: Standard message response
     * Logout
     */
    public logoutApiLogoutPost(_options?: PromiseConfigurationOptions): Promise<MessageResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.logoutApiLogoutPost(observableOptions);
        return result.toPromise();
    }

    /**
     * \"Request a password reset link for the user.  Args:     username (str): Username of the user requesting the reset Returns:     MessageResponse: Confirmation message
     * Request Password Reset
     * @param bodyRequestPasswordResetApiForgotPasswordPost
     */
    public requestPasswordResetApiForgotPasswordPostWithHttpInfo(bodyRequestPasswordResetApiForgotPasswordPost: BodyRequestPasswordResetApiForgotPasswordPost, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.requestPasswordResetApiForgotPasswordPostWithHttpInfo(bodyRequestPasswordResetApiForgotPasswordPost, observableOptions);
        return result.toPromise();
    }

    /**
     * \"Request a password reset link for the user.  Args:     username (str): Username of the user requesting the reset Returns:     MessageResponse: Confirmation message
     * Request Password Reset
     * @param bodyRequestPasswordResetApiForgotPasswordPost
     */
    public requestPasswordResetApiForgotPasswordPost(bodyRequestPasswordResetApiForgotPasswordPost: BodyRequestPasswordResetApiForgotPasswordPost, _options?: PromiseConfigurationOptions): Promise<MessageResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.requestPasswordResetApiForgotPasswordPost(bodyRequestPasswordResetApiForgotPasswordPost, observableOptions);
        return result.toPromise();
    }

    /**
     * Reset password using the token.  Args:     token (str): Reset token from the URL     new_password (str): New user password  Returns:     MessageResponse: Confirmation message
     * Reset Password
     * @param bodyResetPasswordApiResetPasswordPost
     */
    public resetPasswordApiResetPasswordPostWithHttpInfo(bodyResetPasswordApiResetPasswordPost: BodyResetPasswordApiResetPasswordPost, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.resetPasswordApiResetPasswordPostWithHttpInfo(bodyResetPasswordApiResetPasswordPost, observableOptions);
        return result.toPromise();
    }

    /**
     * Reset password using the token.  Args:     token (str): Reset token from the URL     new_password (str): New user password  Returns:     MessageResponse: Confirmation message
     * Reset Password
     * @param bodyResetPasswordApiResetPasswordPost
     */
    public resetPasswordApiResetPasswordPost(bodyResetPasswordApiResetPasswordPost: BodyResetPasswordApiResetPasswordPost, _options?: PromiseConfigurationOptions): Promise<MessageResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.resetPasswordApiResetPasswordPost(bodyResetPasswordApiResetPasswordPost, observableOptions);
        return result.toPromise();
    }

    /**
     * OAuth2 token endpoint  Args:     form_data (Annotated[OAuth2RequestForm, Depends): Form Data with OAuth2 info  Raises:     HTTPException: Missing refresh token     HTTPException: Invalid refresh token     HTTPException: Missing username or password     HTTPException: Invalid username or password     HTTPException: Client credentials are not yet supported     HTTPException: Invalid or unsupported grant type     HTTPException: Insufficient scope  Returns:     TokenResponse: TypedDict with the new generated token info
     * Token
     * @param [grantType]
     * @param [scope]
     * @param [username]
     * @param [password]
     * @param [clientId]
     * @param [clientSecret]
     * @param [refreshToken]
     */
    public tokenApiTokenPostWithHttpInfo(grantType?: string, scope?: string, username?: string, password?: string, clientId?: string, clientSecret?: string, refreshToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TokenResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.tokenApiTokenPostWithHttpInfo(grantType, scope, username, password, clientId, clientSecret, refreshToken, observableOptions);
        return result.toPromise();
    }

    /**
     * OAuth2 token endpoint  Args:     form_data (Annotated[OAuth2RequestForm, Depends): Form Data with OAuth2 info  Raises:     HTTPException: Missing refresh token     HTTPException: Invalid refresh token     HTTPException: Missing username or password     HTTPException: Invalid username or password     HTTPException: Client credentials are not yet supported     HTTPException: Invalid or unsupported grant type     HTTPException: Insufficient scope  Returns:     TokenResponse: TypedDict with the new generated token info
     * Token
     * @param [grantType]
     * @param [scope]
     * @param [username]
     * @param [password]
     * @param [clientId]
     * @param [clientSecret]
     * @param [refreshToken]
     */
    public tokenApiTokenPost(grantType?: string, scope?: string, username?: string, password?: string, clientId?: string, clientSecret?: string, refreshToken?: string, _options?: PromiseConfigurationOptions): Promise<TokenResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.tokenApiTokenPost(grantType, scope, username, password, clientId, clientSecret, refreshToken, observableOptions);
        return result.toPromise();
    }


}



import { ObservableCollectionsApi } from './ObservableAPI';

import { CollectionsApiRequestFactory, CollectionsApiResponseProcessor} from "../apis/CollectionsApi";
export class PromiseCollectionsApi {
    private api: ObservableCollectionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CollectionsApiRequestFactory,
        responseProcessor?: CollectionsApiResponseProcessor
    ) {
        this.api = new ObservableCollectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create collection endpoint  Args:     request (Request): Fastapi Request object  Returns:     CollectionSchema: Just created collection
     * Add Collection
     * @param [artwork]
     */
    public addCollectionApiCollectionsPostWithHttpInfo(artwork?: HttpFile, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addCollectionApiCollectionsPostWithHttpInfo(artwork, observableOptions);
        return result.toPromise();
    }

    /**
     * Create collection endpoint  Args:     request (Request): Fastapi Request object  Returns:     CollectionSchema: Just created collection
     * Add Collection
     * @param [artwork]
     */
    public addCollectionApiCollectionsPost(artwork?: HttpFile, _options?: PromiseConfigurationOptions): Promise<CollectionSchema> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addCollectionApiCollectionsPost(artwork, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete collections endpoint  Args:     request (Request): Fastapi Request object     {         \"collections\": List of rom\'s ids to delete     }  Raises:     HTTPException: Collection not found  Returns:     MessageResponse: Standard message response
     * Delete Collections
     * @param id
     */
    public deleteCollectionsApiCollectionsIdDeleteWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCollectionsApiCollectionsIdDeleteWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete collections endpoint  Args:     request (Request): Fastapi Request object     {         \"collections\": List of rom\'s ids to delete     }  Raises:     HTTPException: Collection not found  Returns:     MessageResponse: Standard message response
     * Delete Collections
     * @param id
     */
    public deleteCollectionsApiCollectionsIdDelete(id: number, _options?: PromiseConfigurationOptions): Promise<MessageResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCollectionsApiCollectionsIdDelete(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get collections endpoint  Args:     request (Request): Fastapi Request object     id (int, optional): Collection id. Defaults to None.  Returns:     CollectionSchema: Collection
     * Get Collection
     * @param id
     */
    public getCollectionApiCollectionsIdGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCollectionApiCollectionsIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get collections endpoint  Args:     request (Request): Fastapi Request object     id (int, optional): Collection id. Defaults to None.  Returns:     CollectionSchema: Collection
     * Get Collection
     * @param id
     */
    public getCollectionApiCollectionsIdGet(id: number, _options?: PromiseConfigurationOptions): Promise<CollectionSchema> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCollectionApiCollectionsIdGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get collections endpoint  Args:     request (Request): Fastapi Request object     id (int, optional): Collection id. Defaults to None.  Returns:     list[CollectionSchema]: List of collections
     * Get Collections
     */
    public getCollectionsApiCollectionsGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<CollectionSchema>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCollectionsApiCollectionsGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Get collections endpoint  Args:     request (Request): Fastapi Request object     id (int, optional): Collection id. Defaults to None.  Returns:     list[CollectionSchema]: List of collections
     * Get Collections
     */
    public getCollectionsApiCollectionsGet(_options?: PromiseConfigurationOptions): Promise<Array<CollectionSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCollectionsApiCollectionsGet(observableOptions);
        return result.toPromise();
    }

    /**
     * Get virtual collections endpoint  Args:     request (Request): Fastapi Request object     id (str): Virtual collection id  Returns:     VirtualCollectionSchema: Virtual collection
     * Get Virtual Collection
     * @param id
     */
    public getVirtualCollectionApiCollectionsVirtualIdGetWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<VirtualCollectionSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getVirtualCollectionApiCollectionsVirtualIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get virtual collections endpoint  Args:     request (Request): Fastapi Request object     id (str): Virtual collection id  Returns:     VirtualCollectionSchema: Virtual collection
     * Get Virtual Collection
     * @param id
     */
    public getVirtualCollectionApiCollectionsVirtualIdGet(id: string, _options?: PromiseConfigurationOptions): Promise<VirtualCollectionSchema> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getVirtualCollectionApiCollectionsVirtualIdGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get virtual collections endpoint  Args:     request (Request): Fastapi Request object  Returns:     list[VirtualCollectionSchema]: List of virtual collections
     * Get Virtual Collections
     * @param type
     * @param [limit]
     */
    public getVirtualCollectionsApiCollectionsVirtualGetWithHttpInfo(type: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<VirtualCollectionSchema>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getVirtualCollectionsApiCollectionsVirtualGetWithHttpInfo(type, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Get virtual collections endpoint  Args:     request (Request): Fastapi Request object  Returns:     list[VirtualCollectionSchema]: List of virtual collections
     * Get Virtual Collections
     * @param type
     * @param [limit]
     */
    public getVirtualCollectionsApiCollectionsVirtualGet(type: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<Array<VirtualCollectionSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getVirtualCollectionsApiCollectionsVirtualGet(type, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Update collection endpoint  Args:     request (Request): Fastapi Request object  Returns:     MessageResponse: Standard message response
     * Update Collection
     * @param id
     * @param [removeCover]
     * @param [isPublic]
     * @param [artwork]
     */
    public updateCollectionApiCollectionsIdPutWithHttpInfo(id: number, removeCover?: boolean, isPublic?: boolean, artwork?: HttpFile, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCollectionApiCollectionsIdPutWithHttpInfo(id, removeCover, isPublic, artwork, observableOptions);
        return result.toPromise();
    }

    /**
     * Update collection endpoint  Args:     request (Request): Fastapi Request object  Returns:     MessageResponse: Standard message response
     * Update Collection
     * @param id
     * @param [removeCover]
     * @param [isPublic]
     * @param [artwork]
     */
    public updateCollectionApiCollectionsIdPut(id: number, removeCover?: boolean, isPublic?: boolean, artwork?: HttpFile, _options?: PromiseConfigurationOptions): Promise<CollectionSchema> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCollectionApiCollectionsIdPut(id, removeCover, isPublic, artwork, observableOptions);
        return result.toPromise();
    }


}



import { ObservableConfigApi } from './ObservableAPI';

import { ConfigApiRequestFactory, ConfigApiResponseProcessor} from "../apis/ConfigApi";
export class PromiseConfigApi {
    private api: ObservableConfigApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ConfigApiRequestFactory,
        responseProcessor?: ConfigApiResponseProcessor
    ) {
        this.api = new ObservableConfigApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add platform exclusion to the configuration
     * Add Exclusion
     */
    public addExclusionApiConfigExcludePostWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addExclusionApiConfigExcludePostWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Add platform exclusion to the configuration
     * Add Exclusion
     */
    public addExclusionApiConfigExcludePost(_options?: PromiseConfigurationOptions): Promise<MessageResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addExclusionApiConfigExcludePost(observableOptions);
        return result.toPromise();
    }

    /**
     * Add platform binding to the configuration
     * Add Platform Binding
     */
    public addPlatformBindingApiConfigSystemPlatformsPostWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addPlatformBindingApiConfigSystemPlatformsPostWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Add platform binding to the configuration
     * Add Platform Binding
     */
    public addPlatformBindingApiConfigSystemPlatformsPost(_options?: PromiseConfigurationOptions): Promise<MessageResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addPlatformBindingApiConfigSystemPlatformsPost(observableOptions);
        return result.toPromise();
    }

    /**
     * Add platform version to the configuration
     * Add Platform Version
     */
    public addPlatformVersionApiConfigSystemVersionsPostWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addPlatformVersionApiConfigSystemVersionsPostWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Add platform version to the configuration
     * Add Platform Version
     */
    public addPlatformVersionApiConfigSystemVersionsPost(_options?: PromiseConfigurationOptions): Promise<MessageResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addPlatformVersionApiConfigSystemVersionsPost(observableOptions);
        return result.toPromise();
    }

    /**
     * Delete platform binding from the configuration
     * Delete Exclusion
     * @param exclusionType
     * @param exclusionValue
     */
    public deleteExclusionApiConfigExcludeExclusionTypeExclusionValueDeleteWithHttpInfo(exclusionType: string, exclusionValue: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteExclusionApiConfigExcludeExclusionTypeExclusionValueDeleteWithHttpInfo(exclusionType, exclusionValue, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete platform binding from the configuration
     * Delete Exclusion
     * @param exclusionType
     * @param exclusionValue
     */
    public deleteExclusionApiConfigExcludeExclusionTypeExclusionValueDelete(exclusionType: string, exclusionValue: string, _options?: PromiseConfigurationOptions): Promise<MessageResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteExclusionApiConfigExcludeExclusionTypeExclusionValueDelete(exclusionType, exclusionValue, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete platform binding from the configuration
     * Delete Platform Binding
     * @param fsSlug
     */
    public deletePlatformBindingApiConfigSystemPlatformsFsSlugDeleteWithHttpInfo(fsSlug: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deletePlatformBindingApiConfigSystemPlatformsFsSlugDeleteWithHttpInfo(fsSlug, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete platform binding from the configuration
     * Delete Platform Binding
     * @param fsSlug
     */
    public deletePlatformBindingApiConfigSystemPlatformsFsSlugDelete(fsSlug: string, _options?: PromiseConfigurationOptions): Promise<MessageResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deletePlatformBindingApiConfigSystemPlatformsFsSlugDelete(fsSlug, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete platform version from the configuration
     * Delete Platform Version
     * @param fsSlug
     */
    public deletePlatformVersionApiConfigSystemVersionsFsSlugDeleteWithHttpInfo(fsSlug: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deletePlatformVersionApiConfigSystemVersionsFsSlugDeleteWithHttpInfo(fsSlug, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete platform version from the configuration
     * Delete Platform Version
     * @param fsSlug
     */
    public deletePlatformVersionApiConfigSystemVersionsFsSlugDelete(fsSlug: string, _options?: PromiseConfigurationOptions): Promise<MessageResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deletePlatformVersionApiConfigSystemVersionsFsSlugDelete(fsSlug, observableOptions);
        return result.toPromise();
    }

    /**
     * Get config endpoint  Returns:     ConfigResponse: RomM\'s configuration
     * Get Config
     */
    public getConfigApiConfigGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<ConfigResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getConfigApiConfigGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Get config endpoint  Returns:     ConfigResponse: RomM\'s configuration
     * Get Config
     */
    public getConfigApiConfigGet(_options?: PromiseConfigurationOptions): Promise<ConfigResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getConfigApiConfigGet(observableOptions);
        return result.toPromise();
    }


}



import { ObservableFeedsApi } from './ObservableAPI';

import { FeedsApiRequestFactory, FeedsApiResponseProcessor} from "../apis/FeedsApi";
export class PromiseFeedsApi {
    private api: ObservableFeedsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FeedsApiRequestFactory,
        responseProcessor?: FeedsApiResponseProcessor
    ) {
        this.api = new ObservableFeedsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get webrcade feed endpoint https://docs.webrcade.com/feeds/format/  Args:     request (Request): Fastapi Request object  Returns:     WebrcadeFeedSchema: Webrcade feed object schema
     * Platforms Webrcade Feed
     */
    public platformsWebrcadeFeedApiWebrcadeFeedGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<WebrcadeFeedSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.platformsWebrcadeFeedApiWebrcadeFeedGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Get webrcade feed endpoint https://docs.webrcade.com/feeds/format/  Args:     request (Request): Fastapi Request object  Returns:     WebrcadeFeedSchema: Webrcade feed object schema
     * Platforms Webrcade Feed
     */
    public platformsWebrcadeFeedApiWebrcadeFeedGet(_options?: PromiseConfigurationOptions): Promise<WebrcadeFeedSchema> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.platformsWebrcadeFeedApiWebrcadeFeedGet(observableOptions);
        return result.toPromise();
    }

    /**
     * Get tinfoil custom index feed endpoint https://blawar.github.io/tinfoil/custom_index/  Args:     request (Request): Fastapi Request object     slug (str, optional): Platform slug. Defaults to \"switch\".  Returns:     TinfoilFeedSchema: Tinfoil feed object schema
     * Tinfoil Index Feed
     * @param [slug]
     */
    public tinfoilIndexFeedApiTinfoilFeedGetWithHttpInfo(slug?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TinfoilFeedSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.tinfoilIndexFeedApiTinfoilFeedGetWithHttpInfo(slug, observableOptions);
        return result.toPromise();
    }

    /**
     * Get tinfoil custom index feed endpoint https://blawar.github.io/tinfoil/custom_index/  Args:     request (Request): Fastapi Request object     slug (str, optional): Platform slug. Defaults to \"switch\".  Returns:     TinfoilFeedSchema: Tinfoil feed object schema
     * Tinfoil Index Feed
     * @param [slug]
     */
    public tinfoilIndexFeedApiTinfoilFeedGet(slug?: string, _options?: PromiseConfigurationOptions): Promise<TinfoilFeedSchema> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.tinfoilIndexFeedApiTinfoilFeedGet(slug, observableOptions);
        return result.toPromise();
    }


}



import { ObservableFirmwareApi } from './ObservableAPI';

import { FirmwareApiRequestFactory, FirmwareApiResponseProcessor} from "../apis/FirmwareApi";
export class PromiseFirmwareApi {
    private api: ObservableFirmwareApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FirmwareApiRequestFactory,
        responseProcessor?: FirmwareApiResponseProcessor
    ) {
        this.api = new ObservableFirmwareApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Upload firmware files endpoint  Args:     request (Request): Fastapi Request object     platform_slug (str): Slug of the platform where to upload the files     files (list[UploadFile], optional): List of files to upload  Raises:     HTTPException  Returns:     AddFirmwareResponse: Standard message response
     * Add Firmware
     * @param platformId
     * @param files
     */
    public addFirmwareApiFirmwarePostWithHttpInfo(platformId: number, files: Array<HttpFile>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AddFirmwareResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addFirmwareApiFirmwarePostWithHttpInfo(platformId, files, observableOptions);
        return result.toPromise();
    }

    /**
     * Upload firmware files endpoint  Args:     request (Request): Fastapi Request object     platform_slug (str): Slug of the platform where to upload the files     files (list[UploadFile], optional): List of files to upload  Raises:     HTTPException  Returns:     AddFirmwareResponse: Standard message response
     * Add Firmware
     * @param platformId
     * @param files
     */
    public addFirmwareApiFirmwarePost(platformId: number, files: Array<HttpFile>, _options?: PromiseConfigurationOptions): Promise<AddFirmwareResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addFirmwareApiFirmwarePost(platformId, files, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete firmware endpoint  Args:     request (Request): Fastapi Request object.         {             \"firmware\": List of firmware IDs to delete         }     delete_from_fs (bool, optional): Flag to delete rom from filesystem. Defaults to False.  Returns:     MessageResponse: Standard message response
     * Delete Firmware
     */
    public deleteFirmwareApiFirmwareDeletePostWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFirmwareApiFirmwareDeletePostWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Delete firmware endpoint  Args:     request (Request): Fastapi Request object.         {             \"firmware\": List of firmware IDs to delete         }     delete_from_fs (bool, optional): Flag to delete rom from filesystem. Defaults to False.  Returns:     MessageResponse: Standard message response
     * Delete Firmware
     */
    public deleteFirmwareApiFirmwareDeletePost(_options?: PromiseConfigurationOptions): Promise<MessageResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFirmwareApiFirmwareDeletePost(observableOptions);
        return result.toPromise();
    }

    /**
     * Get firmware endpoint  Args:     request (Request): Fastapi Request object     id (int): Firmware internal id  Returns:     FirmwareSchema: Firmware stored in the database
     * Get Firmware
     * @param id
     */
    public getFirmwareApiFirmwareIdGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FirmwareSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFirmwareApiFirmwareIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get firmware endpoint  Args:     request (Request): Fastapi Request object     id (int): Firmware internal id  Returns:     FirmwareSchema: Firmware stored in the database
     * Get Firmware
     * @param id
     */
    public getFirmwareApiFirmwareIdGet(id: number, _options?: PromiseConfigurationOptions): Promise<FirmwareSchema> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFirmwareApiFirmwareIdGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Download firmware endpoint  Args:     request (Request): Fastapi Request object     id (int): Rom internal id     file_name (str): Required due to a bug in emulatorjs  Returns:     FileResponse: Returns the firmware file
     * Get Firmware Content
     * @param id
     * @param fileName
     */
    public getFirmwareContentApiFirmwareIdContentFileNameGetWithHttpInfo(id: number, fileName: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFirmwareContentApiFirmwareIdContentFileNameGetWithHttpInfo(id, fileName, observableOptions);
        return result.toPromise();
    }

    /**
     * Download firmware endpoint  Args:     request (Request): Fastapi Request object     id (int): Rom internal id     file_name (str): Required due to a bug in emulatorjs  Returns:     FileResponse: Returns the firmware file
     * Get Firmware Content
     * @param id
     * @param fileName
     */
    public getFirmwareContentApiFirmwareIdContentFileNameGet(id: number, fileName: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFirmwareContentApiFirmwareIdContentFileNameGet(id, fileName, observableOptions);
        return result.toPromise();
    }

    /**
     * Get firmware endpoint  Args:     request (Request): Fastapi Request object  Returns:     list[FirmwareSchema]: Firmware stored in the database
     * Get Platform Firmware
     * @param [platformId]
     */
    public getPlatformFirmwareApiFirmwareGetWithHttpInfo(platformId?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<FirmwareSchema>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPlatformFirmwareApiFirmwareGetWithHttpInfo(platformId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get firmware endpoint  Args:     request (Request): Fastapi Request object  Returns:     list[FirmwareSchema]: Firmware stored in the database
     * Get Platform Firmware
     * @param [platformId]
     */
    public getPlatformFirmwareApiFirmwareGet(platformId?: number, _options?: PromiseConfigurationOptions): Promise<Array<FirmwareSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPlatformFirmwareApiFirmwareGet(platformId, observableOptions);
        return result.toPromise();
    }

    /**
     * Head firmware content endpoint  Args:     request (Request): Fastapi Request object     id (int): Rom internal id     file_name (str): Required due to a bug in emulatorjs  Returns:     FileResponse: Returns the response with headers
     * Head Firmware Content
     * @param id
     * @param fileName
     */
    public headFirmwareContentApiFirmwareIdContentFileNameHeadWithHttpInfo(id: number, fileName: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.headFirmwareContentApiFirmwareIdContentFileNameHeadWithHttpInfo(id, fileName, observableOptions);
        return result.toPromise();
    }

    /**
     * Head firmware content endpoint  Args:     request (Request): Fastapi Request object     id (int): Rom internal id     file_name (str): Required due to a bug in emulatorjs  Returns:     FileResponse: Returns the response with headers
     * Head Firmware Content
     * @param id
     * @param fileName
     */
    public headFirmwareContentApiFirmwareIdContentFileNameHead(id: number, fileName: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.headFirmwareContentApiFirmwareIdContentFileNameHead(id, fileName, observableOptions);
        return result.toPromise();
    }


}



import { ObservablePlatformsApi } from './ObservableAPI';

import { PlatformsApiRequestFactory, PlatformsApiResponseProcessor} from "../apis/PlatformsApi";
export class PromisePlatformsApi {
    private api: ObservablePlatformsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PlatformsApiRequestFactory,
        responseProcessor?: PlatformsApiResponseProcessor
    ) {
        this.api = new ObservablePlatformsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create platform endpoint  Args:     request (Request): Fastapi Request object  Returns:     PlatformSchema: Just created platform
     * Add Platforms
     */
    public addPlatformsApiPlatformsPostWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<PlatformSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addPlatformsApiPlatformsPostWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Create platform endpoint  Args:     request (Request): Fastapi Request object  Returns:     PlatformSchema: Just created platform
     * Add Platforms
     */
    public addPlatformsApiPlatformsPost(_options?: PromiseConfigurationOptions): Promise<PlatformSchema> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addPlatformsApiPlatformsPost(observableOptions);
        return result.toPromise();
    }

    /**
     * Delete platforms endpoint  Args:     request (Request): Fastapi Request object     {         \"platforms\": List of rom\'s ids to delete     }  Raises:     HTTPException: Platform not found  Returns:     MessageResponse: Standard message response
     * Delete Platforms
     * @param id
     */
    public deletePlatformsApiPlatformsIdDeleteWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deletePlatformsApiPlatformsIdDeleteWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete platforms endpoint  Args:     request (Request): Fastapi Request object     {         \"platforms\": List of rom\'s ids to delete     }  Raises:     HTTPException: Platform not found  Returns:     MessageResponse: Standard message response
     * Delete Platforms
     * @param id
     */
    public deletePlatformsApiPlatformsIdDelete(id: number, _options?: PromiseConfigurationOptions): Promise<MessageResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deletePlatformsApiPlatformsIdDelete(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get platforms endpoint  Args:     request (Request): Fastapi Request object     id (int, optional): Platform id. Defaults to None.  Returns:     PlatformSchema: Platform
     * Get Platform
     * @param id
     */
    public getPlatformApiPlatformsIdGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PlatformSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPlatformApiPlatformsIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get platforms endpoint  Args:     request (Request): Fastapi Request object     id (int, optional): Platform id. Defaults to None.  Returns:     PlatformSchema: Platform
     * Get Platform
     * @param id
     */
    public getPlatformApiPlatformsIdGet(id: number, _options?: PromiseConfigurationOptions): Promise<PlatformSchema> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPlatformApiPlatformsIdGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get platforms endpoint  Args:     request (Request): Fastapi Request object     id (int, optional): Platform id. Defaults to None.  Returns:     list[PlatformSchema]: List of platforms
     * Get Platforms
     */
    public getPlatformsApiPlatformsGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<PlatformSchema>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPlatformsApiPlatformsGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Get platforms endpoint  Args:     request (Request): Fastapi Request object     id (int, optional): Platform id. Defaults to None.  Returns:     list[PlatformSchema]: List of platforms
     * Get Platforms
     */
    public getPlatformsApiPlatformsGet(_options?: PromiseConfigurationOptions): Promise<Array<PlatformSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPlatformsApiPlatformsGet(observableOptions);
        return result.toPromise();
    }

    /**
     * Get list of supported platforms endpoint  Args:     request (Request): Fastapi Request object  Returns:     list[PlatformSchema]: List of supported platforms
     * Get Supported Platforms
     */
    public getSupportedPlatformsApiPlatformsSupportedGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<PlatformSchema>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSupportedPlatformsApiPlatformsSupportedGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Get list of supported platforms endpoint  Args:     request (Request): Fastapi Request object  Returns:     list[PlatformSchema]: List of supported platforms
     * Get Supported Platforms
     */
    public getSupportedPlatformsApiPlatformsSupportedGet(_options?: PromiseConfigurationOptions): Promise<Array<PlatformSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSupportedPlatformsApiPlatformsSupportedGet(observableOptions);
        return result.toPromise();
    }

    /**
     * Update platform endpoint  Args:     request (Request): Fastapi Request object     id (int): Platform id  Returns:     MessageResponse: Standard message response
     * Update Platform
     * @param id
     */
    public updatePlatformApiPlatformsIdPutWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PlatformSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updatePlatformApiPlatformsIdPutWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Update platform endpoint  Args:     request (Request): Fastapi Request object     id (int): Platform id  Returns:     MessageResponse: Standard message response
     * Update Platform
     * @param id
     */
    public updatePlatformApiPlatformsIdPut(id: number, _options?: PromiseConfigurationOptions): Promise<PlatformSchema> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updatePlatformApiPlatformsIdPut(id, observableOptions);
        return result.toPromise();
    }


}



import { ObservableRawApi } from './ObservableAPI';

import { RawApiRequestFactory, RawApiResponseProcessor} from "../apis/RawApi";
export class PromiseRawApi {
    private api: ObservableRawApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RawApiRequestFactory,
        responseProcessor?: RawApiResponseProcessor
    ) {
        this.api = new ObservableRawApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Download a single asset file  Args:     request (Request): Fastapi Request object  Returns:     FileResponse: Returns a single asset file
     * Get Raw Asset
     * @param path
     */
    public getRawAssetApiRawAssetsPathGetWithHttpInfo(path: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRawAssetApiRawAssetsPathGetWithHttpInfo(path, observableOptions);
        return result.toPromise();
    }

    /**
     * Download a single asset file  Args:     request (Request): Fastapi Request object  Returns:     FileResponse: Returns a single asset file
     * Get Raw Asset
     * @param path
     */
    public getRawAssetApiRawAssetsPathGet(path: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRawAssetApiRawAssetsPathGet(path, observableOptions);
        return result.toPromise();
    }

    /**
     * Head Raw Asset
     * @param path
     */
    public headRawAssetApiRawAssetsPathHeadWithHttpInfo(path: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.headRawAssetApiRawAssetsPathHeadWithHttpInfo(path, observableOptions);
        return result.toPromise();
    }

    /**
     * Head Raw Asset
     * @param path
     */
    public headRawAssetApiRawAssetsPathHead(path: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.headRawAssetApiRawAssetsPathHead(path, observableOptions);
        return result.toPromise();
    }


}



import { ObservableRomsApi } from './ObservableAPI';

import { RomsApiRequestFactory, RomsApiResponseProcessor} from "../apis/RomsApi";
export class PromiseRomsApi {
    private api: ObservableRomsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RomsApiRequestFactory,
        responseProcessor?: RomsApiResponseProcessor
    ) {
        this.api = new ObservableRomsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Upload single rom endpoint  Args:     request (Request): Fastapi Request object  Raises:     HTTPException: No files were uploaded
     * Add Rom
     */
    public addRomApiRomsPostWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addRomApiRomsPostWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Upload single rom endpoint  Args:     request (Request): Fastapi Request object  Raises:     HTTPException: No files were uploaded
     * Add Rom
     */
    public addRomApiRomsPost(_options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addRomApiRomsPost(observableOptions);
        return result.toPromise();
    }

    /**
     * Upload manuals for a rom  Args:     request (Request): Fastapi Request object  Raises:     HTTPException: No files were uploaded
     * Add Rom Manuals
     * @param id
     */
    public addRomManualsApiRomsIdManualsPostWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addRomManualsApiRomsIdManualsPostWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Upload manuals for a rom  Args:     request (Request): Fastapi Request object  Raises:     HTTPException: No files were uploaded
     * Add Rom Manuals
     * @param id
     */
    public addRomManualsApiRomsIdManualsPost(id: number, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addRomManualsApiRomsIdManualsPost(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete roms endpoint  Args:     request (Request): Fastapi Request object.         {             \"roms\": List of rom\'s ids to delete         }     delete_from_fs (bool, optional): Flag to delete rom from filesystem. Defaults to False.  Returns:     MessageResponse: Standard message response
     * Delete Roms
     */
    public deleteRomsApiRomsDeletePostWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteRomsApiRomsDeletePostWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Delete roms endpoint  Args:     request (Request): Fastapi Request object.         {             \"roms\": List of rom\'s ids to delete         }     delete_from_fs (bool, optional): Flag to delete rom from filesystem. Defaults to False.  Returns:     MessageResponse: Standard message response
     * Delete Roms
     */
    public deleteRomsApiRomsDeletePost(_options?: PromiseConfigurationOptions): Promise<MessageResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteRomsApiRomsDeletePost(observableOptions);
        return result.toPromise();
    }

    /**
     * Get rom endpoint  Args:     request (Request): Fastapi Request object     id (int): Rom internal id  Returns:     DetailedRomSchema: Rom stored in the database
     * Get Rom
     * @param id
     */
    public getRomApiRomsIdGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DetailedRomSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRomApiRomsIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get rom endpoint  Args:     request (Request): Fastapi Request object     id (int): Rom internal id  Returns:     DetailedRomSchema: Rom stored in the database
     * Get Rom
     * @param id
     */
    public getRomApiRomsIdGet(id: number, _options?: PromiseConfigurationOptions): Promise<DetailedRomSchema> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRomApiRomsIdGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Download rom endpoint (one single file or multiple zipped files for multi-part roms)  Args:     request (Request): Fastapi Request object     id (int): Rom internal id     file_name: Zip file output name  Returns:     Response: Returns a response with headers  Yields:     FileResponse: Returns one file for single file roms     FileRedirectResponse: Redirects to the file download path     ZipResponse: Returns a response for nginx to serve a Zip file for multi-part roms
     * Get Rom Content
     * @param id
     * @param fileName
     */
    public getRomContentApiRomsIdContentFileNameGetWithHttpInfo(id: number, fileName: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRomContentApiRomsIdContentFileNameGetWithHttpInfo(id, fileName, observableOptions);
        return result.toPromise();
    }

    /**
     * Download rom endpoint (one single file or multiple zipped files for multi-part roms)  Args:     request (Request): Fastapi Request object     id (int): Rom internal id     file_name: Zip file output name  Returns:     Response: Returns a response with headers  Yields:     FileResponse: Returns one file for single file roms     FileRedirectResponse: Redirects to the file download path     ZipResponse: Returns a response for nginx to serve a Zip file for multi-part roms
     * Get Rom Content
     * @param id
     * @param fileName
     */
    public getRomContentApiRomsIdContentFileNameGet(id: number, fileName: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRomContentApiRomsIdContentFileNameGet(id, fileName, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Romfile
     * @param id
     */
    public getRomfileApiRomsfilesIdGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RomFileSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRomfileApiRomsfilesIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Romfile
     * @param id
     */
    public getRomfileApiRomsfilesIdGet(id: number, _options?: PromiseConfigurationOptions): Promise<RomFileSchema> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRomfileApiRomsfilesIdGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Download rom file endpoint  Args:     request (Request): Fastapi Request object     id (int): RomFile internal id     file_name (str): What to name the file when downloading  Returns:     FileResponse: Returns the response with headers
     * Get Romfile Content
     * @param id
     * @param fileName
     */
    public getRomfileContentApiRomsfilesIdContentFileNameGetWithHttpInfo(id: number, fileName: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRomfileContentApiRomsfilesIdContentFileNameGetWithHttpInfo(id, fileName, observableOptions);
        return result.toPromise();
    }

    /**
     * Download rom file endpoint  Args:     request (Request): Fastapi Request object     id (int): RomFile internal id     file_name (str): What to name the file when downloading  Returns:     FileResponse: Returns the response with headers
     * Get Romfile Content
     * @param id
     * @param fileName
     */
    public getRomfileContentApiRomsfilesIdContentFileNameGet(id: number, fileName: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRomfileContentApiRomsfilesIdContentFileNameGet(id, fileName, observableOptions);
        return result.toPromise();
    }

    /**
     * Get roms endpoint  Args:     request: Fastapi Request object     platform_id (int, optional): Platform internal id. Defaults to None.     collection_id (int, optional): Collection internal id. Defaults to None.     virtual_collection_id (str, optional): Virtual collection internal id. Defaults to None.     search_term (str, optional): Search term to filter roms. Defaults to None.     order_by (str, optional): Field to order by. Defaults to \"name\".     order_dir (str, optional): Order direction. Defaults to \"asc\".     matched (bool, optional): Filter for matched or unmatched roms. Defaults to None.     favourite (bool, optional): Filter for favourite or non-favourite roms. Defaults to None.     duplicate (bool, optional): Filter for duplicate or non-duplicate roms. Defaults to None.     playable (bool, optional): Filter for playable or non-playable roms. Defaults to None.     unmatched_only (bool, optional): Filter only unmatched roms. Defaults to False. DEPRECATED: use `matched` instead.     matched_only (bool, optional): Filter only matched roms. Defaults to False. DEPRECATED: use `matched` instead.     favourites_only (bool, optional): Filter only favourite roms. Defaults to False. DEPRECATED: use `favourite` instead.     duplicates_only (bool, optional): Filter only duplicate roms. Defaults to False. DEPRECATED: use `duplicate` instead.     playables_only (bool, optional): Filter only playable roms by emulatorjs. Defaults to False. DEPRECATED: use `playable` instead.     ra_only (bool, optional): Filter only roms with Retroachievements compatibility.     group_by_meta_id (bool, optional): Group roms by igdb/moby/ssrf ID. Defaults to False.     selected_genre (str, optional): Filter by genre. Defaults to None.     selected_franchise (str, optional): Filter by franchise. Defaults to None.     selected_collection (str, optional): Filter by collection. Defaults to None.     selected_company (str, optional): Filter by company. Defaults to None.     selected_age_rating (str, optional): Filter by age rating. Defaults to None.     selected_status (str, optional): Filter by status. Defaults to None.     selected_region (str, optional): Filter by region tag. Defaults to None.     selected_language (str, optional): Filter by language tag. Defaults to None.  Returns:     list[RomSchema | SimpleRomSchema]: List of ROMs stored in the database
     * Get Roms
     * @param [platformId]
     * @param [collectionId]
     * @param [virtualCollectionId]
     * @param [searchTerm]
     * @param [orderBy]
     * @param [orderDir]
     * @param [matched]
     * @param [favourite]
     * @param [duplicate]
     * @param [playable]
     * @param [unmatchedOnly]
     * @param [matchedOnly]
     * @param [favouritesOnly]
     * @param [duplicatesOnly]
     * @param [playablesOnly]
     * @param [raOnly]
     * @param [groupByMetaId]
     * @param [selectedGenre]
     * @param [selectedFranchise]
     * @param [selectedCollection]
     * @param [selectedCompany]
     * @param [selectedAgeRating]
     * @param [selectedStatus]
     * @param [selectedRegion]
     * @param [selectedLanguage]
     * @param [limit] Page size limit
     * @param [offset] Page offset
     */
    public getRomsApiRomsGetWithHttpInfo(platformId?: number, collectionId?: number, virtualCollectionId?: string, searchTerm?: string, orderBy?: string, orderDir?: string, matched?: boolean, favourite?: boolean, duplicate?: boolean, playable?: boolean, unmatchedOnly?: boolean, matchedOnly?: boolean, favouritesOnly?: boolean, duplicatesOnly?: boolean, playablesOnly?: boolean, raOnly?: boolean, groupByMetaId?: boolean, selectedGenre?: string, selectedFranchise?: string, selectedCollection?: string, selectedCompany?: string, selectedAgeRating?: string, selectedStatus?: string, selectedRegion?: string, selectedLanguage?: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomLimitOffsetPageSimpleRomSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRomsApiRomsGetWithHttpInfo(platformId, collectionId, virtualCollectionId, searchTerm, orderBy, orderDir, matched, favourite, duplicate, playable, unmatchedOnly, matchedOnly, favouritesOnly, duplicatesOnly, playablesOnly, raOnly, groupByMetaId, selectedGenre, selectedFranchise, selectedCollection, selectedCompany, selectedAgeRating, selectedStatus, selectedRegion, selectedLanguage, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Get roms endpoint  Args:     request: Fastapi Request object     platform_id (int, optional): Platform internal id. Defaults to None.     collection_id (int, optional): Collection internal id. Defaults to None.     virtual_collection_id (str, optional): Virtual collection internal id. Defaults to None.     search_term (str, optional): Search term to filter roms. Defaults to None.     order_by (str, optional): Field to order by. Defaults to \"name\".     order_dir (str, optional): Order direction. Defaults to \"asc\".     matched (bool, optional): Filter for matched or unmatched roms. Defaults to None.     favourite (bool, optional): Filter for favourite or non-favourite roms. Defaults to None.     duplicate (bool, optional): Filter for duplicate or non-duplicate roms. Defaults to None.     playable (bool, optional): Filter for playable or non-playable roms. Defaults to None.     unmatched_only (bool, optional): Filter only unmatched roms. Defaults to False. DEPRECATED: use `matched` instead.     matched_only (bool, optional): Filter only matched roms. Defaults to False. DEPRECATED: use `matched` instead.     favourites_only (bool, optional): Filter only favourite roms. Defaults to False. DEPRECATED: use `favourite` instead.     duplicates_only (bool, optional): Filter only duplicate roms. Defaults to False. DEPRECATED: use `duplicate` instead.     playables_only (bool, optional): Filter only playable roms by emulatorjs. Defaults to False. DEPRECATED: use `playable` instead.     ra_only (bool, optional): Filter only roms with Retroachievements compatibility.     group_by_meta_id (bool, optional): Group roms by igdb/moby/ssrf ID. Defaults to False.     selected_genre (str, optional): Filter by genre. Defaults to None.     selected_franchise (str, optional): Filter by franchise. Defaults to None.     selected_collection (str, optional): Filter by collection. Defaults to None.     selected_company (str, optional): Filter by company. Defaults to None.     selected_age_rating (str, optional): Filter by age rating. Defaults to None.     selected_status (str, optional): Filter by status. Defaults to None.     selected_region (str, optional): Filter by region tag. Defaults to None.     selected_language (str, optional): Filter by language tag. Defaults to None.  Returns:     list[RomSchema | SimpleRomSchema]: List of ROMs stored in the database
     * Get Roms
     * @param [platformId]
     * @param [collectionId]
     * @param [virtualCollectionId]
     * @param [searchTerm]
     * @param [orderBy]
     * @param [orderDir]
     * @param [matched]
     * @param [favourite]
     * @param [duplicate]
     * @param [playable]
     * @param [unmatchedOnly]
     * @param [matchedOnly]
     * @param [favouritesOnly]
     * @param [duplicatesOnly]
     * @param [playablesOnly]
     * @param [raOnly]
     * @param [groupByMetaId]
     * @param [selectedGenre]
     * @param [selectedFranchise]
     * @param [selectedCollection]
     * @param [selectedCompany]
     * @param [selectedAgeRating]
     * @param [selectedStatus]
     * @param [selectedRegion]
     * @param [selectedLanguage]
     * @param [limit] Page size limit
     * @param [offset] Page offset
     */
    public getRomsApiRomsGet(platformId?: number, collectionId?: number, virtualCollectionId?: string, searchTerm?: string, orderBy?: string, orderDir?: string, matched?: boolean, favourite?: boolean, duplicate?: boolean, playable?: boolean, unmatchedOnly?: boolean, matchedOnly?: boolean, favouritesOnly?: boolean, duplicatesOnly?: boolean, playablesOnly?: boolean, raOnly?: boolean, groupByMetaId?: boolean, selectedGenre?: string, selectedFranchise?: string, selectedCollection?: string, selectedCompany?: string, selectedAgeRating?: string, selectedStatus?: string, selectedRegion?: string, selectedLanguage?: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<CustomLimitOffsetPageSimpleRomSchema> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRomsApiRomsGet(platformId, collectionId, virtualCollectionId, searchTerm, orderBy, orderDir, matched, favourite, duplicate, playable, unmatchedOnly, matchedOnly, favouritesOnly, duplicatesOnly, playablesOnly, raOnly, groupByMetaId, selectedGenre, selectedFranchise, selectedCollection, selectedCompany, selectedAgeRating, selectedStatus, selectedRegion, selectedLanguage, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Head rom content endpoint  Args:     request (Request): Fastapi Request object     id (int): Rom internal id     file_name (str): File name to download     file_ids (list[int]): List of file ids to download for multi-part roms  Returns:     FileResponse: Returns the response with headers
     * Head Rom Content
     * @param id
     * @param fileName
     */
    public headRomContentApiRomsIdContentFileNameHeadWithHttpInfo(id: number, fileName: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.headRomContentApiRomsIdContentFileNameHeadWithHttpInfo(id, fileName, observableOptions);
        return result.toPromise();
    }

    /**
     * Head rom content endpoint  Args:     request (Request): Fastapi Request object     id (int): Rom internal id     file_name (str): File name to download     file_ids (list[int]): List of file ids to download for multi-part roms  Returns:     FileResponse: Returns the response with headers
     * Head Rom Content
     * @param id
     * @param fileName
     */
    public headRomContentApiRomsIdContentFileNameHead(id: number, fileName: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.headRomContentApiRomsIdContentFileNameHead(id, fileName, observableOptions);
        return result.toPromise();
    }

    /**
     * Update rom endpoint  Args:     request (Request): Fastapi Request object     id (Rom): Rom internal id     artwork (UploadFile, optional): Custom artwork to set as cover. Defaults to File(None).     unmatch_metadata: Remove the metadata matches for this game. Defaults to False.  Raises:     HTTPException: Rom not found in database  Returns:     DetailedRomSchema: Rom stored in the database
     * Update Rom
     * @param id
     * @param [removeCover]
     * @param [unmatchMetadata]
     * @param [artwork]
     */
    public updateRomApiRomsIdPutWithHttpInfo(id: number, removeCover?: boolean, unmatchMetadata?: boolean, artwork?: HttpFile, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DetailedRomSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateRomApiRomsIdPutWithHttpInfo(id, removeCover, unmatchMetadata, artwork, observableOptions);
        return result.toPromise();
    }

    /**
     * Update rom endpoint  Args:     request (Request): Fastapi Request object     id (Rom): Rom internal id     artwork (UploadFile, optional): Custom artwork to set as cover. Defaults to File(None).     unmatch_metadata: Remove the metadata matches for this game. Defaults to False.  Raises:     HTTPException: Rom not found in database  Returns:     DetailedRomSchema: Rom stored in the database
     * Update Rom
     * @param id
     * @param [removeCover]
     * @param [unmatchMetadata]
     * @param [artwork]
     */
    public updateRomApiRomsIdPut(id: number, removeCover?: boolean, unmatchMetadata?: boolean, artwork?: HttpFile, _options?: PromiseConfigurationOptions): Promise<DetailedRomSchema> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateRomApiRomsIdPut(id, removeCover, unmatchMetadata, artwork, observableOptions);
        return result.toPromise();
    }

    /**
     * Update Rom User
     * @param id
     */
    public updateRomUserApiRomsIdPropsPutWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RomUserSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateRomUserApiRomsIdPropsPutWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Update Rom User
     * @param id
     */
    public updateRomUserApiRomsIdPropsPut(id: number, _options?: PromiseConfigurationOptions): Promise<RomUserSchema> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateRomUserApiRomsIdPropsPut(id, observableOptions);
        return result.toPromise();
    }


}



import { ObservableSavesApi } from './ObservableAPI';

import { SavesApiRequestFactory, SavesApiResponseProcessor} from "../apis/SavesApi";
export class PromiseSavesApi {
    private api: ObservableSavesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SavesApiRequestFactory,
        responseProcessor?: SavesApiResponseProcessor
    ) {
        this.api = new ObservableSavesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add Save
     * @param romId
     * @param [emulator]
     */
    public addSaveApiSavesPostWithHttpInfo(romId: number, emulator?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SaveSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addSaveApiSavesPostWithHttpInfo(romId, emulator, observableOptions);
        return result.toPromise();
    }

    /**
     * Add Save
     * @param romId
     * @param [emulator]
     */
    public addSaveApiSavesPost(romId: number, emulator?: string, _options?: PromiseConfigurationOptions): Promise<SaveSchema> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addSaveApiSavesPost(romId, emulator, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Saves
     */
    public deleteSavesApiSavesDeletePostWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number | null>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteSavesApiSavesDeletePostWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Saves
     */
    public deleteSavesApiSavesDeletePost(_options?: PromiseConfigurationOptions): Promise<Array<number | null>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteSavesApiSavesDeletePost(observableOptions);
        return result.toPromise();
    }

    /**
     * Get Save
     * @param id
     */
    public getSaveApiSavesIdGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SaveSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSaveApiSavesIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Save
     * @param id
     */
    public getSaveApiSavesIdGet(id: number, _options?: PromiseConfigurationOptions): Promise<SaveSchema> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSaveApiSavesIdGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Saves
     * @param [romId]
     * @param [platformId]
     */
    public getSavesApiSavesGetWithHttpInfo(romId?: number, platformId?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<SaveSchema>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSavesApiSavesGetWithHttpInfo(romId, platformId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Saves
     * @param [romId]
     * @param [platformId]
     */
    public getSavesApiSavesGet(romId?: number, platformId?: number, _options?: PromiseConfigurationOptions): Promise<Array<SaveSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSavesApiSavesGet(romId, platformId, observableOptions);
        return result.toPromise();
    }

    /**
     * Update Save
     * @param id
     */
    public updateSaveApiSavesIdPutWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SaveSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSaveApiSavesIdPutWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Update Save
     * @param id
     */
    public updateSaveApiSavesIdPut(id: number, _options?: PromiseConfigurationOptions): Promise<SaveSchema> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSaveApiSavesIdPut(id, observableOptions);
        return result.toPromise();
    }


}



import { ObservableScreenshotsApi } from './ObservableAPI';

import { ScreenshotsApiRequestFactory, ScreenshotsApiResponseProcessor} from "../apis/ScreenshotsApi";
export class PromiseScreenshotsApi {
    private api: ObservableScreenshotsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ScreenshotsApiRequestFactory,
        responseProcessor?: ScreenshotsApiResponseProcessor
    ) {
        this.api = new ObservableScreenshotsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add Screenshot
     * @param romId
     */
    public addScreenshotApiScreenshotsPostWithHttpInfo(romId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ScreenshotSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addScreenshotApiScreenshotsPostWithHttpInfo(romId, observableOptions);
        return result.toPromise();
    }

    /**
     * Add Screenshot
     * @param romId
     */
    public addScreenshotApiScreenshotsPost(romId: number, _options?: PromiseConfigurationOptions): Promise<ScreenshotSchema> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addScreenshotApiScreenshotsPost(romId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableSearchApi } from './ObservableAPI';

import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";
export class PromiseSearchApi {
    private api: ObservableSearchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchApiRequestFactory,
        responseProcessor?: SearchApiResponseProcessor
    ) {
        this.api = new ObservableSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Search Cover
     * @param [searchTerm]
     */
    public searchCoverApiSearchCoverGetWithHttpInfo(searchTerm?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<SearchCoverSchema>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchCoverApiSearchCoverGetWithHttpInfo(searchTerm, observableOptions);
        return result.toPromise();
    }

    /**
     * Search Cover
     * @param [searchTerm]
     */
    public searchCoverApiSearchCoverGet(searchTerm?: string, _options?: PromiseConfigurationOptions): Promise<Array<SearchCoverSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchCoverApiSearchCoverGet(searchTerm, observableOptions);
        return result.toPromise();
    }

    /**
     * Search for rom in metadata providers  Args:     request (Request): FastAPI request     rom_id (int): Rom ID     source (str): Source of the rom     search_term (str, optional): Search term. Defaults to None.     search_by (str, optional): Search by name or ID. Defaults to \"name\".     search_extended (bool, optional): Search extended info. Defaults to False.  Returns:     list[SearchRomSchema]: List of matched roms
     * Search Rom
     * @param romId
     * @param [searchTerm]
     * @param [searchBy]
     */
    public searchRomApiSearchRomsGetWithHttpInfo(romId: number, searchTerm?: string, searchBy?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<SearchRomSchema>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchRomApiSearchRomsGetWithHttpInfo(romId, searchTerm, searchBy, observableOptions);
        return result.toPromise();
    }

    /**
     * Search for rom in metadata providers  Args:     request (Request): FastAPI request     rom_id (int): Rom ID     source (str): Source of the rom     search_term (str, optional): Search term. Defaults to None.     search_by (str, optional): Search by name or ID. Defaults to \"name\".     search_extended (bool, optional): Search extended info. Defaults to False.  Returns:     list[SearchRomSchema]: List of matched roms
     * Search Rom
     * @param romId
     * @param [searchTerm]
     * @param [searchBy]
     */
    public searchRomApiSearchRomsGet(romId: number, searchTerm?: string, searchBy?: string, _options?: PromiseConfigurationOptions): Promise<Array<SearchRomSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchRomApiSearchRomsGet(romId, searchTerm, searchBy, observableOptions);
        return result.toPromise();
    }


}



import { ObservableStatesApi } from './ObservableAPI';

import { StatesApiRequestFactory, StatesApiResponseProcessor} from "../apis/StatesApi";
export class PromiseStatesApi {
    private api: ObservableStatesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StatesApiRequestFactory,
        responseProcessor?: StatesApiResponseProcessor
    ) {
        this.api = new ObservableStatesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add State
     * @param romId
     * @param [emulator]
     */
    public addStateApiStatesPostWithHttpInfo(romId: number, emulator?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<StateSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addStateApiStatesPostWithHttpInfo(romId, emulator, observableOptions);
        return result.toPromise();
    }

    /**
     * Add State
     * @param romId
     * @param [emulator]
     */
    public addStateApiStatesPost(romId: number, emulator?: string, _options?: PromiseConfigurationOptions): Promise<StateSchema> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addStateApiStatesPost(romId, emulator, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete States
     */
    public deleteStatesApiStatesDeletePostWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number | null>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteStatesApiStatesDeletePostWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Delete States
     */
    public deleteStatesApiStatesDeletePost(_options?: PromiseConfigurationOptions): Promise<Array<number | null>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteStatesApiStatesDeletePost(observableOptions);
        return result.toPromise();
    }

    /**
     * Get State
     * @param id
     */
    public getStateApiStatesIdGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<StateSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getStateApiStatesIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get State
     * @param id
     */
    public getStateApiStatesIdGet(id: number, _options?: PromiseConfigurationOptions): Promise<StateSchema> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getStateApiStatesIdGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get States
     * @param [romId]
     * @param [platformId]
     */
    public getStatesApiStatesGetWithHttpInfo(romId?: number, platformId?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<StateSchema>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getStatesApiStatesGetWithHttpInfo(romId, platformId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get States
     * @param [romId]
     * @param [platformId]
     */
    public getStatesApiStatesGet(romId?: number, platformId?: number, _options?: PromiseConfigurationOptions): Promise<Array<StateSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getStatesApiStatesGet(romId, platformId, observableOptions);
        return result.toPromise();
    }

    /**
     * Update State
     * @param id
     */
    public updateStateApiStatesIdPutWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<StateSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateStateApiStatesIdPutWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Update State
     * @param id
     */
    public updateStateApiStatesIdPut(id: number, _options?: PromiseConfigurationOptions): Promise<StateSchema> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateStateApiStatesIdPut(id, observableOptions);
        return result.toPromise();
    }


}



import { ObservableStatsApi } from './ObservableAPI';

import { StatsApiRequestFactory, StatsApiResponseProcessor} from "../apis/StatsApi";
export class PromiseStatsApi {
    private api: ObservableStatsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StatsApiRequestFactory,
        responseProcessor?: StatsApiResponseProcessor
    ) {
        this.api = new ObservableStatsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Endpoint to return the current RomM stats  Returns:     dict: Dictionary with all the stats
     * Stats
     */
    public statsApiStatsGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<StatsReturn>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.statsApiStatsGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Endpoint to return the current RomM stats  Returns:     dict: Dictionary with all the stats
     * Stats
     */
    public statsApiStatsGet(_options?: PromiseConfigurationOptions): Promise<StatsReturn> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.statsApiStatsGet(observableOptions);
        return result.toPromise();
    }


}



import { ObservableSystemApi } from './ObservableAPI';

import { SystemApiRequestFactory, SystemApiResponseProcessor} from "../apis/SystemApi";
export class PromiseSystemApi {
    private api: ObservableSystemApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SystemApiRequestFactory,
        responseProcessor?: SystemApiResponseProcessor
    ) {
        this.api = new ObservableSystemApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Endpoint to set the CSRF token in cache and return all the basic RomM config  Returns:     HeartbeatReturn: TypedDict structure with all the defined values in the HeartbeatReturn class.
     * Heartbeat
     */
    public heartbeatApiHeartbeatGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<HeartbeatResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.heartbeatApiHeartbeatGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Endpoint to set the CSRF token in cache and return all the basic RomM config  Returns:     HeartbeatReturn: TypedDict structure with all the defined values in the HeartbeatReturn class.
     * Heartbeat
     */
    public heartbeatApiHeartbeatGet(_options?: PromiseConfigurationOptions): Promise<HeartbeatResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.heartbeatApiHeartbeatGet(observableOptions);
        return result.toPromise();
    }


}



import { ObservableTasksApi } from './ObservableAPI';

import { TasksApiRequestFactory, TasksApiResponseProcessor} from "../apis/TasksApi";
export class PromiseTasksApi {
    private api: ObservableTasksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TasksApiRequestFactory,
        responseProcessor?: TasksApiResponseProcessor
    ) {
        this.api = new ObservableTasksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Run all tasks endpoint  Args:     request (Request): Fastapi Request object Returns:     RunTasksResponse: Standard message response
     * Run Task
     * @param task
     */
    public runTaskApiTasksTaskRunPostWithHttpInfo(task: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.runTaskApiTasksTaskRunPostWithHttpInfo(task, observableOptions);
        return result.toPromise();
    }

    /**
     * Run all tasks endpoint  Args:     request (Request): Fastapi Request object Returns:     RunTasksResponse: Standard message response
     * Run Task
     * @param task
     */
    public runTaskApiTasksTaskRunPost(task: string, _options?: PromiseConfigurationOptions): Promise<MessageResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.runTaskApiTasksTaskRunPost(task, observableOptions);
        return result.toPromise();
    }

    /**
     * Run all tasks endpoint  Args:     request (Request): Fastapi Request object Returns:     RunTasksResponse: Standard message response
     * Run Tasks
     */
    public runTasksApiTasksRunPostWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.runTasksApiTasksRunPostWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Run all tasks endpoint  Args:     request (Request): Fastapi Request object Returns:     RunTasksResponse: Standard message response
     * Run Tasks
     */
    public runTasksApiTasksRunPost(_options?: PromiseConfigurationOptions): Promise<MessageResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.runTasksApiTasksRunPost(observableOptions);
        return result.toPromise();
    }


}



import { ObservableUsersApi } from './ObservableAPI';

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class PromiseUsersApi {
    private api: ObservableUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create user endpoint  Args:     request (Request): Fastapi Requests object     username (str): User username     password (str): User password     email (str): User email     role (str): RomM Role object represented as string  Returns:     UserSchema: Newly created user
     * Add User
     * @param username
     * @param password
     * @param email
     * @param role
     */
    public addUserApiUsersPostWithHttpInfo(username: string, password: string, email: string, role: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addUserApiUsersPostWithHttpInfo(username, password, email, role, observableOptions);
        return result.toPromise();
    }

    /**
     * Create user endpoint  Args:     request (Request): Fastapi Requests object     username (str): User username     password (str): User password     email (str): User email     role (str): RomM Role object represented as string  Returns:     UserSchema: Newly created user
     * Add User
     * @param username
     * @param password
     * @param email
     * @param role
     */
    public addUserApiUsersPost(username: string, password: string, email: string, role: string, _options?: PromiseConfigurationOptions): Promise<UserSchema> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addUserApiUsersPost(username, password, email, role, observableOptions);
        return result.toPromise();
    }

    /**
     * Create an invite link for a user.  Args:     request (Request): FastAPI Request object     role (str): The role of the user  Returns:     InviteLinkSchema: Invite link
     * Create Invite Link
     * @param role
     */
    public createInviteLinkApiUsersInviteLinkPostWithHttpInfo(role: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<InviteLinkSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createInviteLinkApiUsersInviteLinkPostWithHttpInfo(role, observableOptions);
        return result.toPromise();
    }

    /**
     * Create an invite link for a user.  Args:     request (Request): FastAPI Request object     role (str): The role of the user  Returns:     InviteLinkSchema: Invite link
     * Create Invite Link
     * @param role
     */
    public createInviteLinkApiUsersInviteLinkPost(role: string, _options?: PromiseConfigurationOptions): Promise<InviteLinkSchema> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createInviteLinkApiUsersInviteLinkPost(role, observableOptions);
        return result.toPromise();
    }

    /**
     * Create user endpoint with invite link  Args:     username (str): User username     email (str): User email     password (str): User password     token (str): Invite link token  Returns:     UserSchema: Newly created user
     * Create User From Invite
     * @param bodyCreateUserFromInviteApiUsersRegisterPost
     */
    public createUserFromInviteApiUsersRegisterPostWithHttpInfo(bodyCreateUserFromInviteApiUsersRegisterPost: BodyCreateUserFromInviteApiUsersRegisterPost, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createUserFromInviteApiUsersRegisterPostWithHttpInfo(bodyCreateUserFromInviteApiUsersRegisterPost, observableOptions);
        return result.toPromise();
    }

    /**
     * Create user endpoint with invite link  Args:     username (str): User username     email (str): User email     password (str): User password     token (str): Invite link token  Returns:     UserSchema: Newly created user
     * Create User From Invite
     * @param bodyCreateUserFromInviteApiUsersRegisterPost
     */
    public createUserFromInviteApiUsersRegisterPost(bodyCreateUserFromInviteApiUsersRegisterPost: BodyCreateUserFromInviteApiUsersRegisterPost, _options?: PromiseConfigurationOptions): Promise<UserSchema> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createUserFromInviteApiUsersRegisterPost(bodyCreateUserFromInviteApiUsersRegisterPost, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete user endpoint  Args:     request (Request): Fastapi Request object     user_id (int): User internal id  Raises:     HTTPException: User is not found in database     HTTPException: User deleting itself     HTTPException: User is the last admin user  Returns:     MessageResponse: Standard message response
     * Delete User
     * @param id
     */
    public deleteUserApiUsersIdDeleteWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteUserApiUsersIdDeleteWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete user endpoint  Args:     request (Request): Fastapi Request object     user_id (int): User internal id  Raises:     HTTPException: User is not found in database     HTTPException: User deleting itself     HTTPException: User is the last admin user  Returns:     MessageResponse: Standard message response
     * Delete User
     * @param id
     */
    public deleteUserApiUsersIdDelete(id: number, _options?: PromiseConfigurationOptions): Promise<MessageResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteUserApiUsersIdDelete(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get current user endpoint  Args:     request (Request): Fastapi Request object  Returns:     UserSchema | None: Current user
     * Get Current User
     */
    public getCurrentUserApiUsersMeGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<UserSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCurrentUserApiUsersMeGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Get current user endpoint  Args:     request (Request): Fastapi Request object  Returns:     UserSchema | None: Current user
     * Get Current User
     */
    public getCurrentUserApiUsersMeGet(_options?: PromiseConfigurationOptions): Promise<UserSchema> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCurrentUserApiUsersMeGet(observableOptions);
        return result.toPromise();
    }

    /**
     * Get user endpoint  Args:     request (Request): Fastapi Request object  Returns:     UserSchem: User stored in the RomM\'s database
     * Get User
     * @param id
     */
    public getUserApiUsersIdGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getUserApiUsersIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get user endpoint  Args:     request (Request): Fastapi Request object  Returns:     UserSchem: User stored in the RomM\'s database
     * Get User
     * @param id
     */
    public getUserApiUsersIdGet(id: number, _options?: PromiseConfigurationOptions): Promise<UserSchema> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getUserApiUsersIdGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get all users endpoint  Args:     request (Request): Fastapi Request object  Returns:     list[UserSchema]: All users stored in the RomM\'s database
     * Get Users
     */
    public getUsersApiUsersGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<UserSchema>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getUsersApiUsersGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Get all users endpoint  Args:     request (Request): Fastapi Request object  Returns:     list[UserSchema]: All users stored in the RomM\'s database
     * Get Users
     */
    public getUsersApiUsersGet(_options?: PromiseConfigurationOptions): Promise<Array<UserSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getUsersApiUsersGet(observableOptions);
        return result.toPromise();
    }

    /**
     * Refresh Retro Achievements
     * @param id
     */
    public refreshRetroAchievementsApiUsersIdRaRefreshPostWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MessageResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.refreshRetroAchievementsApiUsersIdRaRefreshPostWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Refresh Retro Achievements
     * @param id
     */
    public refreshRetroAchievementsApiUsersIdRaRefreshPost(id: number, _options?: PromiseConfigurationOptions): Promise<MessageResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.refreshRetroAchievementsApiUsersIdRaRefreshPost(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Update user endpoint  Args:     request (Request): Fastapi Requests object     user_id (int): User internal id     form_data (Annotated[UserUpdateForm, Depends): Form Data with user updated info  Raises:     HTTPException: User is not found in database     HTTPException: Username already in use by another user  Returns:     UserSchema: Updated user info
     * Update User
     * @param id
     * @param [username]
     * @param [password]
     * @param [email]
     * @param [role]
     * @param [enabled]
     * @param [raUsername]
     * @param [avatar]
     */
    public updateUserApiUsersIdPutWithHttpInfo(id: number, username?: string, password?: string, email?: string, role?: string, enabled?: boolean, raUsername?: string, avatar?: HttpFile, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateUserApiUsersIdPutWithHttpInfo(id, username, password, email, role, enabled, raUsername, avatar, observableOptions);
        return result.toPromise();
    }

    /**
     * Update user endpoint  Args:     request (Request): Fastapi Requests object     user_id (int): User internal id     form_data (Annotated[UserUpdateForm, Depends): Form Data with user updated info  Raises:     HTTPException: User is not found in database     HTTPException: Username already in use by another user  Returns:     UserSchema: Updated user info
     * Update User
     * @param id
     * @param [username]
     * @param [password]
     * @param [email]
     * @param [role]
     * @param [enabled]
     * @param [raUsername]
     * @param [avatar]
     */
    public updateUserApiUsersIdPut(id: number, username?: string, password?: string, email?: string, role?: string, enabled?: boolean, raUsername?: string, avatar?: HttpFile, _options?: PromiseConfigurationOptions): Promise<UserSchema> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateUserApiUsersIdPut(id, username, password, email, role, enabled, raUsername, avatar, observableOptions);
        return result.toPromise();
    }


}



