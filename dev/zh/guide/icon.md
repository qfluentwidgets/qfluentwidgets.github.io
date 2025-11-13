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


## 适配 Qt 原生组件
对于不支持 `FluentIconBase` 的类，比如只支持 `QIcon` 的 `QListWidgetItem`，可以调用 `FluentIconBase.qicon()` 返回一个能够自动切换主题的 `QIcon`。


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

#### SVG 图标
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

#### 图标字体

组件库支持使用图标字体，可以继承 `FluentFontIconBase` 类并重写 `path()` 函数来给出图标字体的路径。下面是一个示例：

```python
class PhotoFontIcon(FluentFontIconBase):
    """ Custom icon font icon """

    def path(self, theme=Theme.AUTO):
        return "/path/to/font.ttf"

    def iconNameMapPath(self):
        """ 如果想使用 `fromName` 来创建图标，需要重写此方法 """
        return "/path/to/fontNameMap.json"
```

`iconNameMapPath()` 给出了图标名称到图标码点的映射表文件路径，如果不想通过 `FluentFontIconBase.fromName()` 来创建图标，则无需重写此函数。映射表文件的格式如下：

```json
{
    "cloud": "\ue753",
    "filter": "\ue71c",
    "smile": "\ue76e"
}
```

下面是图标字体的使用示例：

```python
# 使用码点创建图标
button = ToolButton(PhotoFontIcon("\ue77b"))

# 使用名称来创建图标
button = ToolButton(PhotoFontIcon.fromName("smile"))

# 自定义图标颜色
button = ToolButton(PhotoFontIcon.fromName("cloud").colored("#275EFF", Qt.GlobalColor.darkCyan))
```


### 视频教程
<div style="padding:56.25% 0 0 0;position:relative;">
    <iframe src="https://player.vimeo.com/video/1061710278?h=d643e2b0da&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="PyQt-Fluent-Widgets 自定义图标的正确姿势">
    </iframe>
</div>