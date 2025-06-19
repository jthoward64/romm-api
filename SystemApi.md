# .SystemApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**heartbeatApiHeartbeatGet**](SystemApi.md#heartbeatApiHeartbeatGet) | **GET** /api/heartbeat | Heartbeat


# **heartbeatApiHeartbeatGet**
> HeartbeatResponse heartbeatApiHeartbeatGet()

Endpoint to set the CSRF token in cache and return all the basic RomM config  Returns:     HeartbeatReturn: TypedDict structure with all the defined values in the HeartbeatReturn class.

### Example


```typescript
import { createConfiguration, SystemApi } from '';

const configuration = createConfiguration();
const apiInstance = new SystemApi(configuration);

const request = {};

const data = await apiInstance.heartbeatApiHeartbeatGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**HeartbeatResponse**

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


