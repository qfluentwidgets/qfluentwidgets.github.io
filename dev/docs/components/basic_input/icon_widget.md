---
title: Icon Widget
date: 2024-07-24 13:52:00
permalink: /pages/components/iconwidget/
---

### [IconWidget](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/icon_widget/index.html#qfluentwidgets.components.widgets.icon_widget.IconWidget)

![IconWidget](/img/components/iconwidget/IconWidget.png)

The `IconWidget` is used to display icons, and supports `FluentIconBase`, `QIcon`, and `str` types of icons.

Create an icon component and adjust the icon size:
```python
w = IconWidget(FluentIcon.AIRPLANE)
w.setFixedSize(20, 20)
```

Change the icon:

```python
# Type is a subclass of FluentIconBase
w.setIcon(InfoBarIcon.SUCCESS)
w.setIcon(FluentIcon.AIRPLANE.colored(Qt.red, Qt.blue))

# Type is QIcon
w.setIcon(QIcon("/path/to/icon"))

# Type is str, representing the icon path
w.setIcon("/path/to/icon")
```