---
title: 面包屑导航
date: 2024-02-26 19:56:01
permalink: /zh/components/breadcrumbbar/
---

### [BreadcrumbBar](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/navigation/breadcrumb/index.html#qfluentwidgets.components.navigation.breadcrumb.BreadcrumbBar)

![BreadcrumbBar](/img/components/breadcrumbbar/BreadCrumbBar.png)

`BreadcrumbBar` 是作为辅助和补充的导航方式，它能让用户知道在应用中所处的位置并能方便地回到原先的位置。

通过 `addItem()` 可在右侧追加一个节点，当节点过多以至于视口容纳不下时，左侧的节点将被折叠到菜单中：

```python
breadcrumb = BreadcrumbBar()
items = ["主页", "文档", "学习资料", "动作电影", "叶问"]
for item in items:
    # 第一个参数为 routeKey，必须全局唯一
    breadcrumb.addItem(item, item)
```

当选中的节点变化时会发送 `currentItemChanged(routeKey: str)` 和 `currentIndexChanged(index: int)` 信号：
```python
breadcrumbBar.currentItemChanged.connect(lambda key: print(key))
```

调整面包屑的布局和字体：
```python
qfluentwidgets.setFont(breadcrumbBar, 26)
breadcrumbBar.setSpacing(20)
```

