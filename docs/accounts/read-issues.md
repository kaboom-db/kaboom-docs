---
sidebar_position: 3
---

# Read Issues

<details id="get-read-issues">
  <summary>Get read issues 🔒</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/accounts/comics/readissues/`

**Query params:**

| Name           | Value      | Type       | Required  |
|----------------|------------|------------|-----------|
| user           | 1          | int        | no        |
| series         | 1          | int        | no        |
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
      "id": 3,
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
      "issue": {
        "id": 2,
        "characters": [
          {
            "id": 1,
            "voice_actors": [],
            "teams": [],
            "location_of_operation": null,
            "name": "Peter Parker",
            "alias": "Spider-Man",
            "image": "",
            "biography": "This is a new bio",
            "status": "ALIVE",
            "alignment": "GOOD",
            "intelligence": 0,
            "strength": 0,
            "speed": 0,
            "durability": 0,
            "power": 0,
            "combat": 0,
            "date_created": "2022-02-01T20:41:45.622718Z"
          },
          {
            "id": 2,
            "voice_actors": [],
            "teams": [],
            "location_of_operation": null,
            "name": "Test",
            "alias": null,
            "image": "",
            "biography": "",
            "status": "ALIVE",
            "alignment": "GOOD",
            "intelligence": 0,
            "strength": 0,
            "speed": 0,
            "durability": 0,
            "power": 0,
            "combat": 0,
            "date_created": "2022-02-01T20:37:08.638564Z"
          },
          {
            "id": 3,
            "voice_actors": [
              {
                "id": 1,
                "age": null,
                "name": "Avengers",
                "image": "",
                "date_of_birth": null,
                "date_of_death": null,
                "biography": "",
                "date_created": "2022-01-13T20:05:09.950935Z"
              }
            ],
            "teams": [],
            "location_of_operation": null,
            "name": "Eddie Brock",
            "alias": "Venom",
            "image": "",
            "biography": "WE ARE VENOM",
            "status": "ALIVE",
            "alignment": "GOOD",
            "intelligence": 0,
            "strength": 0,
            "speed": 0,
            "durability": 0,
            "power": 0,
            "combat": 0,
            "date_created": "2022-02-05T10:56:20.474135Z"
          }
        ],
        "staff": [],
        "series": {
          "id": 1,
          "publisher": null,
          "series_name": "Test Comic",
          "summary": "",
          "year_started": 2022,
          "status": "COMPLETED",
          "cover_image": "https://kaboomstaging.s3.amazonaws.com/AveAobC_LF9uyQV.png",
          "background_image": "https://kaboomstaging.s3.amazonaws.com/AveAobC_LF9uyQV.png",
          "rating": 5,
          "date_created": "2022-03-10T10:12:13.647295Z"
        },
        "format": null,
        "issue_number_absolute": 1,
        "issue_name": "1",
        "summary": "",
        "release_date": null,
        "cover_image": "https://kaboomstaging.s3.eu-west-2.amazonaws.com/large-7603337.jpg",
        "date_created": "2022-02-14T17:42:28.513850Z"
      },
      "read_at": "2022-03-10T10:21:26Z"
    }
  ]
}
```

</details>

<details id="add-read-issue">
  <summary>Add read issue 🔒</summary>

**POST** `https://staging-kaboom.herokuapp.com/v1/accounts/comics/readissues/`

**JSON Body:**

| Name                     | Required   |
|--------------------------|------------|
| issue                    | yes        |
| read_at *                | no         |

\* read_at will default to the current time of the request, so is not needed.

**Response:**

```json
{
  "id": 4,
  "read_at": "2022-03-09T10:21:26Z",
  "issue": 1,
  "user": 1
}
```

</details>

<details id="remove-read-issue">
  <summary>Remove read issue 🔒</summary>

**DELETE** `https://staging-kaboom.herokuapp.com/v1/accounts/comics/readissues/`

**JSON Body:**

| Name                     | Required   |
|--------------------------|------------|
| read_id                  | yes        |

**Response:**

```json
{
  "success": "Unread the issue"
}
```

</details>

<details id="clean-read-issues">
  <summary>Clean read issues 🔒</summary>

**DELETE** `https://staging-kaboom.herokuapp.com/v1/accounts/comics/readissues/clean/`

**JSON Body:**

| Name                     | Required   |
|--------------------------|------------|
| issue                    | yes        |

**Response:**

```json
{
  "success": "All read states have been removed from this issue."
}
```

</details>