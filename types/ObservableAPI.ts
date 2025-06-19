import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.js';
import { Configuration, ConfigurationOptions, mergeConfiguration } from '../configuration.js'
import type { Middleware } from '../middleware.js';
import { Observable, of, from } from '../rxjsStub.js';
import {mergeMap, map} from  '../rxjsStub.js';
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

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi.js";
export class ObservableAuthApi {
    private requestFactory: AuthApiRequestFactory;
    private responseProcessor: AuthApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthApiResponseProcessor();
    }

    /**
     * OIDC callback endpoint  Args:     request (Request): Fastapi Request object  Raises:     OIDCDisabledException: OAuth is disabled     OIDCNotConfiguredException: OAuth not configured     AuthCredentialsException: Invalid credentials     UserDisabledException: Auth is disabled  Returns:     RedirectResponse: Redirect to home page
     * Auth Openid
     */
    public authOpenidApiOauthOpenidGetWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authOpenidApiOauthOpenidGet(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authOpenidApiOauthOpenidGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * OIDC callback endpoint  Args:     request (Request): Fastapi Request object  Raises:     OIDCDisabledException: OAuth is disabled     OIDCNotConfiguredException: OAuth not configured     AuthCredentialsException: Invalid credentials     UserDisabledException: Auth is disabled  Returns:     RedirectResponse: Redirect to home page
     * Auth Openid
     */
    public authOpenidApiOauthOpenidGet(_options?: ConfigurationOptions): Observable<any> {
        return this.authOpenidApiOauthOpenidGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Session login endpoint  Args:     request (Request): Fastapi Request object     credentials: Defaults to Depends(HTTPBasic()).  Raises:     CredentialsException: Invalid credentials     UserDisabledException: Auth is disabled  Returns:     MessageResponse: Standard message response
     * Login
     */
    public loginApiLoginPostWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<MessageResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.loginApiLoginPost(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.loginApiLoginPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Session login endpoint  Args:     request (Request): Fastapi Request object     credentials: Defaults to Depends(HTTPBasic()).  Raises:     CredentialsException: Invalid credentials     UserDisabledException: Auth is disabled  Returns:     MessageResponse: Standard message response
     * Login
     */
    public loginApiLoginPost(_options?: ConfigurationOptions): Observable<MessageResponse> {
        return this.loginApiLoginPostWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<MessageResponse>) => apiResponse.data));
    }

    /**
     * OIDC login endpoint  Args:     request (Request): Fastapi Request object  Raises:     OIDCDisabledException: OAuth is disabled     OIDCNotConfiguredException: OAuth not configured  Returns:     RedirectResponse: Redirect to OIDC provider
     * Login Via Openid
     */
    public loginViaOpenidApiLoginOpenidGetWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.loginViaOpenidApiLoginOpenidGet(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.loginViaOpenidApiLoginOpenidGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * OIDC login endpoint  Args:     request (Request): Fastapi Request object  Raises:     OIDCDisabledException: OAuth is disabled     OIDCNotConfiguredException: OAuth not configured  Returns:     RedirectResponse: Redirect to OIDC provider
     * Login Via Openid
     */
    public loginViaOpenidApiLoginOpenidGet(_options?: ConfigurationOptions): Observable<any> {
        return this.loginViaOpenidApiLoginOpenidGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Session logout endpoint  Args:     request (Request): Fastapi Request object  Returns:     MessageResponse: Standard message response
     * Logout
     */
    public logoutApiLogoutPostWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<MessageResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.logoutApiLogoutPost(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.logoutApiLogoutPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Session logout endpoint  Args:     request (Request): Fastapi Request object  Returns:     MessageResponse: Standard message response
     * Logout
     */
    public logoutApiLogoutPost(_options?: ConfigurationOptions): Observable<MessageResponse> {
        return this.logoutApiLogoutPostWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<MessageResponse>) => apiResponse.data));
    }

    /**
     * \"Request a password reset link for the user.  Args:     username (str): Username of the user requesting the reset Returns:     MessageResponse: Confirmation message
     * Request Password Reset
     * @param bodyRequestPasswordResetApiForgotPasswordPost
     */
    public requestPasswordResetApiForgotPasswordPostWithHttpInfo(bodyRequestPasswordResetApiForgotPasswordPost: BodyRequestPasswordResetApiForgotPasswordPost, _options?: ConfigurationOptions): Observable<HttpInfo<MessageResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.requestPasswordResetApiForgotPasswordPost(bodyRequestPasswordResetApiForgotPasswordPost, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.requestPasswordResetApiForgotPasswordPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * \"Request a password reset link for the user.  Args:     username (str): Username of the user requesting the reset Returns:     MessageResponse: Confirmation message
     * Request Password Reset
     * @param bodyRequestPasswordResetApiForgotPasswordPost
     */
    public requestPasswordResetApiForgotPasswordPost(bodyRequestPasswordResetApiForgotPasswordPost: BodyRequestPasswordResetApiForgotPasswordPost, _options?: ConfigurationOptions): Observable<MessageResponse> {
        return this.requestPasswordResetApiForgotPasswordPostWithHttpInfo(bodyRequestPasswordResetApiForgotPasswordPost, _options).pipe(map((apiResponse: HttpInfo<MessageResponse>) => apiResponse.data));
    }

    /**
     * Reset password using the token.  Args:     token (str): Reset token from the URL     new_password (str): New user password  Returns:     MessageResponse: Confirmation message
     * Reset Password
     * @param bodyResetPasswordApiResetPasswordPost
     */
    public resetPasswordApiResetPasswordPostWithHttpInfo(bodyResetPasswordApiResetPasswordPost: BodyResetPasswordApiResetPasswordPost, _options?: ConfigurationOptions): Observable<HttpInfo<MessageResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.resetPasswordApiResetPasswordPost(bodyResetPasswordApiResetPasswordPost, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.resetPasswordApiResetPasswordPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Reset password using the token.  Args:     token (str): Reset token from the URL     new_password (str): New user password  Returns:     MessageResponse: Confirmation message
     * Reset Password
     * @param bodyResetPasswordApiResetPasswordPost
     */
    public resetPasswordApiResetPasswordPost(bodyResetPasswordApiResetPasswordPost: BodyResetPasswordApiResetPasswordPost, _options?: ConfigurationOptions): Observable<MessageResponse> {
        return this.resetPasswordApiResetPasswordPostWithHttpInfo(bodyResetPasswordApiResetPasswordPost, _options).pipe(map((apiResponse: HttpInfo<MessageResponse>) => apiResponse.data));
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
    public tokenApiTokenPostWithHttpInfo(grantType?: string, scope?: string, username?: string, password?: string, clientId?: string, clientSecret?: string, refreshToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<TokenResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.tokenApiTokenPost(grantType, scope, username, password, clientId, clientSecret, refreshToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tokenApiTokenPostWithHttpInfo(rsp)));
            }));
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
    public tokenApiTokenPost(grantType?: string, scope?: string, username?: string, password?: string, clientId?: string, clientSecret?: string, refreshToken?: string, _options?: ConfigurationOptions): Observable<TokenResponse> {
        return this.tokenApiTokenPostWithHttpInfo(grantType, scope, username, password, clientId, clientSecret, refreshToken, _options).pipe(map((apiResponse: HttpInfo<TokenResponse>) => apiResponse.data));
    }

}

