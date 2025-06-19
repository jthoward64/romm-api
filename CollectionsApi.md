# .CollectionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCollectionApiCollectionsPost**](CollectionsApi.md#addCollectionApiCollectionsPost) | **POST** /api/collections | Add Collection
[**deleteCollectionsApiCollectionsIdDelete**](CollectionsApi.md#deleteCollectionsApiCollectionsIdDelete) | **DELETE** /api/collections/{id} | Delete Collections
[**getCollectionApiCollectionsIdGet**](CollectionsApi.md#getCollectionApiCollectionsIdGet) | **GET** /api/collections/{id} | Get Collection
[**getCollectionsApiCollectionsGet**](CollectionsApi.md#getCollectionsApiCollectionsGet) | **GET** /api/collections | Get Collections
[**getVirtualCollectionApiCollectionsVirtualIdGet**](CollectionsApi.md#getVirtualCollectionApiCollectionsVirtualIdGet) | **GET** /api/collections/virtual/{id} | Get Virtual Collection
[**getVirtualCollectionsApiCollectionsVirtualGet**](CollectionsApi.md#getVirtualCollectionsApiCollectionsVirtualGet) | **GET** /api/collections/virtual | Get Virtual Collections
[**updateCollectionApiCollectionsIdPut**](CollectionsApi.md#updateCollectionApiCollectionsIdPut) | **PUT** /api/collections/{id} | Update Collection


# **addCollectionApiCollectionsPost**
> CollectionSchema addCollectionApiCollectionsPost()

Create collection endpoint  Args:     request (Request): Fastapi Request object  Returns:     CollectionSchema: Just created collection

### Example


```typescript
import { createConfiguration, CollectionsApi } from '';
import type { CollectionsApiAddCollectionApiCollectionsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CollectionsApi(configuration);

const request: CollectionsApiAddCollectionApiCollectionsPostRequest = {
  
  artwork: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

const data = await apiInstance.addCollectionApiCollectionsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **artwork** | [**HttpFile**] |  | (optional) defaults to undefined


### Return type

**CollectionSchema**

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

# **deleteCollectionsApiCollectionsIdDelete**
> MessageResponse deleteCollectionsApiCollectionsIdDelete()

Delete collections endpoint  Args:     request (Request): Fastapi Request object     {         \"collections\": List of rom\'s ids to delete     }  Raises:     HTTPException: Collection not found  Returns:     MessageResponse: Standard message response

### Example


```typescript
import { createConfiguration, CollectionsApi } from '';
import type { CollectionsApiDeleteCollectionsApiCollectionsIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CollectionsApi(configuration);

const request: CollectionsApiDeleteCollectionsApiCollectionsIdDeleteRequest = {
  
  id: 1,
};

const data = await apiInstance.deleteCollectionsApiCollectionsIdDelete(request);
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

# **getCollectionApiCollectionsIdGet**
> CollectionSchema getCollectionApiCollectionsIdGet()

Get collections endpoint  Args:     request (Request): Fastapi Request object     id (int, optional): Collection id. Defaults to None.  Returns:     CollectionSchema: Collection

### Example


```typescript
import { createConfiguration, CollectionsApi } from '';
import type { CollectionsApiGetCollectionApiCollectionsIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CollectionsApi(configuration);

const request: CollectionsApiGetCollectionApiCollectionsIdGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getCollectionApiCollectionsIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**CollectionSchema**

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

# **getCollectionsApiCollectionsGet**
> Array<CollectionSchema> getCollectionsApiCollectionsGet()

Get collections endpoint  Args:     request (Request): Fastapi Request object     id (int, optional): Collection id. Defaults to None.  Returns:     list[CollectionSchema]: List of collections

### Example


```typescript
import { createConfiguration, CollectionsApi } from '';

const configuration = createConfiguration();
const apiInstance = new CollectionsApi(configuration);

const request = {};

const data = await apiInstance.getCollectionsApiCollectionsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<CollectionSchema>**

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

# **getVirtualCollectionApiCollectionsVirtualIdGet**
> VirtualCollectionSchema getVirtualCollectionApiCollectionsVirtualIdGet()

Get virtual collections endpoint  Args:     request (Request): Fastapi Request object     id (str): Virtual collection id  Returns:     VirtualCollectionSchema: Virtual collection

### Example


```typescript
import { createConfiguration, CollectionsApi } from '';
import type { CollectionsApiGetVirtualCollectionApiCollectionsVirtualIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CollectionsApi(configuration);

const request: CollectionsApiGetVirtualCollectionApiCollectionsVirtualIdGetRequest = {
  
  id: "id_example",
};

const data = await apiInstance.getVirtualCollectionApiCollectionsVirtualIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**VirtualCollectionSchema**

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

# **getVirtualCollectionsApiCollectionsVirtualGet**
> Array<VirtualCollectionSchema> getVirtualCollectionsApiCollectionsVirtualGet()

Get virtual collections endpoint  Args:     request (Request): Fastapi Request object  Returns:     list[VirtualCollectionSchema]: List of virtual collections

### Example


```typescript
import { createConfiguration, CollectionsApi } from '';
import type { CollectionsApiGetVirtualCollectionsApiCollectionsVirtualGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CollectionsApi(configuration);

const request: CollectionsApiGetVirtualCollectionsApiCollectionsVirtualGetRequest = {
  
  type: "type_example",
  
  limit: 1,
};

const data = await apiInstance.getVirtualCollectionsApiCollectionsVirtualGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**string**] |  | defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined


### Return type

**Array<VirtualCollectionSchema>**

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

# **updateCollectionApiCollectionsIdPut**
> CollectionSchema updateCollectionApiCollectionsIdPut()

Update collection endpoint  Args:     request (Request): Fastapi Request object  Returns:     MessageResponse: Standard message response

### Example


```typescript
import { createConfiguration, CollectionsApi } from '';
import type { CollectionsApiUpdateCollectionApiCollectionsIdPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CollectionsApi(configuration);

const request: CollectionsApiUpdateCollectionApiCollectionsIdPutRequest = {
  
  id: 1,
  
  removeCover: false,
  
  isPublic: true,
  
  artwork: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

const data = await apiInstance.updateCollectionApiCollectionsIdPut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **removeCover** | [**boolean**] |  | (optional) defaults to false
 **isPublic** | [**boolean**] |  | (optional) defaults to undefined
 **artwork** | [**HttpFile**] |  | (optional) defaults to undefined


### Return type

**CollectionSchema**

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


