---
title: 安装
date: 2023-08-17 15:37:01
permalink: /zh/pages/install/
---
QFluentWidgets 分为轻量版和完整版，其中完整版多了亚克力组件。由于完整版依赖 scipy，会导致打包体积变大许多，所以建议安装轻量版。

:::: code-group
::: code-group-item PyQt5
```shell
# 安装轻量版
pip install PyQt-Fluent-Widgets -i https://pypi.org/simple/

# 安装完整版
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

[商用高级版](/zh/pages/pro)组件库包含更多组件，可在发行页面下载 `PySide6-Fluent-Widgets-Pro-Gallery.7z` 进行预览，购买链接见[价格页面](/zh/price/)。

C++ QFluentWidgets 组件库没有开源，可从 [发行页面](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/releases) 下载体验编译好的示例程序 `QFluentWidgets_v*.*.*.zip`，如需购买使用请联系 [shokokawaii@foxmail.com](mailto:shokokawaii@foxmail.com).

::: warning 警告
请勿同时安装 PyQt-Fluent-Widgets、PyQt6-Fluent-Widgets、PySide2-Fluent-Widgets 和 PySide6-Fluent-Widgets，因为他们的包名都是 `qfluentwidgets`
:::

## 运行示例
使用 pip 安装好 QFluentWidgets 包并下载好项目仓库**对应分支**的代码之后，就可以运行 examples 目录下的任意示例程序，比如：
```shell
cd examples/gallery
python demo.py
```

如果遇到 `ImportError: cannot import name 'XXX' from 'qfluentwidgets'`，这表明安装的包版本过低，可以按照上面的安装指令将 pypi 源替换为 https://pypi.org/simple 并重新安装最新版本的包。