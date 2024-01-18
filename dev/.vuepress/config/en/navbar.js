export const navbar = [
  {
    text: 'Guide',
    icon: 'Compass',
    children: [
      {
        text: 'Quick start',
        children: [
          {
            text: 'About',
            link: '/pages/about'
          },
          {
            text: 'Install',
            link: '/pages/install'
          },
          {
            text: 'Designer',
            link: '/pages/designer'
          },
          {
            text: 'Components',
            link: '/pages/Components'
          },
          {
            text: 'Pro',
            link: '/pages/pro'
          },
          {
            text: 'FAQs',
            link: '/pages/faq'
          },
        ]
      },
      {
        text: 'Customize',
        children: [
          {
            text: 'Theme',
            link: '/pages/theme'
          },
          {
            text: 'Icon',
            link: '/pages/icon'
          },
          {
            text: 'Navigation',
            link: '/pages/navigation'
          },
          {
            text: 'Settings',
            link: '/pages/setting'
          },
          {
            text: 'Translation',
            link: '/pages/i18n'
          },
        ]
      },
      {
        text: 'API docs',
        link: 'https://pyqt-fluent-widgets.readthedocs.io/zh_CN/latest/autoapi/index.html'
      },
    ],
  },
  {
    text: 'Demo',
    icon: 'Download',
    children: [
      {
        text: 'Fluent Gallery',
        link: 'https://github.com/zhiyiYo/PyQt-Fluent-Widgets/releases/download/v1.4.1/PyQt-Fluent-Widgets-Gallery.zip'
      },
      {
        text: 'Fluent Pro Gallery',
        link: 'https://github.com/zhiyiYo/PyQt-Fluent-Widgets/releases/download/v1.4.1/PyQt-Fluent-Widgets-Pro-Gallery.zip'
      },
      {
        text: 'C++ QFluentWidgets',
        link: 'https://github.com/zhiyiYo/PyQt-Fluent-Widgets/releases/download/v1.4.1/C++_QFluentWidgets.zip'
      },
      {
        text: 'C++ QFluentCharts',
        link: 'https://github.com/zhiyiYo/PyQt-Fluent-Widgets/releases/download/v1.4.1/C++_QFluentCharts.7z'
      },
    ]
  },
  { text: 'Showcase', link: '/showcase/', icon: 'Code' },
  { text: 'Pricing', link: '/price', icon: 'ShoppingCart' },
  { text: 'Tutorials', link: 'https://www.bilibili.com/video/BV12c411L73q', icon: 'Playlist' },
];