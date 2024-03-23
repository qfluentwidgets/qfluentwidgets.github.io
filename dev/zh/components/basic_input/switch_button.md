---
title: 开关按钮
date: 2024-02-26 11:29:01
permalink: /zh/pages/components/switchbutton/
---

### [SwitchButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/switch_button/index.html#qfluentwidgets.components.widgets.switch_button.SwitchButton)

![SwitchButton](/img/components/switchbutton/SwitchButton.png)

`SwitchButton` 表示两种相互对立的状态间的切换，多用于触发「开/关」，开关状态改变时会发送 `checkedChanged(checked: bool)` 信号。

```python
button = SwitchButton()

button.checkedChanged.connect(lambda checked: print("是否选中按钮：", checked))

# 更改按钮状态
button.setChecked(True)

# 获取按钮是否选中
print(button.isChecked())
```

默认情况下按钮文本为「关/开」，可按照下述操作修改：
```python
button.setOffText("关闭")
button.setOnText("开启")
```