import { CollectionsApiRequestFactory, CollectionsApiResponseProcessor} from "../apis/CollectionsApi.js";
export class ObservableCollectionsApi {
    private requestFactory: CollectionsApiRequestFactory;
    private responseProcessor: CollectionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CollectionsApiRequestFactory,
        responseProcessor?: CollectionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CollectionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CollectionsApiResponseProcessor();
    }

    /**
     * Create collection endpoint  Args:     request (Request): Fastapi Request object  Returns:     CollectionSchema: Just created collection
     * Add Collection
     * @param [artwork]
     */
    public addCollectionApiCollectionsPostWithHttpInfo(artwork?: HttpFile, _options?: ConfigurationOptions): Observable<HttpInfo<CollectionSchema>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addCollectionApiCollectionsPost(artwork, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addCollectionApiCollectionsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create collection endpoint  Args:     request (Request): Fastapi Request object  Returns:     CollectionSchema: Just created collection
     * Add Collection
     * @param [artwork]
     */
    public addCollectionApiCollectionsPost(artwork?: HttpFile, _options?: ConfigurationOptions): Observable<CollectionSchema> {
        return this.addCollectionApiCollectionsPostWithHttpInfo(artwork, _options).pipe(map((apiResponse: HttpInfo<CollectionSchema>) => apiResponse.data));
    }

    /**
     * Delete collections endpoint  Args:     request (Request): Fastapi Request object     {         \"collections\": List of rom\'s ids to delete     }  Raises:     HTTPException: Collection not found  Returns:     MessageResponse: Standard message response
     * Delete Collections
     * @param id
     */
    public deleteCollectionsApiCollectionsIdDeleteWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<MessageResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteCollectionsApiCollectionsIdDelete(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCollectionsApiCollectionsIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete collections endpoint  Args:     request (Request): Fastapi Request object     {         \"collections\": List of rom\'s ids to delete     }  Raises:     HTTPException: Collection not found  Returns:     MessageResponse: Standard message response
     * Delete Collections
     * @param id
     */
    public deleteCollectionsApiCollectionsIdDelete(id: number, _options?: ConfigurationOptions): Observable<MessageResponse> {
        return this.deleteCollectionsApiCollectionsIdDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<MessageResponse>) => apiResponse.data));
    }

    /**
     * Get collections endpoint  Args:     request (Request): Fastapi Request object     id (int, optional): Collection id. Defaults to None.  Returns:     CollectionSchema: Collection
     * Get Collection
     * @param id
     */
    public getCollectionApiCollectionsIdGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<CollectionSchema>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCollectionApiCollectionsIdGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCollectionApiCollectionsIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get collections endpoint  Args:     request (Request): Fastapi Request object     id (int, optional): Collection id. Defaults to None.  Returns:     CollectionSchema: Collection
     * Get Collection
     * @param id
     */
    public getCollectionApiCollectionsIdGet(id: number, _options?: ConfigurationOptions): Observable<CollectionSchema> {
        return this.getCollectionApiCollectionsIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<CollectionSchema>) => apiResponse.data));
    }

    /**
     * Get collections endpoint  Args:     request (Request): Fastapi Request object     id (int, optional): Collection id. Defaults to None.  Returns:     list[CollectionSchema]: List of collections
     * Get Collections
     */
    public getCollectionsApiCollectionsGetWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<Array<CollectionSchema>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCollectionsApiCollectionsGet(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCollectionsApiCollectionsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get collections endpoint  Args:     request (Request): Fastapi Request object     id (int, optional): Collection id. Defaults to None.  Returns:     list[CollectionSchema]: List of collections
     * Get Collections
     */
    public getCollectionsApiCollectionsGet(_options?: ConfigurationOptions): Observable<Array<CollectionSchema>> {
        return this.getCollectionsApiCollectionsGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<CollectionSchema>>) => apiResponse.data));
    }

    /**
     * Get virtual collections endpoint  Args:     request (Request): Fastapi Request object     id (str): Virtual collection id  Returns:     VirtualCollectionSchema: Virtual collection
     * Get Virtual Collection
     * @param id
     */
    public getVirtualCollectionApiCollectionsVirtualIdGetWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<VirtualCollectionSchema>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getVirtualCollectionApiCollectionsVirtualIdGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVirtualCollectionApiCollectionsVirtualIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get virtual collections endpoint  Args:     request (Request): Fastapi Request object     id (str): Virtual collection id  Returns:     VirtualCollectionSchema: Virtual collection
     * Get Virtual Collection
     * @param id
     */
    public getVirtualCollectionApiCollectionsVirtualIdGet(id: string, _options?: ConfigurationOptions): Observable<VirtualCollectionSchema> {
        return this.getVirtualCollectionApiCollectionsVirtualIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<VirtualCollectionSchema>) => apiResponse.data));
    }

    /**
     * Get virtual collections endpoint  Args:     request (Request): Fastapi Request object  Returns:     list[VirtualCollectionSchema]: List of virtual collections
     * Get Virtual Collections
     * @param type
     * @param [limit]
     */
    public getVirtualCollectionsApiCollectionsVirtualGetWithHttpInfo(type: string, limit?: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<VirtualCollectionSchema>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getVirtualCollectionsApiCollectionsVirtualGet(type, limit, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVirtualCollectionsApiCollectionsVirtualGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get virtual collections endpoint  Args:     request (Request): Fastapi Request object  Returns:     list[VirtualCollectionSchema]: List of virtual collections
     * Get Virtual Collections
     * @param type
     * @param [limit]
     */
    public getVirtualCollectionsApiCollectionsVirtualGet(type: string, limit?: number, _options?: ConfigurationOptions): Observable<Array<VirtualCollectionSchema>> {
        return this.getVirtualCollectionsApiCollectionsVirtualGetWithHttpInfo(type, limit, _options).pipe(map((apiResponse: HttpInfo<Array<VirtualCollectionSchema>>) => apiResponse.data));
    }

    /**
     * Update collection endpoint  Args:     request (Request): Fastapi Request object  Returns:     MessageResponse: Standard message response
     * Update Collection
     * @param id
     * @param [removeCover]
     * @param [isPublic]
     * @param [artwork]
     */
    public updateCollectionApiCollectionsIdPutWithHttpInfo(id: number, removeCover?: boolean, isPublic?: boolean, artwork?: HttpFile, _options?: ConfigurationOptions): Observable<HttpInfo<CollectionSchema>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateCollectionApiCollectionsIdPut(id, removeCover, isPublic, artwork, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCollectionApiCollectionsIdPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update collection endpoint  Args:     request (Request): Fastapi Request object  Returns:     MessageResponse: Standard message response
     * Update Collection
     * @param id
     * @param [removeCover]
     * @param [isPublic]
     * @param [artwork]
     */
    public updateCollectionApiCollectionsIdPut(id: number, removeCover?: boolean, isPublic?: boolean, artwork?: HttpFile, _options?: ConfigurationOptions): Observable<CollectionSchema> {
        return this.updateCollectionApiCollectionsIdPutWithHttpInfo(id, removeCover, isPublic, artwork, _options).pipe(map((apiResponse: HttpInfo<CollectionSchema>) => apiResponse.data));
    }

}

import { ConfigApiRequestFactory, ConfigApiResponseProcessor} from "../apis/ConfigApi.js";
export class ObservableConfigApi {
    private requestFactory: ConfigApiRequestFactory;
    private responseProcessor: ConfigApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ConfigApiRequestFactory,
        responseProcessor?: ConfigApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ConfigApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ConfigApiResponseProcessor();
    }

    /**
     * Add platform exclusion to the configuration
     * Add Exclusion
     */
    public addExclusionApiConfigExcludePostWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<MessageResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addExclusionApiConfigExcludePost(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addExclusionApiConfigExcludePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add platform exclusion to the configuration
     * Add Exclusion
     */
    public addExclusionApiConfigExcludePost(_options?: ConfigurationOptions): Observable<MessageResponse> {
        return this.addExclusionApiConfigExcludePostWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<MessageResponse>) => apiResponse.data));
    }

    /**
     * Add platform binding to the configuration
     * Add Platform Binding
     */
    public addPlatformBindingApiConfigSystemPlatformsPostWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<MessageResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addPlatformBindingApiConfigSystemPlatformsPost(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addPlatformBindingApiConfigSystemPlatformsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add platform binding to the configuration
     * Add Platform Binding
     */
    public addPlatformBindingApiConfigSystemPlatformsPost(_options?: ConfigurationOptions): Observable<MessageResponse> {
        return this.addPlatformBindingApiConfigSystemPlatformsPostWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<MessageResponse>) => apiResponse.data));
    }

    /**
     * Add platform version to the configuration
     * Add Platform Version
     */
    public addPlatformVersionApiConfigSystemVersionsPostWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<MessageResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addPlatformVersionApiConfigSystemVersionsPost(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addPlatformVersionApiConfigSystemVersionsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add platform version to the configuration
     * Add Platform Version
     */
    public addPlatformVersionApiConfigSystemVersionsPost(_options?: ConfigurationOptions): Observable<MessageResponse> {
        return this.addPlatformVersionApiConfigSystemVersionsPostWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<MessageResponse>) => apiResponse.data));
    }

    /**
     * Delete platform binding from the configuration
     * Delete Exclusion
     * @param exclusionType
     * @param exclusionValue
     */
    public deleteExclusionApiConfigExcludeExclusionTypeExclusionValueDeleteWithHttpInfo(exclusionType: string, exclusionValue: string, _options?: ConfigurationOptions): Observable<HttpInfo<MessageResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteExclusionApiConfigExcludeExclusionTypeExclusionValueDelete(exclusionType, exclusionValue, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteExclusionApiConfigExcludeExclusionTypeExclusionValueDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete platform binding from the configuration
     * Delete Exclusion
     * @param exclusionType
     * @param exclusionValue
     */
    public deleteExclusionApiConfigExcludeExclusionTypeExclusionValueDelete(exclusionType: string, exclusionValue: string, _options?: ConfigurationOptions): Observable<MessageResponse> {
        return this.deleteExclusionApiConfigExcludeExclusionTypeExclusionValueDeleteWithHttpInfo(exclusionType, exclusionValue, _options).pipe(map((apiResponse: HttpInfo<MessageResponse>) => apiResponse.data));
    }

    /**
     * Delete platform binding from the configuration
     * Delete Platform Binding
     * @param fsSlug
     */
    public deletePlatformBindingApiConfigSystemPlatformsFsSlugDeleteWithHttpInfo(fsSlug: string, _options?: ConfigurationOptions): Observable<HttpInfo<MessageResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deletePlatformBindingApiConfigSystemPlatformsFsSlugDelete(fsSlug, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePlatformBindingApiConfigSystemPlatformsFsSlugDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete platform binding from the configuration
     * Delete Platform Binding
     * @param fsSlug
     */
    public deletePlatformBindingApiConfigSystemPlatformsFsSlugDelete(fsSlug: string, _options?: ConfigurationOptions): Observable<MessageResponse> {
        return this.deletePlatformBindingApiConfigSystemPlatformsFsSlugDeleteWithHttpInfo(fsSlug, _options).pipe(map((apiResponse: HttpInfo<MessageResponse>) => apiResponse.data));
    }

    /**
     * Delete platform version from the configuration
     * Delete Platform Version
     * @param fsSlug
     */
    public deletePlatformVersionApiConfigSystemVersionsFsSlugDeleteWithHttpInfo(fsSlug: string, _options?: ConfigurationOptions): Observable<HttpInfo<MessageResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deletePlatformVersionApiConfigSystemVersionsFsSlugDelete(fsSlug, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePlatformVersionApiConfigSystemVersionsFsSlugDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete platform version from the configuration
     * Delete Platform Version
     * @param fsSlug
     */
    public deletePlatformVersionApiConfigSystemVersionsFsSlugDelete(fsSlug: string, _options?: ConfigurationOptions): Observable<MessageResponse> {
        return this.deletePlatformVersionApiConfigSystemVersionsFsSlugDeleteWithHttpInfo(fsSlug, _options).pipe(map((apiResponse: HttpInfo<MessageResponse>) => apiResponse.data));
    }

    /**
     * Get config endpoint  Returns:     ConfigResponse: RomM\'s configuration
     * Get Config
     */
    public getConfigApiConfigGetWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<ConfigResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getConfigApiConfigGet(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConfigApiConfigGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get config endpoint  Returns:     ConfigResponse: RomM\'s configuration
     * Get Config
     */
    public getConfigApiConfigGet(_options?: ConfigurationOptions): Observable<ConfigResponse> {
        return this.getConfigApiConfigGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ConfigResponse>) => apiResponse.data));
    }

}

