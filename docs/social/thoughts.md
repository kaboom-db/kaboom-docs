---
sidebar_position: 2
---

# Thoughts

Thoughts can either act as comic/cartoon reviews, or just general posts.

<details id="get-thoughts">
  <summary>Get thoughts 🔒</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/social/thoughts/`

**Headers:**

| Name          | Value                   | Required   |
|---------------|-------------------------|------------|
| Authorization | Token user_access_token | yes        |

**Query params:**

| Name                | Value      | Type       | Required  |
|---------------------|------------|------------|-----------|
| user                | crxssed    | str        | no        |
| thought_type        |            | str        | no        |
| relate_object_id    |            | int        | no        |
| date_created_after  |            | datetime   | no        |
| date_created_before |            | datetime   | no        |
| page *              | 1          | int        | no        |

\* pagination purposes

**Response:**

```json
{
  "count": 2,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 3,
      "user": {
        "username": "crxssed",
        "id": 1,
        "image": "https://www.gravatar.com/avatar/194556ddbe4401bf1e48aa8620f5f854?default=retro",
        "date_joined": "2022-01-08",
        "time_joined": "14:21:50",
        "is_staff": true,
        "userdata": {
          "bio": "![hello there](https://media4.giphy.com/media/Nx0rz3jtxtEre/giphy.gif)\r\n\r\n## Hi!",
          "private": false
        }
      },
      "title": "Added via API",
      "post_content": "This was updated via the API",
      "date_created": "2022-02-25T14:58:15.306602Z",
      "thought_type": "CARTOON",
      "related_object_id": 1
    },
    {
      "id": 1,
      "user": {
        "username": "crxssed",
        "id": 1,
        "image": "https://www.gravatar.com/avatar/194556ddbe4401bf1e48aa8620f5f854?default=retro",
        "date_joined": "2022-01-08",
        "time_joined": "14:21:50",
        "is_staff": true,
        "userdata": {
          "bio": "![hello there](https://media4.giphy.com/media/Nx0rz3jtxtEre/giphy.gif)\r\n\r\n## Hi!",
          "private": false
        }
      },
      "title": "Welcome to Kaboom thoughts",
      "post_content": "Hello and welcome to Kaboom thoughts!",
      "date_created": "2022-02-24T19:48:02.292923Z",
      "thought_type": null,
      "related_object_id": null
    }
  ]
}
```

</details>

<details id="get-spec-thought">
  <summary>Get specific thought 🔒</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/social/thoughts/{thought_id}/`

**Headers:**

| Name          | Value                   | Required   |
|---------------|-------------------------|------------|
| Authorization | Token user_access_token | yes        |

**Response:**

```json
{
  "id": 1,
  "user": {
    "username": "crxssed",
    "id": 1,
    "image": "https://www.gravatar.com/avatar/194556ddbe4401bf1e48aa8620f5f854?default=retro",
    "date_joined": "2022-01-08",
    "time_joined": "14:21:50",
    "is_staff": true,
    "userdata": {
      "bio": "![hello there](https://media4.giphy.com/media/Nx0rz3jtxtEre/giphy.gif)\r\n\r\n## Hi!",
      "private": false
    }
  },
  "title": "Welcome to Kaboom thoughts",
  "post_content": "Hello and welcome to Kaboom thoughts!",
  "date_created": "2022-02-24T19:48:02.292923Z",
  "thought_type": null,
  "related_object_id": null
}
```

</details>

<details id="add-thought">
  <summary>Add thought 🔒</summary>

**POST** `https://staging-kaboom.herokuapp.com/v1/social/thoughts/`

**Headers:**

| Name          | Value                   | Required   |
|---------------|-------------------------|------------|
| Authorization | Token user_access_token | yes        |

**JSON Body:**

| Name                     | Required   |
|--------------------------|------------|
| title                    | yes        |
| post_content             | yes        |
| thought_type             | no         |
| related_object_id        | no         |

**Response:**

```json
{
  "id": 4,
  "title": "Added via API",
  "post_content": "This thought was added via the API",
  "date_created": "2022-03-10T12:14:29.889943Z",
  "thought_type": "COMIC",
  "related_object_id": 1,
  "user": 1
}
```

