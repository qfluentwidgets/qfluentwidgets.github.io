---
title: 视频播放器
date: 2024-03-31 14:08:00
permalink: /zh/pages/components/videowidget/
---

### [VideoWidget](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/multimedia/video_widget/index.html#qfluentwidgets.multimedia.video_widget.VideoWidget)

![VideoWidget](/img/components/mediaplaybar/VideoWidget.png)

`VideoWidget` 用于播放本地或者在线视频，自带播放栏。

::: tip 提示
PyQt/PySide 6.5.0 及以上版本不需要额外安装解码器，低版本需要安装 LAV Filters（Windows）或者 GStreamer（Linux）。
:::

使用方式较为简单：

```python
from qfluentwidgets.multimedia import VideoWidget

videoWidget = VideoWidget(self)

videoWidget.setVideo(QUrl.fromLocalFile("D:/Video/aiko - シアワセ.mp4"))
videoWidget.play()
```