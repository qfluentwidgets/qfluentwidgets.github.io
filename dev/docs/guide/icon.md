---
title: Icon
date: 2023-08-17 17:35:27
permalink: /pages/icon/
---

## Built-in icons
Components in QFluentWidgets generally support the following three types of icon parameters:
* `str`: Icon path
* `QIcon`: Qt icon
* `FluentIconBase`: Fluent icon abstract class

The enumeration subclass `FluentIcon` contains hundreds of vector icons that are ready to be used, you can check them in the icon interface of [gallery app](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/releases/download/v1.1.6/PyQt-Fluent-Widgets-Gallery_v1.1.6_lite_windows_x64.zip).

![IconInterface](/img/designer/IconInterface.jpg)

## Customize icon

### Change color
`FluentIconBase` provide the `icon()` method:

```python
def icon(self, theme=Theme.AUTO, color: QColor = None) -> QIcon:
```


It will return `QIcon` instance according to the `theme` and `color`, the `color` parameter is available when the icon is svg format.


```python
# use light theme icon
button = ToolButton(FluentIcon.ADD.icon(Theme.LIGHT))

# use dark theme icon
button = ToolButton(FluentIcon.ADD.icon(Theme.DARK))

# use color name
button = ToolButton(FluentIcon.ADD.icon(color='red'))

# use hex color string
button = ToolButton(FluentIcon.ADD.icon(color='#ff0000'))

# use Qt.GlobalColor
button = ToolButton(FluentIcon.ADD.icon(color=Qt.red))

# use QColor
button = ToolButton(FluentIcon.ADD.icon(color=QColor(255, 0, 0)))
```


`FluentIconBase.colored()` can customize the icon color in light and dark modes:

```python
def colored(self, lightColor: QColor, darkColor: QColor) -> ColoredFluentIcon:
```

Create an icon that is red in light mode and blue in dark mode:

```python
icon = FluentIcon.ADD.colored(QColor(255, 0, 0), QColor(0, 0, 255))
button.setIcon(icon)
```


### Add icon
If you want to automatically change icons when switching themes, you can inherit the `FluentIconBase` class and override the `path()` function to provide the path of the icons for different themes. Here is an example:


```python
from enum import Enum

from qfluentwidgets import getIconColor, Theme, FluentIconBase


class MyFluentIcon(FluentIconBase, Enum):
    """ Custom icons """

    ADD = "Add"
    CUT = "Cut"
    COPY = "Copy"

    def path(self, theme=Theme.AUTO):
        # getIconColor() return "white" or "black" according to current theme
        return f':/icons/{self.value}_{getIconColor(theme)}.svg'
```

Then you can pass the instance of `MyFluentIcon` to the component which needs icon：

```python
from qfluentwidgets import ToolButton, toggleTheme

# create tool button
button = ToolButton(MyFluentIcon.ADD)

# change icon
button.setIcon(MyFluentIcon.CUT)

# toggle theme, and the icon will be changed
button.clicked.connect(toggleTheme)
```

For classes that do not support `FluentIconBase`, such as `QListWidgetItem` that only supports `QIcon`, you can call `FluentIconBase.qicon()` to return a `QIcon` that can automatically switch themes.