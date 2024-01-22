---
title: vxeTable复刻区域选择、拖动柄
date: 2024-01-22
updated: 2023-01-22
tags:
  - 前端
categories:
  - vxe-Table
keywords: js
description: vxeTable复刻区域选择、拖动柄
---

# vxeTable 复刻区域选择、拖动柄

### 介绍

    vxetable是一个基于 Vue（支持 Vue3） 的 PC 端全功能表格组件，满足你对 table 绝大多数需求，可与任意组件库完美兼容。VXE Table面向现代浏览器，高效的简洁 API 设计，模块化表格、按需加载、扩展接口，为单行编辑表格而设计，支持增删改查及更多扩展，强大的功能的同时兼具性能。

    Vxe-table 提供诸多功能：虚拟滚动、懒加载、快捷菜单、数据校验、树形结构、打印导出、表单渲染、数据分页、虚拟列表、模态窗口、自定义模板、渲染器，每一个功能做细了都不容易。

    需要的直接点击传送门：https://vxetable.cn/

### 缘起

    我们的系统的表格，需要支持像excel那样区域选择，进行复制粘贴，拖拽区域的右下方需要有一个拖动柄可以进行复制。使用的vxe-table是有这个功能的，但是这个功能需要收费，所以就自己参考着写（CV）了一个。

### 参考

    1. https://blog.csdn.net/wanghanlu_/article/details/132376047?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522170591700916800222863864%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=170591700916800222863864&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-2-132376047-null-null.142^v99^pc_search_result_base9&utm_term=vxetable%E5%8C%BA%E5%9F%9F%E9%80%89%E6%8B%A9&spm=1018.2226.3001.4187
    2. https://blog.csdn.net/weixin_45366616/article/details/133739353?spm=1001.2014.3001.5501

### 实现

    实现拖动区域选择，如果是vue2版本可以使用参考1。如果是vue3版本的可以使用参考2。使用了上述的代码，你的vxe-table表格就可以实现区域选择。

    我是vue3版本的，所以使用的是参考2。复制下来改吧改吧就能区域选择，但是需要加上按键复制粘贴和拖动柄的功能。接下来就直接上代码。

```js
<template>
    <!-- 正常区域的框 -->
    <div class="vxe-table--cell-area" ref="cellarea">
        <!-- 选择显示的框 -->
        <span class="vxe-table--cell-main-area">
          <!-- 拖动柄的类名 -->
            <span class="vxe-table--cell-main-area-btn"></span>
        </span>
        <span class="vxe-table--cell-active-area"></span>
        <span class="vxe-table--cell-extend-area"></span>
    </div>
    <!-- 左侧fixed区域的框 -->
    <div class="vxe-table--cell-area" ref="leftfixedcellarea">
        <span class="vxe-table--cell-main-area">
            <span class="vxe-table--cell-main-area-btn"></span>
        </span>
        <span class="vxe-table--cell-active-area"></span>
        <span class="vxe-table--cell-extend-area"></span>
    </div>
    <!-- 右侧fixed区域的框 -->
    <div class="vxe-table--cell-area" ref="rightfixedcellarea">
        <span class="vxe-table--cell-main-area">
            <span class="vxe-table--cell-main-area-btn"></span>
        </span>
        <span class="vxe-table--cell-active-area"></span>
        <span class="vxe-table--cell-extend-area"></span>
    </div>
    <div class="apptable table-padding-7">
        <vxe-grid
            v-bind="tableConfig"
            ref="tableCom"
            @edit-closed="editCollectClosedEvent"
            @current-change="currentCollectChangeEvent"
            @checkbox-change="selectCollectChangeEvent"
            @checkbox-all="selectCollectChangeEvent"
        >
        </vxe-grid>
    </div>
</template>
```

