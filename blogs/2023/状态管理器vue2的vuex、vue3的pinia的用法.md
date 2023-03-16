---
title: 状态管理器vue2的vuex、vue3的pinia的用法
date: 2023-03-16
updated: 2023-03-16
tags: 
    - 前端
categories: 
    - pinia
    - js
    - vuex
keywords: js
description: 状态管理器vue2的vuex、vue3的pinia的用法
---
# 状态管理器vue2的vuex、vue3的pinia的用法
## vue2的vuex
### 仓库里
```js
export default {
    namespaced: true,
    state: {
        age: 18
    },
    mutations: {
        // 更新当前选中项
        chufa(state, v) {
            state.age = v;
        },
    },
    actions: {},
    getters: {},
};


```
### 触发mutation的方法
```js
this.$store.commit('chufa', 20);
```
### 获得state的数据
```js
computed: {
    age() {
        return this.$store.state.age;
    }
}
```
## vue3的pinia
### 仓库里
```js
import { defineStore } from 'pinia';

export const useCountStore = defineStore('counter', () => {
    const counter = ref(0);
    const doubleCount = computed(() => counter.value * 2);
    const increment = () => counter.value++;

    return { counter, doubleCount, increment };
});

```
### 使用仓库的方法
```ts
import { useCountStore } from '@/store/count';

const funa = () => {
    const store = useCountStore();
    store.increment();
}
```

### 获取仓库的内容
```ts
import { useCountStore } from '@/store/count';

const store = useCountStore();
const userinfoname = computed(() => {
    return store.counter;
});

```