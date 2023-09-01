---
title: JavaScript 中深拷贝方法structuredClone
date: 2023-09-01
updated: 2023-09-01
tags:
  - 前端
categories:
  - js
keywords: js
description: 描述
---

# JavaScript 中深拷贝方法 structuredClone

对于深拷贝，最容易也应该是常见的方法是使用 `JSON.parse() + JSON.stringify()` ，还有一个借助第三方脚本库 `lodash` ，其中方法 `cloneDeep` 可以实现深拷贝。现在可以使用原生的 `structuredClone()` 方法。

```js
// value：被克隆的对象。可以是任何结构化克隆支持的类型
// transfer：为可选参数，是一个可转移对象的数组，里面的 值 并没有被克隆，而是被转移到被拷贝对象上。
structuredClone(value);
structuredClone(value, { transfer });
```

## 例子

```js
const objProfile = { name: 'DevPoint', detail: { age: 30 } };

const deepCopy = structuredClone(objProfile);
const shallowCopy = { ...deepCopy };

console.log(shallowCopy); // {"name": "DevPoint", "detail": {"age": 35 } }

deepCopy.name = 'mike';
deepCopy.detail.age = 35;

console.log(objProfile); // {"name": "DevPoint", "detail": {"age": 30 } }
console.log(deepCopy); // {"name": "mike", "detail": {"age": 35 } }
```

更新第一层克隆对象的属性后，原始属性不会更新。
在更深层次更新属性后，原始属性既不更新。发生这种情况是因为在这种情况下，还复制了更深层次。
而对于浅拷贝对象 shallowCopy 来说，其值会随着对象 deepCopy 的变化而变化，在项目开发中很容易带来 BUG
