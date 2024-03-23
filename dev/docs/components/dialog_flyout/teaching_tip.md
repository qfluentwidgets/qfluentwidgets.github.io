---
title: Teaching Tip
date: 2024-02-26 19:00:01
permalink: /pages/components/teachingtip/
---

### [TeachingTip](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/teaching_tip/index.html#qfluentwidgets.components.widgets.teaching_tip.TeachingTip)

![TeachingTip](/img/components/teachingtip/TeachingTip.png)

`TeachingTip` can collect user input, display more detailed information about a project, or require user confirmation of an operation.

The following example creates a bubble pop-up window containing icons, titles, content, and a close button, which automatically disappears after 2 seconds:
```python
class Demo(QWidget):

    def __init__(self):
        super().__init__()
        self.button = PushButton("Click Me", self)
        self.button.clicked.connect(self.showTeachingTip)

        self.hBoxLayout = QHBoxLayout(self)
        self.hBoxLayout.addWidget(self.button, 0, Qt.AlignCenter)
        self.resize(600, 500)

    def showTeachingTip(self):
        TeachingTip.create(
            target=self.button,
            icon=InfoBarIcon.SUCCESS,
            title='Lesson 4',
            content="Pay your respects, express your respect, and then move on to another new stage of the whirl!",
            isClosable=True,
            tailPosition=TeachingTipTailPosition.BOTTOM,
            duration=2000,
            parent=self
        )
```

Display pictures in the bubble pop-up window:

```python
TeachingTip.create(
    target=self.button,
    image="/path/to/image.png",
    title='Lesson 4',
    content="Pay your respects, express your respect, and then move on to another new stage of the whirl!",
    isClosable=True,
    tailPosition=TeachingTipTailPosition.BOTTOM,
    duration=2000,
    parent=self
)
```

Add custom components in the bubble pop-up window:

```python
position = TeachingTipTailPosition.BOTTOM
view = TeachingTipView(
    icon=None,
    title='Lesson 5',
    content="The shortest shortcut is to take a detour, and taking a detour is my shortest shortcut.",
    image='/path/to/image.png',
    isClosable=True,
    tailPosition=position,
)

# Add components
button = PushButton('Action')
button.setFixedWidth(120)
view.addWidget(button, align=Qt.AlignRight)

w = TeachingTip.make(
    target=self.button,
    view=view,
    duration=-1,    # Close automatic disappearance
    tailPosition=position,
    parent=self
)
view.closed.connect(w.close)
```

`TeachingTip` allows the internal `bubble.view` to be replaced with an instance of `FlyoutViewBase` subclass, thereby customizing the window content.

![CustomTeachingTip](/img/components/teachingtip/CustomTeachingTip.png)

```python
class CustomFlyoutView(FlyoutViewBase):

    def __init__(self, parent=None):
        super().__init__(parent)
        self.vBoxLayout = QVBoxLayout(self)
        self.label = BodyLabel('This is a "trial", I think it is a "trial" to overcome the past, \nOnly by overcoming those childish past, can people grow.')
        self.button = PrimaryPushButton('Action')

        self.button.setFixedWidth(140)
        self.vBoxLayout.setSpacing(12)
        self.vBoxLayout.setContentsMargins(20, 16, 20, 16)
        self.vBoxLayout.addWidget(self.label)
        self.vBoxLayout.addWidget(self.button)

    def paintEvent(self, e):
        # Do not draw border and background
        pass


class Demo(QWidget):

    def __init__(self):
        super().__init__()
        self.button = PushButton("Click Me", self)
        self.button.clicked.connect(self.showTeachingTip)

        self.hBoxLayout = QHBoxLayout(self)
        self.hBoxLayout.addWidget(self.button, 0, Qt.AlignCenter)
        self.resize(600, 500)

    def showTeachingTip(self):
        TeachingTip.make(
            target=self.button,
            view=CustomFlyoutView(),
            tailPosition=TeachingTipTailPosition.RIGHT,
            duration=2000,
            parent=self
        )
```

### [PopupTeachingTip](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/teaching_tip/index.html#qfluentwidgets.components.widgets.teaching_tip.PopupTeachingTip)

`PopupTeachingTip` is modal, and can be closed directly by clicking on the blank area. The usage is exactly the same as [TeachingTip](#teachingtip).