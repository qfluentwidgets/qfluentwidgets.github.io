---
title: 卡片组件
date: 2024-07-24 14:22:00
permalink: /zh/pages/components/cardwidget/
---

### [CardWidget](https://pyqt-fluent-widgets.readthedocs.io/zh_CN/latest/autoapi/qfluentwidgets/components/widgets/card_widget/index.html#qfluentwidgets.components.widgets.card_widget.CardWidget)

![CardWidget](/img/components/cardwidget/CardWidget.png)

`CardWidget` 是一种非常灵活和实用的 UI 设计模式,能够帮助开发者以一种结构化和美观的方式展示各种类型的信息和内容。

卡片组件是一个容器，可用于放置任意组件:

```python
class AppCard(CardWidget):

    def __init__(self, icon, title, content, parent=None):
        super().__init__(parent)
        self.iconWidget = IconWidget(icon)
        self.titleLabel = BodyLabel(title, self)
        self.contentLabel = CaptionLabel(content, self)
        self.openButton = PushButton('Open', self)
        self.moreButton = TransparentToolButton(FluentIcon.MORE, self)

        self.hBoxLayout = QHBoxLayout(self)
        self.vBoxLayout = QVBoxLayout()

        self.setFixedHeight(73)
        self.iconWidget.setFixedSize(48, 48)
        self.contentLabel.setTextColor("#606060", "#d2d2d2")
        self.openButton.setFixedWidth(120)

        self.hBoxLayout.setContentsMargins(20, 11, 11, 11)
        self.hBoxLayout.setSpacing(15)
        self.hBoxLayout.addWidget(self.iconWidget)

        self.vBoxLayout.setContentsMargins(0, 0, 0, 0)
        self.vBoxLayout.setSpacing(0)
        self.vBoxLayout.addWidget(self.titleLabel, 0, Qt.AlignVCenter)
        self.vBoxLayout.addWidget(self.contentLabel, 0, Qt.AlignVCenter)
        self.vBoxLayout.setAlignment(Qt.AlignVCenter)
        self.hBoxLayout.addLayout(self.vBoxLayout)

        self.hBoxLayout.addStretch(1)
        self.hBoxLayout.addWidget(self.openButton, 0, Qt.AlignRight)
        self.hBoxLayout.addWidget(self.moreButton, 0, Qt.AlignRight)

        self.moreButton.setFixedSize(32, 32)
```

点击 `CardWidget` 会发送 `clicked` 信号:
```python
card = AppCard(
    icon=":/qfluentwidgets/images/logo.png",
    title="PyQt-Fluent-Widgets",
    content="Shokokawaii Inc."
)
card.clicked.connect(lambda: print("点击卡片"))
```

默认圆角大小为 5px，下述代码调整为 8px:
```python
card.setBorderRadius(8)
```

### [SimpleCardWidget](https://pyqt-fluent-widgets.readthedocs.io/zh_CN/latest/autoapi/qfluentwidgets/components/widgets/card_widget/index.html#qfluentwidgets.components.widgets.card_widget.SimpleCardWidget)

`SimpleCardWidget` 是 `CardWidget` 子类，二者之间唯一的区别就是 `SimpleCardWidget` 的背景不会随着鼠标进入进出而变化。

### [ElevatedCardWidget](https://pyqt-fluent-widgets.readthedocs.io/zh_CN/latest/autoapi/qfluentwidgets/components/widgets/card_widget/index.html#qfluentwidgets.components.widgets.card_widget.ElevatedCardWidget)

![ElevatedCardWidget](/img/components/cardwidget/ElevatedCardWidget.png)

`ElevatedCardWidget` 是带阴影的卡片组件，鼠标移入时会显示阴影和上移动画。

```python
class EmojiCard(ElevatedCardWidget):

    def __init__(self, iconPath: str, name: str, parent=None):
        super().__init__(parent)
        self.iconWidget = ImageLabel(iconPath, self)
        self.label = CaptionLabel(name, self)

        self.iconWidget.scaledToHeight(68)

        self.vBoxLayout = QVBoxLayout(self)
        self.vBoxLayout.setAlignment(Qt.AlignCenter)
        self.vBoxLayout.addStretch(1)
        self.vBoxLayout.addWidget(self.iconWidget, 0, Qt.AlignCenter)
        self.vBoxLayout.addStretch(1)
        self.vBoxLayout.addWidget(self.label, 0, Qt.AlignHCenter | Qt.AlignBottom)

        self.setFixedSize(168, 176)
```


