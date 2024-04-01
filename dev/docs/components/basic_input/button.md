---
title: Button
date: 2024-02-25 19:15:01
permalink: /pages/components/button
---

## Standard Buttons
### [PushButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.PushButton)

![PushButton](/img/components/button/PushButton.jpg)

`PushButton` can be used to display text and icons, works exactly the same as `QPushButton`.

Button without icon:
```python
PushButton('Standard push button')
```

Button with icon, to follow the theme, `PushButton` accepts `FluentIconBase` type icons:
```python
PushButton(FluentIcon.FOLDER, 'Standard push button with icon')
PushButton(QIcon("/path/to/icon.png"), 'Standard push button with icon')
```

### [ToolButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.ToolButton)

![Tool button](/img/components/button/ToolButton.jpg)

`ToolButton` is only used to display icons, works exactly the same as `QToolButton`.

```python
ToolButton(FluentIcon.SETTING)
ToolButton(QIcon("/path/to/icon.png"))
```

### [PrimaryPushButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.PrimaryPushButton)


![PrimaryPushButton](/img/components/button/PrimaryPushButton.jpg)

`PrimaryPushButton` can be used to display text and icons, works exactly the same as `QPushButton`. Use this button when you want to highlight a specific action.


Button without icon:
```python
PrimaryPushButton('Accent style button')
```

Button with icon:
```python
PrimaryPushButton(FluentIcon.UPDATE, 'Accent style button')
PrimaryPushButton(QIcon("/path/to/icon.png"), 'Accent style button with icon')
```


### [PrimaryToolButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.PrimaryToolButton)

![Primary Tool button](/img/components/button/PrimaryToolButton.jpg)

`PrimaryToolButton` is only used to display icons, works exactly the same as `QToolButton`. Use this button when you want to highlight a specific action.

```python
PrimaryToolButton(FluentIcon.FOLDER)
PrimaryToolButton(QIcon("/path/to/icon.png"))
```

### [TransparentPushButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.TransparentPushButton)

![TransparentPushButton](/img/components/button/TransparentPushButton.jpg)

`TransparentPushButton` can be used to display text and icons, works exactly the same as `QPushButton`.


Button without icon:
```python
TransparentPushButton('Transparent push button')
```

Button with icon:
```python
TransparentPushButton(FluentIcon.BOOK_SHELF, 'Transparent push button')
TransparentPushButton(QIcon("/path/to/icon.png"), 'Transparent push button')
```

### [TransparentToolButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.TransparentToolButton)

![Transparent Tool button](/img/components/button/TransparentToolButton.jpg)

`TransparentToolButton` is only used to display icons, works exactly the same as `QToolButton`.

```python
TransparentToolButton(FluentIcon.MAIL)
TransparentToolButton(QIcon("/path/to/icon.png"))
```

### [HyperlinkButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.HyperlinkButton)

![HyperlinkButton](/img/components/button/HyperlinkButton.jpg)

`HyperlinkButton` can be used to implement link navigation.

Button without icon:
```python
HyperlinkButton("https://qfluentwidgets.com", 'Hyperlink button')
```

Button with icon:
```python
HyperlinkButton(FluentIcon.LINK, "https://qfluentwidgets.com", 'Hyperlink button')
HyperlinkButton(QIcon("/path/to/icon.png"), "https://qfluentwidgets.com", 'Hyperlink button')
```

Set hyperlink:
```python
button.setUrl("https://www.youtube.com/watch?v=65AuZQ7tlKE")
button.setUrl(QUrl("https://www.youtube.com/watch?v=S0bXDRY1DGM"))
print(button.url)
```

### [HyperlinkToolButton](https://qfluentwidgets.com/price)

![HyperlinkToolButton](/img/components/button/HyperlinkToolButton.png)

`HyperlinkToolButton` is used only for displaying an icon, which can redirect to a specified link when clicked.

### [FilledPushButton](https://qfluentwidgets.com/price)

![FilledPushButton](/img/components/button/FilledPushButton.png)

`FilledPushButton` is used for displaying an icon and text. It can display different background colors according to the level of information. Its usage is identical to `QPushButton`.

### [FilledToolButton](https://qfluentwidgets.com/price)

