---
title: 树状控件
date: 2024-02-27 21:07:00
permalink: /zh/pages/components/treeview/
---

### [TreeWidget](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/tree_view/index.html#qfluentwidgets.components.widgets.tree_view.TreeWidget)

![TreeWidget](/img/components/treeview/TreeWidget.png)

`TreeWidget` 用于展示具有父子关系的数据，使用方法和 `QTreeWidget` 完全相同。

```python
tree = TreeWidget()

# 添加子树
item1 = QTreeWidgetItem(['JoJo 1 - Phantom Blood'])
item1.addChildren([
    QTreeWidgetItem(['Jonathan Joestar']),
    QTreeWidgetItem(['Dio Brando']),
])
tree.addTopLevelItem(item1)

# 添加子树
item2 = QTreeWidgetItem(['JoJo 3 - Stardust Crusaders'])
item21 = QTreeWidgetItem(['Jotaro Kujo'])
item21.addChildren([
    QTreeWidgetItem(['空条承太郎']),
    QTreeWidgetItem(['空条蕉太狼']),
])
item2.addChild(item21)
tree.addTopLevelItem(item2)

# 隐藏表头
tree.setHeaderHidden(True)
tree.setFixedSize(300, 380)
```

当显示器的分辨率较高时，平滑滚动可能导致卡顿，这时候可以禁用平滑滚动：

```python
tree.scrollDelagate.verticalSmoothScroll.setSmoothMode(SmoothMode.NO_SMOOTH)
```


### [TreeView](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/tree_view/index.html#qfluentwidgets.components.widgets.tree_view.TreeView)

`TreeView` 用于展示具有父子关系的数据，使用方法和 `QTreeView` 完全相同。