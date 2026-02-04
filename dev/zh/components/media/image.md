---
title: 图片
date: 2024-03-31 14:08:00
permalink: /zh/pages/components/image/
---


### [ImageLabel](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/label/index.html#qfluentwidgets.components.widgets.label.ImageLabel)

![ImageLabel](/img/components/label/ImageLabel.png)


`ImageLabel` 用于显示图片或者 GIF，在高分屏下也能清晰显示图片而不出现锯齿。

```python
label = ImageLabel("/path/to/image.png")            # 使用 str 创建
label = ImageLabel(QImage("/path/to/image.png"))   # 使用  QImage 创建
label = ImageLabel(QPixmap("/path/to/image.png"))  # 使用 QPixmap 创建

# 圆角
label.setBorderRadius(8, 8, 8, 8)
```

调整图像大小：

```python
# 按比例缩放到指定高度
label.scaledToHeight(300)

# 按比例缩放到指定的宽度
label.scaledToWidth(300)

# 强制缩放到指定大小，忽略比例
label.setScaledSize(QSize(300, 300))
```

更换显示的图片：

```python
label.setImage("/path/to/image.png")
label.setImage(QImage("/path/to/image.png"))
label.setImage(QPixmap("/path/to/image.png"))

# 如果图片分辨率发生变化，需要再次调整标签的大小
label.scaledToHeight(300)
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

### [AvatarPicker](https://qfluentwidgets.com/zh/price)

![AvatarPicker](/img/components/imagecropper/AvatarPicker.png)

`AvatarPicker` 用于显示圆形头像，可以是静态图片或者 GIF，并支持鼠标点击时选择经过裁剪的本地图片作为头像。


### [ImageCropper](https://qfluentwidgets.com/zh/price)

![ImageCropper](/img/components/imagecropper/ImageCropper.png)

`ImageCropper` 用于裁剪用户指定的图像，内置长方形和圆形两种裁剪形状，并支持拓展自定义的裁剪形状。

### [ImageComparisonSlider](https://qfluentwidgets.com/zh/price)

![ImageComparisonSlider](/img/components/label/ImageComparisonSlider.png)

`ImageComparisonSlider` 允许用户通过拖动滑块来直观地比较两张图片的差异效果。

### [ImageMagnifierWidget](https://qfluentwidgets.com/zh/price)

![ImageMagnifierWidget](/img/components/label/ImageMagnifierWidget.png)

`ImageMagnifierWidget` 允许用户将鼠标悬停或聚焦在图片上时，在特定区域生成一个放大的局部视图，用以查看图片的细节。