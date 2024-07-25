---
title: 滚动区域
date: 2024-02-27 10:45:00
permalink: /zh/pages/components/scrollarea/
---

### [SingleDirectionScrollArea](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/scroll_area/index.html#qfluentwidgets.components.widgets.scroll_area.SingleDirectionScrollArea)

`SingleDirectionScrollArea` 实现了单方向的平滑滚动，当竖直方向或者水平方向有太多数据需要展示时，可使用此组件。

竖直方向：
```python
scrollArea = SingleDirectionScrollArea(orient=Qt.Vertical)
scrollArea.resize(200, 400)

# 竖直方向有很多组件
view = QWidget()
layout = QVBoxLayout(view)
for i in range(1, 100):
    layout.addWidget(QPushButton(f"按钮 {i}"))

scrollArea.setWidget(view)
```

水平方向：
```python
scrollArea = SingleDirectionScrollArea(orient=Qt.Horizontal)
scrollArea.resize(400, 150)

# 水平方向有很多组件
view = QWidget()
layout = QHBoxLayout(view)
for i in range(1, 100):
    layout.addWidget(QPushButton(f"按钮 {i}"))

scrollArea.setWidget(view)
```

默认情况下滚动区域的背景和边框不透明，如需改为透明背景并移除边框：
```python
scrollArea.setStyleSheet("QScrollArea{background: transparent; border: none}")

# 必须给内部的视图也加上透明背景样式
view.setStyleSheet("QWidget{background: transparent}")
```

也可以调用内置方法修改为透明背景，注意此方法需要在 `scrollArea.setWidget(view)` 之后调用才会生效：

```python
scrollArea.enableTransparentBackground()
```

### [ScrollArea](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/scroll_area/index.html#qfluentwidgets.components.widgets.scroll_area.ScrollArea)

`ScrollArea` 实现了水平和竖直方向的平滑滚动，使用方式和 `QScrollArea` 完全相同。

### [ScrollArea](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/scroll_area/index.html#qfluentwidgets.components.widgets.scroll_area.ScrollArea)

`ScrollArea` 实现了水平和竖直方向的平滑滚动，使用方式和 `QScrollArea` 完全相同。

在某些情况下平滑滚动可能导致界面卡顿，取消平滑滚动的方法如下：
```python
scrollArea.setSmoothMode(SmoothMode.NO_SMOOTH)
```

### [SmoothScrollArea](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/scroll_area/index.html#qfluentwidgets.components.widgets.scroll_area.SmoothScrollArea)

`SmoothScrollArea` 使用 `QPropertyAnimation` 实现了水平和竖直方向的平滑滚动，使用方式和 `QScrollArea` 完全相同。

```python
class Demo(SmoothScrollArea):

    def __init__(self):
        super().__init__()
        # 加载一张分辨率很高的图片
        self.label = ImageLabel("path/to/image.png")

        # 自定义平滑滚动动画
        self.setScrollAnimation(Qt.Vertical, 400, QEasingCurve.OutQuint)
        self.setScrollAnimation(Qt.Horizontal, 400, QEasingCurve.OutQuint)

        # 滚动到指定区域
        self.horizontalScrollBar().setValue(1900)

        self.setWidget(self.label)
        self.resize(1200, 800)
```