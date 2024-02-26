---
title: Top Navigation Bar
date: 2024-02-26 19:56:01
permalink: /components/topnavigationbar/
---

### [Pivot](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/navigation/pivot/index.html#qfluentwidgets.components.navigation.pivot.Pivot)

![Pivot](/img/components/topnavigationbar/Pivot.png)

The `Pivot` widget supports switching between a set of tab items, with an underline appearing under the selected tab item.

You can add tab items through `addItem()`, each tab item needs to be bound to a globally unique `routeKey`. The return value is a [PivotItem](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/navigation/pivot/index.html#qfluentwidgets.components.navigation.pivot.PivotItem) instance.
```python
pivot = Pivot()

# Add tab items
pivot.addItem(routeKey="songInterface", text="Song", onClick=lambda: print("Song"))
pivot.addItem(routeKey="albumInterface", text="Album", onClick=lambda: print("Album"))
pivot.addItem(routeKey="artistInterface", text="Artist", onClick=lambda: print("Artist"))

# Set the current tab item
pivot.setCurrentItem("albumInterface")

# Get the current tab item
print(pivot.currentItem())
```

### [SegmentedWidget](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/navigation/segmented_widget/index.html#qfluentwidgets.components.navigation.segmented_widget.SegmentedWidget)

![SegmentedWidget](/img/components/topnavigationbar/SegmentedWidget.png)

The `SegmentedWidget` segmented navigation widget supports switching between a set of tab items. Its usage is exactly the same as [Pivot](#pivot), and the return value of `addItem()` is a [SegmentedItem](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/navigation/segmented_widget/index.html#qfluentwidgets.components.navigation.segmented_widget.SegmentedWidgetItem) instance.

### [SegmentedToolWidget](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/navigation/segmented_widget/index.html#qfluentwidgets.components.navigation.segmented_widget.SegmentedToolWidget)

![SegmentedToolWidget](/img/components/topnavigationbar/SegmentedToolWidget.png)

The `SegmentedToolWidget` icon segmented navigation widget supports switching between a set of icon tab items.

You can add tab items through `addItem()`, each tab item needs to be bound to a globally unique `routeKey`. The return value is a [SegmentedToolItem](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/navigation/segmented_widget/index.html#qfluentwidgets.components.navigation.segmented_widget.SegmentedToolItem) instance.
```python
sw = SegmentedToolWidget()

# Add tab items
sw.addItem(routeKey="songInterface", icon=FluentIcon.TRANSPARENT, onClick=lambda: print("Song"))
sw.addItem(routeKey="albumInterface", icon=FluentIcon.CHECKBOX, onClick=lambda: print("Album"))
sw.addItem(routeKey="artistInterface", icon=FluentIcon.CONSTRACT, onClick=lambda: print("Artist"))

# Set the current tab item
sw.setCurrentItem("albumInterface")

# Get the current tab item
print(sw.currentItem())
```

### [SegmentedToggleToolWidget](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/navigation/segmented_widget/index.html#qfluentwidgets.components.navigation.segmented_widget.SegmentedToggleToolWidget)

![SegmentedToggleToolWidget](/img/components/topnavigationbar/SegmentedToggleToolWidget.png)

The usage of `SegmentedToggleToolWidget` is exactly the same as [SegmentedToolWidget](#segmentedtoolwidget), and the return value of `addItem()` is a [SegmentedToolItem](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/navigation/segmented_widget/index.html#qfluentwidgets.components.navigation.segmented_widget.SegmentedToggleToolItem) instance.