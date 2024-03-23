---
title: 进度环
date: 2024-02-27 13:34:00
permalink: /zh/pages/components/progressring/
---

### [ProgressRing](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/progress_ring/index.html#qfluentwidgets.components.widgets.progress_ring.ProgressRing)

![ProgressRing](/img/components/progressring/ProgressRing.png)

`ProgressRing` 是一个环形进度条，可以用来表示处理进度或者用作仪表盘，使用方式和 [ProgressBar](/zh/pages/components/progressbar) 相似。

```python
ring = ProgressRing()

# 设置进度环取值范围和当前值
ring.setRange(0, 100)
ring.setValue(30)

# 显示进度环内文本
ring.setTextVisible(True)

# 调整进度环大小
ring.setFixedSize(80, 80)

# 调整厚度
ring.setStrokeWidth(4)
```

调整进度环的文本格式，比如显示温度：
```python
ring.setFormat("%v℃")
```

### [IndeterminateProgressRing](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/progress_ring/index.html#qfluentwidgets.components.widgets.progress_ring.IndeterminateProgressRing)

`IndeterminateProgressRing` 用于表示应用程序正在进行某项操作，但该操作的完成时间未知。

```python
spinner = IndeterminateProgressRing()

# 调整大小
spinner.setFixedSize(50, 50)

# 调整厚度
spinner.setStrokeWidth(4)
```

### [RadialGauge](https://qfluentwidgets.com/zh/price)

![RadialGauge](/img/components/progressring/RadialGauge.png)

`RadialGauge` 可以用来显示一系列的数据，比如速度、进度或者其他可以用角度来表示的度量。