---
sidebar_position: 5
---

# Voice Actors

<details id="get-actors">
  <summary>Get voice actors</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/cartoons/actors/`

**Query params:**

| Name           | Value           | Type       | Required  |
|----------------|-----------------|------------|-----------|
| query          | test actor      | str        | no        |

\* pagination purposes

**Response:**

```json
{
  "count": 1,
  "next": null,
  "previous": null,
  "results": [
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
  ]
}
```

</details>

<details id="add-actor">
  <summary>Add voice actor 🔒</summary>

**POST** `https://staging-kaboom.herokuapp.com/v1/cartoons/networks/`

**Headers:**

| Name          | Value                   | Required   |
|---------------|-------------------------|------------|
| Authorization | Token user_access_token | yes        |

**JSON Body:**

| Name                     | Required   |
|--------------------------|------------|
| name                     | yes        |
| date_of_birth            | no         |
| date_of_death            | no         |
| biography                | no         |

**Response:**

```json
{
  "id": 5,
  "age": 39,
  "name": "JG Quintel",
  "image": "",
  "date_of_birth": "1982-09-13",
  "date_of_death": null,
  "biography": "Creator of Regular Show",
  "date_created": "2022-03-09T12:29:57.987512Z"
}
```

</details>

<details id="get-spec-actor">
  <summary>Get specific voice actor</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/cartoons/actors/{voiceactor_id}/`

**Response:**

```json
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
```

</details>

<details id="update-spec-actor">
  <summary>Update specific voice actor 🔒</summary>

**PATCH** `https://staging-kaboom.herokuapp.com/v1/cartoons/actors/{voiceactor_id}/`

**Headers:**

| Name          | Value                   | Required   |
|---------------|-------------------------|------------|
| Authorization | Token user_access_token | yes        |

**JSON Body:**

| Name                     | Required   |
|--------------------------|------------|
| name                     | no         |
| date_of_birth            | no         |
| date_of_death            | no         |
| biography                | no         |

**Response:**

```json
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
```

</details>