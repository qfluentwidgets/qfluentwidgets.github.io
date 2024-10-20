---
title: 输入框
date: 2024-02-27 16:46:00
permalink: /zh/pages/components/lineedit/
---

### [LineEdit](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/line_edit/index.html#qfluentwidgets.components.widgets.line_edit.LineEdit)

![LineEdit](/img/components/lineedit/LineEdit.png)

`LineEdit` 用于编辑单行文本，使用方式和 `QLineEdit` 完全相同。

```python
lineEdit = LineEdit()

# 设置提示文本
lineEdit.setPlaceholderText("example@example.com")

# 设置文本
lineEdit.setText("shokokawaii@foxmail.com")
print(lineEdit.text())

# 启用清空按钮
lineEdit.setClearButtonEnabled(True)
```

设置补全菜单：
```python
stands = [
    "Star Platinum", "Hierophant Green", "Made in Haven",
    "King Crimson", "Silver Chariot", "Crazy diamond"
]
completer = QCompleter(stands, lineEdit)
completer.setCaseSensitivity(Qt.CaseInsensitive)
completer.setMaxVisibleItems(10)

lineEdit.setCompleter(completer)
```

自定义动作：
```python
from qfluentwidgets import Action, FluentIcon

# 在后面添加按钮
action1 = QAction(FluentIcon.CALENDAR.qicon(), "", triggered=lambda: print("action1 triggered"))
lineEdit.addAction(action1, QLineEdit.TrailingPosition)

# 在前面添加按钮
action2 = Action(FluentIcon.ADD, "", triggered=lambda: print("action2 triggered"))
lineEdit.addAction(action2, QLineEdit.LeadingPosition)
```

### [SearchLineEdit](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/line_edit/index.html#qfluentwidgets.components.widgets.line_edit.SearchLineEdit)

![SearchLineEdit](/img/components/lineedit/SearchLineEdit.png)

`SearchLineEdit` 在 [LineEdit](#lineedit) 右侧添加了搜索按钮，点击按钮或按下回车时会发送 `searchSignal(text: str)` 信号。

```python
lineEdit = SearchLineEdit()
lineEdit.searchSignal.connect(lambda text: print("搜索：" + text))
```

### [PasswordLineEdit](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/line_edit/index.html#qfluentwidgets.components.widgets.line_edit.PasswordLineEdit)

![PasswordLineEdit](/img/components/lineedit/PasswordLineEdit.png)

`PasswordLineEdit` 用于编辑密码，默认情况下按钮不可见。
```python
lineEdit = PasswordLineEdit()
lineEdit.setText("123456")

# 显示密码
lineEdit.setPasswordVisible(True)
```


### [TokenLineEdit](https://qfluentwidgets.com/zh/price)

![TokenLineEdit](/img/components/lineedit/TokenLineEdit.png)

`TokenLineEdit` 可用于输入和管理标签。

### [LabelLineEdit](https://qfluentwidgets.com/zh/price)

![LabelLineEdit](/img/components/lineedit/LabelLineEdit.png)

`LabelLineEdit` 是带前后缀标签的输入框。


### [TextEdit](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/line_edit/index.html#qfluentwidgets.components.widgets.line_edit.TextEdit)

![TextEdit](/img/components/lineedit/TextEdit.png)

`TextEdit` 是富文本多行编辑框，可以渲染 HTML 和 Markdown 格式的文本，使用方式和 `QTextEdit` 完全相同。

```python
textEdit = TextEdit()
textEdit.setMarkdown("## Steel Ball Run \n * Johnny Joestar 🦄 \n * Gyro Zeppeli 🐴 ")

# 获取普通文本
print(textEdit.toPlainText())

# 获取富文本
print(textEdit.toHtml())
```


### [PlainTextEdit](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/line_edit/index.html#qfluentwidgets.components.widgets.line_edit.PlainTextEdit)

![PlainTextEdit](/img/components/lineedit/PlainTextEdit.png)

`PlainTextEdit` 是普通文本多行编辑框，使用方式和 `QPlainTextEdit` 完全相同。

```python
textEdit = PlainTextEdit()
textEdit.setPlainText("两岸猿声啼不住 \n 轻舟已过万重山 ")

# 获取普通文本
print(textEdit.toPlainText())
```

### [TextBrowser](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/line_edit/index.html#qfluentwidgets.components.widgets.line_edit.TextBrowser)

![TextBrowser](/img/components/lineedit/TextEdit.png)

`TextBrowser` 是只读富文本多行编辑框，可以渲染 HTML 和 Markdown 格式的文本，使用方式和 `QTextBrowser` 完全相同。

```python
textBrowser = TextBrowser()
textBrowser.setMarkdown("## Steel Ball Run \n * Johnny Joestar 🦄 \n * Gyro Zeppeli 🐴 ")

# 获取普通文本
print(textBrowser.toPlainText())

# 获取富文本
print(textBrowser.toHtml())
```

### [CodeEdit](https://qfluentwidgets.com/zh/price)

![CodeEdit](/img/components/lineedit/CodeEdit.png)

`CodeEdit` 可用于显示和编辑代码，内置 20 种语言的语法高亮。