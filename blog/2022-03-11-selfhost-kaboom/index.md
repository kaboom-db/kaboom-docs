---
slug: self-host-kaboom
title: How to self host Kaboom
authors: [crxssed]
tags: [selfhost]
---

:::note

The only way to signup and use Kaboom as of right now is to host it yourself. 

:::

Kaboom is quite simple to self host and provides some customizability. Follow this step-by-step guide to get it set up.

## Getting started

Before setting up Kaboom you need to make sure you have [Python](https://www.python.org/downloads/) installed. Head over to the Python website and follow the install instructions for your system.

To check if Python is already installed, run:

```bash
python -v
```

OR

```bash
python3 -v
```

Kaboom needs a minimum of Python version 3.10.2

## Cloning the repository

If you have Git installed on your machine you can do this:

```bash
git clone https://github.com/kaboom-db/kaboom-api
```

If you don't have Git, head over to https://github.com/kaboom-db/kaboom-api and click the green 'Code' button and then 'Download ZIP'. Unzip the folder to your desired location. Note that downloading the file instead of cloning the repo means that you won't be able to recieve updates with `git pull`.

You now need to install the Python requirements. In a terminal, navigate to the Kaboom folder and run the following command:

```bash
pip install -r requirements.txt
```

## DB Secrets

Kaboom uses a `db_secrets.py` file to 'hide' your sensitive credentials from the git repo. The file should be located in the inner `kaboom/` folder. There is already a file called `db_secrets.example.py` with this in it:

```python
# Not needed if you don't use PGSQL
DB_NAME = ''
DB_USER = ''
DB_PASS = ''
DB_HOST = ''
DB_PORT = ''

# Django Secret Key. This needs to be generated on first setup.
DJ_SECRET_KEY = '<secret_key>'

# Needed if you want to use AWS S3 for file uploads
AWS_ACCESS_KEY = ''
AWS_SECRET_ACCESS_KEY = ''
AWS_BUCKET_NAME = ''
AWS_S3_SIGNATURE_VERSION = 's3v4'
AWS_S3_REGION_NAME = ''
AWS_S3_FILE_OVERWRITE = False
AWS_DEFAULT_ACL = None
AWS_S3_VERIFY = True
AWS_QUERYSTRING_AUTH = False

# Needed if you want to send emails via SendGrid
SENDGRID_APIKEY = ''
EMAIL_HOST = 'smtp.sendgrid.net'
EMAIL_HOST_USER = '' # In some cases, this may have to be 'apikey'
EMAIL_PORT = 587
# If using SendGrid, this email needs to have permissions in your SendGrid account.
DEFAULT_FROM_EMAIL = ''
```

We first need to generate the Django Secret Key. In a terminal, navigate to the Kaboom folder and run the command:

```bash
python gen_key.py
```

This will automatically replace `<secret_key>` with a new secret key.

Rename the `db_secrets.example.py` file to `db_secrets.py`. If you're less knowledgable about PGSQL, Sendgrid and S3, it's recommended that you leave everything as default and skip ahead to the next step.

If you want a more advanced instance of Kaboom, with email and global image uploads functionality, have a look at setting up Sendgrid (emails) and AWS S3 (image uploads). You then need to add your credentials to this file, so that Kaboom can connect to the services. Bare in mind that emails and image uploads still work without them, but are a bit less functional (this is explained in the next step)

Kaboom has the ability to use two different types of databases - PostgreSQL or SQLite. If you use PostgreSQL, you will have to provide your database credentials also.

## Applying settings

The first thing to do before setting up the database and creating a user is tweaking your settings. In the downloaded/cloned folder, open the file `settings.py` (located in the same folder as `db_secrets.py`) in a text editor. Near the top of the file you'll find the following three lines:

```python
PGSQL = True
SENDGRID = False
AWS_S3 = False
```

The values for these entirely depend on how you have setup your [db_secrets.py](#db-secrets) in the last step. If you left your db_secrets as default in the last step, set all three of these values to `False`, as you won't be needing them.

### PGSQL

If PGSQL is set to `True`, Kaboom will attempt to connect to the PostgreSQL database defined in db_secrets.py using the given credentials. If it's set to `False` it will default to SQLite, creating the database in the root directory of Kaboom with the name `db.sqlite3`.

### SENDGRID

If you're planning on having multiple users on your Kaboom instance, you may need to send out emails for account confirmations and password resets. Setting this value to `True` will let Kaboom send emails via the Sendgrid SMTP using your credentials, provided in db_secrets.py. If you don't need to send out emails, setting this to `False` will store the emails in plaintext in the `sent_emails` folder, located in the root directory of Kaboom.

### AWS_S3

You might want to use AWS S3 to store your image uploads instead of storing them on your machine. Setting this to `True` will upload any images (covers, background etc) to the S3 bucket specified in db_secrets.py. This may be overkill for some users though, so setting it to `False` will be good enough for most people.

## Setting up the database

After changing your settings, you can now setup your database and your super user.

In a terminal, navigate to the Kaboom folder and run:

```bash
python manage.py migrate
```

and

```bash
python manage.py collectstatic
```

You then need to create a super user (this is basically a normal user but has full control of the database):

```bash
python manage.py createsuperuser
```

Run through the instructions to create your user.

## Running

To start Kaboom, run the command:

```bash
python manage.py runserver 0.0.0.0:8000
```