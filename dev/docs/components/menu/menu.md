---
title: Menu
date: 2024-02-26 19:56:01
permalink: /pages/components/menu/
---

### [RoundMenu](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/menu/index.html#qfluentwidgets.components.widgets.menu.RoundMenu)

![RoundMenu](/img/components/menu/RoundMenu.png)

`RoundMenu` is used to provide a series of actions for users to choose from, similar to the `QMenu` class.

::: tip Tip
The menu shadow in PyQt/PySide 6.7.0 and above versions appears abnormal under Win11. You can fix this issue by updating `qfluentwidgets` to v1.6.2 or above version. For details, please refer to [Issue #848](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/848).
:::

```python
menu = RoundMenu()

# Add actions one by one, Action inherits from QAction and accepts icons of type FluentIconBase
menu.addAction(Action(FluentIcon.COPY, 'Copy', triggered=lambda: print("Copy successful")))
menu.addAction(Action(FluentIcon.CUT, 'Cut', triggered=lambda: print("Cut successful")))

# Add actions in batches
menu.addActions([
    Action(FluentIcon.PASTE, 'Paste'),
    Action(FluentIcon.CANCEL, 'Undo')
])

# Add a separator
menu.addSeparator()

menu.addAction(QAction('Select All', shortcut='Ctrl+A'))
```

Add submenus:

```python
submenu = RoundMenu("Add to", self)

submenu.setIcon(FluentIcon.ADD)
submenu.addActions([
    Action(FluentIcon.VIDEO, 'Video'),
    Action(FluentIcon.MUSIC, 'Music'),
])

menu.addMenu(submenu)
```

`RoundMenu` supports adding custom widgets as menu items:

![WidgetMenu](/img/components/menu/WidgetMenu.png)

```python
class ProfileCard(QWidget):
    """ Profile card """

    def __init__(self, avatarPath: str, name: str, email: str, parent=None):
        super().__init__(parent=parent)
        self.avatar = AvatarWidget(avatarPath, self)
        self.nameLabel = BodyLabel(name, self)
        self.emailLabel = CaptionLabel(email, self)
        self.logoutButton = HyperlinkButton('https://qfluentwidgets.com/', 'Logout', self)

        self.emailLabel.setTextColor(QColor(96, 96, 96), QColor(206, 206, 206))
        setFont(self.logoutButton, 13)

        self.setFixedSize(307, 82)
        self.avatar.setRadius(24)
        self.avatar.move(2, 6)
        self.nameLabel.move(64, 13)
        self.emailLabel.move(64, 32)
        self.logoutButton.move(52, 48)


class Demo(QWidget):

    def __init__(self):
        super().__init__()

    def contextMenuEvent(self, e) -> None:
        menu = RoundMenu(parent=self)

        # add custom widget
        card = ProfileCard('resource/shoko.png', 'Shoko-chan', 'shokokawaii@outlook.com', menu)
        menu.addWidget(card, selectable=False)

        menu.addSeparator()
        menu.addActions([
            Action(FluentIcon.PEOPLE, 'Manage Account and Settings'),
            Action(FluentIcon.SHOPPING_CART, 'Payment Methods'),
            Action(FluentIcon.CODE, 'Redeem Codes and Gift Cards'),
        ])
        menu.addSeparator()
        menu.addAction(Action(FluentIcon.SETTING, 'Settings'))
        menu.exec(e.globalPos())
```

### [CheckableMenu](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/menu/index.html#qfluentwidgets.components.widgets.menu.CheckableMenu)

![CheckableMenu](/img/components/menu/CheckableMenu.png)

`CheckableMenu` allows users to select internal actions, usually used with `QActionGroup`.

```python
class Demo(QWidget):

    def __init__(self):
        super().__init__()
        self.createTimeAction = Action(FluentIcon.CALENDAR, "Create Time", checkable=True)
        self.shootTimeAction = Action(FluentIcon.CAMERA, "Shoot Time", checkable=True)
        self.modifiedTimeAction = Action(FluentIcon.EDIT, "Modified Time", checkable=True)
        self.nameAction = Action(FluentIcon.FONT, "Name", checkable=True)

        self.ascendAction = Action(FluentIcon.UP, "Ascending", checkable=True)
        self.descendAction = Action(FluentIcon.DOWN, "Descending", checkable=True)

        # Add actions to action groups
        self.actionGroup1 = QActionGroup(self)
        self.actionGroup1.addAction(self.createTimeAction)
        self.actionGroup1.addAction(self.shootTimeAction)
        self.actionGroup1.addAction(self.modifiedTimeAction)
        self.actionGroup1.addAction(self.nameAction)

        self.actionGroup2 = QActionGroup(self)
        self.actionGroup2.addAction(self.ascendAction)
        self.actionGroup2.addAction(self.descendAction)

        # Select actions
        self.shootTimeAction.setChecked(True)
        self.ascendAction.setChecked(True)

    def contextMenuEvent(self, e):
        menu = CheckableMenu(parent=self, indicatorType=MenuIndicatorType.RADIO)

        menu.addActions([
            self.createTimeAction, self.shootTimeAction,
            self.modifiedTimeAction, self.nameAction
        ])
        menu.addSeparator()
        menu.addActions([self.ascendAction, self.descendAction])

        menu.exec(e.globalPos(), aniType=MenuAnimationType.DROP_DOWN)
```

### [SystemTrayMenu](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/menu/index.html#qfluentwidgets.components.widgets.menu.SystemTrayMenu)

`SystemTrayMenu` is used as a system tray menu, used with `QSystemTrayIcon`.

```python
class SystemTrayIcon(QSystemTrayIcon):

    def __init__(self, parent):
        super().__init__(parent=parent)
        self.setIcon(parent.windowIcon())

        self.menu = SystemTrayMenu(parent=parent)
        self.menu.addActions([
            Action('🎤   Sing'),
            Action('🕺   Dance'),
            Action('🤘🏼   RAP'),
            Action('🎶   Music'),
            Action('🏀   Basketball', triggered=self.ikun),
        ])
        self.setContextMenu(self.menu)

    def ikun(self):
        print("""Peak produces false support, dusk witnesses the true apostle 🏀

                       ⠰⢷⢿⠄
                   ⠀⠀⠀⠀⠀⣼⣷⣄
                   ⠀⠀⣤⣿⣇⣿⣿⣧⣿⡄
                   ⢴⠾⠋⠀⠀⠻⣿⣷⣿⣿⡀
                   ⠀⢀⣿⣿⡿⢿⠈⣿
                   ⠀⠀⠀⢠⣿⡿⠁⠀⡊⠀⠙
                   ⠀⠀⠀⢿⣿⠀⠀⠹⣿
                   ⠀⠀⠀⠀⠹⣷⡀⠀⣿⡄
                   ⠀⠀⠀⠀⣀⣼⣿⠀⢈⣧
        """)


class Demo(QWidget):

    def __init__(self):
        super().__init__()
        self.setLayout(QHBoxLayout())
        self.label = QLabel('Right-click system tray icon', self)
        self.layout().addWidget(self.label)

        self.resize(500, 500)
        self.setWindowIcon(QIcon(':/qfluentwidgets/images/logo.png'))

        self.systemTrayIcon = SystemTrayIcon(self)
        self.systemTrayIcon.show()

```
