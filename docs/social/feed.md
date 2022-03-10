---
sidebar_position: 3
---

# Feed

The Kaboom user feed is a bit limited. By passing a "feed type", you can get a list of comics, issues, thoughts etc that have been watched/read/created by the people that the user follows.

**GET** `https://staging-kaboom.herokuapp.com/v1/social/feed/`

**Headers:**

| Name          | Value                   | Required   |
|---------------|-------------------------|------------|
| Authorization | Token user_access_token | yes        |

**Query params:**

| Name                | Value      | Type       | Required  |
|---------------------|------------|------------|-----------|
| type                | comic      | str        | no        |
| page *              | 1          | int        | no        |

\* pagination purposes

If no type is given, it will default to 'thought'. Have a look at the extra info section to see what feed types are possible.

**Response:**

```json
{
  "count": 1,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 2,
      "user": {
        "username": "tnajib",
        "id": 29,
        "image": "https://www.gravatar.com/avatar/83fcf152ca5333e33700c00ee62d9e73?default=retro",
        "date_joined": "2022-02-10",
        "time_joined": "20:04:29",
        "is_staff": false,
        "userdata": {
          "bio": "",
          "private": false
        }
      },
      "series": {
        "id": 1,
        "publisher": null,
        "series_name": "Test Comic",
        "summary": "",
        "year_started": 2022,
        "status": "COMPLETED",
        "cover_image": "https://kaboomstaging.s3.amazonaws.com/AveAobC_LF9uyQV.png",
        "background_image": "https://kaboomstaging.s3.amazonaws.com/AveAobC_LF9uyQV.png",
        "rating": 5,
        "date_created": "2022-03-10T10:12:13.647295Z"
      },
      "rating": 6,
      "date_created": "2022-02-26T13:29:27Z"
    }
  ]
}
```