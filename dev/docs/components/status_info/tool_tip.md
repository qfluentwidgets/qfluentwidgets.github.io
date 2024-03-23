---
title: Tool Tip
date: 2024-02-27 13:34:00
permalink: /pages/components/tooltip/
---

### [ToolTipFilter](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/tool_tip/index.html#qfluentwidgets.components.widgets.tool_tip.ToolTipFilter)

![ToolTip](/img/components/tooltip/ToolTip.png)

`ToolTipFilter` is used to replace `QToolTip` with the `ToolTip` from the component library. Simply installing this filter on a widget can achieve the replacement.

```python
button = QPushButton('キラキラ')

button.setToolTip('aiko - キラキラ ✨')
button.setToolTipDuration(1000)

# Install the tooltip filter for the button
button.installEventFilter(ToolTipFilter(button, showDelay=300, position=ToolTipPosition.TOP))
```