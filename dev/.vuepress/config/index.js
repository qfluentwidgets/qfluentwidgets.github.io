import * as zhConfig from './zh'
import * as enConfig from './en'


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
    },
    style: "@vuepress-reco/style-default",
    logo: "/img/logo.png",
    author: "zhiyiYo",
    docsRepo: "https://github.com/qfluentwidgets/PyQt-Fluent-Widgets-Docs",
    docsBranch: "main",
    docsDir: "/docs/docs",
    primaryColor: '#0ea5e9',
    algolia: {
        appId: 'FSUZIL7N0M',
        apiKey: '9fcb7256c355b2d7b2ab2842915ac782',
        indexName: 'qfluentwidgets',
        // inputSelector: '.search-line-edit',
        //algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
        debug: false // Set debug to true if you want to inspect the dropdown
    },
}


