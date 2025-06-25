---
title: angular中快速实现时钟功能 （精确到秒）
date: 2025-06-25
updated: 2025-06-25
tags:
    - 前端
categories:
    - 学习
description: angular中快速实现时钟功能 （精确到秒）
---

## angular 中快速实现时钟功能

在 Angular 中如何使用 Observable 与日期管道处理异步数据。具体展示了如何定义一个每 1000 毫秒更新的 Observable，并结合 Angular 的 AsyncPipe 和 DatePipe，将时间戳转化为友好的日期时间格式显示在 HTML 模板中。

### 解决方式

原理及解释：

在对应的组件类内定义一个属性 time 为 Observable 对象 由定时器没 500 毫秒触发一次更新

使用 angular CommonModule 提供的 asyns date pipe 由 asyns 处理定时器 发射出异步的数据，date 处理时间的显示格式。

```html
<span class="time">{{ time | async | date:'yyyy-MM-dd HH:mm:ss' }}</span>
```

```ts
time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
});
```
