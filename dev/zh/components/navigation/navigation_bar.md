---
title: 侧边导航
date: 2023-08-17 19:00:22
permalink: /zh/pages/components/navigationbar/
---

## [NavigationInterface](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/navigation/navigation_interface/index.html#qfluentwidgets.components.navigation.navigation_interface.NavigationInterface)

::: tip 提示
只有需要高度定制侧边栏时才推荐直接使用这个类，否则请使用 [FluentWindow](/zh/pages/components/fluentwindow/)。
:::

### 结构

QFluentWidgets 提供侧边导航类 `NavigationInterface`，可以将它和 `QStackWidget` 放在 `QHBoxLayout` 中，实现多子界面跳转，示例程序参见 [navigation2](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/tree/master/examples/navigation/navigation2/demo.py)。

![Structure](https://pyqt-fluent-widgets.readthedocs.io/en/latest/_images/NavigationInterface_Structure.jpg)

`NavigationInterface` 内部使用 `NavigationPanel` 来放置导航菜单项。所有导航菜单项都需要继承自 `NavigationWidget`，可以调用 `NavigationInterface.addWidget()` 或者 `NavigationPanel.addWidget()` 将导航项添加到导航界面中。

QFluentWidgets 实现了子类 `NavigationTreeWidget` ，同时提供了一个便捷的方法 `NavigationInterface.addItem()` 来创建多级菜单项并将其到导航界面上。

如果希望自定义一个导航项，可以创建 `NavigationWidget` 的子类并实现它的 `paintEvent()` 和 `setCompacted()`（可选） 方法。下面是一个简单例子，展示了如何定义头像导航项：

```python
from qfluentwidgets import NavigationWidget


class AvatarWidget(NavigationWidget):
    """ Avatar widget """

    def __init__(self, parent=None):
        super().__init__(isSelectable=False, parent=parent)
        self.avatar = QImage('resource/shoko.png').scaled(
            24, 24, Qt.KeepAspectRatio, Qt.SmoothTransformation)

    def paintEvent(self, e):
        painter = QPainter(self)
        painter.setRenderHints(
            QPainter.SmoothPixmapTransform | QPainter.Antialiasing)

        painter.setPen(Qt.NoPen)

        if self.isPressed:
            painter.setOpacity(0.7)

        # draw background
        if self.isEnter:
            c = 255 if isDarkTheme() else 0
            painter.setBrush(QColor(c, c, c, 10))
            painter.drawRoundedRect(self.rect(), 5, 5)

        # draw avatar
        painter.setBrush(QBrush(self.avatar))
        painter.translate(8, 6)
        painter.drawEllipse(0, 0, 24, 24)
        painter.translate(-8, -6)

        if not self.isCompacted:
            painter.setPen(Qt.white if isDarkTheme() else Qt.black)
            font = QFont('Segoe UI')
            font.setPixelSize(14)
            painter.setFont(font)
            painter.drawText(QRect(44, 0, 255, 36), Qt.AlignVCenter, 'zhiyiYo')
```


现在让我们看看 `addWidget()` 方法的各个参数：


```python
def addWidget(
    self,
    routeKey: str,
    widget: NavigationWidget,
    onClick=None,
    position=NavigationItemPosition.TOP,
    tooltip: str = None,
    parentRouteKey: str = None
)
```


可以看到，这个方法需要四个参数：

- `routeKey`：路由键，被添加到导航界面上的 `widget` 的唯一标识。如果将 `QStackWidget` 里面的子界面视为网页，`routeKey` 就是这个子界面的 URL。当用户切换子界面时，`NavigationPanel` 会将一个路由键添加到导航历史中。导航界面上的后退按钮被点击时，位于导航历史栈顶的路由键会被弹出，如果此时导航历史不为空，就可以切换到栈顶的路由键对应的子界面，否则就切换到 `defaultRouteKey` 对应的子界面，因此在运行 app 之前需要调用 `NavigationInterface.setDefaultRouteKey()` 设置一下默认子界面。
- `widget`：被添加到导航界面上的导航项。
- `onClick`：点击导航项时触发的槽函数。如果想在点击导航项时切换子界面，一种推荐的写法是将槽函数写作：`lambda: self.stackWidget.setCurrentWidget(self.xxxInterface)`。
- `position`：导航项的位置。可以是下述值中的一种：
  - `NavigationItemPosition.TOP`：添加到导航面板的顶部
  - `NavigationItemPosition.SCROLL`：添加到导航面板的滚动区域。当导航菜单项太多时，滚动区域中导航项可以被滚动
  - `NavigationItemPosition.BOTTOM`: 添加到导航面板的底部
- `tooltip`：菜单项的工具提示
- `parentRouteKey`: 父菜单项的路由键，父菜单项对应的小部件必须是 `NavigationTreeWidgetBase` 子类的实例

### 显示模式

导航面板有以下四种显示模式：

- `NavigationDisplayMode.EXPAND`：左侧面板完全展开（当窗口的宽度大于等于 1008px 时可用）
- `NavigationDisplayMode.COMPACT`：只在导航面板上显示图标，所有导航项都处于折叠状态（当窗口宽度小于 1007px 时默认使用这种显示模式）。
- `NavigationDisplayMode.MENU`：展开的导航菜单（当窗口窗口小于 1007px 并点击菜单按钮时使用此显示模式）
- `NavigationDisplayMode.MINIMAL`：只显示一个菜单按钮。在这种显示模式下，应该自己创建并管理菜单按钮和 `NavigationPanel`，然后将菜单按钮的点击信号连接到 `NavigationPanel.toggle()` 函数上，具体写法可以参见 [navigation3](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/tree/master/examples/navigation/navigation3)。

如果调用了 `NavigationInterface.setExpandWidth()`，上述的窗口宽度阈值（1008px）将相应进行调整。

### 更多示例

下面是另外一种风格的导航界面，对应的示例程序为 [navigation](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/tree/master/examples/navigation/navigation1/demo.py)。

![](https://pyqt-fluent-widgets.readthedocs.io/en/latest/_images/NavigationInterface.jpg)

迷你导航界面如下图所示，可以在 [navigation3](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/tree/master/examples/navigation/navigation3) 获取完整代码。
![](https://pyqt-fluent-widgets.readthedocs.io/en/latest/_images/NavigationInterface_Minimal.jpg)
