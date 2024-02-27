---
title: 下拉框
date: 2024-02-25 19:15:01
permalink: /zh/components/combobox/
---

## [ComboBox](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/combo_box/index.html#qfluentwidgets.components.widgets.combo_box.ComboBox)

![Combo box](/img/components/combobox/ComboBox.png)

当选项过多时，使用下拉框展示并选择内容。`ComboBox` 继承自 `PushButton`，重新实现了 `QComboBox` 的大部分接口，但是无法在 Designer 中添加选项。

```python
comboBox = ComboBox()

# 添加选项
items = ['shoko', '西宫硝子', '宝多六花', '小鸟游六花']
comboBox.addItems(items)

# 当前选项的索引改变信号
comboBox.currentIndexChanged.connect(lambda index: print(comboBox.currentText()))
```

每个选项都可以绑定数据：
```python
comboBox.addItem('leetcode', userData="剑指 Offer")

# "leetcode" 对应的索引为 4，返回值为 "剑指 Offer"
comboBox.itemData(4)
```

添加选项之后默认选中第一个选项，如需取消选中：
```python
# 设置提示文本
comboBox.setPlaceholderText("选择一个脑婆")

# 取消选中
comboBox.setCurrentIndex(-1)
```

## [EditableComboBox](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/combo_box/index.html#qfluentwidgets.components.widgets.combo_box.EditableComboBox)

![Editable combo box](/img/components/combobox/EditableComboBox.png)

`EditableComboBox` 允许用户编辑当前选项，按下回车可添加新选项。这个类继承自 `LineEdit`，同样不能在 Designer 中添加选项。

```python
comboBox = EditableComboBox()

# 添加选项
items = ['shoko', '西宫硝子', '宝多六花', '小鸟游六花']
comboBox.addItems(items)

# 当前选项的索引改变信号
comboBox.currentIndexChanged.connect(lambda index: print(comboBox.currentText()))
```

设置补全提示：
```python
# 创建补全器
items = ['shoko', '西宫硝子', '宝多六花', '小鸟游六花']
completer = QCompleter(items, comboBox)

# 设置显示的选项数
completer.setMaxVisibleItems(10)

# 设置补全器
comboBox.setCompleter(completer)
```