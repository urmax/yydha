---
title: 在echarts中，当饼图很小的时候，给与比较大的可点击区域
date: 2023-04-18
updated: 2023-04-18
tags: 
    - 前端
categories: 
    - js
    - echarts
description: 在echarts中，当饼图很小的时候，给与比较大的可点击区域
---
# 在echarts中，当饼图很小的时候，给与比较大的可点击区域
当数据相差极大的时候，有的小数据的在echarts上面不方便查看，这个时候我们找到一个解决方案。就是先把数据统一增大，渲染数据后，显示的数据在减去这个增大的值。
## 举个例子
```js
const setData = () => {
    axios.get('/1/2/3', {
        params: { id: updateId.value },
    }).then(({ data }) => {
        if (data.code !== 200) return;
        opdatas.value = data.data;
        const dataArr = opdatas.value.map((item: any) => {
            return {
                ...item,
                name: item.mz,
                value: item.count,
            };
        });
        // 放大数据显示极值的情况
        let max = 0;
        dataArr.forEach(
            item => {
                if (item.value >= max) max = item.value;
            },
        );
        // 放大规则
        const number = Math.round(max * 0.5);
        dataArr.forEach(item => {
            // 将所有大于0的数字放大
            if (item.value !== 0) {
                item.value = item.value + number;
            }
        });
        bottomOptions.value = {
            color: colorArr.value,
            tooltip: {
                trigger: 'item',
                axisPointer: {
                    type: 'none',
                },
                position(point: number[], params: any, dom: any, rect: any, size: { contentSize: any[]; viewSize: number[] }) { // 提示框位置
                    let x = 0;
                    let y = 0;
                    // 提示框定位
                    if (point[0] + size.contentSize[0] < size.viewSize[0]) {
                        x = point[0];
                    } else if (point[0] > size.contentSize[0]) {
                        x = point[0] - size.contentSize[0];
                    } else {
                        x = '30%';
                    }
                    if (point[1] > size.contentSize[1]) {
                        y = point[1] - size.contentSize[1];
                    } else if (point[1] + size.contentSize[1] < size.viewSize[1]) {
                        y = point[1];
                    } else {
                        y = '30%';
                    }
                    return [x, y];
                },
                // 这里展示的时候 需要减掉放大的量
                formatter: (params: { color: any; name: any; value: any }) => {
                    const pieColor = params.color;
                    return `
                        <div style="position:relative;">
                        <div style="width: 9px;height: 9px;background: ${pieColor};border: 1px solid #FFFFFF;position:absolute;top:50%;transform:translateY(-50%);left:0;border-radius:50%;"></div>
                        <span style="margin:0 0 0 15px;font-size: 14px;font-weight: 400;color: #FFFFFF;">${params.name}</span>
                        </div>
                        <div style="margin:12px 0 0 15px;font-size: 14px;font-weight: 500;color: #FFFFFF;">数量: ${params.value - number}</div>
                    `;
                },
                extraCssText: 'opacity: 0.8;background-color:#050F1B;padding:16px;box-shadow: 1px 6px 15px 1px rgba(0,0,0,0.13);border-radius: 4px;filter: blur(undefinedpx);border:none;',
            },
            series: [{
                type: 'pie',
                roseType: true,
                radius: ['20%', '80%'],
                center: ['45%', 120], // 图形位置
                selectedMode: true,
                label: {
                    show: false,
                },
                data: dataArr,
                itemStyle: {
                    borderRadius: 5,
                    // borderColor: '#fff',
                    // borderWidth: 2,
                },
            }],
            legend: {
                type: 'scroll',
                orient: 'vertical',
                icon: 'circle',
                itemWidth: 12,
                itemHeight: 12,
                left: 'center',
                height: 110,
                top: 265,
                data: dataArr,
                textStyle: {
                    color: 'rgba(0, 0, 0, 0.65)',
                    rich: {
                        name: {
                            fontSize: 12,
                            fontWeight: 400,
                            width: 80,
                            padding: [0, 0, 0, 5],
                            color: 'var(--descriptive-text)',
                        },
                        value: {
                            fontSize: 12,
                            fontWeight: 400,
                            width: 50,
                            align: 'right',
                            color: 'var(--descriptive-text)',
                        },
                    },
                },
                formatter: (params: any) => {
                    for (let i = 0; i < dataArr.length; i++) {
                        if (params === dataArr[i].name) {
                            return `{name|${params}}{value|${dataArr[i].count}}`;
                        }
                    }
                },
                padding: [
                    5, // 上
                    10, // 右
                    5, // 下
                    10, // 左
                ],
                pageTextStyle: {
                    color: 'var(--primary-text)',
                },
                pageIconSize: [10, 10],
            },
        };
        nextTick(() => tableKey2.value++);
    });
};
```