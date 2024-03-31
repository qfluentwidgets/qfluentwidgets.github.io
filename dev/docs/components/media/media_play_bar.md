---
title: Media Play Bar
date: 2024-03-31 14:08:00
permalink: /pages/components/mediaplaybar/
---

### [SimpleMediaPlayBar](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/multimedia/index.html#qfluentwidgets.multimedia.SimpleMediaPlayBar)

![SimpleMediaPlayBar](/img/components/mediaplaybar/SimpleMediaPlayBar.png)

A simple media play bar, including play button, progress bar, and volume button, supports playing local and online music.

::: tip Tip
PyQt/PySide 6.5.0 and above do not require additional installation of decoders, while lower versions need to install LAV Filters (Windows) or GStreamer (Linux).
:::

Here is a simple example:

```python
from qfluentwidgets.multimedia import SimpleMediaPlayBar

bar = SimpleMediaPlayBar()

# Online music
url = QUrl("https://files.cnblogs.com/files/blogs/677826/beat.zip?t=1693900324")
bar.player.setSource(url)

# Local music
url = QUrl.fromLocalFile(str(Path("resource/aiko - beat.flac").absolute()))
bar.player.setSource(url)
```

The internal layout of the SimpleMediaPlayBar is `hBoxLayout`, and custom buttons can be added:
```python
from qfluentwidgets import FluentIcon
from qfluentwidgets.multimedia import MediaPlayBarButton

bar.hBoxLayout.addWidget(MediaPlayBarButton(FluentIcon.FULL_SCREEN))
```

### [StandardMediaPlayBar](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/multimedia/index.html#qfluentwidgets.multimedia.StandardMediaPlayBar)

![StandardMediaPlayBar](/img/components/mediaplaybar/StandardMediaPlayBar.png)

The standard media play bar includes play button, forward and backward buttons, progress bar, and volume button.

Here is a simple example:

```python
from qfluentwidgets.multimedia import StandardMediaPlayBar

bar = StandardMediaPlayBar()

# Online music
url = QUrl("https://files.cnblogs.com/files/blogs/677826/beat.zip?t=1693900324")
bar.player.setSource(url)

# Local music
url = QUrl.fromLocalFile(str(Path("resource/aiko - beat.flac").absolute()))
bar.player.setSource(url)
```

The layout of `StandardMediaPlayBar` is as shown in the figure below:

![StandardMediaPlayBarLayout](/img/components/mediaplaybar/StandardMediaPlayBarLayout.png)

The overall layout is `vBoxLayout`, which contains three button layouts, and custom buttons or components can be added in each layout.