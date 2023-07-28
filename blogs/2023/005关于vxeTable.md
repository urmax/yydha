---
title: 005关于vxeTable
date: 2023-07-28
updated: 2023-07-28
tags: 
    - 前端
categories: 
    - 插件
keywords: js
description: 005关于vxeTable
---
# 005关于vxeTable
一款优秀的表格解决方案，可以实现表格的各种处理，包括树形的复杂结构。
官网： https://vxetable.cn/
### 1. 关于使用了其导出excel的方法，想更改表格线颜色。
```js
data() {
  return {
    borderStyle: {
      style: 'thin',
      color: { argb: 'FF000000' }
    }
  }
},
/**
 * [exportData description] 导出
 *
 * @return  {[type]}  [return description]
 */
exportData() {
  this.$refs.xTable.exportData({
    filename: '导出以后的excel文件标题',
    sheetName: 'Sheet1',
    type: 'xlsx',
    types: ['xlsx', 'csv', 'html', 'xml', 'txt'],
    mode: 'all',
    modes: 'all',
    // 这里就是修改边框线颜色的地方了
    sheetMethod: ({ worksheet }) => {
      // 遍历表格数据, 这个+多少，就看你的表头是有几列了
      for (let row = 0; row < this.tableData.length + 2; row++) {
        for (let col = 0; col < worksheet.columns.length; col++) {
          const cell = worksheet.getCell(row + 1, col + 1);
          // 设置边框样式
          cell.border = {
            top: this.borderStyle,
            bottom: this.borderStyle,
            left: this.borderStyle,
            right: this.borderStyle
          };
        }
      }
    },
    useStyle: true, // 是否使用html的样式
    isFooter: false, // 需要表尾吗
    // 剔除掉不需要的列
    columnFilterMethod: ({ column, $columnIndex }) => {
      return $columnIndex !== 0 && column.title !== '操作';
    }
  });
}
```