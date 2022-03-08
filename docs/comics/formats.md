---
sidebar_position: 6
---

# Formats

The database holds a list of formats an issue can be.
Just like staff positions, if you want to filter all issues by format, you would send the format id in the query params.

<details id="get-formats">
  <summary>Get formats</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/comics/formats/`

**Query params:**

| Name       | Example      | Type       | Required  |
|------------|--------------|------------|-----------|
| name       | comic        | str        | no        |
| page *     | 1            | int        | no        |

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
      "name": "Comic"
    }
  ]
}
```

</details>

<details id="get-spec-format">
  <summary>Get specific format</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/comics/formats/{format_id}/`

**Response:**

```json
{
   "id": 1,
   "name": "Comic"
}
```

</details>