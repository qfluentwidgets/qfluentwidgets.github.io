---
title: 标签
date: 2024-02-27 13:34:00
permalink: /zh/pages/components/label/
---

### [FluentLabelBase](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/label/index.html#qfluentwidgets.components.widgets.label.FluentLabelBase)

![FluentLabel](/img/components/label/FluentLabel.png)

`FluentLabelBase` 用于显示文本，可以跟随主题切换文本颜色。这是个抽象类，通常使用它的子类：
* CaptionLabel
* BodyLabel
* StrongBodyLabel
* SubtitleLabel
* TitleLabel
* LargeTitleLabel
* DisplayLabel

可以自定义标签的颜色：
```python
label = BodyLabel("标签")
label.setTextColor(QColor(0, 255, 0), QColor(255, 0, 0))  # 浅色主题，深色主题
```

### [HyperlinkLabel](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/label/index.html#qfluentwidgets.components.widgets.label.HyperlinkLabel)

![HyperlinkLabel](/img/components/label/HyperlinkLabel.png)

`HyperlinkLabel` 可在点击时自动跳转到指定链接。

```python
label = HyperlinkLabel(QUrl('https://github.com/'), 'GitHub')

# 显示下划线
hyperlinkLabel.setUnderlineVisible(True)

# 更换超链接
label.setUrl('https://github.com/zhiyiYo/')
print(label.url)
```
