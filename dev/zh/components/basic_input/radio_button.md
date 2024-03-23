---
title: 单选按钮
date: 2024-02-26 11:29:01
permalink: /zh/pages/components/radiobutton/
---

### [RadioButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.RadioButton)

![RadioButton](/img/components/radiobutton/RadioButton.png)

`RadioButton` 用于在一组备选项中进行单选，使用方式与 `QRadioButton` 相同，一般和 `QButtonGroup` 组合使用。

```python
w = QWidget()

button1 = RadioButton('Option 1')
button2 = RadioButton('Option 2')
button3 = RadioButton('Option 3')

# 将单选按钮添加到互斥的按钮组
buttonGroup = QButtonGroup(w)
buttonGroup.addButton(button1)
buttonGroup.addButton(button2)
buttonGroup.addButton(button3)

# 当前选中的按钮发生改变
buttonGroup.buttonToggled.connect(lambda button: print(button.text()))

# 选中第一个按钮
button1.setChecked(True)

# 将按钮添加到垂直布局
layout = QVBoxLayout(w)
layout.addWidget(button1, 0, Qt.AlignCenter)
layout.addWidget(button2, 0, Qt.AlignCenter)
layout.addWidget(button3, 0, Qt.AlignCenter)
```
