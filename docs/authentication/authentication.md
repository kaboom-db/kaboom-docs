# Authentication

## Overview

If you want to use the API to `GET` data from the database, you won't need to authenticate (log in). However all `POST`, `DELETE` and `PATCH` requests sent to the `comics`
and `cartoons` endpoint require a user to be logged in, and so do ALL requests sent to the `accounts` endpoint.

Logging in to Kaboom is fairly simple. You first need to ensure that the user has an account on the Kaboom database.

## Auth requests

Requests that need authentication (a user to be logged in) must have the user token in the Authorization header, in this format: `<Authorization: Token {token}>`