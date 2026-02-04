---
title: Scroll Area
date: 2024-02-27 10:45:00
permalink: /pages/components/scrollarea/
---

### [SingleDirectionScrollArea](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/scroll_area/index.html#qfluentwidgets.components.widgets.scroll_area.SingleDirectionScrollArea)

`SingleDirectionScrollArea` implements smooth scrolling in a single direction. This component can be used when there is too much data to display in the vertical or horizontal direction.

Vertical direction:
```python
scrollArea = SingleDirectionScrollArea(orient=Qt.Vertical)
scrollArea.resize(200, 400)

# There are many components in the vertical direction
view = QWidget()
layout = QVBoxLayout(view)
for i in range(1, 100):
    layout.addWidget(QPushButton(f"Button {i}"))

scrollArea.setWidget(view)
```

Horizontal direction:
```python
scrollArea = SingleDirectionScrollArea(orient=Qt.Horizontal)
scrollArea.resize(400, 150)

# There are many components in the horizontal direction
view = QWidget()
layout = QHBoxLayout(view)
for i in range(1, 100):
    layout.addWidget(QPushButton(f"Button {i}"))

scrollArea.setWidget(view)
```

By default, the background and border of the scroll area are opaque. To change to a transparent background and remove the border:
```python
scrollArea.setStyleSheet("QScrollArea{background: transparent; border: none}")

# You must also add a transparent background style to the internal view
view.setStyleSheet("QWidget{background: transparent}")
```

You can also enable transparent background by api, note that this api must be called after `scrollArea.setWidget(view)`:

```python
scrollArea.enableTransparentBackground()
```


### [ScrollArea](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/scroll_area/index.html#qfluentwidgets.components.widgets.scroll_area.ScrollArea)

`ScrollArea` implements smooth scrolling in the horizontal and vertical directions. The usage is exactly the same as `QScrollArea`.

In some cases, smooth scrolling may cause the interface to stutter, and the method to cancel smooth scrolling is as follows:
```python
scrollArea.setSmoothMode(SmoothMode.NO_SMOOTH)
```

### [SmoothScrollArea](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/scroll_area/index.html#qfluentwidgets.components.widgets.scroll_area.SmoothScrollArea)

`SmoothScrollArea` uses `QPropertyAnimation` to implement smooth scrolling in the horizontal and vertical directions. The usage is exactly the same as `QScrollArea`.

```python
class Demo(SmoothScrollArea):

    def __init__(self):
        super().__init__()
        # Load a high-resolution image
        self.label = ImageLabel("path/to/image.png")

        # Custom smooth scrolling animation
        self.setScrollAnimation(Qt.Vertical, 400, QEasingCurve.OutQuint)
        self.setScrollAnimation(Qt.Horizontal, 400, QEasingCurve.OutQuint)

        # Scroll to a specific area
        self.horizontalScrollBar().setValue(1900)

        self.setWidget(self.label)
        self.resize(1200, 800)
```

### [SmoothScrollDelegate](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/index.html#qfluentwidgets.components.SmoothScrollDelegate.useAni)

`SmoothScrollDelegate` can proxy the wheel events of scrollable components to implement smooth scrolling feature, and automatically replace the horizontal and vertical scrollbars of `ScrollBar`. For example, the implementation code for `ScrollArea` is as follows:

```python
class ScrollArea(QScrollArea):

    def __init__(self, parent=None):
        super().__init__(parent)
        # Scroll delegate
        self.scrollDelegate = SmoothScrollDelegate(self)
```

### [SmoothScroll](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/common/smooth_scroll/index.html#qfluentwidgets.common.smooth_scroll.SmoothScroll)

All scrollable components in QFluentWidgets, such as scroll areas, tree components, table components, and text edit, use the smooth scrolling algorithm implemented by the `SmoothScroll` class.

Since smooth scrolling triggers frequent interface redraws, it may cause lag on high-DPI screens. Therefore, starting from v1.11.0, `SmoothScroll` includes two internal scrolling algorithms:

* When the width of the scrollable component is less than `widthThreshold` (default is 2560px), a fixed-frame-rate smooth scrolling algorithm is used.
* When the width of the scrollable component is greater than `widthThreshold`, a time-driven adaptive smooth scrolling algorithm is used to optimize scrolling performance.

If you notice that a scrollable component exhibits lag even at smaller widths, you can adjust `widthThreshold` to mitigate this issue. Taking a scroll area as an example:

```python
# Adjust the width threshold for the vertical scrolling algorithm switch to 1000px
scrollArea.scrollDelegate.verticalSmoothScroll.widthThreshold = 1000
```

If you find that the performance of the fixed-frame-rate smooth scrolling algorithm meets your expectations at any resolution, you can directly disable the adaptive algorithm:

```python
scrollArea.scrollDelegate.verticalSmoothScroll.setDynamicEngineEnabled(False)
```