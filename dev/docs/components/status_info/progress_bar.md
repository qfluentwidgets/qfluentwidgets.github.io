---
title: Progress Bar
date: 2024-02-27 13:34:00
permalink: /pages/components/progressbar/
---

### [ProgressBar](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/progress_bar/index.html)

![ProgressBar](/img/components/progressbar/ProgressBar.png)

`ProgressBar` is used to display task progress. Its usage is almost identical to `QProgressBar`, but it cancels the text display function.

```python
progressBar = ProgressBar()

# Set the range of values
progressBar.setRange(0, 100)

# Set the current value
progressBar.setValue(40)
```

`ProgressBar` can be set to pause and error states, and the color of the progress bar is different in different states:
```python
progressBar.pause()
progressBar.error()
```

Resume running state:
```python
bar.resume()
```

Customize the color of the progress bar:
```python
progressBar.setCustomBarColor(QColor(255, 0, 0), QColor(0, 255, 110))
```

### [IndeterminateProgressBar](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/progress_bar/index.html#qfluentwidgets.components.widgets.progress_bar.IndeterminateProgressBar)

`IndeterminateProgressBar` represents a long-running task that is in progress but its completion time is unknown. This type of progress bar is very useful when there is no clear completion time or progress information, such as when loading or processing a large amount of data.

```python
bar = IndeterminateProgressBar(start=True)
```

`IndeterminateProgressBar` can be set to pause and error states, and the color of the progress bar is different in different states:
```python
bar.pause()
bar.error()
```

Resume running state:
```python
bar.resume()
```

Customize the color of the progress bar:
```python
progressBar.setCustomBarColor(QColor(255, 0, 0), QColor(0, 255, 110))
```

### [FilledProgressBar](https://qfluentwidgets.com/price)

![FilledProgressBar](/img/components/progressbar/FilledProgressBar.png)

`FilledProgressBar` is used to display task progress.

### [StepProgressBar](https://qfluentwidgets.com/price)

![StepProgressBar](/img/components/progressbar/StepProgressBar.png)

`StepProgressBar` is used to display the progress of step-by-step tasks.

### [TimeLineWidget](https://qfluentwidgets.com/price)

![TimeLineWidget](/img/components/progressbar/TimeLineWidget.png)

`TimeLineWidget` is used to display time line