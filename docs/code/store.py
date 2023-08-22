import sys
from PySide6.QtCore import Qt, QSize, QUrl
from PySide6.QtGui import QIcon, QFont, QColor
from PySide6.QtWidgets import QApplication, QWidget, QHBoxLayout, QVBoxLayout
from qfluentwidgets import *


class Demo(MSFluentWindow):

    def __init__(self, parent=None):
        super().__init__(parent)
        self.setTitleBar(TitleBar(self))
        self.detailedInterface = DetailInterface(self)

        self.resize(1000, 800)
        self.setWindowTitle('PyQt-Fluent-Widgets')
        self.setWindowIcon(QIcon(':/qfluentwidgets/images/logo.png'))

        self.addSubInterface(self.detailedInterface, FluentIcon.HOME,
                             '主页', selectedIcon=FluentIcon.HOME_FILL)
        self.navigationInterface.addItem('app', FluentIcon.APPLICATION, '应用')
        self.navigationInterface.addItem('video', FluentIcon.VIDEO, '视频')

        self.navigationInterface.addItem(
            'lib', FluentIcon.BOOK_SHELF, '库', position=NavigationItemPosition.BOTTOM, selectedIcon=FluentIcon.LIBRARY_FILL)
        self.navigationInterface.addItem(
            'help', FluentIcon.HELP, '帮助', position=NavigationItemPosition.BOTTOM)

        self.stackedWidget.setStyleSheet('QWidget{background: transparent}')


class StatisticsWidget(QWidget):
    """ Statistics widget """

    def __init__(self, title: str, value: str, parent=None):
        super().__init__(parent=parent)
        self.titleLabel = CaptionLabel(title, self)
        self.valueLabel = BodyLabel(value, self)
        self.vBoxLayout = QVBoxLayout(self)

        self.vBoxLayout.setContentsMargins(16, 0, 16, 0)
        self.vBoxLayout.addWidget(self.valueLabel, 0, Qt.AlignTop | Qt.AlignHCenter)
        self.vBoxLayout.addWidget(self.titleLabel, 0, Qt.AlignBottom | Qt.AlignHCenter)

        setFont(self.valueLabel, 18, QFont.DemiBold)
        self.titleLabel.setTextColor(QColor(96, 96, 96), QColor(206, 206, 206))


class AppInfoCard(SimpleCardWidget):
    """ App information card """

    def __init__(self, parent=None):
        super().__init__(parent)
        self.iconLabel = ImageLabel(":/qfluentwidgets/images/logo.png", self)
        self.iconLabel.setBorderRadius(8, 8, 8, 8)
        self.iconLabel.scaledToWidth(120)

        self.nameLabel = TitleLabel('QFluentWidgets', self)
        self.installButton = PrimaryPushButton('安装', self)
        self.companyLabel = HyperlinkLabel(
            QUrl('https://github.com/zhiyiYo/PyQt-Fluent-Widgets'), 'Shokokawaii Inc.', self)
        self.installButton.setFixedWidth(160)

        self.scoreWidget = StatisticsWidget('平均', '5.0', self)
        self.separator = VerticalSeparator(self)
        self.commentWidget = StatisticsWidget('评论数', '3K', self)

        self.descriptionLabel = BodyLabel(
            'PyQt-Fluent-Widgets 是一个基于 PyQt/PySide 的 Fluent Design 风格组件库，支持亮暗主题无缝切换和自定义主题色，帮助开发者快速实现美观优雅的现代化界面。', self)
        self.descriptionLabel.setWordWrap(True)
        self.descriptionLabel.setStyleSheet('QLabel {padding-right: 125px}')

        self.tagButton = PillPushButton('组件库', self)
        self.tagButton.setCheckable(False)
        setFont(self.tagButton, 12)
        self.tagButton.setFixedSize(80, 32)

        self.shareButton = TransparentToolButton(FluentIcon.SHARE, self)
        self.shareButton.setFixedSize(32, 32)
        self.shareButton.setIconSize(QSize(15, 15))

        self.hBoxLayout = QHBoxLayout(self)
        self.vBoxLayout = QVBoxLayout()
        self.topLayout = QHBoxLayout()
        self.statisticsLayout = QHBoxLayout()
        self.buttonLayout = QHBoxLayout()

        self.initLayout()

    def initLayout(self):
        self.hBoxLayout.setSpacing(30)
        self.hBoxLayout.setContentsMargins(34, 24, 24, 24)
        self.hBoxLayout.addWidget(self.iconLabel)
        self.hBoxLayout.addLayout(self.vBoxLayout)

        self.vBoxLayout.setContentsMargins(0, 0, 0, 0)
        self.vBoxLayout.setSpacing(0)

        # name label and install button
        self.vBoxLayout.addLayout(self.topLayout)
        self.topLayout.setContentsMargins(0, 0, 0, 0)
        self.topLayout.addWidget(self.nameLabel)
        self.topLayout.addWidget(self.installButton, 0, Qt.AlignRight)

        # company label
        self.vBoxLayout.addSpacing(3)
        self.vBoxLayout.addWidget(self.companyLabel)

        # statistics widgets
        self.vBoxLayout.addSpacing(20)
        self.vBoxLayout.addLayout(self.statisticsLayout)
        self.statisticsLayout.setContentsMargins(0, 0, 0, 0)
        self.statisticsLayout.setSpacing(10)
        self.statisticsLayout.addWidget(self.scoreWidget)
        self.statisticsLayout.addWidget(self.separator)
        self.statisticsLayout.addWidget(self.commentWidget)
        self.statisticsLayout.setAlignment(Qt.AlignLeft)

        # description label
        self.vBoxLayout.addSpacing(20)
        self.vBoxLayout.addWidget(self.descriptionLabel)

        # button
        self.vBoxLayout.addSpacing(12)
        self.buttonLayout.setContentsMargins(0, 0, 0, 0)
        self.vBoxLayout.addLayout(self.buttonLayout)
        self.buttonLayout.addWidget(self.tagButton, 0, Qt.AlignLeft)
        self.buttonLayout.addWidget(self.shareButton, 0, Qt.AlignRight)