### [HeaderCardWidget](https://pyqt-fluent-widgets.readthedocs.io/zh_CN/latest/autoapi/qfluentwidgets/components/widgets/card_widget/index.html#qfluentwidgets.components.widgets.card_widget.HeaderCardWidget)

![HeaderCardWidget](/img/components/cardwidget/HeaderCardWidget.png)

`HeaderCardWidget` 是带标题的卡片组件，可用于替代 `QGroupBox`。它的内部已有布局，只需将组件添加到水平布局 `viewLayout` 中即可。

```python
class SystemRequirementCard(HeaderCardWidget):
    """ System requirements card """

    def __init__(self, parent=None):
        super().__init__(parent)
        self.setTitle('系统要求')

        self.infoLabel = BodyLabel('此产品适用于你的设备。具有复选标记的项目符合开发人员的系统要求。', self)
        self.successIcon = IconWidget(InfoBarIcon.SUCCESS, self)
        self.detailButton = HyperlinkLabel('详细信息', self)

        self.vBoxLayout = QVBoxLayout()
        self.hBoxLayout = QHBoxLayout()

        self.successIcon.setFixedSize(16, 16)
        self.hBoxLayout.setSpacing(10)
        self.vBoxLayout.setSpacing(16)
        self.hBoxLayout.setContentsMargins(0, 0, 0, 0)
        self.vBoxLayout.setContentsMargins(0, 0, 0, 0)

        self.hBoxLayout.addWidget(self.successIcon)
        self.hBoxLayout.addWidget(self.infoLabel)
        self.vBoxLayout.addLayout(self.hBoxLayout)
        self.vBoxLayout.addWidget(self.detailButton)

        self.viewLayout.addLayout(self.vBoxLayout)
```

### [GroupHeaderCardWidget](https://pyqt-fluent-widgets.readthedocs.io/zh_CN/latest/autoapi/qfluentwidgets/components/widgets/card_widget/index.html#qfluentwidgets.components.widgets.card_widget.GroupHeaderCardWidget)

![GroupHeaderCardWidget](/img/components/cardwidget/GroupHeaderCardWidget.png)

`GroupHeaderCardWidget` 可用于创建上下分组布局的卡片。可通过 `addGroup()` 添加组件到新分组中，分组存放在垂直布局  `vBoxLayout` 中。

```python
class SettinsCard(GroupHeaderCardWidget):

    def __init__(self, parent=None):
        super().__init__(parent)
        self.setTitle("基本设置")
        self.setBorderRadius(8)

        self.chooseButton = PushButton("选择")
        self.comboBox = ComboBox()
        self.lineEdit = SearchLineEdit()

        self.hintIcon = IconWidget(InfoBarIcon.INFORMATION)
        self.hintLabel = BodyLabel("点击编译按钮以开始打包 👉")
        self.compileButton = PrimaryPushButton(FluentIcon.PLAY_SOLID, "编译")
        self.openButton = PushButton(FluentIcon.VIEW, "打开")
        self.bottomLayout = QHBoxLayout()

        self.chooseButton.setFixedWidth(120)
        self.lineEdit.setFixedWidth(320)
        self.comboBox.setFixedWidth(320)
        self.comboBox.addItems(["始终显示（首次打包时建议启用）", "始终隐藏"])
        self.lineEdit.setPlaceholderText("输入入口脚本的路径")

        # 设置底部工具栏布局
        self.hintIcon.setFixedSize(16, 16)
        self.bottomLayout.setSpacing(10)
        self.bottomLayout.setContentsMargins(24, 15, 24, 20)
        self.bottomLayout.addWidget(self.hintIcon, 0, Qt.AlignLeft)
        self.bottomLayout.addWidget(self.hintLabel, 0, Qt.AlignLeft)
        self.bottomLayout.addStretch(1)
        self.bottomLayout.addWidget(self.openButton, 0, Qt.AlignRight)
        self.bottomLayout.addWidget(self.compileButton, 0, Qt.AlignRight)
        self.bottomLayout.setAlignment(Qt.AlignVCenter)

        # 添加组件到分组中
        self.addGroup("resource/Rocket.svg", "构建目录", "选择 Nuitka 的输出目录", self.chooseButton)
        self.addGroup("resource/Joystick.svg", "运行终端", "设置是否显示命令行终端", self.comboBox)
        group = self.addGroup("resource/Python.svg", "入口脚本", "选择软件的入口脚本", self.lineEdit)
        group.setSeparatorVisible(True)

        # 添加底部工具栏
        self.vBoxLayout.addLayout(self.bottomLayout)
```