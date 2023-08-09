---
title: 初识angular
date: 2023-05-21
updated: 2023-08-09
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

## 重点来啦

### 1. 模板

#### 1.1 插值语法

{{  }}

#### 1.2 属性绑定

##### 1.2.1 Attrbute 绑定

```html
<div [attr]="'name'"></div>
<div [attr]="name"></div>
```

##### 1.2.2 类绑定

```html
<!-- 单一类绑定 -->
<div [class.h3-dom]="true"></div>
<!-- 多重类绑定 -->
<div [class]="'h3-dom h3-dom-2'"></div>
<div [class]="{'h3-dom': true, 'h3-dom-2': false}"></div>
<div [class]="['h3-dom', 'title']"></div>
```

##### 1.2.3 配合 js(ngClass)

```ts
export class AppComponent {
  isActive: boolean = true;
  isDisabled: boolean = false;
  isHidden: boolean = false;
  isVisible: boolean = true;
  isChecked: boolean = true;
  isIndeterminate: boolean = false;
}
```

```html
<div [ngClass]="{'active': isActive, 'disabled': isDisabled, 'hidden': isHidden, 'visible': isVisible}"></div>
```

##### 1.2.4 样式绑定

```html
<div [style.color]="'red'"></div>
<div [style.font-size.px]="20"></div>
<div [style]="{'color': 'red', 'font-size': '20px'}"></div>
<div [style]="'color: red;font-size: 20px'"></div>
```

##### 1.2.5 配合 js（ngStyle）

```ts
export class AppComponent {
  color: string = 'red';
  fontSize: number = 20;
  isMax: boolean = true;
}
```

```html
<div [ngStyle]="{'color': color, 'font-size': fontSize + 'px'}"></div>
<div [ngStyle]="{'font-size': isMax ? '20px' : '10px'}"></div>
```

#### 1.3 条件判断

`*ngIf` 是直接影响元素是否被渲染，而非控制元素的显示隐藏

```ts
export class AppComponent {
  isShow: boolean = true;
}
```

```html
<div *ngIf="isShow">显示</div>
<div *ngIf="!isShow">隐藏</div>

<!-- 解析完 -->
<ng-template [ngIf]="isShow">
  <div>显示</div>
</ng-template>

<ng-container *ngIf="isShow; else elseTemplate">
  <div>显示</div>
</ng-container>
<ng-template #elseTemplate>
  <div>隐藏</div>
</ng-template>
```

#### 1.4 循环语句

```ts
export class AppComponent {
  list: number[] = [1, 2, 3, 4, 5];
  item: string = '2';
}
```

```html
<div *ngFor="let item of list let i = index let odd = odd">{{i}}{{item}}{{odd}}</div>

<!-- 解析完 -->
<ng-template ngFor let-item [ngForOf]="list" let-i="index" let-odd="odd">
  <div>{{i}}{{item}}{{odd}}</div>
</ng-template>

<!-- ng-switch -->
<div [ngSwitch]="item">
  <span *ngSwitchCase="1">1</span>
  <span *ngSwitchCase="2">2</span>
  <span *ngSwitchCase="3">3</span>
</div>
```

#### 1.5 事件绑定

```ts
export class AppComponent {
  handleClick() {
    console.log('click');
  }
}
```

```html
<button (click)="handleClick()">按钮</button>
```

#### 1.6 双向绑定

双向绑定是应用中的组件共享数据的一种方式，使用双向绑定来侦听事件并在父组件和子组件之间同步更新值。
ngModel 指令用于在表单元素上创建双向绑定。只对表单元素有效，所以在使用之前要导入 FormsModule。

```ts
import { FormsModule } from '@angular/forms';

@NgModule({
  // 引入模块需要的类
  imports: [
    BrowserModule,
    FormsModule
  ],
  // 组件内使用到的视图
  declarations: [
    AppComponent
  ],
  // 根组件
  bootstrap: [
    AppComponent
  ]
})
```

