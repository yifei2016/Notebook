## you can compile your SASS files to plain CSS using Laravel Mix.
## Once installed, the laravel new command will create a fresh Laravel installation in the directory you specify.
## For instance,  laravel new blog will create a directory named blog containing a fresh Laravel installation with
## all of Laravel's dependencies already installed: `$laravel new blog`

## use composer to install laravel
### If we have a lot of routes, we may want to organize our routes into 'controllers'.

## Composer also offers a feature called create-project for creating new projects with a particular skeleton.
```
$ composer create-project laravel/laravel projectName --prefer-dist.
```
# Laravel also provides two tools for managing your local development: a simpler tool called Valet that uses your local machine to
# provide your dependencies,  and a preconfigured Vagrant setup named Homestead.

## Artisan 是 Laravel 的命令行接口的名称，它提供了许多实用的命令来帮助你开发 Laravel 应用，它由强大的 Symfony Console 组件所驱动。

## 可以使用 list 命令来列出所有可用的 Artisan 命令：

php artisan list


## 数据库也是有Model的但它是关系型(Relational)的Model，但我也有自己的面向对象(Object-Oriented)的Model，所以两个Model之间需要同步。这## 是ORM(Object-Relation Mapping)。
## Eloquent 是作为 Laravel ORM 框架的一个名称，其命名空间下包括 Model、Relationship、Builder 等类的实现，这些类提供数据到对象的映射，同时提供模型间关系（Relationship）的支持。
