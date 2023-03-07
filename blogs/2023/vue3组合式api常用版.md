---
title: vue3组合式api常用版
date: 2023-03-03
updated: 2023-03-07
tags: 
    - 前端
categories: 
    - vue3
keywords: git
description: vue3组合式api常用版
---
# vue3组合式api常用版
### 1. 父子组件互相传值
子vue文件
```js
// 子文件必须传入两个值，one是个string对象，two是个布尔值
const props = defineProps<{ one: string; two: boolean }>();
// 父组件非必须传入值
const props = defineProps<{ one?: string; two?: boolean }>();
// 子组件有默认值
const props = withDefaults(defineProps<{ one?: string; two?: boolean }>(), {
    one: '暂无数据',
    two: true
});
```
### 2. 父子组件互相触发方法
子vue文件
```js
// 子文件必须定义这个事件
const emit = defineEmits(['getList']);
// 在需要的是时候触发他
const click = (par: any) => {
    // 第一个参数是定义的父组件事件，第二个参数是 给父组件事件的参数
    emit('getList', par);
};
```
经常有弹出框显示隐藏的场景, 改变父组件的某个值
```js
// 父组件
<Change
    v-if="newShow"
    v-model:show="newShow"
    :data="params.data"
    :title="params.title"
    @success="getlist()"
></Change>

// 子组件
const emits = defineEmits(['update:show', 'success']);
const close = () => {
    emits('update:show', false);
};
const confirm = () => {
    emits('success');
    emits('update:show', false);
}
```
### 3. 计算属性的使用方式
```js
const types = computed(() => {
    return typeList.value.filter(item => item.label);
});
```
### 4. 监听得使用方式
```js
// 与watch相似都可以监听一个数据源。
// 但是watchEffect会在初始化的时候调用一次，与watch的immediate类似。
watchEffect(() => {
     console.log(`当${age}的值变化的时候调用，初始化的时候也调用一次`)
});

watch(() => props.curRole, () => {
    console.log(props.curRole);
},{
    immediate: true,
    deep: true,
});
```