---
title: ant-design的table，固定表头的方法
date: 2023-04-19
updated: 2023-04-19
tags: 
    - 前端
categories: 
    - ant-design
keywords: js
description: ant-design的table，固定表头的方法
---
# ant-design的table，固定表头的方法
## 普通表格的固定表头
其实有很多这种场景，都需要固定表头。使用标签table的时候，不太好做，最后使用了两个table达到这个固定表格的效果。
## ant-design 使用:scroll 可以使用calc属性
```vue
<a-table
    :row-selection="{ selectedRowKeys: state.selectedRowKeys, onChange: onSelectChange }"
    :columns="columns"
    :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)"
    row-key="id"
    :data-source="data"
    :pagination="false"
    :scroll="{ y: 'calc(100% - 50px)' }"
>
</a-table>
```