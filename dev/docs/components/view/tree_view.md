---
title: Tree View
date: 2024-02-27 21:07:00
permalink: /pages/components/treeview/
---

### [TreeWidget](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/tree_view/index.html#qfluentwidgets.components.widgets.tree_view.TreeWidget)

![TreeWidget](/img/components/treeview/TreeWidget.png)

`TreeWidget` is used to display data with parent-child relationships. The usage of this class is completely the same as `QTreeWidget`.

```python
tree = TreeWidget()

# Add subtree
item1 = QTreeWidgetItem(['JoJo 1 - Phantom Blood'])
item1.addChildren([
    QTreeWidgetItem(['Jonathan Joestar']),
    QTreeWidgetItem(['Dio Brando']),
])
tree.addTopLevelItem(item1)

# Add subtree
item2 = QTreeWidgetItem(['JoJo 3 - Stardust Crusaders'])
item21 = QTreeWidgetItem(['Jotaro Kujo'])
item21.addChildren([
    QTreeWidgetItem(['Kujo Jotaro']),
    QTreeWidgetItem(['Kujo Jolyne']),
])
item2.addChild(item21)
tree.addTopLevelItem(item2)

# Hide header
tree.setHeaderHidden(True)
tree.setFixedSize(300, 380)
```

When the monitor's resolution is high, smooth scrolling may cause the tree to lag. In this case, you can disable smooth scrolling.

```python
tree.scrollDelagate.verticalSmoothScroll.setSmoothMode(SmoothMode.NO_SMOOTH)
```

### [TreeView](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/tree_view/index.html#qfluentwidgets.components.widgets.tree_view.TreeView)

`TreeView` is used to display data with parent-child relationships. The usage of this class is completely the same as `QTreeView`.