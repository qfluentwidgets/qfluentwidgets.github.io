---
title: Color Picker
date: 2024-02-26 16:55:01
permalink: /pages/components/colorpicker/
---

### [ColorDialog](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/dialog_box/color_dialog/index.html)

![ColorDialog](/img/components/colordialog/ColorDialog.png)

`ColorDialog` is used to select colors, and when the selected color changes, a `colorChanged(color: QColor)` signal will be sent.

```python
w = ColorDialog(QColor(0, 255, 255), "Choose Background Color", window, enableAlpha=False)
w.colorChanged.connect(lambda color: print(color.name()))
w.exec()
```

### [DropDownColorPalette](https://qfluentwidgets.com/price)

![DropDownColorPalette](/img/components/colordialog/DropDownColorPalette.png)

`DropDownColorPalette` provides a range of colors for users to choose from.

### [DropDownColorPicker](https://qfluentwidgets.com/price)

![DropDownColorPicker](/img/components/colordialog/DropDownColorPicker.png)

`DropDownColorPicker` provides a pop-up window for users to adjust and pick colors.


### [CircleColorPicker](https://qfluentwidgets.com/price)

![CircleColorPicker](/img/components/colordialog/CircleColorPicker.png)

`CircleColorPicker` provides a range of colors for users to choose from.

### [ScreenColorPicker](https://qfluentwidgets.com/price)

![ScreenColorPicker](/img/components/colordialog/ScreenColorPicker.png)

`ScreenColorPicker` is used to pick colors from any location on the screen.