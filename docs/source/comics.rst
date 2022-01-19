Comics
=====

All endpoints marked with 🔒 require a user to be logged in.

.. comic-series:

Comic Series
-----

Get comic series
#####

**GET** https://staging-kaboom.herokuapp.com/v1/comics/series/

Query params:

+------------+------------+------------+-----------+
| Name       | Value      | Type       | Required  |
+============+============+============+===========+
| query      | morty      | str        | no        |
+------------+------------+------------+-----------+
| status     | completed  | str options| no        |
+------------+------------+------------+-----------+
| year       | 2017       | int        | no        |
+------------+------------+------------+-----------+
| publisher  | oni press  | int        | no        |
+------------+------------+------------+-----------+
| page *     | 1          | int        | no        |
+------------+------------+------------+-----------+

* pagination purposes

Response:

.. code-block:: JSON

   {
      "count": 1,
      "next": null,
      "previous": null,
      "results": [
         {
            "id": 1,
            "publisher": {
               "id": 1,
               "name": "Oni Press",
               "logo": "",
               "website": "https://onipress.com",
               "date_created": "2022-01-17T19:14:42.131974Z"
            },
            "series_name": "Rick and Morty: Pocket Like You Stole It",
            "summary": "Five issue mini-series.",
            "year_started": 2017,
            "status": "COMPLETED",
            "cover_image": "/media/RMPLYSI.jpg",
            "background_image": "",
            "rating": 6.0,
            "date_created": "2022-01-17T19:25:05.609164Z"
         }
      ]
   }

Add comic series 🔒
#####

**POST** https://staging-kaboom.herokuapp.com/v1/comics/series/

Headers: 

+---------------+-------------------------+------------+
| Name          | Value                   | Required   |
+===============+=========================+============+
| Authorization | Token user_access_token | yes        |
+---------------+-------------------------+------------+

JSON Body:

+---------------+------------+
| Name          | Required   |
+===============+============+
| series_name   | yes        |
+---------------+------------+
| publisher_id  | no         |
+---------------+------------+
| year_started  | yes        |
+---------------+------------+
| status        | yes        |
+---------------+------------+
| summary       | no         |
+---------------+------------+

.. code-block:: JSON

   {
      "series_name": "The Amazing Comic",
      "publisher_id": 1,
      "year_started": 2023,
      "status": "PLANNED",
      "summary": "An amazing comic series"
   }

Response:

.. code-block:: JSON

   {
      "id": 2,
      "publisher": {
         "id": 1,
         "name": "Oni Press",
         "logo": "",
         "website": "https://onipress.com",
         "date_created": "2022-01-17T19:14:42.131974Z"
      },
      "series_name": "The Amazing Comic",
      "summary": "An amazing comic series",
      "year_started": 2023,
      "status": "PLANNED",
      "cover_image": "",
      "background_image": "",
      "rating": null,
      "date_created": "2022-01-18T18:42:52.343615Z"
   }

Get specific comic series
#####

**GET** https://staging-kaboom.herokuapp.com/v1/comics/series/{comic_id}/

Response:

.. code-block:: JSON

   {
      "id": 1,
      "publisher": {
         "id": 1,
         "name": "Oni Press",
         "logo": "",
         "website": "https://onipress.com",
         "date_created": "2022-01-17T19:14:42.131974Z"
      },
      "series_name": "Rick and Morty: Pocket Like You Stole It",
      "summary": "Five issue mini-series.",
      "year_started": 2017,
      "status": "COMPLETED",
      "cover_image": "/media/RMPLYSI.jpg",
      "background_image": "",
      "rating": 6.0,
      "date_created": "2022-01-17T19:25:05.609164Z"
   }

Update specific comic series 🔒
#####

**PATCH** https://staging-kaboom.herokuapp.com/v1/comics/series/{comic_id}/

Headers: 

+---------------+-------------------------+------------+
| Name          | Value                   | Required   |
+===============+=========================+============+
| Authorization | Token user_access_token | yes        |
+---------------+-------------------------+------------+

JSON Body:

+---------------+------------+
| Name          | Required   |
+===============+============+
| series_name   | no         |
+---------------+------------+
| publisher_id  | no         |
+---------------+------------+
| year_started  | no         |
+---------------+------------+
| status        | no         |
+---------------+------------+
| summary       | no         |
+---------------+------------+

.. code-block:: JSON

   {
      "series_name": "The NEW Amazing Comic",
      "publisher_id": 1,
      "summary": "The Amazing Comic, but NEW",
      "rating": 10,
      "year_started": 2017
   }

