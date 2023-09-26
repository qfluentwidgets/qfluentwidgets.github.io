<template>
    <div class="designer-feature-container">
        <div class="designer-feature-card">
            <!-- 图标 -->
            <div class="iconContainer">
                <div class="lightIcon" style="background-image: url(/img/features/light-drag.png)"></div>
                <div class="darkIcon" style="background-image: url(/img/features/dark-drag.png);"></div>
            </div>

            <!-- 特性名称 -->
            <h2 class="name">{{ home.features.designer.title }}</h2>

            <!-- 标题 -->
            <p class="title">{{ home.features.designer.subTitle }}</p>

            <!-- 描述 -->
            <p class="content">{{ home.features.designer.description }}</p>

            <!-- 了解更多按钮 -->
            <a class="more-btn" :href="home.features.designer.url">{{ home.learnMore }}
                <svg width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M0 0L3 3L0 6"></path>
                </svg>
            </a>

            <!-- 导航栏 -->
            <div class="nav-bar">
                <ul class="nav-bar-items" style="grid-template-columns: repeat(4, minmax(6rem, 1fr));">

                    <!-- Designer 按钮 -->
                    <li @click="onDesignerClicked">
                        <button type="button" :class="designerBtnStyle">
                            <svg width="48" height="48" fill="none" aria-hidden="true" class="nav-icon">
                                <path d="m7.5 10.5 6.5-3 7 3.5v16l7-4v-8l7-4 7 4v8l-7 3.5V34l-14 7.5L7.5 34V10.5Z" fill="currentColor" fill-opacity=".1"></path>
                                <path d="m7 11 7-4 7 4-7 4-7-4ZM21 11v16M21 35v7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M7 11v23l14 8 14-8V19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M14 15v16l7 4 21-12v-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="m28 15 7-4 7 4-7 4-7-4ZM28 15v8l7 4M14 31l14-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>{{ home.features.designer.designer }}
                        </button>
                    </li>

                    <!-- 实际效果按钮 -->
                    <li @click="onRunClicked">
                        <button type="button" :class="runBtnStyle">
                           <svg width="48" height="48" fill="none" aria-hidden="true" class="nav-icon">
                                <path d="M6 8h32a4 4 0 0 1 4 4v28H6V8Z" fill="currentColor" fill-opacity="0"></path>
                                <path d="M43 21v16a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V11a4 4 0 0 1 4-4h20M15 7v34" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                                <path d="M37 7c0 1.101 0 6-6 6 1.101 0 6 0 6 6 0-6 4.899-6 6-6-6 0-6-4.899-6-6ZM31 21c0 .734 0 4-4 4 .734 0 4 0 4 4 0-4 3.266-4 4-4-4 0-4-3.266-4-4Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>{{ home.features.designer.runTime }}
                        </button>
                    </li>

                </ul>
            </div>
        </div>

        <div class="designer-container">
            <!-- 背景图像 -->
            <div class="bg-img"></div>

            <!-- 网格线 -->
            <div class="bg-grid"></div>

            <!-- 设计师图片 -->
            <div class="designer-wrapper" v-show="isDesignerSelected">
                <div class="designer-img-container">
                    <div class="designer-img-wrapper">
                        <img src="/img/features/login-designer.jpg" alt="" decoding="async">
                    </div>
                </div>

                <!-- 代码块 -->
                <div class="code-card-container">
                    <CodeCard fileUrl="https://cdn.jsdelivr.net/gh/qfluentwidgets/qfluentwidgets.github.io@v0.0.1/dev/.vuepress/public/code/LoginWindow.ui" />
                </div>
            </div>

            <!-- 运行时图片 -->
            <div class="designer-wrapper" v-show="!isDesignerSelected">
                <div class="designer-img-container">
                    <div class="designer-img-wrapper">
                        <img src="/img/features/components-login.jpg" alt="" decoding="async">
                    </div>
                </div>

                <!-- 代码块 -->
                <div class="code-card-container">
                    <CodeCard fileUrl="/code/login.py" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, toRefs } from "vue";
