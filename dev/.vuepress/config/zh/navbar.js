export const navbar = [
  {
    text: '指南',
    icon: 'Compass',
    children: [
      {
        text: '快速入门',
        children: [
          {
            text: '简介',
            link: '/zh/pages/about'
          },
          {
            text: '安装',
            link: '/zh/pages/install'
          },
          {
            text: '设计师',
            link: '/zh/pages/designer'
          },
          {
            text: '组件',
            link: '/zh/pages/Components'
          },
          {
            text: '商用版',
            link: '/zh/pages/pro'
          },
          {
            text: '常见问题',
            link: '/zh/pages/faq'
          },
        ]
      },
      {
        text: '高级定制',
        children: [
          {
            text: '主题',
            link: '/zh/pages/theme'
          },
          {
            text: '图标',
            link: '/zh/pages/icon'
          },
          {
            text: '导航',
            link: '/zh/pages/navigation'
          },
          {
            text: '设置',
            link: '/zh/pages/setting'
          },
          {
            text: '国际化',
            link: '/zh/pages/i18n'
          },
        ]
      },
      {
        text: 'API 文档',
        link: 'https://pyqt-fluent-widgets.readthedocs.io/zh_CN/latest/autoapi/index.html'
      },
    ],
  },
  {
    text: '演示',
    icon: 'Download',
    children: [
      {
        text: 'Python 社区版',
        link: 'https://github.com/zhiyiYo/PyQt-Fluent-Widgets/releases/download/v1.4.1/PyQt-Fluent-Widgets-Gallery_v1.4.3_windows_x64.zip'
      },
      {
        text: 'Python 高级版',
        link: 'https://github.com/zhiyiYo/PyQt-Fluent-Widgets/releases/download/v1.4.1/PySide6-Fluent-Widgets-Pro-Gallery.zip'
      },
      {
        text: 'C++ 组件库',
        link: 'https://github.com/zhiyiYo/PyQt-Fluent-Widgets/releases/download/v1.4.1/C++_QFluentWidgets.zip'
      },
      {
        text: 'C++ 图表库',
        link: 'https://github.com/zhiyiYo/PyQt-Fluent-Widgets/releases/download/v1.4.1/C++_QFluentCharts.7z'
      },
    ]
  },
  { text: '案例', link: '/zh/showcase/', icon: 'Code' },
  { text: '价格', link: '/zh/price', icon: 'ShoppingCart' },
  { text: '视频教程', link: 'https://www.bilibili.com/video/BV12c411L73q', icon: 'Playlist' },
];