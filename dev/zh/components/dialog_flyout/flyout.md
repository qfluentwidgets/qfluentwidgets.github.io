---
title: 弹出组件
date: 2024-02-26 16:55:01
permalink: /zh/pages/components/flyout/
---

### [Flyout](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/flyout/index.html#qfluentwidgets.components.widgets.flyout.Flyout)

![Flyout](/img/components/flyout/Flyout.png)

`Flyout` 可以收集用户的输入、显示项目的更多详细信息或要求用户确认操作。与对话框不同的是，可以通过点击空白位置来轻松关闭弹出窗口。

下述示例创建了一个包含图标、标题、内容和关闭按钮的弹出窗口：
```python
class Demo(QWidget):

    def __init__(self):
        super().__init__()
        self.button = PushButton("Click Me", self)
        self.button.clicked.connect(self.showFlyout)

        self.hBoxLayout = QHBoxLayout(self)
        self.hBoxLayout.addWidget(self.button, 0, Qt.AlignCenter)
        self.resize(600, 500)

    def showFlyout(self):
        Flyout.create(
            icon=InfoBarIcon.SUCCESS,
            title='Lesson 4',
            content="表达敬意吧，表达出敬意，然后迈向回旋的另一个全新阶段！",
            target=self.button,
            parent=self,
            isClosable=True,
            aniType=FlyoutAnimationType.PULL_UP
        )
```

也可以在弹出窗口中显示图片：

```python
Flyout.create(
    image="/path/to/image.png",
    title='Lesson 4',
    content="表达敬意吧，表达出敬意，然后迈向回旋的另一个全新阶段！",
    target=self.button,
    parent=self,
    isClosable=False
)
```

下述例子向弹出窗口中添加了自定义组件：

```python
view = FlyoutView(
    title='Lesson 5',
    content="最短的捷径就是绕远路，绕远路才是我的最短捷径。",
    image='/path/to/image.png',
    isClosable=True
)

# 添加按钮
button = PushButton('Action')
button.setFixedWidth(120)
view.addWidget(button, align=Qt.AlignRight)

# 调整布局
view.widgetLayout.insertSpacing(1, 5)
view.widgetLayout.addSpacing(5)

# 显示弹出窗口
w = Flyout.make(view, self.button, self)
view.closed.connect(w.close)
```

### [FlyoutViewBase](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/flyout/index.html#qfluentwidgets.components.widgets.flyout.FlyoutViewBase)

![CustomFlyout](/img/components/flyout/CustomFlyout.png)

`Flyout` 只是个容器，内部的 `view` 可被任何 `FlyoutViewBase` 的子类实例替换，从而自定义窗口内容。

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


class Demo(QWidget):

    def __init__(self):
        super().__init__()
        self.button = PushButton("Click Me", self)
        self.button.clicked.connect(self.showFlyout)

        self.hBoxLayout = QHBoxLayout(self)
        self.hBoxLayout.addWidget(self.button, 0, Qt.AlignCenter)
        self.resize(600, 500)

    def showFlyout(self):
        Flyout.make(CustomFlyoutView(), self.button, self, aniType=FlyoutAnimationType.PULL_UP)
```


### [FlyoutDialog](https://qfluentwidgets.com/zh/price/)

![FlyoutDialog](/img/components/flyout/FlyoutDialog.png)

`FlyoutDialog` 是个对话框容器，内部可被任何 `QWidget` 的子类实例替换，从而自定义对话框内容。