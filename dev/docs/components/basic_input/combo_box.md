---
title: Combo Box
date: 2024-02-25 19:15:01
permalink: /pages/components/combobox/
---

## [ComboBox](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/combo_box/index.html#qfluentwidgets.components.widgets.combo_box.ComboBox)

![Combo box](/img/components/combobox/ComboBox.png)

When there are too many options, use a drop-down box to display and select content. `ComboBox` inherits from `PushButton` and reimplements most of the `QComboBox` interfaces.

```python
comboBox = ComboBox()

# Add options
items = ['shoko', '西宫硝子', '宝多六花', '小鸟游六花']
comboBox.addItems(items)

# Signal of current option index change
comboBox.currentIndexChanged.connect(lambda index: print(comboBox.currentText()))
```

Each option can be bound to data:
```python
comboBox.addItem('leetcode', userData="Sword Pointing to Offer")

# The index corresponding to "leetcode" is 4, and the return value is "Sword Pointing to Offer"
comboBox.itemData(4)
```

After adding options, the first option is selected by default. To deselect:
```python
# Set placeholder text
comboBox.setPlaceholderText("Choose a character")

# Deselect
comboBox.setCurrentIndex(-1)
```

## [EditableComboBox](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/combo_box/index.html#qfluentwidgets.components.widgets.combo_box.EditableComboBox)

![Editable combo box](/img/components/combobox/EditableComboBox.png)

`EditableComboBox` allows users to edit the current option, and pressing enter can add new options. This class inherits from `LineEdit`, and options also cannot be added in Designer.

```python
comboBox = EditableComboBox()

# Add options
items = ['shoko', '西宫硝子', '宝多六花', '小鸟游六花']
comboBox.addItems(items)

# Signal of current option index change
comboBox.currentIndexChanged.connect(lambda index: print(comboBox.currentText()))
```

Setting completion suggestions:
```python
# Create a completer
items = ['shoko', '西宫硝子', '宝多六花', '小鸟游六花']
completer = QCompleter(items, comboBox)

# Set the number of options displayed
completer.setMaxVisibleItems(10)

# Set the completer
comboBox.setCompleter(completer)
```

## [MultiSelectionComboBox](https://qfluentwidgets.com/price)

![MultiSelectionComboBox](/img/components/combobox/MultiSelectionComboBox.png)

`MultiSelectionComboBox` is used for selecting multiple options at the same time, which are displayed as tags in the dropdown box.

## [TransparentComboBox](https://qfluentwidgets.com/price)

![TransparentComboBox](/img/components/combobox/TransparentComboBox.png)

`TransparentComboBox` is a dropdown box with a transparent background, allowing for customization of the current selection's color.

## [FontComboBox](https://qfluentwidgets.com/price)

![FontComboBox](/img/components/combobox/FontComboBox.png)

`FontComboBox` lists all the system's available fonts for user selection.