---
sidebar_position: 1
---

# Creating an account

In order to allow users to create an account, you need to send a `POST` request to the signup endpoint:

**POST** https://staging-kaboom.herokuapp.com/v1/accounts/signup/

You also need to send the users credentials as part of the JSON body, like this:

```json
{
    "username": "testUser",
    "password": "super_strong_password",
    "email": "email@kaboom.com"
}
```

All fields in the above JSON snippet are required.

If the request is valid, the server will respond with a 200 status code and a JSON string:

```json
{
    "user_id": 4,
    "username": "testUser"
}
```

The user has now signed up to Kaboom and can login.