class GalleryCard(HeaderCardWidget):
    """ Gallery card """

    def __init__(self, parent=None):
        super().__init__(parent)
        self.setTitle('屏幕截图')

        self.flipView = HorizontalFlipView(self)
        self.expandButton = TransparentToolButton(
            FluentIcon.CHEVRON_RIGHT_MED, self)

        self.expandButton.setFixedSize(32, 32)
        self.expandButton.setIconSize(QSize(12, 12))

        self.flipView.addImages([
            'resource/shoko1.jpg', 'resource/硝子 (6).png', 'resource/硝子（40）.png',
            'resource/shoko3.jpg', 'resource/shoko4.jpg',
        ])
        self.flipView.setBorderRadius(8)
        self.flipView.setSpacing(10)
        self.flipView.setItemSize(QSize(620, 351))
        self.flipView.setMinimumSize(QSize(620, 351))

        self.headerLayout.addWidget(self.expandButton, 0, Qt.AlignRight)
        self.viewLayout.addWidget(self.flipView)


class DetailInterface(SingleDirectionScrollArea):

    def __init__(self, parent=None):
        super().__init__(parent=None)

        self.view = QWidget(self)

        self.vBoxLayout = QVBoxLayout(self.view)
        self.appCard = AppInfoCard(self)
        self.galleryCard = GalleryCard(self)

        self.setWidget(self.view)
        self.setWidgetResizable(True)
        self.setObjectName('detailedInterface')

        self.vBoxLayout.setSpacing(10)
        self.vBoxLayout.setContentsMargins(0, 0, 15, 0)
        self.vBoxLayout.addWidget(self.appCard, 0, Qt.AlignTop)
        self.vBoxLayout.addWidget(self.galleryCard, 0, Qt.AlignTop)

        self.setStyleSheet("QScrollArea {border: none; background:transparent}")
        self.view.setStyleSheet('QWidget {background:transparent}')


class TitleBar(MSFluentTitleBar):
    """ Custom title bar """

    def __init__(self, parent):
        super().__init__(parent)
        self.lineEdit = SearchLineEdit(self)
        self.lineEdit.setPlaceholderText('搜索应用、游戏、电影、设备等')
        self.lineEdit.setClearButtonEnabled(True)

        self.avatarButton = TransparentToolButton('resource/shoko.png', self)
        self.avatarButton.setIconSize(QSize(28, 28))
        self.avatarButton.setFixedSize(28, 28)

    def resizeEvent(self, e):
        w, h = self.width(), self.height()
        self.avatarButton.move(w - 205, h//2-self.avatarButton.height()//2)

        self.lineEdit.resize(w // 2, self.lineEdit.height())
        self.lineEdit.move(w//2 - self.lineEdit.width()//2, h//2-self.lineEdit.height()//2)



if __name__ == '__main__':
    app = QApplication(sys.argv)
    w = Demo()
    w.show()
    app.exec_()
