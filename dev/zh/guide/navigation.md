---
title: 导航
date: 2023-08-17 19:00:22
permalink: /zh/pages/navigation/
---

## 侧边导航栏
### 结构

QFluentWidgets 提供侧边导航类 `NavigationInterface`，可以将它和 `QStackWidget` 放在 `QHBoxLayout` 中，实现多子界面跳转，示例程序参见 [navigation2](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/tree/master/examples/navigation/navigation2/demo.py)。

![Structure](https://pyqt-fluent-widgets.readthedocs.io/en/latest/_images/NavigationInterface_Structure.jpg)

`NavigationInterface` 内部使用 `NavigationPanel` 来放置导航菜单项。所有导航菜单项都需要继承自 `NavigationWidget`，可以调用 `NavigationInterface.addWidget()` 或者 `NavigationPanel.addWidget()` 将导航项添加到导航界面中。

QFluentWidgets 实现了子类 `NavigationTreeWidget` ，同时提供了一个便捷的方法 `NavigationInterface.addItem()` 来创建多级菜单项并将其到导航界面上。

如果希望自定义一个导航项，可以创建 `NavigationWidget` 的子类并实现它的 `paintEvent()` 和 `setCompacted()`（可选） 方法。下面是一个简单例子，展示了如何定义头像导航项：

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
#include <FApp>
#include <FLabel>
#include <FNavigationWidget>
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

现在让我们看看 `addWidget()` 方法的各个参数：

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

可以看到，这个方法需要四个参数：

- `routeKey`：路由键，被添加到导航界面上的 `widget` 的唯一标识。如果将 `QStackWidget` 里面的子界面视为网页，`routeKey` 就是这个子界面的 URL。当用户切换子界面时，`NavigationPanel` 会将一个路由键添加到导航历史中。导航界面上的后退按钮被点击时，位于导航历史栈顶的路由键会被弹出，如果此时导航历史不为空，就可以切换到栈顶的路由键对应的子界面，否则就切换到 `defaultRouteKey` 对应的子界面，因此在运行 app 之前需要调用 `NavigationInterface.setDefaultRouteKey()` 设置一下默认子界面。
- `widget`：被添加到导航界面上的导航项。
- `onClick`：点击导航项时触发的槽函数。如果想在点击导航项时切换子界面，一种推荐的写法是将槽函数写作：`lambda: self.stackWidget.setCurrentWidget(self.xxxInterface)`。
- `position`：导航项的位置。可以是下述值中的一种：
  - `NavigationItemPosition.TOP`：添加到导航面板的顶部
  - `NavigationItemPosition.SCROLL`：添加到导航面板的滚动区域。当导航菜单项太多时，滚动区域中导航项可以被滚动
  - `NavigationItemPosition.BOTTOM`: 添加到导航面板的底部
- `tooltip`：菜单项的工具提示
- `parentRouteKey`: 父菜单项的路由键，父菜单项对应的小部件必须是 `NavigationTreeWidgetBase` 子类的实例

### 显示模式

导航面板有以下四种显示模式：

- `NavigationDisplayMode.EXPAND`：左侧面板完全展开（当窗口的宽度大于等于 1008px 时可用）
- `NavigationDisplayMode.COMPACT`：只在导航面板上显示图标，所有导航项都处于折叠状态（当窗口宽度小于 1007px 时默认使用这种显示模式）。
- `NavigationDisplayMode.MENU`：展开的导航菜单（当窗口窗口小于 1007px 并点击菜单按钮时使用此显示模式）
- `NavigationDisplayMode.MINIMAL`：只显示一个菜单按钮。在这种显示模式下，应该自己创建并管理菜单按钮和 `NavigationPanel`，然后将菜单按钮的点击信号连接到 `NavigationPanel.toggle()` 函数上，具体写法可以参见 [navigation3](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/tree/master/examples/navigation/navigation3)。

如果调用了 `NavigationInterface.setExpandWidth()`，上述的窗口宽度阈值（1008px）将相应进行调整。

### 更多示例

下面是另外一种风格的导航界面，对应的示例程序为 [navigation](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/tree/master/examples/navigation/navigation1/demo.py)。

![](https://pyqt-fluent-widgets.readthedocs.io/en/latest/_images/NavigationInterface.jpg)

迷你导航界面如下图所示，可以在 [navigation3](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/tree/master/examples/navigation/navigation3) 获取完整代码。
![](https://pyqt-fluent-widgets.readthedocs.io/en/latest/_images/NavigationInterface_Minimal.jpg)


## FluentWindow
QFluentWidgets 对侧边导航栏进行了封装，提供了开箱即用的 `FluentWindow`、`SplitFluentWindow` 和 `MSFluentWindow` 类。三个类的使用方式相似，以 `FluentWindow` 为例，只需调用 `addSubInterface()` 方法就能完成添加子界面的任务：

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

各个参数解释如下：
* `interface`: 需要添加的子界面
* `icon`：侧边栏菜单项图标
* `text`：侧边栏菜单项文本
* `position`：侧边栏菜单项的位置
* `parent`：侧边栏父菜单项对应的子界面

::: warning 警告
调用 `addSubInterface()` 之前必须给子界面设置全局唯一的对象名作为路由键，否则后退功能会出问题，同时侧边栏看不到子界面对应的菜单项
:::

下面是个简单的例子，更加复杂的多子界面示例见 [视频教程](https://www.bilibili.com/video/BV1Uu411j7AV)：

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

        # 必须给子界面设置全局唯一的对象名
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
#include <QVBoxLayout>
#include <FApp>
#include <FMessageBox>
#include <FLabel>
#include <FWindow>

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

::: tip 提示
如果你在界面的左上角看到奇怪的东西，说明忘了调用 `addSubInterface()` 添加某个子界面
:::