</details>

<details id="update-spec-thought">
  <summary>Update specific thought 🔒</summary>

**PATCH** `https://staging-kaboom.herokuapp.com/v1/social/thoughts/{thought_id}/`

**Headers:**

| Name          | Value                   | Required   |
|---------------|-------------------------|------------|
| Authorization | Token user_access_token | yes        |

**JSON Body:**

| Name                     | Required   |
|--------------------------|------------|
| title                    | no         |
| post_content             | no         |
| thought_type             | no         |
| related_object_id        | no         |

**Response:**

```json
{
  "id": 3,
  "title": "Added via API",
  "post_content": "This was updated via the API",
  "date_created": "2022-02-25T14:58:15.306602Z",
  "thought_type": "CARTOON",
  "related_object_id": 1,
  "user": 1
}
```

</details>

## Comments

Kaboom also has support for comments, but they can only be made against a thought.

<details id="get-comments">
  <summary>Get comments 🔒</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/social/thoughts/{thought_id}/comments/`

**Headers:**

| Name          | Value                   | Required   |
|---------------|-------------------------|------------|
| Authorization | Token user_access_token | yes        |

**Query params:**

| Name                | Value      | Type       | Required  |
|---------------------|------------|------------|-----------|
| user                | crxssed    | str        | no        |
| date_created_after  |            | datetime   | no        |
| date_created_before |            | datetime   | no        |
| page *              | 1          | int        | no        |

\* pagination purposes

**Response:**

```json
{
  "count": 1,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 1,
      "user": {
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
      },
      "comment_content": "Wow, thats really cool!",
      "date_created": "2022-02-26T12:06:04.499957Z",
      "thought": 1
    }
  ]
}
```

</details>

<details id="get-spec-comment">
  <summary>Get specific comment 🔒</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/social/comments/{comment_id}/`

**Headers:**

| Name          | Value                   | Required   |
|---------------|-------------------------|------------|
| Authorization | Token user_access_token | yes        |

**Response:**

```json
{
  "id": 1,
  "user": {
    "username": "crxssed",
    "id": 1,
    "image": "https://www.gravatar.com/avatar/194556ddbe4401bf1e48aa8620f5f854?default=retro",
    "date_joined": "2022-01-08",
    "time_joined": "14:21:50",
    "is_staff": true,
    "userdata": {
      "bio": "![hello there](https://media4.giphy.com/media/Nx0rz3jtxtEre/giphy.gif)\r\n\r\n## Hi!",
      "private": false
    }
  },
  "comment_content": "Updated via the API",
  "date_created": "2022-02-26T12:06:04.499957Z",
  "thought": 1
}
```

</details>

<details id="add-comment">
  <summary>Add comment 🔒</summary>

**POST** `https://staging-kaboom.herokuapp.com/v1/social/thoughts/{thought_id}/comments/`

**Headers:**

| Name          | Value                   | Required   |
|---------------|-------------------------|------------|
| Authorization | Token user_access_token | yes        |

**JSON Body:**

| Name                     | Required   |
|--------------------------|------------|
| comment_content          | yes        |

**Response:**

```json
{
  "id": 4,
  "comment_content": "I added this comment from the API",
  "date_created": "2022-03-10T12:28:32.236174Z",
  "user": 1,
  "thought": 2
}
```

</details>

<details id="update-spec-comment">
  <summary>Update specific comment 🔒</summary>

**PATCH** `https://staging-kaboom.herokuapp.com/v1/social/comments/{comment_id}/`

**Headers:**

| Name          | Value                   | Required   |
|---------------|-------------------------|------------|
| Authorization | Token user_access_token | yes        |

**JSON Body:**

| Name                     | Required   |
|--------------------------|------------|
| comment_content          | yes        |

**Response:**

```json
{
  "id": 4,
  "comment_content": "Updated via the API",
  "date_created": "2022-03-10T12:28:32.236174Z",
  "user": 1,
  "thought": 2
}
```

</details>