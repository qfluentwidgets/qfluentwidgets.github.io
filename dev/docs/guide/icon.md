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
:::: code-group
::: code-group-item Python
```python
def icon(self, theme=Theme.AUTO, color: QColor = None) -> QIcon:
```
:::
::: code-group-item C++
```cpp
QIcon icon(qfluentwidgets::Theme theme = qfluentwidgets::Theme::Auto, const QColor& color = QColor());
```
:::
::::

It will return `QIcon` instance according to the `theme` and `color`, the `color` parameter is available when the icon is svg format.

:::: code-group
::: code-group-item Python
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
:::
::: code-group-item C++
```cpp
// use light theme icon
auto button = new ToolButton(FluentIcon(FluentIcon::Add).icon(Theme::Light))

// use dark theme icon
auto button = new ToolButton(FluentIcon(FluentIcon::Add).icon(Theme::Dark))

// 使用颜色名称
auto button = new ToolButton(FluentIcon(FluentIcon::Add).icon(Theme::Auto, "red"))

// 使用十六进制字符串
auto button = new ToolButton(FluentIcon(FluentIcon::Add).icon(Theme::Auto, "#ff0000"))

// 使用 Qt::GlobalColor
auto button = new ToolButton(FluentIcon(FluentIcon::Add).icon(Theme::Auto, Qt::red))

// 使用 QColor
auto button = new ToolButton(FluentIcon(FluentIcon::Add).icon(Theme::Auto, QColor(255, 0, 0)))
```
:::
::::

### Add icon
If you want to automatically change icons when switching themes, you can inherit the `FluentIconBase` class and override the `path()` function to provide the path of the icons for different themes. Here is an example:

:::: code-group
::: code-group-item Python
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
:::
::: code-group-item C++
```cpp
#include <FIcon>
#include <QMetaEnum>

class MyFluentIcon : public qfluentwidgets::FluentIconBase
{
    Q_OBJECT
public:
    enum Type { Add = 0, Cut, Copy };
    Q_ENUM(Type)

    explicit MyFluentIcon(Type iconType, QObject* parent = nullptr) : FluentIconBase(parent), iconType_(iconType) {}

    // Return icon path
    virtual QString path(qfluentwidgets::Theme theme = qfluentwidgets::Theme::Auto) override
    {
        return QString(":/gallery/images/icons/%1_%2.svg").arg(name()).arg(qfluentwidgets::getIconColor(theme));
    }

    // C++ must implement pure virtual method `clone`
    virtual FluentIconBase* clone() override { return new MyFluentIcon(iconType_, parent()); }

    // Return the name of icon (optional)
    virtual QString name()
    {
        QMetaEnum e = QMetaEnum::fromType<Type>();
        return e.valueToKey(static_cast<int>(iconType_));
    }

private:
    Type iconType_ = Type::Add;
};
```
:::
::::

Then you can pass the instance of `MyFluentIcon` to the component which needs icon：
:::: code-group
::: code-group-item Python
```python
from qfluentwidgets import ToolButton, toggleTheme

# create tool button
button = ToolButton(MyFluentIcon.ADD)

# change icon
button.setIcon(MyFluentIcon.CUT)

# toggle theme, and the icon will be changed
button.clicked.connect(toggleTheme)
```
:::
::: code-group-item C++
```cpp
#include <FApp>
#include <FToolButton>

// create tool button
auto button = new ToolButton(new MyFluentIcon(MyFluentIcon::Add));

// change icon
button->setIcon(new MyFluentIcon(MyFluentIcon::Cut));

// toggle theme and the icon will be changed at the same time
connect(button, &ToolButton::clicked, this, [] { toggleTheme(); });
```
:::
::::