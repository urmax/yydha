---
title: VUE中Class 与 Style 绑定
date: 2023-04-04
updated: 2023-04-04
tags: 
    - 前端
categories: 
    - vue
keywords: js
description: VUE中Class 与 Style 绑定
---
# VUE中Class 与 Style 绑定
## 绑定 HTML Class
### 1. 对象语法
```js
// 我们可以传给 :class (v-bind:class 的简写) 一个对象
<div :class="{ 'active': isActive }"></div>
// ----------------------------------------------------------
// 你可以在对象中传入更多字段来动态切换多个 class。此外，:class 指令也可以与普通的 class attribute 共存。当有如下模板：
<div
  class="static"
  :class="{ active: isActive, 'text-danger': hasError }"
></div>
// 和如下的data
data() {
  return {
    isActive: true,
    hasError: false
  }
}
```
渲染的结果如下
```js
<div class="static active"></div>
```

当 isActive 或者 hasError 变化时，class 列表将相应地更新。例如，如果 hasError 的值为 true，class 列表将变为 "static active text-danger"。
绑定的数据对象不必内联定义在模板里：
```js
<div :class="classObject"></div>
data() {
  return {
    classObject: {
      active: true,
      'text-danger': false
    }
  }
}

```
渲染的结果和上面一样。我们也可以在这里绑定一个返回对象的计算属性。这是一个常用且强大的模式：
```js
<div :class="classObject"></div>
data() {
  return {
    isActive: true,
    error: null
  }
},
computed: {
  classObject() {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
```
### 2. 数组语法
我们可以把一个数组传给 :class，以应用一个 class 列表
```js
<div :class="[activeClass, errorClass]"></div>

data() {
  return {
    activeClass: 'active',
    errorClass: 'text-danger'
  }
}
```
如果你想根据条件切换列表中的 class，可以使用三元表达式
```js
<div :class="[isActive ? activeClass : '', errorClass]"></div>
```
```js
<div :class="[{ active: isActive }, errorClass]"></div>
```
## 绑定内联样式
### 对象语法
```js
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```
直接绑定到一个样式对象通常更好，这会让模板更清晰
```js
<div :style="styleObject"></div>

data() {
  return {
    styleObject: {
      color: 'red',
      fontSize: '13px'
    }
  }
}
```
### 数组语法
```js
<div :style="[baseStyles, overridingStyles]"></div>
```