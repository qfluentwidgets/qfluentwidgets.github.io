---
title: 设计师
date: 2023-08-17 16:25:01
permalink: /zh/pages/designer/
---

在 Qt Designer 中，有两种使用 PyQt-Fluent-Widgets 的方式。


### 使用 Client

**下述所有操作，必须在英文路径下完成。**

[Fluent Client](https://client.qfluentwidgets.com/zh/) 集成了设计师插件、可视化 Nuitka 打包和脚手架功能，支持在 Designer 中直接拖拽使用 QFluentWidgets 的组件，所见即所得，让现代化界面搭建如丝般顺滑！可在 [淘宝](https://item.taobao.com/item.htm?ft=t&id=767961666600) 购买使用 Fluent Client。

![Fluent Designer](https://img.fastmirror.net/s/2024/02/18/65d22363d4a73.jpg)



下述视频演示了 Fluent Client 的使用：
<div style="position: relative; width:100%; padding-bottom: 56.25%; height: 0;">
    <iframe style="width: 100%; height: 100%; position: absolute; top: 0; left: 0" src="https://www.youtube.com/embed/7UCmcsOlhTk?si=gCyZNmtSOrWERG4P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>


### 提升控件
右击一个小部件，选择右击菜单上的 `提升为…`。

`提升为` 的作用是把原生部件替换成自定义小部件，在这个例子中是 `qfluentwidgets.PushButton`。

![context menu](/img/designer/promote_context.jpg)

弹出的对话框上需要填写自定义的组件名。头文件是组件库的包名 `qfluentwidgets`，提升的类名称为 `PushButton`。

![promote dialog](/img/designer/promote_dialog.jpg)

完成提升后不会在设计师中看到任何变化，保存 ui 文件后编译为 py 代码，可以发现 `import` 的是 `PushButton`。

<div style="position: relative; padding: 30% 45%;">
    <iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="https://player.bilibili.com/player.html?cid=1107159421&aid=655415814&page=1&as_wide=1&high_quality=1&danmaku=0&autoplay=0" frameborder="no" scrolling="no" allowfullscreen="true"></iframe>
</div>


### 复杂示例
下面是一个使用设计师实现多界面窗口的例子，代码存放在 [examples/window/clock](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/tree/master/examples/window/clock) 目录中，PySide 切换至对应分支即可：

<div style="position: relative; padding: 30% 45%;">
    <iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="https://player.bilibili.com/player.html?cid=1193201502&aid=530806716&page=1&as_wide=1&high_quality=1&danmaku=0&autoplay=0" frameborder="no" scrolling="no" allowfullscreen="true"></iframe>
</div>