import { FeedsApiRequestFactory, FeedsApiResponseProcessor} from "../apis/FeedsApi.js";
export class ObservableFeedsApi {
    private requestFactory: FeedsApiRequestFactory;
    private responseProcessor: FeedsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FeedsApiRequestFactory,
        responseProcessor?: FeedsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FeedsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FeedsApiResponseProcessor();
    }

    /**
     * Get webrcade feed endpoint https://docs.webrcade.com/feeds/format/  Args:     request (Request): Fastapi Request object  Returns:     WebrcadeFeedSchema: Webrcade feed object schema
     * Platforms Webrcade Feed
     */
    public platformsWebrcadeFeedApiWebrcadeFeedGetWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<WebrcadeFeedSchema>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.platformsWebrcadeFeedApiWebrcadeFeedGet(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.platformsWebrcadeFeedApiWebrcadeFeedGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get webrcade feed endpoint https://docs.webrcade.com/feeds/format/  Args:     request (Request): Fastapi Request object  Returns:     WebrcadeFeedSchema: Webrcade feed object schema
     * Platforms Webrcade Feed
     */
    public platformsWebrcadeFeedApiWebrcadeFeedGet(_options?: ConfigurationOptions): Observable<WebrcadeFeedSchema> {
        return this.platformsWebrcadeFeedApiWebrcadeFeedGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<WebrcadeFeedSchema>) => apiResponse.data));
    }

    /**
     * Get tinfoil custom index feed endpoint https://blawar.github.io/tinfoil/custom_index/  Args:     request (Request): Fastapi Request object     slug (str, optional): Platform slug. Defaults to \"switch\".  Returns:     TinfoilFeedSchema: Tinfoil feed object schema
     * Tinfoil Index Feed
     * @param [slug]
     */
    public tinfoilIndexFeedApiTinfoilFeedGetWithHttpInfo(slug?: string, _options?: ConfigurationOptions): Observable<HttpInfo<TinfoilFeedSchema>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.tinfoilIndexFeedApiTinfoilFeedGet(slug, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tinfoilIndexFeedApiTinfoilFeedGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get tinfoil custom index feed endpoint https://blawar.github.io/tinfoil/custom_index/  Args:     request (Request): Fastapi Request object     slug (str, optional): Platform slug. Defaults to \"switch\".  Returns:     TinfoilFeedSchema: Tinfoil feed object schema
     * Tinfoil Index Feed
     * @param [slug]
     */
    public tinfoilIndexFeedApiTinfoilFeedGet(slug?: string, _options?: ConfigurationOptions): Observable<TinfoilFeedSchema> {
        return this.tinfoilIndexFeedApiTinfoilFeedGetWithHttpInfo(slug, _options).pipe(map((apiResponse: HttpInfo<TinfoilFeedSchema>) => apiResponse.data));
    }

}