Response:

.. code-block:: JSON

   {
      "id": 2,
      "publisher": {
         "id": 1,
         "name": "Oni Press",
         "logo": "",
         "website": "https://onipress.com",
         "date_created": "2022-01-17T19:14:42.131974Z"
      },
      "series_name": "The NEW Amazing Comic",
      "summary": "The Amazing Comic, but NEW",
      "year_started": 2017,
      "status": "PLANNED",
      "cover_image": "",
      "background_image": "",
      "rating": null,
      "date_created": "2022-01-18T19:05:52.109969Z"
   }

.. comic-issues:

Comic Issues
-----

Get comic issues
#####

**GET** https://staging-kaboom.herokuapp.com/v1/comics/issues/

Query params:

+-----------------------+------------+------------+-----------+
| Name                  | Value      | Type       | Required  |
+=======================+============+============+===========+
| series                | 1          | int        | no        |
+-----------------------+------------+------------+-----------+
| issue_number_absolute | 1          | int        | no        |
+-----------------------+------------+------------+-----------+
| page *                | 1          | int        | no        |
+-----------------------+------------+------------+-----------+

* pagination purposes

Response:

.. code-block:: JSON

   {
      "count": 1,
      "next": null,
      "previous": null,
      "results": [
         {
            "id": 1,
            "characters": [
               {
                  "id": 1,
                  "name": "Rick Sanchez",
                  "alias": null,
                  "image": "",
                  "biography": "",
                  "date_created": "2022-01-17T19:13:47.631804Z"
               },
               {
                  "id": 2,
                  "name": "Morty Smith",
                  "alias": null,
                  "image": "",
                  "biography": "",
                  "date_created": "2022-01-17T19:13:54.277060Z"
               }
            ],
            "staff": [],
            "series": {
               "id": 1,
               "publisher": {
                  "id": 1,
                  "name": "Oni Press",
                  "logo": "",
                  "website": "https://onipress.com",
                  "date_created": "2022-01-17T19:14:42.131974Z"
               },
               "series_name": "Rick and Morty: Pocket Like You Stole It",
               "summary": "Five issue mini-series.",
               "year_started": 2017,
               "status": "COMPLETED",
               "cover_image": "/media/RMPLYSI.jpg",
               "background_image": "",
               "rating": 6.0,
               "date_created": "2022-01-17T19:25:05.609164Z"
            },
            "format": {
               "id": 1,
               "name": "Comic"
            },
            "issue_number_absolute": 1,
            "issue_number": "Part One",
            "summary": "Rick and Morty: Pocket Like You Stole It is a new comic book miniseries based on the popular Adult Swim television series and inspired by the Pocket Mortys mobile game! In this five issue series, Morty is on a quest to free himself (and all the other Mortys) from the clutches of Ricks, who collect Mortys and force them to battle one another for schmeckles and glory. Along the way, he’ll discover the grisly history of Morty battling, the dastardly lengths that Ricks are willing to stoop to in order to win, and perhaps… the strength in himself that’s needed to free the Mortys once and for all?",
            "release_date": "2017-07-05",
            "cover_image": "",
            "date_created": "2022-01-17T19:17:25.579237Z"
         }
      ]
   }

Add comic issues 🔒
#####

**POST** https://staging-kaboom.herokuapp.com/v1/comics/issues/

Headers: 

+---------------+-------------------------+------------+
| Name          | Value                   | Required   |
+===============+=========================+============+
| Authorization | Token user_access_token | yes        |
+---------------+-------------------------+------------+

JSON Body:

+-----------------------+------------+
| Name                  | Required   |
+=======================+============+
| issue_number_absolute | yes        |
+-----------------------+------------+
| issue_number *        | yes        |
+-----------------------+------------+
| series_id             | yes        |
+-----------------------+------------+
| summary               | no         |
+-----------------------+------------+
| characters_id         | no         |
+-----------------------+------------+
| staff_id              | no         |
+-----------------------+------------+
| format_id             | no         |
+-----------------------+------------+
| release_date          | no         |
+-----------------------+------------+

.. code-block:: JSON

   {
      "issue_number_absolute": 10,
      "issue_number": "4",
      "series_id": 1,
      "summary": "This is an issue",
      "format_id": 1,
      "characters_id": [
        1
      ],
      "staff_id": [
        1
      ],
      "release_date": "2022-01-19"
   }

.. autosummary::
   :toctree: generated

   kaboom
