---
title: 配置类
date: 2024-03-21 23:31:00
permalink: /zh/pages/components/config/
---


## 设计原理
`ConfigItem` 类表示一个配置项，配置类 `QConfig` 类用于读写配置项的值。当 `ConfigItem` 的值发生改变时会发送 `valueChanged(value: object)` 信号，`QConfig` 类也会自动将配置值同步到 json 配置文件中。

配置文件可能被用户篡改，导致配置项的值非法，所以 QFluentWidgets 使用 `ConfigValidator` 类及其子类来验证和修正配置项的值。

json 文件只支持字符串、布尔值、列表和字典，对于枚举类或者 `QColor`，无法直接将它们的值写入 json 文件中。为了解决这个问题，QFluentWidgets 提供了 `ConfigSerializer` 类及其子类来序列化和反序列化配置项。举个栗子，可以使用 `ColorSerializer` 来序列化值类型为 `QColor` 的配置项。

`ConfigItem` 的属性如下表所示，各个子类的构造函数见 [API 文档](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/common/config/index.html#qfluentwidgets.common.config.ConfigItem)：

| 属性         | 数据类型           | 描述                                         |
| ------------ | ------------------ | -------------------------------------------- |
| `group`      | `str`              | 配置项所属的组别                             |
| `name`       | `str`              | 配置项的名字                                 |
| `default`    | `Any`              | 配置项的默认值，当配置值非法时将被默认值替代 |
| `validator`  | `ConfigValidator`  | 配置校验器                                   |
| `serializer` | `ConfigSerializer` | 配置序列化器                                 |
| `restart`    | `bool`             | 配置更新后是否重启应用                       |


## 使用方式
可通过下述步骤创建并使用自定义配置类 `MyConfig`：

1. 继承 `QConfig`
2. 将 `ConfigItem` 实例添加到 `MyConfig` 的类属性中
3. 创建全局唯一的 `MyConfig` 单例 `cfg`
4. 调用 `qconfig.load("/path/to/config.json", cfg)` 加载配置文件
5. 使用 `cfg.get(cfg.xxx)` 读取配置值，`cfg.set(cfg.xxx, value)` 写入配置值

下面是一个简单的例子：

```python
from enum import Enum

from qfluentwidgets import *


class MvQuality(Enum):
    """ MV quality enumeration class """

    FULL_HD = "Full HD"
    HD = "HD"
    SD = "SD"
    LD = "LD"

    @staticmethod
    def values():
        return [q.value for q in MvQuality]


class MyConfig(QConfig):
    """ Config of application """

    # main window
    enableAcrylic = ConfigItem("MainWindow", "EnableAcrylic", False, BoolValidator())
    playBarColor = ColorConfigItem("MainWindow", "PlayBarColor", "#225C7F")
    themeMode = OptionsConfigItem("MainWindow", "ThemeMode", "Light", OptionsValidator(["Light", "Dark", "Auto"]), restart=True)
    recentPlaysNumber = RangeConfigItem("MainWindow", "RecentPlayNumbers", 300, RangeValidator(10, 300))

    # online
    onlineMvQuality = OptionsConfigItem("Online", "MvQuality", MvQuality.FULL_HD, OptionsValidator(MvQuality), EnumSerializer(MvQuality))


# 创建配置实例并使用配置文件来初始化它
cfg = MyConfig()
qconfig.load('config/config.json', cfg)
```