import { FirmwareApiRequestFactory, FirmwareApiResponseProcessor} from "../apis/FirmwareApi.js";
export class ObservableFirmwareApi {
    private requestFactory: FirmwareApiRequestFactory;
    private responseProcessor: FirmwareApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FirmwareApiRequestFactory,
        responseProcessor?: FirmwareApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FirmwareApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FirmwareApiResponseProcessor();
    }

    /**
     * Upload firmware files endpoint  Args:     request (Request): Fastapi Request object     platform_slug (str): Slug of the platform where to upload the files     files (list[UploadFile], optional): List of files to upload  Raises:     HTTPException  Returns:     AddFirmwareResponse: Standard message response
     * Add Firmware
     * @param platformId
     * @param files
     */
    public addFirmwareApiFirmwarePostWithHttpInfo(platformId: number, files: Array<HttpFile>, _options?: ConfigurationOptions): Observable<HttpInfo<AddFirmwareResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addFirmwareApiFirmwarePost(platformId, files, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addFirmwareApiFirmwarePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Upload firmware files endpoint  Args:     request (Request): Fastapi Request object     platform_slug (str): Slug of the platform where to upload the files     files (list[UploadFile], optional): List of files to upload  Raises:     HTTPException  Returns:     AddFirmwareResponse: Standard message response
     * Add Firmware
     * @param platformId
     * @param files
     */
    public addFirmwareApiFirmwarePost(platformId: number, files: Array<HttpFile>, _options?: ConfigurationOptions): Observable<AddFirmwareResponse> {
        return this.addFirmwareApiFirmwarePostWithHttpInfo(platformId, files, _options).pipe(map((apiResponse: HttpInfo<AddFirmwareResponse>) => apiResponse.data));
    }

    /**
     * Delete firmware endpoint  Args:     request (Request): Fastapi Request object.         {             \"firmware\": List of firmware IDs to delete         }     delete_from_fs (bool, optional): Flag to delete rom from filesystem. Defaults to False.  Returns:     MessageResponse: Standard message response
     * Delete Firmware
     */
    public deleteFirmwareApiFirmwareDeletePostWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<MessageResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteFirmwareApiFirmwareDeletePost(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteFirmwareApiFirmwareDeletePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete firmware endpoint  Args:     request (Request): Fastapi Request object.         {             \"firmware\": List of firmware IDs to delete         }     delete_from_fs (bool, optional): Flag to delete rom from filesystem. Defaults to False.  Returns:     MessageResponse: Standard message response
     * Delete Firmware
     */
    public deleteFirmwareApiFirmwareDeletePost(_options?: ConfigurationOptions): Observable<MessageResponse> {
        return this.deleteFirmwareApiFirmwareDeletePostWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<MessageResponse>) => apiResponse.data));
    }

    /**
     * Get firmware endpoint  Args:     request (Request): Fastapi Request object     id (int): Firmware internal id  Returns:     FirmwareSchema: Firmware stored in the database
     * Get Firmware
     * @param id
     */
    public getFirmwareApiFirmwareIdGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<FirmwareSchema>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFirmwareApiFirmwareIdGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFirmwareApiFirmwareIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get firmware endpoint  Args:     request (Request): Fastapi Request object     id (int): Firmware internal id  Returns:     FirmwareSchema: Firmware stored in the database
     * Get Firmware
     * @param id
     */
    public getFirmwareApiFirmwareIdGet(id: number, _options?: ConfigurationOptions): Observable<FirmwareSchema> {
        return this.getFirmwareApiFirmwareIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<FirmwareSchema>) => apiResponse.data));
    }

    /**
     * Download firmware endpoint  Args:     request (Request): Fastapi Request object     id (int): Rom internal id     file_name (str): Required due to a bug in emulatorjs  Returns:     FileResponse: Returns the firmware file
     * Get Firmware Content
     * @param id
     * @param fileName
     */
    public getFirmwareContentApiFirmwareIdContentFileNameGetWithHttpInfo(id: number, fileName: string, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFirmwareContentApiFirmwareIdContentFileNameGet(id, fileName, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFirmwareContentApiFirmwareIdContentFileNameGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Download firmware endpoint  Args:     request (Request): Fastapi Request object     id (int): Rom internal id     file_name (str): Required due to a bug in emulatorjs  Returns:     FileResponse: Returns the firmware file
     * Get Firmware Content
     * @param id
     * @param fileName
     */
    public getFirmwareContentApiFirmwareIdContentFileNameGet(id: number, fileName: string, _options?: ConfigurationOptions): Observable<any> {
        return this.getFirmwareContentApiFirmwareIdContentFileNameGetWithHttpInfo(id, fileName, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Get firmware endpoint  Args:     request (Request): Fastapi Request object  Returns:     list[FirmwareSchema]: Firmware stored in the database
     * Get Platform Firmware
     * @param [platformId]
     */
    public getPlatformFirmwareApiFirmwareGetWithHttpInfo(platformId?: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<FirmwareSchema>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getPlatformFirmwareApiFirmwareGet(platformId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPlatformFirmwareApiFirmwareGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get firmware endpoint  Args:     request (Request): Fastapi Request object  Returns:     list[FirmwareSchema]: Firmware stored in the database
     * Get Platform Firmware
     * @param [platformId]
     */
    public getPlatformFirmwareApiFirmwareGet(platformId?: number, _options?: ConfigurationOptions): Observable<Array<FirmwareSchema>> {
        return this.getPlatformFirmwareApiFirmwareGetWithHttpInfo(platformId, _options).pipe(map((apiResponse: HttpInfo<Array<FirmwareSchema>>) => apiResponse.data));
    }

    /**
     * Head firmware content endpoint  Args:     request (Request): Fastapi Request object     id (int): Rom internal id     file_name (str): Required due to a bug in emulatorjs  Returns:     FileResponse: Returns the response with headers
     * Head Firmware Content
     * @param id
     * @param fileName
     */
    public headFirmwareContentApiFirmwareIdContentFileNameHeadWithHttpInfo(id: number, fileName: string, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.headFirmwareContentApiFirmwareIdContentFileNameHead(id, fileName, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.headFirmwareContentApiFirmwareIdContentFileNameHeadWithHttpInfo(rsp)));
            }));
    }

    /**
     * Head firmware content endpoint  Args:     request (Request): Fastapi Request object     id (int): Rom internal id     file_name (str): Required due to a bug in emulatorjs  Returns:     FileResponse: Returns the response with headers
     * Head Firmware Content
     * @param id
     * @param fileName
     */
    public headFirmwareContentApiFirmwareIdContentFileNameHead(id: number, fileName: string, _options?: ConfigurationOptions): Observable<any> {
        return this.headFirmwareContentApiFirmwareIdContentFileNameHeadWithHttpInfo(id, fileName, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { PlatformsApiRequestFactory, PlatformsApiResponseProcessor} from "../apis/PlatformsApi.js";
export class ObservablePlatformsApi {
    private requestFactory: PlatformsApiRequestFactory;
    private responseProcessor: PlatformsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PlatformsApiRequestFactory,
        responseProcessor?: PlatformsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PlatformsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PlatformsApiResponseProcessor();
    }

    /**
     * Create platform endpoint  Args:     request (Request): Fastapi Request object  Returns:     PlatformSchema: Just created platform
     * Add Platforms
     */
    public addPlatformsApiPlatformsPostWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<PlatformSchema>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addPlatformsApiPlatformsPost(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addPlatformsApiPlatformsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create platform endpoint  Args:     request (Request): Fastapi Request object  Returns:     PlatformSchema: Just created platform
     * Add Platforms
     */
    public addPlatformsApiPlatformsPost(_options?: ConfigurationOptions): Observable<PlatformSchema> {
        return this.addPlatformsApiPlatformsPostWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<PlatformSchema>) => apiResponse.data));
    }

    /**
     * Delete platforms endpoint  Args:     request (Request): Fastapi Request object     {         \"platforms\": List of rom\'s ids to delete     }  Raises:     HTTPException: Platform not found  Returns:     MessageResponse: Standard message response
     * Delete Platforms
     * @param id
     */
    public deletePlatformsApiPlatformsIdDeleteWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<MessageResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deletePlatformsApiPlatformsIdDelete(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePlatformsApiPlatformsIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete platforms endpoint  Args:     request (Request): Fastapi Request object     {         \"platforms\": List of rom\'s ids to delete     }  Raises:     HTTPException: Platform not found  Returns:     MessageResponse: Standard message response
     * Delete Platforms
     * @param id
     */
    public deletePlatformsApiPlatformsIdDelete(id: number, _options?: ConfigurationOptions): Observable<MessageResponse> {
        return this.deletePlatformsApiPlatformsIdDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<MessageResponse>) => apiResponse.data));
    }

    /**
     * Get platforms endpoint  Args:     request (Request): Fastapi Request object     id (int, optional): Platform id. Defaults to None.  Returns:     PlatformSchema: Platform
     * Get Platform
     * @param id
     */
    public getPlatformApiPlatformsIdGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<PlatformSchema>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getPlatformApiPlatformsIdGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPlatformApiPlatformsIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get platforms endpoint  Args:     request (Request): Fastapi Request object     id (int, optional): Platform id. Defaults to None.  Returns:     PlatformSchema: Platform
     * Get Platform
     * @param id
     */
    public getPlatformApiPlatformsIdGet(id: number, _options?: ConfigurationOptions): Observable<PlatformSchema> {
        return this.getPlatformApiPlatformsIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<PlatformSchema>) => apiResponse.data));
    }

    /**
     * Get platforms endpoint  Args:     request (Request): Fastapi Request object     id (int, optional): Platform id. Defaults to None.  Returns:     list[PlatformSchema]: List of platforms
     * Get Platforms
     */
    public getPlatformsApiPlatformsGetWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<Array<PlatformSchema>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getPlatformsApiPlatformsGet(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPlatformsApiPlatformsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get platforms endpoint  Args:     request (Request): Fastapi Request object     id (int, optional): Platform id. Defaults to None.  Returns:     list[PlatformSchema]: List of platforms
     * Get Platforms
     */
    public getPlatformsApiPlatformsGet(_options?: ConfigurationOptions): Observable<Array<PlatformSchema>> {
        return this.getPlatformsApiPlatformsGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<PlatformSchema>>) => apiResponse.data));
    }

    /**
     * Get list of supported platforms endpoint  Args:     request (Request): Fastapi Request object  Returns:     list[PlatformSchema]: List of supported platforms
     * Get Supported Platforms
     */
    public getSupportedPlatformsApiPlatformsSupportedGetWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<Array<PlatformSchema>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSupportedPlatformsApiPlatformsSupportedGet(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSupportedPlatformsApiPlatformsSupportedGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get list of supported platforms endpoint  Args:     request (Request): Fastapi Request object  Returns:     list[PlatformSchema]: List of supported platforms
     * Get Supported Platforms
     */
    public getSupportedPlatformsApiPlatformsSupportedGet(_options?: ConfigurationOptions): Observable<Array<PlatformSchema>> {
        return this.getSupportedPlatformsApiPlatformsSupportedGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<PlatformSchema>>) => apiResponse.data));
    }

    /**
     * Update platform endpoint  Args:     request (Request): Fastapi Request object     id (int): Platform id  Returns:     MessageResponse: Standard message response
     * Update Platform
     * @param id
     */
    public updatePlatformApiPlatformsIdPutWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<PlatformSchema>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updatePlatformApiPlatformsIdPut(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePlatformApiPlatformsIdPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update platform endpoint  Args:     request (Request): Fastapi Request object     id (int): Platform id  Returns:     MessageResponse: Standard message response
     * Update Platform
     * @param id
     */
    public updatePlatformApiPlatformsIdPut(id: number, _options?: ConfigurationOptions): Observable<PlatformSchema> {
        return this.updatePlatformApiPlatformsIdPutWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<PlatformSchema>) => apiResponse.data));
    }

}