![FilledToolButton](/img/components/button/FilledToolButton.png)

`FilledToolButton` is used only for displaying an icon. It can display different background colors according to the level of information. Its usage is identical to `QToolButton`.

### [TextPushButton](https://qfluentwidgets.com/price)

![TextPushButton](/img/components/button/TextPushButton.png)

`TextPushButton` is used for displaying an icon and text. It can display different foreground colors according to the level of information. Its usage is identical to `QPushButton`.

### [TextToolButton](https://qfluentwidgets.com/price)

![TextToolButton](/img/components/button/TextToolButton.png)

`TextToolButton` is used only for displaying an icon. It can display different foreground colors according to the level of information. Its usage is identical to `QToolButton`.



## Toggle Buttons

Toggle buttons can toggle between `Qt.Checked` and `Qt.Unchecked` states, `toggled(checked: bool)` signal will be emitted when state changes.


### [TogglePushButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.TogglePushButton)

![TogglePushButton](/img/components/button/TogglePushButton.jpg)

`TogglePushButton` can be used to display text and icons, works exactly the same as `QPushButton`.


Button without icon:
```python
button = TogglePushButton('Toggle push button')
button.toggled.connect(lambda checked: print(f"Button is checked: {checked}"))
```

Button with icon:
```python
TogglePushButton(FluentIcon.SEND, 'Toggle push button')
TogglePushButton(QIcon("/path/to/icon.png"), 'Toggle push button')
```

### [ToggleToolButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.ToggleToolButton)

![ToggleToolButton](/img/components/button/ToggleToolButton.jpg)

`ToggleToolButton` is only used to display icons, works exactly the same as `QToolButton`.


```python
ToggleToolButton(FluentIcon.GITHUB)
ToggleToolButton(QIcon("/path/to/icon.png"))
```


### [TransparentTogglePushButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.TransparentTogglePushButton)

![TransparentTogglePushButton](/img/components/button/TransparentTogglePushButton.jpg)

