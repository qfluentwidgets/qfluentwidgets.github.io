# QFluentWidgets-Docs
The online documentation of [PyQt-Fluent-Widgets](https://github.com/zhiyiYo/PyQt-Fluent-Widgets).

## Quick Start
1. Install dependencies
   ```shell
   cd dev
   npm install
   ```

2. Launch local server
   ```shell
   npm run dev
   ```

3. Check the docs on http://127.0.0.1:8080


## How to Contribute

1. Fork this repo
2. Translate markdown docs
   1. Create a new directory in `dev` named the abbreviation for the translated language, i.e `jp`
   2. Copy files in `dev/docs` folder to `dev/jp` and translate `*.md` files
3. Translate config files
   1. Create a new directory, i.e. `dev/.vuepress/config/jp`
   2. Copy files in `config/en` to `config/jp` and translate `*.js` files
   3. Import the translated config to `config/index.js`:

      ```js
      import * as zhConfig from './zh'
      import * as enConfig from './en'
      import * as jpConfig from './jp' // ADDED


      export const themeConfig = {
          locales: {
              '/': {
                  selectLanguageText: 'Languages',
                  selectLanguageName: 'English',
                  ...enConfig,
              },
              '/zh/': {
                  selectLanguageText: '选择语言',
                  selectLanguageName: '简体中文',
                  ...zhConfig,
              },

              /* ADDED */
              '/jp/': {
                  selectLanguageText: '言語',
                  selectLanguageName: '日本語',
                  ...jpConfig,
              },
          },

          // Don't modify other config items
      }
      ```
    4. Add language to `dev/.vuepress/config.ts`

       ```js
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

             /* ADDED */
             '/jp/': {
               lang: '日本語',
               title: 'QFluentWidgets',
               description: "QFluentWidgets - Fluent Designスタイルコンポーネントライブラリ",
             },
           },

           // Don't modify other config items
         });
       ```

4. Create a pull request.

## Add your project to showcase
You can open an issue and provide the information of your project like this:
```js
{
    name: 'QMaterialWidgets',
    description: 'Material Design 风格组件库',
    cover: 'https://cdn.staticaly.com/gh/qfluentwidgets/picx-images-hosting@master/20230824/QMaterialWidgets.v1z65mb7568.webp',
    url: 'https://github.com/zhiyiYo/QMaterialWidgets'
}
```
