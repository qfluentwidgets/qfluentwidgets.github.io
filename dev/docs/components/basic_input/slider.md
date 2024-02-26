---
title: Slider
date: 2024-02-26 11:29:01
permalink: /components/slider/
---

### [Slider](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/slider/index.html#qfluentwidgets.components.widgets.slider.Slider)

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
