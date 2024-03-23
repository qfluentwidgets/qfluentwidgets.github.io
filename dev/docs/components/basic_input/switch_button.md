---
title: Switch Button
date: 2024-02-26 11:29:01
permalink: /pages/components/switchbutton/
---

### [SwitchButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/switch_button/index.html#qfluentwidgets.components.widgets.switch_button.SwitchButton)

![SwitchButton](/img/components/switchbutton/SwitchButton.png)

`SwitchButton` represents the switch between two opposing states, often used to trigger "on/off". When the switch state changes, it will send a `checkChanged(checked: bool)` signal.

```python
button = SwitchButton()

button.checkedChanged.connect(lambda checked: print("Is the button selected: ", checked))

# Change button status
button.setChecked(True)

# Get whether the button is selected
print(button.isChecked())
```

By default, the button text is "Off/On", which can be modified as follows:
```python
button.setOffText("Close")
button.setOnText("Open")
```