```ts
export class AppComponent {
  item: string = '2';
}
```

```html
<input [(ngModel)]="item" />
```

#### 1.7 模板引用变量

```html
<input #username />

<button (click)="handleClick(username.value)">按钮</button>
```

#### 1.8 表单控件

1. 在你的应用中注册响应式表单模块，该模块声明了一些你要用在响应式表单中的指令。
2. 生成一个新的 `FormControl` 实例，并把它保存在组件中。
3. 在模板中注册这个 `FormControl`。

##### 1.8.1 导入响应式表单模块

```ts
import { ReactiveFormsModule } from '@angular/forms';
// 并在imports
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
```

##### 1.8.2 注册一个表单控件

```ts
export class AppComponent {
  // 创建一个 FormControl 实例，并把它保存在组件中
  myControl = new FormControl();
}
```

##### 1.8.3 在模板中注册这个 FormControl

```html
<input [formControl]="myControl" />
<p>Value: {{ myControl.value }}</p>
<button (click)="myControl.setValue('Hola!')">Change</button>
```

#### 1.9 表单控件分组

##### 1.9.1 创建一个 FormGroup 实例

```ts
import { FormsModule, FormGroup } from '@angular/forms';

@NgModule({
  // 引入模块需要的类
  imports: [BrowserModule, FormsModule],
  // 组件内使用到的视图
  declarations: [AppComponent],
  // 根组件
  bootstrap: [AppComponent]
})
export class AppComponent {
  // 创建一个 FormControl 实例，并把它保存在组件中
  myGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
}
```

##### 1.9.2 在模板中注册这个 FormGroup

```html
<form [formGroup]="myGroup">
  <input formControlName="username" />
  <input formControlName="password" />
</form>
```

#### 1.10 表单验证

表单元素添加 `required` 表示必填，通过 ngModel 的引用可以拿到当前组件的信息，通过引用获取的验证的信息

```ts
export class AppComponent {
  formData = {
    username: '',
    password: ''
  };
  submit(obj) {
    console.log(obj);
  }
}
```

```html
<form action="">
  <input #userInp type="text" [(ngModel)]="formData.username" required />
  <span>{{userInp.valid}}</span>
  <input #psw type="password" [(ngModel)]="formData.password" required />
  <span>{{psw.valid}}</span>
  <button (click)="submit" type="submit">提交</button>
</form>
```

我们还可以通过 ngModel 跟踪修改状态与有效性验证，它使用了三个 CSS 类来更新控件。

- `ng-untouched` 控件还没有被用户操作过
- `ng-touched` 控件已经被用户操作过
- `ng-pristine` 控件的值和控件的初始值相同
- `ng-dirty` 表示控件被用户输入过
- `ng-valid` 表示控件有效
- `ng-invalid` 表示控件无效

#### 1.11 自定义表单验证

先引入表单的一些内置的依赖。

```ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formData: any = {};
  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', Validators.required],
      phone: ['', [Validators.required, this.phoneVal]]
    });
  }
  phoneVal(phone: string) {
    return /^1[34578]\d{9}$/.test(phone);
  }
}
```

#### 1.12 管道

管道的作用就是传输，不同的管道有不同的作用（处理数据）。
`angular` 自带的 `pipe` 函数。
| 管道 | 功能 |
| ---- | ---- |
| DatePipe | 格式化日期 |
| DecimalPipe | 格式化数字 |
| PercentPipe | 格式化百分比 |
| CurrencyPipe | 格式化货币 |
| JsonPipe | 格式化 json |
| UpperCasePipe | 格式化大写 |
| LowerCasePipe | 格式化小写 |
| SlicePipe | 截取字符串 |
| HighlightPipe | 格式化字符串 |
| DateAgoPipe | 格式化时间 |

`pipe` 用法

```js
{{ 123456 | date:'yyyy-MM-dd' }}
```

