---
title: Message Box
date: 2024-02-26 15:04:01
permalink: /pages/components/messagebox/
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


### [MessageBoxBase](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/dialog_box/message_box_base/index.html#qfluentwidgets.components.dialog_box.message_box_base.MessageBoxBase)

If you want to customize the content of the message box, you can inherit `MessageBoxBase` and add components to the `viewLayout` layout. The following code creates an input box dialog:

```python
class CustomMessageBox(MessageBoxBase):
    """ Custom message box """

    def __init__(self, parent=None):
        super().__init__(parent)
        self.titleLabel = SubtitleLabel('Open URL')
        self.urlLineEdit = LineEdit()

        self.urlLineEdit.setPlaceholderText('Enter the URL of a file, stream, or playlist')
        self.urlLineEdit.setClearButtonEnabled(True)

        # Add components to the layout
        self.viewLayout.addWidget(self.titleLabel)
        self.viewLayout.addWidget(self.urlLineEdit)

        # Set the minimum width of the dialog box
        self.widget.setMinimumWidth(350)


def showMessage(window):
    w = CustomMessageBox(window)
    if w.exec():
        print(w.urlLineEdit.text())
```

The running effect is as follows:
![CustomMessageBox](/img/components/messagebox/CustomMessageBox.png)

`MessageBoxBase` provides `validate() -> bool` method, which can be overridden to validate form data when the user clicks the OK button. Returning `True` indicates that the form data is correct, and the dialog box will automatically close. Here is an example:

```python
class CustomMessageBox(MessageBoxBase):

    def __init__(self, parent=None):
        super().__init__(parent)
        self.titleLabel = SubtitleLabel('Open URL', self)
        self.urlLineEdit = LineEdit(self)

        self.urlLineEdit.setPlaceholderText('Enter the URL of a file, stream, or playlist')
        self.urlLineEdit.setClearButtonEnabled(True)

        self.warningLabel = CaptionLabel("Invalid URL")
        self.warningLabel.setTextColor("#cf1010", QColor(255, 28, 32))

        # add widget to view layout
        self.viewLayout.addWidget(self.titleLabel)
        self.viewLayout.addWidget(self.urlLineEdit)
        self.viewLayout.addWidget(self.warningLabel)
        self.warningLabel.hide()

        self.widget.setMinimumWidth(350)

    def validate(self):
        """ Override to validate form data """
        isValid = QUrl(self.urlLineEdit.text()).isValid()
        self.warningLabel.setHidden(isValid)
        return isValid
```