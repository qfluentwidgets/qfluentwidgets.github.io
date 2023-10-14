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

使用 `toggleTheme()` 切换亮暗主题，当主题发生改变时，`qconfig` 会发出 `themeChanged` 信号。

如果想在主题发生改变时，自动切换界面的样式，可以继承 `StyleSheetBase` 类并重写 `path()` 方法。假设有一个 `Window` 类，它的 qss 文件路径为 `qss/light/window.qss` 和 `qss/dark/window.qss`，那么代码可以这么写：

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

   // 返回样式表文件路径
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

   // 将样式表应用在组件上
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
      // 使用样式表，切换主题时样式表会跟着改变
      StyleSheet::applyTo(StyleSheet::Window, this);
   }
};
```
:::
::::

## 自定义样式
如果你对内置组件的样式感到不满，希望对其进行微调，可以使用 `setCustomStyleSheet()` 在原有样式的基础上添加新样式，该函数的签名如下：
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

其中 `widget` 是需要调整样式的组件，`lightQss` 和 `darkQss` 是浅/深色主题下 **添加** 的自定义样式。

举个例子，将 `PushButton` 的圆角调成 10px：

:::: code-group
::: code-group-item Python
```python
button = PushButton('Button', self)

# 添加自定义样式表
qss = 'PushButton{border-radius: 10px}'
setCustomStyleSheet(button, qss, qss)
```
:::
::: code-group-item C++
```cpp
#include <FStyleSheet>

auto button = new PushButton("Button", this);

// 添加自定义样式表
QString qss = "PushButton{border-radius: 10px}";
qfluentwidgets::setCustomStyleSheet(button, qss, qss);
```
:::
::::

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

当主题发生改变时，`qconfig` 管理的配置实例会发出 `themeColorChanged` 信号。