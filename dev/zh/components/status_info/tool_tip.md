---
title: 工具提示
date: 2024-02-27 13:34:00
permalink: /zh/pages/components/tooltip/
---

### [ToolTipFilter](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/tool_tip/index.html#qfluentwidgets.components.widgets.tool_tip.ToolTipFilter)

![ToolTip](/img/components/tooltip/ToolTip.png)


`ToolTipFilter` 用来将 `QToolTip` 替换成组件库的 `ToolTip`，只要给组件安装上此过滤器即可完成替代。

```python
button = QPushButton('キラキラ')

button.setToolTip('aiko - キラキラ ✨')
button.setToolTipDuration(1000)

# 给按钮安装工具提示过滤器
button.installEventFilter(ToolTipFilter(button, showDelay=300, position=ToolTipPosition.TOP))
```