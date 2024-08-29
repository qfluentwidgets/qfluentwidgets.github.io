---
title: 表格控件
date: 2024-02-27 20:23:00
permalink: /zh/pages/components/tableview/
---

### [TableWidget](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/table_view/index.html#qfluentwidgets.components.widgets.table_view.TableWidget)

![TableWidget](/img/components/tableview/TableView.png)

`TableWidget` 提供了一个表格视图，用户可以在这个表格中查看和编辑数据。这个组件通常用于展示和编辑结构化的数据，例如一个电子表格或者一个数据库的查询结果。这个类的使用方式和 `QTableWidget` 完全相同。

```python
table = TableWidget(self)

# 启用边框并设置圆角
table.setBorderVisible(True)
table.setBorderRadius(8)

table.setWordWrap(False)
table.setRowCount(3)
table.setColumnCount(5)

# 添加表格数据
songInfos = [
    ['シアワセ', 'aiko', '秘密', '2008', '5:25'],
    ['なんでもないや', 'RADWIMPS', '君の名は。', '2016', '3:16'],
    ['恋をしたのは', 'aiko', '恋をしたのは', '2016', '6:02'],
]
for i, songInfo in enumerate(songInfos):
    for j in range(5):
        table.setItem(i, j, QTableWidgetItem(songInfo[j]))

# 设置水平表头并隐藏垂直表头
table.setHorizontalHeaderLabels(['Title', 'Artist', 'Album', 'Year', 'Duration'])
table.verticalHeader().hide()
```

默认情况下，右键单击某个列表项时不会更新该列的选中状态，如需立即选中可调用下述方法：
```python
table.setSelectRightClickedRow(True)
```

当显示器的分辨率较高时，平滑滚动可能导致表格卡顿，这时候可以禁用平滑滚动：

```python
table.scrollDelagate.verticalSmoothScroll.setSmoothMode(SmoothMode.NO_SMOOTH)
```



### [TableView](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/table_view/index.html#qfluentwidgets.components.widgets.table_view.TableView)

`TableView` 使用方法和 `QTableView` 完全相同。


### [RoundTableWidget](https://qfluentwidgets.com/zh/price)

![RoundTableWidget](/img/components/tableview/RoundTableView.png)

`RoundTableWidget` 用法和 `QTableWidget` 完全相同。


### [RoundTableView](https://qfluentwidgets.com/zh/price)

`RoundTableView` 用法和 `QTabelView` 完全相同。


### [LineTableWidget](https://qfluentwidgets.com/zh/price)

![LineTableWidget](/img/components/tableview/LineTableView.png)

`LineTableWidget` 用法和 `QTableWidget` 完全相同。


### [LineTableView](https://qfluentwidgets.com/zh/price)

`LineTableView` 用法和 `QTabelView` 完全相同。