---
title: vue3快速上手
date: 2022-12-07
updated: 2022-12-08
tags: 
    - 前端
categories: 
    - 学习
keywords: vue3
description: vue3快速上手
top_img: 
comments: vue3快速上手
cover:
---
# 初识 Vue3
## 认识Vue3
### 相关信息
    · Vue.js 3.0 "One Piece" 正式版在今年9月份发布
    · 2年多开发, 100+位贡献者, 2600+次提交, 600+次PR
    · Vue3支持vue2的大多数特性
    · 更好的支持Typescript
### 性能提升
    · 打包大小减少41%
    · 初次渲染快55%, 更新渲染快133%
    · 内存减少54%
    · 使用Proxy代替defineProperty实现数据响应式
    · 重写虚拟DOM的实现和Tree-Shaking
### 新增特性
    · Composition (组合) API
    · setup
        · ref 和 reactive
        · computed 和 watch
        · 新的生命周期函数
        · provide 与 inject
    · 新组件
        · Fragment - 文档碎片
        · Teleport - 瞬移组件的位置
        · Suspense - 异步加载组件的loading界面
    · 其它API更新
# `Composition` (组合 API ) 常用部分
[官方文档](https://composition-api.vuejs.org/zh/api.html)
## `setup`
新的option, 所有的组合API函数都在此使用, 只在初始化时执行一次函数如果返回对象, 对象中的属性或方法, 模板中可以直接使用
## `ref`
作用: 定义一个数据的响应式
语法: `const xxx = ref(initValue)`:
创建一个包含响应式数据的引用(`reference`)对象
js中操作数据: `xxx.value`
模板中操作数据: 不需要`.value`
一般用来定义一个基本类型的响应式数据
```vue
<template>
  <h2>{{count}}</h2>
  <hr>
  <button @click="update">更新</button>
</template>

<script>
import {
  ref
} from 'vue'
export default {

  /* 在Vue3中依然可以使用data和methods配置, 但建议使用其新语法实现 */
  // data () {
  //   return {
  //     count: 0
  //   }
  // },
  // methods: {
  //   update () {
  //     this.count++
  //   }
  // }

  /* 使用vue3的composition API */
  setup () {

    // 定义响应式数据 ref对象
    const count = ref(1)
    console.log(count)

    // 更新响应式数据的函数
    function update () {
      // alert('update')
      count.value = count.value + 1
    }

    return {
      count,
      update
    }
  }
}
</script>
```
## `reactive`
作用: 定义多个数据的响应式
`const proxy = reactive(obj)`: 接收一个普通对象然后返回该普通对象的响应式代理器对象
响应式转换是“深层的”：会影响对象内部所有嵌套的属性
内部基于 `ES6` 的 `Proxy` 实现，通过代理对象操作源对象内部数据都是响应式的
```vue
<template>
  <h2>name: {{state.name}}</h2>
  <h2>age: {{state.age}}</h2>
  <h2>wife: {{state.wife}}</h2>
  <hr>
  <button @click="update">更新</button>
</template>

<script>
/* 
reactive: 
    作用: 定义多个数据的响应式
    const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
    响应式转换是“深层的”：会影响对象内部所有嵌套的属性
    内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的
*/
import {
  reactive,
} from 'vue'
export default {
  setup () {
    /* 
    定义响应式数据对象
    */
    const state = reactive({
      name: 'tom',
      age: 25,
      wife: {
        name: 'marry',
        age: 22
      },
    })
    console.log(state, state.wife)

    const update = () => {
      state.name += '--'
      state.age += 1
      state.wife.name += '++'
      state.wife.age += 2
    }

    return {
      state,
      update,
    }
  }
}
</script>
```
## `Vue2` 与 `Vue3` 的响应式
### `vue2`
    ·核心:
        · 对象: 通过defineProperty对对象的已有属性值的读取和修改进行劫持(监视/拦截)
        · 数组: 通过重写数组更新数组一系列更新元素的方法来实现元素修改的劫持
```js
Object.defineProperty(data, 'count', {
    get () {}, 
    set () {}
})
```
    ·问题:
        · 对象直接新添加的属性或删除已有属性, 界面不会自动更新
        · 直接通过下标替换元素或更新length, 界面不会自动更新
### `vue3`
    · 核心:
        · 通过Proxy(代理): 拦截对data任意属性的任意(13种)操作, 包括属性值的读写, 属性的添加, 属性的删除等...
        · 通过 Reflect(反射): 动态对被代理对象的相应属性进行特定的操作
    · 文档:
        https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
        https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect
```js
new Proxy(data, {
	// 拦截读取属性值
    get (target, prop) {
    	return Reflect.get(target, prop)
    },
    // 拦截设置属性值或添加新属性
    set (target, prop, value) {
    	return Reflect.set(target, prop, value)
    },
    // 拦截删除属性
    deleteProperty (target, prop) {
    	return Reflect.deleteProperty(target, prop)
    }
})

proxy.name = 'tom'   
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Proxy 与 Reflect</title>
</head>
<body>
  <script>
    
    const user = {
      name: "John",
      age: 12
    };

    /* 
    proxyUser是代理对象, user是被代理对象
    后面所有的操作都是通过代理对象来操作被代理对象内部属性
    */
    const proxyUser = new Proxy(user, {

      get(target, prop) {
        console.log('劫持get()', prop)
        return Reflect.get(target, prop)
      },

      set(target, prop, val) {
        console.log('劫持set()', prop, val)
        return Reflect.set(target, prop, val); // (2)
      },

      deleteProperty (target, prop) {
        console.log('劫持delete属性', prop)
        return Reflect.deleteProperty(target, prop)
      }
    });
    // 读取属性值
    console.log(proxyUser===user)
    console.log(proxyUser.name, proxyUser.age)
    // 设置属性值
    proxyUser.name = 'bob'
    proxyUser.age = 13
    console.log(user)
    // 添加属性
    proxyUser.sex = '男'
    console.log(user)
    // 删除属性
    delete proxyUser.sex
    console.log(user)
  </script>
</body>
</html>
```
## `setup` 细节
    · setup 执行的时机
        · 在 beforeCreate 之前执行(一次), 此时组件对象还没有创建
        · this 是 undefined, 不能通过 this 来访问 data/computed/methods/props
        · 其实所有的 composition API 相关回调函数中也都不可以
    · setup的返回值
        · 一般都返回一个对象: 为模板提供数据, 也就是模板中可以· 直接使用此对象中的所有属性/方法
        · 返回对象中的属性会与data函数返回对象的属性合并成为组件对象的属性
        · 返回对象中的方法会与methods中的方法合并成功组件对象的方法
        · 如果有重名, setup优先
        · 注意:
            · 一般不要混合使用: methods中可以访问setup提供的属性和方法, 但在setup方法中不能访问data和methods
            · setup不能是一个async函数: 因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性数据
    · setup的参数
        setup(props, context) / setup(props, {attrs, slots, emit})
            props: 包含props配置声明且传入了的所有属性的对象
            attrs: 包含没有在props配置中声明的属性的对象, 相当于 this.$attrs
            slots: 包含所有传入的插槽内容的对象, 相当于 this.$slots
            emit: 用来分发自定义事件的函数, 相当于 this.$emit
```vue
<template>
  <h2>App</h2>
  <p>msg: {{msg}}</p>
  <button @click="fn('--')">更新</button>

  <child :msg="msg" msg2="cba" @fn="fn"/>
</template>

<script lang="ts">
import {
  reactive,
  ref,
} from 'vue'
import child from './child.vue'

export default {

  components: {
    child
  },

  setup () {
    const msg = ref('abc')

    function fn (content: string) {
      msg.value += content
    }
    return {
      msg,
      fn
    }
  }
}
</script>
```
```vue
<template>
  <div>
    <h3>{{n}}</h3>
    <h3>{{m}}</h3>

    <h3>msg: {{msg}}</h3>
    <h3>msg2: {{$attrs.msg2}}</h3>

    <slot name="xxx"></slot>

    <button @click="update">更新</button>
  </div>
</template>

<script lang="ts">

import {
  ref,
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'child',

  props: ['msg'],

  emits: ['fn'], // 可选的, 声明了更利于程序员阅读, 且可以对分发的事件数据进行校验

  data () {
    console.log('data', this)
    return {
      // n: 1
    }
  },

  beforeCreate () {
    console.log('beforeCreate', this)
  },

  methods: {
    // update () {
    //   this.n++
    //   this.m++
    // }
  },

  // setup (props, context) {
  setup (props, {attrs, emit, slots}) {

    console.log('setup', this)
    console.log(props.msg, attrs.msg2, slots, emit)

    const m = ref(2)
    const n = ref(3)

    function update () {
      // console.log('--', this)
      // this.n += 2 
      // this.m += 2

      m.value += 2
      n.value += 2

      // 分发自定义事件
      emit('fn', '++')
    }

    return {
      m,
      n,
      update,
    }
  },
})
</script>
```
## `reactive`与`ref`细节
    · 是Vue3的 composition API中2个最重要的响应式API
    · ref用来处理基本类型数据, reactive用来处理对象(递归深度响应式)
    · 如果用ref对象/数组, 内部会自动将对象/数组转换为reactive的代理对象
    · ref内部: 通过给value属性添加getter/setter来实现对数据的劫持
    · reactive内部: 通过使用Proxy来实现对对象内部所有数据的劫持, 并通过Reflect操作对象内部数据
    · ref的数据操作: 在js中要.value, 在模板中不需要(内部解析模板时会自动添加.value)
```vue
<template>
  <h2>App</h2>
  <p>m1: {{m1}}</p>
  <p>m2: {{m2}}</p>
  <p>m3: {{m3}}</p>
  <button @click="update">更新</button>
</template>

<script lang="ts">
import {
  reactive,
  ref
} from 'vue'

export default {

  setup () {
    const m1 = ref('abc')
    const m2 = reactive({x: 1, y: {z: 'abc'}})

    // 使用ref处理对象  ==> 对象会被自动reactive为proxy对象
    const m3 = ref({a1: 2, a2: {a3: 'abc'}})
    console.log(m1, m2, m3)
    console.log(m3.value.a2) // 也是一个proxy对象

    function update() {
      m1.value += '--'
      m2.x += 1
      m2.y.z += '++'

      m3.value = {a1: 3, a2: {a3: 'abc---'}}
      m3.value.a2.a3 += '==' // reactive对对象进行了深度数据劫持
      console.log(m3.value.a2)
    }

    return {
      m1,
      m2,
      m3,
      update
    }
  }
}
</script>
```
## 计算属性与监视
computed函数:

    与computed配置功能一致
    只有getter
    有getter和setter
watch函数

    与watch配置功能一致
    监视指定的一个或多个响应式数据, 一旦数据变化, 就自动执行监视回调
    默认初始时不执行回调, 但可以通过配置immediate为true, 来指定初始时立即执行第一次
    通过配置deep为true, 来指定深度监视
watchEffect函数

    不用直接指定要监视的数据, 回调函数中使用的哪些响应式数据就监视哪些响应式数据
    默认初始时就会执行第一次, 从而可以收集需要监视的数据
    监视数据发生变化时回调
```vue
<template>
  <h2>App</h2>
  fistName: <input v-model="user.firstName"/><br>
  lastName: <input v-model="user.lastName"/><br>
  fullName1: <input v-model="fullName1"/><br>
  fullName2: <input v-model="fullName2"><br>
  fullName3: <input v-model="fullName3"><br>

</template>

<script lang="ts">
/*
计算属性与监视
1. computed函数: 
  与computed配置功能一致
  只有getter
  有getter和setter
2. watch函数
  与watch配置功能一致
  监视指定的一个或多个响应式数据, 一旦数据变化, 就自动执行监视回调
  默认初始时不执行回调, 但可以通过配置immediate为true, 来指定初始时立即执行第一次
  通过配置deep为true, 来指定深度监视
3. watchEffect函数
  不用直接指定要监视的数据, 回调函数中使用的哪些响应式数据就监视哪些响应式数据
  默认初始时就会执行第一次, 从而可以收集需要监视的数据
  监视数据发生变化时回调
*/

import {
  reactive,
  ref,
  computed,
  watch,
  watchEffect
} from 'vue'

export default {

  setup () {
    const user = reactive({
      firstName: 'A',
      lastName: 'B'
    })

    // 只有getter的计算属性
    const fullName1 = computed(() => {
      console.log('fullName1')
      return user.firstName + '-' + user.lastName
    })

    // 有getter与setter的计算属性
    const fullName2 = computed({
      get () {
        console.log('fullName2 get')
        return user.firstName + '-' + user.lastName
      },

      set (value: string) {
        console.log('fullName2 set')
        const names = value.split('-')
        user.firstName = names[0]
        user.lastName = names[1]
      }
    })

    const fullName3 = ref('')

    /* 
    watchEffect: 监视所有回调中使用的数据
    */
    /* 
    watchEffect(() => {
      console.log('watchEffect')
      fullName3.value = user.firstName + '-' + user.lastName
    }) 
    */

    /* 
    使用watch的2个特性:
      深度监视
      初始化立即执行
    */
    watch(user, () => {
      fullName3.value = user.firstName + '-' + user.lastName
    }, {
      immediate: true,  // 是否初始化立即执行一次, 默认是false
      deep: true, // 是否是深度监视, 默认是false
    })

    /* 
    watch一个数据
      默认在数据发生改变时执行回调
    */
    watch(fullName3, (value) => {
      console.log('watch')
      const names = value.split('-')
      user.firstName = names[0]
      user.lastName = names[1]
    })

    /* 
    watch多个数据: 
      使用数组来指定
      如果是ref对象, 直接指定
      如果是reactive对象中的属性,  必须通过函数来指定
    */
    watch([() => user.firstName, () => user.lastName, fullName3], (values) => {
      console.log('监视多个数据', values)
    })

    return {
      user,
      fullName1,
      fullName2,
      fullName3
    }
  }
}
</script>
```
## 生命周期
### vue2
![图例](./photo/vue2lifecycle.png)
### vue3
![图例](./photo/vue3life.jpeg)
vue3中可以继续使用vue2.x中的生命周期钩子，但是有两个被改名：
beforeDestroy改名为beforeUnmount
destroyed改名为unmounted
## 与 2.x 版本生命周期相对应的组合式 API
    beforeCreate -> 使用 setup()
    created -> 使用 setup()
    beforeMount -> onBeforeMount
    mounted -> onMounted
    beforeUpdate -> onBeforeUpdate
    updated -> onUpdated
    beforeDestroy -> onBeforeUnmount
    destroyed -> onUnmounted
    errorCaptured -> onErrorCaptured
## toRefs
把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref
应用: 当从合成函数返回响应式对象时，toRefs 非常有用，这样消费组件就可以在不丢失响应式的情况下对返回的对象进行分解使用
问题: reactive 对象取出的所有属性值都是非响应式的
解决: 利用 toRefs 可以将一个响应式 reactive 对象的所有原始属性转换为响应式的 ref 属性
##  ref获取元素
利用ref函数获取组件中的标签元素
```vue
<template>
  <h2>App</h2>
  <input type="text">---
  <input type="text" ref="inputRef">
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
/* 
ref获取元素: 利用ref函数获取组件中的标签元素
功能需求: 让输入框自动获取焦点
*/
export default {
  setup() {
    const inputRef = ref<HTMLElement|null>(null)

    onMounted(() => {
      inputRef.value && inputRef.value.focus()
    })

    return {
      inputRef
    }
  },
}
</script>
```
## `shallowReactive` 与 `shallowRef`
`shallowReactive`: 只处理了对象内最外层属性的响应式(也就是浅响应式)
`shallowRef`: 只处理了 `value` 的响应式, 不进行对象的 `reactive` 处理
什么时候用浅响应式呢?
一般情况下使用 `ref` 和 `reactive` 即可
如果有一个对象数据, 结构比较深, 但变化时只是外层属性变化 ===> `shallowReactive`
如果有一个对象数据, 后面会产生新的对象来替换 ===> `shallowRef`
```vue
<template>
  <h2>App</h2>

  <h3>m1: {{m1}}</h3>
  <h3>m2: {{m2}}</h3>
  <h3>m3: {{m3}}</h3>
  <h3>m4: {{m4}}</h3>

  <button @click="update">更新</button>
</template>

<script lang="ts">
import { reactive, ref, shallowReactive, shallowRef } from 'vue'
/* 
shallowReactive与shallowRef
  shallowReactive: 只处理了对象内最外层属性的响应式(也就是浅响应式)
  shallowRef: 只处理了value的响应式, 不进行对象的reactive处理
总结:
  reactive与ref实现的是深度响应式, 而shallowReactive与shallowRef是浅响应式
  什么时候用浅响应式呢?
    一般情况下使用ref和reactive即可,
    如果有一个对象数据, 结构比较深, 但变化时只是外层属性变化 ===> shallowReactive
    如果有一个对象数据, 后面会产生新的对象来替换 ===> shallowRef
*/

export default {

  setup () {

    const m1 = reactive({a: 1, b: {c: 2}})
    const m2 = shallowReactive({a: 1, b: {c: 2}})

    const m3 = ref({a: 1, b: {c: 2}})
    const m4 = shallowRef({a: 1, b: {c: 2}})

    const update = () => {
      // m1.b.c += 1
      // m2.b.c += 1

      // m3.value.a += 1
      m4.value.a += 1
    }

    return {
      m1,
      m2,
      m3,
      m4,
      update,
    }
  }
}
</script>

```
## `toRef`
为源响应式对象上的某个属性创建一个 ref对象, 二者内部操作的是同一个数据值, 更新时二者是同步的
区别 `ref`: 拷贝了一份新的数据值单独操作, 更新时相互不影响
应用: 当要将 某个 `prop` 的 `ref` 传递给复合函数时，`toRef` 很有用
```vue
<template>
  <h2>App</h2>
  <p>{{state}}</p>
  <p>{{foo}}</p>
  <p>{{foo2}}</p>

  <button @click="update">更新</button>

  <Child :foo="foo"/>
</template>

<script lang="ts">
/*
toRef:
  为源响应式对象上的某个属性创建一个 ref对象, 二者内部操作的是同一个数据值, 更新时二者是同步的
  区别ref: 拷贝了一份新的数据值单独操作, 更新时相互不影响
  应用: 当要将某个 prop 的 ref 传递给复合函数时，toRef 很有用
*/

import {
  reactive,
  toRef,
  ref,
} from 'vue'
import Child from './Child.vue'

export default {

  setup () {

    const state = reactive({
      foo: 1,
      bar: 2
    })

    const foo = toRef(state, 'foo')
    const foo2 = ref(state.foo)

    const update = () => {
      state.foo++
      // foo.value++
      // foo2.value++  // foo和state中的数据不会更新
    }

    return {
      state,
      foo,
      foo2,
      update,
    }
  },

  components: {
    Child
  }
}
</script>
```
```vue
<template>
  <h2>Child</h2>
  <h3>{{foo}}</h3>
  <h3>{{length}}</h3>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, toRef } from 'vue'

const component = defineComponent({
  props: {
    foo: {
      type: Number,
      require: true
    }
  },

  setup (props, context) {
    const length = useFeatureX(toRef(props, 'foo'))

    return {
      length
    }
  }
})

function useFeatureX(foo: Ref) {
  const lenth = computed(() => foo.value.length)

  return lenth
}

export default component
</script>
```
## `provide` 与 `inject`
 `provide` 和 `inject` 提供依赖注入，功能类似 `2.x` 的 `provide/inject`
举个例子：实现跨层级组件(祖孙)间通信
```vue
<template>
  <h1>父组件</h1>
  <p>当前颜色: {{color}}</p>
  <button @click="color='red'">红</button>
  <button @click="color='yellow'">黄</button>
  <button @click="color='blue'">蓝</button>
  
  <hr>
  <Son />
</template>

<script lang="ts">
import { provide, ref } from 'vue'
/* 
- provide` 和 `inject` 提供依赖注入，功能类似 2.x 的 `provide/inject
- 实现跨层级组件(祖孙)间通信
*/

import Son from './Son.vue'
export default {
  name: 'ProvideInject',
  components: {
    Son
  },
  setup() {
    
    const color = ref('red')

    provide('color', color)

    return {
      color
    }
  }
}
</script>
```
```vue
<template>
  <div>
    <h2>子组件</h2>
    <hr>
    <GrandSon />
  </div>
</template>

<script lang="ts">
import GrandSon from './GrandSon.vue'
export default {
  components: {
    GrandSon
  },
}
</script>
```
```vue
<template>
  <h3 :style="{color}">孙子组件: {{color}}</h3>
  
</template>

<script lang="ts">
import { inject } from 'vue'
export default {
  setup() {
    const color = inject('color')

    return {
      color
    }
  }
}
</script>
```
## 响应式数据的判断
`isRef`: 检查一个值是否为一个 `ref` 对象
`isReactive`: 检查一个对象是否是由 `reactive` 创建的响应式代理
`isReadonly`: 检查一个对象是否是由 `readonly` 创建的只读代理
`isProxy`: 检查一个对象是否是由 `reactive` 或者 `readonly` 方法创建的代理
# 新组件
## `Fragment`(片段)
在Vue2中: 组件必须有一个根标签
在Vue3中: 组件可以没有根标签, 内部会将多个标签包含在一个Fragment虚拟元素中
好处: 减少标签层级, 减小内存占用
```vue
<template>
    <h2>aaaa</h2>
    <h2>aaaa</h2>
</template>
```
## `Teleport`(瞬移)
`Teleport` 提供了一种干净的方法, 让组件的 `html` 在父组件界面外的特定标签(很可能是 `body` )下插入显示
```vue
<template>
  <button @click="modalOpen = true">
      Open full screen modal! (With teleport!)
  </button>

  <teleport to="body">
    <div v-if="modalOpen" class="modal">
      <div>
        I'm a teleported modal! 
        (My parent is "body")
        <button @click="modalOpen = false">
          Close
        </button>
      </div>
    </div>
  </teleport>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'modal-button',
  setup () {
    const modalOpen = ref(false)
    return {
      modalOpen
    }
  }
}
</script>


<style>
.modal {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  background-color: rgba(0,0,0,.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 300px;
  height: 300px;
  padding: 5px;
}
</style>
```
## `Suspense` (不确定的)
它们允许我们的应用程序在等待异步组件时渲染一些后备内容，可以让我们创建一个平滑的用户体验
# 新 `API`
## 全局 `API`
### createApp()
创建应用
#### vue2
```js
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
```
#### vue3
```js
createApp(App).use(store).use(router).mount('#app')
```
可以在其后链式调用其他方法，主要有一下几种：
| 参数 |用法 |
|-----|-----|
| component（组件） | 注册或检索全局组件。注册还会使用给定的 name 参数自动设置组件的 name。   |
|use（使用）|安装 Vue.js 插件。在同一个插件上多次调用此方法时，改插件将仅安装一次。|
|config（配置）|包含应用配置的对象。同Vue2中config。提供统一配置。|
|directive（指令）|注册或检索全局指令。指令是一组具有生命周期的钩子。|
|mixin（混入）|在整个应用范围内应用混入。一旦注册，它们就可以在当前的应用中任何组件模板内使用它。插件作者可以使用此方法将自定义行为注入组件。不建议在应用代码中使用。|
|mount（挂载）|应用实例的根组件挂载在提供的 DOM 元素上。同Vue2中的el。|
|provide（搭配Inject）|设置一个可以被注入到应用范围内所有组件中的值。组件应该使用 inject 来接收 provide 的值。provide 和 inject 绑定不是响应式的。|
|unmount（卸载）|在提供的 DOM 元素上卸载应用实例的根组件。|

### defineAsyncComponent()
异步组件
```vue
<template>
  <div>
    <div @click="change">视图切换</div>
    <component :is="currentTab"></component>
  </div>
</template>
```
```ts
import { ref, defineAsyncComponent } from 'vue'
const AsyncComp1 = defineAsyncComponent(() =>
  import('./components/MyComponent1.vue')
)
const AsyncComp2 = defineAsyncComponent(() =>
  import('./components/MyComponent2.vue')
)
export default {
  components: {
    AsyncComp1,
    AsyncComp2
  },
  setup() {
    const currentTab = ref('AsyncComp1')
 
 
    function change() {
      currentTab.value = currentTab.value === 'AsyncComp1' ? 'AsyncComp2' : 'AsyncComp1'
    }
    return {
      currentTab,
      change
  }
}
```

### nextTick()
等待下一次 DOM 更新刷新的工具方法
## 模板语法变化
    v-model的本质变化
    prop：value -> modelValue；
    event：input -> update:modelValue；
    .sync修改符已移除, 由v-model代替
    v-if优先v-for解析