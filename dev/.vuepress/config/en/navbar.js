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
  { text: 'Showcase', link: '/showcase/', icon: 'Code' },
  { text: 'Support', link: '/pages/support/', icon: 'Cafe' },
  { text: 'Price', link: '/price', icon: 'ShoppingCart' },
  { text: 'Tutorials', link: 'https://www.bilibili.com/video/BV12c411L73q', icon: 'Playlist' },
];