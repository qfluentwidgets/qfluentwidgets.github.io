export const faqs = {
    title: '常见问题',
    description: '下面列出了一些常见问题解答，有其他问题欢迎 <a href="mailto:shokokawaii@foxmail.com" class="faq-email">邮件联系我们</a>，我们看到后会尽快回复.',
    items: [
        {
            question: '我想做个商用软件，必须购买许可证吗？',
            answer: '是的，Python 组件库使用双许可证进行授权，商用项目必须购买许可证，购买之后可以使用高级版的组件，订阅制的许可证过期后需要重新购买。',
        },
        {
            question: '商用版支持 PyQt 吗？',
            answer: '不支持。PyQt 的许可证较为严格，商用软件请使用 PySide6（推荐）或者 PySide2。PySide 和 PyQt 的接口一样，只有包名不同，没有任何迁移成本。',
        },
        {
            question: '如何购买永久版的组件库？',
            answer: '请联系作者邮箱 shokokawaii@foxmail.com 或 QQ：1953658489。',
        },
        {
            question: 'C++ 的组件库支持试用或者订阅制吗？',
            answer: '不支持。C++ 只支持一次性永久买断制。可从导航栏的演示菜单下载体验编译好的 C++ 演示程序。',
        },
        {
            question: 'C++ 组件库支持哪些版本的 Qt？',
            answer: '支持 Qt 5.15.x 和 Qt 6.x.x。组件库基于 QWidgets 开发，不支持 QML。',
        },
        {
            question: 'C++ 组件库提供源代码吗？',
            answer: '不提供。购买之后拿到的是头文件和静态库。',
        },
    ]
};