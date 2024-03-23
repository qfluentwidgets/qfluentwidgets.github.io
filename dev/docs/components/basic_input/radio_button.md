---
title: Radio Button
date: 2024-02-26 11:29:01
permalink: /pages/components/radiobutton/
---

### [RadioButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.RadioButton)

![RadioButton](/img/components/radiobutton/RadioButton.png)

`RadioButton` is used for single selection among a group of alternatives, and its usage is the same as `QRadioButton`. It is generally used in combination with `QButtonGroup`.

```python
w = QWidget()

button1 = RadioButton('Option 1')
button2 = RadioButton('Option 2')
button3 = RadioButton('Option 3')

# Add the radio buttons to an exclusive button group
buttonGroup = QButtonGroup(w)
buttonGroup.addButton(button1)
buttonGroup.addButton(button2)
buttonGroup.addButton(button3)

# The currently selected button changes
buttonGroup.buttonToggled.connect(lambda button: print(button.text()))

# Select the first button
button1.setChecked(True)

# Add the buttons to a vertical layout
layout = QVBoxLayout(w)
layout.addWidget(button1, 0, Qt.AlignCenter)
layout.addWidget(button2, 0, Qt.AlignCenter)
layout.addWidget(button3, 0, Qt.AlignCenter)
```