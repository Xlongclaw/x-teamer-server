# X Teamer server

### APIs
|Endpoint|Method|Description|
|---|---|---|
|`/api`|GET|Returns a message indicating that it is the root of the API.|
|`/api/users`|GET|Retrieves a list of users with pagination support.|
|`/api/users/:id`|GET|Retrieves a specific user by ID.|
|`/api/users`|POST|Adds a new user.|
|`/api/users/:id`|PUT|Updates a specific user by ID.|

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
	    "id": 1,
	    "first_name": "Anet",
	    "last_name": "Doe",
      "email": "adoe0@comcast.net",
      "gender": "Female",
      "avatar": "https://robohash.org/sintessequaerat.png?size=50x50&set=set1",
      "domain": "Sales",
      "available": false
    }
}
```

#### Error Responses

| Status Code | Description               |
|-------------|---------------------------|
| 400         | Indicates a bad request.  |


### Add User

- **URL**: `/api/users`
- **Method**: `POST`
- **Description**: Adds a new user.

#### Request Body

| Field    | Type   | Description                           |
|----------|--------|---------------------------------------|
| `user`   | Object | User object to be added.              |

#### Response

| Status Code | Content Type    | Body                 |
|-------------|-----------------|----------------------|
| 200         | `application/json` | Message object       |
| 400         | -               | -                    |

- **Note**: The response contains a message indicating the success of the operation.

##### Example Request Body

```json
{
  "user": {
	    "id": 1,
	    "first_name": "Anet",
	    "last_name": "Doe",
      "email": "adoe0@comcast.net",
      "gender": "Female",
      "avatar": "https://robohash.org/sintessequaerat.png?size=50x50&set=set1",
      "domain": "Sales",
      "available": false
    }
}
```

##### Example Response Body (Status Code: 200 OK)

```json
{
  "message": "user added successfully"
}
```

#### Error Responses

| Status Code | Description               |
|-------------|---------------------------|
| 400         | Indicates a bad request.  |


### /api/users/:id `PUT`

- **URL**: `/api/users/:id`
- **Method**: `PUT`
- **Description**: Updates a specific user by ID.

#### URL Parameters

| Parameter | Type   | Description                    |
|-----------|--------|--------------------------------|
| `id`      | String | ID of the user to update.      |

#### Request Body

| Field    | Type   | Description                           |
|----------|--------|---------------------------------------|
| `user`   | Object | Updated user object.                  |

#### Response

| Status Code | Content Type    | Body                 |
|-------------|-----------------|----------------------|
| 200         | `application/json` | Message object       |
| 400         | -               | -                    |

- **Note**: The response contains a message indicating the success of the operation.

##### Example Request Body

```json
{
  "user": {
	    "first_name": "John",
	    "last_name": "Doe",
    }
}
```

##### Example Response Body (Status Code: 200 OK)

```json
{
  "message": "user updated successfully"
}
```

#### Error Responses

| Status Code | Description               |
|-------------|---------------------------|
| 400         | Indicates a bad request.  |

