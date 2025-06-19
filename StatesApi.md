# .StatesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addStateApiStatesPost**](StatesApi.md#addStateApiStatesPost) | **POST** /api/states | Add State
[**deleteStatesApiStatesDeletePost**](StatesApi.md#deleteStatesApiStatesDeletePost) | **POST** /api/states/delete | Delete States
[**getStateApiStatesIdGet**](StatesApi.md#getStateApiStatesIdGet) | **GET** /api/states/{id} | Get State
[**getStatesApiStatesGet**](StatesApi.md#getStatesApiStatesGet) | **GET** /api/states | Get States
[**updateStateApiStatesIdPut**](StatesApi.md#updateStateApiStatesIdPut) | **PUT** /api/states/{id} | Update State


# **addStateApiStatesPost**
> StateSchema addStateApiStatesPost()


### Example


```typescript
import { createConfiguration, StatesApi } from '';
import type { StatesApiAddStateApiStatesPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new StatesApi(configuration);

const request: StatesApiAddStateApiStatesPostRequest = {
  
  romId: 1,
  
  emulator: "emulator_example",
};

const data = await apiInstance.addStateApiStatesPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **romId** | [**number**] |  | defaults to undefined
 **emulator** | [**string**] |  | (optional) defaults to undefined


### Return type

**StateSchema**

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

# **deleteStatesApiStatesDeletePost**
> Array<number | null> deleteStatesApiStatesDeletePost()


### Example


```typescript
import { createConfiguration, StatesApi } from '';

const configuration = createConfiguration();
const apiInstance = new StatesApi(configuration);

const request = {};

const data = await apiInstance.deleteStatesApiStatesDeletePost(request);
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

# **getStateApiStatesIdGet**
> StateSchema getStateApiStatesIdGet()


### Example


```typescript
import { createConfiguration, StatesApi } from '';
import type { StatesApiGetStateApiStatesIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new StatesApi(configuration);

const request: StatesApiGetStateApiStatesIdGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getStateApiStatesIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**StateSchema**

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

# **getStatesApiStatesGet**
> Array<StateSchema> getStatesApiStatesGet()


### Example


```typescript
import { createConfiguration, StatesApi } from '';
import type { StatesApiGetStatesApiStatesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new StatesApi(configuration);

const request: StatesApiGetStatesApiStatesGetRequest = {
  
  romId: 1,
  
  platformId: 1,
};

const data = await apiInstance.getStatesApiStatesGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **romId** | [**number**] |  | (optional) defaults to undefined
 **platformId** | [**number**] |  | (optional) defaults to undefined


### Return type

**Array<StateSchema>**

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

# **updateStateApiStatesIdPut**
> StateSchema updateStateApiStatesIdPut()


### Example


```typescript
import { createConfiguration, StatesApi } from '';
import type { StatesApiUpdateStateApiStatesIdPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new StatesApi(configuration);

const request: StatesApiUpdateStateApiStatesIdPutRequest = {
  
  id: 1,
};

const data = await apiInstance.updateStateApiStatesIdPut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**StateSchema**

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


