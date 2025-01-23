---
title: Fluent Window
date: 2024-03-14 13:52:00
permalink: /pages/components/fluentwindow/
---

## [FluentWindow](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/window/fluent_window/index.html#)

![FluentWindow](/img/components/fluent_window/FluentWindow.png)

`FluentWindow` encapsulates the sidebar and stackable components, making it very convenient to create multi-interface windows.

### Add sub-interface
Just call the `addSubInterface()` method to add a sub-interface:

```python
def addSubInterface(
    self,
    interface: QWidget,
    icon: FluentIconBase | QIcon | str,
    text: str,
    position=NavigationItemPosition.TOP,
    parent: QWidget = None
) -> NavigationTreeWidget
```

Each parameter is explained as follows:
* `interface`: The sub-interface to be added
* `icon`: Sidebar menu item icon
* `text`: Sidebar menu item text
* `position`: Position of the sidebar menu item
* `parent`: The sub-interface corresponding to the sidebar parent menu item

::: warning Warning
Before calling `addSubInterface()`, you must set a globally unique object name for the sub-interface as the routing key, otherwise the back function will have problems, and the sidebar will not see the menu item corresponding to the sub-interface.
If you see something strange in the upper left corner of the interface, it means you forgot to call `addSubInterface()` to add a certain sub-interface
:::

