---
sidebar_position: 6
---

# Teams

Although teams are part of the cartoons endpoint, they apply to comics too.

<details id="get-teams">
  <summary>Get teams</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/cartoons/teams/`

**Query params:**

| Name           | Value           | Type       | Required  |
|----------------|-----------------|------------|-----------|
| query          | x-men           | str        | no        |

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
      "name": "X-Men",
      "tagline": "Amazing X-Men",
      "disbanded": 2020,
      "history": "History of X-Men",
      "logo": "",
      "date_created": "2022-02-12T13:48:02.991776Z"
    }
  ]
}
```

</details>

<details id="add-team">
  <summary>Add team 🔒</summary>

**POST** `https://staging-kaboom.herokuapp.com/v1/cartoons/teams/`

**Headers:**

| Name          | Value                   | Required   |
|---------------|-------------------------|------------|
| Authorization | Token user_access_token | yes        |

**JSON Body:**

| Name                     | Required   |
|--------------------------|------------|
| name                     | yes        |
| tagline                  | no         |
| disbanded                | no         |
| disbanded_label          | no         |
| history                  | no         |

**Response:**

```json
{
  "id": 3,
  "name": "Sinister Six",
  "tagline": null,
  "disbanded": null,
  "history": null,
  "logo": "",
  "date_created": "2022-03-09T12:40:35.036562Z"
}
```

</details>

<details id="get-spec-team">
  <summary>Get specific team</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/cartoons/teams/{team_id}/`

**Response:**

```json
{
  "id": 2,
  "name": "X-Men",
  "tagline": "Amazing X-Men",
  "disbanded": 2020,
  "history": "History of X-Men",
  "logo": "",
  "date_created": "2022-02-12T13:48:02.991776Z"
}
```

</details>

<details id="update-spec-team">
  <summary>Update specific team 🔒</summary>

**PATCH** `https://staging-kaboom.herokuapp.com/v1/cartoons/teams/{team_id}/`

**Headers:**

| Name          | Value                   | Required   |
|---------------|-------------------------|------------|
| Authorization | Token user_access_token | yes        |

**JSON Body:**

| Name                     | Required   |
|--------------------------|------------|
| name                     | no         |
| tagline                  | no         |
| disbanded                | no         |
| disbanded_label          | no         |
| history                  | no         |

**Response:**

```json
{
  "id": 2,
  "name": "X-Men",
  "tagline": "Amazing X-Men",
  "disbanded": 2020,
  "history": "Updated History",
  "logo": "",
  "date_created": "2022-02-12T13:48:02.991776Z"
}
```

</details>