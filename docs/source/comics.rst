Comics
=====

.. comic-series:

Comic Series
-----

Get comic series
#####

**GET** base_url/v1/comics/series/

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

This will return an object like this:

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

.. autosummary::
   :toctree: generated

   lumache
