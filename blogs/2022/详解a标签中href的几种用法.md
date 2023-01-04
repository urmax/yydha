---
title: 详解a标签中href的几种用法
date: 2022-09-23
updated: 2022-09-23
tags: 
    - 前端
categories: 
    - 学习
description: 详解a标签中href的几种用法

---



a标签的一种写法<a href="JavaScript:;"></a>，所以就来整理下a标签中href的几种用法。

### js 伪协议的几种调用方法（参考总结的）

1、a href="javascript:js_method();"
    这是常用的方法，但是这种方法在传递this等参数的时候很容易出问题，而且javascript:协议作为a的href属性的时候不仅会导致不必要的触发window.onbeforeunload事件，在IE里面更会使gif动画图片停止播放。W3C标准不推荐在href里面执行javascript语句
 2、 a href="javascript:void(0);" onclick="js_method()"
    这种方法是很多网站最常用的方法，也是最周全的方法，onclick方法负责执行js函数，而void是一个操作符，void(0)返回undefined，地址不发生跳转。而且这种方法不会像第一种方法一样直接将js方法暴露在浏览器的状态栏。
3、a href="javascript:;" onclick="js_method()"
    这种方法跟跟2种类似，区别只是执行了一条空的js代码。
4、a href="#" onclick="js_method()"
    这种方法也是网上很常见的代码，#是标签内置的一个方法，代表top的作用。所以用这种方法点击后网页后返回到页面的最顶端。
5、a href="#" onclick="js_method();return false;"
    这种方法点击执行了js函数后return false，页面不发生跳转，执行后还是在页面的当前位置。
6、<a href='javascript:todoFun(void)'>删除</a>
    这种方法在点击 a 标签时，执行一个 js 另外自定义函数 todoFun(void)  。并传参 void。
    综合上述，在a中调用js函数最适当的方法推荐使用：
    ```
    <a href="javascript:void(0);" onclick="js_method()"></a> 
    <a href="javascript:;" onclick="js_method()"></a> 
    <a href="#" onclick="js_method();return false;"></a>
    ```
### href="#"的作用

   a中href="#"表示回到最顶部。如果当前页面中需要滚动的话，那么用这种方式就可以直接回到顶部。比如有些网站会在右下角制作一个图标按钮，回到顶部，那么此时可以考虑用这种最简单的方式实现。

```
    <span style="font-size:14px;"><a href="#">回到最顶端</a></span> 
```
### href="URL"的作用
1、URL为绝对URL
    此时指向另一个站点，比如href="http://write.blog.csdn.NET",那么点击时就会直接跳转到这个链接的页面。
2、URL为相对URL
    此时指向站点内的某个文件，比如href="/test.doc"，那么点击时就会直接下载文件。
3、锚 URL
    此时指向页面中的锚，比如href="#top"，那么点击时就会到当前页面中id="top"的这个锚点，实现当前页面的所谓跳转。用的最多就是在可滚动页面中，添加菜单，可以直接回到页面中的某个部分的内容。

即所有的三种代码样例：
```
    <a href="http://baidu.com">超链接</a> 
    <a href="#">回到最顶端</a> 
    <a href="css/css1.css">文件链接</a>
```