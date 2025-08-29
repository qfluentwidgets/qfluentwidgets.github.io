---
title: 下拉框
date: 2024-02-25 19:15:01
permalink: /zh/pages/components/combobox/
---

## [ComboBox](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/combo_box/index.html#qfluentwidgets.components.widgets.combo_box.ComboBox)

![Combo box](/img/components/combobox/ComboBox.png)

当选项过多时，适合使用下拉框展示并选择内容。`ComboBox` 继承自 `PushButton`，重新实现了 `QComboBox` 的大部分接口。

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

## [ModelComboBox](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/combo_box/index.html#qfluentwidgets.components.widgets.model_combo_box.ModelComboBox)

`ModelComboBox` 用法与 `ComboBox` 完全相同，并支持设置自定义数据模型（需要是 `QAbstractItemModel` 的子类），从而实现数据与界面的双向绑定。

```python
comboBox = ModelComboBox()

# 创建数据模型
model = QStandardItemModel()
model.appendRow(QStandardItem("Item 1"))
model.appendRow(QStandardItem("Item 2"))
model.appendRow(QStandardItem("Item 3"))

# 使用数据模型
comboBox.setModel(model)
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

## [EditableModelComboBox](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/combo_box/index.html#qfluentwidgets.components.widgets.model_combo_box.EditableModelComboBox)

`EditableModelComboBox` 用法与 `EditableComboBox` 完全相同，并支持设置自定义数据模型（需要是 `QAbstractItemModel` 的子类），从而实现数据与界面的双向绑定。

```python
comboBox = EditableModelComboBox()

# 创建数据模型
model = QStandardItemModel()
model.appendRow(QStandardItem("Item 1"))
model.appendRow(QStandardItem("Item 2"))
model.appendRow(QStandardItem("Item 3"))

# 使用数据模型
comboBox.setModel(model)
```

## [MultiSelectionComboBox](https://qfluentwidgets.com/zh/price)

![MultiSelectionComboBox](/img/components/combobox/MultiSelectionComboBox.png)

`MultiSelectionComboBox` 用于同时选择多个选项，并以标签的形式展示在下拉框中。

## [TreeComboBox](https://qfluentwidgets.com/zh/price)

![TreeComboBox](/img/components/combobox/TreeComboBox.png)

`TreeComboBox` 它允许用户以层级方式浏览和选择数据。

## [MultiSelectionTreeComboBox](https://qfluentwidgets.com/zh/price)

![MultiSelectionTreeComboBox](/img/components/combobox/MultiSelectionTreeComboBox.png)

`MultiSelectionTreeComboBox` 它允许用户以层级方式浏览和同时选择多个数据，并以标签的形式展示在下拉框中。

## [TransparentComboBox](https://qfluentwidgets.com/zh/price)

![TransparentComboBox](/img/components/combobox/TransparentComboBox.png)

`TransparentComboBox` 是透明背景的下拉框，可以自定义当前选项的颜色。

## [FontComboBox](https://qfluentwidgets.com/zh/price)

![FontComboBox](/img/components/combobox/FontComboBox.png)

`FontComboBox` 列出了系统所有可用字体供用户选择。