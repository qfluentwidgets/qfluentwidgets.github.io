---
title: Install
date: 2023-08-17 15:37:01
permalink: /pages/install/
---
QFluentWidgets includes lite and full-featured version, while the full version having additional acrylic components. Due to the full-featured version depending on scipy, it will significantly increase the package size, so it is recommended to install the lite version.

:::: code-group
::: code-group-item PyQt5
```python
# lite version
pip install PyQt-Fluent-Widgets -i https://pypi.org/simple/

# full featured version
pip install "PyQt-Fluent-Widgets[full]" -i https://pypi.org/simple/
```
:::
::: code-group-item PyQt6
```python
# lite version
pip install PyQt6-Fluent-Widgets -i https://pypi.org/simple/

# full featured version
pip install "PyQt6-Fluent-Widgets[full]" -i https://pypi.org/simple/
```
:::
::: code-group-item PySide2
```python
# lite version
pip install PySide2-Fluent-Widgets -i https://pypi.org/simple/

# full featured version
pip install "PySide2-Fluent-Widgets[full]" -i https://pypi.org/simple/
```
:::
::: code-group-item PySide6
```python
# lite version
pip install PySide6-Fluent-Widgets -i https://pypi.org/simple/

# full featured version
pip install "PySide6-Fluent-Widgets[full]" -i https://pypi.org/simple/
```
:::
::::

The [Pro version](https://qfluentwidgets.com/pages/pro) library contains more advance components. You can download `PyQt-Fluent-Widgets-Pro-Gallery.zip` from the [release page](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/releases) for preview purposes.

C++ QFluentWidgets is not open source. You can download the compiled demo `QFluentWidgets_v*.*.*.zip` from [release page](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/releases). Please contact [shokokawaii@foxmail.com](mailto:shokokawaii@foxmail.com) if you want to use C++ QFluentWidgets.

::: warning
Do not install PyQt-Fluent-Widgets, PyQt6-Fluent-Widgets, PySide2-Fluent-Widgets, and PySide6-Fluent-Widgets in the same environment, because they all have the package name `qfluentwidgets`.
:::

## Run examples
After installing the QFluentWidgets package and downloading the code from the corresponding branch of repo, you can run any example program in the examples directory. For example:
```python
cd examples/gallery
python demo.py
```

If you encounter `ImportError: cannot import name 'XXX' from 'qfluentwidgets'`, it indicates that the installed package version is too low. You can replace the pypi source with https://pypi.org/simple and reinstall the latest version of the package.