---
title: 颜色选择器
date: 2024-02-26 16:55:01
permalink: /zh/pages/components/colorpicker/
---

### [ColorDialog](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/dialog_box/color_dialog/index.html)

![ColorDialog](/img/components/colordialog/ColorDialog.png)

`ColorDialog` 用于选择颜色，选中的颜色发生变化时会发送 `colorChanged(color: QColor)` 信号。

```python
w = ColorDialog(QColor(0, 255, 255), "Choose Background Color", window, enableAlpha=False)
w.colorChanged.connect(lambda color: print(color.name()))
w.exec()
```


### [DropDownColorPalette](https://qfluentwidgets.com/zh/price)

![DropDownColorPalette](/img/components/colordialog/DropDownColorPalette.png)

`DropDownColorPalette` 提供了一系列颜色供用户选择。



### [DropDownColorPicker](https://qfluentwidgets.com/zh/price)

![DropDownColorPicker](/img/components/colordialog/DropDownColorPicker.png)

`DropDownColorPicker` 提供了弹出窗口供用户调整和挑选颜色。


### [CircleColorPicker](https://qfluentwidgets.com/zh/price)

![CircleColorPicker](/img/components/colordialog/CircleColorPicker.png)

`CircleColorPicker` 提供了一系列颜色供用户选择。

### [ScreenColorPicker](https://qfluentwidgets.com/zh/price)

![ScreenColorPicker](/img/components/colordialog/ScreenColorPicker.png)

`ScreenColorPicker` 用于选取屏幕任意位置的颜色。