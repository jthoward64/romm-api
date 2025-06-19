# .FirmwareApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFirmwareApiFirmwarePost**](FirmwareApi.md#addFirmwareApiFirmwarePost) | **POST** /api/firmware | Add Firmware
[**deleteFirmwareApiFirmwareDeletePost**](FirmwareApi.md#deleteFirmwareApiFirmwareDeletePost) | **POST** /api/firmware/delete | Delete Firmware
[**getFirmwareApiFirmwareIdGet**](FirmwareApi.md#getFirmwareApiFirmwareIdGet) | **GET** /api/firmware/{id} | Get Firmware
[**getFirmwareContentApiFirmwareIdContentFileNameGet**](FirmwareApi.md#getFirmwareContentApiFirmwareIdContentFileNameGet) | **GET** /api/firmware/{id}/content/{file_name} | Get Firmware Content
[**getPlatformFirmwareApiFirmwareGet**](FirmwareApi.md#getPlatformFirmwareApiFirmwareGet) | **GET** /api/firmware | Get Platform Firmware
[**headFirmwareContentApiFirmwareIdContentFileNameHead**](FirmwareApi.md#headFirmwareContentApiFirmwareIdContentFileNameHead) | **HEAD** /api/firmware/{id}/content/{file_name} | Head Firmware Content


# **addFirmwareApiFirmwarePost**
> AddFirmwareResponse addFirmwareApiFirmwarePost()

Upload firmware files endpoint  Args:     request (Request): Fastapi Request object     platform_slug (str): Slug of the platform where to upload the files     files (list[UploadFile], optional): List of files to upload  Raises:     HTTPException  Returns:     AddFirmwareResponse: Standard message response

### Example


```typescript
import { createConfiguration, FirmwareApi } from '';
import type { FirmwareApiAddFirmwareApiFirmwarePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirmwareApi(configuration);

const request: FirmwareApiAddFirmwareApiFirmwarePostRequest = {
  
  platformId: 1,
  
  files: [
    { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
  ],
};

const data = await apiInstance.addFirmwareApiFirmwarePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **platformId** | [**number**] |  | defaults to undefined
 **files** | **Array&lt;HttpFile&gt;** |  | defaults to undefined


### Return type

**AddFirmwareResponse**

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

# **deleteFirmwareApiFirmwareDeletePost**
> MessageResponse deleteFirmwareApiFirmwareDeletePost()

Delete firmware endpoint  Args:     request (Request): Fastapi Request object.         {             \"firmware\": List of firmware IDs to delete         }     delete_from_fs (bool, optional): Flag to delete rom from filesystem. Defaults to False.  Returns:     MessageResponse: Standard message response

### Example


```typescript
import { createConfiguration, FirmwareApi } from '';

const configuration = createConfiguration();
const apiInstance = new FirmwareApi(configuration);

const request = {};

const data = await apiInstance.deleteFirmwareApiFirmwareDeletePost(request);
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

# **getFirmwareApiFirmwareIdGet**
> FirmwareSchema getFirmwareApiFirmwareIdGet()

Get firmware endpoint  Args:     request (Request): Fastapi Request object     id (int): Firmware internal id  Returns:     FirmwareSchema: Firmware stored in the database

### Example


```typescript
import { createConfiguration, FirmwareApi } from '';
import type { FirmwareApiGetFirmwareApiFirmwareIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirmwareApi(configuration);

const request: FirmwareApiGetFirmwareApiFirmwareIdGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getFirmwareApiFirmwareIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**FirmwareSchema**

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

# **getFirmwareContentApiFirmwareIdContentFileNameGet**
> any getFirmwareContentApiFirmwareIdContentFileNameGet()

Download firmware endpoint  Args:     request (Request): Fastapi Request object     id (int): Rom internal id     file_name (str): Required due to a bug in emulatorjs  Returns:     FileResponse: Returns the firmware file

### Example


```typescript
import { createConfiguration, FirmwareApi } from '';
import type { FirmwareApiGetFirmwareContentApiFirmwareIdContentFileNameGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirmwareApi(configuration);

const request: FirmwareApiGetFirmwareContentApiFirmwareIdContentFileNameGetRequest = {
  
  id: 1,
  
  fileName: "file_name_example",
};

const data = await apiInstance.getFirmwareContentApiFirmwareIdContentFileNameGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **fileName** | [**string**] |  | defaults to undefined


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

# **getPlatformFirmwareApiFirmwareGet**
> Array<FirmwareSchema> getPlatformFirmwareApiFirmwareGet()

Get firmware endpoint  Args:     request (Request): Fastapi Request object  Returns:     list[FirmwareSchema]: Firmware stored in the database

### Example


```typescript
import { createConfiguration, FirmwareApi } from '';
import type { FirmwareApiGetPlatformFirmwareApiFirmwareGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirmwareApi(configuration);

const request: FirmwareApiGetPlatformFirmwareApiFirmwareGetRequest = {
  
  platformId: 1,
};

const data = await apiInstance.getPlatformFirmwareApiFirmwareGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **platformId** | [**number**] |  | (optional) defaults to undefined


### Return type

**Array<FirmwareSchema>**

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

# **headFirmwareContentApiFirmwareIdContentFileNameHead**
> any headFirmwareContentApiFirmwareIdContentFileNameHead()

Head firmware content endpoint  Args:     request (Request): Fastapi Request object     id (int): Rom internal id     file_name (str): Required due to a bug in emulatorjs  Returns:     FileResponse: Returns the response with headers

### Example


```typescript
import { createConfiguration, FirmwareApi } from '';
import type { FirmwareApiHeadFirmwareContentApiFirmwareIdContentFileNameHeadRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirmwareApi(configuration);

const request: FirmwareApiHeadFirmwareContentApiFirmwareIdContentFileNameHeadRequest = {
  
  id: 1,
  
  fileName: "file_name_example",
};

const data = await apiInstance.headFirmwareContentApiFirmwareIdContentFileNameHead(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **fileName** | [**string**] |  | defaults to undefined


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