import { RawApiRequestFactory, RawApiResponseProcessor} from "../apis/RawApi.js";
export class ObservableRawApi {
    private requestFactory: RawApiRequestFactory;
    private responseProcessor: RawApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RawApiRequestFactory,
        responseProcessor?: RawApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RawApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RawApiResponseProcessor();
    }

    /**
     * Download a single asset file  Args:     request (Request): Fastapi Request object  Returns:     FileResponse: Returns a single asset file
     * Get Raw Asset
     * @param path
     */
    public getRawAssetApiRawAssetsPathGetWithHttpInfo(path: string, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getRawAssetApiRawAssetsPathGet(path, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRawAssetApiRawAssetsPathGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Download a single asset file  Args:     request (Request): Fastapi Request object  Returns:     FileResponse: Returns a single asset file
     * Get Raw Asset
     * @param path
     */
    public getRawAssetApiRawAssetsPathGet(path: string, _options?: ConfigurationOptions): Observable<any> {
        return this.getRawAssetApiRawAssetsPathGetWithHttpInfo(path, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Head Raw Asset
     * @param path
     */
    public headRawAssetApiRawAssetsPathHeadWithHttpInfo(path: string, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.headRawAssetApiRawAssetsPathHead(path, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.headRawAssetApiRawAssetsPathHeadWithHttpInfo(rsp)));
            }));
    }

    /**
     * Head Raw Asset
     * @param path
     */
    public headRawAssetApiRawAssetsPathHead(path: string, _options?: ConfigurationOptions): Observable<any> {
        return this.headRawAssetApiRawAssetsPathHeadWithHttpInfo(path, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { RomsApiRequestFactory, RomsApiResponseProcessor} from "../apis/RomsApi.js";
export class ObservableRomsApi {
    private requestFactory: RomsApiRequestFactory;
    private responseProcessor: RomsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RomsApiRequestFactory,
        responseProcessor?: RomsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RomsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RomsApiResponseProcessor();
    }

    /**
     * Upload single rom endpoint  Args:     request (Request): Fastapi Request object  Raises:     HTTPException: No files were uploaded
     * Add Rom
     */
    public addRomApiRomsPostWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addRomApiRomsPost(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addRomApiRomsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Upload single rom endpoint  Args:     request (Request): Fastapi Request object  Raises:     HTTPException: No files were uploaded
     * Add Rom
     */
    public addRomApiRomsPost(_options?: ConfigurationOptions): Observable<any> {
        return this.addRomApiRomsPostWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Upload manuals for a rom  Args:     request (Request): Fastapi Request object  Raises:     HTTPException: No files were uploaded
     * Add Rom Manuals
     * @param id
     */
    public addRomManualsApiRomsIdManualsPostWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addRomManualsApiRomsIdManualsPost(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addRomManualsApiRomsIdManualsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Upload manuals for a rom  Args:     request (Request): Fastapi Request object  Raises:     HTTPException: No files were uploaded
     * Add Rom Manuals
     * @param id
     */
    public addRomManualsApiRomsIdManualsPost(id: number, _options?: ConfigurationOptions): Observable<any> {
        return this.addRomManualsApiRomsIdManualsPostWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Delete roms endpoint  Args:     request (Request): Fastapi Request object.         {             \"roms\": List of rom\'s ids to delete         }     delete_from_fs (bool, optional): Flag to delete rom from filesystem. Defaults to False.  Returns:     MessageResponse: Standard message response
     * Delete Roms
     */
    public deleteRomsApiRomsDeletePostWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<MessageResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteRomsApiRomsDeletePost(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteRomsApiRomsDeletePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete roms endpoint  Args:     request (Request): Fastapi Request object.         {             \"roms\": List of rom\'s ids to delete         }     delete_from_fs (bool, optional): Flag to delete rom from filesystem. Defaults to False.  Returns:     MessageResponse: Standard message response
     * Delete Roms
     */
    public deleteRomsApiRomsDeletePost(_options?: ConfigurationOptions): Observable<MessageResponse> {
        return this.deleteRomsApiRomsDeletePostWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<MessageResponse>) => apiResponse.data));
    }

    /**
     * Get rom endpoint  Args:     request (Request): Fastapi Request object     id (int): Rom internal id  Returns:     DetailedRomSchema: Rom stored in the database
     * Get Rom
     * @param id
     */
    public getRomApiRomsIdGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<DetailedRomSchema>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getRomApiRomsIdGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRomApiRomsIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get rom endpoint  Args:     request (Request): Fastapi Request object     id (int): Rom internal id  Returns:     DetailedRomSchema: Rom stored in the database
     * Get Rom
     * @param id
     */
    public getRomApiRomsIdGet(id: number, _options?: ConfigurationOptions): Observable<DetailedRomSchema> {
        return this.getRomApiRomsIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<DetailedRomSchema>) => apiResponse.data));
    }

    /**
     * Download rom endpoint (one single file or multiple zipped files for multi-part roms)  Args:     request (Request): Fastapi Request object     id (int): Rom internal id     file_name: Zip file output name  Returns:     Response: Returns a response with headers  Yields:     FileResponse: Returns one file for single file roms     FileRedirectResponse: Redirects to the file download path     ZipResponse: Returns a response for nginx to serve a Zip file for multi-part roms
     * Get Rom Content
     * @param id
     * @param fileName
     */
    public getRomContentApiRomsIdContentFileNameGetWithHttpInfo(id: number, fileName: string, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getRomContentApiRomsIdContentFileNameGet(id, fileName, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRomContentApiRomsIdContentFileNameGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Download rom endpoint (one single file or multiple zipped files for multi-part roms)  Args:     request (Request): Fastapi Request object     id (int): Rom internal id     file_name: Zip file output name  Returns:     Response: Returns a response with headers  Yields:     FileResponse: Returns one file for single file roms     FileRedirectResponse: Redirects to the file download path     ZipResponse: Returns a response for nginx to serve a Zip file for multi-part roms
     * Get Rom Content
     * @param id
     * @param fileName
     */
    public getRomContentApiRomsIdContentFileNameGet(id: number, fileName: string, _options?: ConfigurationOptions): Observable<any> {
        return this.getRomContentApiRomsIdContentFileNameGetWithHttpInfo(id, fileName, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Get Romfile
     * @param id
     */
    public getRomfileApiRomsfilesIdGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<RomFileSchema>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getRomfileApiRomsfilesIdGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRomfileApiRomsfilesIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Romfile
     * @param id
     */
    public getRomfileApiRomsfilesIdGet(id: number, _options?: ConfigurationOptions): Observable<RomFileSchema> {
        return this.getRomfileApiRomsfilesIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<RomFileSchema>) => apiResponse.data));
    }

    /**
     * Download rom file endpoint  Args:     request (Request): Fastapi Request object     id (int): RomFile internal id     file_name (str): What to name the file when downloading  Returns:     FileResponse: Returns the response with headers
     * Get Romfile Content
     * @param id
     * @param fileName
     */
    public getRomfileContentApiRomsfilesIdContentFileNameGetWithHttpInfo(id: number, fileName: string, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getRomfileContentApiRomsfilesIdContentFileNameGet(id, fileName, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRomfileContentApiRomsfilesIdContentFileNameGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Download rom file endpoint  Args:     request (Request): Fastapi Request object     id (int): RomFile internal id     file_name (str): What to name the file when downloading  Returns:     FileResponse: Returns the response with headers
     * Get Romfile Content
     * @param id
     * @param fileName
     */
    public getRomfileContentApiRomsfilesIdContentFileNameGet(id: number, fileName: string, _options?: ConfigurationOptions): Observable<any> {
        return this.getRomfileContentApiRomsfilesIdContentFileNameGetWithHttpInfo(id, fileName, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
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
    public getRomsApiRomsGetWithHttpInfo(platformId?: number, collectionId?: number, virtualCollectionId?: string, searchTerm?: string, orderBy?: string, orderDir?: string, matched?: boolean, favourite?: boolean, duplicate?: boolean, playable?: boolean, unmatchedOnly?: boolean, matchedOnly?: boolean, favouritesOnly?: boolean, duplicatesOnly?: boolean, playablesOnly?: boolean, raOnly?: boolean, groupByMetaId?: boolean, selectedGenre?: string, selectedFranchise?: string, selectedCollection?: string, selectedCompany?: string, selectedAgeRating?: string, selectedStatus?: string, selectedRegion?: string, selectedLanguage?: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<CustomLimitOffsetPageSimpleRomSchema>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getRomsApiRomsGet(platformId, collectionId, virtualCollectionId, searchTerm, orderBy, orderDir, matched, favourite, duplicate, playable, unmatchedOnly, matchedOnly, favouritesOnly, duplicatesOnly, playablesOnly, raOnly, groupByMetaId, selectedGenre, selectedFranchise, selectedCollection, selectedCompany, selectedAgeRating, selectedStatus, selectedRegion, selectedLanguage, limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRomsApiRomsGetWithHttpInfo(rsp)));
            }));
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
    public getRomsApiRomsGet(platformId?: number, collectionId?: number, virtualCollectionId?: string, searchTerm?: string, orderBy?: string, orderDir?: string, matched?: boolean, favourite?: boolean, duplicate?: boolean, playable?: boolean, unmatchedOnly?: boolean, matchedOnly?: boolean, favouritesOnly?: boolean, duplicatesOnly?: boolean, playablesOnly?: boolean, raOnly?: boolean, groupByMetaId?: boolean, selectedGenre?: string, selectedFranchise?: string, selectedCollection?: string, selectedCompany?: string, selectedAgeRating?: string, selectedStatus?: string, selectedRegion?: string, selectedLanguage?: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<CustomLimitOffsetPageSimpleRomSchema> {
        return this.getRomsApiRomsGetWithHttpInfo(platformId, collectionId, virtualCollectionId, searchTerm, orderBy, orderDir, matched, favourite, duplicate, playable, unmatchedOnly, matchedOnly, favouritesOnly, duplicatesOnly, playablesOnly, raOnly, groupByMetaId, selectedGenre, selectedFranchise, selectedCollection, selectedCompany, selectedAgeRating, selectedStatus, selectedRegion, selectedLanguage, limit, offset, _options).pipe(map((apiResponse: HttpInfo<CustomLimitOffsetPageSimpleRomSchema>) => apiResponse.data));
    }

    /**
     * Head rom content endpoint  Args:     request (Request): Fastapi Request object     id (int): Rom internal id     file_name (str): File name to download     file_ids (list[int]): List of file ids to download for multi-part roms  Returns:     FileResponse: Returns the response with headers
     * Head Rom Content
     * @param id
     * @param fileName
     */
    public headRomContentApiRomsIdContentFileNameHeadWithHttpInfo(id: number, fileName: string, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.headRomContentApiRomsIdContentFileNameHead(id, fileName, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.headRomContentApiRomsIdContentFileNameHeadWithHttpInfo(rsp)));
            }));
    }

    /**
     * Head rom content endpoint  Args:     request (Request): Fastapi Request object     id (int): Rom internal id     file_name (str): File name to download     file_ids (list[int]): List of file ids to download for multi-part roms  Returns:     FileResponse: Returns the response with headers
     * Head Rom Content
     * @param id
     * @param fileName
     */
    public headRomContentApiRomsIdContentFileNameHead(id: number, fileName: string, _options?: ConfigurationOptions): Observable<any> {
        return this.headRomContentApiRomsIdContentFileNameHeadWithHttpInfo(id, fileName, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Update rom endpoint  Args:     request (Request): Fastapi Request object     id (Rom): Rom internal id     artwork (UploadFile, optional): Custom artwork to set as cover. Defaults to File(None).     unmatch_metadata: Remove the metadata matches for this game. Defaults to False.  Raises:     HTTPException: Rom not found in database  Returns:     DetailedRomSchema: Rom stored in the database
     * Update Rom
     * @param id
     * @param [removeCover]
     * @param [unmatchMetadata]
     * @param [artwork]
     */
    public updateRomApiRomsIdPutWithHttpInfo(id: number, removeCover?: boolean, unmatchMetadata?: boolean, artwork?: HttpFile, _options?: ConfigurationOptions): Observable<HttpInfo<DetailedRomSchema>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateRomApiRomsIdPut(id, removeCover, unmatchMetadata, artwork, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateRomApiRomsIdPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update rom endpoint  Args:     request (Request): Fastapi Request object     id (Rom): Rom internal id     artwork (UploadFile, optional): Custom artwork to set as cover. Defaults to File(None).     unmatch_metadata: Remove the metadata matches for this game. Defaults to False.  Raises:     HTTPException: Rom not found in database  Returns:     DetailedRomSchema: Rom stored in the database
     * Update Rom
     * @param id
     * @param [removeCover]
     * @param [unmatchMetadata]
     * @param [artwork]
     */
    public updateRomApiRomsIdPut(id: number, removeCover?: boolean, unmatchMetadata?: boolean, artwork?: HttpFile, _options?: ConfigurationOptions): Observable<DetailedRomSchema> {
        return this.updateRomApiRomsIdPutWithHttpInfo(id, removeCover, unmatchMetadata, artwork, _options).pipe(map((apiResponse: HttpInfo<DetailedRomSchema>) => apiResponse.data));
    }

    /**
     * Update Rom User
     * @param id
     */
    public updateRomUserApiRomsIdPropsPutWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<RomUserSchema>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateRomUserApiRomsIdPropsPut(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateRomUserApiRomsIdPropsPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Rom User
     * @param id
     */
    public updateRomUserApiRomsIdPropsPut(id: number, _options?: ConfigurationOptions): Observable<RomUserSchema> {
        return this.updateRomUserApiRomsIdPropsPutWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<RomUserSchema>) => apiResponse.data));
    }

}

import { SavesApiRequestFactory, SavesApiResponseProcessor} from "../apis/SavesApi.js";
export class ObservableSavesApi {
    private requestFactory: SavesApiRequestFactory;
    private responseProcessor: SavesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SavesApiRequestFactory,
        responseProcessor?: SavesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SavesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SavesApiResponseProcessor();
    }

    /**
     * Add Save
     * @param romId
     * @param [emulator]
     */
    public addSaveApiSavesPostWithHttpInfo(romId: number, emulator?: string, _options?: ConfigurationOptions): Observable<HttpInfo<SaveSchema>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addSaveApiSavesPost(romId, emulator, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addSaveApiSavesPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add Save
     * @param romId
     * @param [emulator]
     */
    public addSaveApiSavesPost(romId: number, emulator?: string, _options?: ConfigurationOptions): Observable<SaveSchema> {
        return this.addSaveApiSavesPostWithHttpInfo(romId, emulator, _options).pipe(map((apiResponse: HttpInfo<SaveSchema>) => apiResponse.data));
    }

    /**
     * Delete Saves
     */
    public deleteSavesApiSavesDeletePostWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<Array<number | null>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteSavesApiSavesDeletePost(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteSavesApiSavesDeletePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Saves
     */
    public deleteSavesApiSavesDeletePost(_options?: ConfigurationOptions): Observable<Array<number | null>> {
        return this.deleteSavesApiSavesDeletePostWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<number | null>>) => apiResponse.data));
    }

    /**
     * Get Save
     * @param id
     */
    public getSaveApiSavesIdGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<SaveSchema>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSaveApiSavesIdGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSaveApiSavesIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Save
     * @param id
     */
    public getSaveApiSavesIdGet(id: number, _options?: ConfigurationOptions): Observable<SaveSchema> {
        return this.getSaveApiSavesIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<SaveSchema>) => apiResponse.data));
    }

    /**
     * Get Saves
     * @param [romId]
     * @param [platformId]
     */
    public getSavesApiSavesGetWithHttpInfo(romId?: number, platformId?: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<SaveSchema>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSavesApiSavesGet(romId, platformId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSavesApiSavesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Saves
     * @param [romId]
     * @param [platformId]
     */
    public getSavesApiSavesGet(romId?: number, platformId?: number, _options?: ConfigurationOptions): Observable<Array<SaveSchema>> {
        return this.getSavesApiSavesGetWithHttpInfo(romId, platformId, _options).pipe(map((apiResponse: HttpInfo<Array<SaveSchema>>) => apiResponse.data));
    }

    /**
     * Update Save
     * @param id
     */
    public updateSaveApiSavesIdPutWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<SaveSchema>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateSaveApiSavesIdPut(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateSaveApiSavesIdPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Save
     * @param id
     */
    public updateSaveApiSavesIdPut(id: number, _options?: ConfigurationOptions): Observable<SaveSchema> {
        return this.updateSaveApiSavesIdPutWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<SaveSchema>) => apiResponse.data));
    }

}

