---
title: 标签
date: 2024-02-27 13:34:00
permalink: /zh/pages/components/label/
---

### [FluentLabelBase](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/label/index.html#qfluentwidgets.components.widgets.label.FluentLabelBase)

![FluentLabel](/img/components/label/FluentLabel.png)

`FluentLabelBase` 用于显示文本，可以跟随主题切换文本颜色。这是个抽象类，通常使用它的子类：
* CaptionLabel
* BodyLabel
* StrongBodyLabel
* SubtitleLabel
* TitleLabel
* LargeTitleLabel
* DisplayLabel

可以自定义标签的颜色：
```python
label = BodyLabel("标签")
label.setTextColor(QColor(0, 255, 0), QColor(255, 0, 0))  # 浅色主题，深色主题
```

### [HyperlinkLabel](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/label/index.html#qfluentwidgets.components.widgets.label.HyperlinkLabel)

![HyperlinkLabel](/img/components/label/HyperlinkLabel.png)

`HyperlinkLabel` 可在点击时自动跳转到指定链接。

```python
label = HyperlinkLabel(QUrl('https://github.com/'), 'GitHub')

# 显示下划线
hyperlinkLabel.setUnderlineVisible(True)

# 更换超链接
label.setUrl('https://github.com/zhiyiYo/QMaterialWidgets')
print(label.url)
```

### [ImageLabel](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/label/index.html#qfluentwidgets.components.widgets.label.ImageLabel)

![ImageLabel](/img/components/label/ImageLabel.png)


`ImageLabel` 用于显示图片或者 GIF，在高分屏下也能清晰显示图片而不出现锯齿。

```python
image = ImageLabel("/path/to/image.png")

# 按比例缩放到指定高度
image.scaledToHeight(300)

# 圆角
image.setBorderRadius(8, 8, 8, 8)
```

### [AvatarWidget](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/label/index.html#qfluentwidgets.components.widgets.label.AvatarWidget)

![AvatarWidget](/img/components/label/AvatarWidget.png)


`AvatarWidget` 用于显示圆形头像，可以是静态图片或者 GIF。

```python
w = AvatarWidget("/path/to/image.png")

# 设置头像半径
w.setRadius(64)
```

如果不设置图片，头像组件也可以居中显示文本的首字母：

![AvatarWidget](/img/components/label/TextAvatarWidget.png)

```python
w = AvatarWidget()
w.setRadius(64)

# 设置文本
w.setText("乔尼·乔斯达")
```