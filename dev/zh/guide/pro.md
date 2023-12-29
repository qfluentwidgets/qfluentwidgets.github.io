---
title: 商用版
date: 2023-08-17 15:37:01
permalink: /zh/pages/pro/
---

## 什么是商用版？
PySide6-Fluent-Widgets 和 PySide2-Fluent-Widgets 使用 **双许可证**。非商业用途使用 GPLv3 许可证进行授权，商用必须购买[商业许可证](/zh/price)。

为了满足开发者的需求，商用版的组件库包含更多高级组件，搭配开源版本的组件库，可以让现代化界面开发变得更加得心应手。

## 有哪些高级组件？
目前，高级版组件库包含下述组件，之后还会不断增加新组件。

演示视频见 [哔哩哔哩](https://www.bilibili.com/video/BV1Sw411M7wo)，可从 [发行页面](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/releases) 下载体验包 `PySide6-Fluent-Widgets-Pro-Gallery.7z`。

### 基本输入

| 组件名                        | 描述                       |
| ----------------------------- | -------------------------- |
| `Chip`                        | 纸片组件，可用作过滤器     |
| `OutlinedPushButton`          | 描边按钮，可用作过滤器     |
| `OutlinedToolButton`          | 描边工具按钮               |
| `FilledPushButton`            | 填充按钮，支持不同的类型   |
| `FilledToolButton`            | 填充工具按钮               |
| `TextPushButton`              | 文本按钮，支持不同的类型   |
| `TextToolButton`              | 文本工具按钮               |
| `TransparentCircleToolButton` | 透明圆形工具按钮           |
| `MultiSelectionComboBox`      | 多选下拉框，可选择多个选项 |
| `TransparentComboBox`         | 透明下拉框                 |
| `ToolTipSlider`               | 带工具提示的滑动条         |
| `RangeSlider`                 | 带两个滑块的范围滑动条     |

### 对话框和弹出组件

| 组件名                       | 描述                                     |
| ---------------------------- | ---------------------------------------- |
| `DropDownColorPalette`       | 下拉调色盘，支持选择标准颜色和自定义颜色 |
| `CustomDropDownColorPalette` | 自定义下拉调色盘                         |
| `DropDownColorPicker`        | 下拉拾色器                               |
| `CustomDropDownColorPicker`  | 自定义下拉拾色器                         |
| `FlyoutDialog`               | 弹出对话框                               |
| `ShortcutPicker`             | 快捷键选择器                             |
| `ShortcutDialog`             | 快捷键对话框                             |

### 日期和时间
| 组件名                | 描述                             |
| --------------------- | -------------------------------- |
| `ProCalendarPicker`   | 高级日历选择器，可以禁用部分日期 |
| `RangeCalendarPicker` | 日历范围选择器                   |

### 布局
| 组件名            | 描述                               |
| ----------------- | ---------------------------------- |
| `WaterfallLayout` | 瀑布流布局，支持添加不同尺寸的组件 |


### 图表

无缝衔接 ECharts 图表库，提供开箱即用的 20 多种图表，并且支持各种图表的任意组合。既可以直接传入图表配置，也可以使用 pyecharts 面向对象的写法来创建图表。

| 组件名        | 描述                                        |
| ------------- | ------------------------------------------- |
| `ChartWidget` | 图表组件，可用于绘制 ECharts 支持的所有图表 |

### 骨架

骨架屏可以在网络请求较慢时，提供基础占位，当数据加载完成后，恢复数据展示。它可以给用户一种很自然的过渡，避免页面长时间白屏或者闪烁等情况。

| 类名                    | 描述                             |
| ----------------------- | -------------------------------- |
| `Skeleton`              | 骨架基类，可拓展出各种布局的骨架 |
| `ArticleSkeleton`       | 文章信息骨架                     |
| `CirclePersonaSkeleton` | 圆形用户信息骨架                 |
| `SquarePersonaSkeleton` | 方形用户信息骨架                 |

### 视图
| 组件名                       | 描述               |
| ---------------------------- | ------------------ |
| `EmptyStatusWidget`          | 空状态组件         |
| `NoInternetStatusWidget`     | 无网络连接状态组件 |
| `Pager`                      | 分页组件           |
| `Splitter`                   | 区域分割器         |
| `ToolBox`                    | 工具箱             |
| `AccentCardWidget`           | 渐变背景卡片组件   |
| `DashboardCardWidget`        | 仪表盘卡片         |
| `ContentDashboardCardWidget` | 仪表盘卡片         |

### 状态和信息
| 组件名               | 描述                           |
| -------------------- | ------------------------------ |
| `FilledProgressBar`  | 填充进度条                     |
| `ProgressInfoBar`    | 进度消息条                     |
| `ProgressPushButton` | 进度按钮，可用于显示任务进度   |
| `StepProgressBar`    | 步骤进度条，可用于显示任务步骤 |

### 设置
| 组件名                              | 描述                   |
| ----------------------------------- | ---------------------- |
| `MultiSelectionComboBoxSettingCard` | 多选下拉框设置卡       |
| `ColorPaletteSettingCard`           | 下拉调色盘设置卡       |
| `CustomColorPaletteSettingCard`     | 自定义下拉调色盘设置卡 |
| `ColorPickerSettingCard`            | 下拉拾色器设置卡       |
| `CustomColorPickerSettingCard`      | 自定义下拉拾色器设置卡 |
| `ShortcutSettingCard`               | 快捷键设置卡           |
