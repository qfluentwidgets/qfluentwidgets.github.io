---
title: 进度条
date: 2024-02-27 13:34:00
permalink: /zh/pages/components/progressbar/
---

### [ProgressBar](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/progress_bar/index.html)

![ProgressBar](/img/components/progressbar/ProgressBar.png)

`ProgressBar` 用于显示任务进度，用法和 `QProgressBar` 几乎完全相同，但是取消了文本显示功能。

```python
progressBar = ProgressBar()

# 设置取值范围
progressBar.setRange(0, 100)

# 设置当前值
progressBar.setValue(40)
```

`ProgressBar` 可以设置暂停和错误状态，不同状态下进度条的颜色不同：
```python
progressBar.pause()
progressBar.error()
```

恢复运行状态：
```python
bar.resume()
```

自定义进度条的颜色：
```python
progressBar.setCustomBarColor(QColor(255, 0, 0), QColor(0, 255, 110))
```

### [IndeterminateProgressBar](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/progress_bar/index.html#qfluentwidgets.components.widgets.progress_bar.IndeterminateProgressBar)

`IndeterminateProgressBar` 表示一个正在进行但其完成时间未知的长时间运行任务。这种进度条在没有明确的完成时间或进度信息的情况下非常有用，例如在加载或处理大量数据时。

```python
bar = IndeterminateProgressBar(start=True)
```

`IndeterminateProgressBar` 可以设置暂停和错误状态，不同状态下进度条的颜色不同：
```python
bar.pause()
bar.error()
```

恢复运行状态：
```python
bar.resume()
```

自定义进度条的颜色：
```python
progressBar.setCustomBarColor(QColor(255, 0, 0), QColor(0, 255, 110))
```


### [FilledProgressBar](https://qfluentwidgets.com/zh/price)

![FilledProgressBar](/img/components/progressbar/FilledProgressBar.png)

`FilledProgressBar` 用于显示任务进度。


### [StepProgressBar](https://qfluentwidgets.com/zh/price)

![StepProgressBar](/img/components/progressbar/StepProgressBar.png)

`StepProgressBar` 用于显示分步骤任务进度。


### [TimeLineWidget](https://qfluentwidgets.com/zh/price)

![TimeLineWidget](/img/components/progressbar/TimeLineWidget.png)

`TimeLineWidget` 用于显示时间线。