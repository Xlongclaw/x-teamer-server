# X Teamer server

[Vercel deploy link](https://x-teamer-server.vercel.app/)
[Render deploy link](https://x-teamer-server.onrender.com)

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

### Root Endpoint

- **URL**: `/api`
- **Method**: `GET`
- **Description**: Returns a message indicating the root endpoint of the API.

### User Endpoints

#### Get Users

- **URL**: `/api/users`
- **Method**: `GET`
- **Description**: Retrieves a list of users with pagination support.

  - **Query Parameters**:
    | Parameter | Type | Description | Example |
    |---------------|---------|------------------------------------------|------------|
    | `page` | Number | Page number for pagination (default: 1). | `?page=2` |
    | `filterOptions` | JSON Object | Filter options for users. | `?filterOptions={"first_name":"John"}` |

  - **Response**:

    - **Status Code**: 200 OK
    - **Content Type**: `application/json`
    - **Body**: An array of user objects with pagination metadata.

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
      ],
      "count": 100
    }
    ```

#### Add User

- **URL**: `/api/users`
- **Method**: `POST`
- **Description**: Adds a new user to the system.

  - **Request Body**:
    | Field | Type | Description | Example |
    |----------|--------|-------------------------|------------|
    | `user` | Object | User information. | See example|

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

  - **Response**:

    - **Status Code**: 200 OK
    - **Content Type**: `application/json`
    - **Body**: A message confirming the successful addition of the user.

    ```json
    {
      "message": "user added successfully"
    }
    ```

#### Get User by ID

- **URL**: `/api/users/:id`
- **Method**: `GET`
- **Description**: Retrieves a specific user by their ID.

  - **URL Parameters**:
    | Parameter | Type | Description | Example |
    |-----------|--------|---------------------------|------------|
    | `id` | String | ID of the user to retrieve. | `123` |

  - **Response**:

    - **Status Code**: 200 OK
    - **Content Type**: `application/json`
    - **Body**: The user object matching the provided ID.

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

#### Update User

- **URL**: `/api/users/:id`
- **Method**: `PUT`
- **Description**: Updates a specific user by their ID.

  - **URL Parameters**:
    | Parameter | Type | Description | Example |
    |-----------|--------|---------------------------|------------|
    | `id` | String | ID of the user to update. | `123` |

  - **Request Body**:
    | Field | Type | Description | Example |
    |----------|--------|-------------------------|------------|
    | `user` | Object | Updated user information.| See example|

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

  - **Response**:

    - **Status Code**: 200 OK
    - **Content Type**: `application/json`
    - **Body**: A message confirming the successful update of the user.

    ```json
    {
      "message": "user updated successfully"
    }
    ```

#### Delete User

- **URL**: `/api/users/:id`
- **Method**: `DELETE`
- **Description**: Deletes a specific user by their ID.

  - **URL Parameters**:
    | Parameter | Type | Description | Example |
    |-----------|--------|---------------------------|------------|
    | `id` | String | ID of the user to delete. | `123` |

  - **Response**:

    - **Status Code**: 200 OK
    - **Content Type**: `application/json`
    - **Body**: A message confirming the successful deletion of the user.

    ```json
    {
      "message": "user deleted successfully"
    }
    ```

### Team Endpoints

#### Create Team

- **URL**: `/api/team`
- **Method**: `POST`
- **Description**: Creates a new team.

  - **Request Body**:
    | Field | Type | Description | Example |
    |----------|--------|-------------------------|------------|
    | `team` | Object | Team information. | See example|

    ```json
    {
      "team": {
        "_id": "team_id1",
        "teamName": "Team Name 1",
        "members": ["user1_id", "user2_id"]
      }
    }
    ```

- **Response**:

  - **Status Code**: 200 OK
  - **Content Type**: `application/json`
  - **Body**: A message confirming the successful creation of the team.

  ```json
  {
    "message": "team created successfully"
  }
  ```

#### Get All Teams

- **URL**: `/api/team`
- **Method**: `GET`
- **Description**: Retrieves all teams from the system.

  - **Response**:

    - **Status Code**: 200 OK
    - **Content Type**: `application/json`
    - **Body**: An array of team objects.

    ```json
    {
      "teams": [
        {
          "_id": "team_id1",
          "teamName": "Team Name 1",
          "members": ["user1_id", "user2_id"]
        },
        {
          "_id": "team_id2",
          "teamName": "Team Name 2",
          "members": ["user1_id", "user2_id"]
        }
      ]
    }
    ```

#### Get Team by ID

- **URL**: `/api/team/:id`
- **Method**: `GET`
- **Description**: Retrieves a specific team by its ID.

  - **URL Parameters**:
    | Parameter | Type | Description | Example |
    |-----------|--------|---------------------------|------------|
    | `id` | String | ID of the team to retrieve.| `123` |

  - **Response**:

    - **Status Code**: 200 OK
    - **Content Type**: `application/json`
    - **Body**: The team object matching the provided ID.

    ```json
    {
      "team": {
        "_id": "team_id1",
        "teamName": "Team Name 1",
        "members": ["user1_id", "user2_id"]
      }
    }
    ```
