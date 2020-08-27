# Working with CodeIgniter 3

```
docker container run --rm -it \
  -v $PWD/v3:/app \
  composer install --ignore-platform-reqs

docker-compose -f docker-compose-2.yml build
docker-compose -f docker-compose-2.yml up -d
```

# Working with CodeIgniter 4

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
