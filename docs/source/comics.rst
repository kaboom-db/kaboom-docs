Comics
=====

All endpoints marked with 🔒 require a user to be logged in.

.. comic-series:

Series
-----

Get series
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

Add series 🔒
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

Get specific series
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

Update specific series 🔒
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

Issues
-----

Get issues
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

Add issue 🔒
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

* issue_number is a string, so it can also be treated as the issue name.

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

Response:

.. code-block:: JSON

   {
      "id": 6,
      "characters": [
         {
            "id": 1,
            "name": "Rick Sanchez",
            "alias": null,
            "image": "",
            "biography": "",
            "date_created": "2022-01-17T19:13:47.631804Z"
         }
      ],
      "staff": [
         {
            "id": 1,
            "position": {
               "id": 2,
               "position": "Penciller"
            },
            "name": "Pencil Boy",
            "image": "",
            "date_of_birth": "1988-11-10",
            "date_of_death": "2005-04-15",
            "age": 16,
            "biography": "Amazing penciller",
            "date_created": "2022-01-19T19:17:57.541087Z"
         }
      ],
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
      "issue_number_absolute": 10,
      "issue_number": "4",
      "summary": "This is an issue",
      "release_date": "2022-01-19",
      "cover_image": "",
      "date_created": "2022-01-19T19:18:01.352640Z"
   }

Get specific issue
#####

**GET** https://staging-kaboom.herokuapp.com/v1/comics/issues/{issue_id}/

Response:

.. code-block:: JSON

   {
      "id": 1,
      "characters": [
         {
            "id": 2,
            "name": "Test Character",
            "alias": null,
            "image": "",
            "biography": "",
            "date_created": "2022-01-20T18:39:30.220447Z"
         }
      ],
      "staff": [
         {
            "id": 2,
            "position": {
               "id": 4,
               "position": "Inker"
            },
            "name": "Test Staff",
            "image": "",
            "date_of_birth": null,
            "date_of_death": null,
            "age": null,
            "biography": "",
            "date_created": "2022-01-20T18:39:04.113810Z"
         }
      ],
      "series": {
         "id": 1,
         "publisher": null,
         "series_name": "Test Comic",
         "summary": "",
         "year_started": 2022,
         "status": "COMPLETED",
         "cover_image": "https://kaboomstaging.s3.amazonaws.com/AveAobC_LF9uyQV.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASSCHIVMY544HUN6N%2F20220112%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220112T190405Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=a3765515d11a125e9b1fb11d1e9ea5a79acaadbb7acf3a1e8a98ed87e7f69ba8",
         "background_image": "https://kaboomstaging.s3.amazonaws.com/AveAobC_LF9uyQV.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASSCHIVMY544HUN6N%2F20220112%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220112T184616Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=5d26a7f9b7d69ce433cfea9dd120dd2dbbde38ebc9c94c45a217ec64feeb0f0e",
         "rating": null,
         "date_created": "2022-01-12T19:04:05.887338Z"
      },
      "format": null,
      "issue_number_absolute": 1,
      "issue_number": "1",
      "summary": "",
      "release_date": null,
      "cover_image": "",
      "date_created": "2022-01-20T18:39:39.678729Z"
   }

Update specific series 🔒
#####

**PATCH** https://staging-kaboom.herokuapp.com/v1/comics/issue/{comic_id}/

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
| summary               | no         |
+-----------------------+------------+
| characters_id         | no         |
+-----------------------+------------+
| staff_id              | no         |
+-----------------------+------------+
| format_id             | no         |
+-----------------------+------------+
| issue_number_absolute | no         |
+-----------------------+------------+
| issue_number *        | no         |
+-----------------------+------------+
| release_date          | no         |
+-----------------------+------------+

.. code-block:: JSON

   {
      "summary": "I just added extra characters and staff",
      "characters_id": [
         1
      ],
      "staff_id": [
         1
      ],
      "format_id": 1,
      "issue_number_absolute": 2,
      "issue_number": "2",
      "release_date": "2021-01-01"
   }

Response:

.. code-block:: JSON

   {
      "id": 1,
      "characters": [
         {
            "id": 1,
            "name": "Kingsman",
            "alias": null,
            "image": "",
            "biography": "",
            "date_created": "2022-01-13T20:16:17.610580Z"
         },
         {
            "id": 2,
            "name": "Test Character",
            "alias": null,
            "image": "",
            "biography": "",
            "date_created": "2022-01-20T18:39:30.220447Z"
         }
      ],
      "staff": [
         {
            "id": 1,
            "position": {
               "id": 3,
               "position": "Cover Artist"
            },
            "name": "Indiana Jones",
            "image": "https://kaboomstaging.s3.amazonaws.com/AveAobC_LF9uyQV.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASSCHIVMY544HUN6N%2F20220112%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220112T192247Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=9ae96d9b721a4b90e87fb4777b77f4b30a7be1835372865b04f173958f54bc40",
            "date_of_birth": null,
            "date_of_death": null,
            "age": null,
            "biography": "",
            "date_created": "2022-01-12T19:22:47.440930Z"
         },
         {
            "id": 2,
            "position": {
               "id": 4,
               "position": "Inker"
            },
            "name": "Test Staff",
            "image": "",
            "date_of_birth": null,
            "date_of_death": null,
            "age": null,
            "biography": "",
            "date_created": "2022-01-20T18:39:04.113810Z"
         }
      ],
      "series": {
         "id": 1,
         "publisher": null,
         "series_name": "Test Comic",
         "summary": "",
         "year_started": 2022,
         "status": "COMPLETED",
         "cover_image": "https://kaboomstaging.s3.amazonaws.com/AveAobC_LF9uyQV.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASSCHIVMY544HUN6N%2F20220112%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220112T190405Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=a3765515d11a125e9b1fb11d1e9ea5a79acaadbb7acf3a1e8a98ed87e7f69ba8",
         "background_image": "https://kaboomstaging.s3.amazonaws.com/AveAobC_LF9uyQV.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASSCHIVMY544HUN6N%2F20220112%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220112T184616Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=5d26a7f9b7d69ce433cfea9dd120dd2dbbde38ebc9c94c45a217ec64feeb0f0e",
         "rating": null,
         "date_created": "2022-01-12T19:04:05.887338Z"
      },
      "format": {
         "id": 1,
         "name": "Comic"
      },
      "issue_number_absolute": 2,
      "issue_number": "2",
      "summary": "I just added extra characters and staff",
      "release_date": "2021-01-01",
      "cover_image": "",
      "date_created": "2022-01-20T18:48:47.891063Z"
   }

.. autosummary::
   :toctree: generated

   kaboom
