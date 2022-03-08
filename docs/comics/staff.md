---
sidebar_position: 4
---

# Staff

<details id="get-staff">
  <summary>Get staff</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/comics/staff/`

**Query params:**

| Name       | Example      | Type       | Required  |
|------------|--------------|------------|-----------|
| query      | john doe     | str        | no        |
| position * | penciller    | str        | no        |
| page **    | 1            | int        | no        |

\* to see a list of possible positions go [here](/docs/comics/staff-positions)
\*\* pagination purposes

**Response:**

```json
{
  "count": 2,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 2,
      "position": {
        "id": 8,
        "position": "Designer"
      },
      "name": "James Halliday",
      "image": "",
      "date_of_birth": "1972-06-12",
      "date_of_death": "2039-04-15",
      "age": 66,
      "biography": "",
      "date_created": "2022-01-29T14:37:05.876780Z"
    },
    {
      "id": 1,
      "position": {
        "id": 2,
        "position": "Penciller"
      },
      "name": "John Doe",
      "image": "",
      "date_of_birth": "1988-11-10",
      "date_of_death": "2005-04-15",
      "age": 16,
      "biography": "Best penciller in the world",
      "date_created": "2022-01-29T14:25:18.610113Z"
    }
  ]
}
```

</details>

<details id="add-staff">
  <summary>Add staff 🔒</summary>

**POST** `https://staging-kaboom.herokuapp.com/v1/comics/staff/`

**Headers:**

| Name          | Value                   | Required   |
|---------------|-------------------------|------------|
| Authorization | Token user_access_token | yes        |

**JSON Body:**

| Name                  | Type       |
|-----------------------|------------|
| name                  | str        |
| position              | int        |
| date_of_birth         | date       |
| date_of_death         | date       |
| biography             | str        |

Staff age is calculated server side so is not needed.

**Response:**

```json
{
  "id": 3,
  "position": {
    "id": 8,
    "position": "Designer"
  },
  "name": "James Halliday",
  "image": "",
  "date_of_birth": "1972-06-12",
  "date_of_death": "2039-04-15",
  "age": 66,
  "biography": "",
  "date_created": "2022-01-31T20:18:41.707870Z"
}
```

</details>

<details id="get-spec-staff">
  <summary>Get specific staff</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/comics/staff/{staff_id}/`

**Response:**

```json
{
  "id": 1,
  "position": {
    "id": 2,
    "position": "Penciller"
  },
  "name": "John Doe",
  "image": "",
  "date_of_birth": "1988-11-10",
  "date_of_death": "2005-04-15",
  "age": 16,
  "biography": "Best penciller in the world",
  "date_created": "2022-01-29T14:25:18.610113Z"
}
```

</details>

<details id="update-spec-staff">
  <summary>Update specific staff 🔒</summary>

**PATCH** `https://staging-kaboom.herokuapp.com/v1/comics/staff/{staff_id}/`

**Headers:**

| Name          | Value                   | Required   |
|---------------|-------------------------|------------|
| Authorization | Token user_access_token | yes        |

**JSON Body:**

| Name                  | Type       |
|-----------------------|------------|
| name                  | str        |
| position              | int        |
| date_of_birth         | date       |
| date_of_death         | date       |
| biography             | str        |

**Response:**

```json
{
  "id": 1,
  "position": {
    "id": 2,
    "position": "Penciller"
  },
  "name": "John Doe",
  "image": "",
  "date_of_birth": "1988-11-10",
  "date_of_death": "2006-04-15",
  "age": 17,
  "biography": "Best penciller in the world",
  "date_created": "2022-01-31T20:24:36.930494Z"
}
```

</details>