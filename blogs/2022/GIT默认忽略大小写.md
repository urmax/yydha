---
title: GIT默认忽略大小写
date: 2020-11-06
updated: 2020-11-06
tags: 
    - 前端
categories: 
    - 学习
description: GIT默认忽略大小写
---
## 问题

 最近遇到一个问题，把一个文件名小写(本应大写)提交到仓库，后面发现错了，将其改过来，然后跟随其他一些修改提交到仓库，其他人pull下来的居然还是小写？

### 解决方式

原来git默认是忽略大小写的(为什么会有这种配置)，可以使用下面配置区分大小写： 

``` bash
git config core.ignorecase false
```

