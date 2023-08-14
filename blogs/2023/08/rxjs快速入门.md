---
title: rxjs快速入门
date: 2023-08-11
updated: 2023-08-14
tags:
  - rxjs
categories:
  - angular
keywords: js
description: rxjs快速入门
---

# rxjs

## 1. 概述

Rxjs 是一个库，它通过使用可观察对象和可观察操作符来编写异步和基于事件的程序。

[官网传送门](https://cn.rx.js.org/)

## 2. 快速入门

1. 可观察对象（Observable）：类比 promise 对象，内部可以用于执行异步代码，通过调用内部提供的方法将异步代码执行的结果传递到可观察对象外部。
2. 观察者（Observer）：类比 then 方法中的回调函数，用于接收可观察对象内部传递过来的异步执行结果。
3. 订阅（Subscription）：类比 then 方法，通过订阅将可观察对象与观察者进行绑定，当可观察对象发出数据时，订阅者可以接收到数据。

## 可观察对象

### 2.1 可观察对象

```js
import { Observable } from 'rxjs';

// 创建一个可观察对象
const observable = new Observable(observer => {
  // 执行异步代码
  setTimeout(() => {
    observer.next('hello rxjs');
  }, 1000);
});

// 创建一个观察者
const observer = {
  next: value => {
    console.log(value);
  }
};

// 订阅
observable.subscribe(observer);
```

1. 在 Observable 对象内部可以多次调用 next 方法向外发送数据。

```js
const observable = new Observable(observer => {
  let index = 0;
  setInterVal(() => {
    observer.next(index++);
  }, 1000);
});
const observer = {
  next: value => {
    console.log(value);
  }
};
observable.subscribe(observer);
```

2. 当所有数据发送完成以后，可以调用 complete 方法终止数据发送。

```js
const observable = new Observable(observer => {
  let index = 0;
  let timer = setInterVal(() => {
    observer.next(index++);
    if (index === 3) {
      observer.complete();
      clearInterVal(timer);
    }
  }, 1000);
});
const observer = {
  next: value => {
    console.log(value);
  },
  complete: () => {
    console.log('护具发送完成');
  }
};
observable.subscribe(observer);
```

3. 当 Observable 对象内部发生错误时，可以调用 error 方法向外发送错误信息, Observable 终止。

```js
const observable = new Observable(observer => {
  let index = 0;
  let timer = setInterVal(() => {
    observer.next(index++);
    if (index === 3) {
      observer.error('err');
      clearInterVal(timer);
    }
  }, 1000);
});
const observer = {
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log(err);
  }
};
observable.subscribe(observer);
```

4. 可观察对象是惰性的，只有被订阅后才会执行。默认是不会执行的。

```js
const observable = new Observable(observer => {
  console.log('创建了可观察对象');
});
const observer = {};
// observable.subscribe(observer);
```

5. 可观察对象可以有 n 多订阅者，每次订阅都会得到执行。

```js
const observable = new Observable(observer => {
  console.log('创建了可观察对象');
});
const observer = {};
observable.subscribe(observer);
observable.subscribe(observer);
observable.subscribe(observer);
```

### 2.2 Subject

1. 用于创建空的可观察对象，在订阅后不会立即执行，next 方法可以在可观察对象外部调用。

```js
import { Subject } from 'rxjs';
const subject = new Subject();
subject.subscribe({
  next: value => {
    console.log(value);
  }
});
subject.next(1);
subject.next(2);
subject.next(3);
```

### 2.3 BehaviorSubject

拥有 Subject 的所有特性，并且可以存储最新的值，并且可以获取到最新的值。

```js
import { BehaviorSubject } from 'rxjs';
const subject = new BehaviorSubject(1);
subject.subscribe({
  next: value => {
    console.log(value);
  }
});
subject.next(2);
subject.next(3);
```

### 2.4 ReplaySubject

功能类似 Subject，但是有新订阅者的时候处理方式不同，会广播所有历史结果。

```js
import { ReplaySubject } from 'rxjs';
const subject = new ReplaySubject();
subject.subscribe({
  next: value => {
    console.log(value);
  }
});
subject.next(1);
subject.next(2);
```

## 3 操作符

1. 数据流：从可观察对象内部输出的数据就是数据流，可观察对象内部源源不断的输出假数据。
2. 操作符： 用于操作数据流，可以对对象数据流进行转换，过滤等等操作。

### 3.1 辅助方法

#### 3.1.1 range

`range(start, length)`
range 操作符可以创建一个数据流，数据流中包含从 0 到 n-1 的整数。调用方法后，会返回 observable 对象,被订阅后会返回数值。

```js
import { range } from 'rxjs';
range(5).subscribe({
  next: value => {
    console.log(value);
  }
});
// 发出的数据流
// 0
// 1
// 2
// 3
// 4
```

方法内部不是一次发出 length 个数值，而是发送了 length 次，每次发送一个数值，都调用了一次内部的 next 方法。

#### 3.1.2 from

将 Array, promise, Iterator 转换为 Observable 对象。

```ts
import { from } from 'rxjs';
from([1, 2, 3]).subscribe(value => {
  console.log(value);
});

function p() {
  return new Promise(resolve => {
    resolve([1, 2, 3]);
  });
}

from(p()).subscribe(value => {
  console.log(value);
});
```

#### 3.1.3 from

### 3.2 操作符

https://cn.rx.js.org/manual/overview.html#h16

#### 3.2.1 map

map: 对数据流进行转换，基于原有值进行转换。

```js
import { range } from 'rxjs';
import { map } from 'rxjs/operators';
const example = range(1, 5).pipe(map(val => val * 2));
example.subscribe(val => console.log(val));
// 发出的数据流
// 2
// 4
// 6
// 8
// 10
```

#### 3.2.2 mapTo

mapTo: 对数据流进行转换，不关心原有值，直接传入转换后的值。
