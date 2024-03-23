---
title: Badge
date: 2024-02-27 11:25:00
permalink: /pages/components/infobadge/
---

### [InfoBadge](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/info_badge/index.html#qfluentwidgets.components.widgets.info_badge.InfoBadge)

![InfoBadge](/img/components/infobadge/InfoBadge.png)

`InfoBadge` is a small notification marker used to display unread messages, status updates, or other important notifications on the application's navigation menu or toolbar.

The badge supports multiple styles and provides convenient class methods to create instances:
```python
InfoBadge.info(1)
InfoBadge.success(10)
InfoBadge.attension(100)
InfoBadge.warning(1000)
InfoBadge.error(10000)
InfoBadge.custom('1w+', '#005fb8', '#60cdff')
```

The badge is usually attached to other components, and the `target` can be set to specify the attached object:
```python
button = ToolButton(FIF.BASKETBALL, parent)
vBoxLayout.addWidget(button, 0, Qt.AlignHCenter)
InfoBadge.success(1, parent=parent, target=button, position=InfoBadgePosition.TOP_RIGHT)
```

The `position` parameter is used to set the position of the badge, and the component library has built-in 7 badge positions:
```python
class InfoBadgePosition(Enum):
    """ Info badge position """
    TOP_RIGHT = 0
    BOTTOM_RIGHT = 1
    RIGHT = 2
    TOP_LEFT = 3
    BOTTOM_LEFT = 4
    LEFT = 5
    NAVIGATION_ITEM = 6
```

If you want to customize the position of the badge, you can inherit `InfoBadgeManager` and override the `position()` method:
```python
@InfoBadgeManager.register('Custom')
class CustomInfoBadgeManager(InfoBadgeManager):
    """ Custom info badge manager """

    def position(self):
        pos = self.target.geometry().center()
        x = pos.x() - self.badge.width() // 2
        y = self.target.y() - self.badge.height() // 2
        return QPoint(x, y)


# Use the custom badge position manager
InfoBadge.success(1, parent=parent, target=button, position="Custom")
```


### [DotInfoBadge](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/info_badge/index.html#qfluentwidgets.components.widgets.info_badge.DotInfoBadge)

![DotInfoBadge](/img/components/infobadge/DotInfoBadge.png)

`DotInfoBadge` does not display any numbers or icons, but is displayed as a small dot to indicate the presence of unprocessed notifications or updates. This component is very useful when you need to remind users of new information or status changes, but do not need to display specific quantities or types.

```python
DotInfoBadge.info()
DotInfoBadge.success()
DotInfoBadge.attension()
DotInfoBadge.warning()
DotInfoBadge.error()
DotInfoBadge.custom('#005fb8', '#60cdff')
```


### [IconInfoBadge](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/info_badge/index.html#qfluentwidgets.components.widgets.info_badge.IconInfoBadge)

![IconInfoBadge](/img/components/infobadge/IconInfoBadge.png)

`IconInfoBadge` displays an icon inside, instead of a number. This icon can be used to indicate a specific type of notification or status.

```python
IconInfoBadge.info(FluentIcon.ACCEPT_MEDIUM)
IconInfoBadge.success(FluentIcon.ACCEPT_MEDIUM)
IconInfoBadge.attension(FluentIcon.ACCEPT_MEDIUM)
IconInfoBadge.warning(FluentIcon.CANCEL_MEDIUM)
IconInfoBadge.error(FluentIcon.CANCEL_MEDIUM)
```