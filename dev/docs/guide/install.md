---
title: Install
date: 2023-08-17 15:37:01
permalink: /pages/install/
---

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