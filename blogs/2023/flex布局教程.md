---
title: flex布局教程
date: 2023-02-06
updated: 2023-02-06
tags: 
    - 前端
categories: 
    - flex
keywords: flex
description: flex布局教程
---
# flex布局教程
其实平时也一直在用，但是用来用去用的最多的就是两端对齐。。。
因此在此记录下，让其印象更加深刻一点。
## 一、Flex 布局是什么？
Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。
任何一个容器都可以指定为 Flex 布局。
注意，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。
```css
/* 普通块元素 */
.box{
  display: flex;
}

/* 行内元素 */
.box{
  display: inline-flex;
}

/* Webkit 内核 */
.box{
  display: -webkit-flex; /* Safari */
  display: flex;
}
```
## 设置在父项的属性
### flex-direction 子项排列方向
```css
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```
row（默认值）：主轴为水平方向，起点在左端。
row-reverse：主轴为水平方向，起点在右端。
column：主轴为垂直方向，起点在上沿。
column-reverse：主轴为垂直方向，起点在下沿。
### flex-wrap 子项换行
```css
.box {
    flex-wrap: nowrap | wrap | wrap-reverse;
}
```
nowrap（默认）：不换行。
wrap：换行，第一行在上方。
wrap-reverse：换行，第一行在下方。
### flex-flow 
```css
.box {
    flex-flow: <flex-direction> || <flex-wrap>;
}
```
flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
### justify-content 主轴对齐方式
```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | initial | inherit;
}
```
flex-start（默认值）：左对齐
flex-end：右对齐
center： 居中
space-between：两端对齐，项目之间的间隔都相等。
space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
space-evenly: 每个项目两侧的间隔相等。
initial：根据默认值放置。
inherit：继承父项目放置。
### align-items 交叉轴对齐方式
```css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```
flex-start：交叉轴的起点对齐。
flex-end：交叉轴的终点对齐。
center：交叉轴的中点对齐。
baseline: 项目的第一行文字的基线对齐。
stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
### align-content 
```css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```
flex-start：与交叉轴的起点对齐。
flex-end：与交叉轴的终点对齐。
center：与交叉轴的中点对齐。
space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
stretch（默认值）：轴线占满整个交叉轴。

## 设置在子项的属性
### order
```css
.item {
  order: <int>;
}
```
属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
### flex-grow
```css
.item {
  flex-grow: <number>; /* default 0 */
}
```
属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
### flex-shrink
```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```
属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
### flex-basis
```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```
在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。
### flex
```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```
flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
### align-self
```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```
align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。