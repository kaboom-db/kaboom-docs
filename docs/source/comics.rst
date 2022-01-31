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

Update specific issue 🔒
#####

**PATCH** https://staging-kaboom.herokuapp.com/v1/comics/issue/{issue_id}/

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

.. comic-publishers:

Publishers
-----

Get publishers
#####

**GET** https://staging-kaboom.herokuapp.com/v1/comics/publishers/

Query params:

+------------+------------+------------+-----------+
| Name       | Value      | Type       | Required  |
+============+============+============+===========+
| query      | marvel     | str        | no        |
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
            "name": "Marvel Comics",
            "logo": "",
            "website": null,
            "date_created": "2022-01-13T20:12:59.638024Z"
         }
      ]
   }

Add publisher 🔒
#####

**POST** https://staging-kaboom.herokuapp.com/v1/comics/publishers/

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
| name                  | yes        |
+-----------------------+------------+
| website               | no         |
+-----------------------+------------+

Response:

.. code-block:: JSON

   {
      "id": 2,
      "name": "Test Publisher",
      "logo": "",
      "website": "http://test.com/",
      "date_created": "2022-01-23T14:31:16.915642Z"
   }

Get specific publisher
#####

**GET** https://staging-kaboom.herokuapp.com/v1/comics/publishers/{publisher_id}/

Response:

.. code-block:: JSON

   {
      "id": 2,
      "name": "Test Publisher",
      "logo": "",
      "website": "http://test.com/",
      "date_created": "2022-01-23T14:31:16.915642Z"
   }

Update specific publisher 🔒
#####

**PATCH** https://staging-kaboom.herokuapp.com/v1/comics/publishers/{publisher_id}/

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
| name                  | no         |
+-----------------------+------------+
| website               | no         |
+-----------------------+------------+

Response:

.. code-block:: JSON

   {
      "id": 2,
      "name": "Oni Press",
      "logo": "",
      "website": "https://onipress.com/",
      "date_created": "2022-01-23T14:38:27.574581Z"
   }

Comic Characters
-----

Get characters
#####

**GET** https://staging-kaboom.herokuapp.com/v1/comics/characters/

Query params:

+------------+--------------+------------+-----------+
| Name       | Example      | Type       | Required  |
+============+==============+============+===========+
| query      | bruce banner | str        | no        |
+------------+--------------+------------+-----------+
| page *     | 1            | int        | no        |
+------------+--------------+------------+-----------+

* pagination purposes

Response:

.. code-block:: JSON

   {
      "count": 4,
      "next": null,
      "previous": null,
      "results": [
         {
            "id": 3,
            "name": "Bruce Banner",
            "alias": "Hulk",
            "image": "",
            "biography": "Hulk Smash!",
            "date_created": "2022-01-29T14:39:53.556135Z"
         },
         {
            "id": 1,
            "name": "John Doe",
            "alias": "Cool Man",
            "image": "",
            "biography": "Such a cool character tbf",
            "date_created": "2022-01-29T14:37:24.773218Z"
         },
         {
            "id": 2,
            "name": "Peter Parker",
            "alias": "Spider-Man",
            "image": "",
            "biography": "With great power comes great responsibility",
            "date_created": "2022-01-29T14:40:12.014926Z"
         },
         {
            "id": 4,
            "name": "Steve Rogers",
            "alias": "Captain America",
            "image": "",
            "biography": "American guy",
            "date_created": "2022-01-29T14:40:51.666606Z"
         }
      ]
   }

Add character 🔒
#####

**POST** https://staging-kaboom.herokuapp.com/v1/comics/characters/

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
| name                  | yes        |
+-----------------------+------------+
| alias                 | no         |
+-----------------------+------------+
| biography             | no         |
+-----------------------+------------+

Response:

.. code-block:: JSON

   {
      "id": 5,
      "name": "Eddie Brock",
      "alias": "Venom",
      "image": "",
      "biography": "WE ARE VENOM",
      "date_created": "2022-01-31T20:04:56.025351Z"
   }

Get specific character
#####

**GET** https://staging-kaboom.herokuapp.com/v1/comics/characters/{character_id}/

Response:

.. code-block:: JSON

   {
      "id": 2,
      "name": "Peter Parker",
      "alias": "Spider-Man",
      "image": "",
      "biography": "With great power comes great responsibility",
      "date_created": "2022-01-29T14:40:12.014926Z"
   }

Update specific character 🔒
#####

**PATCH** https://staging-kaboom.herokuapp.com/v1/comics/characters/{character_id}/

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
| name                  | no         |
+-----------------------+------------+
| alias                 | no         |
+-----------------------+------------+
| biography             | no         |
+-----------------------+------------+

Response:

.. code-block:: JSON

   {
      "id": 2,
      "name": "Peter Parker",
      "alias": "Spider-Man",
      "image": "",
      "biography": "This is a new bio",
      "date_created": "2022-01-31T20:08:07.926194Z"
   }

Staff
-----

Get staff
#####

**GET** https://staging-kaboom.herokuapp.com/v1/comics/staff/

Query params:

+------------+--------------+------------+-----------+
| Name       | Example      | Type       | Required  |
+============+==============+============+===========+
| query      | john doe     | str        | no        |
+------------+--------------+------------+-----------+
| position * | penciller    | str        | no        |
+------------+--------------+------------+-----------+
| page **    | 1            | int        | no        |
+------------+--------------+------------+-----------+

* to see a list of possible positions go to [TODO: Insert link]
** pagination purposes

Response:

.. code-block:: JSON

   {
      "count": 2,
      "next": null,
      "previous": null,
      "results": [
         {
            "id": 2,
            "position": {
               "id": 8,
               "position": "Designer"
            },
            "name": "James Halliday",
            "image": "",
            "date_of_birth": "1972-06-12",
            "date_of_death": "2039-04-15",
            "age": 66,
            "biography": "",
            "date_created": "2022-01-29T14:37:05.876780Z"
         },
         {
            "id": 1,
            "position": {
               "id": 2,
               "position": "Penciller"
            },
            "name": "John Doe",
            "image": "",
            "date_of_birth": "1988-11-10",
            "date_of_death": "2005-04-15",
            "age": 16,
            "biography": "Best penciller in the world",
            "date_created": "2022-01-29T14:25:18.610113Z"
         }
      ]
   }

Add staff 🔒
#####

**POST** https://staging-kaboom.herokuapp.com/v1/comics/staff/

Headers: 

+---------------+-------------------------+------------+
| Name          | Value                   | Required   |
+===============+=========================+============+
| Authorization | Token user_access_token | yes        |
+---------------+-------------------------+------------+

JSON Body:

+-----------------------+------------+
| Name                  | Type       |
+=======================+============+
| name                  | str        |
+-----------------------+------------+
| position              | int        |
+-----------------------+------------+
| date_of_birth         | date       |
+-----------------------+------------+
| date_of_death         | date       |
+-----------------------+------------+
| biography             | str        |
+-----------------------+------------+

Staff age is calculated server side so is not needed.

Response:

.. code-block:: JSON

   {
      "id": 3,
      "position": {
         "id": 8,
         "position": "Designer"
      },
      "name": "James Halliday",
      "image": "",
      "date_of_birth": "1972-06-12",
      "date_of_death": "2039-04-15",
      "age": 66,
      "biography": "",
      "date_created": "2022-01-31T20:18:41.707870Z"
   }

Get specific staff
#####

**GET** https://staging-kaboom.herokuapp.com/v1/comics/staff/{staff_id}/

Response:

.. code-block:: JSON

   {
      "id": 1,
      "position": {
         "id": 2,
         "position": "Penciller"
      },
      "name": "John Doe",
      "image": "",
      "date_of_birth": "1988-11-10",
      "date_of_death": "2005-04-15",
      "age": 16,
      "biography": "Best penciller in the world",
      "date_created": "2022-01-29T14:25:18.610113Z"
   }

Update specific staff 🔒
#####

**PATCH** https://staging-kaboom.herokuapp.com/v1/comics/staff/{staff_id}/

Headers: 

+---------------+-------------------------+------------+
| Name          | Value                   | Required   |
+===============+=========================+============+
| Authorization | Token user_access_token | yes        |
+---------------+-------------------------+------------+

JSON Body:

+-----------------------+------------+
| Name                  | Type       |
+=======================+============+
| name                  | str        |
+-----------------------+------------+
| position              | int        |
+-----------------------+------------+
| date_of_birth         | date       |
+-----------------------+------------+
| date_of_death         | date       |
+-----------------------+------------+
| biography             | str        |
+-----------------------+------------+

Response:

.. code-block:: JSON

   {
      "id": 1,
      "position": {
         "id": 2,
         "position": "Penciller"
      },
      "name": "John Doe",
      "image": "",
      "date_of_birth": "1988-11-10",
      "date_of_death": "2006-04-15",
      "age": 17,
      "biography": "Best penciller in the world",
      "date_created": "2022-01-31T20:24:36.930494Z"
   }

Staff Positions
-----

The database holds specific staff positions to use when making requests.
If you're filtering to get all staff of a specific position, you would send the position id.

Get all staff positions
#####

**GET** https://staging-kaboom.herokuapp.com/v1/comics/staffpositions/

Query params:

+------------+--------------+------------+-----------+
| Name       | Example      | Type       | Required  |
+============+==============+============+===========+
| position   | penciller    | str        | no        |
+------------+--------------+------------+-----------+
| page *     | 1            | int        | no        |
+------------+--------------+------------+-----------+

* pagination purposes

Response:

.. code-block:: JSON

   {
      "count": 11,
      "next": "http://staging-kaboom.herokuapp.com/v1/comics/staffpositions/?page=2",
      "previous": null,
      "results": [
         {
            "id": 1,
            "position": "Writer"
         },
         {
            "id": 2,
            "position": "Penciller"
         },
         {
            "id": 3,
            "position": "Cover Artist"
         },
         {
            "id": 4,
            "position": "Inker"
         },
         {
            "id": 5,
            "position": "Variant Cover Artist"
         },
         {
            "id": 6,
            "position": "Colorist"
         },
         {
            "id": 7,
            "position": "Letterer"
         },
         {
            "id": 8,
            "position": "Designer"
         },
         {
            "id": 9,
            "position": "Editor"
         },
         {
            "id": 10,
            "position": "Executive Editor"
         }
      ]
   }

Get specific staff position
#####

**GET** https://staging-kaboom.herokuapp.com/v1/comics/staffpositions/{position_id}/

Response:

.. code-block:: JSON

   {
      "id": 1,
      "position": "Writer"
   }

Formats
-----

The database holds a list of formats an issue can be.
Just like staff positions, if you want to filter all issues by format, you would send the format id in the query params.

Get all formats
#####

**GET** https://staging-kaboom.herokuapp.com/v1/comics/formats/

Query params:

+------------+--------------+------------+-----------+
| Name       | Example      | Type       | Required  |
+============+==============+============+===========+
| name       | comic        | str        | no        |
+------------+--------------+------------+-----------+
| page *     | 1            | int        | no        |
+------------+--------------+------------+-----------+

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
            "name": "Comic"
         }
      ]
   }

Get specific format
#####

**GET** https://staging-kaboom.herokuapp.com/v1/comics/formats/{format_id}/

Response:

.. code-block:: JSON

   {
      "id": 1,
      "name": "Comic"
   }

.. autosummary::
   :toctree: generated

   kaboom
