---
title: Tab Bar
date: 2025-01-24 19:00:22
permalink: /pages/components/tabbar/
---

### [TabBar](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/tab_view/index.html#qfluentwidgets.components.widgets.tab_view.TabBar)

![TabBar](/img/components/tabbar/TabBar.png)

`TabBar` supports switching between a set of tabs and allows for dynamic addition and removal of tabs.

Tabs can be added using `addTab()`, and each tab item must be associated with a globally unique `routeKey`. The return value is an instance of [TabItem](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/tab_view/index.html#qfluentwidgets.components.widgets.tab_view.TabItem).

```python
tabBar = TabBar()

# add tab item
tabBar.addTab(
    routeKey="songInfterface",
    text="Song",
    icon="/path/to/icon.png",
    onClick=lambda: print("Click")
)

# get current tab item
print(self.tabBar.currentTab())
```

Common signals of `TabBar` include:

* `currentChanged(index: int)`: Emitted when the currently selected tab is changed.
* `tabAddRequested`: Emitted when the `+` button is clicked, indicating a request to add a new tab.
* `tabCloseRequested(index: int)`: Emitted when the `×` button on a tab item is clicked, indicating a request to remove the tab.

`TabBar` is typically used toggether with `QStackedWidget`, allowing the current page to switch when users click on different tab items. Here is a simple example:

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

        # add page
        self.addSubInterface(self.songInterface, 'songInterface', 'Song')
        self.addSubInterface(self.albumInterface, 'albumInterface', 'Album')
        self.addSubInterface(self.artistInterface, 'artistInterface', 'Artist')

        # connect signals to slots
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

        # use the unique objectName as route key
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


### [RoundTabBar](https://qfluentwidgets.com/price)

![RoundTabBar](/img/components/tabbar/RoundTabBar.png)

`RoundTabBar` supports switching between a set of tabs and allows for dynamic addition and removal of tabs.