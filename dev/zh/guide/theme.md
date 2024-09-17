---
title: 主题
date: 2023-08-17 17:31:30
permalink: /zh/pages/theme/
---

## 主题模式

`setTheme()` 函数用于切换 qfluentwidgets 全部组件的亮暗主题。该函数接受下述值：

- `Theme.LIGHT`：浅色主题
- `Theme.DARK`：深色主题
- `Theme.AUTO`：跟随系统主题。如果无法检测到系统的主题，将使用浅色主题。

使用 `toggleTheme()` 切换亮暗主题，当主题发生改变时，`qconfig` 会发出 `themeChanged` 信号。

如果想在主题发生改变时，自动切换界面的样式，可以继承 `StyleSheetBase` 类并重写 `path()` 方法。假设有一个 `Window` 类，它的 qss 文件路径为 `qss/light/window.qss` 和 `qss/dark/window.qss`，那么代码可以这么写：

```python
from enum import Enum
from qfluentwidgets import StyleSheetBase, Theme, isDarkTheme, qconfig


class StyleSheet(StyleSheetBase, Enum):
    """ Style sheet  """

    WINDOW = "window"

    def path(self, theme=Theme.AUTO):
        theme = qconfig.theme if theme == Theme.AUTO else theme
        return f"qss/{theme.value.lower()}/{self.value}.qss"


class Window(QWidget):

    def __init__(self, parent=None):
        super().__init__(parent=parent)

        # apply style sheet to window
        StyleSheet.WINDOW.apply(self)
```

### 跟随系统主题

qfluentwidgets 提供了系统主题监听器线程 `SystemThemeListener`，可用于跟随系统主题。

下面是一个简单的使用示例：

```python
from qfluentwidgets import FluentWindow, SystemThemeListener, isDarkTheme


class MainWindow(FluentWindow):

    def __init__(self):
        super().__init__()

        # 创建主题监听器
        self.themeListener = SystemThemeListener(self)

        # 创建并添加子界面
        # ...

        # 启动监听器
        self.themeListener.start()

    def closeEvent(self, e):
        # 停止监听器线程
        self.themeListener.terminate()
        self.themeListener.deleteLater()
        super().closeEvent(e)

    def _onThemeChangedFinished(self):
        super()._onThemeChangedFinished()

        # 云母特效启用时需要增加重试机制
        if self.isMicaEffectEnabled():
            QTimer.singleShot(100, lambda: self.windowEffect.setMicaEffect(self.winId(), isDarkTheme()))

```

## 自定义样式
如果你对内置组件的样式感到不满，希望对其进行微调，可以使用 `setCustomStyleSheet()` 在原有样式的基础上添加新样式，该函数的签名如下：
```python
def setCustomStyleSheet(widget: QWidget, lightQss: str, darkQss: str) -> None
```


其中 `widget` 是需要调整样式的组件，`lightQss` 和 `darkQss` 是浅/深色主题下 **添加** 的自定义样式。

举个例子，将 `PushButton` 的圆角调成 10px：


```python
button = PushButton('Button', self)

# 添加自定义样式表
qss = 'PushButton{border-radius: 10px}'
setCustomStyleSheet(button, qss, qss)
```


在 QtDesigner 中，你可以通过新增动态属性来达到自定义样式的目的，操作步骤如下：

1. 添加字符串类型的动态属性

   ![添加字符串动态属性](/img/designer/Add_Dynamic_Property.png)

2. 在创建动态属性对话框中将属性名设置为 `lightCustomQss`，深色模式就设置为 `darkCustomQss`

   ![设置属性名](/img/designer/Add_Light_Qss_Dialog.png)

3. 点击属性旁边的 `...` 按钮，在编辑文本对话框中编辑 `lightCustomQss`

   ![设置属性名](/img/designer/Edit_Light_Qss_Dialog.png)


## 主题色

`themeColor()` 返回主题色，`setThemeColor()` 用于修改全部组件的主题色。该函数接受三种类型的值：

- `QColor`
- `Qt.GlobalColor`
- `str`：十六进制颜色字符串或者颜色名字，比如 `#0065d5` 或者 `red`

当主题色发生改变时，`qconfig` 管理的配置实例会发出 `themeColorChanged` 信号。

### 系统主题色
`qframelesswindow` v0.4.3 及以上版本提供了获取 Windows 和 macOS 系统主题色的接口，可搭配 `setThemeColor()` 使用：
```python
import sys
from qframelesswindow.utils import getSystemAccentColor

# 只能获取 Windows 和 macOS 的主题色
if sys.platform in ["win32", "darwin"]:
   setThemeColor(getSystemAccentColor(), save=False)
```