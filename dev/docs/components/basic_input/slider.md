---
title: Slider
date: 2024-02-26 11:29:01
permalink: /pages/components/slider/
---

### [Slider](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/slider/index.html#qfluentwidgets.components.widgets.slider.Slider)

![Slider](/img/components/slider/Slider.png)

`Slider` is used for selection within a fixed interval, and its usage is exactly the same as `QSlider`.

Horizontal slider:
```python
slider = Slider(Qt.Horizontal)
slider.setFixedWidth(200)

# Set the value range and current value
slider.setRange(0, 50)
slider.setValue(20)

# Get the current value
print(slider.value())
```

Vertical slider:
```python
Slider(Qt.Vertical)
```

### [ToolTipSlider](https://qfluentwidgets.com/price)

![ToolTipSlider](/img/components/slider/ToolTipSlider.png)

`ToolTipSlider` is a slider with a tooltip. Its usage is identical to the [Slider](#slider).

### [RangeSlider](https://qfluentwidgets.com/price)

![RangeSlider](/img/components/slider/RangeSlider.png)

`RangeSlider` is used to select a range of values.