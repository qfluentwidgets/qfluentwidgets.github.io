---
title: 消息框
date: 2024-02-26 15:04:01
permalink: /zh/components/messagebox/
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