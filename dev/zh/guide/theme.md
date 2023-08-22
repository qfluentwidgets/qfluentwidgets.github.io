---
title: 主题
date: 2023-08-17 17:31:30
permalink: /zh/pages/theme/
---

## 主题模式

`setTheme()` 函数用于切换 PyQt-Fluent-Widgets 全部组件的亮暗主题。该函数接受下述值：

- `Theme.LIGHT`：浅色主题
- `Theme.DARK`：深色主题
- `Theme.AUTO`：跟随系统主题。如果无法检测到系统的主题，将使用浅色主题。

当主题发生改变时，`qconfig` 会发出 `themeChanged` 信号。

如果想在主题发生改变时，自动切换界面的样式，可以继承 `StyleSheetBase` 类并重写 `path()` 方法。假设有一个 `MainWindow` 类，它的 qss 文件路径为 `app/resource/qss/light/main_window.qss` 和 `app/resource/qss/dark/main_window.qss`，那么代码可以这么写：

```python
from enum import Enum
from qfluentwidgets import StyleSheetBase, Theme, isDarkTheme, qconfig


class StyleSheet(StyleSheetBase, Enum):
    """ Style sheet  """

    MAIN_WINDOW = "main_window"

    def path(self, theme=Theme.AUTO):
        theme = qconfig.theme if theme == Theme.AUTO else theme
        return f"app/resource/qss/{theme.value.lower()}/{self.value}.qss"


class MainWindow(QWidget):

    def __init__(self, parent=None):
        super().__init__(parent=parent)

        # apply style sheet to main window
        StyleSheet.MAIN_WINDOW.apply(self)
```

## 主题色

`setThemeColor()` 函数用于修改全部组件的主题色。该函数接受三种类型的值：

- `QColor`
- `Qt.GlobalColor`
- `str`：十六进制颜色字符串或者颜色名字，比如 `#0065d5` 或者 `red`

当主题发生改变时，`qconfig` 管理的配置实例会发出 `themeColorChanged` 信号。