---
title: 列表控件
date: 2024-02-27 20:23:00
permalink: /zh/pages/components/listview/
---

### [ListWidget](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/list_view/index.html#qfluentwidgets.components.widgets.list_view.ListWidget)

![ListWidget](/img/components/listview/ListView.png)

`ListWidget` 提供了一个列表，用户可以在这个列表中选择一个或多个项，这个类的用法和 `QListWidget` 完全相同。

```python
listWidget = ListWidget()

stands = [
    '白金之星', '绿色法皇', "天堂制造", "绯红之王",
    '银色战车', '疯狂钻石', "壮烈成仁", "败者食尘",
    "隐者之紫", "黄金体验", "虚无之王", "纸月之王",
    "骇人恶兽", "男子领域", "华丽挚爱", "牙 Act 4",
    "铁球破坏者", "性感手枪", 'D4C • 爱之列车', "天生完美",
    "软又湿", "佩斯利公园", "奇迹于你", "行走的心",
    "护霜旅行者", "十一月雨", "调情圣手", "片刻静候"
]

# 添加列表项
for stand in stands:
    item = QListWidgetItem(stand)
    item.setIcon(QIcon(':/qfluentwidgets/images/logo.png'))
    listWidget.addItem(item)
```

默认情况下，右键单击某个列表项时不会更新该列的选中状态，如需立即选中可调用下述方法：
```python
listWidget.setSelectRightClickedRow(True)
```

### [ListView](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/list_view/index.html#qfluentwidgets.components.widgets.list_view.ListView)

`ListView` 用于展示模型中的数据，使用方法和 `QListView` 完全相同。


### [RoundListWidget](https://qfluentwidgets.com/zh/price)

![RoundListWidget](/img/components/listview/RoundListView.png)

`RoundListWidget` 用法和 `QListWidget` 完全相同。


### [RoundListView](https://qfluentwidgets.com/zh/price)

`RoundListView` 用法和 `QListWidget` 完全相同。