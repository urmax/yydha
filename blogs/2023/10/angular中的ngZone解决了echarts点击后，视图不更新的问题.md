---
title: angular中的ngZone解决了echarts点击后，视图不更新的问题。
date: 2023-10-30
updated: 2023-10-30
tags:
  - 前端
categories:
  - angular
keywords: js
description: angular中的ngZone解决了echarts点击后，视图不更新的问题。
---

# angular中的ngZone解决了echarts点击后，视图不更新的问题

### 缘起

目前开始参与了 angular 的项目，第一次开始，难免是从借鉴开始，到处去抄差不多的逻辑，差不多的组件。最近就遇到一个问题，使用了 echarts。

```ts
// 在模块中需要引入
import * as echarts from 'echarts';
import {NgxEchartsModule} from "ngx-echarts";

@NgModule({
    imports: [
        NgxEchartsModule.forRoot({
            echarts,
        }),
    ]
})
```

这样就能在 html 使用 echarts 了

```html
<div class="yydh-card-l">
  <div #myecharts echarts [options]="chartOption" class="demo-chart"></div>
</div>
```

又遇到一个问题，在 echarts 初始化完成以后，我需要绑定一个点击事件，点击对应的图案就会弹个窗。
那么什么时候才会初始化完成呢？
这个时候，网上找到了答案。

```html
<div #myecharts echarts [options]="chartOption" class="demo-chart" (chartInit)="onChartInit($event)"></div>
```
nvm
这样我才 ts 中写入了弹窗和点击的逻辑。

```ts
onChartInit(ec) {
        this.echartsIntance = ec;
        //获取到echart对象
        // 给echarts 点击事件，当点击蓝色的部分 会弹出一个框
        this.echartsIntance.on('click', (params) => {
            if (params.dataIndex === 0) {
                console.log("opentc")
                this.opentc();
            }
        });
    }

    opentc() {
        this.modal.create({
            nzTitle: '弹窗标题',
            nzContent: myCom,
            nzComponentParams: {
                id: this.id
            },
            nzFooter: null,
            nzWidth: '1100px',
            nzNoAnimation: true,
            nzCentered: true,
        })
    }
```

第一次弹出来是没问题了，第二次开始，点击图表，页面的弹窗宽度为 0，畏畏缩缩的显示在页面的最左边，开始研究这个玄学问题了。
没有走进组件的生命周期里。（点击键盘任意键，又正常显示了。 ---- 目前还是不知道为什么。）

后面找了大佬，敲敲打打的也解决了这个问题。把解决方案贴出来，日后有时间再琢磨一下。

```ts
constructor(private ngZone: NgZone) { }


onChartInit(ec) {
        this.echartsIntance = ec;
        //获取到echart对象
        // 给echarts 点击事件，当点击蓝色的部分 会弹出一个框
        this.echartsIntance.on('click', (params) => {
            if (params.dataIndex === 0) {
                this.ngZone.runTask(() => {
                    this.opentc();
                })
            }
        });
    }
```
