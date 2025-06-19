# .AuthApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authOpenidApiOauthOpenidGet**](AuthApi.md#authOpenidApiOauthOpenidGet) | **GET** /api/oauth/openid | Auth Openid
[**loginApiLoginPost**](AuthApi.md#loginApiLoginPost) | **POST** /api/login | Login
[**loginViaOpenidApiLoginOpenidGet**](AuthApi.md#loginViaOpenidApiLoginOpenidGet) | **GET** /api/login/openid | Login Via Openid
[**logoutApiLogoutPost**](AuthApi.md#logoutApiLogoutPost) | **POST** /api/logout | Logout
[**requestPasswordResetApiForgotPasswordPost**](AuthApi.md#requestPasswordResetApiForgotPasswordPost) | **POST** /api/forgot-password | Request Password Reset
[**resetPasswordApiResetPasswordPost**](AuthApi.md#resetPasswordApiResetPasswordPost) | **POST** /api/reset-password | Reset Password
[**tokenApiTokenPost**](AuthApi.md#tokenApiTokenPost) | **POST** /api/token | Token


# **authOpenidApiOauthOpenidGet**
> any authOpenidApiOauthOpenidGet()

OIDC callback endpoint  Args:     request (Request): Fastapi Request object  Raises:     OIDCDisabledException: OAuth is disabled     OIDCNotConfiguredException: OAuth not configured     AuthCredentialsException: Invalid credentials     UserDisabledException: Auth is disabled  Returns:     RedirectResponse: Redirect to home page

### Example


```typescript
import { createConfiguration, AuthApi } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request = {};

const data = await apiInstance.authOpenidApiOauthOpenidGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **loginApiLoginPost**
> MessageResponse loginApiLoginPost()

Session login endpoint  Args:     request (Request): Fastapi Request object     credentials: Defaults to Depends(HTTPBasic()).  Raises:     CredentialsException: Invalid credentials     UserDisabledException: Auth is disabled  Returns:     MessageResponse: Standard message response

### Example


```typescript
import { createConfiguration, AuthApi } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request = {};

const data = await apiInstance.loginApiLoginPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**MessageResponse**

### Authorization

[HTTPBasic](README.md#HTTPBasic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **loginViaOpenidApiLoginOpenidGet**
> any loginViaOpenidApiLoginOpenidGet()

OIDC login endpoint  Args:     request (Request): Fastapi Request object  Raises:     OIDCDisabledException: OAuth is disabled     OIDCNotConfiguredException: OAuth not configured  Returns:     RedirectResponse: Redirect to OIDC provider

### Example


```typescript
import { createConfiguration, AuthApi } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request = {};

const data = await apiInstance.loginViaOpenidApiLoginOpenidGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **logoutApiLogoutPost**
> MessageResponse logoutApiLogoutPost()

Session logout endpoint  Args:     request (Request): Fastapi Request object  Returns:     MessageResponse: Standard message response

### Example


```typescript
import { createConfiguration, AuthApi } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request = {};

const data = await apiInstance.logoutApiLogoutPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**MessageResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **requestPasswordResetApiForgotPasswordPost**
> MessageResponse requestPasswordResetApiForgotPasswordPost(bodyRequestPasswordResetApiForgotPasswordPost)

\"Request a password reset link for the user.  Args:     username (str): Username of the user requesting the reset Returns:     MessageResponse: Confirmation message

### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiRequestPasswordResetApiForgotPasswordPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiRequestPasswordResetApiForgotPasswordPostRequest = {
  
  bodyRequestPasswordResetApiForgotPasswordPost: {
    username: "username_example",
  },
};

const data = await apiInstance.requestPasswordResetApiForgotPasswordPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bodyRequestPasswordResetApiForgotPasswordPost** | **BodyRequestPasswordResetApiForgotPasswordPost**|  |


### Return type

**MessageResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **resetPasswordApiResetPasswordPost**
> MessageResponse resetPasswordApiResetPasswordPost(bodyResetPasswordApiResetPasswordPost)

Reset password using the token.  Args:     token (str): Reset token from the URL     new_password (str): New user password  Returns:     MessageResponse: Confirmation message

### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiResetPasswordApiResetPasswordPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiResetPasswordApiResetPasswordPostRequest = {
  
  bodyResetPasswordApiResetPasswordPost: {
    token: "token_example",
    newPassword: "newPassword_example",
  },
};

const data = await apiInstance.resetPasswordApiResetPasswordPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bodyResetPasswordApiResetPasswordPost** | **BodyResetPasswordApiResetPasswordPost**|  |


### Return type

**MessageResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **tokenApiTokenPost**
> TokenResponse tokenApiTokenPost()

OAuth2 token endpoint  Args:     form_data (Annotated[OAuth2RequestForm, Depends): Form Data with OAuth2 info  Raises:     HTTPException: Missing refresh token     HTTPException: Invalid refresh token     HTTPException: Missing username or password     HTTPException: Invalid username or password     HTTPException: Client credentials are not yet supported     HTTPException: Invalid or unsupported grant type     HTTPException: Insufficient scope  Returns:     TokenResponse: TypedDict with the new generated token info

### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiTokenApiTokenPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiTokenApiTokenPostRequest = {
  
  grantType: "password",
  
  scope: "",
  
  username: "username_example",
  
  password: "password_example",
  
  clientId: "clientId_example",
  
  clientSecret: "clientSecret_example",
  
  refreshToken: "refreshToken_example",
};

const data = await apiInstance.tokenApiTokenPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantType** | [**string**] |  | (optional) defaults to 'password'
 **scope** | [**string**] |  | (optional) defaults to ''
 **username** | [**string**] |  | (optional) defaults to undefined
 **password** | [**string**] |  | (optional) defaults to undefined
 **clientId** | [**string**] |  | (optional) defaults to undefined
 **clientSecret** | [**string**] |  | (optional) defaults to undefined
 **refreshToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**TokenResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