import { ScreenshotsApiRequestFactory, ScreenshotsApiResponseProcessor} from "../apis/ScreenshotsApi.js";
export class ObservableScreenshotsApi {
    private requestFactory: ScreenshotsApiRequestFactory;
    private responseProcessor: ScreenshotsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ScreenshotsApiRequestFactory,
        responseProcessor?: ScreenshotsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ScreenshotsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ScreenshotsApiResponseProcessor();
    }

    /**
     * Add Screenshot
     * @param romId
     */
    public addScreenshotApiScreenshotsPostWithHttpInfo(romId: number, _options?: ConfigurationOptions): Observable<HttpInfo<ScreenshotSchema>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addScreenshotApiScreenshotsPost(romId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addScreenshotApiScreenshotsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add Screenshot
     * @param romId
     */
    public addScreenshotApiScreenshotsPost(romId: number, _options?: ConfigurationOptions): Observable<ScreenshotSchema> {
        return this.addScreenshotApiScreenshotsPostWithHttpInfo(romId, _options).pipe(map((apiResponse: HttpInfo<ScreenshotSchema>) => apiResponse.data));
    }

}

import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi.js";
export class ObservableSearchApi {
    private requestFactory: SearchApiRequestFactory;
    private responseProcessor: SearchApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchApiRequestFactory,
        responseProcessor?: SearchApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SearchApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SearchApiResponseProcessor();
    }

    /**
     * Search Cover
     * @param [searchTerm]
     */
    public searchCoverApiSearchCoverGetWithHttpInfo(searchTerm?: string, _options?: ConfigurationOptions): Observable<HttpInfo<Array<SearchCoverSchema>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.searchCoverApiSearchCoverGet(searchTerm, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchCoverApiSearchCoverGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search Cover
     * @param [searchTerm]
     */
    public searchCoverApiSearchCoverGet(searchTerm?: string, _options?: ConfigurationOptions): Observable<Array<SearchCoverSchema>> {
        return this.searchCoverApiSearchCoverGetWithHttpInfo(searchTerm, _options).pipe(map((apiResponse: HttpInfo<Array<SearchCoverSchema>>) => apiResponse.data));
    }

    /**
     * Search for rom in metadata providers  Args:     request (Request): FastAPI request     rom_id (int): Rom ID     source (str): Source of the rom     search_term (str, optional): Search term. Defaults to None.     search_by (str, optional): Search by name or ID. Defaults to \"name\".     search_extended (bool, optional): Search extended info. Defaults to False.  Returns:     list[SearchRomSchema]: List of matched roms
     * Search Rom
     * @param romId
     * @param [searchTerm]
     * @param [searchBy]
     */
    public searchRomApiSearchRomsGetWithHttpInfo(romId: number, searchTerm?: string, searchBy?: string, _options?: ConfigurationOptions): Observable<HttpInfo<Array<SearchRomSchema>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.searchRomApiSearchRomsGet(romId, searchTerm, searchBy, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchRomApiSearchRomsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search for rom in metadata providers  Args:     request (Request): FastAPI request     rom_id (int): Rom ID     source (str): Source of the rom     search_term (str, optional): Search term. Defaults to None.     search_by (str, optional): Search by name or ID. Defaults to \"name\".     search_extended (bool, optional): Search extended info. Defaults to False.  Returns:     list[SearchRomSchema]: List of matched roms
     * Search Rom
     * @param romId
     * @param [searchTerm]
     * @param [searchBy]
     */
    public searchRomApiSearchRomsGet(romId: number, searchTerm?: string, searchBy?: string, _options?: ConfigurationOptions): Observable<Array<SearchRomSchema>> {
        return this.searchRomApiSearchRomsGetWithHttpInfo(romId, searchTerm, searchBy, _options).pipe(map((apiResponse: HttpInfo<Array<SearchRomSchema>>) => apiResponse.data));
    }

}

import { StatesApiRequestFactory, StatesApiResponseProcessor} from "../apis/StatesApi.js";
export class ObservableStatesApi {
    private requestFactory: StatesApiRequestFactory;
    private responseProcessor: StatesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: StatesApiRequestFactory,
        responseProcessor?: StatesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StatesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StatesApiResponseProcessor();
    }

    /**
     * Add State
     * @param romId
     * @param [emulator]
     */
    public addStateApiStatesPostWithHttpInfo(romId: number, emulator?: string, _options?: ConfigurationOptions): Observable<HttpInfo<StateSchema>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addStateApiStatesPost(romId, emulator, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addStateApiStatesPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add State
     * @param romId
     * @param [emulator]
     */
    public addStateApiStatesPost(romId: number, emulator?: string, _options?: ConfigurationOptions): Observable<StateSchema> {
        return this.addStateApiStatesPostWithHttpInfo(romId, emulator, _options).pipe(map((apiResponse: HttpInfo<StateSchema>) => apiResponse.data));
    }

    /**
     * Delete States
     */
    public deleteStatesApiStatesDeletePostWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<Array<number | null>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteStatesApiStatesDeletePost(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteStatesApiStatesDeletePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete States
     */
    public deleteStatesApiStatesDeletePost(_options?: ConfigurationOptions): Observable<Array<number | null>> {
        return this.deleteStatesApiStatesDeletePostWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<number | null>>) => apiResponse.data));
    }

    /**
     * Get State
     * @param id
     */
    public getStateApiStatesIdGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<StateSchema>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getStateApiStatesIdGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getStateApiStatesIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get State
     * @param id
     */
    public getStateApiStatesIdGet(id: number, _options?: ConfigurationOptions): Observable<StateSchema> {
        return this.getStateApiStatesIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<StateSchema>) => apiResponse.data));
    }

    /**
     * Get States
     * @param [romId]
     * @param [platformId]
     */
    public getStatesApiStatesGetWithHttpInfo(romId?: number, platformId?: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<StateSchema>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getStatesApiStatesGet(romId, platformId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getStatesApiStatesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get States
     * @param [romId]
     * @param [platformId]
     */
    public getStatesApiStatesGet(romId?: number, platformId?: number, _options?: ConfigurationOptions): Observable<Array<StateSchema>> {
        return this.getStatesApiStatesGetWithHttpInfo(romId, platformId, _options).pipe(map((apiResponse: HttpInfo<Array<StateSchema>>) => apiResponse.data));
    }

    /**
     * Update State
     * @param id
     */
    public updateStateApiStatesIdPutWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<StateSchema>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateStateApiStatesIdPut(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateStateApiStatesIdPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update State
     * @param id
     */
    public updateStateApiStatesIdPut(id: number, _options?: ConfigurationOptions): Observable<StateSchema> {
        return this.updateStateApiStatesIdPutWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<StateSchema>) => apiResponse.data));
    }

}

