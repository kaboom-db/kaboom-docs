---
sidebar_position: 1
---

# Users

A user can follow other users, and view their following/followers list.

<details id="follow-user">
  <summary>Follow user 🔒</summary>

**POST** `https://staging-kaboom.herokuapp.com/v1/accounts/users/{username}/follow/`

**Response:**

```json
{
  "id": 10,
  "follower": 1,
  "following": 29
}
```

</details>

<details id="unfollow-user">
  <summary>Unfollow user 🔒</summary>

**POST** `https://staging-kaboom.herokuapp.com/v1/accounts/users/{username}/unfollow/`

**Response:**

```json
{
  "success": "Successfully unfollowed"
}
```

</details>

<details id="get-followers">
  <summary>Get followers 🔒</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/accounts/users/{username}/followers/`

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
        "bio": "![hello there](https://media4.giphy.com/media/Nx0rz3jtxtEre/giphy.gif)\r\n\r\n## Hi!",
        "private": false
      }
    }
  ]
}
```

</details>

<details id="get-following">
  <summary>Get following 🔒</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/accounts/users/{username}/following/`

**Response:**

```json
{
  "count": 1,
  "next": null,
  "previous": null,
  "results": [
    {
      "username": "tnajib",
      "id": 29,
      "image": "https://www.gravatar.com/avatar/83fcf152ca5333e33700c00ee62d9e73?default=retro",
      "date_joined": "2022-02-10",
      "time_joined": "20:04:29",
      "is_staff": false,
      "userdata": {
        "bio": "",
        "private": false
      }
    }
  ]
}
```

</details>