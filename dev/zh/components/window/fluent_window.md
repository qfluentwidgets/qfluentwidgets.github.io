---
title: 流畅窗口
date: 2024-03-14 13:52:00
permalink: /zh/pages/components/fluentwindow/
---

## [FluentWindow](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/window/fluent_window/index.html#)

![FluentWindow](/img/components/fluent_window/FluentWindow.png)

`FluentWindow` 对侧边导航栏和层叠组件进行了封装，使用这个类可以十分方便地创建多界面窗口。

### 添加子界面
只需调用 `addSubInterface()` 方法就能完成子界面的添加：

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

各个参数解释如下：
* `interface`: 需要添加的子界面
* `icon`：侧边栏菜单项图标
* `text`：侧边栏菜单项文本
* `position`：侧边栏菜单项的位置
* `parent`：侧边栏父菜单项对应的子界面

::: warning 警告
调用 `addSubInterface()` 之前必须给子界面设置全局唯一的对象名作为路由键，否则后退功能会出问题，同时侧边栏看不到子界面对应的菜单项。
如果你在界面的左上角看到奇怪的东西，说明忘了调用 `addSubInterface()` 添加某个子界面
:::

下面是个简单的例子，更加复杂的多子界面示例见 [视频教程](https://www.bilibili.com/video/BV1Uu411j7AV)：

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

        # 必须给子界面设置全局唯一的对象名
        self.setObjectName(text.replace(' ', '-'))


class Window(FluentWindow):
    """ 主界面 """

    def __init__(self):
        super().__init__()

        # 创建子界面，实际使用时将 Widget 换成自己的子界面
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


### 切换界面

`FluentWindow` 提供了切换当前界面的方法，`interface` 为待切换的子界面：
```python
def switchTo(self, interface: QWidget) -> None
```

`FluentWindow` 内部使用 `StackedWidget` 来存放子界面，切换当前界面时 `StackedWidget` 会发出 `currentChanged(index: int)` 信号：

```python
self.stackedWidget.currentChanged.connect(lambda: print(self.stackedWidget.currentWidget()))
```


### 定制化侧边栏
调整展开状态下侧边导航的宽度：
```python
self.navigationInterface.setExpandWidth(300)
```

默认情况下侧边导航为收缩状态，当窗口宽度超过阈值时才会展开，如果希望禁用收缩并一直保持展开状态：
```python
# 这行代码必须在 setExpandWidth() 后面调用
self.navigationInterface.setCollapsible(False)
```

如果不想禁用收缩，但是希望窗口创建之后侧边栏是展开的：
```python
self.resize(900, 700)

# 需要设置允许侧边导航展开的最小窗口宽度
self.navigationInterface.setMinimumExpandWidth(900)

# 展开导航栏
self.navigationInterface.expand(useAni=False)
```

### 定制化标题栏

`FluentWindow` 使用的是 `qframelesswindow` 库提供的自定义标题栏，对应 `titleBar` 属性。标题栏使用水平布局 `hBoxLayout`，内部组件如下：
* `minBtn`：最小化按钮
* `maxBtn`：最大化按钮
* `closeBtn`：关闭按钮
* `iconLabel`：图标标签
* `titleLabel`：标题标签

如需隐藏最大化按钮并禁用标题栏双击最大化功能：
```python
self.titleBar.maxBtn.hide()
self.titleBar.setDoubleClickEnabled(False)
```


### 自定义背景色
`FluentWindow` 在云母特效未启用的情况下，浅色模式的背景为淡蓝色，深色模式为深灰色。可调用 `setCustomBackgroundColor()` 来自定义背景色：

```python
self.setCustomBackgroundColor(QColor(242, 242, 242), QColor(25, 33, 42))
```


### 背景失效解决办法
在 Win11 系统下，`FluentWindow` 默认启用了云母特效，如果窗口中使用了 `QWebEngineView` 或者 `QOpenGLWidget`，会导致窗口背景特效失效，同时圆角和阴影也会消失。

下述例子演示了如何正确地在 `FluentWindow` 中使用 Web 引擎；
```python
from qfluentwidgets import SplitFluentWindow, FluentIcon
from qframelesswindow.webengine import FramelessWebEngineView


class Widget(QFrame):

    def __init__(self, parent=None):
        super().__init__(parent=parent)
        self.setObjectName("homeInterface")

        # 1. 将 QWebEngineView 替换成 FramelessWebEngineView
        self.webView = FramelessWebEngineView(self)
        self.webView.load(QUrl("https://www.baidu.com/"))

        self.vBoxLayout = QVBoxLayout(self)
        self.vBoxLayout.setContentsMargins(0, 48, 0, 0)
        self.vBoxLayout.addWidget(self.webView)


class Window(SplitFluentWindow):

    def __init__(self):
        super().__init__()

        # 创建并添加子界面
        self.homeInterface = Widget(self)
        self.addSubInterface(self.homeInterface, FluentIcon.HOME, "Home")

        # 初始化窗口
        self.resize(900, 700)
        self.setWindowIcon(QIcon(':/qfluentwidgets/images/logo.png'))
        self.setWindowTitle('PyQt-Fluent-Widgets')


if __name__ == '__main__':
    app = QApplication(sys.argv)
    w = Window()
    w.show()

    # 2. 重新启用云母特效
    w.setMicaEffectEnabled(True)

    app.exec()
```

对于 `QOpenGLWidget`，需要在主界面的构造函数中强制调用 `FluentWindow.updateFrameless()` 并在显示主界面后重新启用云母特效。

## [SplitFluentWindow](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/window/fluent_window/index.html#)

![SplitFluentWindow](/img/components/fluent_window/SplitFluentWindow.png)

`SplitFluentWindow` 使用方式和 [FluentWindow](#fluentwindow) 完全相同。


## [MSFluentWindow](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/window/fluent_window/index.html#)

![MSFluentWindow](/img/components/fluent_window/MSFluentWindow.png)

`MSFluentWindow` 对 `NavigationBar` 和层叠组件进行了封装，使用这个类可以十分方便地创建多界面窗口，使用方式和 [FluentWindow](#fluentwindow) 相似。

只需调用 `addSubInterface()` 方法就能完成子界面的添加（必须先给子界面设置对象名才能调用此方法）：

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

各个参数解释如下：
* `interface`: 需要添加的子界面
* `icon`：侧边栏菜单项图标
* `text`：侧边栏菜单项文本
* `selectedIcon`：侧边栏菜单项选中状态下的图标
* `position`：侧边栏菜单项的位置
* `isTransparent`：是否使用透明背景

下面是个简单的例子，更加复杂的示例见 [卡片例子](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/blob/master/examples/view/card_widget/demo.py)：

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
        self.addSubInterface(self.homeInterface, FIF.HOME, '主页', FIF.HOME_FILL)
        self.addSubInterface(self.appInterface, FIF.APPLICATION, '应用')
        self.addSubInterface(self.videoInterface, FIF.VIDEO, '视频')

        self.addSubInterface(self.libraryInterface, FIF.BOOK_SHELF, '库', FIF.LIBRARY_FILL, NavigationItemPosition.BOTTOM)

        # 添加自定义导航组件
        self.navigationInterface.addItem(
            routeKey='Help',
            icon=FIF.HELP,
            text='帮助',
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
            '支持作者🥰',
            '个人开发不易，如果这个项目帮助到了您，可以考虑请作者喝一瓶快乐水🥤。您的支持就是作者开发和维护项目的动力🚀',
            self
        )
        w.yesButton.setText('来啦老弟')
        w.cancelButton.setText('下次一定')

        if w.exec():
            QDesktopServices.openUrl(QUrl("https://qfluentwidgets.com/zh/price/"))


if __name__ == '__main__':
    app = QApplication(sys.argv)
    w = Window()
    w.show()
    app.exec()
```

### [FilledFluentWindow](https://qfluentwidgets.com/zh/price)

![FilledFluentWindow](/img/components/fluent_window/FilledFluentWindow.png)

`FilledFluentWindow` 提供了侧边导航功能。

### [TopFluentWindow](https://qfluentwidgets.com/zh/price)

![TopFluentWindow](/img/components/topnavigationbar/TopNavigationBar.png)

`TopFluentWindow` 提供了顶部导航功能。
