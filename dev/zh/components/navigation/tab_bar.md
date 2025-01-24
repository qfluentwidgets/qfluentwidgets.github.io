---
title: 标签栏
date: 2025-01-24 19:00:22
permalink: /zh/pages/components/tabbar/
---

### [TabBar](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/tab_view/index.html#qfluentwidgets.components.widgets.tab_view.TabBar)

![TabBar](/img/components/tabbar/TabBar.png)

`TabBar` 控件支持在一组标签页之间进行切换，并支持动态删除和添加标签。

通过 `addTab()` 可添加标签项，每个标签项需绑定一个全局唯一的 `routeKey`，返回值为 [TabItem](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/tab_view/index.html#qfluentwidgets.components.widgets.tab_view.TabItem) 实例。

```python
tabBar = TabBar()

# 添加标签项
tabBar.addTab(
    routeKey="songInfterface",
    text="Song",
    icon="/path/to/icon.png",
    onClick=lambda: print("Click")
)

# 获取当前标签项
print(self.tabBar.currentTab())
```

标签栏常用的信号有：
* `currentChanged(index: int)`: 切换当前选中的标签页
* `tabAddRequested`: 点击右侧的 `+` 按钮时发出此信号，表示请求添加新的标签页
* `tabCloseRequested(index: int)`: 点击标签项的 `×` 按钮时发出此信号，表示请求移除标签页

`TabBar` 通常与 `QStackedWidget` 一同使用，当用户点击不同的标签项时会切换当前页面，下面是个简单的例子：

```python
class Demo(QWidget):

    def __init__(self):
        super().__init__()
        self.tabBar = TabBar(self)
        self.stackedWidget = QStackedWidget(self)
        self.vBoxLayout = QVBoxLayout(self)
        self.counter = 1

        self.songInterface = QLabel('Song Interface', self)
        self.albumInterface = QLabel('Album Interface', self)
        self.artistInterface = QLabel('Artist Interface', self)

        # 添加标签页
        self.addSubInterface(self.songInterface, 'songInterface', 'Song')
        self.addSubInterface(self.albumInterface, 'albumInterface', 'Album')
        self.addSubInterface(self.artistInterface, 'artistInterface', 'Artist')

        # 连接信号
        self.stackedWidget.currentChanged.connect(self.onCurrentIndexChanged)
        self.stackedWidget.setCurrentWidget(self.songInterface)
        self.tabBar.tabAddRequested.connect(self.onAddNewTab)
        self.tabBar.tabCloseRequested.connect(self.onCloseTab)

        self.vBoxLayout.setContentsMargins(30, 0, 30, 30)
        self.vBoxLayout.addWidget(self.tabBar, 0, Qt.AlignHCenter)
        self.vBoxLayout.addWidget(self.stackedWidget)
        self.resize(400, 400)

    def addSubInterface(self, widget: QLabel, objectName: str, text: str):
        widget.setObjectName(objectName)
        widget.setAlignment(Qt.AlignCenter)
        self.stackedWidget.addWidget(widget)

        # 使用全局唯一的 objectName 作为路由键
        self.tabBar.addTab(
            routeKey=objectName,
            text=text,
            onClick=lambda: self.stackedWidget.setCurrentWidget(widget)
        )

    def onCurrentIndexChanged(self, index):
        widget = self.stackedWidget.widget(index)
        self.tabBar.setCurrentTab(widget.objectName())

    def onAddNewTab(self):
        w = QLabel(f"Tab {self.counter}")
        self.addSubInterface(w, w.text(), w.text())
        self.counter += 1

    def onCloseTab(self, index: int):
        item = self.tabBar.tabItem(index)
        widget = self.findChild(QLabel, item.routeKey())
        self.stackedWidget.removeWidget(widget)
        self.tabBar.removeTab(index)
        widget.deleteLater()

```


### [RoundTabBar](https://qfluentwidgets.com/zh/price)

![RoundTabBar](/img/components/tabbar/RoundTabBar.png)

`RoundTabBar` 控件支持在一组标签页之间进行切换，并支持动态删除和添加标签。