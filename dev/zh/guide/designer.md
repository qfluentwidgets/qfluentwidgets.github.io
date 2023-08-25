---
title: 设计师
date: 2023-08-17 16:25:01
permalink: /zh/pages/designer/
---

在 Qt Designer 中，有两种使用 PyQt-Fluent-Widgets 的方式。

### 提升控件
右击一个小部件，选择右击菜单上的 `提升为…`。

`提升为` 的作用是把原生部件替换成自定义小部件，在这个例子中是 `qfluentwidgets.PushButton`。

![context menu](/img/designer/promote_context.jpg)

弹出的对话框上需要填写自定义的组件名。头文件是组件库的包名 `qfluentwidgets`，提升的类名称为 `PushButton`。

![promote dialog](/img/designer/promote_dialog.jpg)

完成提升后不会在设计师中看到任何变化，保存 ui 文件后编译为 py 代码，可以发现 `import` 的是 `PushButton`。

<div style="position: relative; padding: 30% 45%;">
    <iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="https://player.bilibili.com/player.html?cid=1107159421&aid=655415814&page=1&as_wide=1&high_quality=1&danmaku=0" frameborder="no" scrolling="no" allowfullscreen="true"></iframe>
</div>

### 使用插件

1. 创建一个虚拟环境，推荐使用 `conda`

2. 激活虚拟环境，在终端中输入下述命令安装所需的包：

   ```shell
   pip install PyQt-Fluent-Widget
   pip install pyqt5-tools
   ```

3. 从 [PyQt-Fluent-Widgets Repo](https://github.com/zhiyiYo/PyQt-Fluent-Widgets) 下载代码

4. 运行 `python ./tools/designer.py` 来启动设计师软件（必须使用脚本启动）

一切无误的情况下能在侧边栏 Widget Box 中看到 PyQt-Fluent-Widgets 的组件。如果启动失败或者看不到 PyQt-Fluent-Widgets 的组件，解决方案参见 [#196](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/196)。

[项目发行页面](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/releases) 提供了内置 PyQt-Fluent-Widgets 插件的 QtDesigner，下载并解压 `FluentDesigner_v*.*.*.zip`，双击运行 `designer/designer.exe` 就能启动 QtDesigner。

<div style="position: relative; padding: 30% 45%;">
    <iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="https://player.bilibili.com/player.html?cid=1124976209&aid=953381256&page=1&as_wide=1&high_quality=1&danmaku=0" frameborder="no" scrolling="no" allowfullscreen="true"></iframe>
</div>

PySide6 的插件不稳定，可能无法启动 QtDesigner，建议使用 PyQt5/Qt6 的 QtDesigner 来生成 ui 文件。

::: warning 警告
PyQt5 要把 PyQt5-Frameless-Window 升级到 0.2.7 才能使用插件，PySide6 和 PyQt6 无需升级无边框包。PySide2 不支持插件，不过可以先用 PyQt5 的 QtDesigner 生成 ui 文件，然后用 uic 编译成 py 文件。
:::


### 复杂示例
下面是一个零样式表 + 100 行代码实现多子界面窗口的例子。

<div style="position: relative; padding: 30% 45%;">
    <iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="https://player.bilibili.com/player.html?cid=1193201502&aid=530806716&page=1&as_wide=1&high_quality=1&danmaku=0" frameborder="no" scrolling="no" allowfullscreen="true"></iframe>
</div>