---
title: Top Navigation Bar
date: 2024-02-26 19:56:01
permalink: /pages/components/topnavigationbar/
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

The top navigation bar is often used with `QStackedWidget`. When users click on different tab items, the current page will be switched.

```python
class Demo(QWidget):

    def __init__(self):
        super().__init__()
        self.pivot = Pivot(self)
        self.stackedWidget = QStackedWidget(self)
        self.vBoxLayout = QVBoxLayout(self)

        self.songInterface = QLabel('Song Interface', self)
        self.albumInterface = QLabel('Album Interface', self)
        self.artistInterface = QLabel('Artist Interface', self)

        # Add tabs
        self.addSubInterface(self.songInterface, 'songInterface', 'Song')
        self.addSubInterface(self.albumInterface, 'albumInterface', 'Album')
        self.addSubInterface(self.artistInterface, 'artistInterface', 'Artist')

        # Connect signal and initialize the current tab
        self.stackedWidget.currentChanged.connect(self.onCurrentIndexChanged)
        self.stackedWidget.setCurrentWidget(self.songInterface)
        self.pivot.setCurrentItem(self.songInterface.objectName())

        self.vBoxLayout.setContentsMargins(30, 0, 30, 30)
        self.vBoxLayout.addWidget(self.pivot, 0, Qt.AlignHCenter)
        self.vBoxLayout.addWidget(self.stackedWidget)
        self.resize(400, 400)

    def addSubInterface(self, widget: QLabel, objectName: str, text: str):
        widget.setObjectName(objectName)
        widget.setAlignment(Qt.AlignCenter)
        self.stackedWidget.addWidget(widget)

        # Use the globally unique objectName as the route key
        self.pivot.addItem(
            routeKey=objectName,
            text=text,
            onClick=lambda: self.stackedWidget.setCurrentWidget(widget)
        )

    def onCurrentIndexChanged(self, index):
        widget = self.stackedWidget.widget(index)
        self.pivot.setCurrentItem(widget.objectName())
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

### [TopNavigationBar](https://qfluentwidgets.com/price)

![TopNavigationBar](/img/components/topnavigationbar/TopNavigationBar.png)

`TopNavigationBar` provides top navigation functionality.


### [MenuBar](https://qfluentwidgets.com/price)

![MenuBar](/img/components/topnavigationbar/MenuBar.png)

`MenuBar` provides top menu navigation functionality.


### [GuideWindow](https://qfluentwidgets.com/price)

![GuideWindow](/img/components/topnavigationbar/GuideWindow.png)

`GuideWindow` provides the guide step functionality.