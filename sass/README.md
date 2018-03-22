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

```$border: 5
.border{
  border: solid #{$border}px 
}
#{$border} + #{$border} no, other operation can
```
===1
```
.center{
  text-align: center;
}
.border{
  border: solid #{$border}px;
  @extend .center;
  font-size: $num + px;
}
```
===2
```
@mixin center($f){
  text-align: $f;
}
.border{
  border: solid #{$border}px;
  @include center(center);
  font-size: $num + px;
}
```
======================
```
in '13.scss';
$bg: '#ccc';
body{
  background-color: #{$bg};
}
in 12.scss
@import '13.scss'
```
======================



```
@mixin bgcolor($b){
  @if($b == 5){
    background-color: $red;
  }@else if($b == 6){
    background-color: blue;
  }@else {
    background-color: pink;
  }
}
.border{
  border: solid #{$border}px;
  @include center(center);
  @include bgcolor(5);
}
```

======================
@for @while @each
```
@for $i from 1 to 5{
  .a#{$i}{
    background-image: url('images/#{$i}.png'); //background-image: url('images/1.png') 2 3 4 5
  }
}
$j:1;
@while $j<5{
  .b#{$j}{
    background-image: url('images/#{$j}.png');
  }
  $j:$j + 1;
}
@each $k in 1,2,3,4{
  .c#{$k}{
    background-image: url('images/#{$k}.png');
  }
}
```
======================


=================
bem
.object{
  color: red;
  &__descendant{
    color: black;
  }
}
$color__primary--light: #cccc !default(if the variable exits, then not reassign, if not exit, assign it and give it a value)
===================

======================

@function em($px, $base: $base__font-size){
  @return ($px / $base) * 1em;
}

$text__family--sans: 'Helvetica Neue', sans-serif;
$text__color--base: #33333 !default;
$text__color--beta: #99000 !default;

@mixin text($size, $line, $margin: 0, $family: $text__family--sans, $color: $text__color--base){
  font-size: em($size);
  line-height: ($line/$size);
  font-family: $family;
  color: $color;
  margin-bottom: em($margin, $size)
}
html{
  font-size: $base__font-size * 1px;
}
h1{
  @include text($base__font-size, $base__line, $color:$text__color--base)
}
h2{
  @include text(24,28,15, $color: $text__color--beta);
}
=======================









$tree on terminal to see files in folder
$vi is a terminal editor