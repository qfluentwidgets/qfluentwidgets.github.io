---
title: Command Bar
date: 2024-02-26 21:00:00
permalink: /pages/components/commandbar/
---

### [CommandBar](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/command_bar/index.html#qfluentwidgets.components.widgets.command_bar.CommandBar)

![CommandBar](/img/components/commandbar/CommandBar.png)

`CommandBar` is used to provide horizontally arranged actions for users to choose from. When there are too many actions to fit in the viewport, `CommandBar` will automatically hide the actions that exceed the viewport into a drop-down menu.

```python
commandBar = CommandBar()

# Add actions one by one
commandBar.addAction(Action(FluentIcon.ADD, 'Add', triggered=lambda: print("Add")))

# Add a separator
commandBar.addSeparator()

# Add actions in batches
commandBar.addActions([
    Action(FluentIcon.EDIT, 'Edit', checkable=True, triggered=lambda: print("Edit")),
    Action(FluentIcon.COPY, 'Copy'),
    Action(FluentIcon.SHARE, 'Share'),
])

# Add always hidden actions
commandBar.addHiddenAction(Action(FluentIcon.SCROLL, 'Sort', triggered=lambda: print('Sort')))
commandBar.addHiddenAction(Action(FluentIcon.SETTING, 'Settings', shortcut='Ctrl+S'))
```

CommandBar can add custom components:

```python
# Create a transparent drop-down menu button
button = TransparentDropDownPushButton(FluentIcon.MENU, 'Menu')
button.setFixedHeight(34)
setFont(button, 12)

menu = RoundMenu(parent=self)
menu.addActions([
    Action(FluentIcon.COPY, 'Copy'),
    Action(FluentIcon.CUT, 'Cut'),
    Action(FluentIcon.PASTE, 'Paste'),
    Action(FluentIcon.CANCEL, 'Cancel'),
    Action('Select all'),
])
button.setMenu(menu)

# Add custom components
commandBar.addWidget(button)
```

By default, `CommandBar` only displays the action's icon. To change the display mode:
```python
# Display text to the right of the icon
commandBar.setToolButtonStyle(Qt.ToolButtonTextBesideIcon)

# Display text under the icon
commandBar.setToolButtonStyle(Qt.ToolButtonTextUnderIcon)
```

### [CommandBarView](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/command_bar/index.html#qfluentwidgets.components.widgets.command_bar.CommandBarView)

![CommandBarView](/img/components/commandbar/CommandBarView.png)


`CommandBarView` is used with `Flyout`, and its usage is almost the same as [CommandBar](#commandbar).

```python
commandBar = CommandBarView()

commandBar.addAction(Action(FluentIcon.SHARE, 'Share'))
commandBar.addAction(Action(FluentIcon.SAVE, 'Save'))
commandBar.addAction(Action(FluentIcon.DELETE, 'Delete'))

commandBar.addHiddenAction(Action(FluentIcon.APPLICATION, 'App', shortcut='Ctrl+A'))
commandBar.addHiddenAction(Action(FluentIcon.SETTING, 'Settings', shortcut='Ctrl+S'))
commandBar.resizeToSuitableWidth()

target = PushButton("Click Me")
Flyout.make(commandBar, target=target, parent=target, aniType=FlyoutAnimationType.FADE_IN)
```