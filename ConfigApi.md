# .ConfigApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addExclusionApiConfigExcludePost**](ConfigApi.md#addExclusionApiConfigExcludePost) | **POST** /api/config/exclude | Add Exclusion
[**addPlatformBindingApiConfigSystemPlatformsPost**](ConfigApi.md#addPlatformBindingApiConfigSystemPlatformsPost) | **POST** /api/config/system/platforms | Add Platform Binding
[**addPlatformVersionApiConfigSystemVersionsPost**](ConfigApi.md#addPlatformVersionApiConfigSystemVersionsPost) | **POST** /api/config/system/versions | Add Platform Version
[**deleteExclusionApiConfigExcludeExclusionTypeExclusionValueDelete**](ConfigApi.md#deleteExclusionApiConfigExcludeExclusionTypeExclusionValueDelete) | **DELETE** /api/config/exclude/{exclusion_type}/{exclusion_value} | Delete Exclusion
[**deletePlatformBindingApiConfigSystemPlatformsFsSlugDelete**](ConfigApi.md#deletePlatformBindingApiConfigSystemPlatformsFsSlugDelete) | **DELETE** /api/config/system/platforms/{fs_slug} | Delete Platform Binding
[**deletePlatformVersionApiConfigSystemVersionsFsSlugDelete**](ConfigApi.md#deletePlatformVersionApiConfigSystemVersionsFsSlugDelete) | **DELETE** /api/config/system/versions/{fs_slug} | Delete Platform Version
[**getConfigApiConfigGet**](ConfigApi.md#getConfigApiConfigGet) | **GET** /api/config | Get Config


# **addExclusionApiConfigExcludePost**
> MessageResponse addExclusionApiConfigExcludePost()

Add platform exclusion to the configuration

### Example


```typescript
import { createConfiguration, ConfigApi } from '';

const configuration = createConfiguration();
const apiInstance = new ConfigApi(configuration);

const request = {};

const data = await apiInstance.addExclusionApiConfigExcludePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **addPlatformBindingApiConfigSystemPlatformsPost**
> MessageResponse addPlatformBindingApiConfigSystemPlatformsPost()

Add platform binding to the configuration

### Example


```typescript
import { createConfiguration, ConfigApi } from '';

const configuration = createConfiguration();
const apiInstance = new ConfigApi(configuration);

const request = {};

const data = await apiInstance.addPlatformBindingApiConfigSystemPlatformsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **addPlatformVersionApiConfigSystemVersionsPost**
> MessageResponse addPlatformVersionApiConfigSystemVersionsPost()

Add platform version to the configuration

### Example


```typescript
import { createConfiguration, ConfigApi } from '';

const configuration = createConfiguration();
const apiInstance = new ConfigApi(configuration);

const request = {};

const data = await apiInstance.addPlatformVersionApiConfigSystemVersionsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteExclusionApiConfigExcludeExclusionTypeExclusionValueDelete**
> MessageResponse deleteExclusionApiConfigExcludeExclusionTypeExclusionValueDelete()

Delete platform binding from the configuration

### Example


```typescript
import { createConfiguration, ConfigApi } from '';
import type { ConfigApiDeleteExclusionApiConfigExcludeExclusionTypeExclusionValueDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConfigApi(configuration);

const request: ConfigApiDeleteExclusionApiConfigExcludeExclusionTypeExclusionValueDeleteRequest = {
  
  exclusionType: "exclusion_type_example",
  
  exclusionValue: "exclusion_value_example",
};

const data = await apiInstance.deleteExclusionApiConfigExcludeExclusionTypeExclusionValueDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exclusionType** | [**string**] |  | defaults to undefined
 **exclusionValue** | [**string**] |  | defaults to undefined


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

# **deletePlatformBindingApiConfigSystemPlatformsFsSlugDelete**
> MessageResponse deletePlatformBindingApiConfigSystemPlatformsFsSlugDelete()

Delete platform binding from the configuration

### Example


```typescript
import { createConfiguration, ConfigApi } from '';
import type { ConfigApiDeletePlatformBindingApiConfigSystemPlatformsFsSlugDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConfigApi(configuration);

const request: ConfigApiDeletePlatformBindingApiConfigSystemPlatformsFsSlugDeleteRequest = {
  
  fsSlug: "fs_slug_example",
};

const data = await apiInstance.deletePlatformBindingApiConfigSystemPlatformsFsSlugDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fsSlug** | [**string**] |  | defaults to undefined


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

# **deletePlatformVersionApiConfigSystemVersionsFsSlugDelete**
> MessageResponse deletePlatformVersionApiConfigSystemVersionsFsSlugDelete()

Delete platform version from the configuration

### Example


```typescript
import { createConfiguration, ConfigApi } from '';
import type { ConfigApiDeletePlatformVersionApiConfigSystemVersionsFsSlugDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConfigApi(configuration);

const request: ConfigApiDeletePlatformVersionApiConfigSystemVersionsFsSlugDeleteRequest = {
  
  fsSlug: "fs_slug_example",
};

const data = await apiInstance.deletePlatformVersionApiConfigSystemVersionsFsSlugDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fsSlug** | [**string**] |  | defaults to undefined


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

# **getConfigApiConfigGet**
> ConfigResponse getConfigApiConfigGet()

Get config endpoint  Returns:     ConfigResponse: RomM\'s configuration

### Example


```typescript
import { createConfiguration, ConfigApi } from '';

const configuration = createConfiguration();
const apiInstance = new ConfigApi(configuration);

const request = {};

const data = await apiInstance.getConfigApiConfigGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ConfigResponse**

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


