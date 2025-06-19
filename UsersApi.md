# .UsersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUserApiUsersPost**](UsersApi.md#addUserApiUsersPost) | **POST** /api/users | Add User
[**createInviteLinkApiUsersInviteLinkPost**](UsersApi.md#createInviteLinkApiUsersInviteLinkPost) | **POST** /api/users/invite-link | Create Invite Link
[**createUserFromInviteApiUsersRegisterPost**](UsersApi.md#createUserFromInviteApiUsersRegisterPost) | **POST** /api/users/register | Create User From Invite
[**deleteUserApiUsersIdDelete**](UsersApi.md#deleteUserApiUsersIdDelete) | **DELETE** /api/users/{id} | Delete User
[**getCurrentUserApiUsersMeGet**](UsersApi.md#getCurrentUserApiUsersMeGet) | **GET** /api/users/me | Get Current User
[**getUserApiUsersIdGet**](UsersApi.md#getUserApiUsersIdGet) | **GET** /api/users/{id} | Get User
[**getUsersApiUsersGet**](UsersApi.md#getUsersApiUsersGet) | **GET** /api/users | Get Users
[**refreshRetroAchievementsApiUsersIdRaRefreshPost**](UsersApi.md#refreshRetroAchievementsApiUsersIdRaRefreshPost) | **POST** /api/users/{id}/ra/refresh | Refresh Retro Achievements
[**updateUserApiUsersIdPut**](UsersApi.md#updateUserApiUsersIdPut) | **PUT** /api/users/{id} | Update User


# **addUserApiUsersPost**
> UserSchema addUserApiUsersPost()

Create user endpoint  Args:     request (Request): Fastapi Requests object     username (str): User username     password (str): User password     email (str): User email     role (str): RomM Role object represented as string  Returns:     UserSchema: Newly created user

### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiAddUserApiUsersPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiAddUserApiUsersPostRequest = {
  
  username: "username_example",
  
  password: "password_example",
  
  email: "email_example",
  
  role: "role_example",
};

const data = await apiInstance.addUserApiUsersPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | [**string**] |  | defaults to undefined
 **password** | [**string**] |  | defaults to undefined
 **email** | [**string**] |  | defaults to undefined
 **role** | [**string**] |  | defaults to undefined


### Return type

**UserSchema**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer), [HTTPBasic](README.md#HTTPBasic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createInviteLinkApiUsersInviteLinkPost**
> InviteLinkSchema createInviteLinkApiUsersInviteLinkPost()

Create an invite link for a user.  Args:     request (Request): FastAPI Request object     role (str): The role of the user  Returns:     InviteLinkSchema: Invite link

### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiCreateInviteLinkApiUsersInviteLinkPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiCreateInviteLinkApiUsersInviteLinkPostRequest = {
  
  role: "role_example",
};

const data = await apiInstance.createInviteLinkApiUsersInviteLinkPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role** | [**string**] |  | defaults to undefined


### Return type

**InviteLinkSchema**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer), [HTTPBasic](README.md#HTTPBasic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createUserFromInviteApiUsersRegisterPost**
> UserSchema createUserFromInviteApiUsersRegisterPost(bodyCreateUserFromInviteApiUsersRegisterPost)

Create user endpoint with invite link  Args:     username (str): User username     email (str): User email     password (str): User password     token (str): Invite link token  Returns:     UserSchema: Newly created user

### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiCreateUserFromInviteApiUsersRegisterPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiCreateUserFromInviteApiUsersRegisterPostRequest = {
  
  bodyCreateUserFromInviteApiUsersRegisterPost: {
    username: "username_example",
    email: "email_example",
    password: "password_example",
    token: "token_example",
  },
};

const data = await apiInstance.createUserFromInviteApiUsersRegisterPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bodyCreateUserFromInviteApiUsersRegisterPost** | **BodyCreateUserFromInviteApiUsersRegisterPost**|  |


### Return type

**UserSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteUserApiUsersIdDelete**
> MessageResponse deleteUserApiUsersIdDelete()

Delete user endpoint  Args:     request (Request): Fastapi Request object     user_id (int): User internal id  Raises:     HTTPException: User is not found in database     HTTPException: User deleting itself     HTTPException: User is the last admin user  Returns:     MessageResponse: Standard message response

### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiDeleteUserApiUsersIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiDeleteUserApiUsersIdDeleteRequest = {
  
  id: 1,
};

const data = await apiInstance.deleteUserApiUsersIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**MessageResponse**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer), [HTTPBasic](README.md#HTTPBasic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCurrentUserApiUsersMeGet**
> UserSchema getCurrentUserApiUsersMeGet()

Get current user endpoint  Args:     request (Request): Fastapi Request object  Returns:     UserSchema | None: Current user

### Example


```typescript
import { createConfiguration, UsersApi } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request = {};

const data = await apiInstance.getCurrentUserApiUsersMeGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**UserSchema**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer), [HTTPBasic](README.md#HTTPBasic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getUserApiUsersIdGet**
> UserSchema getUserApiUsersIdGet()

Get user endpoint  Args:     request (Request): Fastapi Request object  Returns:     UserSchem: User stored in the RomM\'s database

### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiGetUserApiUsersIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiGetUserApiUsersIdGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getUserApiUsersIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**UserSchema**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer), [HTTPBasic](README.md#HTTPBasic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getUsersApiUsersGet**
> Array<UserSchema> getUsersApiUsersGet()

Get all users endpoint  Args:     request (Request): Fastapi Request object  Returns:     list[UserSchema]: All users stored in the RomM\'s database

### Example


```typescript
import { createConfiguration, UsersApi } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request = {};

const data = await apiInstance.getUsersApiUsersGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<UserSchema>**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer), [HTTPBasic](README.md#HTTPBasic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **refreshRetroAchievementsApiUsersIdRaRefreshPost**
> MessageResponse refreshRetroAchievementsApiUsersIdRaRefreshPost()


### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiRefreshRetroAchievementsApiUsersIdRaRefreshPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiRefreshRetroAchievementsApiUsersIdRaRefreshPostRequest = {
  
  id: 1,
};

const data = await apiInstance.refreshRetroAchievementsApiUsersIdRaRefreshPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**MessageResponse**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer), [HTTPBasic](README.md#HTTPBasic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateUserApiUsersIdPut**
> UserSchema updateUserApiUsersIdPut()

Update user endpoint  Args:     request (Request): Fastapi Requests object     user_id (int): User internal id     form_data (Annotated[UserUpdateForm, Depends): Form Data with user updated info  Raises:     HTTPException: User is not found in database     HTTPException: Username already in use by another user  Returns:     UserSchema: Updated user info

### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiUpdateUserApiUsersIdPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiUpdateUserApiUsersIdPutRequest = {
  
  id: 1,
  
  username: "username_example",
  
  password: "password_example",
  
  email: "email_example",
  
  role: "role_example",
  
  enabled: true,
  
  raUsername: "ra_username_example",
  
  avatar: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

const data = await apiInstance.updateUserApiUsersIdPut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **username** | [**string**] |  | (optional) defaults to undefined
 **password** | [**string**] |  | (optional) defaults to undefined
 **email** | [**string**] |  | (optional) defaults to undefined
 **role** | [**string**] |  | (optional) defaults to undefined
 **enabled** | [**boolean**] |  | (optional) defaults to undefined
 **raUsername** | [**string**] |  | (optional) defaults to undefined
 **avatar** | [**HttpFile**] |  | (optional) defaults to undefined


### Return type

**UserSchema**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer), [HTTPBasic](README.md#HTTPBasic)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


