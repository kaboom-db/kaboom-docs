---
sidebar_position: 8
---

# Genres

<details id="get-genres">
  <summary>Get genres</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/cartoons/genres/`

**Query params:**

| Name           | Value           | Type       | Required  |
|----------------|-----------------|------------|-----------|
| genre          | animation       | str        | no        |

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
      "genre": "Animation"
    }
  ]
}
```

</details>

<details id="get-spec-genre">
  <summary>Get specific genre</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/cartoons/genres/{genre_id}/`

**Response:**

```json
{
  "id": 1,
  "genre": "Animation"
}
```

</details>