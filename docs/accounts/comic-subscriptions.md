---
sidebar_position: 2
---

# Comic Subscriptions

<details id="get-comic-subs">
  <summary>Get comic subscriptions 🔒</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/accounts/comics/subscriptions/`

**Query params:**

| Name           | Value      | Type       | Required  |
|----------------|------------|------------|-----------|
| user           | 1          | int        | no        |
| query          | test comic | str        | no        |
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
      "id": 1,
      "user": {
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
      },
      "series": {
        "id": 1,
        "publisher": null,
        "series_name": "Test Comic",
        "summary": "",
        "year_started": 2022,
        "status": "COMPLETED",
        "cover_image": "https://kaboomstaging.s3.amazonaws.com/AveAobC_LF9uyQV.png",
        "background_image": "https://kaboomstaging.s3.amazonaws.com/AveAobC_LF9uyQV.png",
        "rating": 4.5,
        "date_created": "2022-02-26T13:29:36.044627Z"
      },
      "rating": 3,
      "date_created": "2022-02-26T13:28:31.357364Z"
    }
  ]
}
```

</details>

<details id="add-comic-sub">
  <summary>Add comic subscription 🔒</summary>

**POST** `https://staging-kaboom.herokuapp.com/v1/accounts/comics/subscriptions/`

**JSON Body:**

| Name                     | Required   |
|--------------------------|------------|
| series                   | yes        |
| rating                   | no         |

**Response:**

```json
{
  "id": 3,
  "rating": 9.0,
  "date_created": "2022-03-10T10:04:36.890278Z",
  "series": 1,
  "user": 1
}
```

</details>

<details id="remove-comic-sub">
  <summary>Remove comic subscription 🔒</summary>

**DELETE** `https://staging-kaboom.herokuapp.com/v1/accounts/comics/subscriptions/`

**JSON Body:**

| Name                     | Required   |
|--------------------------|------------|
| series                   | yes        |

**Response:**

```json
{
  "success": "Successfully unsubscribed"
}
```

</details>

<details id="rate-comic">
  <summary>Rate comic 🔒</summary>

**POST** `https://staging-kaboom.herokuapp.com/v1/accounts/comics/subscriptions/rate/`

**JSON Body:**

| Name                     | Required   |
|--------------------------|------------|
| series                   | yes        |
| rating                   | yes        |

**Response:**

```json
{
  "series": 1,
  "user": 1,
  "id": 4,
  "rating": 4
}
```

</details>