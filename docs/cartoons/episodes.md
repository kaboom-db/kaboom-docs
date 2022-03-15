---
sidebar_position: 2
---

# Episodes

<details id="get-episodes">
  <summary>Get episodes</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/cartoons/episodes/`

**Query params:**

| Name                | Value      | Type       | Required  |
|---------------------|------------|------------|-----------|
| query               | the power  | str        | no        |
| series              | 43         | int        | no        |
| release_date_before |            | date       | no        |
| release_date_after  |            | date       | no        |
| season_number       | 1          | int        | no        |
| episode_number      | 1          | int        | no        |
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
      "id": 5,
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
          "website": "",
          "logo": "",
          "date_created": "2022-01-13T20:02:38.507854Z"
        },
        "characters": [
          {
            "id": 4,
            "voice_actors": [
              {
                "id": 2,
                "age": 19,
                "name": "Test Actor",
                "image": "",
                "date_of_birth": "2002-07-15",
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
        "rating": null,
        "website": "https://cartoonnetwork.com/",
        "imdb_id": "tt1710308",
        "tmdb_id": 31132,
        "date_created": "2022-03-09T09:49:45.682459Z"
      },
      "episode_number": 1,
      "season_number": 1,
      "name": "The Power",
      "summary": "Mordecai and Rigby must find a way to cover up a hole in the wall they created, and a magical keyboard they name 'The Power' might be just the thing for it.",
      "release_date": "2010-09-06",
      "screenshot": "",
      "date_created": "2022-03-09T11:35:22.568420Z",
      "runtime": 11
    }
  ]
}
```

</details>

<details id="add-episode">
  <summary>Add episode 🔒</summary>

**POST** `https://staging-kaboom.herokuapp.com/v1/cartoons/episode/`

**Headers:**

| Name          | Value                   | Required   |
|---------------|-------------------------|------------|
| Authorization | Token user_access_token | yes        |

**JSON Body:**

| Name                     | Required   |
|--------------------------|------------|
| episode_number           | yes        |
| season_number            | yes        |
| series                   | yes        |
| name                     | yes        |
| summary                  | no         |
| release_date             | no         |
| runtime                  | yes        |

**Response:**

```json
{
  "id": 6,
  "episode_number": 2,
  "season_number": 1,
  "name": "Just Set Up the Chairs",
  "summary": "A birthday party is scheduled in the park, and everyone has interesting jobs to do. That is, everybody but Mordecai and Rigby, who are only trusted with the lame job of setting up the chairs. In order to prove they are not slackers, the duo agree to set them up without being distracted.",
  "release_date": "2010-09-13",
  "screenshot": "",
  "date_created": "2022-03-09T11:42:40.809862Z",
  "runtime": 11,
  "series": 43
}
```

</details>

<details id="get-spec-episode">
  <summary>Get specific episode</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/cartoons/episodes/{episode_id}/`

**Response:**

```json
{
  "id": 5,
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
      "website": "",
      "logo": "",
      "date_created": "2022-01-13T20:02:38.507854Z"
    },
    "characters": [
      {
        "id": 4,
        "voice_actors": [
          {
            "id": 2,
            "age": 19,
            "name": "Test Actor",
            "image": "",
            "date_of_birth": "2002-07-15",
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
    "rating": null,
    "website": "https://cartoonnetwork.com/",
    "imdb_id": "tt1710308",
    "tmdb_id": 31132,
    "date_created": "2022-03-09T09:49:45.682459Z"
  },
  "episode_number": 1,
  "season_number": 1,
  "name": "The Power",
  "summary": "Mordecai and Rigby must find a way to cover up a hole in the wall they created, and a magical keyboard they name 'The Power' might be just the thing for it.",
  "release_date": "2010-09-06",
  "screenshot": "",
  "date_created": "2022-03-09T11:35:22.568420Z",
  "runtime": 11
}
```

</details>

<details id="update-spec-character">
  <summary>Update specific episode 🔒</summary>

**PATCH** `https://staging-kaboom.herokuapp.com/v1/cartoons/episodes/{episode_id}/`

**Headers:**

| Name          | Value                   | Required   |
|---------------|-------------------------|------------|
| Authorization | Token user_access_token | yes        |

**JSON Body:**

| Name                     | Required   |
|--------------------------|------------|
| episode_number           | no         |
| season_number            | no         |
| series                   | no         |
| name                     | no         |
| summary                  | no         |
| release_date             | no         |
| runtime                  | no         |

**Response:**

```json
{
  "id": 5,
  "episode_number": 1,
  "season_number": 1,
  "name": "The Power",
  "summary": "FIRST EPISODE OF REGULAR SHOW",
  "release_date": "2010-09-06",
  "screenshot": "",
  "date_created": "2022-03-09T11:35:22.568420Z",
  "runtime": 11,
  "series": 43
}
```

</details>