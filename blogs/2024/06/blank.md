---
title: 使用 print-js 打印pdf文件
date: 2023-06-06
updated: 2023-06-06
tags:
    - 前端
categories:
    - 插件
keywords: js
description: 简单介绍下print-js的使用
---

# 使用 print-js 打印 pdf 文件

### 先上官网

https://printjs.crabbly.com/

### 安装

```bash
npm install print-js
```

### 引入

```js
import printJS from 'print-js';
```

### 使用

```js
// 这个url也可以是后端返回二进制流 前端把blob生成一个连接
res = await axios.get('https://example.com/file.pdf', { responseType: 'blob' });
const url = window.URL.createObjectURL(res);
window.URL.revokeObjectURL(url); // 释放URL
// 这个url可以直接访问到这个pdf文件
// 预览方式可以通过pdfjs 也可以直接使用iframe嵌入
// 当然也可以通过这个链接下载此文件

printJS({
    printable: 'https://example.com/file.pdf',
    type: 'pdf',
    base64: true,
    documentTitle: 'PDF',
    fileName: 'file.pdf',
    onPrintDialogClose: function () {
        // 打印完成后执行的回调函数
    }
});
```

### 参数说明

|        参数        |   类型   |     默认值     |                    说明                     |
| :----------------: | :------: | :------------: | :-----------------------------------------: |
|     printable      |  String  |       -        |              要打印的文件地址               |
|        type        |  String  |     'html'     | 打印的文件类型，支持 'pdf', 'html', 'image' |
|       base64       | Boolean  |     false      |            是否使用 base64 编码             |
|   documentTitle    |  String  |   'Document'   |               打印的文档标题                |
|      fileName      |  String  | 'document.pdf' |                打印的文件名                 |
| onPrintDialogClose | Function |       -        |         打印对话框关闭时的回调函数          |

### 示例

```js
printJS({
    printable: 'https://example.com/file.pdf',
    type: 'pdf',
    base64: true,
    documentTitle: 'PDF',
    fileName: 'file.pdf',
    onPrintDialogClose: function () {
        // 打印完成后执行的回调函数
    }
});
```

### 注意

-   需要确保要打印的文件是可访问的，并且支持跨域访问。
-   如果要打印的文件是 pdf 格式，需要确保服务器支持返回 pdf 文件。
