# OpenapiClient::DefaultApi

All URIs are relative to *https://api.example.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**posts_get**](DefaultApi.md#posts_get) | **GET** /posts | Get list of posts |
| [**posts_post**](DefaultApi.md#posts_post) | **POST** /posts | Create a new post |
| [**users_get**](DefaultApi.md#users_get) | **GET** /users | Get list of users |
| [**users_id_delete**](DefaultApi.md#users_id_delete) | **DELETE** /users/{id} | Delete a user |
| [**users_id_get**](DefaultApi.md#users_id_get) | **GET** /users/{id} | Get a user by ID |
| [**users_id_put**](DefaultApi.md#users_id_put) | **PUT** /users/{id} | Update a user |
| [**users_post**](DefaultApi.md#users_post) | **POST** /users | Create a new user |


## posts_get

> posts_get

Get list of posts

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::DefaultApi.new

begin
  # Get list of posts
  api_instance.posts_get
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->posts_get: #{e}"
end
```

#### Using the posts_get_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> posts_get_with_http_info

```ruby
begin
  # Get list of posts
  data, status_code, headers = api_instance.posts_get_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->posts_get_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## posts_post

> posts_post(post)

Create a new post

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::DefaultApi.new
post = OpenapiClient::Post.new # Post | 

begin
  # Create a new post
  api_instance.posts_post(post)
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->posts_post: #{e}"
end
```

#### Using the posts_post_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> posts_post_with_http_info(post)

```ruby
begin
  # Create a new post
  data, status_code, headers = api_instance.posts_post_with_http_info(post)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->posts_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **post** | [**Post**](Post.md) |  |  |

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## users_get

> users_get

Get list of users

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::DefaultApi.new

begin
  # Get list of users
  api_instance.users_get
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->users_get: #{e}"
end
```

#### Using the users_get_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> users_get_with_http_info

```ruby
begin
  # Get list of users
  data, status_code, headers = api_instance.users_get_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->users_get_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## users_id_delete

> users_id_delete(id)

Delete a user

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::DefaultApi.new
id = 56 # Integer | 

begin
  # Delete a user
  api_instance.users_id_delete(id)
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->users_id_delete: #{e}"
end
```

#### Using the users_id_delete_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> users_id_delete_with_http_info(id)

```ruby
begin
  # Delete a user
  data, status_code, headers = api_instance.users_id_delete_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->users_id_delete_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **Integer** |  |  |

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## users_id_get

> users_id_get(id)

Get a user by ID

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::DefaultApi.new
id = 56 # Integer | 

begin
  # Get a user by ID
  api_instance.users_id_get(id)
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->users_id_get: #{e}"
end
```

#### Using the users_id_get_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> users_id_get_with_http_info(id)

```ruby
begin
  # Get a user by ID
  data, status_code, headers = api_instance.users_id_get_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->users_id_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **Integer** |  |  |

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## users_id_put

> users_id_put(id, user)

Update a user

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::DefaultApi.new
id = 56 # Integer | 
user = OpenapiClient::User.new # User | 

begin
  # Update a user
  api_instance.users_id_put(id, user)
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->users_id_put: #{e}"
end
```

#### Using the users_id_put_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> users_id_put_with_http_info(id, user)

```ruby
begin
  # Update a user
  data, status_code, headers = api_instance.users_id_put_with_http_info(id, user)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->users_id_put_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **Integer** |  |  |
| **user** | [**User**](User.md) |  |  |

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## users_post

> users_post(user)

Create a new user

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::DefaultApi.new
user = OpenapiClient::User.new # User | 

begin
  # Create a new user
  api_instance.users_post(user)
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->users_post: #{e}"
end
```

#### Using the users_post_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> users_post_with_http_info(user)

```ruby
begin
  # Create a new user
  data, status_code, headers = api_instance.users_post_with_http_info(user)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->users_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **user** | [**User**](User.md) |  |  |

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

