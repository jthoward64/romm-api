# .RomsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addRomApiRomsPost**](RomsApi.md#addRomApiRomsPost) | **POST** /api/roms | Add Rom
[**addRomManualsApiRomsIdManualsPost**](RomsApi.md#addRomManualsApiRomsIdManualsPost) | **POST** /api/roms/{id}/manuals | Add Rom Manuals
[**deleteRomsApiRomsDeletePost**](RomsApi.md#deleteRomsApiRomsDeletePost) | **POST** /api/roms/delete | Delete Roms
[**getRomApiRomsIdGet**](RomsApi.md#getRomApiRomsIdGet) | **GET** /api/roms/{id} | Get Rom
[**getRomContentApiRomsIdContentFileNameGet**](RomsApi.md#getRomContentApiRomsIdContentFileNameGet) | **GET** /api/roms/{id}/content/{file_name} | Get Rom Content
[**getRomfileApiRomsfilesIdGet**](RomsApi.md#getRomfileApiRomsfilesIdGet) | **GET** /api/romsfiles/{id} | Get Romfile
[**getRomfileContentApiRomsfilesIdContentFileNameGet**](RomsApi.md#getRomfileContentApiRomsfilesIdContentFileNameGet) | **GET** /api/romsfiles/{id}/content/{file_name} | Get Romfile Content
[**getRomsApiRomsGet**](RomsApi.md#getRomsApiRomsGet) | **GET** /api/roms | Get Roms
[**headRomContentApiRomsIdContentFileNameHead**](RomsApi.md#headRomContentApiRomsIdContentFileNameHead) | **HEAD** /api/roms/{id}/content/{file_name} | Head Rom Content
[**updateRomApiRomsIdPut**](RomsApi.md#updateRomApiRomsIdPut) | **PUT** /api/roms/{id} | Update Rom
[**updateRomUserApiRomsIdPropsPut**](RomsApi.md#updateRomUserApiRomsIdPropsPut) | **PUT** /api/roms/{id}/props | Update Rom User


# **addRomApiRomsPost**
> any addRomApiRomsPost()

Upload single rom endpoint  Args:     request (Request): Fastapi Request object  Raises:     HTTPException: No files were uploaded

### Example


```typescript
import { createConfiguration, RomsApi } from '';

const configuration = createConfiguration();
const apiInstance = new RomsApi(configuration);

const request = {};

const data = await apiInstance.addRomApiRomsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **addRomManualsApiRomsIdManualsPost**
> any addRomManualsApiRomsIdManualsPost()

Upload manuals for a rom  Args:     request (Request): Fastapi Request object  Raises:     HTTPException: No files were uploaded

### Example


```typescript
import { createConfiguration, RomsApi } from '';
import type { RomsApiAddRomManualsApiRomsIdManualsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RomsApi(configuration);

const request: RomsApiAddRomManualsApiRomsIdManualsPostRequest = {
  
  id: 1,
};

const data = await apiInstance.addRomManualsApiRomsIdManualsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


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

# **deleteRomsApiRomsDeletePost**
> MessageResponse deleteRomsApiRomsDeletePost()

Delete roms endpoint  Args:     request (Request): Fastapi Request object.         {             \"roms\": List of rom\'s ids to delete         }     delete_from_fs (bool, optional): Flag to delete rom from filesystem. Defaults to False.  Returns:     MessageResponse: Standard message response

### Example


```typescript
import { createConfiguration, RomsApi } from '';

const configuration = createConfiguration();
const apiInstance = new RomsApi(configuration);

const request = {};

const data = await apiInstance.deleteRomsApiRomsDeletePost(request);
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

# **getRomApiRomsIdGet**
> DetailedRomSchema getRomApiRomsIdGet()

Get rom endpoint  Args:     request (Request): Fastapi Request object     id (int): Rom internal id  Returns:     DetailedRomSchema: Rom stored in the database

### Example


```typescript
import { createConfiguration, RomsApi } from '';
import type { RomsApiGetRomApiRomsIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RomsApi(configuration);

const request: RomsApiGetRomApiRomsIdGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getRomApiRomsIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**DetailedRomSchema**

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

# **getRomContentApiRomsIdContentFileNameGet**
> any getRomContentApiRomsIdContentFileNameGet()

Download rom endpoint (one single file or multiple zipped files for multi-part roms)  Args:     request (Request): Fastapi Request object     id (int): Rom internal id     file_name: Zip file output name  Returns:     Response: Returns a response with headers  Yields:     FileResponse: Returns one file for single file roms     FileRedirectResponse: Redirects to the file download path     ZipResponse: Returns a response for nginx to serve a Zip file for multi-part roms

### Example


```typescript
import { createConfiguration, RomsApi } from '';
import type { RomsApiGetRomContentApiRomsIdContentFileNameGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RomsApi(configuration);

const request: RomsApiGetRomContentApiRomsIdContentFileNameGetRequest = {
  
  id: 1,
  
  fileName: "file_name_example",
};

const data = await apiInstance.getRomContentApiRomsIdContentFileNameGet(request);
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

# **getRomfileApiRomsfilesIdGet**
> RomFileSchema getRomfileApiRomsfilesIdGet()


### Example


```typescript
import { createConfiguration, RomsApi } from '';
import type { RomsApiGetRomfileApiRomsfilesIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RomsApi(configuration);

const request: RomsApiGetRomfileApiRomsfilesIdGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getRomfileApiRomsfilesIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**RomFileSchema**

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

# **getRomfileContentApiRomsfilesIdContentFileNameGet**
> any getRomfileContentApiRomsfilesIdContentFileNameGet()

Download rom file endpoint  Args:     request (Request): Fastapi Request object     id (int): RomFile internal id     file_name (str): What to name the file when downloading  Returns:     FileResponse: Returns the response with headers

### Example


```typescript
import { createConfiguration, RomsApi } from '';
import type { RomsApiGetRomfileContentApiRomsfilesIdContentFileNameGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RomsApi(configuration);

const request: RomsApiGetRomfileContentApiRomsfilesIdContentFileNameGetRequest = {
  
  id: 1,
  
  fileName: "file_name_example",
};

const data = await apiInstance.getRomfileContentApiRomsfilesIdContentFileNameGet(request);
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

# **getRomsApiRomsGet**
> CustomLimitOffsetPageSimpleRomSchema getRomsApiRomsGet()

Get roms endpoint  Args:     request: Fastapi Request object     platform_id (int, optional): Platform internal id. Defaults to None.     collection_id (int, optional): Collection internal id. Defaults to None.     virtual_collection_id (str, optional): Virtual collection internal id. Defaults to None.     search_term (str, optional): Search term to filter roms. Defaults to None.     order_by (str, optional): Field to order by. Defaults to \"name\".     order_dir (str, optional): Order direction. Defaults to \"asc\".     matched (bool, optional): Filter for matched or unmatched roms. Defaults to None.     favourite (bool, optional): Filter for favourite or non-favourite roms. Defaults to None.     duplicate (bool, optional): Filter for duplicate or non-duplicate roms. Defaults to None.     playable (bool, optional): Filter for playable or non-playable roms. Defaults to None.     unmatched_only (bool, optional): Filter only unmatched roms. Defaults to False. DEPRECATED: use `matched` instead.     matched_only (bool, optional): Filter only matched roms. Defaults to False. DEPRECATED: use `matched` instead.     favourites_only (bool, optional): Filter only favourite roms. Defaults to False. DEPRECATED: use `favourite` instead.     duplicates_only (bool, optional): Filter only duplicate roms. Defaults to False. DEPRECATED: use `duplicate` instead.     playables_only (bool, optional): Filter only playable roms by emulatorjs. Defaults to False. DEPRECATED: use `playable` instead.     ra_only (bool, optional): Filter only roms with Retroachievements compatibility.     group_by_meta_id (bool, optional): Group roms by igdb/moby/ssrf ID. Defaults to False.     selected_genre (str, optional): Filter by genre. Defaults to None.     selected_franchise (str, optional): Filter by franchise. Defaults to None.     selected_collection (str, optional): Filter by collection. Defaults to None.     selected_company (str, optional): Filter by company. Defaults to None.     selected_age_rating (str, optional): Filter by age rating. Defaults to None.     selected_status (str, optional): Filter by status. Defaults to None.     selected_region (str, optional): Filter by region tag. Defaults to None.     selected_language (str, optional): Filter by language tag. Defaults to None.  Returns:     list[RomSchema | SimpleRomSchema]: List of ROMs stored in the database

### Example


```typescript
import { createConfiguration, RomsApi } from '';
import type { RomsApiGetRomsApiRomsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RomsApi(configuration);

const request: RomsApiGetRomsApiRomsGetRequest = {
  
  platformId: 1,
  
  collectionId: 1,
  
  virtualCollectionId: "virtual_collection_id_example",
  
  searchTerm: "search_term_example",
  
  orderBy: "name",
  
  orderDir: "asc",
  
  matched: true,
  
  favourite: true,
  
  duplicate: true,
  
  playable: true,
  
  unmatchedOnly: false,
  
  matchedOnly: false,
  
  favouritesOnly: false,
  
  duplicatesOnly: false,
  
  playablesOnly: false,
  
  raOnly: false,
  
  groupByMetaId: false,
  
  selectedGenre: "selected_genre_example",
  
  selectedFranchise: "selected_franchise_example",
  
  selectedCollection: "selected_collection_example",
  
  selectedCompany: "selected_company_example",
  
  selectedAgeRating: "selected_age_rating_example",
  
  selectedStatus: "selected_status_example",
  
  selectedRegion: "selected_region_example",
  
  selectedLanguage: "selected_language_example",
    // Page size limit (optional)
  limit: 50,
    // Page offset (optional)
  offset: 0,
};

const data = await apiInstance.getRomsApiRomsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **platformId** | [**number**] |  | (optional) defaults to undefined
 **collectionId** | [**number**] |  | (optional) defaults to undefined
 **virtualCollectionId** | [**string**] |  | (optional) defaults to undefined
 **searchTerm** | [**string**] |  | (optional) defaults to undefined
 **orderBy** | [**string**] |  | (optional) defaults to 'name'
 **orderDir** | [**string**] |  | (optional) defaults to 'asc'
 **matched** | [**boolean**] |  | (optional) defaults to undefined
 **favourite** | [**boolean**] |  | (optional) defaults to undefined
 **duplicate** | [**boolean**] |  | (optional) defaults to undefined
 **playable** | [**boolean**] |  | (optional) defaults to undefined
 **unmatchedOnly** | [**boolean**] |  | (optional) defaults to false
 **matchedOnly** | [**boolean**] |  | (optional) defaults to false
 **favouritesOnly** | [**boolean**] |  | (optional) defaults to false
 **duplicatesOnly** | [**boolean**] |  | (optional) defaults to false
 **playablesOnly** | [**boolean**] |  | (optional) defaults to false
 **raOnly** | [**boolean**] |  | (optional) defaults to false
 **groupByMetaId** | [**boolean**] |  | (optional) defaults to false
 **selectedGenre** | [**string**] |  | (optional) defaults to undefined
 **selectedFranchise** | [**string**] |  | (optional) defaults to undefined
 **selectedCollection** | [**string**] |  | (optional) defaults to undefined
 **selectedCompany** | [**string**] |  | (optional) defaults to undefined
 **selectedAgeRating** | [**string**] |  | (optional) defaults to undefined
 **selectedStatus** | [**string**] |  | (optional) defaults to undefined
 **selectedRegion** | [**string**] |  | (optional) defaults to undefined
 **selectedLanguage** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] | Page size limit | (optional) defaults to 50
 **offset** | [**number**] | Page offset | (optional) defaults to 0


### Return type

**CustomLimitOffsetPageSimpleRomSchema**

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

# **headRomContentApiRomsIdContentFileNameHead**
> any headRomContentApiRomsIdContentFileNameHead()

Head rom content endpoint  Args:     request (Request): Fastapi Request object     id (int): Rom internal id     file_name (str): File name to download     file_ids (list[int]): List of file ids to download for multi-part roms  Returns:     FileResponse: Returns the response with headers

### Example


```typescript
import { createConfiguration, RomsApi } from '';
import type { RomsApiHeadRomContentApiRomsIdContentFileNameHeadRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RomsApi(configuration);

const request: RomsApiHeadRomContentApiRomsIdContentFileNameHeadRequest = {
  
  id: 1,
  
  fileName: "file_name_example",
};

const data = await apiInstance.headRomContentApiRomsIdContentFileNameHead(request);
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

# **updateRomApiRomsIdPut**
> DetailedRomSchema updateRomApiRomsIdPut()

Update rom endpoint  Args:     request (Request): Fastapi Request object     id (Rom): Rom internal id     artwork (UploadFile, optional): Custom artwork to set as cover. Defaults to File(None).     unmatch_metadata: Remove the metadata matches for this game. Defaults to False.  Raises:     HTTPException: Rom not found in database  Returns:     DetailedRomSchema: Rom stored in the database

### Example


```typescript
import { createConfiguration, RomsApi } from '';
import type { RomsApiUpdateRomApiRomsIdPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RomsApi(configuration);

const request: RomsApiUpdateRomApiRomsIdPutRequest = {
  
  id: 1,
  
  removeCover: false,
  
  unmatchMetadata: false,
  
  artwork: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

const data = await apiInstance.updateRomApiRomsIdPut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **removeCover** | [**boolean**] |  | (optional) defaults to false
 **unmatchMetadata** | [**boolean**] |  | (optional) defaults to false
 **artwork** | [**HttpFile**] |  | (optional) defaults to undefined


### Return type

**DetailedRomSchema**

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

# **updateRomUserApiRomsIdPropsPut**
> RomUserSchema updateRomUserApiRomsIdPropsPut()


### Example


```typescript
import { createConfiguration, RomsApi } from '';
import type { RomsApiUpdateRomUserApiRomsIdPropsPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RomsApi(configuration);

const request: RomsApiUpdateRomUserApiRomsIdPropsPutRequest = {
  
  id: 1,
};

const data = await apiInstance.updateRomUserApiRomsIdPropsPut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**RomUserSchema**

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


