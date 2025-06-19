# .PlatformsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPlatformsApiPlatformsPost**](PlatformsApi.md#addPlatformsApiPlatformsPost) | **POST** /api/platforms | Add Platforms
[**deletePlatformsApiPlatformsIdDelete**](PlatformsApi.md#deletePlatformsApiPlatformsIdDelete) | **DELETE** /api/platforms/{id} | Delete Platforms
[**getPlatformApiPlatformsIdGet**](PlatformsApi.md#getPlatformApiPlatformsIdGet) | **GET** /api/platforms/{id} | Get Platform
[**getPlatformsApiPlatformsGet**](PlatformsApi.md#getPlatformsApiPlatformsGet) | **GET** /api/platforms | Get Platforms
[**getSupportedPlatformsApiPlatformsSupportedGet**](PlatformsApi.md#getSupportedPlatformsApiPlatformsSupportedGet) | **GET** /api/platforms/supported | Get Supported Platforms
[**updatePlatformApiPlatformsIdPut**](PlatformsApi.md#updatePlatformApiPlatformsIdPut) | **PUT** /api/platforms/{id} | Update Platform


# **addPlatformsApiPlatformsPost**
> PlatformSchema addPlatformsApiPlatformsPost()

Create platform endpoint  Args:     request (Request): Fastapi Request object  Returns:     PlatformSchema: Just created platform

### Example


```typescript
import { createConfiguration, PlatformsApi } from '';

const configuration = createConfiguration();
const apiInstance = new PlatformsApi(configuration);

const request = {};

const data = await apiInstance.addPlatformsApiPlatformsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**PlatformSchema**

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

# **deletePlatformsApiPlatformsIdDelete**
> MessageResponse deletePlatformsApiPlatformsIdDelete()

Delete platforms endpoint  Args:     request (Request): Fastapi Request object     {         \"platforms\": List of rom\'s ids to delete     }  Raises:     HTTPException: Platform not found  Returns:     MessageResponse: Standard message response

### Example


```typescript
import { createConfiguration, PlatformsApi } from '';
import type { PlatformsApiDeletePlatformsApiPlatformsIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PlatformsApi(configuration);

const request: PlatformsApiDeletePlatformsApiPlatformsIdDeleteRequest = {
  
  id: 1,
};

const data = await apiInstance.deletePlatformsApiPlatformsIdDelete(request);
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

# **getPlatformApiPlatformsIdGet**
> PlatformSchema getPlatformApiPlatformsIdGet()

Get platforms endpoint  Args:     request (Request): Fastapi Request object     id (int, optional): Platform id. Defaults to None.  Returns:     PlatformSchema: Platform

### Example


```typescript
import { createConfiguration, PlatformsApi } from '';
import type { PlatformsApiGetPlatformApiPlatformsIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PlatformsApi(configuration);

const request: PlatformsApiGetPlatformApiPlatformsIdGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getPlatformApiPlatformsIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**PlatformSchema**

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

# **getPlatformsApiPlatformsGet**
> Array<PlatformSchema> getPlatformsApiPlatformsGet()

Get platforms endpoint  Args:     request (Request): Fastapi Request object     id (int, optional): Platform id. Defaults to None.  Returns:     list[PlatformSchema]: List of platforms

### Example


```typescript
import { createConfiguration, PlatformsApi } from '';

const configuration = createConfiguration();
const apiInstance = new PlatformsApi(configuration);

const request = {};

const data = await apiInstance.getPlatformsApiPlatformsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<PlatformSchema>**

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

# **getSupportedPlatformsApiPlatformsSupportedGet**
> Array<PlatformSchema> getSupportedPlatformsApiPlatformsSupportedGet()

Get list of supported platforms endpoint  Args:     request (Request): Fastapi Request object  Returns:     list[PlatformSchema]: List of supported platforms

### Example


```typescript
import { createConfiguration, PlatformsApi } from '';

const configuration = createConfiguration();
const apiInstance = new PlatformsApi(configuration);

const request = {};

const data = await apiInstance.getSupportedPlatformsApiPlatformsSupportedGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<PlatformSchema>**

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

# **updatePlatformApiPlatformsIdPut**
> PlatformSchema updatePlatformApiPlatformsIdPut()

Update platform endpoint  Args:     request (Request): Fastapi Request object     id (int): Platform id  Returns:     MessageResponse: Standard message response

### Example


```typescript
import { createConfiguration, PlatformsApi } from '';
import type { PlatformsApiUpdatePlatformApiPlatformsIdPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PlatformsApi(configuration);

const request: PlatformsApiUpdatePlatformApiPlatformsIdPutRequest = {
  
  id: 1,
};

const data = await apiInstance.updatePlatformApiPlatformsIdPut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**PlatformSchema**

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


