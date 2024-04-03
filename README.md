# X Teamer server

[Vercel deploy link](https://x-teamer-server.vercel.app/)

### APIs

| Endpoint         | Method | Description                                                  |
| ---------------- | ------ | ------------------------------------------------------------ |
| `/api`           | GET    | Returns a message indicating that it is the root of the API. |
| `/api/users`     | GET    | Retrieves a list of users with pagination support.           |
| `/api/users/:id` | GET    | Retrieves a specific user by ID.                             |
| `/api/users`     | POST   | Adds a new user.                                             |
| `/api/users/:id` | PUT    | Updates a specific user by ID.                               |
| `/api/users/:id` | DELETE | Deletes a specific user by ID.                               |
| `/api/team`      | POST   | Creates a new team.                                          |
| `/api/team/:id`  | GET    | Retrieves a specific team by ID.                             |
| `/api/team`      | GET    | Retrieves all teams.                                         |

### /api/users `GET`

###### Query Parameters

| Parameter       | Type   | Description                                        | Default |
| --------------- | ------ | -------------------------------------------------- | ------- |
| `page`          | Number | Page number for pagination (optional, default: 1). | 1       |
| `filterOptions` | Object | values to filter data                              | {}      |

###### Response

| Status Code | Content Type       | Body                  |
| ----------- | ------------------ | --------------------- |
| 200         | `application/json` | Array of user objects |
| 400         | -                  | -                     |

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

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| `id`      | String | ID of the user to retrieve. |

#### Response

| Status Code | Content Type       | Body        |
| ----------- | ------------------ | ----------- |
| 200         | `application/json` | User object |
| 400         | -                  | -           |

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

| Status Code | Description              |
| ----------- | ------------------------ |
| 400         | Indicates a bad request. |

### Add User

- **URL**: `/api/users`
- **Method**: `POST`
- **Description**: Adds a new user.

#### Request Body

| Field  | Type   | Description              |
| ------ | ------ | ------------------------ |
| `user` | Object | User object to be added. |

#### Response

| Status Code | Content Type       | Body           |
| ----------- | ------------------ | -------------- |
| 200         | `application/json` | Message object |
| 400         | -                  | -              |

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

| Status Code | Description              |
| ----------- | ------------------------ |
| 400         | Indicates a bad request. |

### /api/users/:id `PUT`

- **URL**: `/api/users/:id`
- **Method**: `PUT`
- **Description**: Updates a specific user by ID.

#### URL Parameters

| Parameter | Type   | Description               |
| --------- | ------ | ------------------------- |
| `id`      | String | ID of the user to update. |

#### Request Body

| Field  | Type   | Description          |
| ------ | ------ | -------------------- |
| `user` | Object | Updated user object. |

#### Response

| Status Code | Content Type       | Body           |
| ----------- | ------------------ | -------------- |
| 200         | `application/json` | Message object |
| 400         | -                  | -              |

- **Note**: The response contains a message indicating the success of the operation.

##### Example Request Body

```json
{
  "user": {
    "first_name": "John",
    "last_name": "Doe"
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

| Status Code | Description              |
| ----------- | ------------------------ |
| 400         | Indicates a bad request. |

### Delete User

- **URL**: `/api/users/:id`
- **Method**: `DELETE`
- **Description**: Deletes a specific user by ID.

#### URL Parameters

| Parameter | Type   | Description               |
| --------- | ------ | ------------------------- |
| `id`      | String | ID of the user to delete. |

#### Response

| Status Code | Content Type       | Body           |
| ----------- | ------------------ | -------------- |
| 200         | `application/json` | Message object |
| 400         | -                  | -              |

- **Note**: The response contains a message indicating the success of the operation.

##### Example Response Body (Status Code: 200 OK)

```json
{
  "message": "user deleted successfully"
}
```

#### Error Responses

| Status Code | Description              |
| ----------- | ------------------------ |
| 400         | Indicates a bad request. |

### Create Team

- **URL**: `/api/team`
- **Method**: `POST`
- **Description**: Creates a new team.

#### Request Body

| Field  | Type   | Description                |
| ------ | ------ | -------------------------- |
| `team` | Object | Team object to be created. |

#### Response

| Status Code | Content Type       | Body           |
| ----------- | ------------------ | -------------- |
| 200         | `application/json` | Message object |
| 400         | -                  | -              |

- **Note**: The response contains a message indicating the success of the operation.

##### Example Request Body

```json
{
  "team": {
    "name": "New Team",
    "members": ["user1_id", "user2_id"]
  }
}
```

##### Example Response Body (Status Code: 200 OK)

```json
{
  "message": "team created successfully"
}
```

#### Error Responses

| Status Code | Description              |
| ----------- | ------------------------ |
| 400         | Indicates a bad request. |

### Get Team by ID

- **URL**: `/api/team/:id`
- **Method**: `GET`
- **Description**: Retrieves a specific team by ID.

#### URL Parameters

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| `id`      | String | ID of the team to retrieve. |

#### Response

| Status Code | Content Type       | Body        |
| ----------- | ------------------ | ----------- |
| 200         | `application/json` | Team object |
| 400         | -                  | -           |

- **Note**: The response contains the team object.

##### Example Response Body (Status Code: 200 OK)

```json
{
  "team": {
    "_id": "team_id",
    "members": ["user1_id", "user2_id"]
    // other team properties
  }
}
```

#### Error Responses

| Status Code | Description              |
| ----------- | ------------------------ |
| 400         | Indicates a bad request. |


### Get All Teams

- **URL**: `/api/team`
- **Method**: `GET`
- **Description**: Retrieves all teams.

#### Response

| Status Code | Content Type    | Body                 |
|-------------|-----------------|----------------------|
| 200         | `application/json` | Array of team objects|
| 400         | -               | -                    |

- **Note**: The response contains an array of team objects.

##### Example Response Body (Status Code: 200 OK)

```json
{
  "teams": [
    {
      "_id": "team_id1",
      "name": "Team Name 1",
      "members": ["user1_id", "user2_id"],
      // other team properties
    },
    {
      "_id": "team_id2",
      "name": "Team Name 2",
      "members": ["user3_id", "user4_id"],
      // other team properties
    },
    // additional teams
  ]
}
```

#### Error Responses

| Status Code | Description               |
|-------------|---------------------------|
| 400         | Indicates a bad request.  |
