---
title: 消息框
date: 2024-02-26 15:04:01
permalink: /zh/pages/components/messagebox/
---

### [Dialog](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/dialog_box/dialog/index.html#qfluentwidgets.components.dialog_box.dialog.Dialog)


![Dialog](/img/components/messagebox/Dialog.png)

`Dialog` 是模态无边框对话框，用于用于消息提示、确认消息和提交内容。该对话框会中断用户操作，直到用户确认知晓后才可关闭。

```python
w = Dialog("标题", "这是一条消息通知", window)

if w.exec():
    print('确认')
else:
    print('取消')
```

修改按钮文本：

```python
w.yesButton.setText("来啦老弟")
w.cancelButton.setText("但是我拒绝")
```

隐藏确定按钮：
```python
w.yesButton.hide()
w.buttonLayout.insertStretch(0, 1)
```

隐藏取消按钮：
```python
w.cancelButton.hide()
w.buttonLayout.insertStretch(1)
```

### [MessageBox](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/dialog_box/dialog/index.html#qfluentwidgets.components.dialog_box.dialog.MessageBox)


![MessageBox](/img/components/messagebox/MessageBox.png)

`MessageBox` 是模态遮罩对话框，使用方式和 [Dialog](#dialog) 一样。

最好将对话框的父级设置为主窗口，这样遮罩的尺寸就能和主窗口保持一致。

```python
w = MessageBox("标题", "这是一条消息通知", window)

if w.exec():
    print('确认')
else:
    print('取消')
```

### [MessageBoxBase](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/dialog_box/message_box_base/index.html#qfluentwidgets.components.dialog_box.message_box_base.MessageBoxBase)

如果你想自定义对话框的内容，可继承 `MessageBoxBase` 并往 `viewLayout` 垂直布局中添加组件。下述代码创建了一个输入框对话框：
```python
class CustomMessageBox(MessageBoxBase):
    """ Custom message box """

    def __init__(self, parent=None):
        super().__init__(parent)
        self.titleLabel = SubtitleLabel('打开 URL')
        self.urlLineEdit = LineEdit()

        self.urlLineEdit.setPlaceholderText('输入文件、流或者播放列表的 URL')
        self.urlLineEdit.setClearButtonEnabled(True)

        # 将组件添加到布局中
        self.viewLayout.addWidget(self.titleLabel)
        self.viewLayout.addWidget(self.urlLineEdit)

        # 设置对话框的最小宽度
        self.widget.setMinimumWidth(350)


def showMessage(window):
    w = CustomMessageBox(window)
    if w.exec():
        print(w.urlLineEdit.text())
```

运行效果如下：
![CustomMessageBox](/img/components/messagebox/CustomMessageBox.png)

对话框提供了 `validate() -> bool` 方法，通过重写此方法，可在用户点击确定按钮时验证表单数据，返回 True 代表表单数据正确，对话框会自动关闭。下面是一个示例：

```python
class CustomMessageBox(MessageBoxBase):

    def __init__(self, parent=None):
        super().__init__(parent)
        self.titleLabel = SubtitleLabel('打开 URL', self)
        self.urlLineEdit = LineEdit(self)

        self.urlLineEdit.setPlaceholderText('输入文件、流或者播放列表的 URL')
        self.urlLineEdit.setClearButtonEnabled(True)

        self.warningLabel = CaptionLabel("URL 不正确")
        self.warningLabel.setTextColor("#cf1010", QColor(255, 28, 32))

        # add widget to view layout
        self.viewLayout.addWidget(self.titleLabel)
        self.viewLayout.addWidget(self.urlLineEdit)
        self.viewLayout.addWidget(self.warningLabel)
        self.warningLabel.hide()

        self.widget.setMinimumWidth(350)

    def validate(self):
        """ 重写验证表单数据的方法 """
        isValid = QUrl(self.urlLineEdit.text()).isValid()
        self.warningLabel.setHidden(isValid)
        return isValid

```
