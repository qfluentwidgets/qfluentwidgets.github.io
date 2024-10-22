---
title: 命令栏
date: 2024-02-26 21:00:00
permalink: /zh/pages/components/commandbar/
---

### [CommandBar](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/command_bar/index.html#qfluentwidgets.components.widgets.command_bar.CommandBar)

![CommandBar](/img/components/commandbar/CommandBar.png)

`CommandBar` 用于提供水平排列的动作供用户选择，当动作过多以至于视口容纳不下时，`CommandBar` 会自动隐藏超出视口的动作到下拉菜单中。

```python
commandBar = CommandBar()

# 逐个添加动作
commandBar.addAction(Action(FluentIcon.ADD, '添加', triggered=lambda: print("添加")))

# 添加分隔符
commandBar.addSeparator()

# 批量添加动作
commandBar.addActions([
    Action(FluentIcon.EDIT, '编辑', checkable=True, triggered=lambda: print("编辑")),
    Action(FluentIcon.COPY, '复制'),
    Action(FluentIcon.SHARE, '分享'),
])

# 添加始终隐藏的动作
commandBar.addHiddenAction(Action(FluentIcon.SCROLL, '排序', triggered=lambda: print('排序')))
commandBar.addHiddenAction(Action(FluentIcon.SETTING, '设置', shortcut='Ctrl+S'))
```

命令行可以添加自定义组件：

```python
# 创建透明下拉菜单按钮
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

# 添加自定义组件
commandBar.addWidget(button)
```

默认情况下 `CommandBar` 只显示动作的图标，如需修改显示模式：
```python
# 图标右侧显示文本
commandBar.setToolButtonStyle(Qt.ToolButtonTextBesideIcon)

# 图标底部显示文本
commandBar.setToolButtonStyle(Qt.ToolButtonTextUnderIcon)
```

### [CommandBarView](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/command_bar/index.html#qfluentwidgets.components.widgets.command_bar.CommandBarView)

![CommandBarView](/img/components/commandbar/CommandBarView.png)


`CommandBarView` 搭配 `Flyout` 一起使用，使用方法和 [CommandBar](#commandbar) 几乎相同。

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