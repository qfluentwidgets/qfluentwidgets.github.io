---
title: Designer
date: 2023-08-17 16:25:01
permalink: /pages/designer/
---

In Qt Designer, there are two ways to use PyQt-Fluent-Widgets.


### Using Client (Recommend)

**For all the following operations, they must be performed in an English path.**


[Fluent Client](https://client.qfluentwidgets.com/) integrates designer plugins, visual Nuitka packaging, and skeleton functionality, supporting direct drag-and-drop usage of QFluentWidgets components in Designer. What you see is what you get, making the construction of modern interfaces silky smooth! You can purchase from [TaoBao](https://item.taobao.com/item.htm?ft=t&id=767961666600) or [Afdian](https://afdian.com/item/6726fcc4247311ef8c6852540025c377).


![Fluent Designer](https://img.fastmirror.net/s/2024/02/18/65d22363d4a73.jpg)

The following video demonstrates the usage of Fluent Client:

<div style="position: relative; width:100%; padding-bottom: 56.25%; height: 0;">
    <iframe style="width: 100%; height: 100%; position: absolute; top: 0; left: 0" src="https://www.youtube.com/embed/7UCmcsOlhTk?si=gCyZNmtSOrWERG4P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>


### Promoting widget
Right click on a widget, select the `Promote to ...` of context menu.

Promoting a widget indicates that it should be replaced with the specified subclass, in our case the `qfluentwidgets.PushButton`.

![context menu](/img/designer/promote_context.jpg)

You will be presented with a dialog to specify the custom widget class the placeholder widget will become.

The header file is the name of the Python module used to import the class, which is `qfluentwidgets`. Specify `PushButton` as the class name of the widget to replace it with.

![promote dialog](/img/designer/promote_dialog.jpg)

Well, the widget is now promoted to fluent push button. But you won’t be able to see any changes within Qt Designer. Save the window as `mainwindow.ui` and compile it to python code, you will see that the `PushButton` is imported from `qfluentwidgets` package.

<div style="position: relative; width:100%; padding-bottom: 56.25%; height: 0;">
    <iframe style="width: 100%; height: 100%; position: absolute; top: 0; left: 0" src="https://www.youtube.com/embed/9FLCTLe7InU?si=0TkEWYDYX2OZSaeu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>


### Complex example
Here is an example that uses a side navigation bar to implement multiple sub-interfaces window.

<div style="position: relative; width:100%; padding-bottom: 56.25%; height: 0;">
    <iframe style="width: 100%; height: 100%; position: absolute; top: 0; left: 0" src="https://www.youtube.com/embed/qxZebL0EBOY?si=T0qauzjBjZ3vRxfh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>