import { localeConfig } from "../utils/locale";

let home = localeConfig('home');
let isDesignerSelected = ref(true);

let designerBtnStyle = computed(() => {
    return isDesignerSelected.value ? 'nav-bar-btn-selected' : 'nav-bar-btn';
});

let runBtnStyle = computed(() => {
    return !isDesignerSelected.value ? 'nav-bar-btn-selected' : 'nav-bar-btn';
});

let onDesignerClicked = () => {
    isDesignerSelected.value = true;
};

let onRunClicked = () => {
    isDesignerSelected.value = false;
};
</script>

<style>
.designer-feature-card {
    @apply max-w-7xl mx-auto px-4 sm:px-6 md:px-8 tracking-normal;

    .iconContainer {
        @apply w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden dark:bg-sky-500;

        .lightIcon {
            @apply relative bg-[length:100%] dark:hidden;
            padding-bottom: 58px;
        }

        .darkIcon {
            @apply hidden relative bg-[length:100%] dark:block;
            padding-bottom: 58px
        }
    }

    .name {
        @apply mt-8 font-semibold text-sky-500 py-0 mb-0 before:contents text-base;
    }

    .title {
        @apply mt-4 mb-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50;
    }

    .content {
        @apply mt-4 max-w-3xl space-y-6 mb-0 text-slate-500 leading-6;
    }

    a.more-btn {
        @apply inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-8 !important;

        svg {
            @apply overflow-visible ml-3 text-sky-300 group-hover:text-sky-400 dark:text-slate-500 dark:group-hover:text-slate-400;
        }
    }

    .nav-bar {
        @apply mt-7 flex overflow-auto -mx-4 sm:mx-0;

        ul.nav-bar-items {
            @apply flex-none inline-grid gap-x-2 px-4 mb-0 sm:px-0 xl:gap-x-6;

            li {
                list-style: none
            }

            .nav-bar-btn {
                @apply text-sm font-semibold w-full flex flex-col items-center text-gray-400;

                .nav-icon {
                    @apply mb-6 text-slate-300 dark:text-slate-600 transition-all duration-150 ease-in;
                }

                &:hover {
                    .nav-icon{
                        @apply text-slate-400 dark:hover:text-slate-500;
                    }
                }
            }

            .nav-bar-btn-selected {
                @apply text-sm font-semibold w-full flex flex-col items-center text-sky-500;

                .nav-icon {
                    @apply mb-6 text-sky-500;
                }
            }
        }
    }

}

.designer-container {
    @apply relative pt-10 xl:pt-0 mt-10;

    .bg-img {
        @apply absolute top-0 inset-x-0 bg-top bg-no-repeat top-0 xl:top-[2.5rem];

        background-image: url(/img/features/designer-bg-light.jpg);
        background-size: 123.25rem 100%;
        height: 31.0625rem;
    }

    .bg-grid {
        @apply absolute top-0 inset-x-0 h-[37.5rem] bg-top [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-[center_top_-1px] dark:border-t dark:border-slate-100/5 top-0 xl:top-[2.5rem];
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
    }

    .designer-wrapper {
        @apply max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:grid lg:grid-cols-12 lg:gap-8;

        .designer-img-container {
            @apply lg:col-span-5 xl:col-span-6 w-full relative;

            .designer-img-wrapper {
                @apply relative z-10 rounded-xl bg-white shadow-xl ring-1 ring-slate-900/5 overflow-hidden my-auto xl:mt-[7rem] dark:bg-slate-800;

                img {
                    @apply shadow-xl rounded-lg;
                }
            }
        }

        .code-card-container {
            @apply mt-4 -mx-4 sm:mx-0 lg:mt-0 lg:col-span-7 xl:col-span-6;
        }
    }
}

.dark {
    .bg-img {
        background-image: url(/img/features/designer-bg-dark.png);
    }

    .content {
        @apply text-slate-400;
    }
}</style>