Here is a simple example, for more complex multi-sub-interface examples see the [video tutorial](https://www.bilibili.com/video/BV1Uu411j7AV):

```python
from qfluentwidgets import NavigationItemPosition, FluentWindow, SubtitleLabel, setFont
from qfluentwidgets import FluentIcon as FIF


class Widget(QFrame):

    def __init__(self, text: str, parent=None):
        super().__init__(parent=parent)
        self.label = SubtitleLabel(text, self)
        self.hBoxLayout = QHBoxLayout(self)

        setFont(self.label, 24)
        self.label.setAlignment(Qt.AlignCenter)
        self.hBoxLayout.addWidget(self.label, 1, Qt.AlignCenter)

        # Must set a globally unique object name for the sub-interface
        self.setObjectName(text.replace(' ', '-'))


class Window(FluentWindow):
    """ Main Interface """

    def __init__(self):
        super().__init__()

        # Create sub-interfaces, when actually using, replace Widget with your own sub-interface
        self.homeInterface = Widget('Home Interface', self)
        self.musicInterface = Widget('Music Interface', self)
        self.videoInterface = Widget('Video Interface', self)
        self.settingInterface = Widget('Setting Interface', self)
        self.albumInterface = Widget('Album Interface', self)
        self.albumInterface1 = Widget('Album Interface 1', self)

        self.initNavigation()
        self.initWindow()

    def initNavigation(self):
        self.addSubInterface(self.homeInterface, FIF.HOME, 'Home')
        self.addSubInterface(self.musicInterface, FIF.MUSIC, 'Music library')
        self.addSubInterface(self.videoInterface, FIF.VIDEO, 'Video library')

        self.navigationInterface.addSeparator()

        self.addSubInterface(self.albumInterface, FIF.ALBUM, 'Albums', NavigationItemPosition.SCROLL)
        self.addSubInterface(self.albumInterface1, FIF.ALBUM, 'Album 1', parent=self.albumInterface)

        self.addSubInterface(self.settingInterface, FIF.SETTING, 'Settings', NavigationItemPosition.BOTTOM)

    def initWindow(self):
        self.resize(900, 700)
        self.setWindowIcon(QIcon(':/qfluentwidgets/images/logo.png'))
        self.setWindowTitle('PyQt-Fluent-Widgets')


if __name__ == '__main__':
    app = QApplication(sys.argv)
    w = Window()
    w.show()
    app.exec()
```

### Switching interface

`FluentWindow` provides a method for switching the current interface, where `interface` is the sub-interface to be switched to:
```python
def switchTo(self, interface: QWidget) -> None
```

Internally, `FluentWindow` uses `StackedWidget` to hold sub-interfaces. When switching the current interface, `StackedWidget` will emit a `currentChanged(index: int)` signal:

```python
self.stackedWidget.currentChanged.connect(lambda: print(self.stackedWidget.currentWidget()))
```


### Customize navigation
To adjust the width of the sidebar navigation in the expanded state:
```python
self.navigationInterface.setExpandWidth(300)
```

By default, the sidebar navigation is collapsed and will only expand when the window width exceeds the threshold. If you want to disable the collapse and always keep it expanded:
```python
# This line of code must be called after setExpandWidth()
self.navigationInterface.setCollapsible(False)
```

If you don't want to disable the collapse, but you want the sidebar to be expanded after the window is created:
```python
self.resize(900, 700)

# Need to set the minimum window width that allows the sidebar navigation to expand
self.navigationInterface.setMinimumExpandWidth(900)

# Expand the navigation bar
self.navigationInterface.expand(useAni=False)
```

### Customizable Title Bar

`FluentWindow` uses the custom title bar provided by the `qframelesswindow` library, which corresponds to the `titleBar` property. The title bar uses a horizontal layout `hBoxLayout`, and the internal components are as follows:
* `minBtn`: Minimize button
* `maxBtn`: Maximize button
* `closeBtn`: Close button
* `iconLabel`: Icon label
* `titleLabel`: Title label

To hide the maximize button and disable the double-click maximize functionality on the title bar:
```python
self.titleBar.maxBtn.hide()
self.titleBar.setDoubleClickEnabled(False)
```


### Customizing background color

When the mica effect is disabled in `FluentWindow`, the background color is light blue in light mode and dark gray in dark mode. You can call `setCustomBackgroundColor()` to customize the background color:

```python
self.setCustomBackgroundColor(QColor(242, 242, 242), QColor(25, 33, 42))
```



### Solution to background failure
In Win11 system, `FluentWindow` enables the mica effect by default. If `QWebEngineView` or `QOpenGLWidget` is used in the window, it will cause the window background effect to fail, and the rounded corners and shadows will also disappear.

The following example demonstrates how to correctly use the Web engine in `FluentWindow`:
```python
from qfluentwidgets import SplitFluentWindow, FluentIcon
from qframelesswindow.webengine import FramelessWebEngineView


class Widget(QFrame):

    def __init__(self, parent=None):
        super().__init__(parent=parent)
        self.setObjectName("homeInterface")

        # 1. Replace QWebEngineView with FramelessWebEngineView
        self.webView = FramelessWebEngineView(self)
        self.webView.load(QUrl("https://www.baidu.com/"))

        self.vBoxLayout = QVBoxLayout(self)
        self.vBoxLayout.setContentsMargins(0, 48, 0, 0)
        self.vBoxLayout.addWidget(self.webView)


class Window(SplitFluentWindow):

    def __init__(self):
        super().__init__()

        # Create and add sub-interfaces
        self.homeInterface = Widget(self)
        self.addSubInterface(self.homeInterface, FluentIcon.HOME, "Home")

        # Initialize the window
        self.resize(900, 700)
        self.setWindowIcon(QIcon(':/qfluentwidgets/images/logo.png'))
        self.setWindowTitle('PyQt-Fluent-Widgets')


if __name__ == '__main__':
    app = QApplication(sys.argv)
    w = Window()
    w.show()

    # 2. Re-enable the mica effect
    w.setMicaEffectEnabled(True)

    app.exec()
```

For `QOpenGLWidget`, you need to forcibly call `FluentWindow.updateFrameless()` in the constructor of the main window and re-enable the mica effect after showing the main window.

## [SplitFluentWindow](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/window/fluent_window/index.html#)

![SplitFluentWindow](/img/components/fluent_window/SplitFluentWindow.png)

The usage of `SplitFluentWindow` is exactly the same as [FluentWindow](#fluentwindow).

## [MSFluentWindow](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/window/fluent_window/index.html#)


![MSFluentWindow](/img/components/fluent_window/MSFluentWindow.png)

`MSFluentWindow` encapsulates `NavigationBar` and stackable components, making it very convenient to create multi-interface windows.

Just call the `addSubInterface()` method to add a sub-interface (you must first set the object name for the sub-interface before you can call this method):

```python
def addSubInterface(
    self,
    interface: QWidget,
    icon: FluentIconBase | QIcon | str,
    text: str,
    selectedIcon: FluentIconBase | QIcon | str = None,
    position=NavigationItemPosition.TOP,
    isTransparent=False
)
```

Each parameter is explained as follows:
* `interface`: The sub-interface to be added
* `icon`: Sidebar menu item icon
* `text`: Sidebar menu item text
* `selectedIcon`: Icon of the sidebar menu item in the selected state
* `position`: Position of the sidebar menu item
* `isTransparent`: Whether to use a transparent background

Here is a simple example, for more complex examples see [Card Example](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/blob/master/examples/view/card_widget/demo.py):

```python
from qfluentwidgets import (NavigationItemPosition, MessageBox, setTheme, Theme, MSFluentWindow,
                            NavigationAvatarWidget, qrouter, SubtitleLabel, setFont)
from qfluentwidgets import FluentIcon as FIF


class Widget(QFrame):

    def __init__(self, text: str, parent=None):
        super().__init__(parent=parent)
        self.label = SubtitleLabel(text, self)
        self.hBoxLayout = QHBoxLayout(self)

        setFont(self.label, 24)
        self.label.setAlignment(Qt.AlignCenter)
        self.hBoxLayout.addWidget(self.label, 1, Qt.AlignCenter)
        self.setObjectName(text.replace(' ', '-'))



class Window(MSFluentWindow):

    def __init__(self):
        super().__init__()

        # create sub interface
        self.homeInterface = Widget('Home Interface', self)
        self.appInterface = Widget('Application Interface', self)
        self.videoInterface = Widget('Video Interface', self)
        self.libraryInterface = Widget('library Interface', self)

        self.initNavigation()
        self.initWindow()

    def initNavigation(self):
        self.addSubInterface(self.homeInterface, FIF.HOME, 'Home', FIF.HOME_FILL)
        self.addSubInterface(self.appInterface, FIF.APPLICATION, 'Application')
        self.addSubInterface(self.videoInterface, FIF.VIDEO, 'Video')

        self.addSubInterface(self.libraryInterface, FIF.BOOK_SHELF, 'Library', FIF.LIBRARY_FILL, NavigationItemPosition.BOTTOM)

        # Add custom navigation components
        self.navigationInterface.addItem(
            routeKey='Help',
            icon=FIF.HELP,
            text='Help',
            onClick=self.showMessageBox,
            selectable=False,
            position=NavigationItemPosition.BOTTOM,
        )

        self.navigationInterface.setCurrentItem(self.homeInterface.objectName())

    def initWindow(self):
        self.resize(900, 700)
        self.setWindowIcon(QIcon(':/qfluentwidgets/images/logo.png'))
        self.setWindowTitle('PyQt-Fluent-Widgets')

        desktop = QApplication.desktop().availableGeometry()
        w, h = desktop.width(), desktop.height()
        self.move(w//2 - self.width()//2, h//2 - self.height()//2)

    def showMessageBox(self):
        w = MessageBox(
            'Support the author🥰',
            'Personal development is not easy, if this project has helped you, you can consider buying the author a happy water🥤. Your support is the motivation for the author to develop and maintain the project🚀',
            self
        )
        w.yesButton.setText('Here you go, bro')
        w.cancelButton.setText('Next time for sure')

        if w.exec():
            QDesktopServices.openUrl(QUrl("https://qfluentwidgets.com/price/"))


if __name__ == '__main__':
    app = QApplication(sys.argv)
    w = Window()
    w.show()
    app.exec()
```

### [FilledFluentWindow](https://qfluentwidgets.com/price)

![FilledFluentWindow](/img/components/fluent_window/FilledFluentWindow.png)

`FilledFluentWindow` provides side navigation functionality.

### [TopFluentWindow](https://qfluentwidgets.com/price)

![TopFluentWindow](/img/components/topnavigationbar/TopNavigationBar.png)

`TopFluentWindow` provides top navigation functionality.