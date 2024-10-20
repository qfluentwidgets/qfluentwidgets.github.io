---
title: 日历选择器
date: 2024-02-26 14:08:01
permalink: /zh/pages/components/calendarpicker/
---

### [CalendarPicker](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/date_time/calendar_picker/index.html#qfluentwidgets.components.date_time.calendar_picker.CalendarPicker)

![CalendarPicker](/img/components/calendarpicker/CalendarPicker.png)

`CalendarPicker` 用于选择日期，当选择的日期发生改变时会发送 `dateChanged` 信号。

```python
calendarPicker = CalendarPicker()

# 设置当前日期
calendarPicker.setDate(QDate(2024, 2, 26))

# 获取当前日期
print(calendarPicker.date)

# 日期发生改变
calendarPicker.dateChanged.connect(lambda date: print(date.toString()))
```

设置日期格式：

```python
calendarPicker.setDateFormat(Qt.TextDate)
calendarPicker.setDateFormat('yyyy-M-d')
```

### [FastCalendarPicker](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/date_time/calendar_picker/index.html#qfluentwidgets.components.date_time.calendar_picker.FastCalendarPicker)

![FastCalendarPicker](/img/components/calendarpicker/CalendarPicker.png)

`FastCalendarPicker` 用法和 [CalendarPicker](#calendarpicker) 完全一致，但是弹出速度更快，内存占用更小。

### [RangeCalendarPicker](https://qfluentwidgets.com/zh/price)

![RangeCalendarPicker](/img/components/calendarpicker/RangeCalendarPicker.png)

`RangeCalendarPicker` 用于选择日期范围。