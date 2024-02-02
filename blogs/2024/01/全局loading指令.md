---
title: 全局loading指令
date: 2024-01-25
updated: 2024-01-25
tags:
  - 全局指令
categories:
  - 指令
keywords: js
description: 全局loading指令
---

# 全局 loading 指令

### 上代码

文件 1， vue.js

```vue
<template>
  <div class="loading-box">
    <Spin class="spin" tip="加载中..." :indicator="indicator" />
  </div>
</template>

<script lang="ts" setup>
import { Spin } from 'ant-design-vue';
import { h } from 'vue';
const indicator = h('i', {
  style: {
    fontSize: '16px'
  },
  class: 'iconfont icon-loading',
  spin: true
});
</script>

<style scoped lang="less">
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading-box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  // background: rgb(0 0 0 / 3%);
  z-index: 9999;
  position: absolute;
  top: 0;
  left: 0;
  :deep(.icon-loading) {
    width: auto;
    height: auto;
    animation: rotate 2s linear infinite;
    color: #666;
  }
  :deep(.ant-spin-dot-item) {
    background-color: #666;
  }
  :deep(.ant-spin.ant-spin-show-text .ant-spin-text) {
    color: #666;
  }
}
</style>
```

文件 2， loading.ts

```ts
import { createApp } from 'vue';
import Loading from './loading.vue';

export const loading = {
  mounted(el, binding) {
    const app = createApp(Loading);
    const instance = app.mount(document.createElement('div'));
    el.instance = instance;
    if (binding.value) {
      appendEl(el);
    }
  },
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      binding.value ? appendEl(el) : removeEl(el);
    }
  }
};
// 插入元素
const appendEl = el => {
  // 给父元素加个定位，让loading元素定位
  el.style.position = 'relative';
  el?.appendChild(el.instance.$el);
};
// 移除元素
const removeEl = el => {
  el.style.position = '';

  // 踩坑：el?.removeChild(el.instance.$el)->直接这样写会报错：Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.（要删除的节点不是此节点的子节点）
  // 解决：判断一下是否为此节点的子元素再移除（参考：https://www.freesion.com/article/2620879355/）
  const $el = el.instance.$el;
  if (el?.contains($el)) {
    el?.removeChild($el);
  }
};
export * from './loading';
```

文件 3， main.ts 引入

```ts
// 循环注册指令
import { loading } from './directives/loading/loading';
app.directive('loading', loading);
```
