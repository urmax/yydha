---
title: 回调堆栈方式解决简单的需要异步的问题
date: 2023-12-15
updated: 2023-12-15
tags:
  - 前端
categories:
  - 异步
  - 堆栈
keywords: js
description: 回调堆栈方式解决简单的需要异步的问题
---

# 回调堆栈方式解决简单的需要异步的问题

### 缘起

有个权限的问题，存在一个 localstorge 中，每次刷新页面，都需要重新获取权限，然后根据权限，动态的显示一些内容。因为他是异步的，请求没回来，但是前端已经判断了，所以内容没出来。

### 分析

没有权限的数组的时候，先等待处理，等有数组的时候，再进行前端显示隐藏操作。

### 实现

指令组件

```js
// 在指令定义中使用 store 来获取全局权限信息
import { type Directive } from 'vue';
// import usePermissionStore from '@/stores/permission'
export const hasPermission = (value: any, permissions: any) => {
  if (value && value instanceof Array) {
    if (value.length > 0) {
      const permissionRoles = value;
      if (permissions.length) {
        const hasPermission = permissions.some(item => {
          return permissionRoles.includes(item);
        });
        return hasPermission || false;
      } else {
        return false;
      }
    }
  } else {
    throw new Error(`need roles! Like v-permission="['admin','editor']"`);
  }
};
const permission: Directive = (el, binding) => {
  let permissionsArr = window.localStorage.getItem('permissions') || [];
  //待处理
  if (window.localStorage.getItem('permissions') === '') {
    if (!window['glob_PermissionStatus']) {
      window['glob_PermissionStatus'] = [];
    }
    const { value } = binding;
    const item: PermissionStatus = {
      isTask: true,
      el: el,
      bindings: value
    };
    window['glob_PermissionStatus'].push(item);
    el.hidden = true;
    return;
  }
  // const store = usePermissionStore(); // 替换为你的Pinia store名称
  if (permissionsArr.length) {
    permissionsArr = JSON.parse(permissionsArr);
  }
  const { value } = binding;

  // console.log(store.hasPermission(value));
  // // 在这里进行权限校验，根据权限信息动态展示或隐藏元素
  if (hasPermission(value, permissionsArr) === false) {
    // el.style.display = 'none'; // 或者其他处理方式
    el.parentNode && el.parentNode.removeChild(el);
  }
};

export interface PermissionStatus {
  isTask: boolean;
  el: any;
  bindings: string[];
}

export default permission;
```

刷新权限的地方

```js
// 刷新权限之前，需要清空localstorge
window.localStorage.setItem('permissions', ''); //初始值
// 刷新权限
const initPermission = () => {
  const request = new requestSvr();
  return request.getPermission().then((res: any) => {
    const result = res || [];
    let permissions = result.map((it: any) => {
      return it.Permission;
    });
    window.localStorage.setItem('permissions', JSON.stringify(permissions));
    //执行待处理任务
    const PermissionStatus: string[] = window['glob_PermissionStatus'];
    const permissionsArr = permissions;
    if (PermissionStatus != null && PermissionStatus.length > 0) {
      PermissionStatus.forEach((item: PermissionStatus) => {
        if (item.isTask) {
          const value = item.bindings;
          // // 在这里进行权限校验，根据权限信息动态展示或隐藏元素
          if (hasPermission(value, permissionsArr) === false) {
            // el.style.display = 'none'; // 或者其他处理方式
            item.el.parentNode && item.el.parentNode.removeChild(el);
          } else {
            item.el.hidden = false;
          }
          item.isTask = false;
        }
      });
    }
  });
};
```

### 总结

需要加上一个 template 标签，然后循环所有的插槽，然后把插槽的 name，和 row 传递给子组件，子组件再把这个插槽原样传递给孙组件。

```html
<template v-for="(slot, name) in $slots" :key="name" #[name]="{ row }">
  <slot :name="name" :row="row"></slot>
</template>
```
