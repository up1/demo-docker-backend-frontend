## Build with composer

```
$docker container run --rm -it \
  -v $PWD/demo:/app \
  composer install --ignore-platform-reqs
```

## How to run ?

```
$docker-compose build
$docker-compose up -d
$docker-compose ps
```