```ts
//#region 以下是鼠标选中功能

//鼠标滑动选中
let isSelecting = ref(false); // 是否正在进行选择操作,默认为false
let selectionStart = reactive({ rowIndex: -1, cellIndex: -1 }); // 选择操作起始单元格位置
let selectionEnd = reactive({ rowIndex: -1, cellIndex: -1 }); // 选择操作结束单元格位置

//获取页面ref节点
//获取vxetable表格节点
// let xGrid = ref();
let cellarea = ref();
let leftfixedcellarea = ref();
let rightfixedcellarea = ref();

//返回table的ref名称
const getTablexGrid = () => {
  return tableCom.value;
};
const tableCopy = event => {
  if (event.ctrlKey && event.key === 'c') {
    console.log('Ctrl + C event triggered!');
    if (selectionEnd.rowIndex !== -1) {
      copyEvent(event);
    }
  } else if (event.ctrlKey && event.key === 'v') {
    window.addEventListener('paste', event => {
      if (selectionEnd.rowIndex === -1) {
      } else {
        event.preventDefault();
        let paste = (event.clipboardData || window.clipboardData).getData('text');
        if (isEditView.value) {
          pasteEvent(paste);
        }
      }
    });
  }
};
//添加事件
const addListener = () => {
  //添加多选列
  nextTick(() => {
    if (getTablexGrid().$el) {
      // window.addEventListener('mousedown', tableOutDestroyAreaBox); //给window添加鼠标按下事件,判断是否在表格外,是销毁
      window.addEventListener('mouseup', tbodymouseup); //给window添加鼠标松开事件
      window.addEventListener('keydown', tableCopy); //给window添加键盘按下事件
      let tbody = getTablexGrid() && getTablexGrid().$el.querySelector('.vxe-table--main-wrapper table tbody'); //获取tbody区域

      if (tbody) {
        tbody.addEventListener('mousedown', tbodymousedown); //给表格中的tbody添加鼠标按下事件
        tbody.addEventListener('mousemove', tbodymousemove); //给表格中的tbody添加鼠标移动事件
        tbody.addEventListener('mouseout', throttle(tbodymouseout, 50)); //给表格中的tbody添加鼠标移出事件
        tbody.addEventListener('click', tableCellClick); //添加左键单击事件
        // tbody.addEventListener('copy', (event) => {
        //     copyEvent(event);
        // });
        tbody.oncontextmenu = tableCellMenuClick; //添加右键菜单事件
      }

      let bodyWrapper = getTablexGrid().$el.querySelector('.vxe-table--main-wrapper .vxe-table--body-wrapper'); //获取正常区域的body
      if (bodyWrapper) {
        //注意这里的ref名称，这里是非fixed区域的框的名称
        bodyWrapper.appendChild(cellarea.value); //添加范围框元素
      }
      setTimeout(() => {
        //#region 左侧固定列
        let leftfixedtbody = getTablexGrid().$el.querySelector('.vxe-table--fixed-wrapper .vxe-table--fixed-left-wrapper .vxe-table--body-wrapper table tbody'); //获取fixedtbody区域

        if (leftfixedtbody) {
          leftfixedtbody.addEventListener('mousedown', tbodymousedown); //给表格中的leftfixedtbody添加鼠标按下事件
          leftfixedtbody.addEventListener('mousemove', tbodymousemove); //给表格中的leftfixedtbody添加鼠标移动事件
          leftfixedtbody.addEventListener('mouseout', throttle(tbodymouseout, 50)); //给表格中的leftfixedtbody添加鼠标移出事件
          leftfixedtbody.addEventListener('click', tableCellClick); //添加单击事件
          leftfixedtbody.oncontextmenu = tableCellMenuClick; //添加右键菜单事件
        }

        let leftFixedBodyWrapper = getTablexGrid().$el.querySelector('.vxe-table--fixed-wrapper .vxe-table--fixed-left-wrapper .vxe-table--body-wrapper');
        if (leftFixedBodyWrapper) {
          //注意这里的ref名称，这里是fixed区域的框的名称
          leftFixedBodyWrapper.appendChild(leftfixedcellarea.value);
        }
        //#endregion

        //#region 右侧固定列
        let rightfixedtbody = getTablexGrid().$el.querySelector('.vxe-table--fixed-wrapper .vxe-table--fixed-right-wrapper .vxe-table--body-wrapper table tbody'); //获取fixedtbody区域

        if (rightfixedtbody) {
          rightfixedtbody.addEventListener('mousedown', tbodymousedown); //给表格中的rightfixedtbody添加鼠标按下事件
          rightfixedtbody.addEventListener('mousemove', tbodymousemove); //给表格中的rightfixedtbody添加鼠标移动事件
          rightfixedtbody.addEventListener('mouseout', throttle(tbodymouseout, 50)); //给表格中的rightfixedtbody添加鼠标移出事件
          rightfixedtbody.addEventListener('click', tableCellClick); //添加单击事件
          rightfixedtbody.oncontextmenu = tableCellMenuClick; //添加右键菜单事件
        }

        let rightFixedBodyWrapper = getTablexGrid().$el.querySelector('.vxe-table--fixed-wrapper .vxe-table--fixed-right-wrapper .vxe-table--body-wrapper');
        if (rightFixedBodyWrapper) {
          //注意这里的ref名称，这里是fixed区域的框的名称
          rightFixedBodyWrapper.appendChild(rightfixedcellarea.value);
        }
        //#endregion
      }, 100);
    }
  });
};
// 移除事件
const removeListener = () => {
  //添加多选列
  nextTick(() => {
    if (getTablexGrid().$el) {
      // window.removeEventListener('mousedown', tableOutDestroyAreaBox); //给window添加鼠标按下事件,判断是否在表格外,是销毁
      window.removeEventListener('mouseup', tbodymouseup); //给window添加鼠标松开事件
      window.removeEventListener('keydown', tableCopy); //给window添加键盘按下事件
      window.removeEventListener('paste', event => {
        if (selectionEnd.rowIndex === -1) {
        } else {
          event.preventDefault();
          let paste = (event.clipboardData || window.clipboardData).getData('text');
          if (isEditView.value) {
            pasteEvent(paste);
          }
        }
      });
      let tbody = getTablexGrid() && getTablexGrid().$el.querySelector('.vxe-table--main-wrapper table tbody'); //获取tbody区域

      if (tbody) {
        tbody.removeEventListener('mousedown', tbodymousedown); //给表格中的tbody添加鼠标按下事件
        tbody.removeEventListener('mousemove', tbodymousemove); //给表格中的tbody添加鼠标移动事件
        tbody.removeEventListener('mouseout', throttle(tbodymouseout, 50)); //给表格中的tbody添加鼠标移出事件
        tbody.removeEventListener('click', tableCellClick); //添加左键单击事件
        tbody.oncontextmenu = tableCellMenuClick; //添加右键菜单事件
      }

      let bodyWrapper = getTablexGrid().$el.querySelector('.vxe-table--main-wrapper .vxe-table--body-wrapper'); //获取正常区域的body
      if (bodyWrapper) {
        //注意这里的ref名称，这里是非fixed区域的框的名称
        bodyWrapper.appendChild(cellarea.value); //添加范围框元素
      }
      setTimeout(() => {
        //#region 左侧固定列
        let leftfixedtbody = getTablexGrid().$el.querySelector('.vxe-table--fixed-wrapper .vxe-table--fixed-left-wrapper .vxe-table--body-wrapper table tbody'); //获取fixedtbody区域

        if (leftfixedtbody) {
          leftfixedtbody.removeEventListener('mousedown', tbodymousedown); //给表格中的leftfixedtbody添加鼠标按下事件
          leftfixedtbody.removeEventListener('mousemove', tbodymousemove); //给表格中的leftfixedtbody添加鼠标移动事件
          leftfixedtbody.removeEventListener('mouseout', throttle(tbodymouseout, 50)); //给表格中的leftfixedtbody添加鼠标移出事件
          leftfixedtbody.removeEventListener('click', tableCellClick); //添加单击事件
          leftfixedtbody.oncontextmenu = tableCellMenuClick; //添加右键菜单事件
        }

        let leftFixedBodyWrapper = getTablexGrid().$el.querySelector('.vxe-table--fixed-wrapper .vxe-table--fixed-left-wrapper .vxe-table--body-wrapper');
        if (leftFixedBodyWrapper) {
          //注意这里的ref名称，这里是fixed区域的框的名称
          leftFixedBodyWrapper.appendChild(leftfixedcellarea.value);
        }
        //#endregion

        //#region 右侧固定列
        let rightfixedtbody = getTablexGrid().$el.querySelector('.vxe-table--fixed-wrapper .vxe-table--fixed-right-wrapper .vxe-table--body-wrapper table tbody'); //获取fixedtbody区域

        if (rightfixedtbody) {
          rightfixedtbody.removeEventListener('mousedown', tbodymousedown); //给表格中的rightfixedtbody添加鼠标按下事件
          rightfixedtbody.removeEventListener('mousemove', tbodymousemove); //给表格中的rightfixedtbody添加鼠标移动事件
          rightfixedtbody.removeEventListener('mouseout', throttle(tbodymouseout, 50)); //给表格中的rightfixedtbody添加鼠标移出事件
          rightfixedtbody.removeEventListener('click', tableCellClick); //添加单击事件
          rightfixedtbody.oncontextmenu = tableCellMenuClick; //添加右键菜单事件
        }

        let rightFixedBodyWrapper = getTablexGrid().$el.querySelector('.vxe-table--fixed-wrapper .vxe-table--fixed-right-wrapper .vxe-table--body-wrapper');
        if (rightFixedBodyWrapper) {
          //注意这里的ref名称，这里是fixed区域的框的名称
          rightFixedBodyWrapper.appendChild(rightfixedcellarea.value);
        }
        //#endregion
      }, 100);
    }
  });
};
// 鼠标在填充柄按下事件
let isExtendSelecting = ref(false); // 是否正在进行选择操作,默认为false
let selectionExtendOldStart = reactive({ rowIndex: -1, cellIndex: -1 }); // 选择操作起始单元格位置
let selectionExtendOldEnd = reactive({ rowIndex: -1, cellIndex: -1 }); // 选择操作结束单元格位置
let selectionExtendStart = reactive({ rowIndex: -1, cellIndex: -1 }); // 选择操作起始单元格位置
let selectionExtendEnd = reactive({ rowIndex: -1, cellIndex: -1 }); // 选择操作结束单元格位置
const extendmousedown = (event: MouseEvent) => {
  event.stopPropagation(); //阻止冒泡
  //左键0,中键1,右键2
  if (event.button === 0) {
    //左键按下
    // 记录当前选框的位置
    selectionExtendOldStart = cloneDeep(selectionStart);
    selectionExtendOldEnd = cloneDeep(selectionEnd);
    selectionExtendStart = cloneDeep(selectionStart);
    // selectionExtendOldEnd.rowIndex = selectionEnd.rowIndex;
    // selectionExtendOldEnd.cellIndex = selectionEnd.cellIndex;
    isExtendSelecting.value = true; //标记为正在选择操作
  }
};
//鼠标按下事件
const tbodymousedown = (event: MouseEvent) => {
  event.stopPropagation(); //阻止冒泡
  getTablexGrid().closeMenu(); //手动关闭右键菜单
  //左键0,中键1,右键2
  if (event.button === 0) {
    //左键按下
    // 记录选择操作起始位置
    selectionStart = getCellPosition(event.target); //设置选择操作起始单元格位置
    if (!isExtendSelecting.value) {
      isSelecting.value = true; //标记为正在选择操作
    }
  }
};

//鼠标移动事件
//todo 这里要节流操作,只在结束时触发一次
const tbodymousemove = (event: MouseEvent) => {
  if (event.button === 0) {
    if (isExtendSelecting.value) {
      selectionExtendEnd = getCellExtendPosition(event.target);
      if (selectionExtendEnd) {
        // 设置样式 打开extend弹窗
        console.log('设置样式 打开extend弹窗');
        setselectedExtendCellArea();
      } else {
        destroyExtendAreaBox();
      }
      return;
    }
    //左键移动
    if (isSelecting.value) {
      //记录选择操作结束位置
      selectionEnd = getCellPosition(event.target);

      //设置样式,并显示范围框
      setselectedCellArea();
    }
    return;
  }
};
const isUp = ref(false);
const isLeft = ref(false);
// 填充柄填充数据方法，复制
const fillDatas = () => {
  console.log(selectionExtendOldStart, selectionExtendOldEnd);
  console.log(selectionStart, selectionEnd);
  let tableData = getTablexGrid().getTableData().visibleData;
  let tableColumn = getTablexGrid().getTableColumn().visibleColumn;
  // 复制的数据集
  let copydata = getDataByArea(selectionExtendOldStart, selectionExtendOldEnd, true);
  // copydata = copydata.reduce((a: string, b) => a + b.join('\t') + '\n', '').slice(0, -1);
  // copydata = copydata.replace(/^\r\n+|\r\n+$/g, '');
  // let snsArr = copydata.split(/\r\n+/);
  // let tArr = snsArr.map((value) => {
  //     return value.split('\t');
  // });
  // console.log(snsArr, tArr);
  const lines = copydata.length;
  const cells = copydata[0].length;
  console.log(lines, cells);
  // 往纵向复制
  if (selectionExtendOldEnd.cellIndex === selectionEnd.cellIndex) {
    if (selectionExtendOldEnd.rowIndex < selectionEnd.rowIndex) {
      // 往下复制
      // 最开始填充的行数
      const needFillStartSelectionRowIndex = selectionExtendOldEnd.rowIndex + 1;
      // 需要填充的总行数
      const needFillLines = selectionEnd.rowIndex - selectionExtendOldEnd.rowIndex;
      for (let i = 0; i < needFillLines; i++) {
        // 获取到被复制的某一行
        let line = copydata[i % lines];
        if (selectionStart.rowIndex + i > tableData.length - 1) break;
        let row = tableData[needFillStartSelectionRowIndex + i];
        for (let j = 0; j < line.length; j++) {
          if (selectionStart.cellIndex + j > tableColumn.length - 1) break;
          let column = tableColumn[selectionStart.cellIndex + j];
          if (column.editRender) {
            row[column.field] = line[j];
          }
        }
      }
    } else if (selectionEnd.rowIndex < selectionExtendOldEnd.rowIndex) {
      isUp.value = true;
      // 往上复制
      console.log('往上复制');
      // 最开始填充的行数
      const needFillStartSelectionRowIndex = selectionStart.rowIndex - 1;
      // 需要填充的总行数
      const needFillLines = selectionStart.rowIndex - selectionEnd.rowIndex;
      for (let i = needFillStartSelectionRowIndex; i >= selectionEnd.rowIndex; i--) {
        // 获取到被复制的某一行
        let line = copydata[(selectionStart.rowIndex - i + 1) % lines];
        if (i < 0) break;
        let row = tableData[i];
        for (let j = 0; j < line.length; j++) {
          if (selectionStart.cellIndex + j > tableColumn.length - 1) break;
          let column = tableColumn[selectionStart.cellIndex + j];
          if (column.editRender) {
            row[column.field] = line[j];
          }
        }
      }
    }
  } else {
    // 横向复制
    if (selectionExtendOldEnd.cellIndex < selectionEnd.cellIndex) {
      // 往右复制
      // 最开始填充的列数
      const needFillStartSelectionCellIndex = selectionExtendOldEnd.cellIndex + 1;
      // 需要填充的总列数
      const needFillLines = selectionEnd.cellIndex - selectionExtendOldEnd.cellIndex;
      // 需要填充的总行数
      // const needFillLinesCount = selectionEnd.rowIndex - selectionStart.rowIndex;
      for (let i = 0; i < lines; i++) {
        // 获取到被复制的某一行
        // let line = copydata[i % needFillLinesCount];
        if (selectionStart.rowIndex + i > tableData.length - 1) break;
        let row = tableData[selectionStart.rowIndex + i];
        for (let j = 0; j < needFillLines; j++) {
          if (needFillStartSelectionCellIndex + j > tableColumn.length - 1) break;
          let column = tableColumn[needFillStartSelectionCellIndex + j];
          if (column.editRender) {
            row[column.field] = copydata[i][j % cells];
          }
        }
      }
    } else if (selectionEnd.cellIndex < selectionExtendOldEnd.cellIndex) {
      isLeft.value = true;
      // 往左复制
      console.log('往左复制');
      // 最开始填充的列数
      const needFillStartSelectionCellIndex = selectionExtendOldStart.cellIndex - 1;
      // 需要填充的总列数
      const needFillLines = selectionExtendOldStart.cellIndex - selectionEnd.cellIndex;
      // 需要填充的总行数
      // const needFillLinesCount = selectionEnd.rowIndex - selectionStart.rowIndex;
      for (let i = 0; i < lines; i++) {
        // 获取到被复制的某一行
        // let line = copydata[i % needFillLinesCount];
        if (selectionStart.rowIndex + i > tableData.length - 1) break;
        let row = tableData[selectionStart.rowIndex + i];
        for (let j = 0; j < needFillLines; j++) {
          if (needFillStartSelectionCellIndex + j > tableColumn.length - 1) break;
          let column = tableColumn[needFillStartSelectionCellIndex - j];
          if (column.editRender) {
            row[column.field] = copydata[i][(selectionExtendOldStart.cellIndex - j + 1) % cells];
          }
        }
      }
    }
  }
  // emit('afterPasteMethod', getTablexGrid().getUpdateRecords());
  nextTick(() => {
    afterPasteMethodFunC(getTablexGrid().getUpdateRecords());
  });
};
//鼠标按键结束事件,添加在了window中
const tbodymouseup = (event: MouseEvent) => {
  if (event.button === 0) {
    //左键松开
    isSelecting.value = false; //标记为停止选择操作
    if (isExtendSelecting.value) {
      if (isUp.value) {
        selectionStart = selectionExtendOldEnd;
      } else {
        selectionStart = selectionExtendOldStart;
      }

      if (isLeft.value) {
        selectionStart = selectionExtendOldEnd;
      } else {
        selectionStart = selectionExtendOldStart;
      }

      if (selectionExtendEnd) {
        selectionEnd.rowIndex = selectionExtendEnd.rowIndex;
        selectionEnd.cellIndex = selectionExtendEnd.cellIndex;
        fillDatas();
        setselectedCellArea();
        destroyExtendAreaBox();
      }
      isExtendSelecting.value = false;
      isUp.value = false;
      isLeft.value = false;
    }
  }
};

let outevent = ref(); //移动事件,不保存,循环定时器内无法监听到新的事件

//鼠标移出表格事件,只在移动的时候会触发,暂停移动不触发
const tbodymouseout = (event: MouseEvent) => {
  outevent.value = event; //保存移动事件

  if (isSelecting.value) {
    //如果正在执行选中操作
    const timer = setInterval(() => {
      //开启循环定时器
      if (isSelecting.value) {
        //判断当前是否正在选择
        //获取表格元素
        var table = getTablexGrid().$el.querySelector('.vxe-table--body-wrapper table'); //获取非固定列(和固定列)的table元素
        if (outevent.value.clientX > table.parentElement.getBoundingClientRect().right - 30) {
          //判断鼠标x轴是否超出表格右侧,向右滚动
          var maxScrollPosition = table.parentElement.scrollWidth - table.parentElement.clientWidth; //获取滚动条最大位置
          if (table.parentElement.scrollLeft < maxScrollPosition) {
            //如果没到滚动条最大位置,执行滚动
            table.parentElement.scrollLeft += 10; //执行水平滚动条向右滚动
          }
        } else if (outevent.value.clientX < table.parentElement.getBoundingClientRect().left + 30) {
          //判断鼠标x轴是否超出表格左侧,向左滚动
          if (table.parentElement.scrollLeft > 0) {
            //如果没到滚动条最大位置,执行滚动
            //鼠标移出表格，滚动水平滚动条
            table.parentElement.scrollLeft -= 10; //执行水平滚动条向右滚动
          }
        }
      } else {
        clearInterval(timer); //清除循环定时器
      }
    }, 200); //这里设置滑动速度
  }
};

//节流函数,todo//改为全局
const throttle = (fn: Function, delay: number) => {
  const canRun = ref(true);
  return (...args: any[]) => {
    if (!canRun.value) return;
    canRun.value = false;
    setTimeout(() => {
      fn(...args);
      canRun.value = true;
    }, delay);
  };
};

// 获取单元格位置(rowIndex, cellIndex)
const getCellPosition = (cell: any) => {
  while (cell.tagName !== 'TD') {
    //将cell指向TD元素
    cell = cell.parentElement;
  }

  let visibleColumn = getTablexGrid().getTableColumn().visibleColumn; //获取处理条件之后的全量表头列
  const cellIndex = visibleColumn.findIndex((col: { id: any }) => {
    //返回colid相等的visibleColumn全量表头列的索引
    return col.id == cell.getAttribute('colid');
  });

  let visibleData = getTablexGrid().getTableData().visibleData; //获取处理条件之后的全量表体数据

  const rowIndex = visibleData.findIndex((row: { Guid: any }) => {
    //返回rowid相等的visibleData全量表体数据
    return row.Guid == cell.parentElement.getAttribute('rowid'); //返回rowid相等的visibleData全量表体数据的索引
  });
  return { rowIndex, cellIndex };
};
// 获取单元格位置(rowIndex, cellIndex)
const getCellExtendPosition = (cell: any) => {
  while (cell.tagName !== 'TD') {
    //将cell指向TD元素
    cell = cell.parentElement;
  }

  let visibleColumn = getTablexGrid().getTableColumn().visibleColumn; //获取处理条件之后的全量表头列
  const cellIndex = visibleColumn.findIndex((col: { id: any }) => {
    //返回colid相等的visibleColumn全量表头列的索引
    return col.id == cell.getAttribute('colid');
  });

  let visibleData = getTablexGrid().getTableData().visibleData; //获取处理条件之后的全量表体数据

  const rowIndex = visibleData.findIndex((row: { Guid: any }) => {
    //返回rowid相等的visibleData全量表体数据
    return row.Guid == cell.parentElement.getAttribute('rowid'); //返回rowid相等的visibleData全量表体数据的索引
  });
  if (cellIndex === selectionExtendOldEnd.cellIndex || rowIndex === selectionExtendOldEnd.rowIndex) {
    return { rowIndex, cellIndex };
  } else {
    return false;
  }
};
//设置框打开
const setselectedCellArea = () => {
  var activeElement = getTablexGrid().$el.querySelector('.vxe-table--main-wrapper .vxe-table--body-wrapper .vxe-table--cell-active-area'); //正常区域选中边框激活的元素(仅是边框)
  var mainElement = getTablexGrid().$el.querySelector('.vxe-table--main-wrapper .vxe-table--body-wrapper .vxe-table--cell-main-area'); //正常区域选中边框内整个范围的元素
  var mainElementBtn = getTablexGrid().$el.querySelector('.vxe-table--main-wrapper .vxe-table--body-wrapper .vxe-table--cell-main-area-btn'); //正常区域选中边框内右下角的点

  var leftFixedActiveElement = getTablexGrid().$el.querySelector('.vxe-table--fixed-wrapper .vxe-table--fixed-left-wrapper .vxe-table--body-wrapper .vxe-table--cell-active-area'); //左侧固定列选中边框激活的元素(仅是边框)
  var leftFixedMainElement = getTablexGrid().$el.querySelector('.vxe-table--fixed-wrapper .vxe-table--fixed-left-wrapper .vxe-table--body-wrapper .vxe-table--cell-main-area'); //左侧固定列选中边框内整个范围的元素
  var leftFixedMainElementBtn = getTablexGrid().$el.querySelector('.vxe-table--fixed-wrapper .vxe-table--fixed-left-wrapper .vxe-table--body-wrapper .vxe-table--cell-main-area-btn'); //左侧固定列选中边框内整个范围的元素

  var rightFixedActiveElement = getTablexGrid().$el.querySelector('.vxe-table--fixed-wrapper .vxe-table--fixed-right-wrapper .vxe-table--body-wrapper .vxe-table--cell-active-area'); //右侧固定列选中边框激活的元素(仅是边框)
  var rightFixedMainElement = getTablexGrid().$el.querySelector('.vxe-table--fixed-wrapper .vxe-table--fixed-right-wrapper .vxe-table--body-wrapper .vxe-table--cell-main-area'); //右侧固定列选中边框内整个范围的元素
  var rightFixedMainElementBtn = getTablexGrid().$el.querySelector('.vxe-table--fixed-wrapper .vxe-table--fixed-right-wrapper .vxe-table--body-wrapper .vxe-table--cell-main-area-btn'); //右侧固定列选中边框内整个范围的元素

  var elements = [activeElement, mainElement, leftFixedActiveElement, leftFixedMainElement, rightFixedActiveElement, rightFixedMainElement];
  var elementsContens = [mainElementBtn, leftFixedMainElementBtn, rightFixedMainElementBtn];
  let area = getAreaBoxPosition();
  if (area) {
    var { width, height, left, top, right } = area;
  } else {
    return;
  }
  elements.forEach((element, index) => {
    if (element) {
      //设置显示范围框的内部元素的样式
      element.style.width = `${width}px`;
      element.style.height = `${height}px`;
      element.style.top = `${top}px`;
      element.style.display = 'block';
      if (index <= elements.length - 1 - 2) {
        //如果不是rightFixedActiveElement或rightFixedMainElement
        element.style.left = `${left}px`;
      } else {
        element.style.right = `${right}px`;
      }
    }
  });
  elementsContens.forEach(element => {
    if (element) {
      element.style.display = 'block';
      if (isEditView.value) {
        element.addEventListener('mousedown', extendmousedown); //给表格中的leftfixedtbody添加鼠标按下事件
      }

      // element.addEventListener('mousemove', extendmousemove); //给表格中的leftfixedtbody添加鼠标移动事件
      // element.addEventListener('mouseout', throttle(extendmouseout, 50)); //给表格中的leftfixedtbody添加鼠标移出事件
      // element.addEventListener('click', extendClick); //添加单击事件
    }
  });

  //显示范围框
  openAreaBox();
};
// 设置extend框打开
const setselectedExtendCellArea = () => {
  var extendElement = getTablexGrid().$el.querySelector('.vxe-table--main-wrapper .vxe-table--body-wrapper .vxe-table--cell-extend-area');

  var leftFixedExtendElement = getTablexGrid().$el.querySelector('.vxe-table--fixed-wrapper .vxe-table--fixed-left-wrapper .vxe-table--body-wrapper .vxe-table--cell-extend-area'); //左侧固定列选中边框激活的元素(仅是边框)

  var rightFixedExtendElement = getTablexGrid().$el.querySelector('.vxe-table--fixed-wrapper .vxe-table--fixed-right-wrapper .vxe-table--body-wrapper .vxe-table--cell-extend-area'); //右侧固定列选中边框激活的元素(仅是边框)

  var elements = [extendElement, leftFixedExtendElement, rightFixedExtendElement];
  let area = getAreaBoxExtendPosition();
  if (area) {
    var { width, height, left, top, right } = area;
  } else {
    return;
  }
  elements.forEach((element, index) => {
    if (element) {
      //设置显示范围框的内部元素的样式
      element.style.width = `${width}px`;
      element.style.height = `${height}px`;
      element.style.top = `${top}px`;
      element.style.display = 'block';
      if (index <= elements.length - 1 - 1) {
        //如果不是rightFixedActiveElement或rightFixedMainElement
        element.style.left = `${left}px`;
      } else {
        element.style.right = `${right}px`;
      }
    }
  });
};
// 取消extend监听
const removeExtendListener = () => {
  nextTick(() => {
    var mainElementBtn = getTablexGrid().$el.querySelector('.vxe-table--main-wrapper .vxe-table--body-wrapper .vxe-table--cell-main-area-btn'); //正常区域选中边框内右下角的点
    var leftFixedMainElementBtn = getTablexGrid().$el.querySelector('.vxe-table--fixed-wrapper .vxe-table--fixed-left-wrapper .vxe-table--body-wrapper .vxe-table--cell-main-area-btn'); //左侧固定列选中边框内整个范围的元素
    var rightFixedMainElementBtn = getTablexGrid().$el.querySelector('.vxe-table--fixed-wrapper .vxe-table--fixed-right-wrapper .vxe-table--body-wrapper .vxe-table--cell-main-area-btn'); //右侧固定列选中边框内整个范围的元素
    var elementsContens = [mainElementBtn, leftFixedMainElementBtn, rightFixedMainElementBtn];
    elementsContens.forEach(element => {
      if (element) {
        element.removeEventListener('mousedown', extendmousedown); //给表格中的leftfixedtbody添加鼠标按下事件
        element.style.display = 'none';

        // element.addEventListener('mousemove', extendmousemove); //给表格中的leftfixedtbody添加鼠标移动事件
        // element.addEventListener('mouseout', throttle(extendmouseout, 50)); //给表格中的leftfixedtbody添加鼠标移出事件
        // element.addEventListener('click', extendClick); //添加单击事件
      }
    });
  });
};
//销毁范围框
const destroyExtendAreaBox = () => {
  var element = getTablexGrid().$el.querySelector('.vxe-table--main-wrapper .vxe-table--body-wrapper .vxe-table--cell-extend-area');
  if (element) {
    element.style.display = 'none';
  }
  element = getTablexGrid().$el.querySelector('.vxe-table--fixed-wrapper .vxe-table--fixed-left-wrapper .vxe-table--body-wrapper .vxe-table--cell-extend-area');
  if (element) {
    element.style.display = 'none';
  }
  element = getTablexGrid().$el.querySelector('.vxe-table--fixed-wrapper .vxe-table--fixed-right-wrapper .vxe-table--body-wrapper .vxe-table--cell-extend-area');
  if (element) {
    element.style.display = 'none';
  }
};
//根据开始位置和结束位置的索引计算框的width,height,left,top(左侧固定列和正常区域和右侧固定列使用)
const getAreaBoxPosition = () => {
  let startRowIndex = selectionStart.rowIndex; //获取选中起始行索引
  let endRowIndex = selectionEnd.rowIndex; //获取选中结束行索引
  let startColumnIndex = selectionStart.cellIndex; //获取选中起始列索引
  let endColumnIndex = selectionEnd.cellIndex; //获取选中结束列索引
  let visibleColumn = getTablexGrid().getTableColumn().visibleColumn; //获取处理条件之后的全量表头列
  let visibleData = getTablexGrid().getTableData().visibleData; //获取处理条件之后的全量表体数据
  if (startColumnIndex < 0 || endColumnIndex < 0 || startRowIndex < 0 || endRowIndex < 0) return;
  var maxColumnIndex = visibleColumn.length - 1; //最大列索引
  var maxRowIndex = visibleData.length - 1; //最大行索引
  if (endColumnIndex > maxColumnIndex) {
    //到最后一列,指向最后一列
    endColumnIndex = maxColumnIndex;
  }
  if (endRowIndex > maxRowIndex) {
    //到最后一行,指向最后一行
    endRowIndex = maxRowIndex;
  }
  let width = 0,
    height = 0,
    left = 0,
    top = 0,
    right = 0;
  visibleColumn.forEach((col: { renderWidth: number }, index: number) => {
    if (startColumnIndex <= endColumnIndex) {
      //开始列索引小于结束列索引,即从左往右选择
      if (index < startColumnIndex) {
        left += col.renderWidth; //距离表格整体左侧边框距离
      }
      if (index > endColumnIndex) {
        //数据索引大于结束列,这里获取距离后面数据的宽度
        right += col.renderWidth; //距离表格整体右侧边框距离,加上当前列
      }
      if (startColumnIndex <= index && index <= endColumnIndex) {
        //开始列索引大于数据索引 和 结束列索引小于数据索引,这里获取选中区域的宽度
        width += col.renderWidth; //选中区域的宽度
      }
    } else {
      //从右往左选择
      if (index < endColumnIndex) {
        left += col.renderWidth; //距离表格整体左侧边框距离
      }
      if (index > startColumnIndex) {
        //数据索引大于开始列,这里获取距离后面数据的宽度
        right += col.renderWidth; //距离表格整体右侧边框距离,加上当前列
      }
      if (startColumnIndex >= index && index >= endColumnIndex) {
        //开始列索引大于数据索引 和 结束列索引小于数据索引,这里获取选中区域的宽度
        width += col.renderWidth; //选中区域的宽度
      }
    }
  });
  if (startRowIndex <= endRowIndex) {
    //开始行索引小于结束行索引,即从上往下选择
    height = (endRowIndex - startRowIndex + 1) * 36; //选中区域的高度
    top = startRowIndex * 36; //距离表格整体顶部边框距离
  } else {
    height = (startRowIndex - endRowIndex + 1) * 36; //选中区域的高度
    if (isUp.value) {
      height = height + (selectionExtendOldEnd.rowIndex - selectionExtendOldStart.rowIndex) * 36;
    }
    top = endRowIndex * 36; //距离表格整体顶部边框距离
  }

  return { width, height, left, top, right };
};
//销毁范围框
const destroyAreaBox = () => {
  var element = getTablexGrid().$el.querySelector('.vxe-table--main-wrapper .vxe-table--body-wrapper .vxe-table--cell-area');
  if (element) {
    element.style.display = 'none';
  }
  element = getTablexGrid().$el.querySelector('.vxe-table--fixed-wrapper .vxe-table--fixed-left-wrapper .vxe-table--body-wrapper .vxe-table--cell-area');
  if (element) {
    element.style.display = 'none';
  }
  element = getTablexGrid().$el.querySelector('.vxe-table--fixed-wrapper .vxe-table--fixed-right-wrapper .vxe-table--body-wrapper .vxe-table--cell-area');
  if (element) {
    element.style.display = 'none';
  }
};

//表格单元格点击事件
const tableCellClick = (e: MouseEvent) => {
  if (!isSelecting.value) {
    //非选中状态
    try {
      selectionStart = getCellPosition(e.target); //获取单元格位置
      selectionEnd = selectionStart; //结束位置也是自己
      console.log(selectionStart, selectionEnd);
      //设置样式
      setselectedCellArea();
    } catch (error) {}
  }
};

//表格右键点击事件
const tableCellMenuClick = (e: MouseEvent) => {
  if (!isSelecting.value) {
    //非选中状态
    let currentCellPosition = getCellPosition(e.target); //获取单元格位置
    var horizontalFlag; //是否在范围框的水平判断标记
    var verticalFlag; //是否在范围框的垂直判断标记
    if (selectionStart.cellIndex <= selectionEnd.cellIndex) {
      //如果是从左往右选取
      horizontalFlag = selectionStart.cellIndex <= currentCellPosition.cellIndex && currentCellPosition.cellIndex <= selectionEnd.cellIndex;
    } else {
      //从右往左选取
      horizontalFlag = selectionEnd.cellIndex <= currentCellPosition.cellIndex && currentCellPosition.cellIndex <= selectionStart.cellIndex;
    }
    if (selectionStart.rowIndex <= selectionEnd.rowIndex) {
      //如果是从上往下选取
      verticalFlag = selectionStart.rowIndex <= currentCellPosition.rowIndex && currentCellPosition.rowIndex <= selectionEnd.rowIndex;
    } else {
      //从下往上选取
      verticalFlag = selectionEnd.rowIndex <= currentCellPosition.rowIndex && currentCellPosition.rowIndex <= selectionStart.rowIndex;
    }

    if (horizontalFlag && verticalFlag) {
      //判断如果不在选中区域内,触发表格左键单击事件,更新截取单元格,否则如果在正常触发右键菜单
    } else {
      selectionStart = getCellPosition(e.target); //获取单元格位置
      selectionEnd = selectionStart; //结束位置也是自己
      //设置样式
      setselectedCellArea();
    }
  }
};
// 获取复制的数据
const getDataByArea = (start, end, event) => {
  const data = [];
  for (let i = start.rowIndex; i <= end.rowIndex; i++) {
    const row = [];
    for (let j = start.cellIndex; j <= end.cellIndex; j++) {
      let data = getTablexGrid() && getTablexGrid().getTableData().visibleData[i];
      let head = getTablexGrid() && getTablexGrid().getTableColumn().visibleColumn[j];
      row.push(data[head.field]);
      // if (event === true) {
      //   // 判断是否需要重写属性
      //
      // } else {
      //   row.push(data[head.field]);
      // }
    }
    data.push(row);
  }
  return data;
};
const copyEvent = async (event: any) => {
  //我给大家打印处理:
  console.log('是否正在进行滑动选中操作：', isSelecting.value);
  //左上角坐标
  console.log('单元格起始位置：索引:', selectionStart);
  //右下角坐标
  console.log('单元格结束位置：索引:', selectionEnd);

  //这里需要是visibleData
  // let tableData = getTablexGrid().getTableData().visibleData; //获取处理条件之后的全量表体数据
  // let rowStart = selectionStart.rowIndex; //获取选中起始行索引
  // let rowEnd = selectionEnd.rowIndex; //获取选中结束行索引
  // let selectRows = tableData.filter((col, index: number) => {
  //     //col参数不能改否则会获取不到数据
  //     //这里修改从右下往左上拖动的数据显示
  //     if (rowStart <= rowEnd) {
  //         return rowStart <= index && rowEnd >= index;
  //     } else {
  //         return rowStart >= index && rowEnd <= index;
  //     }
  // });
  // console.log('鼠标选中行:', JSON.stringify(selectRows));

  // //这里需要是visibleColumn
  // let colStart = selectionStart.cellIndex; //获取选中起始列索引
  // let colEnd = selectionEnd.cellIndex; //获取选中结束列索引
  // let tableColumn = getTablexGrid().getTableColumn().visibleColumn; //获取处理条件之后的全量表头列
  // let selectCols = tableColumn.filter((col, index: number) => {
  //     //col参数不能改否则会获取不到数据
  //     //这里修改从右下往左上拖动的数据显示
  //     if (colStart <= colEnd) {
  //         return colStart <= index && colEnd >= index;
  //     } else {
  //         return colStart >= index && colEnd <= index;
  //     }
  // });
  // console.log('鼠标选中列:', JSON.stringify(selectCols));.
  if (tableCom.value) {
    const data = getDataByArea(selectionStart, selectionEnd, event);
    const result = data.reduce((a: string, b) => a + b.join('\t') + '\n', '').slice(0, -1);
    // event.clipboardData.setData('text/plain', result);
    if (XEClipboard.copy(result)) {
      VXETable.modal.message({
        status: 'success',
        content: '复制成功'
      });
    }
    if (getTablexGrid() && getTablexGrid().$el && getTablexGrid().$el.querySelector('.vxe-table--render-wrapper')) {
      selectionStart.cellIndex = -1;
      selectionStart.rowIndex = -1;
      selectionEnd.cellIndex = -1;
      selectionEnd.rowIndex = -1;
      destroyAreaBox();
    }
  }

  // await toClipboard(result);
  // VXETable.modal.message({
  //     status: 'success',
  //     content: '复制成功'
  // });

  // 复制成功取消区域选择框
  // destroyAreaBox();
};
const pasteEvent = async (text: any) => {
  if (text && tableCom.value) {
    let tableData = getTablexGrid() && getTablexGrid().getTableData().visibleData;
    let tableColumn = getTablexGrid() && getTablexGrid().getTableColumn().visibleColumn; //获取处理条件之后的全量表头列
    //去除首尾换行
    text = text.replace(/^\r\n+|\r\n+$/g, '');
    var snsArr = text.split(/\r\n+/);
    var tArr = snsArr.map(value => {
      return value.split('\t');
    });
    for (var i = 0; i < tArr.length; i++) {
      let line = tArr[i];
      if (selectionStart.rowIndex + i > tableData.length - 1) break;
      let row = tableData[selectionStart.rowIndex + i];
      for (var j = 0; j < line.length; j++) {
        if (selectionStart.cellIndex + j > tableColumn.length - 1) break;
        let column = tableColumn[selectionStart.cellIndex + j];
        if (column.editRender) {
          row[column.field] = line[j];
        }
      }
    }
    // 粘贴事件完成以后 你自己的逻辑
  }
};

// 在某个时刻不要忘记取消监听
onBeforeUnmount(() => {
  removeListener();
  if (getTablexGrid() && getTablexGrid().$el && getTablexGrid().$el.querySelector('.vxe-table--render-wrapper')) {
    removeExtendListener();
  }
});
```
