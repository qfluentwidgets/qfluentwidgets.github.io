---
title: 高级版
date: 2023-08-17 15:37:01
permalink: /zh/pages/pro/
---

## 组件库的授权方式？
Python 组件库采用对偶许可证，非商业用途使用 GPLv3 许可证进行授权，商用需购买 [商业许可证](/zh/price) 才能获得商用授权。

## 有哪些高级组件？
为了满足开发者的需求，高级版的组件库包含更多高级组件，可以让现代化界面开发变得更加得心应手。目前，高级版组件库包含下述组件，之后还会不断增加新组件。

可从 [发行页面](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/releases) 或顶部导航栏下载体验包 `PyQt-Fluent-Widgets-Pro-Gallery.zip`。

### 基本输入

| 组件名                        | 描述                           |
| ----------------------------- | ------------------------------ |
| `Chip`                        | 纸片组件，可用作过滤器         |
| `OutlinedPushButton`          | 描边按钮，可用作过滤器         |
| `OutlinedToolButton`          | 描边工具按钮                   |
| `RoundPushButton`             | 圆角按钮                       |
| `FilledPushButton`            | 填充按钮，支持不同的类型       |
| `FilledToolButton`            | 填充工具按钮                   |
| `TextPushButton`              | 文本按钮，支持不同的类型       |
| `TextToolButton`              | 文本工具按钮                   |
| `LuminaPushButton`            | 辉光按钮                       |
| `GlassPushButton`             | 玻璃质感按钮                   |
| `HyperlinkToolButton`         | 超链接工具按钮                 |
| `TransparentCircleToolButton` | 透明圆形工具按钮               |
| `FontComboBox`                | 字体下拉框                     |
| `MultiSelectionComboBox`      | 多选下拉框，可选择多个选项     |
| `TreeComboBox`                | 树状下拉框                     |
| `MultiSelectionTreeComboBox`  | 多选树状下拉框，可选择多个选项 |
| `TransparentComboBox`         | 透明下拉框                     |
| `ToolTipSlider`               | 带工具提示的滑动条             |
| `RangeSlider`                 | 带两个滑块的范围滑动条         |
| `SubtitleRadioButton`         | 子标题单选按钮                 |

### 对话框和弹出组件

| 组件名                            | 描述                                     |
| --------------------------------- | ---------------------------------------- |
| `Drawer`                          | 抽屉组件，支持上下左右四个方向的弹出     |
| `DropDownColorPalette`            | 下拉调色盘，支持选择标准颜色和自定义颜色 |
| `CustomDropDownColorPalette`      | 自定义下拉调色盘                         |
| `DropDownColorPicker`             | 下拉拾色器                               |
| `CustomDropDownColorPicker`       | 自定义下拉拾色器                         |
| `FlyoutDialog`                    | 弹出对话框                               |
| `ScreenColorPicker`               | 屏幕拾色器                               |
| `ShortcutPicker`                  | 快捷键选择器                             |
| `ShortcutDialog`                  | 快捷键对话框                             |
| `IndeterminateProgressRingDialog` | 等待对话框                               |
| `TopNavigationDialog`             | 顶部导航对话框                           |

### 聊天

| 组件名               | 描述                               |
| -------------------- | ---------------------------------- |
| `ChatWidget`         | 聊天组件，支持打字机效果和加载动画 |
| `SimpleChatTextEdit` | 聊天输入框                         |
| `ChatTextEdit`       | 聊天输入框                         |

### 日期和时间
| 组件名                | 描述                             |
| --------------------- | -------------------------------- |
| `ProCalendarPicker`   | 高级日历选择器，可以禁用部分日期 |
| `RangeCalendarPicker` | 日历范围选择器                   |

### 布局
| 组件名            | 描述                               |
| ----------------- | ---------------------------------- |
| `WaterfallLayout` | 瀑布流布局，支持添加不同尺寸的组件 |

