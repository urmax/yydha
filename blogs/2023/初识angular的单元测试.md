---
title: 初识angular的单元测试
date: 2023-05-22
updated: 2023-05-22
tags:
  - 前端
categories:
  - angular
keywords: js
description: 初识angular的单元测试
---

# 初识 angular 的测试

### angular cli 集成

基于 Karma 和 Jasmine 的单元测试框架

基于 Protractor 的端到端的 测试框架(集成测试，整个系统要跑起来)

### 测试的基本步骤

1. 命名你的测试包

```js
describe("测试登录组件", () => {});
```

2. 准备测试环境

```js
describe("测试登录组件", () => {
  // beforeEach 表示 在接下来的所有测试用例中 都需要这个前置条件
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declaration: [LoginComponents],
      imports: [
        ShareModule,
        StoreNodule.provideStore(reducer),
        BrownserAnimationModule,
      ],
    }).compileComponents();
  }));
});
```

3. 编写测试用例

```js
it("组件的模板应该被正确的创建", () => {
  const compiled = fixture.debugElement.nativeElement;
  expect(compiled.querySelector(".title").innerText).toContain("登录");
});
```
