Authentication
=====

If you want to use the API to `GET` data from the database, you won't need to authenticate (log in). However all `POST` and `PATCH` requests sent to the `comics`
and `cartoons` endpoint require a user to be logged in, and so do ALL requests sent to the `accounts` endpoint.

Logging in to Kaboom is fairly simple. You first need to ensure that the user has an account on the Kaboom database.

.. _creating-an-account:

Creating an account
-----

In order to allow users to create an account, you need to send a `POST` request to the signup endpoint:

**POST** base_url/v1/accounts/signup/

You also need to send the users credentials as part of the JSON body, like this:

.. code-block:: JSON

    {
        "username": "testUser",
        "password": "super_strong_password",
        "email": "email@kaboom.com"
    }

All fields in the above JSON snippet are required.

If the request is valid, the server will respond with a 200 status code and a JSON string:

.. code-block:: JSON

    {
        "user_id": 4,
        "username": "testUser"
    }

The user has now signed up to Kaboom and can login.

.. _logging-in:

Logging in
-----

In order to allow users to add and edit data on the database, and access account features, your client needs to log them in. Kaboom uses access tokens to accomplish
this, each user has an access token that proves they are logged in instead of sending a username and password for every request.

To retrieve a users token, you need to send a `POST` request to the login endpoint:

**POST** base_url/v1/accounts/login/

You also need to send the user credentials of course, as part of the request body:

.. code-block:: JSON

    {
        "username": "testUser",
        "password": "super_strong_password"
    }

Note that the user's email is not needed when logging in. A valid request will return a JSON string like this:

.. code-block:: JSON

    {
        "token": "aabbccggeeffgghhiijjkkllmmnnooppqqrrsstt",
        "username": "testUser",
        "user_id": 4,
        "email": "email@kaboom.com",
        "image": "https://www.gravatar.com/avatar/910779446a7b713a28907668cafd9611?default=retro"
    }

User profile images are not stored in the Kaboom database, and is instead taken from Gravatar based on the user email.

After retrieving the JSON, make sure to `securely` store the token, this will be used in the Authorization header for requests that need authentication (see below).

.. _auth_requests

Auth requests
-----

Requests that need authentication (a user to be logged in) must have the user token in the Authorization header, in this format: <Authorization: Token {token}>