import { StatsApiRequestFactory, StatsApiResponseProcessor} from "../apis/StatsApi.js";
export class ObservableStatsApi {
    private requestFactory: StatsApiRequestFactory;
    private responseProcessor: StatsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: StatsApiRequestFactory,
        responseProcessor?: StatsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StatsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StatsApiResponseProcessor();
    }

    /**
     * Endpoint to return the current RomM stats  Returns:     dict: Dictionary with all the stats
     * Stats
     */
    public statsApiStatsGetWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<StatsReturn>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.statsApiStatsGet(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.statsApiStatsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Endpoint to return the current RomM stats  Returns:     dict: Dictionary with all the stats
     * Stats
     */
    public statsApiStatsGet(_options?: ConfigurationOptions): Observable<StatsReturn> {
        return this.statsApiStatsGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<StatsReturn>) => apiResponse.data));
    }

}

import { SystemApiRequestFactory, SystemApiResponseProcessor} from "../apis/SystemApi.js";
export class ObservableSystemApi {
    private requestFactory: SystemApiRequestFactory;
    private responseProcessor: SystemApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SystemApiRequestFactory,
        responseProcessor?: SystemApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SystemApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SystemApiResponseProcessor();
    }

    /**
     * Endpoint to set the CSRF token in cache and return all the basic RomM config  Returns:     HeartbeatReturn: TypedDict structure with all the defined values in the HeartbeatReturn class.
     * Heartbeat
     */
    public heartbeatApiHeartbeatGetWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<HeartbeatResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.heartbeatApiHeartbeatGet(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.heartbeatApiHeartbeatGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Endpoint to set the CSRF token in cache and return all the basic RomM config  Returns:     HeartbeatReturn: TypedDict structure with all the defined values in the HeartbeatReturn class.
     * Heartbeat
     */
    public heartbeatApiHeartbeatGet(_options?: ConfigurationOptions): Observable<HeartbeatResponse> {
        return this.heartbeatApiHeartbeatGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<HeartbeatResponse>) => apiResponse.data));
    }

}

