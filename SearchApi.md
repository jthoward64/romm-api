# .SearchApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchCoverApiSearchCoverGet**](SearchApi.md#searchCoverApiSearchCoverGet) | **GET** /api/search/cover | Search Cover
[**searchRomApiSearchRomsGet**](SearchApi.md#searchRomApiSearchRomsGet) | **GET** /api/search/roms | Search Rom


# **searchCoverApiSearchCoverGet**
> Array<SearchCoverSchema> searchCoverApiSearchCoverGet()


### Example


```typescript
import { createConfiguration, SearchApi } from '';
import type { SearchApiSearchCoverApiSearchCoverGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SearchApi(configuration);

const request: SearchApiSearchCoverApiSearchCoverGetRequest = {
  
  searchTerm: "",
};

const data = await apiInstance.searchCoverApiSearchCoverGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchTerm** | [**string**] |  | (optional) defaults to ''


### Return type

**Array<SearchCoverSchema>**

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

# **searchRomApiSearchRomsGet**
> Array<SearchRomSchema> searchRomApiSearchRomsGet()

Search for rom in metadata providers  Args:     request (Request): FastAPI request     rom_id (int): Rom ID     source (str): Source of the rom     search_term (str, optional): Search term. Defaults to None.     search_by (str, optional): Search by name or ID. Defaults to \"name\".     search_extended (bool, optional): Search extended info. Defaults to False.  Returns:     list[SearchRomSchema]: List of matched roms

### Example


```typescript
import { createConfiguration, SearchApi } from '';
import type { SearchApiSearchRomApiSearchRomsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SearchApi(configuration);

const request: SearchApiSearchRomApiSearchRomsGetRequest = {
  
  romId: 1,
  
  searchTerm: "search_term_example",
  
  searchBy: "name",
};

const data = await apiInstance.searchRomApiSearchRomsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **romId** | [**number**] |  | defaults to undefined
 **searchTerm** | [**string**] |  | (optional) defaults to undefined
 **searchBy** | [**string**] |  | (optional) defaults to 'name'


### Return type

**Array<SearchRomSchema>**

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


