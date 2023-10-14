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

可以根据传入的主题或者颜色返回一个 `QIcon` 图标，只有在图标类型为 svg 图标时，`color` 参数才会起作用。下面给出一个示例：

:::: code-group
::: code-group-item Python
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
:::
::: code-group-item C++
```cpp
// 使用浅色主题图标
auto button = new ToolButton(FluentIcon(FluentIcon::Add).icon(Theme::Light))

// 使用深色主题图标
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


### 添加图标

如果想在切换主题时自动更换图标，可以继承 `FluentIconBase` 类并重写 `path()` 函数来给出不同主题下图标的路径。下面是一个示例：

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
        # getIconColor() 根据主题返回字符串 "white" 或者 "black"
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

    // 返回图标路径
    virtual QString path(qfluentwidgets::Theme theme = qfluentwidgets::Theme::Auto) override
    {
        return QString(":/gallery/images/icons/%1_%2.svg").arg(name()).arg(qfluentwidgets::getIconColor(theme));
    }

    // C++ 必须重写纯虚函数 `clone`
    virtual FluentIconBase* clone() override { return new MyFluentIcon(iconType_, parent()); }

    // 返回图标名称（可选）
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

之后就可以将 `MyFluentIcon` 实例作为参数传给需要图标的组件，比如：
:::: code-group
::: code-group-item Python
```python
from qfluentwidgets import ToolButton, toggleTheme

# 创建工具按钮
button = ToolButton(MyFluentIcon.ADD)

# 更换图标
button.setIcon(MyFluentIcon.CUT)

# 切换主题，图标也会跟着改变
button.clicked.connect(toggleTheme)
```
:::
::: code-group-item C++
```cpp
#include <FApp>
#include <FToolButton>

// 创建工具按钮
auto button = new ToolButton(new MyFluentIcon(MyFluentIcon::Add));

// 更换图标
button->setIcon(new MyFluentIcon(MyFluentIcon::Cut));

// 切换主题，图标也会跟着改变
connect(button, &ToolButton::clicked, this, [] { toggleTheme(); });
```
:::
::::