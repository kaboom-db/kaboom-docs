Authentication
=====

If you want to use the API to `GET` data from the database, you won't need to authenticate (log in). However all `POST` and `PATCH` requests sent to the `comics`
and `cartoons` endpoint require a user to be logged in, and so do ALL requests sent to the `accounts` endpoint.

Logging in to Kaboom is fairly simple. You first need to ensure that the user has an account on Kaboom.

.. _creating an account:

Creating an account
=====

In order to allow users to create an account, you need to send a `POST` request to the signup endpoint:

`POST` base_url/v1/accounts/signup/

You also need to send the users credentials as part of the JSON body, like this:

.. code-block:: json

{
    "username": "testUser",
    "password": "Qwe213d", // This is not a real password or account lol
    "email": "email@kaboom.com"
}