---
sidebar_position: 7
---

# Locations

Although locations are part of the cartoons endpoint, they apply to comics too.

<details id="get-locations">
  <summary>Get locations</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/cartoons/locations/`

**Query params:**

| Name           | Value           | Type       | Required  |
|----------------|-----------------|------------|-----------|
| city           | berlin          | str        | no        |
| nation         | germany         | str        | no        |

\* pagination purposes

**Response:**

```json
{
  "count": 1,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 23,
      "city": "Berlin",
      "nation": "Germany",
      "date_created": "2022-02-19T12:00:09.179652Z"
    }
  ]
}
```

</details>

<details id="add-location">
  <summary>Add location 🔒</summary>

**POST** `https://staging-kaboom.herokuapp.com/v1/cartoons/locations/`

**Headers:**

| Name          | Value                   | Required   |
|---------------|-------------------------|------------|
| Authorization | Token user_access_token | yes        |

**JSON Body:**

| Name                     | Required   |
|--------------------------|------------|
| city                     | no         |
| nation                   | yes        |

**Response:**

```json
{
  "id": 29,
  "city": "London",
  "nation": "United Kingdom",
  "date_created": "2022-03-09T12:50:52.078095Z"
}
```

</details>

<details id="get-spec-location">
  <summary>Get specific location</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/cartoons/locations/{location_id}/`

**Response:**

```json
{
	"id": 26,
	"city": "Imaya",
	"nation": "Africa",
	"date_created": "2022-02-19T12:00:12.285023Z"
}
```

</details>

<details id="update-spec-location">
  <summary>Update specific location 🔒</summary>

**PATCH** `https://staging-kaboom.herokuapp.com/v1/cartoons/locations/{location_id}/`

**Headers:**

| Name          | Value                   | Required   |
|---------------|-------------------------|------------|
| Authorization | Token user_access_token | yes        |

**JSON Body:**

| Name                     | Required   |
|--------------------------|------------|
| city                     | no         |
| nation                   | yes        |

**Response:**

```json
{
  "id": 29,
  "city": "London",
  "nation": "United Kingdom",
  "date_created": "2022-03-09T12:50:52.078095Z"
}
```

</details>