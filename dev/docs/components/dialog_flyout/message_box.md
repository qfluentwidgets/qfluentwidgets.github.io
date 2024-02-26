---
title: Message Box
date: 2024-02-26 15:04:01
permalink: /components/messagebox/
---

### [Dialog](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/dialog_box/dialog/index.html#qfluentwidgets.components.dialog_box.dialog.Dialog)


![Dialog](/img/components/messagebox/Dialog.png)

`Dialog` is a modal, borderless dialog box used for message prompts, confirmation messages, and content submission. This dialog box will interrupt user operations until the user acknowledges it can be closed.

```python
w = Dialog("Title", "This is a message notification", window)

if w.exec():
    print('Confirmed')
else:
    print('Canceled')
```

Change button text:

```python
w.yesButton.setText("Roger")
w.cancelButton.setText("Refuse")
```

Hide the confirm button:
```python
w.yesButton.hide()
w.buttonLayout.insertStretch(0, 1)
```

Hide the cancel button:
```python
w.cancelButton.hide()
w.buttonLayout.insertStretch(1)
```


### [MessageBox](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/dialog_box/dialog/index.html#qfluentwidgets.components.dialog_box.dialog.MessageBox)

![MessageBox](/img/components/messagebox/MessageBox.png)

`MessageBox` is a modal overlay dialog box used for message prompts, and its usage is the same as [Dialog](#dialog).

It's best to set the parent of the message box to the main window so that the size of the overlay matches the main window.

```python
w = MessageBox("Title", "This is a message notification", window)

if w.exec():
    print('Confirmed')
else:
    print('Canceled')
```