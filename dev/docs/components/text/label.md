---
title: Label
date: 2024-02-27 13:34:00
permalink: /pages/components/label/
---
### [FluentLabelBase](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/label/index.html#qfluentwidgets.components.widgets.label.FluentLabelBase)

![FluentLabel](/img/components/label/FluentLabel.png)

`FluentLabelBase` is used to display text and can switch text color according to the theme. This is an abstract class, and its subclasses are typically used:
* CaptionLabel
* BodyLabel
* StrongBodyLabel
* SubtitleLabel
* TitleLabel
* LargeTitleLabel
* DisplayLabel

You can customize the color of the label:
```python
label = BodyLabel("Label")
label.setTextColor(QColor(0, 255, 0), QColor(255, 0, 0))  # Light theme, dark theme
```

### [HyperlinkLabel](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/label/index.html#qfluentwidgets.components.widgets.label.HyperlinkLabel)

![HyperlinkLabel](/img/components/label/HyperlinkLabel.png)

`HyperlinkLabel` can automatically jump to the specified link when clicked.

```python
label = HyperlinkLabel(QUrl('https://github.com/'), 'GitHub')

# Show underline
hyperlinkLabel.setUnderlineVisible(True)

# Change hyperlink
label.setUrl('https://github.com/zhiyiYo/QMaterialWidgets')
print(label.url)
```

### [ImageLabel](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/label/index.html#qfluentwidgets.components.widgets.label.ImageLabel)

![ImageLabel](/img/components/label/ImageLabel.png)


`ImageLabel` is used to display images or GIFs, and it can clearly display images without jagged edges on high-resolution screens.

```python
image = ImageLabel("/path/to/image.png")

# Scale proportionally to a specified height
image.scaledToHeight(300)

# Rounded corners
image.setBorderRadius(8, 8, 8, 8)
```

### [AvatarWidget](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/label/index.html#qfluentwidgets.components.widgets.label.AvatarWidget)

![AvatarWidget](/img/components/label/AvatarWidget.png)


`AvatarWidget` is used to display a round avatar, which can be a static image or a GIF.

```python
w = AvatarWidget("/path/to/image.png")

# Set avatar radius
w.setRadius(64)
```

If no image is set, `AvatarWidget` can also display the initial letter of text:

![AvatarWidget](/img/components/label/TextAvatarWidget.png)

```python
w = AvatarWidget()
w.setRadius(64)

w.setText("乔尼·乔斯达")
```