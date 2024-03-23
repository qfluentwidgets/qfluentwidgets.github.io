---
title: 面包屑导航
date: 2024-02-26 19:56:01
permalink: /zh/pages/components/breadcrumbbar/
---

### [BreadcrumbBar](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/navigation/breadcrumb/index.html#qfluentwidgets.components.navigation.breadcrumb.BreadcrumbBar)

![BreadcrumbBar](/img/components/breadcrumbbar/BreadCrumbBar.png)

`BreadcrumbBar` 是作为辅助和补充的导航方式，它能让用户知道在应用中所处的位置并能方便地回到原先的位置。

通过 `addItem()` 可在右侧追加一个节点，当节点过多以至于视口容纳不下时，左侧的节点将被折叠到菜单中：

```python
breadcrumb = BreadcrumbBar()
items = ["主页", "文档", "学习资料", "动作电影", "叶问"]
for item in items:
    # 第一个参数为 routeKey，必须全局唯一
    breadcrumb.addItem(item, item)
```

当选中的节点变化时会发送 `currentItemChanged(routeKey: str)` 和 `currentIndexChanged(index: int)` 信号：
```python
breadcrumbBar.currentItemChanged.connect(lambda key: print(key))
```

调整面包屑的布局和字体：
```python
qfluentwidgets.setFont(breadcrumbBar, 26)
breadcrumbBar.setSpacing(20)
```

面包屑导航栏通常与 `QStackedWidget` 一起使用：
```python
class Demo(QWidget):

    def __init__(self):
        super().__init__()
        self.setStyleSheet('Demo{background:rgb(255,255,255)}')

        self.breadcrumbBar = BreadcrumbBar(self)
        self.stackedWidget = QStackedWidget(self)

        self.lineEdit = LineEdit(self)
        self.addButton = PrimaryToolButton(FluentIcon.SEND, self)

        self.vBoxLayout = QVBoxLayout(self)
        self.lineEditLayout = QHBoxLayout()

        # 按下回车键或者点击按钮时添加一个新导航项和子界面
        self.addButton.clicked.connect(lambda: self.addInterface(self.lineEdit.text()))
        self.lineEdit.returnPressed.connect(lambda: self.addInterface(self.lineEdit.text()))
        self.breadcrumbBar.currentItemChanged.connect(self.switchInterface)

        # 调整面包屑导航的尺寸
        setFont(self.breadcrumbBar, 26)
        self.breadcrumbBar.setSpacing(20)
        self.lineEdit.setPlaceholderText('Enter the name of interface')

        # 添加两个导航项
        self.addInterface('Home')
        self.addInterface('Documents')

        # 初始化布局
        self.vBoxLayout.setContentsMargins(20, 20, 20, 20)
        self.vBoxLayout.addWidget(self.breadcrumbBar)
        self.vBoxLayout.addWidget(self.stackedWidget)
        self.vBoxLayout.addLayout(self.lineEditLayout)

        self.lineEditLayout.addWidget(self.lineEdit, 1)
        self.lineEditLayout.addWidget(self.addButton)
        self.resize(500, 500)

    def addInterface(self, text: str):
        if not text:
            return

        w = SubtitleLabel(text)
        w.setObjectName(uuid1().hex)    # 使用随机生成的路由键
        w.setAlignment(Qt.AlignCenter)

        self.lineEdit.clear()
        self.stackedWidget.addWidget(w)
        self.stackedWidget.setCurrentWidget(w)

        self.breadcrumbBar.addItem(w.objectName(), text)

    def switchInterface(self, objectName):
        self.stackedWidget.setCurrentWidget(self.findChild(SubtitleLabel, objectName))
```