---
title: Splash Screen
date: 2024-03-14 13:52:00
permalink: /pages/components/splashscreen/
---

### [SplashScreen](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/window/splash_screen/index.html)

![SplashScreen](/img/components/splash_screen/SplashScreen.png)

`SplashScreen` can be used as a launch page, displaying the Logo and title bar.

The usage is as follows:

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

        # 1. Create a splash screen
        self.splashScreen = SplashScreen(self.windowIcon(), self)
        self.splashScreen.setIconSize(QSize(102, 102))

        # 2. Show the main interface before creating other sub-interfaces
        self.show()

        # 3. Create sub-interfaces
        self.createSubInterface()

        # 4. Hide the splash screen
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


By default, the `SplashScreen` title bar does not display an icon and title. You can set the icon and title by replacing the title bar:
```python
from qframelesswindow import StandardTitleBar

titleBar = StandardTitleBar(self.splashScreen)
titleBar.setIcon(self.windowIcon())
titleBar.setTitle(self.windowTitle())
splashScreen.setTitleBar(titleBar)
```