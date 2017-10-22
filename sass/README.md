## 实际开发中每次修改.scss时不可能每修改一次就编译一次，于是我们就要用到监听命令：
watch的作用是每次修改保存.scss文件后自动帮我们编译成CSS，这样我们就可以专心写样式了。输入监听命令后再添加新代码片段保存后就会发现我们想要的已经编译好了。

to watch file
```
$ sass --watch index.scss:index.css
```
to watch directory
```
$ sass -watch folderName
```
to compile scss to CSS
```
sass index.scss index.css
```