```js
// 模板语法
<div>
  <h1>{{title}}</h1>
  <h2>{{title | uppercase}}</h2>
  <h3>{{title | slice:1:4}}</h3>
  <h4>{{title | slice:1:4 | uppercase}}</h4>
  <h5>{{title | slice:1:4 | uppercase | slice:0:2}}</h5>
</div>
```

### 2. 生命周期

| 钩子方法              | 用途   | 时机           |
| --------------------- | ------ | -------------- |
| ngOnInit              | 初始化 | 组件出生       |
| ngOnDestroy           | 销毁   | 组件死亡       |
| ngAfterViewInit       | 初始化 | 组件视图初始化 |
| ngAfterViewChecked    | 检测   | 组件视图检测   |
| ngAfterContentInit    | 初始化 | 组件内容初始化 |
| ngAfterContentChecked | 检测   | 组件内容检测   |
| ngOnChanges           | 变化   | 组件数据变化   |
| ngDoCheck             | 检测   | 组件脏检测     |
| ngOnChanges           | 变化   | 组件数据变化   |

```js
export class MyC1 implements OnInit {
  // 面向对象中： 类的构造方法，组件出生的第一时间触发
  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    // init初始化 相当于vue的mounted
    console.log('ngOnInit： 组件的内容开始初始化');
    // 发送网络请求
  }

  ngAfterContentInit(): void {
    console.log('组件中的数据初始化时触发');
  }

  ngAfterViewInit(): void {
    console.log('组件的ui页面初始化');
  }

  ngAfterContentChecked(): void {
    console.log('组件上的的数据发生变化');
  }

  ngAfterViewChecked(): void {
    console.log('组件上的的ui发生变化');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy:组件销毁时触发');
    // 清理一些数据
  }
}
```

### 3. 掌控子元素

```html
<app-myc #myc></app-myc>
```

```js
// TS语言的静态类型: 变量名
@ViewChild('myc') abc: MyComponent;

console.log(abc);
this.abc.name = '改变你的名字';
```

#### 3.1 父子传参

##### 3.1.1 父传子

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

##### 3.1.2 子传父

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

### 4. 服务

组件间的数据共享，类似 vuex；

依赖注入机制：

在生活中， 超市的摇摇车，车上有标识，每次 2 元。

声明依赖： 想要玩，必须投 2 元钱。

注入： 玩的时候，投 2 元

```js
import { Injectable } from '@angular/core';

@Injectable({
  // 可以是root（app.modules.ts）也可以是null（不设定区域）， 还可以是某个模块的名字（懒加载）
  providedIn: 'root'
})
export class NameService {
  name = '张三';
  age = 18;
}
```

```js
import { NameService } from './name.service';

// 父组件
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

### 5. 路由

#### 5.1 基础

```js
import C1Component from './c1.component';
import C2Component from './c2.component';
import C3Component from './c3.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'c1/:id', component: C1Component },
  { path: 'c2', component: C2Component },
  { path: 'c3', component: C3Component }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
});
export class AppRoutingModule { }
```

```html
<a routerLink="/c1">C1</a>
<a routerLink="/c2">C2</a>
<a routerLink="/c3">C3</a>
<router-outlet></router-outlet>
```

#### 5.2 路由传参

##### 5.2.1 query

```html
<a [routerLink]="['/c1', { queryParams: { id: 1 } }]">C1</a
```

```ts
import { ActivatedRoute } from '@angular/router';
constructor(private route: ActivatedRoute) {}
ngOnInit() {
  this.route.queryParams.subscribe(params => {
    console.log(params);
  });
}
```

##### 5.2.2 params

这个需要改路由文件

```ts
const routes: Routes = [{ path: 'c1/:id', component: C1Component }];
```

```html
<a [routerLink]="['/c1', { params: { id: 1 } }]">C1</a
```

```ts
import { ActivatedRoute } from '@angular/router';
constructor(private route: ActivatedRoute) {}
ngOnInit() {
  this.route.params.subscribe(params => {
    console.log(params.id);
  });
}
```
