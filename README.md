# X Teamer server

### APIs
|Endpoint|Method|Description|
|---|---|---|
|`/api`|GET|Returns a message indicating that it is the root of the API.|
|`/api/users`|GET|Retrieves a list of users with pagination support.|

#### /api/users `GET`

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
