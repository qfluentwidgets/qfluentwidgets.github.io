---
title: 复选框
date: 2024-02-25 19:15:01
permalink: /zh/pages/components/checkbox/
---

### [CheckBox](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/check_box/index.html#qfluentwidgets.components.widgets.check_box.CheckBox)

![CheckBox](/img/components/checkbox/CheckBox.jpg)

`CheckBox` 用于在一组备选项中进行多选，使用方式与 `QCheckBox` 相同。

```python
checkBox = CheckBox("Text")

# 选中复选框
checkBox.setChecked(True)

# 监听复选框状态改变信号
checkBox.stateChanged.connect(lambda: print(checkBox.isChecked()))
```

`CheckBox` 同样支持三态：
![CheckBox](/img/components/checkbox/CheckBoxPartialChecked.jpg)
```python
checkBox.setTristate(True)
checkBox.setCheckState(Qt.PartiallyChecked)
```