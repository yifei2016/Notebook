# express.js

# http://mclspace.com/2016/01/18/nodejs-tutorials-1/

app.js是express的设置文件
bin/www是express执行文件
package.json是nodejs项目的配置文件，用于保存应用信息与依赖管理
public文件夹为web应用的资源文件夹
routes保存路由文件
views保存网站的ejs视图代码

然后执行$ npm install安装项目依赖,该命令根据package.json文件中描述的dependencies安装依赖，默认安装到node_modules文件夹下.

通过$ npm start 或者直接$ node ./bin/www启动项目。

```
#express mainly contains three core concepts: routing, middleware, template engine.
```
