---
title: Breadcrumb Bar
date: 2024-02-26 19:56:01
permalink: /components/breadcrumbbar/
---

### [BreadcrumbBar](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/navigation/breadcrumb/index.html#qfluentwidgets.components.navigation.breadcrumb.BreadcrumbBar)

![BreadcrumbBar](/img/components/breadcrumbbar/BreadCrumbBar.png)

`BreadcrumbBar` serves as an auxiliary and supplementary navigation method. It allows users to know their location within the application and can easily return to their original location.

You can append a node to the right by using `addItem()`. When there are too many nodes to fit in the viewport, the nodes on the left will be folded into the menu:

```python
breadcrumb = BreadcrumbBar(self)
items = ["Home", "Documents", "Learning Materials", "Action Movies", "Ip Man"]
for item in items:
    # The first parameter is routeKey, which must be globally unique
    breadcrumb.addItem(item, item)
```

When the selected node changes, it will send `currentItemChanged(routeKey: str)` and `currentIndexChanged(index: int)` signals:
```python
breadcrumbBar.currentItemChanged.connect(lambda key: print(key))
```

Adjust the layout and font of the breadcrumb:
```python
setFont(breadcrumbBar, 26)
breadcrumbBar.setSpacing(20)
```
