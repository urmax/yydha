---
title: angular中的echarts数据从父组件传入，修改不渲染的问题
date: 2023-10-31
updated: 2023-10-31
tags:
  - 前端
categories:
  - angular
keywords: js
description: angular中的echarts数据从父组件传入，修改不渲染的问题
---

# angular 中的 echarts 数据从父组件传入，修改不渲染的问题

### 缘起

目前开始参与了 angular 的项目，第一次开始，难免是从借鉴开始，到处去抄差不多的逻辑，差不多的组件。最近就遇到一个问题，使用了 echarts 但是数据从父组件传入，他在父组件修改后，子组件中的 echarts 不渲染的问题。直接贴出代码。

```ts
// 在模块中需要引入
import * as echarts from 'echarts';

ngOnChanges(): void {
    this.initEchart()
}

initEchart() {
    // 一些数据操作
    // ...
    if (!this.chartInstance && this.chartElement) {
        this.chartInstance = echarts.init(this.chartElement.nativeElement);
    }
    // 使用 setOption 方法重新渲染图表
    if (this.chartInstance && this.chartOption) {
        this.chartInstance.setOption(this.chartOption);
    }
}
```
