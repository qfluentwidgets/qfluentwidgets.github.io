---
title: 流式布局
date: 2024-02-26 19:40:01
permalink: /zh/pages/components/flowlayout/
---

### [FlowLayout](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/layout/flow_layout/index.html)

![FlowLayout](/img/components/flowlayout/FlowLayout.png)

`FlowLayout` 能够自适应视口宽度，在内部组件超出视口宽度时自动换行。

```python
class Demo(QWidget):

    def __init__(self):
        super().__init__()
        layout = FlowLayout(self, needAni=True)  # 启用动画

        # 自定义动画参数
        layout.setAnimation(250, QEasingCurve.OutQuad)

        layout.setContentsMargins(30, 30, 30, 30)
        layout.setVerticalSpacing(20)
        layout.setHorizontalSpacing(10)

        layout.addWidget(QPushButton('aiko'))
        layout.addWidget(QPushButton('刘静爱'))
        layout.addWidget(QPushButton('柳井爱子'))
        layout.addWidget(QPushButton('aiko 赛高'))
        layout.addWidget(QPushButton('aiko 太爱啦😘'))

        self.resize(250, 300)
```

在某些情况下，流式布局中的组件可能发生重叠，可使用下述方法强制刷新布局：
```python
# 移除全部组件
flowLayout.removeAllWidgets()

# 重新添加组件
for w in widgets:
    flowLayout.addWidget(w)
```


### [WaterfallLayout](https://qfluentwidgets.com/zh/price)

![WaterfallLayout](/img/components/flowlayout/WaterfallLayout.png)

`WaterfallLayout` 一种多列等宽不等高的页面布局方式。