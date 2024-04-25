---
title: Video Player
date: 2024-03-31 14:08:00
permalink: /pages/components/videowidget/
---

### [VideoWidget](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/multimedia/video_widget/index.html#qfluentwidgets.multimedia.video_widget.VideoWidget)

![VideoWidget](/img/components/mediaplaybar/VideoWidget.png)

`VideoWidget` is used to play local or online videos, with a built-in play bar.

::: tip Tip
PyQt/PySide 6.5.0 and above do not require additional installation of decoders, while lower versions need to install LAV Filters (Windows) or GStreamer (Linux).
:::

The usage is quite simple:

```python
from qfluentwidgets.multimedia import VideoWidget

videoWidget = VideoWidget(self)

videoWidget.setVideo(QUrl.fromLocalFile("D:/Video/aiko - シアワセ.mp4"))
videoWidget.play()
```