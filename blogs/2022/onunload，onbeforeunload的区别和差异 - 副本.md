---
title: onunload，onbeforeunload的区别和差异
date: 2020-09-02
updated: 2020-09-02
tags: 
    - Javascript
categories: 
    - 学习
description: onunload，onbeforeunload的区别和差异
---
## Quick Start

 onunload，onbeforeunload的区别和差异

### 发表一篇试试

 onunload，onbeforeunload的区别和差异

``` bash
相同点：onunload，onbeforeunload都是在刷新或关闭时调用。
不同点：
a)onbeforeunload在onunload之前执行 ，它还可以阻止onunload的执行。
b)onbeforeunload是正要去服务器读取新的页面时调用，此时还没开始读取;nunload则已经从服务器上读到了需要加载的新的页面，在即将替换掉当前页面时调用 。
c)onbeforeunload是可以阻止页面的更新和关闭的。但是onunload不能。
onload、onbeforeunload、onunload事件的执行顺序:
打开页面时：只执行onload
关闭页面时：先onbeforeunload（bug或许位置：可以不关闭页面，但是此事件是执行了）,后onunload
刷新页面时：先onbeforeunload,后onunload，再onload

```
