---
title: Calendar Picker
date: 2024-02-26 14:08:01
permalink: /pages/components/calendarpicker/
---

### [CalendarPicker](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/date_time/calendar_picker/index.html#qfluentwidgets.components.date_time.calendar_picker.CalendarPicker)

![CalendarPicker](/img/components/calendarpicker/CalendarPicker.png)

`CalendarPicker` is used to select a date. When the selected date changes, it will send a `dateChanged` signal.

```python
calendarPicker = CalendarPicker()

# Set the current date
calendarPicker.setDate(QDate(2024, 2, 26))

# Get the current date
print(calendarPicker.date)

# Date changes
calendarPicker.dateChanged.connect(lambda date: print(date.toString()))
```

Set date format:

```python
calendarPicker.setDateFormat(Qt.TextDate)
calendarPicker.setDateFormat('yyyy-M-d')
```

### [FastCalendarPicker](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/date_time/calendar_picker/index.html#qfluentwidgets.components.date_time.calendar_picker.FastCalendarPicker)

![FastCalendarPicker](/img/components/calendarpicker/CalendarPicker.png)

The usage of `FastCalendarPicker` is identical to  [CalendarPicker](#calendarpicker), but it has a faster popup speed and lower memory consumption.

### [RangeCalendarPicker](https://qfluentwidgets.com/price)

![RangeCalendarPicker](/img/components/calendarpicker/RangeCalendarPicker.png)

`RangeCalendarPicker` is used for selecting a date range.