---
title: Label
date: 2024-02-27 13:34:00
permalink: /pages/components/label/
---
### [FluentLabelBase](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/label/index.html#qfluentwidgets.components.widgets.label.FluentLabelBase)

![FluentLabel](/img/components/label/FluentLabel.png)

`FluentLabelBase` is used to display text and can switch text color according to the theme. This is an abstract class, and its subclasses are typically used:
* CaptionLabel
* BodyLabel
* StrongBodyLabel
* SubtitleLabel
* TitleLabel
* LargeTitleLabel
* DisplayLabel

You can customize the color of the label:
```python
label = BodyLabel("Label")
label.setTextColor(QColor(0, 255, 0), QColor(255, 0, 0))  # Light theme, dark theme
```

### [HyperlinkLabel](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/label/index.html#qfluentwidgets.components.widgets.label.HyperlinkLabel)

![HyperlinkLabel](/img/components/label/HyperlinkLabel.png)

`HyperlinkLabel` can automatically jump to the specified link when clicked.

```python
label = HyperlinkLabel(QUrl('https://github.com/'), 'GitHub')

# Show underline
hyperlinkLabel.setUnderlineVisible(True)

# Change hyperlink
label.setUrl('https://github.com/zhiyiYo/')
print(label.url)
```
