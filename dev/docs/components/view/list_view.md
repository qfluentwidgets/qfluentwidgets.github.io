---
title: List View
date: 2024-02-27 20:23:00
permalink: /pages/components/listview/
---

### [ListWidget](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/list_view/index.html#qfluentwidgets.components.widgets.list_view.ListWidget)

![ListWidget](/img/components/listview/ListView.png)

`ListWidget` provides a list where users can select one or more items. The usage of this class is completely the same as `QListWidget`.

```python
listWidget = ListWidget()

stands = [
    'Star Platinum', 'Green Emperor', "Heaven's Door", "King Crimson",
    'Silver Chariot', 'Crazy Diamond', "Killer Queen", "Dirty Deeds Done Dirt Cheap",
    "Hermit Purple", "Gold Experience", "The World", "King Nothing",
    "Scary Monsters", "Man's World", "Love Deluxe", "Tusk Act 4",
    "Ball Breaker", "Sex Pistols", 'D4C • Love Train', "Made in Heaven",
    "Soft & Wet", "Paisley Park", "Hey Ya!", "Walking Heart",
    "Frost Traveler", "November Rain", "Flirting Master", "Wait a Moment"
]

# Add list items
for stand in stands:
    item = QListWidgetItem(stand)
    item.setIcon(QIcon(':/qfluentwidgets/images/logo.png'))
    listWidget.addItem(item)
```

By default, right-clicking an item in the list does not update the selected state of the row. If you need to select it immediately, you can call the following method:
```python
listWidget.setSelectRightClickedRow(True)
```

### [ListView](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/list_view/index.html#qfluentwidgets.components.widgets.list_view.ListView)

`ListView` is used to display data in the model. The usage is completely the same as `QListView`.


### [RoundListWidget](https://qfluentwidgets.com/price)

![RoundListWidget](/img/components/listview/RoundListView.png)

The usage of `RoundListWidget` is completely the same as `QListWidget`.


### [RoundListView](https://qfluentwidgets.com/price)

The usage of `RoundListView` is completely the same as `QListView`.