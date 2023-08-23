---
title: Theme
date: 2023-08-17 17:31:30
permalink: /pages/theme/
---

## Theme mode

You can use the `setTheme()` method to switch the light/dark theme of PyQt-Fluent-Widgets. The parameter of `setTheme()` accepts the following three values:
* `Theme.LIGHT`: Light theme
* `Theme.DARK`: Dark theme
* `Theme.AUTO`: Follow system theme. If the system theme cannot be detected, the light theme will be used.

When the theme changes, `qconfig` will emit the `themeChanged` signal.

If you want to automatically switch the interface style when the theme changes, you can inherit `StyleSheetBase` and override the `path()` method. Suppose you have a `MainWindow` class and its qss file paths are `app/resource/qss/light/main_window.qss` and `app/resource/qss/dark/main_window.qss`, the code can be written like this:

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

## Customize style
If you are dissatisfied with the style of the built-in components and want to make minor adjustments to them, you can use `setCustomStyleSheet()` to add new styles based on the existing style. The function signature is as follows:
```python
def setCustomStyleSheet(widget: QWidget, lightQss: str, darkQss: str) -> None
```

where `widget` is the component that needs its style adjusted, `lightQss` and `darkQss` are the custom styles added for light/dark themes.

For example, let's adjust the border-radius of a `PushButton` to 10px:
```python
button = PushButton('Button', self)

# add custom qss
qss = 'PushButton{border-radius: 10px}'
setCustomStyleSheet(button, qss, qss)
```
In Qt Designer, you can achieve custom styling by adding dynamic properties. Here are the steps:

1. Add a dynamic property of type "String".

   ![Add String Dynamic Property](/img/designer/Add_Dynamic_Property.png)

2. In the "Create Dynamic Property" dialog, set the property name as `lightCustomQss` for the light mode and `darkCustomQss` for the dark mode.

   ![Set name](/img/designer/Add_Light_Qss_Dialog.png)

3. Click the `...` button next to the property and edit `lightCustomQss` in the "Edit Text" dialog.

   ![Set qss](/img/designer/Edit_Light_Qss_Dialog.png)


## Theme color
You can use `setThemeColor()` method to change the theme color of PyQt-Fluent-Widgets. This method accepts the following three types of parameters:
* `QColor`
* `Qt.GlobalColor`
* `str`: Hex color strings or color names, such as `#0065d5` or `red`.

When the theme color changes, the config instance managed by `qconfig` will emit the `themeColorChanged` signal.