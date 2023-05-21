---
title: a==1&&a==2&&a==3为true
date: 2023-05-19
updated: 2023-05-19
tags: 
    - 前端
categories: 
    - 面试题
keywords: js
description: 描述
---
# 002a==1&&a==2&&a==3为true
在一般情况下，我们项目中都会使用===来避免隐式转换的问题。
### 一张图
![示例](./images/yinshizhuanhuan.jpg)
### a为多少，上述例子成立
```javascript
var a = {
    n: 1,
    valueOf: function(){
        return n++;
    }
}
console.log(a==1&&a==2&&a==3)
```