## How to run ?

```
$docker-compose build
$docker-compose up -d
$docker-compose ps
$docker-compose logs
$docker-compose down
```

## Check data in mysql database

```
$docker-compose exec db bash
>mysql -uuser -ppassword
>>show databases
>>use myDB;
>>show tables;
```
