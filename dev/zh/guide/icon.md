---
title: 图标
date: 2023-08-17 17:35:27
permalink: /zh/pages/icon/
---

## 内置图标
QFluentWidgets 中的组件一般支持以下三种图标参数类型：
* `str`: 图标路径
* `QIcon`：Qt 图标
* `FluentIconBase`: 流畅图标抽象类

QFluentWidgets 提供的 `FluentIcon` 继承自 `FluentIconBase`, 包含数百个矢量图标，可以在 [gallery](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/releases/download/v1.1.6/PyQt-Fluent-Widgets-Gallery_v1.1.6_lite_windows_x64.zip) 示例的图标界面查看和搜索图标。
![IconInterface](/img/designer/IconInterface.jpg)


## 自定义图标
### 更改颜色
流畅图标基类提供了 `FluentIconBase.icon()` 方法:

```python
def icon(self, theme=Theme.AUTO, color: QColor = None) -> QIcon:
```


可以根据传入的主题或者颜色返回一个 `QIcon` 图标，只有在图标类型为 svg 图标时，`color` 参数才会起作用。下面给出一个示例：


```python
# 使用浅色主题图标
button = ToolButton(FluentIcon.ADD.icon(Theme.LIGHT))

# 使用深色主题图标
button = ToolButton(FluentIcon.ADD.icon(Theme.DARK))

# 使用颜色名称
button = ToolButton(FluentIcon.ADD.icon(color='red'))

# 使用十六进制字符串
button = ToolButton(FluentIcon.ADD.icon(color='#ff0000'))

# 使用 Qt.GlobalColor
button = ToolButton(FluentIcon.ADD.icon(color=Qt.red))

# 使用 QColor
button = ToolButton(FluentIcon.ADD.icon(color=QColor(255, 0, 0)))
```

流畅图标基类提供了 `FluentIconBase.colored()` 方法来自定义深色和浅色模式下的图标颜色：

```python
def colored(self, lightColor: QColor, darkColor: QColor) -> ColoredFluentIcon:
```

下述代码返回了一个浅色模式下为红色，深色模式下为蓝色的图标：

```python
icon = FluentIcon.ADD.colored(QColor(255, 0, 0), QColor(0, 0, 255))
button.setIcon(icon)
```



### 添加图标

如果想在切换主题时自动更换图标，可以继承 `FluentIconBase` 类并重写 `path()` 函数来给出不同主题下图标的路径。下面是一个示例：


```python
from enum import Enum

from qfluentwidgets import getIconColor, Theme, FluentIconBase


class MyFluentIcon(FluentIconBase, Enum):
    """ Custom icons """

    ADD = "Add"
    CUT = "Cut"
    COPY = "Copy"

    def path(self, theme=Theme.AUTO):
        # getIconColor() 根据主题返回字符串 "white" 或者 "black"
        return f':/icons/{self.value}_{getIconColor(theme)}.svg'
```


之后就可以将 `MyFluentIcon` 实例作为参数传给需要图标的组件，比如：

```python
from qfluentwidgets import ToolButton, toggleTheme

# 创建工具按钮
button = ToolButton(MyFluentIcon.ADD)

# 更换图标
button.setIcon(MyFluentIcon.CUT)

# 切换主题，图标也会跟着改变
button.clicked.connect(toggleTheme)
```


对于不支持 `FluentIconBase` 的类，比如只支持 `QIcon` 的 `QListWidgetItem`，可以调用 `FluentIconBase.qicon()` 返回一个能够自动切换主题的 `QIcon`。

### 视频教程
<div style="position: relative; padding: 30% 45%;">
    <iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="https://player.bilibili.com/player.html?cid=1141942975&aid=614116994&page=1&as_wide=1&high_quality=1&danmaku=0&autoplay=0" frameborder="no" scrolling="no" allowfullscreen="true"></iframe>
</div>