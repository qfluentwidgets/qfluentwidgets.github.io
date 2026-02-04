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

下述方法也能实现透明背景，注意此方法需要在 `scrollArea.setWidget(view)` 之后调用才会生效：

```python
scrollArea.enableTransparentBackground()
```

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

### [SmoothScrollDelegate](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/index.html#qfluentwidgets.components.SmoothScrollDelegate.useAni)

`SmoothScrollDelegate` 能够代理滚动组件的滚轮事件，实现平滑滚动功能，并自动替换滚动组件的水平滚动条和垂直滚动条为组件库的 `ScrollScroll`。比如 `ScrollArea` 的实现代码如下：

```python
class ScrollArea(QScrollArea):

    def __init__(self, parent=None):
        super().__init__(parent)
        # 滚动代理
        self.scrollDelagate = SmoothScrollDelegate(self)
```

### [SmoothScroll](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/common/smooth_scroll/index.html#qfluentwidgets.common.smooth_scroll.SmoothScroll)

组件库里的所有能够滚动的组件，比如滚动区域、树状组件、表格组件和文本编辑框，它们所使用的平滑滚动算法都由 `SmoothScroll` 类实现。由于平滑滚动会触发界面的频繁重绘，在高分屏下可能会导致滚动卡顿、迟滞，因此从 1.11.0 版本开始， `SmoothScroll` 内部有两套滚动算法：

* 当滚动组件的宽度小于 `widthThreshold`（默认值是 2560px），采用固定帧率的平滑滚动算法
* 当滚动组件的宽度大于 `widthThreshold`，采用时间驱动的自适应平滑滚动算法来优化滚动性能

如果你觉得滚动组件在小宽度下也会发生迟滞现象，可以调整 `widthThreshold` 来减缓此问题，以滚动区域为例：

```python
# 调整垂直滚动切换算法的宽度阈值为 1000px
scrollArea.scrollDelagate.verticalSmoothScroll.widthThreshold = 1000
```

如果觉得固定帧率平滑滚动算法的表现在任何分辨率下都能满足你的预期，可以直接关闭自适应算法：

```python
scrollArea.scrollDelagate.verticalSmoothScroll.setDynamicEngineEnabled(False)
```