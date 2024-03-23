---
title: Time Picker
date: 2024-02-26 13:45:01
permalink: /pages/components/timepicker/
---

### [TimePicker](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/date_time/time_picker/index.html#qfluentwidgets.components.date_time.time_picker.TimePicker)

![TimePicker](/img/components/timepicker/TimePicker.png)

`TimePicker` is used to select time in 24-hour format. When the selected time changes, it will send a `timeChanged` signal.

```python
timePicker = TimePicker()

# Set the current time
timePicker.setTime(QTime(13, 53, 26))

# Get the current time
print(timePicker.time)

# Time changes
timePicker.timeChanged.connect(lambda time: print(time.toString()))
```

You can modify the format of each column of `TimePicker` by inheriting from `PickerColumnFormatter`:
```python
class SecondsFormatter(PickerColumnFormatter):
    """ Seconds formatter """

    def encode(self, value):
        return str(value) + " seconds"

    def decode(self, value: str):
        return int(value[:-6])

# Use the custom seconds format (third column)
timePicker.setColumnFormatter(2, SecondsFormatter())
```

If you want to show or hide a certain column:
```python
timePicker.setColumnVisible(0, False)   # Hide hours
timePicker.setColumnVisible(1, False)   # Hide minutes
timePicker.setColumnVisible(2, True)    # Show seconds
```

### [AMTimePicker](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/date_time/time_picker/index.html#qfluentwidgets.components.date_time.time_picker.AMTimePicker)

![AMTimePicker](/img/components/timepicker/AMTimePicker.png)

`AMTimePicker` is used to select time in AM/PM format. The usage is the same as [TimePicker](#timepicker).