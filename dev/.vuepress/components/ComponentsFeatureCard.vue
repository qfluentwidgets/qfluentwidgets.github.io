<template>
    <div class="components-feature-container">
        <div class="components-feature-card">
            <!-- 图标 -->
            <div class="iconContainer">
                <div class="lightIcon" style="background-image: url(/img/features/light-components.png)"></div>
                <div class="darkIcon" style="background-image: url(/img/features/dark-components.png);"></div>
            </div>

            <!-- 特性名称 -->
            <h2 class="name">{{ home.features.components.title }}</h2>

            <!-- 标题 -->
            <p class="title">{{ home.features.components.subTitle }}</p>

            <!-- 描述 -->
            <p class="content">{{ home.features.components.description }}</p>

            <!-- 了解更多按钮 -->
            <a class="more-btn" :href="home.features.components.url">{{ home.learnMore }}
                <svg width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M0 0L3 3L0 6"></path>
                </svg>
            </a>
        </div>

        <div class="components-view">
            <!-- 背景图像 -->
            <div class="bg-img"></div>

            <!-- 网格线 -->
            <div class="bg-grid"></div>

            <!-- 组件图片 -->
            <div class="designer-wrapper">
                <div class="designer-img-container">
                    <div class="designer-img-wrapper">
                        <img src="/img/features/light-store.jpg" alt="" decoding="async">
                    </div>
                </div>

                <!-- 代码块 -->
                <div class="code-card-container">
                    <CodeCard fileUrl="/code/store.py" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { localeConfig } from "../utils/locale";

let home = localeConfig('home');
</script>

<style>
.components-feature-card {
    @apply max-w-7xl mx-auto px-4 sm:px-6 md:px-8 tracking-normal;

    .iconContainer {
        @apply w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden dark:bg-slate-600;

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
        @apply mt-8 font-semibold text-indigo-500 py-0 mb-0 before:contents text-base;
    }

    .title {
        @apply mt-4 mb-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50;
    }

    .content {
        @apply mt-4 max-w-3xl space-y-6 mb-0 text-slate-500 leading-6;
    }

    a.more-btn {
        @apply inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-indigo-50 text-indigo-600 hover:bg-indigo-200 hover:text-indigo-700 focus:ring-indigo-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-8 !important;

        svg {
            @apply overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400;
        }
    }

}

.components-view {
    @apply relative pt-10 xl:pt-0 mt-10;

    .bg-img {
        @apply absolute top-0 inset-x-0 bg-top bg-no-repeat top-0 xl:top-[2.5rem];

        background-image: url(/img/features/components-bg-light.jpg);
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
                @apply relative z-10 rounded-xl bg-white shadow-xl ring-1 ring-slate-900/5 overflow-hidden my-auto xl:mt-[3.7rem] dark:bg-slate-800;

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
        background-image: url(/img/features/components-bg-dark.png);
    }

    .content {
        @apply text-slate-400;
    }
}
</style>