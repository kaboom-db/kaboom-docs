---
sidebar_position: 1
---

# Kaboom API

## What is Kaboom?

Kaboom is a service for tracking comics and cartoons, with an API to retrieve and add data. As of right now, Kaboom is just a hobby project, and won't be deployed until I have sufficient experience in cloud services.

Before starting, please read the [Developer Guidlines](https://github.com/kaboom-db/kaboom-api/blob/master/DEV_GUIDELINES.md).

## Developer Notes

If you want to make a client for Kaboom but don't want to go through the hassle of self hosting it, you can use the demo/staging server located here: https://staging-kaboom.herokuapp.com/v1

You can also download the Postman collection here, which is pre-configured with the staging url and a demo user access token: https://github.com/crxssed7/kaboom-api/blob/master/KABOOM.postman_collection.json

All **POST** and **PATCH** requests must be sent with a trailing / at the end of the URL.

Any data uploaded to the staging database does not persist and will be refreshed frequently.

Note that all endpoints marked with 🔒 require a user to be logged in.