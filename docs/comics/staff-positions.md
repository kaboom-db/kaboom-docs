---
sidebar_position: 5
---

# Staff Positions

The database holds specific staff positions to use when making requests.
If you're filtering to get all staff of a specific position, you would send the position id.

<details id="get-staff-positions">
  <summary>Get staff positions</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/comics/staffpositions/`

**Query params:**

| Name       | Example      | Type       | Required  |
|------------|--------------|------------|-----------|
| position   | penciller    | str        | no        |
| page *     | 1            | int        | no        |

\* pagination purposes

**Response:**

```json
{
  "count": 11,
  "next": "http://staging-kaboom.herokuapp.com/v1/comics/staffpositions/?page=2",
  "previous": null,
  "results": [
    {
      "id": 1,
      "position": "Writer"
    },
    {
      "id": 2,
      "position": "Penciller"
    },
    {
      "id": 3,
      "position": "Cover Artist"
    },
    {
      "id": 4,
      "position": "Inker"
    },
    {
      "id": 5,
      "position": "Variant Cover Artist"
    },
    {
      "id": 6,
      "position": "Colorist"
    },
    {
      "id": 7,
      "position": "Letterer"
    },
    {
      "id": 8,
      "position": "Designer"
    },
    {
      "id": 9,
      "position": "Editor"
    },
    {
      "id": 10,
      "position": "Executive Editor"
    }
  ]
}
```

</details>

<details id="get-spec-staff-pos">
  <summary>Get specific staff position</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/comics/staffpositions/{position_id}/`

**Response:**

```json
{
   "id": 1,
   "position": "Writer"
}
```

</details>