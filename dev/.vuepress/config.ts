import { defineUserConfig, viteBundler } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { themeConfig } from "./config/index";


export default defineUserConfig({
  locales: {
    '/': {
      lang: 'English',
      title: 'QFluentWidgets',
      description: "QFluentWidgets - Fluent Design Components Library",
    },
    '/zh/': {
      lang: '简体中文',
      title: "QFluentWidgets",
      description: "QFluentWidgets - Fluent Design 风格组件库",
    },
  },
  theme: recoTheme(themeConfig),
  debug: false,
  base: '/'
});
