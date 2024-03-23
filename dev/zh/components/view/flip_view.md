---
title: 翻转视图
date: 2024-02-27 19:35:00
permalink: /zh/pages/components/flipview/
---

### [FlipView](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/flip_view/index.html#qfluentwidgets.components.widgets.flip_view.FlipView)

![FlipView](/img/components/flipview/FlipView.png)

`FlipView` 组件非常适合在需要展示一组图片的场景中使用，可以用于实现一个图片查看器，用户可以通过翻页来查看每一张图片。

```python
flipView = HorizontalFlipView()

# 添加图片
flipView.addImages(["image1.png", "image2.png"])

# 监听当前页码改变信号
flipView.currentIndexChanged.connect(lambda index: print("当前页面：", index))
```

默认情况下 `FlipView` 通过拉伸强制所有图片统一大小，可以设置缩放策略来保持图片的宽高比：
```python
flipView.setAspectRatioMode(Qt.AspectRatioMode.KeepAspectRatio)
```

`FlipView` 的视口和图片的默认大小为 480×270，调整大小的方式如下：
```python
flipView.setItemSize(QSize(320, 180))
flipView.setFixedSize(QSize(320, 180))
```

通过添加图片间距和调整视口宽度，可以实现下述效果的翻转视图：

![FlipViewRound](/img/components/flipview/FlipViewRound.png)

```python
flipView.setFixedSize(QSize(710, 270))
flipView.setSpacing(15)

# 启用圆角
flipView.setBorderRadius(15)
```


### [FlipImageDelegate](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/flip_view/index.html#qfluentwidgets.components.widgets.flip_view.FlipImageDelegate)

![CustomFlipView](/img/components/flipview/CustomFlipView.png)

`FlipImageDelegate` 用于控制 `FlipView` 的绘制结果：

```python
class CustomFlipItemDelegate(FlipImageDelegate):
    """ Custom flip item delegate """

    def paint(self, painter: QPainter, option: QStyleOptionViewItem, index: QModelIndex):
        super().paint(painter, option, index)
        painter.save()

        # draw mask
        painter.setBrush(QColor(255, 255, 255, 200))
        painter.setPen(Qt.NoPen)
        rect = option.rect
        rect = QRect(rect.x(), rect.y(), 200, rect.height())
        painter.drawRect(rect)

        # draw text
        painter.setPen(Qt.black)
        painter.setFont(getFont(16, QFont.Bold))
        painter.drawText(rect, Qt.AlignCenter, '🥰\n硝子酱一级棒卡哇伊')

        painter.restore()


# 使用自定义代理
flipView.setItemDelegate(CustomFlipItemDelegate(flipView))
```