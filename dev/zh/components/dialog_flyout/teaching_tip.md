---
title: 气泡弹窗
date: 2024-02-26 19:00:01
permalink: /zh/pages/components/teachingtip/
---

### [TeachingTip](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/teaching_tip/index.html#qfluentwidgets.components.widgets.teaching_tip.TeachingTip)

![TeachingTip](/img/components/teachingtip/TeachingTip.png)

`TeachingTip` 可以收集用户的输入、显示项目的更多详细信息或要求用户确认操作。

下述示例创建了一个包含图标、标题、内容和关闭按钮的气泡弹窗，并在 2s 后自动消失：
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
            content="表达敬意吧，表达出敬意，然后迈向回旋的另一个全新阶段！",
            isClosable=True,
            tailPosition=TeachingTipTailPosition.BOTTOM,
            duration=2000,
            parent=self
        )
```

在气泡弹窗中显示图片：

```python
TeachingTip.create(
    target=self.button,
    image="/path/to/image.png",
    title='Lesson 4',
    content="表达敬意吧，表达出敬意，然后迈向回旋的另一个全新阶段！",
    isClosable=True,
    tailPosition=TeachingTipTailPosition.BOTTOM,
    duration=2000,
    parent=self
)
```

在气泡弹窗中添加自定义组件：

```python
position = TeachingTipTailPosition.BOTTOM
view = TeachingTipView(
    icon=None,
    title='Lesson 5',
    content="最短的捷径就是绕远路，绕远路才是我的最短捷径。",
    image='/path/to/image.png',
    isClosable=True,
    tailPosition=position,
)

# 添加组件
button = PushButton('Action')
button.setFixedWidth(120)
view.addWidget(button, align=Qt.AlignRight)

w = TeachingTip.make(
    target=self.button,
    view=view,
    duration=-1,    # 关闭自动消失
    tailPosition=position,
    parent=self
)
view.closed.connect(w.close)
```

`TeachingTip` 允许更换内部的 `bubble.view` 为 `FlyoutViewBase` 子类的实例，从而自定义窗口内容。

![CustomTeachingTip](/img/components/teachingtip/CustomTeachingTip.png)

```python
class CustomFlyoutView(FlyoutViewBase):

    def __init__(self, parent=None):
        super().__init__(parent)
        self.vBoxLayout = QVBoxLayout(self)
        self.label = BodyLabel('这是一场「试炼」，我认为这就是一场为了战胜过去的「试炼」，\n只有战胜了那些幼稚的过去，人才能有所成长。')
        self.button = PrimaryPushButton('Action')

        self.button.setFixedWidth(140)
        self.vBoxLayout.setSpacing(12)
        self.vBoxLayout.setContentsMargins(20, 16, 20, 16)
        self.vBoxLayout.addWidget(self.label)
        self.vBoxLayout.addWidget(self.button)

    def paintEvent(self, e):
        # 不绘制边框和背景
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

`PopupTeachingTip` 是模态的，点击空白处可直接关闭，使用方法和 [TeachingTip](#teachingtip) 完全相同。