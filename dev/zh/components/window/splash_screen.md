---
title: 启动页面
date: 2024-03-14 13:52:00
permalink: /zh/pages/components/splashscreen/
---

### [SplashScreen](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/window/splash_screen/index.html)

![SplashScreen](/img/components/splash_screen/SplashScreen.png)

`SplashScreen` 可用作启动页面，显示 Logo 和标题栏。

使用方式如下：

```python
# coding:utf-8
from qfluentwidgets import SplashScreen
from qframelesswindow import FramelessWindow, StandardTitleBar


class Demo(FramelessWindow):

    def __init__(self):
        super().__init__()
        self.resize(700, 600)
        self.setWindowTitle('PyQt-Fluent-Widgets')
        self.setWindowIcon(QIcon(':/qfluentwidgets/images/logo.png'))

        # 1. 创建启动页面
        self.splashScreen = SplashScreen(self.windowIcon(), self)
        self.splashScreen.setIconSize(QSize(102, 102))

        # 2. 在创建其他子页面前先显示主界面
        self.show()

        # 3. 创建子界面
        self.createSubInterface()

        # 4. 隐藏启动页面
        self.splashScreen.finish()

    def createSubInterface(self):
        loop = QEventLoop(self)
        QTimer.singleShot(3000, loop.quit)
        loop.exec()


if __name__ == '__main__':
    app = QApplication(sys.argv)
    w = Demo()
    w.show()
    app.exec()
```

默认情况下 `SplashScreen` 的标题栏不显示图标和标题，可通过更换标题栏来设置图标和标题：
```python
from qframelesswindow import StandardTitleBar

titleBar = StandardTitleBar(self.splashScreen)
titleBar.setIcon(self.windowIcon())
titleBar.setTitle(self.windowTitle())
splashScreen.setTitleBar(titleBar)
```