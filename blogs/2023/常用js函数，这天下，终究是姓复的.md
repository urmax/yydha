---
title: 常用js函数，这天下，终究是姓复的
date: 2023-03-07
updated: 2023-04-04
tags: 
    - 前端
categories: 
    - 常用js方法集合
keywords: js
description: 常用js函数，这天下，终究是姓复的
---
# 常用js函数，这天下，终究是姓复的
### 1. 在一个树形的数据中，剔除掉某些条件的数据。
```js
// 举个例子，在茫茫人海中找到帅气的我
const filterTreeData = (tree: Record<string, any>[]) => {
    // 使用filter 过滤当前层的数组
    return tree.filter((item: Record<string, any>) => {
        // filter其实也是遍历
        // 把当前遍历的节点的children 也调用一次 filterTreeData 函数，返回过滤后的数组重新赋值
        item.children = filterTreeData(item.children);
        // 最后判断当前节点是否符合过滤要求
        return item.name === '我' && item.type === '帅气';
    });
};

const 人山人海 = [
    ...
];

const 找到了 = filterTreeData(人山人海);
```

### 2. 数字每三位加逗号。
```js
export const thousands = (num: number | string) => {
    if (!num) return `${num}`;
    const str = num.toString();
    return str.replace(/\B(?=(\d{3})+\b)/g, ',');
};

// 使用方式
import { thousands } from '@/utils/number';

// 直接使用表达式就好
```

### 3. 在数组对象中循环他的子项之和
```js
const count = computed(() => {
    return List.value.reduce((sum, e) => sum + Number(e.count || 0), 0);
});
```

### 4. 图片是流文件返回，显示在页面上
```js
axios.get('/1/2/3', {
    responseType: 'blob',
}).then((res: Record<string, any>) => {
    const blob = new Blob([res.data]);
    const url = window.URL.createObjectURL(blob);
    captchaUrl.value = url;
});
```