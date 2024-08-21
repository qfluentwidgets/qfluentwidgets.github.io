---
title: Install
date: 2023-08-17 15:37:01
permalink: /pages/install/
---

Before executing the following installation commands, it is recommended to set up a new virtual environment, the minimum Python version is 3.7:

:::: code-group
::: code-group-item PyQt5
```python
# lite version
pip install PyQt-Fluent-Widgets -i https://pypi.org/simple/

# full version (supports acrylic components)
pip install "PyQt-Fluent-Widgets[full]" -i https://pypi.org/simple/
```
:::
::: code-group-item PyQt6
```python
# lite version
pip install PyQt6-Fluent-Widgets -i https://pypi.org/simple/

# full version (supports acrylic components)
pip install "PyQt6-Fluent-Widgets[full]" -i https://pypi.org/simple/
```
:::
::: code-group-item PySide2
```python
# lite version
pip install PySide2-Fluent-Widgets -i https://pypi.org/simple/

# full version (supports acrylic components)
pip install "PySide2-Fluent-Widgets[full]" -i https://pypi.org/simple/
```
:::
::: code-group-item PySide6
```python
# lite version
pip install PySide6-Fluent-Widgets -i https://pypi.org/simple/

# full version (supports acrylic components)
pip install "PySide6-Fluent-Widgets[full]" -i https://pypi.org/simple/
```
:::
::::

The [Pro version](/en/pages/pro) component library contains more components. You can download `PyQt-Fluent-Widgets-Pro-Gallery.zip` from the release page for a preview. Purchase links can be found on the [Pricing Page](/en/price/).

::: warning Warning
Do not install PyQt-Fluent-Widgets, PyQt6-Fluent-Widgets, PySide2-Fluent-Widgets, and PySide6-Fluent-Widgets at the same time, as they all have the package name `qfluentwidgets`.

If you mix PyQt and PySide, it will cause the program to crash. Please check whether the installed component libraries correspond to the PyQt/PySide you are using if you encounter this issue.

:::

## Run examples
After installing the QFluentWidgets package and downloading the code from the corresponding branch of repo, you can run any example program in the examples directory. For example:
```python
cd examples/gallery
python demo.py
```

If you encounter an `ImportError: cannot import name 'XXX' from 'qfluentwidgets'`, this indicates that the installed package version is too low. You can replace the PyPI source with https://pypi.org/simple and reinstall the latest version of the package according to the installation instructions above.

## How to get started

1. Master the signal-slot mechanism, event mechanism, and the use of common components such as buttons and input boxes in Qt.
2. Install the component library and download the source code from the [GitHub Repository](https://github.com/zhiyiYo/PyQt-Fluent-Widgets).
3. Read and run the examples in the examples folder.
4. Read the official documentation.

::: tip Tip
In addition to custom components such as `InfoBar`, `Pivot`, and `FluentWindow` which require reading the documentation, components like buttons, line edit, and labels have only had their stylesheets modified or `paintEvent` overridden. Their APIs are consistent with Qt's built-in components. You just need to change the class name to the QFluentWidgets component name, with no additional learning costs.
:::