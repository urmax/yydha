---
title: 初识angular
date: 2023-05-21
updated: 2023-05-21
tags:
  - 前端
categories:
  - angular
keywords: js
description: 描述
---

# 初识 angular

## 常用命令行

```js
// 启动项目
ng server --open || ng s --o
// 快捷创建组件
ng generate component '组件名' || ng g s '组件名'
// 快捷创建服务
ng generate service '服务名' || ng g s '服务名'
```

### 生命周期

```js
export class MyC1 implements OnInit {
  // 面向对象中： 类的构造方法，组件出生的第一时间触发
  constructor() {
    console.log("constructor");
  }

  ngOnInit(): void {
    // init初始化 相当于vue的mounted
    console.log("ngOnInit： 组件的内容开始初始化");
    // 发送网络请求
  }

  ngAfterContentInit(): void {
    console.log("组件中的数据初始化时触发");
  }

  ngAfterViewInit(): void {
    console.log("组件的ui页面初始化");
  }

  ngAfterContentChecked(): void {
    console.log("组件上的的数据发生变化");
  }

  ngAfterViewChecked(): void {
    console.log("组件上的的ui发生变化");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy:组件销毁时触发");
    // 清理一些数据
  }
}
```

### 掌控子元素

```html
<app-myc #myc></app-myc>
```

```js
// TS语言的静态类型: 变量名
@ViewChild('myc') abc: MyComponent;

console.log(abc);
this.abc.name = '改变你的名字';
```

### 父子传参

#### 父传子

```html
<app-myc name="shuaige"></app-myc>
<app-myc [age]="18"></app-myc>
<app-myc [boss]="{name: 'mingzi', age:'26'}"></app-myc>
```

```js
export class MyC1 implements OnInit {
  // @Input() 告诉组件 这是外部传入的
  @Input() name: string;
  @Input() age: number;
  @Input() boss: Boss; // any不太专业 可以自定义属性 interface
}
interface Boss {
  name: string;
  age: number;
}
```

#### 子传父

<!--
    1. 子元素不能获取父元素的索引
    2. 父元素通过属性的方式
    3. 子元素通过这个方法来传值
 -->

```js
// 父组件 创建一个方法
export class MyC1 implements OnInit {
  show(msg) {
    console.log(msg);
  }
}
```

```html
<app-myc (msgEvent)="show($event)"></app-myc>
```

```js
// 子组件 接收这个方法
export class MyC1 implements OnInit {
  // output 向外 传递消息
  @Output() msgEvent = new EventEmitter();
}
```

```html
<!-- 子组件html -->
<button (click)="msgEvent.emit('消息')"></button>
```

### 服务

组件间的数据共享，类似 vuex；

依赖注入机制：

在生活中， 超市的摇摇车，车上有标识，每次 2 元。

声明依赖： 想要玩，必须投 2 元钱。

注入： 玩的时候，投 2 元

```js
export class MyC1 implements OnInit {
  // 声明属性 来保存传入的值
  xyz: NameService;
  // 变量名自定义
  constructor(nameS: NameService) {
    this.xyz = nameS;
  }
}
```

语法糖写法

```js
export class MyC1 implements OnInit {
//   自动生成属性并赋值
  constructor(public nameS: NameService) {
  }
}
```
