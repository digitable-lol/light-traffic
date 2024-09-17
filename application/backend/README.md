# Backend

</hr>

![made-with-python](https://img.shields.io/badge/Made%20with-Python-1f425f.svg)

</hr>

## Development

### Requirements

- Python 3.11
- Docker

### Run
To strart containers, enter the command
``` shell
docker-compose up -d
```

To stop containers, enter the command
``` shell
docker-compose down
```

Follow all the instructions listed below from ./application/backend

Create a postgres Docker container using the command 

```shell
docker-compose up -d pgdb
```
After the container starts, enter this command

```shell
docker exec -it pgdb bash
```

To create a database, enter the commands in the sequence

```shell
su postgres
createdb lighttraffic_db
```

To exit the container console, type "exit" before exiting to the regular console
```shell
exit
exit
```