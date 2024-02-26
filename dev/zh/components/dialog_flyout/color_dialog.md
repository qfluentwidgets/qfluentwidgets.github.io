---
title: 颜色对话框
date: 2024-02-26 16:55:01
permalink: /zh/components/colordialog/
---

### [ColorDialog](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/dialog_box/color_dialog/index.html)

![ColorDialog](/img/components/colordialog/ColorDialog.png)

`ColorDialog` 用于选择颜色，选中的颜色发生变化时会发送 `colorChanged(color: QColor)` 信号。

```python
w = ColorDialog(QColor(0, 255, 255), "Choose Background Color", window, enableAlpha=False)
w.colorChanged.connect(lambda color: print(color.name()))
w.exec()
```