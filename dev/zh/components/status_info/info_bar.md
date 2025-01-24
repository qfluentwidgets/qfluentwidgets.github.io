---
title: 消息条
date: 2024-02-27 13:34:00
permalink: /zh/pages/components/infobar/
---

### [InfoBar](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/info_bar/index.html)

![InfoBar](/img/components/infobar/InfoBar.png)

`InfoBar` 用于在应用程序中显示重要的、用户需要知道的信息。这个信息可以是一个错误消息，一个警告，或者一个提示，让用户知道他们需要采取行动。

组件库提供了便捷的类方法来创建不同类型的 `InfoBar`：

* 成功：
    ```python
    InfoBar.success(
        title='Lesson 4',
        content="表达敬意吧，表达出敬意，然后迈向回旋的另一个全新阶段！",
        orient=Qt.Horizontal,
        isClosable=True,
        position=InfoBarPosition.TOP,
        duration=2000,
        parent=window
    )
    ```

* 警告：
    ```python
    InfoBar.warning(
        title='Lesson 3',
        content="相信回旋吧，只相信便是！",
        orient=Qt.Horizontal,
        isClosable=True,
        position=InfoBarPosition.BOTTOM,
        duration=-1,    # 永不消失
        parent=window
    )
    ```

* 失败：
    ```python
    InfoBar.error(
        title='Lesson 5',
        content="最短的捷径就是绕远路，绕远路才是我的最短捷径。",
        orient=Qt.Vertical,  # 内容太长时可使用垂直布局
        isClosable=True,
        position=InfoBarPosition.BOTTOM_RIGHT,
        duration=-1,
        parent=window
    )
    ```

* 消息：
    ```python
    InfoBar.info(
        title='Lesson 5',
        content="最短的捷径就是绕远路，绕远路才是我的最短捷径。",
        orient=Qt.Horizontal,
        isClosable=True,
        position=InfoBarPosition.BOTTOM_LEFT,
        duration=-1,
        parent=window
    )
    ```

* 自定义：
    ```python
    w = InfoBar.new(
        icon=FluentIcon.GITHUB,
        title='波纹疾走',
        content="人类的赞歌就是勇气的赞歌，人类的伟大就是勇气的伟大！",
        orient=Qt.Horizontal,
        isClosable=True,
        position=InfoBarPosition.BOTTOM,
        duration=2000,
        parent=window
    )
    w.setCustomBackgroundColor('white', '#202020')
    ```

也可以往消息条上添加按钮等自定义组件：
```python
w = InfoBar(
    icon=InfoBarIcon.SUCCESS,
    title='Title',
    content="我的名字是吉良吉影，年龄 33 岁，只想过平静的生活。",
    orient=Qt.Horizontal,
    isClosable=True,
    position=InfoBarPosition.TOP_RIGHT,
    duration=2000,
    parent=window
)

# 添加自定义组件
w.addWidget(PushButton('Action'))
w.show()
```

消息条的弹出位置由 `position` 参数指定：
```python
class InfoBarPosition(Enum):
    """ Info bar position """
    TOP = 0
    BOTTOM = 1
    TOP_LEFT = 2
    TOP_RIGHT = 3
    BOTTOM_LEFT = 4
    BOTTOM_RIGHT = 5
    NONE = 6
```

当 `InfoBarPosition` 为 `NONE` 时，可以将消息条放在任意位置，如果想进一步管理消息条位置，可继承 `InfoBarManager`：
```python
@InfoBarManager.register('Custom')
class CustomInfoBarManager(InfoBarManager):
    """ 自定义消息条管理器 """

    def _pos(self, infoBar: InfoBar, parentSize=None):
        p = infoBar.parent()
        parentSize = parentSize or p.size()

        # 第一个消息条的位置
        x = (parentSize.width() - infoBar.width()) // 2
        y = (parentSize.height() - infoBar.height()) // 2

        # 计算当前 infoBar 的位置
        index = self.infoBars[p].index(infoBar)
        for bar in self.infoBars[p][0:index]:
            y += (bar.height() + self.spacing)

        return QPoint(x, y)

    def _slideStartPos(self, infoBar: InfoBar):
        pos = self._pos(infoBar)
        return QPoint(pos.x(), pos.y() - 16)



InfoBar.success(
    title='Lesson 4',
    content="表达敬意吧，表达出敬意，然后迈向回旋的另一个全新阶段！",
    orient=Qt.Horizontal,
    isClosable=True,
    position="Custom",  # 使用自定义管理器
    duration=2000,
    parent=window
)
```


### [Toast](https://qfluentwidgets.com/zh/price)

![Toast](/img/components/infobar/Toast.png)

`Toast` 用于在应用程序中显示重要的、用户需要知道的信息。


### [ProgressInfoBar](https://qfluentwidgets.com/zh/price)

![ProgressInfoBar](/img/components/infobar/ProgressInfoBar.png)

`ProgressInfoBar` 它不仅显示任务的完成进度，还可以显示额外的信息。这些信息通常包括任务的名称、描述、剩余时间等。这种组件非常适合用于需要同时展示任务进度和其他相关信息的场合。


### [ProgressToast](https://qfluentwidgets.com/zh/price)

![ProgressToast](/img/components/infobar/ProgressToast.png)

`ProgressToast` 可以同时显示任务进度和提示信息。