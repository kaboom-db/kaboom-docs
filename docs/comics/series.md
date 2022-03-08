---
sidebar_position: 1
---

# Series

A comic series is a series (or collection) of issues, typically released on a weekly or monthly basis.

<details id="get-series">
  <summary>Get series</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/comics/series/`

**Query params:**

| Name       | Value      | Type       | Required  |
|------------|------------|------------|-----------|
| query      | morty      | str        | no        |
| status     | completed  | str options| no        |
| year       | 2017       | int        | no        |
| publisher  | oni press  | int        | no        |
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
      "id": 1,
      "publisher": {
        "id": 1,
        "name": "Oni Press",
        "logo": "",
        "website": "https://onipress.com",
        "date_created": "2022-01-17T19:14:42.131974Z"
      },
      "series_name": "Rick and Morty: Pocket Like You Stole It",
      "summary": "Five issue mini-series.",
      "year_started": 2017,
      "status": "COMPLETED",
      "cover_image": "/media/RMPLYSI.jpg",
      "background_image": "",
      "rating": 6.0,
      "date_created": "2022-01-17T19:25:05.609164Z"
    }
  ]
}
```

</details>

<details id="add-series">
  <summary>Add series 🔒</summary>

**POST** `https://staging-kaboom.herokuapp.com/v1/comics/series/`

**Headers:**

| Name          | Value                   | Required   |
|---------------|-------------------------|------------|
| Authorization | Token user_access_token | yes        |

**JSON Body:**

| Name          | Required   |
|---------------|------------|
| series_name   | yes        |
| publisher_id  | no         |
| year_started  | yes        |
| status        | yes        |
| summary       | no         |

**Response:**

```json
{
  "id": 2,
  "publisher": {
    "id": 1,
    "name": "Oni Press",
    "logo": "",
    "website": "https://onipress.com",
    "date_created": "2022-01-17T19:14:42.131974Z"
  },
  "series_name": "The Amazing Comic",
  "summary": "An amazing comic series",
  "year_started": 2023,
  "status": "PLANNED",
  "cover_image": "",
  "background_image": "",
  "rating": null,
  "date_created": "2022-01-18T18:42:52.343615Z"
}
```

</details>

<details id="get-spec-series">
  <summary>Get specific series</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/comics/series/{comic_id}/`

**Response:**

```json
{
  "id": 1,
  "publisher": {
    "id": 1,
    "name": "Oni Press",
    "logo": "",
    "website": "https://onipress.com",
    "date_created": "2022-01-17T19:14:42.131974Z"
  },
  "series_name": "Rick and Morty: Pocket Like You Stole It",
  "summary": "Five issue mini-series.",
  "year_started": 2017,
  "status": "COMPLETED",
  "cover_image": "/media/RMPLYSI.jpg",
  "background_image": "",
  "rating": 6.0,
  "date_created": "2022-01-17T19:25:05.609164Z"
}
```

</details>

<details id="update-spec-series">
  <summary>Update specific series 🔒</summary>

**PATCH** `https://staging-kaboom.herokuapp.com/v1/comics/series/{comic_id}/`

**Headers:**

| Name          | Value                   | Required   |
|---------------|-------------------------|------------|
| Authorization | Token user_access_token | yes        |

**JSON Body:**

| Name          | Required   |
|---------------|------------|
| series_name   | no         |
| publisher_id  | no         |
| year_started  | no         |
| status        | no         |
| summary       | no         |

**Response:**

```json
{
  "id": 2,
  "publisher": {
    "id": 1,
    "name": "Oni Press",
    "logo": "",
    "website": "https://onipress.com",
    "date_created": "2022-01-17T19:14:42.131974Z"
  },
  "series_name": "The NEW Amazing Comic",
  "summary": "The Amazing Comic, but NEW",
  "year_started": 2017,
  "status": "PLANNED",
  "cover_image": "",
  "background_image": "",
  "rating": null,
  "date_created": "2022-01-18T19:05:52.109969Z"
}
```

</details>