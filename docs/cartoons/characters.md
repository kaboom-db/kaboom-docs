---
sidebar_position: 2
---

# Characters

Although characters are part of the cartoons endpoint, they are also applied to comics as well.

<details id="get-characters">
  <summary>Get characters</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/cartoons/characters/`

**Query params:**

| Name         | Value      | Type       | Required  |
|--------------|------------|------------|-----------|
| query        | regular    | str        | no        |
| alias        |            | str        | no        |
| voice_actors | 1          | int        | no        |
| page *       | 1          | int        | no        |

\* pagination purposes

**Response:**

```json
{
  "count": 1,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 7,
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
        },
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
      "teams": [
        {
          "id": 2,
          "name": "X-Men",
          "tagline": "Amazing X-Men",
          "disbanded": 2020,
          "history": "Thisis the historu",
          "logo": "",
          "date_created": "2022-02-12T13:48:02.991776Z"
        },
        {
          "id": 1,
          "name": "Avengers",
          "tagline": "Lol",
          "disbanded": 2020,
          "history": "TEST",
          "logo": "https://kaboomstaging.s3.amazonaws.com/0hcvsps.jpeg",
          "date_created": "2022-02-12T13:43:10.633911Z"
        }
      ],
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
      "date_created": "2022-02-12T14:00:21.187094Z"
    }
  ]
}
```

</details>

<details id="add-characters">
  <summary>Add characters 🔒</summary>

**POST** `https://staging-kaboom.herokuapp.com/v1/cartoons/characters/`

**Headers:**

| Name          | Value                   | Required   |
|---------------|-------------------------|------------|
| Authorization | Token user_access_token | yes        |

**JSON Body:**

| Name                     | Required   |
|--------------------------|------------|
| name                     | yes        |
| alias                    | no         |
| voice_actors_id          | no         |
| biography                | no         |
| teams_id                 | no         |
| status                   | yes        |
| alignment                | yes        |
| location_of_operation_id | no         |
| intelligence             | no         |
| strength                 | no         |
| speed                    | no         |
| durability               | no         |
| power                    | no         |
| combat                   | no         |

**Response:**

```json
{
  "id": 8,
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
  "teams": [
    {
      "id": 1,
      "name": "Avengers",
      "tagline": "Lol",
      "disbanded": 2020,
      "history": "TEST",
      "logo": "https://kaboomstaging.s3.amazonaws.com/0hcvsps.jpeg",
      "date_created": "2022-02-12T13:43:10.633911Z"
    }
  ],
  "location_of_operation": null,
  "name": "Steve Rogers",
  "alias": "Captain America",
  "image": "",
  "biography": "Super Soldier",
  "status": "ALIVE",
  "alignment": "GOOD",
  "intelligence": 0,
  "strength": 0,
  "speed": 0,
  "durability": 0,
  "power": 0,
  "combat": 0,
  "date_created": "2022-03-09T11:01:38.971902Z"
}
```

</details>

<details id="get-spec-characters">
  <summary>Get specific characters</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/cartoons/characters/{character_id}/`

**Response:**

```json
{
  "id": 8,
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
  "teams": [
    {
      "id": 1,
      "name": "Avengers",
      "tagline": "Lol",
      "disbanded": 2020,
      "history": "TEST",
      "logo": "https://kaboomstaging.s3.amazonaws.com/0hcvsps.jpeg",
      "date_created": "2022-02-12T13:43:10.633911Z"
    }
  ],
  "location_of_operation": null,
  "name": "Steve Rogers",
  "alias": "Captain America",
  "image": "",
  "biography": "Super Soldier",
  "status": "ALIVE",
  "alignment": "GOOD",
  "intelligence": 0,
  "strength": 0,
  "speed": 0,
  "durability": 0,
  "power": 0,
  "combat": 0,
  "date_created": "2022-03-09T11:01:38.971902Z"
}
```

</details>

<details id="update-spec-character">
  <summary>Update specific character 🔒</summary>

**PATCH** `https://staging-kaboom.herokuapp.com/v1/cartoons/characters/{character_id}/`

**Headers:**

| Name          | Value                   | Required   |
|---------------|-------------------------|------------|
| Authorization | Token user_access_token | yes        |

**JSON Body:**

| Name                     | Required   |
|--------------------------|------------|
| name                     | no         |
| alias                    | no         |
| voice_actors_id          | no         |
| biography                | no         |
| teams_id                 | no         |
| status                   | no         |
| alignment                | no         |
| location_of_operation_id | no         |
| intelligence             | no         |
| strength                 | no         |
| speed                    | no         |
| durability               | no         |
| power                    | no         |
| combat                   | no         |

**Response:**

```json
{
  "id": 8,
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
    },
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
  "teams": [
    {
      "id": 2,
      "name": "X-Men",
      "tagline": "Amazing X-Men",
      "disbanded": 2020,
      "history": "Thisis the historu",
      "logo": "",
      "date_created": "2022-02-12T13:48:02.991776Z"
    },
    {
      "id": 1,
      "name": "Avengers",
      "tagline": "Lol",
      "disbanded": 2020,
      "history": "TEST",
      "logo": "https://kaboomstaging.s3.amazonaws.com/0hcvsps.jpeg",
      "date_created": "2022-02-12T13:43:10.633911Z"
    }
  ],
  "location_of_operation": null,
  "name": "Steve Rogers",
  "alias": "Captain America",
  "image": "",
  "biography": "Super Soldier",
  "status": "ALIVE",
  "alignment": "GOOD",
  "intelligence": 0,
  "strength": 0,
  "speed": 0,
  "durability": 0,
  "power": 0,
  "combat": 0,
  "date_created": "2022-03-09T11:01:38.971902Z"
}
```

</details>