### 多媒体
| 组件名                  | 描述                                 |
| ----------------------- | ------------------------------------ |
| `AvatarPicker`          | 头像选择器，支持选择和裁剪头像       |
| `ImageCropper`          | 图像裁剪器，支持裁剪任意形状的图像   |
| `ImageComparisonSlider` | 图像对比滑块，适用于图像超分对比场景 |
| `ImageMagnifierWidget`  | 图像放大镜组件，支持局部放大图片     |
| `AudiowaveformWidget`   | 音频波形组件，适用于文本转语音场景   |

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
| 组件名                        | 描述                     |
| ----------------------------- | ------------------------ |
| `HorizontalCarousel`          | 水平轮播图               |
| `VerticalCarousel`            | 垂直轮播图               |
| `SqueezeCarousel`             | 挤压式轮播图             |
| `HorizontalCircleColorPicker` | 水平圆形拾色器           |
| `VerticalCircleColorPicker`   | 垂直圆形拾色器           |
| `FlowCircleColorPicker`       | 流式圆形拾色器           |
| `DropSingleFileWidget`        | 拖放单文件组件           |
| `DropMultiFilesWidget`        | 拖放多文件组件           |
| `DropSingleFolderWidget`      | 拖放单文件夹组件         |
| `DropMultiFoldersWidget`      | 拖放多文件夹组件         |
| `EmptyStatusWidget`           | 空状态组件               |
| `NoInternetStatusWidget`      | 无网络连接状态组件       |
| `Pager`                       | 分页组件                 |
| `Splitter`                    | 区域分割器               |
| `ToolBox`                     | 工具箱                   |
| `TimeLineWidget`              | 时间线组件               |
| `TimeLineCard`                | 时间线卡片               |
| `RoundListWidget`             | 圆角列表组件             |
| `RoundListView`               | 圆角列表视图             |
| `TransparentRoundListWidget`  | 透明描边圆角列表组件     |
| `TransparentRoundListView`    | 透明描边圆角列表视图     |
| `CategoryCardListWidget`      | 分类卡片列表组件         |
| `CategoryCardListView`        | 分类卡片列表视图         |
| `RoundTableWidget`            | 圆角表格组件             |
| `RoundTableView`              | 圆角表格视图             |
| `LineTableWidget`             | 下边框表格组件           |
| `LineTableView`               | 下边框表格视图           |
| `GridTableWidget`             | 网状表格组件             |
| `GridTableView`               | 网状表格视图             |
| `AccentCardWidget`            | 渐变背景卡片组件         |
| `DashboardCardWidget`         | 仪表盘卡片               |
| `ContentDashboardCardWidget`  | 仪表盘卡片               |
| `SlideAniStackedWidget`       | 带左右滑动动画的层叠组件 |

### 状态和信息
| 组件名                            | 描述                           |
| --------------------------------- | ------------------------------ |
| `RoundProgressInfoBar`            | 圆角进度消息条                 |
| `FilledProgressBar`               | 填充进度条                     |
| `ProgressInfoBar`                 | 进度消息条                     |
| `ProgressPushButton`              | 进度按钮，可用于显示任务进度   |
| `IndeterminateProgressPushButton` | 加载状态按钮                   |
| `MultiSegmentProgressRing`        | 分段进度环                     |
| `StepProgressBar`                 | 步骤进度条，可用于显示任务步骤 |
| `Tag`                             | 标签组件                       |
| `Toast`                           | 吐司通知                       |
| `SimpleToastView`                 | 简易吐司通知视图               |
| `StarWidget`                      | 星型组件                       |
| `SingleScoreWidget`               | 评分组件                       |
| `MultiScoreWidget`                | 可交互评分组件                 |
| `RadialGauge`                     | 仪表盘                         |

### 导航
| 组件名                             | 描述                   |
| ---------------------------------- | ---------------------- |
| `RoundTabBar`                      | 圆角标签栏             |
| `RoundTabWidget`                   | 圆角标签页组件         |
| `MenuBar`                          | 菜单栏                 |
| `ExclusiveLiteFilter`              | 互斥过滤器             |
| `MultiSelectionLiteFilter`         | 多选过滤器             |
| `OutlinedExclusiveLiteFilter`      | 描边互斥过滤器         |
| `OutlinedMultiSelectionLiteFilter` | 描边多选过滤器         |
| `TopNavigationBar`                 | 顶部导航栏             |
| `FilledNavigationBar`              | 填充导航栏             |
| `FilledMSNavigationBar`            | 填充微软商店样式导航栏 |

### 文本
| 组件名                  | 描述                 |
| ----------------------- | -------------------- |
| `PinBox`                | PIN 码输入框         |
| `CodeEdit`              | 代码编辑框           |
| `LabelLineEdit`         | 带前后缀标签的输入框 |
| `TokenLineEdit`         | 标签输入框           |
| `OutlinedTextEdit`      | 描边富文本框         |
| `OutlinedPlainTextEdit` | 描边文本浏览器       |
| `OutlinedTextBrowser`   | 描边富文本浏览器     |
| `TextWatermarkWidget`   | 文本水印组件         |
| `ImageWatermarkWidget`  | 图片水印组件         |

### 设置
| 组件名                              | 描述                   |
| ----------------------------------- | ---------------------- |
| `MultiSelectionComboBoxSettingCard` | 多选下拉框设置卡       |
| `ColorPaletteSettingCard`           | 下拉调色盘设置卡       |
| `CustomColorPaletteSettingCard`     | 自定义下拉调色盘设置卡 |
| `ColorPickerSettingCard`            | 下拉拾色器设置卡       |
| `CustomColorPickerSettingCard`      | 自定义下拉拾色器设置卡 |
| `ShortcutSettingCard`               | 快捷键设置卡           |


### 窗口
| 组件名                    | 描述                                       |
| ------------------------- | ------------------------------------------ |
| `TopFluentWindow`         | 顶部导航流畅窗口                           |
| `FilledFluentWindow`      | 填充流畅窗口                               |
| `FilledMSFluentWindow`    | 填充微软商店样式的流畅窗口                 |
| `FilledSplitFluentWindow` | 填充拆分流畅窗口                           |
| `FluentMainWindow`        | 流畅主窗口，支持设置菜单栏、工具栏和状态栏 |