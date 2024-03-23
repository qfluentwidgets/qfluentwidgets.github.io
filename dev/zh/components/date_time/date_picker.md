---
title: 日期选择器
date: 2024-02-26 12:32:01
permalink: /zh/pages/components/datepicker/
---

### [DatePicker](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/date_time/date_picker/index.html#qfluentwidgets.components.date_time.date_picker.DatePicker)

![DatePicker](/img/components/datepicker/DatePicker.png)

`DatePicker` 用于选择日期，当选择的日期发生改变时会发送 `dateChanged` 信号。

```python
datePicker = DatePicker()

# 设置当前日期
datePicker.setDate(QDate(2024, 2, 26))

# 获取当前日期
print(datePicker.date)

# 日期发生改变
datePicker.dateChanged.connect(lambda date: print(date.toString()))
```

可通过继承 `PickerColumnFormatter` 的方式来修改 `DatePicker` 每一列的格式：
```python
class MonthFormatter(PickerColumnFormatter):
    """ Month formatter """

    def encode(self, value):
        # 此处 value 的取值范围为 1-12
        return str(value) + "😊"

    def decode(self, value: str):
        return int(value[:-1])


# 使用自定义的月格式（第一列）
datePicker.setColumnFormatter(0, MonthFormatter())
```

### [ZhDatePicker](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/date_time/date_picker/index.html#qfluentwidgets.components.date_time.date_picker.ZhDatePicker)

![ZhDatePicker](/img/components/datepicker/ZhDatePicker.png)

`ZhDatePicker` 用于选择中文格式的日期，使用方法与 [DatePicker](#datepicker) 相同。