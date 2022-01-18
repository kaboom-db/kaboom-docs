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

.. code-block:: JSON

   {
      "series_name": "The Amazing Comic", // REQUIRED
      "publisher_id": 1,
      "year_started": 2023, // REQUIRED
      "status": "PLANNED", // REQUIRED
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

.. autosummary::
   :toctree: generated

   lumache
