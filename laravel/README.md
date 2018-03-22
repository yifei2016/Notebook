## you can compile your SASS files to plain CSS using 'Laravel Mix'.

## Once installed, the laravel new command will create a fresh Laravel installation in the directory you specify.
## For instance,  `laravel new blog` will create a directory named blog containing a fresh Laravel installation with
## all of Laravel's dependencies already installed:

## use composer to install laravel
### If we have a lot of routes, we may want to organize our routes into 'controllers'.

<!-- ## Composer also offers a feature called create-project for creating new projects with a particular skeleton.
```
$ composer create-project laravel/laravel projectName --prefer-dist.
``` -->
### Laravel also provides two tools for managing your local development: a simpler tool called Valet that uses your local machine to provide your dependencies,  and a preconfigured Vagrant setup named Homestead.


## Artisan 是 Laravel 的Command line interface，它提供了许多Command to help you develop Laravel app，它由强大的 Symfony Console 组件所驱动。

## 可以使用 list Command来列出所有available的 Artisan 命令：
```
$ php artisan list
```

## 数据库也是有Model的但它是关系型(Relational)的Model，但我也有自己的面向对象(Object-Oriented)的Model，所以两个Model之间需要同步。这## 是ORM(Object-Relation Mapping)。
## Eloquent 是作为 Laravel ORM 框架的一个名称，其命名空间下包括 Model、Relationship、Builder 等类的实现，这些类提供数据到对象的映射，同时提供模型间关系（Relationship）的支持。

## Laravel's template engine, called Blade.

## Ioc(component)structure and mvc, high coupling.

## laravel类似express 是app, appache相当于node 是php runtime environment, php的database server 是sql.

### <?php echo $name; ?>  <?=  $name; ?>
### to use laravel, need php +5.6 version

## like node, then can test with php code on bash.
```
$ php artisan tinker
```

to find folder on atom
```
$ cmd-t
```


to start mysql server
```
$ brew services start mysql
```


to start mysql client
```
$ mysql -uroot

```
to stop mysql server
```
$ brew services stop mysql
```

DBMS(mongoDB, mysql) != DB is a file, we do not care
HTTP server talk to DBMS.

$ select * from admin where name like  'Henr%';
$ select * from admin where name = 'Henry';
$ select * from admin limit 1;
$ select * from admin;
$ show tables;
$ use laravel_db;
$ show databases;
$ exit

### migration folder = schema
download mysql, DB_USERNAME=root comes auto

$ php artisan make:migration create_admin_table //create migration
$ php artisan migrate:fresh  //after writing in file, run this command, finish