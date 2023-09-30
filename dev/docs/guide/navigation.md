---
title: Navigation
date: 2023-08-17 19:00:22
permalink: /pages/navigation/
---
## NavigationInterface
### Structure

PyQt Fluent Widgets provides a side navigation class `NavigationInterface`. You can use it with `QStackWidget` and put them in `QHBoxLayout`. Examples are available at [navigation2](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/tree/master/examples/navigation/navigation2/demo.py).

![](https://pyqt-fluent-widgets.readthedocs.io/en/latest/_images/NavigationInterface_Structure.jpg)

`NavigationInterface` contains `NavigationPanel` which is used to place navigation menu items. All navigation menu items should inherit from `NavigationWidget` and you can add them to the panel by calling `NavigationInterface.addWidget()` or `NavigationPanel.addWidget()`. PyQt-Fluent-Widgets implements subclass `NavigationPushButton` and provides a convenient method `NavigationInterface.addItem()` to add it to the panel.

If you want to customize a navigation menu item, you should inherit the `NavigationWidget` and rewrite its `paintEvent()` and `setCompacted()`(optional). Here an example shows how to create an avatar item.

:::: code-group
::: code-group-item Python
```python
from qfluentwidgets import NavigationWidget


class AvatarWidget(NavigationWidget):
    """ Avatar widget """

    def __init__(self, parent=None):
        super().__init__(isSelectable=False, parent=parent)
        self.avatar = QImage('resource/shoko.png').scaled(
            24, 24, Qt.KeepAspectRatio, Qt.SmoothTransformation)

    def paintEvent(self, e):
        painter = QPainter(self)
        painter.setRenderHints(
            QPainter.SmoothPixmapTransform | QPainter.Antialiasing)

        painter.setPen(Qt.NoPen)

        if self.isPressed:
            painter.setOpacity(0.7)

        # draw background
        if self.isEnter:
            c = 255 if isDarkTheme() else 0
            painter.setBrush(QColor(c, c, c, 10))
            painter.drawRoundedRect(self.rect(), 5, 5)

        # draw avatar
        painter.setBrush(QBrush(self.avatar))
        painter.translate(8, 6)
        painter.drawEllipse(0, 0, 24, 24)
        painter.translate(-8, -6)

        if not self.isCompacted:
            painter.setPen(Qt.white if isDarkTheme() else Qt.black)
            font = QFont('Segoe UI')
            font.setPixelSize(14)
            painter.setFont(font)
            painter.drawText(QRect(44, 0, 255, 36), Qt.AlignVCenter, 'zhiyiYo')
```
:::
::: code-group-item C++
```cpp
#include <QFluentWidgets/Common/FluentApp.h>
#include <QFluentWidgets/Components/Widgets/Label.h>
#include <QFluentWidgets/Components/Navigation/NavigationWidget.h>
#include <QPainter>

class NavigationAvatarWidget : public NavigationWidget
{
    Q_OBJECT

public:
    explicit NavigationAvatarWidget(const QString& name, const QString& avatar, QWidget* parent = nullptr)
        : NavigationWidget(false, parent), name_(name), avatar_(new AvatarWidget(avatar, this))
    {
        avatar_->setRadius(12);
        avatar_->move(8, 6);
    }

protected:
    void paintEvent(QPaintEvent* event) override
    {
        QPainter painter(this);
        painter.setRenderHints(QPainter::SmoothPixmapTransform | QPainter::Antialiasing);
        painter.setPen(Qt::NoPen);

        if (isPressed_) {
            painter.setOpacity(0.7);
        }

        // draw background
        if (isEnter_) {
            int c = isDarkTheme() ? 255 : 0;
            painter.setBrush(QColor(c, c, c, 10));
            painter.drawRoundedRect(rect(), 5, 5);
        }

        // draw text
        if (!isCompacted()) {
            painter.setPen(isDarkTheme() ? Qt::white : Qt::black);
            painter.setFont(font());
            painter.drawText(QRect(44, 0, 255, 36), Qt::AlignVCenter, name());
        }
    }

private:
    AvatarWidget* avatar_;
};

class QFW_EXPORT NavigationItemLayout : public QVBoxLayout
{
    Q_OBJECT

public:
    using QVBoxLayout::QVBoxLayout;

    virtual void setGeometry(const QRect& rect) override;
};
```
:::
::::

Now let's take a look at the parameters required for the `addWidget()` method:

:::: code-group
::: code-group-item Python
```python
def addWidget(
    self,
    routeKey: str,
    widget: NavigationWidget,
    onClick=None,
    position=NavigationItemPosition.TOP,
    tooltip: str = None,
    parentRouteKey: str = None
)
```
:::
::: code-group-item C++
```cpp
void addWidget(
    const QString& routeKey,
    NavigationWidget* widget,
    NavigationItemPosition position = NavigationItemPosition::Top,
    const QString& tooltip = "",
    const QString& parentRouteKey = ""
);
```
:::
::::

As you can see, this method requires four parameters:

* `routeKey`: A unique name for the `widget` to be added. You can consider the sub interface in the `QStackWidget` as a web page, and the `routeKey` is the url of the web page. When you switch between sub interfaces, `NavigationPanel` will add a `routeKey` to the navigation history. When you click the return button, the `routeKey` at the top of the navigation history will pop up. If there are other `routeKeys` in the history at this time, PyQt-Fluent-Widgets will switch to the corresponding sub interface corresponding to current top `routeKey`. Otherwise, it will switch to the sub interface corresponding to `defaultRouteKey`, so you should call `NavigationInterface.setDefaultRouteKey()` before running app.
* `widget`: The widget to be added to panel.
* `onClick`: Slot function connected to the widget's `clicked` signal. If you want to switch sub interfaces when clicking `widget`, it is recommended to write this slot function as `lambda: self.stackWidget.setCurrentWidget(self.xxxInterface) `.
* `position`: Where to add the `widget` to the panel. The following values are available:
  * `NavigationItemPosition.TOP`: add `widget` to the top layout of panel.
  * `NavigationItemPosition.SCROLL`: add `widget` to the scroll layout of panel. You can scroll the widgets in scroll layout when there are too many menu items.
  * `NavigationItemPosition.BOTTOM`: add `widget` to the bottom layout of panel.
* `tooltip`: The tooltip of menu item.
* `parentRouteKey`: The route key of parent menu item, the widget of parent item must be the instance of `NavigationTreeWidgetBase`

### Display mode

The navigation panel has four display modes:

* `NavigationDisplayMode.EXPAND`: An expanded left pane on large window widths (1008px or greater).
  ![](https://cdn.staticaly.com/gh/qfluentwidgets/picx-images-hosting@master/20230824/Expand.39gngq1yta40.webp)

* `NavigationDisplayMode.COMPACT`: A left, icon-only, nav panel on medium window widths (1007px or less).
  ![](https://cdn.staticaly.com/gh/qfluentwidgets/picx-images-hosting@master/20230824/Compact.20s8q00qtvfk.webp)

* `NavigationDisplayMode.MENU`: An expanded left menu (1007px or less).
  ![](https://cdn.staticaly.com/gh/qfluentwidgets/picx-images-hosting@master/20230824/Menu.5qqwsbrrs4w0.webp)

* `NavigationDisplayMode.MINIMAL`: Only a menu button on small window widths (you should add and manage the menu button to main window by yourself like [navigation3](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/tree/master/examples/navigation/navigation3) does).

If you call `NavigationInterface.setExpandWidth()`, the large window width (1008px) will change accordingly.


### More examples
Here is an another style of navigation interface, and its corresponding example program is available at [navigation](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/tree/master/examples/navigation/navigation1/demo.py).

![](https://pyqt-fluent-widgets.readthedocs.io/en/latest/_images/NavigationInterface.jpg)

Minimal display mode navigation interface is available at [navigation3](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/tree/master/examples/navigation/navigation3).

![](https://pyqt-fluent-widgets.readthedocs.io/en/latest/_images/NavigationInterface_Minimal.jpg)


## FluentWindow
QFluentWidgets encapsulates the side navigation bar and provides out-of-the-box `FluentWindow`, `SplitFluentWindow` and `MSFluentWindow` classes. The usage of these three classes is similar. Taking `FluentWindow` as an example, you can simply call the `addSubInterface()` method to add a sub-interface.

:::: code-group
::: code-group-item Python
```python
def addSubInterface(
    self,
    interface: QWidget,
    icon: FluentIconBase | QIcon | str,
    text: str,
    position=NavigationItemPosition.TOP,
    parent: QWidget = None
) -> NavigationTreeWidget
```
:::
::: code-group-item C++
```cpp
NavigationTreeWidget* addSubInterface(QWidget* interface,
                                      const QIcon& icon,
                                      const QString& text,
                                      NavigationItemPosition position = NavigationItemPosition::Top,
                                      QWidget* parent = nullptr);

NavigationTreeWidget* addSubInterface(QWidget* interface,
                                      qfluentwidgets::FluentIconBase* icon,
                                      const QString& text,
                                      NavigationItemPosition position = NavigationItemPosition::Top,
                                      QWidget* parent = nullptr);
```
:::
::::

The explanations for each parameter are as follows:
* `interface`: The sub-interface that needs to be added.
* `icon`: The icon of the sidebar menu item.
* `text`: The text of the sidebar menu item.
* `position`: The position of the sidebar menu item.
* `parent`: The sub-interface corresponding to the parent menu item in the sidebar.

::: warning
Before calling `addSubInterface()`, it is necessary to set a globally unique object name for the sub-interface as the routing key. Otherwise, the back navigation functionality may encounter issues, and the corresponding menu item for the sub-interface will not be visible in the sidebar.
:::

Here is a simple example. For more complex examples with multiple sub-interfaces, please refer to the [video tutorial](https://www.bilibili.com/video/BV1Uu411j7AV).

:::: code-group
::: code-group-item Python
```python
from qfluentwidgets import NavigationItemPosition, FluentWindow, SubtitleLabel, setFont
from qfluentwidgets import FluentIcon as FIF


class Widget(QFrame):

    def __init__(self, text: str, parent=None):
        super().__init__(parent=parent)
        self.label = SubtitleLabel(text, self)
        self.hBoxLayout = QHBoxLayout(self)

        setFont(self.label, 24)
        self.label.setAlignment(Qt.AlignCenter)
        self.hBoxLayout.addWidget(self.label, 1, Qt.AlignCenter)

        # unique object name
        self.setObjectName(text.replace(' ', '-'))


class Window(FluentWindow):
    """ 主界面 """

    def __init__(self):
        super().__init__()

        # 创建子界面，实际使用时将 Widget 换成自己的子界面
        self.homeInterface = Widget('Home Interface', self)
        self.musicInterface = Widget('Music Interface', self)
        self.videoInterface = Widget('Video Interface', self)
        self.settingInterface = Widget('Setting Interface', self)
        self.albumInterface = Widget('Album Interface', self)
        self.albumInterface1 = Widget('Album Interface 1', self)

        self.initNavigation()
        self.initWindow()

    def initNavigation(self):
        self.addSubInterface(self.homeInterface, FIF.HOME, 'Home')
        self.addSubInterface(self.musicInterface, FIF.MUSIC, 'Music library')
        self.addSubInterface(self.videoInterface, FIF.VIDEO, 'Video library')

        self.navigationInterface.addSeparator()

        self.addSubInterface(self.albumInterface, FIF.ALBUM, 'Albums', NavigationItemPosition.SCROLL)
        self.addSubInterface(self.albumInterface1, FIF.ALBUM, 'Album 1', parent=self.albumInterface)

        self.addSubInterface(self.settingInterface, FIF.SETTING, 'Settings', NavigationItemPosition.BOTTOM)

    def initWindow(self):
        self.resize(900, 700)
        self.setWindowIcon(QIcon(':/qfluentwidgets/images/logo.png'))
        self.setWindowTitle('PyQt-Fluent-Widgets')


if __name__ == '__main__':
    app = QApplication(sys.argv)
    w = Window()
    w.show()
    app.exec()
```
:::
::: code-group-item C++
```cpp
#include <QApplication>
#include <QDesktopServices>
#include <QFluentWidgets/Common/FluentApp.h>
#include <QFluentWidgets/Components/DialogBox/Dialog.h>
#include <QFluentWidgets/Components/Widgets/Label.h>
#include <QFluentWidgets/Window/FluentWindow.h>
#include <QVBoxLayout>

using namespace qfluentwidgets;

class SubInterface : public QFrame
{
    Q_OBJECT

public:
    explicit SubInterface(const QString& text, QWidget* parent = nullptr) : QFrame(parent)
    {
        auto label = new SubtitleLabel(text, this);
        auto layout = new QHBoxLayout(this);

        ::setFont(label, 24);
        label->setAlignment(Qt::AlignCenter);
        layout->addWidget(label, 1, Qt::AlignCenter);

        setObjectName(text);
    }
};

class Demo : public FluentWindow
{
    Q_OBJECT
public:
    Demo(QWidget* parent = nullptr)
        : FluentWindow(parent),
          searchInterface(new SubInterface("Search Interface", this)),
          musicInterface(new SubInterface("Music Interface", this)),
          videoInterface(new SubInterface("Video Interface", this)),
          albumInterface(new SubInterface("Albums", this)),
          albumInterface1(new SubInterface("Album 1", this)),
          folderInterface(new SubInterface("Folder Interface", this)),
          settingInterface(new SubInterface("Setting Interface", this))
    {
        // initialize navigation
        initNavigation();

        initWindow();
    }

private:
    void initWindow()
    {
        resize(900, 700);
        setWindowIcon(QIcon(":/qfluentwidgets/images/logo.png"));
        setWindowTitle("PyQt-Fluent-Widgets");
    }

    void initNavigation()
    {
        addSubInterface(searchInterface, new FluentIcon(FluentIcon::Search), "Search");
        addSubInterface(musicInterface, new FluentIcon(FluentIcon::Music), "Music library");
        addSubInterface(videoInterface, new FluentIcon(FluentIcon::Video), "Video library");

        navigationInterface_->addSeparator();

        // add navigation items to scroll area
        auto pos = NavigationItemPosition::Scroll;
        addSubInterface(albumInterface, new FluentIcon(FluentIcon::Album), "Albums", pos);
        addSubInterface(albumInterface1, new FluentIcon(FluentIcon::Album), "Albums 1", pos, albumInterface);

        addSubInterface(folderInterface, new FluentIcon(FluentIcon::Folder), "Folder library", pos);

        // add custom widget to bottom
        auto avatar = new NavigationAvatarWidget("zhiyiYo", "Resource/images/shoko.png");
        pos = NavigationItemPosition::Bottom;
        navigationInterface_->addWidget("avatar", avatar, pos);
        connect(avatar, &NavigationAvatarWidget::clicked, this, &Demo::showMessageBox);

        addSubInterface(settingInterface, new FluentIcon(FluentIcon::Setting), "Setting", pos);
    }

private slots:
    void showMessageBox()
    {
        auto w = new MessageBox("支持作者",
                                "个人开发不易，如果这个项目帮助到了您，可以考虑请作者喝一瓶快乐水🥤。您的支"
                                "持就是作者开发和维护项目的动力🚀",
                                this);
        w->setYesButtonText("来啦老弟");
        w->setCancelButtonText("下次一定");

        if (w->exec()) {
            QDesktopServices::openUrl(QUrl("https://afdian.net/a/zhiyiYo"));
        }
    }

private:
    SubInterface* searchInterface;
    SubInterface* musicInterface;
    SubInterface* videoInterface;
    SubInterface* albumInterface;
    SubInterface* albumInterface1;
    SubInterface* folderInterface;
    SubInterface* settingInterface;
};

int main(int argc, char* argv[])
{
    QApplication app(argc, argv);

    Demo w;
    w.show();

    return app.exec();
}
```
:::
::::

::: tip
If you see something strange in the top left corner of main window, it means that you forgot to call `addSubInterface()` to add a particular sub-interface.
:::