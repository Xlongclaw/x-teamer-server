# X Teamer server

### APIs
|Endpoint|Method|Description|
|---|---|---|
|`/api`|GET|Returns a message indicating that it is the root of the API.|
|`/api/users`|GET|Retrieves a list of users with pagination support.|
|`/api/users/:id`|GET|Retrieves a specific user by ID.|

### /api/users `GET`

###### Query Parameters

|Parameter|Type|Description|Default|
|---|---|---|---|
|`page`|Number|Page number for pagination (optional, default: 1).|1|

###### Response

|Status Code|Content Type|Body|
|---|---|---|
|200|`application/json`|Array of user objects|
|400|-|-|

- **Note**: The response contains an array of user objects.

###### Example Response Body (Status Code: 200 OK)


```json
{
  "users": [
    {
	  "id": 1,
	  "first_name": "Anet",
	  "last_name": "Doe",
      "email": "adoe0@comcast.net",
      "gender": "Female",
      "avatar": "https://robohash.org/sintessequaerat.png?size=50x50&set=set1",
      "domain": "Sales",
      "available": false
    }
    // additional users
  ]
}    
```

- **Note**: The response contains an array of user objects.

###### Error Responses

| Status Code | Description              |
| ----------- | ------------------------ |
| 400         | Indicates a bad request. |


### /api/users/:id `GET`

#### URL Parameters

| Parameter | Type   | Description                    |
|-----------|--------|--------------------------------|
| `id`      | String | ID of the user to retrieve.    |

#### Response

| Status Code | Content Type    | Body                |
|-------------|-----------------|---------------------|
| 200         | `application/json` | User object         |
| 400         | -               | -                   |

- **Note**: The response contains the user object.

##### Example Response Body (Status Code: 200 OK)

```json
{
  "user": {
    "_id": "user_id",
    "username": "user_username",
    "email": "user_email@example.com",
    // other user properties
  }
}
```

#### Error Responses

| Status Code | Description               |
|-------------|---------------------------|
| 400         | Indicates a bad request.  |

