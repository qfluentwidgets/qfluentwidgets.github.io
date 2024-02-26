---
title: 顶部导航栏
date: 2024-02-26 19:56:01
permalink: /zh/components/topnavigationbar/
---

### [Pivot](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/navigation/pivot/index.html#qfluentwidgets.components.navigation.pivot.Pivot)

![Pivot](/img/components/topnavigationbar/Pivot.png)

`Pivot` 控件支持在一组标签项之间进行切换，被选中的标签项下会显示下划线。

通过 `addItem()` 可添加标签项，每个标签项需绑定一个全局唯一的 `routeKey`，返回值为 [PivotItem](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/navigation/pivot/index.html#qfluentwidgets.components.navigation.pivot.PivotItem) 实例。
```python
pivot = Pivot()

# 添加标签项
pivot.addItem(routeKey="songInterface", text="Song", onClick=lambda: print("Song"))
pivot.addItem(routeKey="albumInterface", text="Album", onClick=lambda: print("Album"))
pivot.addItem(routeKey="artistInterface", text="Artist", onClick=lambda: print("Artist"))

# 设置当前标签项
pivot.setCurrentItem("albumInterface")

# 获取当前标签项
print(pivot.currentItem())
```

### [SegmentedWidget](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/navigation/segmented_widget/index.html#qfluentwidgets.components.navigation.segmented_widget.SegmentedWidget)

![SegmentedWidget](/img/components/topnavigationbar/SegmentedWidget.png)

`SegmentedWidget` 分段导航控件支持在一组标签项之间进行切换，使用方式和 [Pivot](#pivot) 完全相同，`addItem()` 返回值为 [SegmentedItem](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/navigation/segmented_widget/index.html#qfluentwidgets.components.navigation.segmented_widget.SegmentedWidgetItem) 实例。

### [SegmentedToolWidget](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/navigation/segmented_widget/index.html#qfluentwidgets.components.navigation.segmented_widget.SegmentedToolWidget)

![SegmentedToolWidget](/img/components/topnavigationbar/SegmentedToolWidget.png)

`SegmentedToolWidget` 图标分段导航控件支持在一组图标标签项之间进行切换。

通过 `addItem()` 可添加标签项，每个标签项需绑定一个全局唯一的 `routeKey`，返回值为 [SegmentedToolItem](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/navigation/segmented_widget/index.html#qfluentwidgets.components.navigation.segmented_widget.SegmentedToolItem) 实例。
```python
sw = SegmentedToolWidget()

# 添加标签项
sw.addItem(routeKey="songInterface", icon=FluentIcon.TRANSPARENT, onClick=lambda: print("Song"))
sw.addItem(routeKey="albumInterface", icon=FluentIcon.CHECKBOX, onClick=lambda: print("Album"))
sw.addItem(routeKey="artistInterface", icon=FluentIcon.CONSTRACT, onClick=lambda: print("Artist"))

# 设置当前标签项
sw.setCurrentItem("albumInterface")

# 获取当前标签项
print(sw.currentItem())
```

### [SegmentedToggleToolWidget](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/navigation/segmented_widget/index.html#qfluentwidgets.components.navigation.segmented_widget.SegmentedToggleToolWidget)

![SegmentedToggleToolWidget](/img/components/topnavigationbar/SegmentedToggleToolWidget.png)

`SegmentedToggleToolWidget` 使用方式和 [SegmentedToolWidget](#segmentedtoolwidget) 完全相同，`addItem()` 的返回值为 [SegmentedToolItem](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/navigation/segmented_widget/index.html#qfluentwidgets.components.navigation.segmented_widget.SegmentedToggleToolItem) 实例。
