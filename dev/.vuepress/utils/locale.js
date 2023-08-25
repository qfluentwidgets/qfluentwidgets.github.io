import { useRouteLocale, siteData } from "@vuepress/client"
import { themeConfig } from "../config/index"
import { computed } from "vue";


/**
 * @param {string} key 配置项名字
 * 返回当前语言所使用的配置
 */
export function localeConfig(key) {
    return computed(() => themeConfig.locales[useRouteLocale().value][key]);
}