---
title: Table View
date: 2024-02-27 20:23:00
permalink: /pages/components/tableview/
---

### [TableWidget](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/table_view/index.html#qfluentwidgets.components.widgets.table_view.TableWidget)

![TableWidget](/img/components/tableview/TableView.png)

`TableWidget` provides a table view where users can view and edit data. This component is often used to display and edit structured data, such as a spreadsheet or a database query result. The usage of this class is completely the same as `QTableWidget`.

```python
table = TableWidget(self)

# Enable border and set rounded corners
table.setBorderVisible(True)
table.setBorderRadius(8)

table.setWordWrap(False)
table.setRowCount(3)
table.setColumnCount(5)

# Add table data
songInfos = [
    ['シアワセ', 'aiko', '秘密', '2008', '5:25'],
    ['なんでもないや', 'RADWIMPS', '君の名は。', '2016', '3:16'],
    ['恋をしたのは', 'aiko', '恋をしたのは', '2016', '6:02'],
]
for i, songInfo in enumerate(songInfos):
    for j in range(5):
        table.setItem(i, j, QTableWidgetItem(songInfo[j]))

# Set horizontal header and hide vertical header
table.setHorizontalHeaderLabels(['Title', 'Artist', 'Album', 'Year', 'Duration'])
table.verticalHeader().hide()
```

By default, right-clicking an item in the list does not update the selected state of the row. If you need to select it immediately, you can call the following method:
```python
table.setSelectRightClickedRow(True)
```

When the monitor's resolution is high, smooth scrolling may cause the table to lag. In this case, you can disable smooth scrolling.


```python
table.scrollDelagate.verticalSmoothScroll.setSmoothMode(SmoothMode.NO_SMOOTH)
```



### [TableView](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/table_view/index.html#qfluentwidgets.components.widgets.table_view.TableView)

The usage of `TableView` is completely the same as `QTableView`.


### [RoundTableWidget](https://qfluentwidgets.com/price)

![RoundTableWidget](/img/components/tableview/RoundTableView.png)

The usage of `RoundTableWidget` is exactly the same as `QTableWidget`.

### [RoundTableView](https://qfluentwidgets.com/price)

The usage of `RoundTableView` is exactly the same as `QTableView`.

### [LineTableWidget](https://qfluentwidgets.com/price)

![LineTableWidget](/img/components/tableview/LineTableView.png)

The usage of `LineTableWidget` is exactly the same as `QTableWidget`.

### [LineTableView](https://qfluentwidgets.com/price)

The usage of `LineTableView` is exactly the same as `QTableView`.