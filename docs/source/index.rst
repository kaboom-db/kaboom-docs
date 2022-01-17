Welcome to Kaboom's documentation!
===================================

What is Kaboom?
-----

Kaboom is a service for tracking comics and cartoons, with an API to retrieve and add data. As of right now, Kaboom is just a backend, and the `website <http://www.python.org/>`_ does not provide a frontend to interface with the service *yet*. This is why Kaboom needs frontend clients, for users to access the service.

Before starting, please read the `Developer Guidlines <http://www.python.org/>`_.

.. _developer-notes:

Developer Notes
-----

While testing your client, please make sure to only use the staging server, located here: https://staging-kaboom.herokuapp.com/v1

You can also download the Postman collection here, which is pre-configured with the staging url and a demo user access token: https://github.com/crxssed7/kaboom-api/blob/master/KABOOM.postman_collection.json

Any data uploaded to the staging database does not persist and will be refreshed frequently.

.. note::

   This project is under active development and is not in a usable state.

Contents
--------

.. toctree::

   authentication
   api
