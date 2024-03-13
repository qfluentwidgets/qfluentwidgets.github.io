---
title: Line Edit
date: 2024-02-27 16:46:00
permalink: /components/lineedit/
---

### [LineEdit](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/line_edit/index.html#qfluentwidgets.components.widgets.line_edit.LineEdit)

![LineEdit](/img/components/lineedit/LineEdit.png)

`LineEdit` is used for editing single-line text and is used in the same way as `QLineEdit`.

```python
lineEdit = LineEdit()

# Set placeholder text
lineEdit.setPlaceholderText("example@example.com")

# Set text
lineEdit.setText("shokokawaii@foxmail.com")
print(lineEdit.text())

# Enable clear button
lineEdit.setClearButtonEnabled(True)
```

Setting up the completion menu:
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

### [SearchLineEdit](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/line_edit/index.html#qfluentwidgets.components.widgets.line_edit.SearchLineEdit)

![SearchLineEdit](/img/components/lineedit/SearchLineEdit.png)

`SearchLineEdit` adds a search button to the right of [LineEdit](#lineedit). When the button is clicked or the return key is pressed, it sends a `searchSignal(text: str)` signal.

```python
lineEdit = SearchLineEdit()
lineEdit.searchSignal.connect(lambda text: print("Search：" + text))
```

### [PasswordLineEdit](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/line_edit/index.html#qfluentwidgets.components.widgets.line_edit.PasswordLineEdit)

![PasswordLineEdit](/img/components/lineedit/PasswordLineEdit.png)

`PasswordLineEdit` is used to edit passwords, and the button is invisible by default.
```python
lineEdit = PasswordLineEdit()
lineEdit.setText("123456")

# Show password
lineEdit.setPasswordVisible(True)
```


### [TextEdit](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/line_edit/index.html#qfluentwidgets.components.widgets.line_edit.TextEdit)

![TextEdit](/img/components/lineedit/TextEdit.png)

`TextEdit` is a rich text multiline edit box that can render HTML and Markdown formatted text. It is used in the same way as `QTextEdit`.

```python
textEdit = TextEdit()
textEdit.setMarkdown("## Steel Ball Run \n * Johnny Joestar 🦄 \n * Gyro Zeppeli 🐴 ")

# Get plain text
print(textEdit.toPlainText())

# Get rich text
print(textEdit.toHtml())
```


### [PlainTextEdit](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/line_edit/index.html#qfluentwidgets.components.widgets.line_edit.PlainTextEdit)

![PlainTextEdit](/img/components/lineedit/PlainTextEdit.png)

`PlainTextEdit` is a plain text multiline edit box, and is used in the same way as `QPlainTextEdit`.

```python
textEdit = PlainTextEdit()
textEdit.setPlainText("The ape's cries are endless on both shores \n The light boat has crossed ten thousand mountains ")

# Get plain text
print(textEdit.toPlainText())
```


### [CodeEdit](https://qfluentwidgets.com/price)

![CodeEdit](/img/components/lineedit/CodeEdit.png)

`CodeEdit` can be used for displaying and editing code, with built-in syntax highlighting for 20 languages.