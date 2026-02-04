---
title: Image
date: 2024-03-31 14:08:00
permalink: /pages/components/image/
---


### [ImageLabel](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/label/index.html#qfluentwidgets.components.widgets.label.ImageLabel)

![ImageLabel](/img/components/label/ImageLabel.png)

`ImageLabel` is used to display images or GIFs, ensuring clear rendering without aliasing even on high-DPI screens.

```python
label = ImageLabel("/path/to/image.png")           # Create using str
label = ImageLabel(QImage("/path/to/image.png"))   # Create using QImage
label = ImageLabel(QPixmap("/path/to/image.png"))  # Create using QPixmap

# Rounded corners
label.setBorderRadius(8, 8, 8, 8)
```

Resize the image:

```python
# Scale proportionally to a specified height
label.scaledToHeight(300)

# Scale proportionally to a specified width
label.scaledToWidth(300)

# Force scale to a specified size, ignoring aspect ratio
label.setScaledSize(QSize(300, 300))
```

Change the displayed image:

```python
label.setImage("/path/to/image.png")
label.setImage(QImage("/path/to/image.png"))
label.setImage(QPixmap("/path/to/image.png"))

# If the image resolution changes, the label size needs to be adjusted again
label.scaledToHeight(300)
```

### [AvatarWidget](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/label/index.html#qfluentwidgets.components.widgets.label.AvatarWidget)

![AvatarWidget](/img/components/label/AvatarWidget.png)

`AvatarWidget` is used to display circular avatars, which can be static images or GIFs.

```python
w = AvatarWidget("/path/to/image.png")

# Set the avatar radius
w.setRadius(64)
```

If no image is set, the avatar component can also center and display the first letter of a text:

![AvatarWidget](/img/components/label/TextAvatarWidget.png)

```python
w = AvatarWidget()
w.setRadius(64)

# Set the text
w.setText("Jonny Joestar")
```

### [AvatarPicker](https://qfluentwidgets.com/price)

![AvatarPicker](/img/components/imagecropper/AvatarPicker.png)

`AvatarPicker` is used to display circular avatars (static images or GIFs) and supports selecting a cropped local image as the avatar via mouse click.

### [ImageCropper](https://qfluentwidgets.com/price)

![ImageCropper](/img/components/imagecropper/ImageCropper.png)

`ImageCropper` is used to crop a user-specified image. It includes built-in rectangular and circular cropping shapes and supports extending custom cropping shapes.

### [ImageComparisonSlider](https://qfluentwidgets.com/price)

![ImageComparisonSlider](/img/components/label/ImageComparisonSlider.png)

`ImageComparisonSlider` allows users to intuitively compare the differences between two images by dragging a slider.

### [ImageMagnifierWidget](https://qfluentwidgets.com/price)

![ImageMagnifierWidget](/img/components/label/ImageMagnifierWidget.png)

`ImageMagnifierWidget` allows users to generate a magnified view of a specific area of an image when hovering or focusing the mouse over it, enabling detailed inspection of image particulars.