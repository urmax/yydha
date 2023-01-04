---
title: 使用daterangepicker日期选择插件
date: 2022-12-26
updated: 2022-12-26
tags: 
    - 前端
categories: 
    - js插件
keywords: js
description: js
top_img: 
comments: html
cover:
---
# 使用daterangepicker日期选择插件
在 [官方文档](https://www.daterangepicker.cn/#usage)上，的说明就是，引入 `jquery`，`moment` 和本身的 `daterangepicker.js`和 `daterangepicker.css`，在执行自己的js即可。
## 问题：
但是在项目中，遇到一个问题，就是默认值无法取消。查了下资料，于是就改了下源码。
## 方案之一：
我们最后选择这个属性进行修改:

    `autoUpdateInput`: (true/false)指示日期范围选择器是否应`<input>` 在初始化时以及所选日期更改时自动更新其附加元素的值。

在源码中，当 `autoUpdateInput` 设置为 `false` 之后，我们想要在点击确定，选中日期和点击 `range` 三个地方，将 `autoUpdateInput` 改变回来，所以，在三处设置了 `this.autoUpdateInput=true` 属性，在在1207行左右， `clickrange` 函数中，当点击选择了 `range` 时，改变 `autoUpdateInput` 属性，在 `else` 中加入，是因为当选择自定义标签时，如果没有选择日期，依旧不改变默认值。选择日期的改变，在后文所示。
```js
} else if (!this.endDate && date.isBefore(this.startDate)) {
    this.autoUpdateInput=true;
    //special case: clicking the same date for start/end,
    //but the time of the end date is before the start date
    this.setEndDate(this.startDate.clone());
} else { // picking end
this.autoUpdateInput=true;
    if (this.timePicker) {
```
在1335行左右， `clickdate` 函数中，当点击选择了 `enddate` 也就是完整的选择了日期时
```js
 } else if (!this.endDate && date.isBefore(this.startDate)) {
    this.autoUpdateInput=true;
        //special case: clicking the same date for start/end,
        //but the time of the end date is before the start date
        this.setEndDate(this.startDate.clone());
    } else { // picking end
    this.autoUpdateInput=true;
        if (this.timePicker) {
```
在1400行左右，还有一种情况，就是当有时分秒的时间显示时，有可能用户会直接点击确认，或更改时分秒，来选择日期，所以在 `clickapply` 函数中，也改变 `autoUpdateInput` 值
```js
clickApply: function(e) {
        this.autoUpdateInput=true;
```
## 完整demo
[使用daterangepicker日期选择插件](https://yydha.gitee.io/html-demo/html/使用daterangepicker日期选择插件.html)
## gitee地址
[使用daterangepicker日期选择插件](https://gitee.com/yydha/html-demo/blob/master/html/使用daterangepicker日期选择插件.html)