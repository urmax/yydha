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

# 状态管理器 vue2 的 vuex、vue3 的 pinia 的用法

## vue2 的 vuex

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
        }
    },
    actions: {},
    getters: {}
};
```

### 触发 mutation 的方法

```js
this.$store.commit('chufa', 20);
```

### 获得 state 的数据

```js
computed: {
    age() {
        return this.$store.state.age;
    }
}
```

## vue3 的 pinia

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
};
```

### 获取仓库的内容

```ts
import { useCountStore } from '@/store/count';

const store = useCountStore();
const userinfoname = computed(() => {
    return store.counter;
});
```

### 项目实战

```ts
// /stores/userinfo.ts 文件
import { ref } from 'vue';
import { defineStore } from 'pinia';
import { Account } from '@/services/xxxxxxx.service';
const account = new Account();
// 假设这是一个异步函数，用于从服务器获取用户信息
async function fetchUserInfo() {
    // 模拟异步请求
    return account.getLoginUserInfo('token_demo').then(res => {
        return res;
    });
}

export const useUserInfoStore = defineStore('userInfo', () => {
    const userInfoDetail: any = ref(null);

    // 获取用户信息的方法
    const getUserInfo = async () => {
        if (!userInfoDetail.value) {
            // 如果没有用户信息，则发起请求
            userInfoDetail.value = await fetchUserInfo();
        }
        return userInfoDetail.value;
    };

    return { userInfoDetail, getUserInfo };
});
// 分割线 ================================
// 使用store的地方
import { useUserInfoStore } from '@/stores/userInfo';
const userInfoStore = useUserInfoStore();

const myRole = await userInfoStore.getUserInfo();
isAdmin.value = myRole.RoleName.includes('超级管理员');
console.log('是否是超级管理员:', isAdmin.value);
```
