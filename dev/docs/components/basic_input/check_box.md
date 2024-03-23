---
title: Check Box
date: 2024-02-25 19:15:01
permalink: /pages/components/checkbox/
---

### [CheckBox](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/check_box/index.html#qfluentwidgets.components.widgets.check_box.CheckBox)

![CheckBox](/img/components/checkbox/CheckBox.jpg)

`CheckBox` is used to represent the selection operation, and its usage is the same as `QCheckBox`.

```python
checkBox = CheckBox("Text")

# Check the checkbox
checkBox.setChecked(True)

# Listen for checkbox state change signals
checkBox.stateChanged.connect(lambda: print(checkBox.isChecked()))
```

`CheckBox` also supports tri-state:
![CheckBox](/img/components/checkbox/CheckBoxPartialChecked.jpg)
```python
checkBox.setTristate(True)
checkBox.setCheckState(Qt.PartiallyChecked)
```