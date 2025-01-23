---
title: 顶部导航栏
date: 2024-02-26 19:56:01
permalink: /zh/pages/components/topnavigationbar/
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

顶部导航栏通常与 `QStackedWidget` 一同使用，当用户点击不同的标签项时会切换当前页面。

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

        # 添加标签页
        self.addSubInterface(self.songInterface, 'songInterface', 'Song')
        self.addSubInterface(self.albumInterface, 'albumInterface', 'Album')
        self.addSubInterface(self.artistInterface, 'artistInterface', 'Artist')

        # 连接信号并初始化当前标签页
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

        # 使用全局唯一的 objectName 作为路由键
        self.pivot.addItem(
            routeKey=objectName,
            text=text,
            onClick=lambda: self.stackedWidget.setCurrentWidget(widget)
        )

    def onCurrentIndexChanged(self, index):
        widget = self.stackedWidget.widget(index)
        self.pivot.setCurrentItem(widget.objectName())
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

### [TopNavigationBar](https://qfluentwidgets.com/zh/price)

![TopNavigationBar](/img/components/topnavigationbar/TopNavigationBar.png)

`TopNavigationBar` 提供了顶部导航功能。

### [MenuBar](https://qfluentwidgets.com/zh/price)

![MenuBar](/img/components/topnavigationbar/MenuBar.png)

`MenuBar` 提供了顶部菜单导航功能。

### [GuideWindow](https://qfluentwidgets.com/zh/price)

![GuideWindow](/img/components/topnavigationbar/GuideWindow.png)

`GuideWindow` 提供了分步向导功能。