import { TasksApiRequestFactory, TasksApiResponseProcessor} from "../apis/TasksApi.js";
export class ObservableTasksApi {
    private requestFactory: TasksApiRequestFactory;
    private responseProcessor: TasksApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TasksApiRequestFactory,
        responseProcessor?: TasksApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TasksApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TasksApiResponseProcessor();
    }

    /**
     * Run all tasks endpoint  Args:     request (Request): Fastapi Request object Returns:     RunTasksResponse: Standard message response
     * Run Task
     * @param task
     */
    public runTaskApiTasksTaskRunPostWithHttpInfo(task: string, _options?: ConfigurationOptions): Observable<HttpInfo<MessageResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.runTaskApiTasksTaskRunPost(task, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.runTaskApiTasksTaskRunPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Run all tasks endpoint  Args:     request (Request): Fastapi Request object Returns:     RunTasksResponse: Standard message response
     * Run Task
     * @param task
     */
    public runTaskApiTasksTaskRunPost(task: string, _options?: ConfigurationOptions): Observable<MessageResponse> {
        return this.runTaskApiTasksTaskRunPostWithHttpInfo(task, _options).pipe(map((apiResponse: HttpInfo<MessageResponse>) => apiResponse.data));
    }

    /**
     * Run all tasks endpoint  Args:     request (Request): Fastapi Request object Returns:     RunTasksResponse: Standard message response
     * Run Tasks
     */
    public runTasksApiTasksRunPostWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<MessageResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.runTasksApiTasksRunPost(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.runTasksApiTasksRunPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Run all tasks endpoint  Args:     request (Request): Fastapi Request object Returns:     RunTasksResponse: Standard message response
     * Run Tasks
     */
    public runTasksApiTasksRunPost(_options?: ConfigurationOptions): Observable<MessageResponse> {
        return this.runTasksApiTasksRunPostWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<MessageResponse>) => apiResponse.data));
    }

}

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi.js";
export class ObservableUsersApi {
    private requestFactory: UsersApiRequestFactory;
    private responseProcessor: UsersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UsersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UsersApiResponseProcessor();
    }

    /**
     * Create user endpoint  Args:     request (Request): Fastapi Requests object     username (str): User username     password (str): User password     email (str): User email     role (str): RomM Role object represented as string  Returns:     UserSchema: Newly created user
     * Add User
     * @param username
     * @param password
     * @param email
     * @param role
     */
    public addUserApiUsersPostWithHttpInfo(username: string, password: string, email: string, role: string, _options?: ConfigurationOptions): Observable<HttpInfo<UserSchema>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addUserApiUsersPost(username, password, email, role, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addUserApiUsersPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create user endpoint  Args:     request (Request): Fastapi Requests object     username (str): User username     password (str): User password     email (str): User email     role (str): RomM Role object represented as string  Returns:     UserSchema: Newly created user
     * Add User
     * @param username
     * @param password
     * @param email
     * @param role
     */
    public addUserApiUsersPost(username: string, password: string, email: string, role: string, _options?: ConfigurationOptions): Observable<UserSchema> {
        return this.addUserApiUsersPostWithHttpInfo(username, password, email, role, _options).pipe(map((apiResponse: HttpInfo<UserSchema>) => apiResponse.data));
    }

    /**
     * Create an invite link for a user.  Args:     request (Request): FastAPI Request object     role (str): The role of the user  Returns:     InviteLinkSchema: Invite link
     * Create Invite Link
     * @param role
     */
    public createInviteLinkApiUsersInviteLinkPostWithHttpInfo(role: string, _options?: ConfigurationOptions): Observable<HttpInfo<InviteLinkSchema>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createInviteLinkApiUsersInviteLinkPost(role, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createInviteLinkApiUsersInviteLinkPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create an invite link for a user.  Args:     request (Request): FastAPI Request object     role (str): The role of the user  Returns:     InviteLinkSchema: Invite link
     * Create Invite Link
     * @param role
     */
    public createInviteLinkApiUsersInviteLinkPost(role: string, _options?: ConfigurationOptions): Observable<InviteLinkSchema> {
        return this.createInviteLinkApiUsersInviteLinkPostWithHttpInfo(role, _options).pipe(map((apiResponse: HttpInfo<InviteLinkSchema>) => apiResponse.data));
    }

    /**
     * Create user endpoint with invite link  Args:     username (str): User username     email (str): User email     password (str): User password     token (str): Invite link token  Returns:     UserSchema: Newly created user
     * Create User From Invite
     * @param bodyCreateUserFromInviteApiUsersRegisterPost
     */
    public createUserFromInviteApiUsersRegisterPostWithHttpInfo(bodyCreateUserFromInviteApiUsersRegisterPost: BodyCreateUserFromInviteApiUsersRegisterPost, _options?: ConfigurationOptions): Observable<HttpInfo<UserSchema>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createUserFromInviteApiUsersRegisterPost(bodyCreateUserFromInviteApiUsersRegisterPost, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createUserFromInviteApiUsersRegisterPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create user endpoint with invite link  Args:     username (str): User username     email (str): User email     password (str): User password     token (str): Invite link token  Returns:     UserSchema: Newly created user
     * Create User From Invite
     * @param bodyCreateUserFromInviteApiUsersRegisterPost
     */
    public createUserFromInviteApiUsersRegisterPost(bodyCreateUserFromInviteApiUsersRegisterPost: BodyCreateUserFromInviteApiUsersRegisterPost, _options?: ConfigurationOptions): Observable<UserSchema> {
        return this.createUserFromInviteApiUsersRegisterPostWithHttpInfo(bodyCreateUserFromInviteApiUsersRegisterPost, _options).pipe(map((apiResponse: HttpInfo<UserSchema>) => apiResponse.data));
    }

    /**
     * Delete user endpoint  Args:     request (Request): Fastapi Request object     user_id (int): User internal id  Raises:     HTTPException: User is not found in database     HTTPException: User deleting itself     HTTPException: User is the last admin user  Returns:     MessageResponse: Standard message response
     * Delete User
     * @param id
     */
    public deleteUserApiUsersIdDeleteWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<MessageResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteUserApiUsersIdDelete(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteUserApiUsersIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete user endpoint  Args:     request (Request): Fastapi Request object     user_id (int): User internal id  Raises:     HTTPException: User is not found in database     HTTPException: User deleting itself     HTTPException: User is the last admin user  Returns:     MessageResponse: Standard message response
     * Delete User
     * @param id
     */
    public deleteUserApiUsersIdDelete(id: number, _options?: ConfigurationOptions): Observable<MessageResponse> {
        return this.deleteUserApiUsersIdDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<MessageResponse>) => apiResponse.data));
    }

    /**
     * Get current user endpoint  Args:     request (Request): Fastapi Request object  Returns:     UserSchema | None: Current user
     * Get Current User
     */
    public getCurrentUserApiUsersMeGetWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<UserSchema>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCurrentUserApiUsersMeGet(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCurrentUserApiUsersMeGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get current user endpoint  Args:     request (Request): Fastapi Request object  Returns:     UserSchema | None: Current user
     * Get Current User
     */
    public getCurrentUserApiUsersMeGet(_options?: ConfigurationOptions): Observable<UserSchema> {
        return this.getCurrentUserApiUsersMeGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<UserSchema>) => apiResponse.data));
    }

    /**
     * Get user endpoint  Args:     request (Request): Fastapi Request object  Returns:     UserSchem: User stored in the RomM\'s database
     * Get User
     * @param id
     */
    public getUserApiUsersIdGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<UserSchema>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getUserApiUsersIdGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserApiUsersIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get user endpoint  Args:     request (Request): Fastapi Request object  Returns:     UserSchem: User stored in the RomM\'s database
     * Get User
     * @param id
     */
    public getUserApiUsersIdGet(id: number, _options?: ConfigurationOptions): Observable<UserSchema> {
        return this.getUserApiUsersIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<UserSchema>) => apiResponse.data));
    }

    /**
     * Get all users endpoint  Args:     request (Request): Fastapi Request object  Returns:     list[UserSchema]: All users stored in the RomM\'s database
     * Get Users
     */
    public getUsersApiUsersGetWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<Array<UserSchema>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getUsersApiUsersGet(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUsersApiUsersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get all users endpoint  Args:     request (Request): Fastapi Request object  Returns:     list[UserSchema]: All users stored in the RomM\'s database
     * Get Users
     */
    public getUsersApiUsersGet(_options?: ConfigurationOptions): Observable<Array<UserSchema>> {
        return this.getUsersApiUsersGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<UserSchema>>) => apiResponse.data));
    }

    /**
     * Refresh Retro Achievements
     * @param id
     */
    public refreshRetroAchievementsApiUsersIdRaRefreshPostWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<MessageResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.refreshRetroAchievementsApiUsersIdRaRefreshPost(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.refreshRetroAchievementsApiUsersIdRaRefreshPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Refresh Retro Achievements
     * @param id
     */
    public refreshRetroAchievementsApiUsersIdRaRefreshPost(id: number, _options?: ConfigurationOptions): Observable<MessageResponse> {
        return this.refreshRetroAchievementsApiUsersIdRaRefreshPostWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<MessageResponse>) => apiResponse.data));
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
    public updateUserApiUsersIdPutWithHttpInfo(id: number, username?: string, password?: string, email?: string, role?: string, enabled?: boolean, raUsername?: string, avatar?: HttpFile, _options?: ConfigurationOptions): Observable<HttpInfo<UserSchema>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateUserApiUsersIdPut(id, username, password, email, role, enabled, raUsername, avatar, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateUserApiUsersIdPutWithHttpInfo(rsp)));
            }));
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
    public updateUserApiUsersIdPut(id: number, username?: string, password?: string, email?: string, role?: string, enabled?: boolean, raUsername?: string, avatar?: HttpFile, _options?: ConfigurationOptions): Observable<UserSchema> {
        return this.updateUserApiUsersIdPutWithHttpInfo(id, username, password, email, role, enabled, raUsername, avatar, _options).pipe(map((apiResponse: HttpInfo<UserSchema>) => apiResponse.data));
    }

}
