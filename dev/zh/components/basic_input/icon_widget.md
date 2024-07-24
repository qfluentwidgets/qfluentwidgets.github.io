---
title: 图标组件
date: 2024-07-24 13:52:00
permalink: /zh/pages/components/iconwidget/
---

### [IconWidget](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/icon_widget/index.html#qfluentwidgets.components.widgets.icon_widget.IconWidget)

![IconWidget](/img/components/iconwidget/IconWidget.png)

`IconWidget` 用于显示图标，支持传入 `FluentIconBase`、`QIcon` 和 `str` 类型的图标。

创建一个图标组件并调整图标大小：
```python
w = IconWidget(FluentIcon.AIRPLANE)
w.setFixedSize(20, 20)
```

更换图标：
```python
# 类型为 FluentIconBase 子类
w.setIcon(InfoBarIcon.SUCCESS)
w.setIcon(FluentIcon.AIRPLANE.colored(Qt.red, Qt.blue))

# 类型为 QIcon
w.setIcon(QIcon("/path/to/icon"))

# 类型为 str，代表图标路径
w.setIcon("/path/to/icon")
```
