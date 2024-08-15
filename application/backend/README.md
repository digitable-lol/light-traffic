# Backend

</hr>

![made-with-python](https://img.shields.io/badge/Made%20with-Python-1f425f.svg)

</hr>

## Development

### Requirements

- Python 3.11

### Run

Create a python virtual environment and run these commands from root directory-

```shell
python3.11 -m venv venv
. venv/bin/activate
pip3.11 install -r requirements.txt
python3.11 manage.py makemigrations && python3.11 manage.py migrate
```

This will run the django app

```shell
python3.11 manage.py runserver
```

To create db user

```shell
python3.11 manage.py createsuperuser
```

To connect to db

```shell
python3.11 manage.py dbshell
```

To cleanup db

```shell
python3.11 manage.py dbshell

DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
```
