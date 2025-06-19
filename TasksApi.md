# .TasksApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**runTaskApiTasksTaskRunPost**](TasksApi.md#runTaskApiTasksTaskRunPost) | **POST** /api/tasks/{task}/run | Run Task
[**runTasksApiTasksRunPost**](TasksApi.md#runTasksApiTasksRunPost) | **POST** /api/tasks/run | Run Tasks


# **runTaskApiTasksTaskRunPost**
> MessageResponse runTaskApiTasksTaskRunPost()

Run all tasks endpoint  Args:     request (Request): Fastapi Request object Returns:     RunTasksResponse: Standard message response

### Example


```typescript
import { createConfiguration, TasksApi } from '';
import type { TasksApiRunTaskApiTasksTaskRunPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TasksApi(configuration);

const request: TasksApiRunTaskApiTasksTaskRunPostRequest = {
  
  task: "task_example",
};

const data = await apiInstance.runTaskApiTasksTaskRunPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task** | [**string**] |  | defaults to undefined


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

# **runTasksApiTasksRunPost**
> MessageResponse runTasksApiTasksRunPost()

Run all tasks endpoint  Args:     request (Request): Fastapi Request object Returns:     RunTasksResponse: Standard message response

### Example


```typescript
import { createConfiguration, TasksApi } from '';

const configuration = createConfiguration();
const apiInstance = new TasksApi(configuration);

const request = {};

const data = await apiInstance.runTasksApiTasksRunPost(request);
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


