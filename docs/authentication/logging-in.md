---
sidebar_position: 3
---

# Logging in

In order to allow users to add and edit data on the database, and access account features, your client needs to log them in. Kaboom uses access tokens to accomplish
this, each user has an access token that proves they are logged in instead of sending a username and password for every request.

To retrieve a users token, you need to send a `POST` request to the login endpoint:

**POST** https://staging-kaboom.herokuapp.com/v1/accounts/login/

You also need to send the user credentials of course, as part of the request body:

```json
{
    "username": "testUser",
    "password": "super_strong_password"
}
```

Note that the user's email is not needed when logging in. A valid request will return a JSON string like this:

```json
{
    "token": "aabbccggeeffgghhiijjkkllmmnnooppqqrrsstt",
    "username": "testUser",
    "user_id": 4,
    "email": "email@kaboom.com",
    "image": "https://www.gravatar.com/avatar/910779446a7b713a28907668cafd9611?default=retro"
}
```

User profile images are not stored in the Kaboom database, and is instead taken from Gravatar based on the user email.

After retrieving the JSON, make sure to `securely` store the token, this will be used in the Authorization header for requests that need authentication (see below).