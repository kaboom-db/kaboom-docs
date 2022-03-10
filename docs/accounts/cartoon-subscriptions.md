---
sidebar_position: 4
---

# Cartoon Subscriptions

<details id="get-cartoon-subs">
  <summary>Get cartoon subscriptions 🔒</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/accounts/cartoons/subscriptions/`

**Query params:**

| Name           | Value        | Type       | Required  |
|----------------|--------------|------------|-----------|
| user           | 1            | int        | no        |
| query          | regular show | str        | no        |
| page *         | 1            | int        | no        |

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
        "id": 43,
        "genres": [
          {
            "id": 1,
            "genre": "Animation"
          },
          {
            "id": 2,
            "genre": "Comedy"
          }
        ],
        "network": {
          "id": 1,
          "name": "Cartoon Network",
          "website": "https://www.cartoonnetwork.co.uk",
          "logo": "",
          "date_created": "2022-01-13T20:02:38.507854Z"
        },
        "characters": [
          {
            "id": 4,
            "voice_actors": [
              {
                "id": 2,
                "age": 46,
                "name": "John Doe",
                "image": "",
                "date_of_birth": "1975-07-15",
                "date_of_death": null,
                "biography": "",
                "date_created": "2022-02-07T17:36:46.263489Z"
              }
            ],
            "teams": [],
            "location_of_operation": null,
            "name": "Rigby",
            "alias": null,
            "image": "",
            "biography": "RIGBONINGGGGGGGGGG",
            "status": "ALIVE",
            "alignment": "GOOD",
            "intelligence": 0,
            "strength": 0,
            "speed": 0,
            "durability": 0,
            "power": 0,
            "combat": 0,
            "date_created": "2022-02-05T10:39:07.452127Z"
          }
        ],
        "name": "Regular Show",
        "summary": "The series revolves around the lives of two friends, a blue jay named Mordecai and a raccoon named Rigby—both employed as groundskeepers at a local park. Their regular attempts to slack off usually lead to surreal, extreme, and often supernatural misadventures. During these misadventures, they interact with the show's other main characters: Benson, Pops, Muscle Man, Hi-Five Ghost, Skips, Thomas, Margaret and Eileen.",
        "season_count": 8,
        "cover_image": "",
        "background_image": "",
        "status": "COMPLETED",
        "rating": 7,
        "website": "https://cartoonnetwork.com/",
        "imdb_id": "tt1710308",
        "tmdb_id": 31132,
        "date_created": "2022-03-09T09:49:45.682459Z"
      },
      "rating": 7,
      "date_created": "2022-02-26T13:28:31Z"
    }
  ]
}
```

</details>

<details id="add-cartoon-sub">
  <summary>Add cartoon subscription 🔒</summary>

**POST** `https://staging-kaboom.herokuapp.com/v1/accounts/cartoons/subscriptions/`

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
  "date_created": "2022-03-10T10:51:05.425717Z",
  "series": 44,
  "user": 1
}
```

</details>

<details id="remove-cartoon-sub">
  <summary>Remove cartoon subscription 🔒</summary>

**DELETE** `https://staging-kaboom.herokuapp.com/v1/accounts/cartoons/subscriptions/`

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

<details id="rate-cartoon">
  <summary>Rate cartoon 🔒</summary>

**POST** `https://staging-kaboom.herokuapp.com/v1/accounts/cartoons/subscriptions/rate/`

**JSON Body:**

| Name                     | Required   |
|--------------------------|------------|
| series                   | yes        |
| rating                   | yes        |

**Response:**

```json
{
  "series": 43,
  "user": 1,
  "id": 1,
  "rating": 9
}
```

</details>