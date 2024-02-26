---
title: 滑动条
date: 2024-02-26 11:29:01
permalink: /zh/components/slider/
---

### [Slider](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/slider/index.html#qfluentwidgets.components.widgets.slider.Slider)

![Slider](/img/components/slider/Slider.png)

`Slider` 用于在一个固定区间内进行选择，使用方式和 `QSlider` 完全相同。

水平滑动条：
```python
slider = Slider(Qt.Horizontal)
slider.setFixedWidth(200)

# 设置取值范围和当前值
slider.setRange(0, 50)
slider.setValue(20)

# 获取当前值
print(slider.value())
```

垂直滑动条：
```python
Slider(Qt.Vertical)
```

