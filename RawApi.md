# .RawApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRawAssetApiRawAssetsPathGet**](RawApi.md#getRawAssetApiRawAssetsPathGet) | **GET** /api/raw/assets/{path} | Get Raw Asset
[**headRawAssetApiRawAssetsPathHead**](RawApi.md#headRawAssetApiRawAssetsPathHead) | **HEAD** /api/raw/assets/{path} | Head Raw Asset


# **getRawAssetApiRawAssetsPathGet**
> any getRawAssetApiRawAssetsPathGet()

Download a single asset file  Args:     request (Request): Fastapi Request object  Returns:     FileResponse: Returns a single asset file

### Example


```typescript
import { createConfiguration, RawApi } from '';
import type { RawApiGetRawAssetApiRawAssetsPathGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RawApi(configuration);

const request: RawApiGetRawAssetApiRawAssetsPathGetRequest = {
  
  path: "path_example",
};

const data = await apiInstance.getRawAssetApiRawAssetsPathGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | [**string**] |  | defaults to undefined


### Return type

**any**

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

# **headRawAssetApiRawAssetsPathHead**
> any headRawAssetApiRawAssetsPathHead()


### Example


```typescript
import { createConfiguration, RawApi } from '';
import type { RawApiHeadRawAssetApiRawAssetsPathHeadRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RawApi(configuration);

const request: RawApiHeadRawAssetApiRawAssetsPathHeadRequest = {
  
  path: "path_example",
};

const data = await apiInstance.headRawAssetApiRawAssetsPathHead(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | [**string**] |  | defaults to undefined


### Return type

**any**

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


