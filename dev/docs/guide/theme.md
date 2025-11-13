---
title: Theme
date: 2023-08-17 17:31:30
permalink: /pages/theme/
---

## Switching Themes

`setTheme()` is used to switch the light/dark theme for all components of QFluentWidgets. This method accepts the following values:

- `Theme.LIGHT`: Light theme
- `Theme.DARK`: Dark theme
- `Theme.AUTO`: Follow the system theme. If the system theme cannot be detected, the light theme will be used.

When the theme changes, `qconfig` emits a `themeChanged` signal. QFluentWidgets provides the `toggleTheme()` function for quickly switching between light and dark themes.

## Fluent Style Sheet

If you want the interface styles to switch automatically when the theme changes, you can inherit the `StyleSheetBase` class and override the `path()` method. The following code implements a `Window` class that can automatically switch the background color. Its QSS file paths are `qss/light/window.qss` and `qss/dark/window.qss`:

```python
from enum import Enum
from qfluentwidgets import StyleSheetBase, Theme, isDarkTheme, qconfig


class StyleSheet(StyleSheetBase, Enum):
    """ Stylesheet """

    WINDOW = "window"

    def path(self, theme=Theme.AUTO):
        theme = qconfig.theme if theme == Theme.AUTO else theme
        return f"qss/{theme.value.lower()}/{self.value}.qss"


class Window(QWidget):

    def __init__(self, parent=None):
        super().__init__(parent=parent)

        self.label = QLabel("Label", self)

        # Apply stylesheet to window
        StyleSheet.WINDOW.apply(self)
```

Stylesheet files:

* Light mode `qss/light/window.qss`

    ```css
    Window {
        background-color: rgb(249, 249, 249);
    }

    Window>QLabel {
        color: --ThemeColorPrimary;   /* Use the theme color of qfluentwidgets */
        font: 14px --FontFamilies;    /* Use the font families of qfluentwidgets */
    }
    ```

* Dark mode `qss/dark/window.qss`

    ```css
    Window {
        background-color: rgb(32, 32, 32);
    }

    Window>QLabel {
        color: --ThemeColorPrimary;
        font: 14px --FontFamilies;
    }
    ```

The stylesheet supports the following color placeholders:

* `--ThemeColorPrimary`
* `--ThemeColorLight1`
* `--ThemeColorLight2`
* `--ThemeColorLight3`
* `--ThemeColorDark1`
* `--ThemeColorDark2`
* `--ThemeColorDark3`
* `--FontFamilies`


### Follow system theme

qfluentwidgets provides a system theme listener thread called `SystemThemeListener`, which can be used to follow the system theme.

Here is a simple usage example:

```python
from qfluentwidgets import FluentWindow, SystemThemeListener, isDarkTheme


class MainWindow(FluentWindow):

    def __init__(self):
        super().__init__()

        # Create theme listener
        self.themeListener = SystemThemeListener(self)

        # Create and add sub interfaces
        # ...

        # Start the listener
        self.themeListener.start()

    def closeEvent(self, e):
        # Stop the listener thread
        self.themeListener.terminate()
        self.themeListener.deleteLater()
        super().closeEvent(e)

    def _onThemeChangedFinished(self):
        super()._onThemeChangedFinished()

        # Retry mechanism needed when mica effect is enabled
        if self.isMicaEffectEnabled():
            QTimer.singleShot(100, lambda: self.windowEffect.setMicaEffect(self.winId(), isDarkTheme()))
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
`themeColor()` returns current theme color, and you can use `setThemeColor()` method to change the theme color of QFluentWidgets. This method accepts the following three types of parameters:
* `QColor`
* `Qt.GlobalColor`
* `str`: Hex color strings or color names, such as `#0065d5` or `red`.

When the theme color changes, the config instance managed by `qconfig` will emit the `themeColorChanged` signal.

### System accent color

`qframelesswindow` v0.4.3 and above versions provide an api to retrieve the Windows and macOS system accent colors, which can be used with `setThemeColor()`:

```python
import sys
from qframelesswindow.utils import getSystemAccentColor

# Can only retrieve the system accent color on Windows and macOS
if sys.platform in ["win32", "darwin"]:
   setThemeColor(getSystemAccentColor(), save=False)
```

## Font

qfluentwidgets v1.9.0 and above support calling `setFontFamilies()` to customize the font used by the component library. Use `fontFamilies()` to get the current font. The default font families are `['Segoe UI', 'Microsoft YaHei', 'PingFang SC']`.