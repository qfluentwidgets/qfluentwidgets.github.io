---
title: 时间选择器
date: 2024-02-26 13:45:01
permalink: /zh/pages/components/timepicker/
---

### [TimePicker](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/date_time/time_picker/index.html#qfluentwidgets.components.date_time.time_picker.TimePicker)

![TimePicker](/img/components/timepicker/TimePicker.png)

`TimePicker` 用于选择 24 小时制的时间，当选择的时间发生改变时会发送 `timeChanged` 信号。

```python
timePicker = TimePicker()

# 设置当前时间
timePicker.setTime(QTime(13, 53, 26))

# 获取当前时间
print(timePicker.time)

# 时间发生改变
timePicker.timeChanged.connect(lambda time: print(time.toString()))
```

可通过继承 `PickerColumnFormatter` 的方式来修改 `TimePicker` 每一列的格式：
```python
class SecondsFormatter(PickerColumnFormatter):
    """ Seconds formatter """

    def encode(self, value):
        return str(value) + "秒"

    def decode(self, value: str):
        return int(value[:-1])


# 使用自定义的秒格式（第三列）
timePicker.setColumnFormatter(2, SecondsFormatter())
```

如果想显示或隐藏某一列：
```python
timePicker.setColumnVisible(0, False)   # 隐藏小时
timePicker.setColumnVisible(1, False)   # 隐藏分钟
timePicker.setColumnVisible(2, True)    # 显示秒
```

### [AMTimePicker](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/date_time/time_picker/index.html#qfluentwidgets.components.date_time.time_picker.AMTimePicker)

![AMTimePicker](/img/components/timepicker/AMTimePicker.png)

`AMTimePicker` 用于选择 AM/PM 小时制的时间，使用方式和 [TimePicker](#timepicker) 相同。