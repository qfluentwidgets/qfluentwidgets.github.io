---
title: 微调框
date: 2024-02-27 17:42:00
permalink: /zh/pages/components/spinbox/
---

### [SpinBox](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/spin_box/index.html#qfluentwidgets.components.widgets.spin_box.SpinBox)

![SpinBox](/img/components/spinbox/SpinBox.png)

`SpinBox` 用于让用户在一定范围内选择一个整数值，使用方法和 `QSpinBox` 完全相同。`CompactSpinBox` 是紧凑版本的 `SpinBox`。

```python
spinBox = SpinBox()

# 设置取值范围
spinBox.setRange(0, 100)

# 设置当前值
spinBox.setValue(30)

# 监听数值改变信号
spinBox.valueChanged.connect(lambda value: print("当前值：", value))

# 获取当前值
print(spinBox.value())
```

### [DoubleSpinBox](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/spin_box/index.html#qfluentwidgets.components.widgets.spin_box.DoubleSpinBox)

![DoubleSpinBox](/img/components/spinbox/DoubleSpinBox.png)

`DoubleSpinBox` 用于让用户在一定范围内选择一个整数值，使用方法和 `QDoubleSpinBox` 完全相同。`CompactDoubleSpinBox` 是紧凑版本的 `DoubleSpinBox`。

```python
spinBox = DoubleSpinBox()

# 设置取值范围
spinBox.setRange(-100, 100)

# 设置当前值
spinBox.setValue(30.5)

# 监听数值改变信号
spinBox.valueChanged.connect(lambda value: print("当前值：", value))

# 获取当前值
print(spinBox.value())
```


### [TimeEdit](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/spin_box/index.html#qfluentwidgets.components.widgets.spin_box.TimeEdit)

![TimeEdit](/img/components/spinbox/TimeEdit.png)

`TimeEdit` 用于让用户在一定时间范围内选择一个时间，使用方法和 `QTimeEdit` 完全相同。`CompactTimeEdit` 是紧凑版本的 `TimeEdit`。

```python
timeEdit = TimeEdit()

# 设置取值范围
timeEdit.setTimeRange(QTime(0, 0, 0), QTime(11, 59, 59))

# 设置当前值
timeEdit.setTime(QTime(1, 1, 1))

# 监听数值改变信号
timeEdit.timeChanged.connect(lambda time: print("当前时间：", time.toString()))

# 获取当前值
print(timeEdit.time())
```


### [DateEdit](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/spin_box/index.html#qfluentwidgets.components.widgets.spin_box.DateEdit)

![DateEdit](/img/components/spinbox/DateEdit.png)

`DateEdit` 用于让用户在一定日期范围内选择一个日期，使用方法和 `QDateEdit` 完全相同。`CompactDateEdit` 是紧凑版本的 `DateEdit`。

```python
dateEdit = DateEdit()

# 设置取值范围
dateEdit.setDateRange(QDate(2024, 1, 1), QDate(2024, 11, 11))

# 设置当前值
dateEdit.setDate(QDate(2024, 2, 2))

# 监听数值改变信号
dateEdit.dateChanged.connect(lambda date: print("当前日期：", date.toString()))

# 获取当前值
print(dateEdit.date())
```

### [DateTimeEdit](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/spin_box/index.html#qfluentwidgets.components.widgets.spin_box.DateTimeEdit)

![DateTimeEdit](/img/components/spinbox/DateTimeEdit.png)

`DateTimeEdit` 用于让用户在一定日期范围内选择一个日期，使用方法和 `QDateTimeEdit` 完全相同。`CompactDateTimeEdit` 是紧凑版本的 `DateTimeEdit`。

```python
dt = DateTimeEdit()

# 设置取值范围
dt.setDateTimeRange(QDate(2024, 1, 1, 0, 0, 0), QDate(2024, 11, 11, 11, 59, 59))

# 设置当前值
dt.setDateTime(QDateTime(2024, 2, 2, 12, 0, 0))

# 监听数值改变信号
dt.dateTimeChanged.connect(lambda dateTime: print("当前日期时间：", dateTime.toString()))

# 获取当前值
print(dt.dateTime())
```