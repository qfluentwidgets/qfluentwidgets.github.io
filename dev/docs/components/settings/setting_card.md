---
title: Setting Card
date: 2024-03-21 23:31:00
permalink: /pages/components/settingcard/
---

QFluentWidgets represents each configuration item as a setting card in the interface. User interactions on the setting card will change the value of the corresponding configuration item.

### [SettingCard](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/settings/setting_card/index.html#qfluentwidgets.components.settings.setting_card.SettingCard)

The base class for setting cards, which includes an icon, title, and content. Components can be inserted into the `hBoxLayout` to customize the setting card.

Subclasses of the setting card have implemented the `setValue(value)` function to change the value of the configuration item.

### [ComboBoxSettingCard](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/settings/setting_card/index.html#qfluentwidgets.components.settings.setting_card.ComboBoxSettingCard)

![ComboBoxSettingCard](/img/components/settingcard/ComboBoxSettingCard.png)

A dropdown option setting card, used for managing list option-type configuration items.

```python
class Config(QConfig):
    dpiScale = OptionsConfigItem(
        "MainWindow", "DpiScale", "Auto", OptionsValidator([1, 1.25, 1.5, 1.75, 2, "Auto"]), restart=True)

cfg = Config()
qconfig.load("config.json", cfg)

card = ComboBoxSettingCard(
    configItem=cfg.dpiScale,
    icon=FluentIcon.ZOOM,
    title="Interface Scaling",
    content="Adjust the size of components and text",
    texts=["100%", "125%", "150%", "175%", "200%", "Follow System Settings"]
)

cfg.dpiScale.valueChanged.connect(print)
```

### [OptionsSettingCard](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/settings/setting_card/index.html#qfluentwidgets.components.settings.setting_card.OptionsSettingCard)

![OptionsSettingCard](/img/components/settingcard/OptionsSettingCard.png)

An options setting card, used for managing list option-type configuration items, emits an `optionChanged(item: OptionsConfigItem)` signal when the current option changes.

```python
card = OptionsSettingCard(
    qconfig.themeMode,
    FluentIcon.BRUSH,
    "Application Theme",
    "Adjust the appearance of your application",
    texts=["Light", "Dark", "Follow System Settings"]
)
```

### [FolderListSettingCard](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/settings/folder_list_setting_card/index.html)

![FolderListSettingCard](/img/components/settingcard/FolderListSettingCard.png)

A folder list setting card, used for managing folder list configuration items, emits a `folderChanged(folders: List[str])` signal when the selected folder changes.

```python
class Config(QConfig):
    ConfigItem("Folders", "LocalMusic", [], FolderListValidator())

cfg = Config()
qconfig.load("config.json", cfg)

card = FolderListSettingCard(
    cfg.musicFolders,
    "Local Music Library",
    directory=QStandardPaths.writableLocation(QStandardPaths.MusicLocation),
    parent=self.musicInThisPCGroup
)
```

### [RangeSettingCard](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/settings/setting_card/index.html#qfluentwidgets.components.settings.setting_card.RangeSettingCard)

![RangeSettingCard](/img/components/settingcard/RangeSettingCard.png)

A range setting card, used for managing numerical range configuration items, emits a `valueChanged(value: int)` signal when the current option changes.

```python
class Config(QConfig):
    onlinePageSize = RangeConfigItem("Online", "PageSize", 30, RangeValidator(0, 50))

cfg = Config()
qconfig.load("config.json", cfg)

card = RangeSettingCard(
    cfg.onlinePageSize,
    Fluent.MUSIC,
    title="Page Size",
    content="The number of online songs displayed per page"
)
```

### [SwitchSettingCard](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/settings/setting_card/index.html#qfluentwidgets.components.settings.setting_card.SwitchSettingCard)

![SwitchSettingCard](/img/components/settingcard/SwitchSettingCard.png)

A switch setting card, used for managing boolean-type configuration items, emits a `checkedChanged(isChecked: bool)` signal when the selection state changes.

```python
class Config(QConfig):
    enableAcrylicBackground = ConfigItem("MainWindow", "EnableAcrylicBackground", False, BoolValidator())

cfg = Config()
qconfig.load("config.json", cfg)

card = SwitchSettingCard(
    icon=FluentIcon.TRANSPARENT,
    title="Enable Acrylic Effect",
    content="The acrylic effect offers a better visual experience but may cause window lag",
    configItem=cfg.enableAcrylicBackground
)
```

### [HyperlinkCard](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/settings/setting_card/index.html#qfluentwidgets.components.settings.setting_card.HyperlinkCard)

![HyperlinkCard](/img/components/settingcard/HyperlinkCard.png)

