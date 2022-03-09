---
sidebar_position: 4
---

# Networks

<details id="get-networks">
  <summary>Get networks</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/cartoons/networks/`

**Query params:**

| Name           | Value           | Type       | Required  |
|----------------|-----------------|------------|-----------|
| query          | cartoon network | str        | no        |
| website        |                 | str        | no        |
| page *         | 1               | int        | no        |

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
      "name": "Cartoon Network",
      "website": "",
      "logo": "",
      "date_created": "2022-01-13T20:02:38.507854Z"
    }
  ]
}
```

</details>

<details id="add-network">
  <summary>Add network 🔒</summary>

**POST** `https://staging-kaboom.herokuapp.com/v1/cartoons/networks/`

**Headers:**

| Name          | Value                   | Required   |
|---------------|-------------------------|------------|
| Authorization | Token user_access_token | yes        |

**JSON Body:**

| Name                     | Required   |
|--------------------------|------------|
| name                     | yes        |
| website                  | no         |

**Response:**

```json
{
  "id": 2,
  "name": "Adult Swim",
  "website": "https://www.adultswim.com",
  "logo": "",
  "date_created": "2022-03-09T12:20:26.053871Z"
}
```

</details>

<details id="get-spec-network">
  <summary>Get specific network</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/cartoons/networks/{network_id}/`

**Response:**

```json
{
  "id": 1,
  "name": "Cartoon Network",
  "website": "",
  "logo": "",
  "date_created": "2022-01-13T20:02:38.507854Z"
}
```

</details>

<details id="update-spec-character">
  <summary>Update specific network 🔒</summary>

**PATCH** `https://staging-kaboom.herokuapp.com/v1/cartoons/networks/{network_id}/`

**Headers:**

| Name          | Value                   | Required   |
|---------------|-------------------------|------------|
| Authorization | Token user_access_token | yes        |

**JSON Body:**

| Name                     | Required   |
|--------------------------|------------|
| name                     | no         |
| website                  | no         |

**Response:**

```json
{
	"id": 1,
	"name": "Cartoon Network",
	"website": "https://www.cartoonnetwork.co.uk",
	"logo": "",
	"date_created": "2022-01-13T20:02:38.507854Z"
}
```

</details>