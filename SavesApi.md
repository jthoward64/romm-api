# .SavesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSaveApiSavesPost**](SavesApi.md#addSaveApiSavesPost) | **POST** /api/saves | Add Save
[**deleteSavesApiSavesDeletePost**](SavesApi.md#deleteSavesApiSavesDeletePost) | **POST** /api/saves/delete | Delete Saves
[**getSaveApiSavesIdGet**](SavesApi.md#getSaveApiSavesIdGet) | **GET** /api/saves/{id} | Get Save
[**getSavesApiSavesGet**](SavesApi.md#getSavesApiSavesGet) | **GET** /api/saves | Get Saves
[**updateSaveApiSavesIdPut**](SavesApi.md#updateSaveApiSavesIdPut) | **PUT** /api/saves/{id} | Update Save


# **addSaveApiSavesPost**
> SaveSchema addSaveApiSavesPost()


### Example


```typescript
import { createConfiguration, SavesApi } from '';
import type { SavesApiAddSaveApiSavesPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SavesApi(configuration);

const request: SavesApiAddSaveApiSavesPostRequest = {
  
  romId: 1,
  
  emulator: "emulator_example",
};

const data = await apiInstance.addSaveApiSavesPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **romId** | [**number**] |  | defaults to undefined
 **emulator** | [**string**] |  | (optional) defaults to undefined


### Return type

**SaveSchema**

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

# **deleteSavesApiSavesDeletePost**
> Array<number | null> deleteSavesApiSavesDeletePost()


### Example


```typescript
import { createConfiguration, SavesApi } from '';

const configuration = createConfiguration();
const apiInstance = new SavesApi(configuration);

const request = {};

const data = await apiInstance.deleteSavesApiSavesDeletePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<number | null>**

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

# **getSaveApiSavesIdGet**
> SaveSchema getSaveApiSavesIdGet()


### Example


```typescript
import { createConfiguration, SavesApi } from '';
import type { SavesApiGetSaveApiSavesIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SavesApi(configuration);

const request: SavesApiGetSaveApiSavesIdGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getSaveApiSavesIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**SaveSchema**

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

# **getSavesApiSavesGet**
> Array<SaveSchema> getSavesApiSavesGet()


### Example


```typescript
import { createConfiguration, SavesApi } from '';
import type { SavesApiGetSavesApiSavesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SavesApi(configuration);

const request: SavesApiGetSavesApiSavesGetRequest = {
  
  romId: 1,
  
  platformId: 1,
};

const data = await apiInstance.getSavesApiSavesGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **romId** | [**number**] |  | (optional) defaults to undefined
 **platformId** | [**number**] |  | (optional) defaults to undefined


### Return type

**Array<SaveSchema>**

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

# **updateSaveApiSavesIdPut**
> SaveSchema updateSaveApiSavesIdPut()


### Example


```typescript
import { createConfiguration, SavesApi } from '';
import type { SavesApiUpdateSaveApiSavesIdPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SavesApi(configuration);

const request: SavesApiUpdateSaveApiSavesIdPutRequest = {
  
  id: 1,
};

const data = await apiInstance.updateSaveApiSavesIdPut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**SaveSchema**

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


