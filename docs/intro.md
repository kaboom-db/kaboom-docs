---
sidebar_position: 1
---

# Kaboom API

## What is Kaboom?

Kaboom is a service for tracking comics and cartoons, with an API to retrieve and add data. As of right now, Kaboom is just a backend, and the [website](https://github.com) does not provide a frontend to interface with the service *yet*. This is why Kaboom needs frontend clients, for users to access the service.

Before starting, please read the [Developer Guidlines](https://github.com/kaboom-db/kaboom-api/blob/master/DEV_GUIDELINES.md).

## Developer Notes

While testing your client, please make sure to only use the staging server, located here: https://staging-kaboom.herokuapp.com/v1

You can also download the Postman collection here, which is pre-configured with the staging url and a demo user access token: https://github.com/crxssed7/kaboom-api/blob/master/KABOOM.postman_collection.json

All **POST** and **PATCH** requests must be sent with a trailing / at the end of the URL.

Any data uploaded to the staging database does not persist and will be refreshed frequently.