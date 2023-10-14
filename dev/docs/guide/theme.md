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

`toggleTheme()` is used to toggle the theme mode. When the theme changes, `qconfig` will emit the `themeChanged` signal.

If you want to automatically switch the interface style when the theme changes, you can inherit `StyleSheetBase` and override the `path()` method. Suppose you have a `Window` class and its qss file paths are `qss/light/window.qss` and `qss/dark/window.qss`, the code can be written like this:

:::: code-group
::: code-group-item Python
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
:::
::: code-group-item C++
```cpp
#include <FStyleSheet>
#include <QMetaEnum>

class StyleSheet : public qfluentwidgets::StyleSheetBase
{
   Q_OBJECT

public:
   enum Name { Window = 0 };
   Q_ENUM(Name)

   explicit StyleSheet(Name name, QObject* parent = nullptr) : StyleSheetBase(parent), name_(name) {}

   virtual QString path(qfluentwidgets::Theme theme = qfluentwidgets::Theme::Auto) override
   {
      QString tn;
      if (t == Theme::Auto) {
         tn = isDarkTheme() ? "dark" : "light";
      } else {
         tn = themeName(t).toLower();
      }

      QMetaEnum e = QMetaEnum::fromType<Name>();
      auto name = e.valueToKey(static_cast<int>(name_));
      return QString(":/gallery/qss/%1/%2.qss").arg(tn).arg(name);
   }

   static StyleSheet* applyTo(Name name, QWidget* widget, qfluentwidgets::Theme theme = qfluentwidgets::Theme::Auto)
   {
      auto s = new StyleSheet(name, widget);
      s->apply(widget, theme);
      return s;
   }

private:
   Name name_;
};

class Window: public QWidget
{
   Q_OBJECT

public:
   explicit Window(QWidget *parent = nullptr): QWidget(parent)
   {
      // apply style sheet to window
      StyleSheet::applyTo(StyleSheet::Window, this);
   }
};
```
:::
::::

## Customize style
If you are dissatisfied with the style of the built-in components and want to make minor adjustments to them, you can use `setCustomStyleSheet()` to add new styles based on the existing style. The function signature is as follows:

:::: code-group
::: code-group-item Python
```python
def setCustomStyleSheet(widget: QWidget, lightQss: str, darkQss: str) -> None
```
:::
::: code-group-item C++
```cpp
void setCustomStyleSheet(QWidget* widget, const QString& lightQss, const QString& darkQss);
```
:::
::::

where `widget` is the component that needs its style adjusted, `lightQss` and `darkQss` are the custom styles added for light/dark themes.

For example, let's adjust the border-radius of a `PushButton` to 10px:

:::: code-group
::: code-group-item Python
```python
button = PushButton('Button', self)

# add custom qss
qss = 'PushButton{border-radius: 10px}'
setCustomStyleSheet(button, qss, qss)
```
:::
::: code-group-item C++
```cpp
#include <FStyleSheet>

auto button = new PushButton("Button", this);

// add custom qss
QString qss = "PushButton{border-radius: 10px}";
qfluentwidgets::setCustomStyleSheet(button, qss, qss);
```
:::
::::

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