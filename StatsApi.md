# .StatsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**statsApiStatsGet**](StatsApi.md#statsApiStatsGet) | **GET** /api/stats | Stats


# **statsApiStatsGet**
> StatsReturn statsApiStatsGet()

Endpoint to return the current RomM stats  Returns:     dict: Dictionary with all the stats

### Example


```typescript
import { createConfiguration, StatsApi } from '';

const configuration = createConfiguration();
const apiInstance = new StatsApi(configuration);

const request = {};

const data = await apiInstance.statsApiStatsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**StatsReturn**

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