`TransparentTogglePushButton` can be used to display text and icons, works exactly the same as [TogglePushButton](#togglepushbutton).

Button without icon:
```python
button = TransparentTogglePushButton('Transparent toggle button')
button.toggled.connect(lambda checked: print(f"Button is checked: {checked}"))
```

Button with icon:
```python
TransparentTogglePushButton(FluentIcon.BOOK_SHELF, 'Transparent toggle button')
TransparentTogglePushButton(QIcon("/path/to/icon.png"), 'Transparent toggle button')
```

### [TransparentToggleToolButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.TransparentToggleToolButton)

![TransparentToggleToolButton](/img/components/button/TransparentToggleToolButton.jpg)

`TransparentToggleToolButton` is only used to display icons, works exactly the same as [ToggleToolButton](#toggletoolbutton).


```python
TransparentToggleToolButton(FluentIcon.GITHUB)
TransparentToggleToolButton(QIcon("/path/to/icon.png"))
```

### [PillPushButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.PillPushButton)

![PillPushButton](/img/components/button/PillPushButton.jpg)

`PillPushButton` can be used to display text and icons, can be used as tags or filters, works exactly the same as [TogglePushButton](#togglepushbutton).

Button without icon:
```python
PillPushButton('Pill push button')
```

Button with icon:
```python
PillPushButton(FluentIcon.CALENDAR, 'Pill push button')
PillPushButton(QIcon("/path/to/icon.png"), 'Pill push button')
```


### [PillToolButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.PillToolButton)

![PillToolButton](/img/components/button/PillToolButton.jpg)

`PillToolButton` is only used to display icons, can be used as tags or filters, works exactly the same as [TogglePushButton](#togglepushbutton).


```python
PillToolButton(FluentIcon.GITHUB)
PillToolButton(QIcon("/path/to/icon.png"))
```



## Dropdown Buttons
### [DropDownPushButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.DropDownPushButton)

![DropDownPushButton](/img/components/button/DropdownPushButton.jpg)

`DropDownPushButton` shows a dropdown menu when clicked, the dropdown menu must be `RoundMenu` or subclasses.

```python
button = DropDownPushButton(FluentIcon.MAIL, 'Email')

# Create menu
menu = RoundMenu(parent=button)
menu.addAction(Action(FluentIcon.BASKETBALL, 'Basketball', triggered=lambda: print("What are you doing?")))
menu.addAction(Action(FluentIcon.ALBUM, 'Sing', triggered=lambda: print("I like singing, rapping, and dancing")))
menu.addAction(Action(FluentIcon.MUSIC, 'Music', triggered=lambda: print("Just because you are so beautiful")))

# Add menu
button.setMenu(menu)
```

### [DropDownToolButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.DropDownToolButton)

![DropDownToolButton](/img/components/button/DropdownToolButton.jpg)

`DropDownToolButton` shows a dropdown menu when clicked, the dropdown menu must be `RoundMenu` or subclasses.

```python
button = DropDownToolButton(FluentIcon.MAIL)

# Create menu
menu = RoundMenu(parent=button)
menu.addAction(Action(FluentIcon.SEND_FIL, 'Send', triggered=lambda: print("Sent")))
menu.addAction(Action(FluentIcon.SAVE, 'Save', triggered=lambda: print("Saved")))

# Add menu
button.setMenu(menu)
```


### [PrimaryDropDownPushButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.PrimaryDropDownPushButton)

![PrimaryDropDownPushButton](/img/components/button/PrimaryDropDownPushButton.jpg)

`PrimaryDropDownPushButton` shows a dropdown menu when clicked, the dropdown menu must be `RoundMenu` or subclasses.

```python
button = PrimaryDropDownPushButton(FluentIcon.MAIL, 'Email')

# Create menu
menu = RoundMenu(parent=button)
menu.addAction(Action(FluentIcon.BASKETBALL, 'Basketball', triggered=lambda: print("What are you doing?")))
menu.addAction(Action(FluentIcon.ALBUM, 'Sing', triggered=lambda: print("I like singing, rapping, and dancing")))
menu.addAction(Action(FluentIcon.MUSIC, 'Music', triggered=lambda: print("Just because you are so beautiful")))

# Add menu
button.setMenu(menu)
```


### [PrimaryDropDownToolButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.PrimaryDropDownToolButton)

![PrimaryDropDownToolButton](/img/components/button/PrimaryDropDownToolButton.jpg)

`PrimaryDropDownToolButton` shows a dropdown menu when clicked, the dropdown menu must be `RoundMenu` or subclasses.

```python
button = PrimaryDropDownToolButton(FluentIcon.MAIL)

# Create menu
menu = RoundMenu(parent=button)
menu.addAction(Action(FluentIcon.SEND_FIL, 'Send', triggered=lambda: print("Sent")))
menu.addAction(Action(FluentIcon.SAVE, 'Save', triggered=lambda: print("Saved")))

# Add menu
button.setMenu(menu)
```


### [TransparentDropDownPushButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.TransparentDropDownPushButton)

![TransparentDropDownPushButton](/img/components/button/TransparentDropDownPushButton.jpg)

`TransparentDropDownPushButton` shows a dropdown menu when clicked, the dropdown menu must be `RoundMenu` or subclasses.

```python
button = TransparentDropDownPushButton(FluentIcon.MAIL, 'Email')

# Create menu
menu = RoundMenu(parent=button)
menu.addAction(Action(FluentIcon.BASKETBALL, 'Basketball', triggered=lambda: print("What are you doing?")))
menu.addAction(Action(FluentIcon.ALBUM, 'Sing', triggered=lambda: print("I like singing, rapping, and dancing")))
menu.addAction(Action(FluentIcon.MUSIC, 'Music', triggered=lambda: print("Just because you are so beautiful")))

# Add menu
button.setMenu(menu)
```

### [TransparentDropDownToolButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.TransparentDropDownToolButton)

![TransparentDropDownToolButton](/img/components/button/TransparentDropDownToolButton.jpg)

`TransparentDropDownToolButton` shows a dropdown menu when clicked, the dropdown menu must be `RoundMenu` or subclasses.

```python
button = TransparentDropDownToolButton(FluentIcon.MAIL)

# Create menu
menu = RoundMenu(parent=button)
menu.addAction(Action(FluentIcon.SEND_FIL, 'Send', triggered=lambda: print("Sent")))
menu.addAction(Action(FluentIcon.SAVE, 'Save', triggered=lambda: print("Saved")))

# Add menu
button.setMenu(menu)
```

## Split Button
### [SplitPushButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.SplitPushButton)

![SplitPushButton](/img/components/button/SplitPushButton.jpg)

`SplitPushButton` consists of two buttons. Clicking the left button triggers the `clicked` signal, while clicking the right button pops up a drop-down menu. The drop-down menu must be `RoundMenu` or its subclass.

```python
button = SplitPushButton(FluentIcon.GITHUB, 'Split push button')
button.clicked.connect(lambda: print("Left button clicked"))

# Create menu
menu = RoundMenu(parent=button)
menu.addAction(Action(FluentIcon.BASKETBALL, 'Basketball', triggered=lambda: print("What are you doing~")))
menu.addAction(Action(FluentIcon.ALBUM, 'Sing', triggered=lambda: print("Like singing and dancing RAP")))
menu.addAction(Action(FluentIcon.MUSIC, 'Music', triggered=lambda: print("Just because you are too beautiful")))

# Add menu
button.setFlyout(menu)
```

### [SplitToolButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.SplitToolButton)

![SplitToolButton](/img/components/button/SplitToolButton.jpg)

`SplitToolButton` consists of two buttons. Clicking the left button triggers the `clicked` signal, while clicking the right button pops up a drop-down menu. The drop-down menu must be `RoundMenu` or its subclass.

```python
button = SplitToolButton(FluentIcon.MAIL)
button.clicked.connect(lambda: print("Left button clicked"))

# Create menu
menu = RoundMenu(parent=button)
menu.addAction(Action(FluentIcon.SEND_FIL, 'Send', triggered=lambda: print("Sent")))
menu.addAction(Action(FluentIcon.SAVE, 'Save', triggered=lambda: print("Saved")))

# Add menu
button.setFlyout(menu)
```

### [PrimarySplitPushButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.PrimarySplitPushButton)

![PrimarySplitPushButton](/img/components/button/PrimarySplitPushButton.jpg)

`PrimarySplitPushButton` consists of two buttons. Clicking the left button triggers the `clicked` signal, while clicking the right button pops up a drop-down menu. The drop-down menu must be `RoundMenu` or its subclass.

```python
button = PrimarySplitPushButton(FluentIcon.GITHUB, 'Split push button')
button.clicked.connect(lambda: print("Left button clicked"))

# Create menu
menu = RoundMenu(parent=button)
menu.addAction(Action(FluentIcon.BASKETBALL, 'Basketball', triggered=lambda: print("What are you doing~")))
menu.addAction(Action(FluentIcon.ALBUM, 'Sing', triggered=lambda: print("Like singing and dancing RAP")))
menu.addAction(Action(FluentIcon.MUSIC, 'Music', triggered=lambda: print("Just because you are too beautiful")))

# Add menu
button.setFlyout(menu)
```

### [PrimarySplitToolButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.PrimarySplitToolButton)

![PrimarySplitToolButton](/img/components/button/PrimarySplitToolButton.jpg)

`PrimarySplitToolButton` consists of two buttons. Clicking the left button triggers the `clicked` signal, while clicking the right button pops up a drop-down menu. The drop-down menu must be `RoundMenu` or its subclass.

```python
button = PrimarySplitToolButton(FluentIcon.MAIL)
button.clicked.connect(lambda: print("Left button clicked"))

# Create menu
menu = RoundMenu(parent=button)
menu.addAction(Action(FluentIcon.SEND_FIL, 'Send', triggered=lambda: print("Sent")))
menu.addAction(Action(FluentIcon.SAVE, 'Save', triggered=lambda: print("Saved")))

# Add menu
button.setFlyout(menu)
```

## Labels

### [Chip](https://qfluentwidgets.com/price)

![Chip](/img/components/button/Chip.png)

`Chip` is used to display an icon and text, with a delete button. It can be used as a label for user selection. Its usage is identical to `QPushButton`.

### [Tag](https://qfluentwidgets.com/price)

![Tag](/img/components/button/Tag.png)

`Tag` is used to display an icon and text. Depending on the level of information, it can display different background and foreground colors. Its usage is identical to `QPushButton`.