A hyperlink setting card that automatically redirects to a specified URL when the button on the right is clicked.

```python
card = HyperlinkCard(
    url="https://qfluentwidgets.com",
    text="Open Help Page",
    icon=FluentIcon.HELP,
    title="Help",
    content="Discover best practices for PyQt-Fluent-Widgets"
)
```

### [PushSettingCard](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/settings/setting_card/index.html#qfluentwidgets.components.settings.setting_card.PushSettingCard)

![PushSettingCard](/img/components/settingcard/PushSettingCard.png)

A button setting card that emits a `clicked()` signal when the button on the right is clicked.

```python
card = PushSettingCard(
    text="Choose",
    icon=FluentIcon.DOWNLOAD,
    title="Download folder",
    content="D:/Users/Downloads"
)
```

### [PrimaryPushSettingCard](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/settings/setting_card/index.html#qfluentwidgets.components.settings.setting_card.PrimaryPushSettingCard)

![PrimaryPushSettingCard](/img/components/settingcard/PrimaryPushSettingCard.png)

A primary color button setting card that emits a `clicked()` signal when the button on the right is clicked.

```python
card = PrimaryPushSettingCard(
    text="Choose",
    icon=FluentIcon.DOWNLOAD,
    title="Download folder",
    content="D:/Users/Downloads"
)
```

### [ExpandGroupSettingCard](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/settings/expand_setting_card/index.html#qfluentwidgets.components.settings.expand_setting_card.ExpandGroupSettingCard)

![ExpandGroupSettingCard](/img/components/settingcard/ExpandGroupSettingCard.png)

An accordion setting group card that can add multiple groups of configuration items separated by dividers. Call `addGroupWidget(widget)` to add a group of configuration items to the card.

```python
class PowerSettingCard(ExpandGroupSettingCard):

    def __init__(self, parent=None):
        super().__init__(FluentIcon.SPEED_OFF, "Power Saving Mode", "Reduce battery consumption by limiting certain notifications and background activities", parent)

        # First group
        self.modeButton = PushButton("Activate Now")
        self.modeLabel = BodyLabel("Power Saving Mode")
        self.modeButton.setFixedWidth(135)

        # Second group
        self.autoLabel = BodyLabel("Automatically Activate Power Saving Mode")
        self.autoComboBox = ComboBox()
        self.autoComboBox.addItems(["10%", "20%", "30%"])
        self.autoComboBox.setFixedWidth(135)

        # Third group
        self.lightnessLabel = BodyLabel("Lower Screen Brightness While Using Power Saving Mode")
        self.lightnessSwitchButton = SwitchButton("Off", self, IndicatorPosition.RIGHT)
        self.lightnessSwitchButton.setOnText("On")

        # Adjust the internal layout
        self.viewLayout.setContentsMargins(0, 0, 0, 0)
        self.viewLayout.setSpacing(0)

        # Add each group to the setting card
        self.add(self.modeLabel, self.modeButton)
        self.add(self.autoLabel, self.autoComboBox)
        self.add(self.lightnessLabel, this.lightnessSwitchButton)

    def add(self, label, widget):
        w = QWidget()
        w.setFixedHeight(60)

        layout = QHBoxLayout(w)
        layout.setContentsMargins(48, 12, 48, 12)

        layout.addWidget(label)
        layout.addStretch(1)
        layout.addWidget(widget)

        # Add the widget group to the setting card
        self.addGroupWidget(w)
```

Below is an example of a dynamic card for managing server configurations:

```python
class ServerCard(ExpandGroupSettingCard):

    def __init__(self, parent=None):
        super().__init__(FluentIcon.SHARE, "Server", "Configure Streaming Server", parent)
        self.addButton = PrimaryPushButton(FluentIcon.ADD, "Add Server")
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

    def __init__(self, parent=None):
        super().__init__(parent)
        self.addButton = PrimaryToolButton(FluentIcon.EDIT, self)
        self.removeButton = ToolButton(FluentIcon.DELETE, self)

        self.hBoxLayout = QHBoxLayout(self)
        self.hBoxLayout.addWidget(BodyLabel("Server"))
        self.hBoxLayout.addStretch(1)
        self.hBoxLayout.addWidget(self.addButton)
        self.hBoxLayout.addWidget(self.removeButton)

        self.hBoxLayout.setContentsMargins(20, 12, 20, 12)
```

If the accordion setting card cannot expand properly, please use `SimpleExpandGroupSettingCard` instead.


### [SettingCardGroup](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/settings/setting_card_group/index.html)

Multiple setting cards can be added to the same group using `SettingCardGroup.addSettingCard()`. The `SettingCardGroup` will automatically adjust its layout based on the height of the setting cards.