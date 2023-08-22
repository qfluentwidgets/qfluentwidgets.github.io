from qframelesswindow import AcrylicWindow
from qfluentwidgets import setThemeColor
from qfluentwidgets import FluentTranslator, SplitTitleBar
from Ui_LoginWindow import Ui_Form


class LoginWindow(AcrylicWindow, Ui_Form):

    def __init__(self):
        super().__init__()
        self.setupUi(self)

        # change theme color
        setThemeColor('#28afe9')

        # change title bar
        self.setTitleBar(SplitTitleBar(self))
        self.titleBar.raise_()

        self.setWindowTitle('PyQt-Fluent-Widget')
        self.setWindowIcon(QIcon(":/images/logo.png"))
        self.windowEffect.setMicaEffect(self.winId())


if __name__ == '__main__':
    app = QApplication(sys.argv)
    app.installTranslator(FluentTranslator(QLocale()))
    w = LoginWindow()
    w.show()
    app.exec()
