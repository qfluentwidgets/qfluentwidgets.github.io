---
title: Designer
date: 2023-08-17 16:25:01
permalink: /pages/designer/
---

In Qt Designer, there are two ways to use PyQt-Fluent-Widgets.

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

### Using plugin

For all the following operations, they must be performed in an English path.


### Complex example
Here is an example that uses a side navigation bar to implement multiple sub-interfaces window.

<div style="position: relative; width:100%; padding-bottom: 56.25%; height: 0;">
    <iframe style="width: 100%; height: 100%; position: absolute; top: 0; left: 0" src="https://www.youtube.com/embed/qxZebL0EBOY?si=T0qauzjBjZ3vRxfh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>