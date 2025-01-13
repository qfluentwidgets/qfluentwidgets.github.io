---
title: 安装
date: 2023-08-17 15:37:01
permalink: /zh/pages/install/
---

执行下述安装指令之前建议搭建一个新的虚拟环境，Python 版本最低 3.7：

:::: code-group
::: code-group-item PyQt5
```shell
# 安装轻量版
pip install PyQt-Fluent-Widgets -i https://pypi.org/simple/

# 安装完整版 (支持亚克力组件)
pip install "PyQt-Fluent-Widgets[full]" -i https://pypi.org/simple/
```
:::
::: code-group-item PyQt6
```shell
# 安装轻量版
pip install PyQt6-Fluent-Widgets -i https://pypi.org/simple/

# 安装完整版
pip install "PyQt6-Fluent-Widgets[full]" -i https://pypi.org/simple/
```
:::
::: code-group-item PySide2
```shell
# 安装轻量版
pip install PySide2-Fluent-Widgets -i https://pypi.org/simple/

# 安装完整版
pip install "PySide2-Fluent-Widgets[full]" -i https://pypi.org/simple/
```
:::
::: code-group-item PySide6
```shell
# 安装轻量版
pip install PySide6-Fluent-Widgets -i https://pypi.org/simple/

# 安装完整版
pip install "PySide6-Fluent-Widgets[full]" -i https://pypi.org/simple/
```
:::
::::

[高级版](/zh/pages/pro)组件库包含更多组件，可在发行页面下载 `PyQt-Fluent-Widgets-Pro-Gallery.zip` 进行预览，购买链接见[价格页面](/zh/price/)。

::: warning 警告
请勿同时安装 PyQt-Fluent-Widgets、PyQt6-Fluent-Widgets、PySide2-Fluent-Widgets 和 PySide6-Fluent-Widgets，因为他们的包名都是 `qfluentwidgets`.

如果混用 PyQt 和 PySide，会导致程序直接闪退，遇到此问题请自行检查安装的组件库是否对应所使用的 PyQt/PySide。
:::

## 运行示例
使用 pip 安装好 QFluentWidgets 包并下载好项目仓库**对应分支**的代码之后，就可以运行 examples 目录下的任意示例程序，比如：
```shell
cd examples/gallery
python demo.py
```

如果遇到 `ImportError: cannot import name 'XXX' from 'qfluentwidgets'`，这表明安装的包版本过低，可以按照上面的安装指令将 pypi 源替换为 https://pypi.org/simple 并重新安装最新版本的包。

## 如何入门

1. 掌握 Qt 的信号槽机制、事件机制、按钮和输入框等常用组件的使用
2. 安装组件库并下载 [GitHub 仓库](https://github.com/zhiyiYo/PyQt-Fluent-Widgets) 源代码
3. 阅读并运行 examples 文件夹中的实例
4. 阅读官网文档

::: tip 提示
除了 `InfoBar`、`Pivot` 和 `FluentWindow` 等自定义组件需要阅读文档外，按钮、输入框和标签这种组件仅仅是修改了样式表或重写了 `paintEvent`，API 与 Qt 内置组件保持一致，只要修改类名为 QFluentWidgets 的组件名即可，没有任何额外的学习成本。
:::