# .ScreenshotsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addScreenshotApiScreenshotsPost**](ScreenshotsApi.md#addScreenshotApiScreenshotsPost) | **POST** /api/screenshots | Add Screenshot


# **addScreenshotApiScreenshotsPost**
> ScreenshotSchema addScreenshotApiScreenshotsPost()


### Example


```typescript
import { createConfiguration, ScreenshotsApi } from '';
import type { ScreenshotsApiAddScreenshotApiScreenshotsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScreenshotsApi(configuration);

const request: ScreenshotsApiAddScreenshotApiScreenshotsPostRequest = {
  
  romId: 1,
};

const data = await apiInstance.addScreenshotApiScreenshotsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **romId** | [**number**] |  | defaults to undefined


### Return type

**ScreenshotSchema**

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


