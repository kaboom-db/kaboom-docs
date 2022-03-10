---
sidebar_position: 1
---

# Users

<details id="get-users">
  <summary>Get users 🔒</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/accounts/users/`

**Query params:**

| Name           | Value      | Type       | Required  |
|----------------|------------|------------|-----------|
| username       | crxssed    | str        | no        |
| page *         | 1          | int        | no        |

\* pagination purposes

**Response:**

```json
{
  "count": 1,
  "next": null,
  "previous": null,
  "results": [
    {
      "username": "crxssed",
      "id": 1,
      "image": "https://www.gravatar.com/avatar/194556ddbe4401bf1e48aa8620f5f854?default=retro",
      "date_joined": "2022-01-08",
      "time_joined": "14:21:50",
      "is_staff": true,
      "userdata": {
        "bio": "<center>\r\n\r\n![hello there](https://media4.giphy.com/media/Nx0rz3jtxtEre/giphy.gif)\r\n\r\n## Hi!\r\n\r\nKaboom Admin\r\n\r\n</center>",
        "private": false
      }
    }
  ]
}
```

</details>

<details id="get-spec-user">
  <summary>Get specific user 🔒</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/accounts/users/{username}/`

**Response:**

```json
{
  "username": "crxssed",
  "id": 1,
  "image": "https://www.gravatar.com/avatar/194556ddbe4401bf1e48aa8620f5f854?default=retro",
  "date_joined": "2022-01-08",
  "time_joined": "14:21:50",
  "is_staff": true,
  "userdata": {
    "bio": "<center>\r\n\r\n![hello there](https://media4.giphy.com/media/Nx0rz3jtxtEre/giphy.gif)\r\n\r\n## Hi!\r\n\r\nKaboom Admin\r\n\r\n</center>",
    "private": false
  }
}
```

</details>

<details id="update-user">
  <summary>Update user 🔒</summary>

**PATCH** `https://staging-kaboom.herokuapp.com/v1/accounts/users/{username}/`

**JSON Body:**

| Name                     | Required   |
|--------------------------|------------|
| bio                      | no         |
| private                  | no         |

The biography field supports markdown. Note that some markdown elements may not work depending on the client. It's up to you on how to implement the markdown support. You will have to filter out unsafe HTML tags also.

**Response:**

```json
{
  "username": "crxssed",
  "id": 1,
  "image": "https://www.gravatar.com/avatar/194556ddbe4401bf1e48aa8620f5f854?default=retro",
  "date_joined": "2022-01-08",
  "time_joined": "14:21:50",
  "is_staff": true,
  "userdata": {
    "bio": "![hello there](https://media4.giphy.com/media/Nx0rz3jtxtEre/giphy.gif)\n\n## Hi!",
    "private": false
  }
}
```

</details>

<details id="image-requests">
  <summary>Image requests 🔒</summary>

**POST** `https://staging-kaboom.herokuapp.com/v1/accounts/upload/`

**JSON Body:**

| Name                     | Required   |
|--------------------------|------------|
| object_type *            | yes        |
| request_fields *         | yes        |
| object_id                | yes        |
| image **                 | yes        |

\* fields are string options. Have a look at the extra information section to see what values are valid.

\*\* sent as a file.

**Response:**

```json
{
  "id": 23,
  "image": "/media/cartoons_Cartoon_43_COVER.jpg",
  "object_type": "cartoons_Cartoon",
  "request_field": "COVER",
  "object_id": 43,
  "status": "NONE",
  "user": 1
}
```

</details>

<details id="reports">
  <summary>Reports 🔒</summary>

**POST** `https://staging-kaboom.herokuapp.com/v1/accounts/report/`

Some records may need to be reported for violating rules, etc. These only really apply to Kaboom instances that are public.

**JSON Body:**

| Name                     | Required   |
|--------------------------|------------|
| object_type *            | yes        |
| object_id                | yes        |
| message                  | yes        |

\* fields are string options. Have a look at the extra information section to see what values are valid.

**Response:**

```json
{
  "id": 3,
  "object_type": "comics_Comic",
  "object_id": 1,
  "status": "NONE",
  "message": "This is a test report",
  "user": 1
}
```

</details>