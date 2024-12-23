---
title: 设置卡
date: 2024-03-21 23:31:00
permalink: /zh/pages/components/settingcard/
---

QFluentWidgets 将每个配置项表示为界面的一个设置卡。用户在设置卡上的交互行为将会改变相应配置项的值。

### [SettingCard](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/settings/setting_card/index.html#qfluentwidgets.components.settings.setting_card.SettingCard)

设置卡基类，内部包含图标、标题和内容，可在 `hBoxLayout` 中插入组件来自定义设置卡。

设置卡子类都实现了 `setValue(value)` 函数来改变配置项的值。


### [ComboBoxSettingCard](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/settings/setting_card/index.html#qfluentwidgets.components.settings.setting_card.ComboBoxSettingCard)

![ComboBoxSettingCard](/img/components/settingcard/ComboBoxSettingCard.png)

下拉选项设置卡，用于操作列表选项类型的配置项。

```python
class Config(QConfig):
    dpiScale = OptionsConfigItem(
        "MainWindow", "DpiScale", "Auto", OptionsValidator([1, 1.25, 1.5, 1.75, 2, "Auto"]), restart=True)

cfg = Config()
qconfig.load("config.json", cfg)

card = ComboBoxSettingCard(
    configItem=cfg.dpiScale,
    icon=FluentIcon.ZOOM,
    title="界面缩放",
    content="调整组件和字体的大小",
    texts=["100%", "125%", "150%", "175%", "200%", "跟随系统设置"]
)

cfg.dpiScale.valueChanged.connect(print)
```

### [OptionsSettingCard](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/settings/setting_card/index.html#qfluentwidgets.components.settings.setting_card.OptionsSettingCard)

![OptionsSettingCard](/img/components/settingcard/OptionsSettingCard.png)

选项设置卡，用于操作列表选项类型的配置项，当前选项改变时发出 `optionChanged(item: OptionsConfigItem)` 信号。

```python
card = OptionsSettingCard(
    qconfig.themeMode,
    FluentIcon.BRUSH,
    "应用主题",
    "调整你的应用外观",
    texts=["浅色", "深色", "跟随系统设置"]
)
```

### [FolderListSettingCard](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/settings/folder_list_setting_card/index.html)

![FolderListSettingCard](/img/components/settingcard/FolderListSettingCard.png)

文件夹列表设置卡，用于操作文件夹列表配置项，当选中的文件夹改变时发出 `folderChanged(folders: List[str])` 信号。

```python
class Config(QConfig):
    ConfigItem("Folders", "LocalMusic", [], FolderListValidator())

cfg = Config()
qconfig.load("config.json", cfg)

card = FolderListSettingCard(
    cfg.musicFolders,
    "本地音乐库",
    directory=QStandardPaths.writableLocation(QStandardPaths.MusicLocation),
    parent=self.musicInThisPCGroup
)
```


### [RangeSettingCard](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/settings/setting_card/index.html#qfluentwidgets.components.settings.setting_card.RangeSettingCard)

![RangeSettingCard](/img/components/settingcard/RangeSettingCard.png)

范围设置卡，用于操作数值范围的配置项，当前选项改变时发出 `valueChanged(value: int)` 信号。

```python
class Config(QConfig):
    onlinePageSize = RangeConfigItem("Online", "PageSize", 30, RangeValidator(0, 50))

cfg = Config()
qconfig.load("config.json", cfg)

card = RangeSettingCard(
    cfg.onlinePageSize,
    Fluent.MUSIC,
    title="分页大小",
    content="每页显示的在线歌曲数量"
)
```


### [SwitchSettingCard](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/settings/setting_card/index.html#qfluentwidgets.components.settings.setting_card.SwitchSettingCard)

![SwitchSettingCard](/img/components/settingcard/SwitchSettingCard.png)

开关设置卡，用于操作布尔类型的配置项，选择状态改变时发出 `checkedChanged(isChecked: bool)` 信号。

```python
class Config(QConfig):
    enableAcrylicBackground = ConfigItem("MainWindow", "EnableAcrylicBackground", False, BoolValidator())

cfg = Config()
qconfig.load("config.json", cfg)

card = SwitchSettingCard(
    icon=FluentIcon.TRANSPARENT,
    title="启用亚克力效果",
    content="亚克力效果的视觉体验更好，但是可能导致窗口卡顿",
    configItem=cfg.enableAcrylicBackground
)
```


### [HyperlinkCard](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/settings/setting_card/index.html#qfluentwidgets.components.settings.setting_card.HyperlinkCard)

![HyperlinkCard](/img/components/settingcard/HyperlinkCard.png)

超链接设置卡，点击右侧按钮时可自动跳转到指定 URL。

```python
card = HyperlinkCard(
    url="https://qfluentwidgets.com",
    text="打开帮助页面",
    icon=FluentIcon.HELP,
    title="帮助",
    content="发现 PyQt-Fluent-Widgets 的最佳实践"
)
```


