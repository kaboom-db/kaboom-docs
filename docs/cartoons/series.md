---
sidebar_position: 1
---

# Series

A series in this context is a collection of episodes, typically released on a weekly basis (depending on the cartoon).

<details id="get-series">
  <summary>Get series</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/cartoons/series/`

**Query params:**

| Name       | Value      | Type       | Required  |
|------------|------------|------------|-----------|
| query      | regular    | str        | no        |
| genre      | animation  | str        | no        |
| status     | completed  | str options| no        |
| network    | 1          | int        | no        |
| page *     | 1          | int        | no        |

\* pagination purposes

**Response:**

```json
{
  "count": 1,
  "next": null,
  "previous": null,
  "results": [
    {
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
              "name": "Tanveer Najib",
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
    }
  ]
}
```

</details>

<details id="add-series">
  <summary>Add series 🔒</summary>

**POST** `https://staging-kaboom.herokuapp.com/v1/cartoons/series/`

**Headers:**

| Name          | Value                   | Required   |
|---------------|-------------------------|------------|
| Authorization | Token user_access_token | yes        |

**JSON Body:**

| Name          | Required   |
|---------------|------------|
| name          | yes        |
| status        | yes        |
| season_count  | yes        |
| network_id    | no         |
| summary       | no         |
| genres_id     | no         |
| website       | no         |
| imdb_id       | no         |
| tmdb_id       | no         |
| characters_id | no         |

**Response:**

```json
{
  "id": 44,
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
  "characters": [],
  "name": "Adventure Time",
  "summary": "Adventure Time!",
  "season_count": 10,
  "cover_image": "",
  "background_image": "",
  "status": "COMPLETED",
  "rating": null,
  "website": null,
  "imdb_id": null,
  "tmdb_id": null,
  "date_created": "2022-03-09T10:21:02.071847Z"
}
```

</details>

<details id="get-spec-series">
  <summary>Get specific series</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/cartoons/series/{cartoon_id}/`

**Response:**

```json
{
  "id": 44,
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
  "characters": [],
  "name": "Adventure Time",
  "summary": "Adventure Time!",
  "season_count": 10,
  "cover_image": "",
  "background_image": "",
  "status": "COMPLETED",
  "rating": null,
  "website": null,
  "imdb_id": null,
  "tmdb_id": null,
  "date_created": "2022-03-09T10:21:02.071847Z"
}
```

</details>

<details id="update-spec-series">
  <summary>Update specific series 🔒</summary>

**PATCH** `https://staging-kaboom.herokuapp.com/v1/cartoons/series/{cartoon_id}/`

**Headers:**

| Name          | Value                   | Required   |
|---------------|-------------------------|------------|
| Authorization | Token user_access_token | yes        |

**JSON Body:**

| Name          | Required   |
|---------------|------------|
| name          | no         |
| status        | no         |
| season_count  | no         |
| network_id    | no         |
| summary       | no         |
| genres_id     | no         |
| website       | no         |
| imdb_id       | no         |
| tmdb_id       | no         |
| characters_id | no         |

**Response:**

```json
{
  "id": 44,
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
  "name": "Adventure Time",
  "summary": "Adventure Time!",
  "season_count": 10,
  "cover_image": "",
  "background_image": "",
  "status": "COMPLETED",
  "rating": null,
  "website": null,
  "imdb_id": null,
  "tmdb_id": null,
  "date_created": "2022-03-09T10:21:02.071847Z"
}
```

</details>