---
title: 设置
date: 2023-08-17 19:15:59
permalink: /zh/pages/setting/
---

QFluentWidgets 将每个配置项表示为界面的一个设置卡。用户在设置卡上的交互行为将会改变相应配置项的值，同时 QFluentWidgets 会自动更新配置文件。

## 配置项

 `ConfigItem` 类表示一个配置项， `QConfig` 类用于读写 `ConfigItem` 项的值。当 `ConfigItem` 的值发生改变时，`QConfig` 类会自动将配置项的值同步到配置文件中。

由于配置文件可能被用户手动篡改，导致配置项的值非法，所以 QFluentWidgets 使用 `ConfigValidator` 类及其子类来验证和修正配置项的值。

QFluentWidgets 使用 json 文件来保存配置，而 json 文件只支持字符串、布尔值、列表和字典，对于枚举类或者 `QColor`，无法直接将它们的值写入 json 文件中。为了解决这个问题，QFluentWidgets 提供了 `ConfigSerializer` 类及其子类来序列化和反序列化配置项。举个栗子，可以使用 `ColorSerializer` 来序列化值类型为 `QColor` 的配置项。

`ConfigItem` 的属性如下表所示：

| 属性         | 数据类型           | 描述                                         |
| ------------ | ------------------ | -------------------------------------------- |
| `group`      | `str`              | 配置项所属的组别                             |
| `name`       | `str`              | 配置项的名字                                 |
| `default`    | `Any`              | 配置项的默认值，当配置值非法时将被默认值替代 |
| `validator`  | `ConfigValidator`  | 配置校验器                                   |
| `serializer` | `ConfigSerializer` | 配置序列化器                                 |
| `restart`    | `bool`             | 配置更新后是否重启应用                       |

为了正确读写配置项的值，应该将 `ConfigItem` 的实例添加到 `QConfig` 子类的类属性中，然后使用 `qconfig.load()` 来加载配置文件。下面是一个简单的例子：

```python
class MvQuality(Enum):
    """ MV quality enumeration class """

    FULL_HD = "Full HD"
    HD = "HD"
    SD = "SD"
    LD = "LD"

    @staticmethod
    def values():
        return [q.value for q in MvQuality]


class Config(QConfig):
    """ Config of application """

    # main window
    enableAcrylic = ConfigItem("MainWindow", "EnableAcrylic", False, BoolValidator())
    playBarColor = ColorConfigItem("MainWindow", "PlayBarColor", "#225C7F")
    themeMode = OptionsConfigItem("MainWindow", "ThemeMode", "Light", OptionsValidator(["Light", "Dark", "Auto"]), restart=True)
    recentPlaysNumber = RangeConfigItem("MainWindow", "RecentPlayNumbers", 300, RangeValidator(10, 300))

    # online
    onlineMvQuality = OptionsConfigItem("Online", "MvQuality", MvQuality.FULL_HD, OptionsValidator(MvQuality), EnumSerializer(MvQuality))


# 创建配置实例并使用配置文件来初始化它
cfg = Config()
qconfig.load('config/config.json', cfg)
```

## 设置卡

PyQt-Fluent-Widgets 内置了许多类型的设置卡：

|          Class           | 描述               |
| :----------------------: | ------------------ |
|     `HyperlinkCard`      | 超链接设置卡       |
|    `ColorSettingCard`    | 拾色器设置卡       |
| `CustomColorSettingCard` | 颜色选择按钮设置卡 |
|  `ComboBoxSettingCard`   | 下拉框设置卡       |
|    `RangeSettingCard`    | 滑动条设置卡       |
|    `PushSettingCard`     | 按钮设置卡         |
| `PrimaryPushSettingCard` | 主题色按钮设置卡   |
|   `SwitchSettingCard`    | 开关按钮设置卡     |
|   `OptionsSettingCard`   | 单选按钮设置卡     |
| `FolderListSettingCard`  | 文件夹列表设置卡   |

可以通过 `SettingCardGroup.addSettingCard()` 将多个设置卡添加到同一个组中，`SettingCardGroup` 会根据设置卡的高度自动调整自己的布局。

对于上述组件的具体使用方式，参见 [setting_interface.py](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/blob/master/examples/window/settings/setting_interface.py).



