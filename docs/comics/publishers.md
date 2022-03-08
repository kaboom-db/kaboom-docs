---
sidebar_position: 3
---

# Publishers

<details id="get-publishers">
  <summary>Get publishers</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/comics/publishers/`

**Query params:**

| Name       | Value      | Type       | Required  |
|------------|------------|------------|-----------|
| query      | marvel     | str        | no        |
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
      "name": "Marvel Comics",
      "logo": "",
      "website": null,
      "date_created": "2022-01-13T20:12:59.638024Z"
    }
  ]
}
```

</details>

<details id="add-publishers">
  <summary>Add publisher 🔒</summary>

**POST** `https://staging-kaboom.herokuapp.com/v1/comics/publishers/`

**Headers:**

| Name          | Value                   | Required   |
|---------------|-------------------------|------------|
| Authorization | Token user_access_token | yes        |

**JSON Body:**

| Name                  | Required   |
|-----------------------|------------|
| name                  | yes        |
| website               | no         |

**Response:**

```json
{
  "id": 2,
  "name": "Test Publisher",
  "logo": "",
  "website": "http://test.com/",
  "date_created": "2022-01-23T14:31:16.915642Z"
}
```

</details>

<details id="get-spec-publisher">
  <summary>Get specific publisher</summary>

**GET** `https://staging-kaboom.herokuapp.com/v1/comics/publishers/{publisher_id}/`

**Response:**

```json
{
  "id": 2,
  "name": "Test Publisher",
  "logo": "",
  "website": "http://test.com/",
  "date_created": "2022-01-23T14:31:16.915642Z"
}
```

</details>

<details id="update-spec-publisher">
  <summary>Update specific publisher 🔒</summary>

**PATCH** `https://staging-kaboom.herokuapp.com/v1/comics/publishers/{publisher_id}/`

**Headers:**

| Name          | Value                   | Required   |
|---------------|-------------------------|------------|
| Authorization | Token user_access_token | yes        |

**JSON Body:**

| Name                  | Required   |
|-----------------------|------------|
| name                  | no         |
| website               | no         |

**Response:**

```json
{
  "id": 2,
  "name": "Oni Press",
  "logo": "",
  "website": "https://onipress.com/",
  "date_created": "2022-01-23T14:38:27.574581Z"
}
```

</details>