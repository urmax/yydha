---
title: elementUi给table自定义表头
date: 2022-12-21
updated: 2022-12-21
tags: 
    - 前端
categories: 
    - 学习
keywords: elementUi
description: elementUi
top_img: 
comments: elementUi
cover:
---
## 需求
elementUi的table需要自定义表头，点击表头需要有click事件。
## 直接上代码
```html
<el-table
    :data="list"
    border
    stripe
    :header-cell-style="{'background':'#fff'}"
>
    ...
    <el-table-column
        prop="order"
        align="center"
        label="倒序"
        min-width="5%"
        :render-header="(h, obj) => renderHeaderMethods(h, obj)"
        show-overflow-tooltip
    >
    </el-table-column>
</el-table>
<script>
...
methods: {
    /**
    * [renderHeaderMethods description]问号中的提示
    *
    * @param   {[type]}  h       [h description]
    * @param   {[type]}  column  [column description]
    *
    * @return  {[type]}          [return description]
    */
    renderHeaderMethods(h, { column }) {
        return h(
            'div',
            {
                style: 'display:flex;margin:auto;justify-content:center;align-items:center;'
            },
            [
                h('span', {
                    style: `cursor: pointer;`,
                    on: {
                        click: () => {
                            this.sortFn(column);
                        }
                    }
                }, column.label)
            ],
        );
    },
    // 具体排序
    sortFn(obj) {
        ...
    }
}
</script>
```
