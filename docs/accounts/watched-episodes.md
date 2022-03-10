---
sidebar_position: 5
---

# Watched Episodes

<details id="get-watched-episodes">
  <summary>Get watched episodes 🔒</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/accounts/cartoons/episodes/`

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
  "count": 2,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 2,
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
      "episode": {
        "id": 2,
        "series": {
          "id": 34,
          "genres": [],
          "network": {
            "id": 1,
            "name": "Cartoon Network",
            "website": "https://www.cartoonnetwork.co.uk",
            "logo": "",
            "date_created": "2022-01-13T20:02:38.507854Z"
          },
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
          "name": "The Transformers - Bayverse",
          "summary": "",
          "season_count": 1,
          "cover_image": "",
          "background_image": "",
          "status": "COMPLETED",
          "rating": 7,
          "website": null,
          "imdb_id": null,
          "tmdb_id": null,
          "date_created": "2022-02-01T20:48:10.053617Z"
        },
        "episode_number": 2,
        "season_number": 1,
        "name": "Test Episode",
        "summary": "",
        "release_date": "2022-01-29",
        "screenshot": "https://kaboomstaging.s3.amazonaws.com/0hcvsps_ekjGYPe.jpeg",
        "date_created": "2022-02-04T14:51:41.818954Z",
        "runtime": 10
      },
      "watched_at": "2022-01-29T11:15:13Z"
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
          "bio": "![hello there](https://media4.giphy.com/media/Nx0rz3jtxtEre/giphy.gif)\n\n## Hi!",
          "private": false
        }
      },
      "episode": {
        "id": 1,
        "series": {
          "id": 34,
          "genres": [],
          "network": {
            "id": 1,
            "name": "Cartoon Network",
            "website": "https://www.cartoonnetwork.co.uk",
            "logo": "",
            "date_created": "2022-01-13T20:02:38.507854Z"
          },
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
          "name": "The Transformers - Bayverse",
          "summary": "",
          "season_count": 1,
          "cover_image": "",
          "background_image": "",
          "status": "COMPLETED",
          "rating": 7,
          "website": null,
          "imdb_id": null,
          "tmdb_id": null,
          "date_created": "2022-02-01T20:48:10.053617Z"
        },
        "episode_number": 1,
        "season_number": 1,
        "name": "Indiana Jones",
        "summary": "",
        "release_date": "2022-01-12",
        "screenshot": "https://kaboomstaging.s3.amazonaws.com/AveAobC_zskjvuC.png",
        "date_created": "2022-01-12T19:31:32.295233Z",
        "runtime": 10
      },
      "watched_at": "2022-01-29T11:12:34Z"
    }
  ]
}
```

</details>

<details id="add-watched-episode">
  <summary>Add watched episode 🔒</summary>

**POST** `https://staging-kaboom.herokuapp.com/v1/accounts/cartoons/episodes/`

**JSON Body:**

| Name                     | Required   |
|--------------------------|------------|
| episode                  | yes        |
| watched_at *             | no         |

\* watched_at will default to the current time of the request, so is not needed.

**Response:**

```json
{
  "id": 7,
  "watched_at": "2022-03-10T11:05:11.662933Z",
  "episode": 1,
  "user": 1
}
```

</details>

<details id="remove-watched-episode">
  <summary>Remove watched episode 🔒</summary>

**DELETE** `https://staging-kaboom.herokuapp.com/v1/accounts/cartoons/episodes/`

**JSON Body:**

| Name                     | Required   |
|--------------------------|------------|
| watched_id               | yes        |

**Response:**

```json
{
  "success": "Unwatched the episode"
}
```

</details>

<details id="clean-watched-episodes">
  <summary>Clean watched episodes 🔒</summary>

**DELETE** `https://staging-kaboom.herokuapp.com/v1/accounts/cartoons/episodes/clean/`

**JSON Body:**

| Name                     | Required   |
|--------------------------|------------|
| episode                  | yes        |

**Response:**

```json
{
  "success": "All watched states have been removed from this episode."
}
```

</details>