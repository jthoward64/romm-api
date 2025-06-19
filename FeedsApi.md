# .FeedsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**platformsWebrcadeFeedApiWebrcadeFeedGet**](FeedsApi.md#platformsWebrcadeFeedApiWebrcadeFeedGet) | **GET** /api/webrcade/feed | Platforms Webrcade Feed
[**tinfoilIndexFeedApiTinfoilFeedGet**](FeedsApi.md#tinfoilIndexFeedApiTinfoilFeedGet) | **GET** /api/tinfoil/feed | Tinfoil Index Feed


# **platformsWebrcadeFeedApiWebrcadeFeedGet**
> WebrcadeFeedSchema platformsWebrcadeFeedApiWebrcadeFeedGet()

Get webrcade feed endpoint https://docs.webrcade.com/feeds/format/  Args:     request (Request): Fastapi Request object  Returns:     WebrcadeFeedSchema: Webrcade feed object schema

### Example


```typescript
import { createConfiguration, FeedsApi } from '';

const configuration = createConfiguration();
const apiInstance = new FeedsApi(configuration);

const request = {};

const data = await apiInstance.platformsWebrcadeFeedApiWebrcadeFeedGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**WebrcadeFeedSchema**

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

# **tinfoilIndexFeedApiTinfoilFeedGet**
> TinfoilFeedSchema tinfoilIndexFeedApiTinfoilFeedGet()

Get tinfoil custom index feed endpoint https://blawar.github.io/tinfoil/custom_index/  Args:     request (Request): Fastapi Request object     slug (str, optional): Platform slug. Defaults to \"switch\".  Returns:     TinfoilFeedSchema: Tinfoil feed object schema

### Example


```typescript
import { createConfiguration, FeedsApi } from '';
import type { FeedsApiTinfoilIndexFeedApiTinfoilFeedGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FeedsApi(configuration);

const request: FeedsApiTinfoilIndexFeedApiTinfoilFeedGetRequest = {
  
  slug: "switch",
};

const data = await apiInstance.tinfoilIndexFeedApiTinfoilFeedGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | [**string**] |  | (optional) defaults to 'switch'


### Return type

**TinfoilFeedSchema**

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