### [PushSettingCard](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/settings/setting_card/index.html#qfluentwidgets.components.settings.setting_card.PushSettingCard)

![PushSettingCard](/img/components/settingcard/PushSettingCard.png)

按钮设置卡，点击右侧按钮时会发送 `clicked()` 信号。

```python
card = PushSettingCard(
    text="选择文件夹",
    icon=FluentIcon.DOWNLOAD,
    title="下载目录",
    content="D:/Users/下载"
)
```


### [PrimaryPushSettingCard](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/settings/setting_card/index.html#qfluentwidgets.components.settings.setting_card.PrimaryPushSettingCard)

![PrimaryPushSettingCard](/img/components/settingcard/PrimaryPushSettingCard.png)

主题色按钮设置卡，点击右侧按钮时会发送 `clicked()` 信号。

```python
card = PrimaryPushSettingCard(
    text="选择文件夹",
    icon=FluentIcon.DOWNLOAD,
    title="下载目录",
    content="D:/Users/下载"
)
```

### [ExpandGroupSettingCard](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/settings/expand_setting_card/index.html#qfluentwidgets.components.settings.expand_setting_card.ExpandGroupSettingCard)

![ExpandGroupSettingCard](/img/components/settingcard/ExpandGroupSettingCard.png)

手风琴设置组卡片，可添加多组配置项，每组用分隔符隔开，调用 `addGroupWidget(widget)` 即可添加一组配置项到卡片中。

```python
class PowerSettingCard(ExpandGroupSettingCard):

    def __init__(self, parent=None):
        super().__init__(FluentIcon.SPEED_OFF, "节电模式", "通过限制某些通知和后台活动降低电池消耗", parent)

        # 第一组
        self.modeButton = PushButton("立即启用")
        self.modeLabel = BodyLabel("节电模式")
        self.modeButton.setFixedWidth(135)

        # 第二组
        self.autoLabel = BodyLabel("自动开启节电模式")
        self.autoComboBox = ComboBox()
        self.autoComboBox.addItems(["10%", "20%", "30%"])
        self.autoComboBox.setFixedWidth(135)

        # 第三组
        self.lightnessLabel = BodyLabel("使用节电模式时屏幕亮度较低")
        self.lightnessSwitchButton = SwitchButton("关", self, IndicatorPosition.RIGHT)
        self.lightnessSwitchButton.setOnText("开")

        # 调整内部布局
        self.viewLayout.setContentsMargins(0, 0, 0, 0)
        self.viewLayout.setSpacing(0)

        # 添加各组到设置卡中
        self.add(self.modeLabel, self.modeButton)
        self.add(self.autoLabel, self.autoComboBox)
        self.add(self.lightnessLabel, self.lightnessSwitchButton)

    def add(self, label, widget):
        w = QWidget()
        w.setFixedHeight(60)

        layout = QHBoxLayout(w)
        layout.setContentsMargins(48, 12, 48, 12)

        layout.addWidget(label)
        layout.addStretch(1)
        layout.addWidget(widget)

        # 添加组件到设置卡
        self.addGroupWidget(w)
```

下面是一个动态删减手风琴设置卡内部组件的例子：

```python
class ServerCard(ExpandGroupSettingCard):

    def __init__(self, parent=None):
        super().__init__(FluentIcon.SHARE, "服务器", "配置流媒体服务器", parent)
        self.addButton = PrimaryPushButton(FluentIcon.ADD, "添加服务器")
        self.addWidget(self.addButton)
        self.addButton.clicked.connect(self.addServerCard)

    def addServerCard(self):
        item = ServerItem(self)
        item.removeButton.clicked.connect(lambda: self.removeServerCard(item))
        self.addGroupWidget(item)

    def removeServerCard(self, card):
        self.removeGroupWidget(card)
        card.hide()
        card.deleteLater()


class ServerItem(QWidget):

    def __init__(self, parent = None):
        super().__init__(parent)
        self.addButton = PrimaryToolButton(FluentIcon.EDIT, self)
        self.removeButton = ToolButton(FluentIcon.DELETE, self)

        self.hBoxLayout = QHBoxLayout(self)
        self.hBoxLayout.addWidget(BodyLabel("服务器"))
        self.hBoxLayout.addStretch(1)
        self.hBoxLayout.addWidget(self.addButton)
        self.hBoxLayout.addWidget(self.removeButton)

        self.hBoxLayout.setContentsMargins(20, 12, 20, 12)

```

如果无法正常展开手风琴设置卡，请换成 `SimpleExpandGroupSettingCard`。


### [SettingCardGroup](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/settings/setting_card_group/index.html)

可以通过 `SettingCardGroup.addSettingCard()` 将多个设置卡添加到同一个组中，`SettingCardGroup` 会根据设置卡的高度自动调整自己的布局。