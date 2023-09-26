<template>
    <div class="dark-mode-feature-container">
        <div class="dark-mode-feature-card">
            <!-- 图标 -->
            <div class="iconContainer">
                <div class="lightIcon" style="background-image: url(/img/features/light-mode.png)"></div>
                <div class="darkIcon" style="background-image: url(/img/features/dark-mode.png);"></div>
            </div>

            <!-- 特性名称 -->
            <h2 class="name">{{ home.features.darkMode.title }}</h2>

            <!-- 标题 -->
            <p class="title">{{ home.features.darkMode.subTitle }}</p>

            <!-- 描述 -->
            <p class="content">{{ home.features.darkMode.description }}</p>

            <!-- 了解更多按钮 -->
            <a class="more-btn" :href="home.features.darkMode.url">{{ home.learnMore }}
                <svg width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M0 0L3 3L0 6"></path>
                </svg>
            </a>
        </div>

        <div class="dark-mode-view" ref="view" :style="`height: ${viewHeight}px`">
            <!-- 背景图像 -->
            <div class="bg-img"></div>

            <!-- 网格线 -->
            <div class="bg-grid"></div>

            <!-- 切换模式按钮 -->
            <div class="btn-container">
                <button
                    :class="darkSwitchBtnClass"
                    @click="toggleTheme"
                    id="dark-mode-switch-btn" role="switch" type="button" tabindex="0">

                    <!-- 深色模式左侧的太阳图标 -->
                    <svg width="24" height="24" fill="none" aria-hidden="true" class="dark-sun-icon">
                        <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                        <path d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                    </svg>

                    <!-- 浅色模式右侧的月亮图标 -->
                    <svg width="24" height="24" fill="none" aria-hidden="true" class="light-moon-icon">
                        <path
                            d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
                            fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round">
                        </path>
                    </svg>

                    <!-- 开关按钮的圆形滑块 -->
                    <span class="slider">
                        <!-- 浅色模式的太阳图标 -->
                        <svg width="24" height="24" fill="none" aria-hidden="true" class="light-sun-icon">
                            <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </svg>

                        <!-- 深色模式的月亮图标 -->
                        <svg width="24" height="24" fill="none" aria-hidden="true" class="dark-moon-icon">
                            <path
                                d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
                                fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                            </path>
                        </svg>
                    </span>
                </button>
            </div>

            <!-- 图片 -->
            <div :class="imgContainerClass">
                <img alt="" class="light-img" loading="lazy" decoding="async" src="/img/features/light-store.jpg">
                <img alt="" class="dark-img" loading="lazy" decoding="async" src="/img/features/dark-store.jpg">
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, reactive, toRefs } from "vue";
import { localeConfig } from "../utils/locale";


let view = ref();
let viewHeight = computed(() => {
    return document.body.offsetWidth * 0.56;
});

let isDark = ref(false);
let home = localeConfig('home');

let darkSwitchBtnClass = computed(() => {
    return isDark.value ? 'dark-mode-switch-btn-checked' : 'dark-mode-switch-btn';
});

let imgContainerClass = computed(() => {
    return `img-container-${isDark.value ? 'dark' : 'light'}`;
});

let toggleTheme = () => {
    isDark.value = !isDark.value;
};

</script>

<style>
.dark-mode-feature-card {
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
        @apply mt-8 font-semibold text-base py-0 mb-0 text-slate-500 before:contents;
    }

    .title {
        @apply mt-4 mb-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50;
    }

    .content {
        @apply mt-4 max-w-3xl space-y-6 mb-0 text-slate-500 leading-6;
    }

    a.more-btn {
        @apply inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-8 !important;

        svg {
            @apply overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400;
        }
    }

}

.dark-mode-view {
    @apply relative px-4 sm:px-6 md:px-8 pt-20 w-[100%] h-[40vm];

    .bg-img {
        @apply absolute top-10 inset-x-0 bg-top bg-no-repeat xl:top-8;

        background-image: url(/img/features/dark-mode-bg-light.jpg);
        background-size: 123.25rem 100%;
        height: 31.0625rem;
    }

    .bg-grid {
        @apply absolute top-10 inset-x-0 h-[37.5rem] bg-top [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-[center_top_-1px] dark:border-t dark:border-slate-100/5 xl:top-8;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
    }

    .btn-container {
        @apply max-w-7xl mx-auto px-4 sm:px-6 md:px-8;
    }

    .dark-mode-switch-btn {
        @apply relative inline-flex items-center py-1.5 px-2 rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus:outline-none bg-cyan-500 text-cyan-200 focus-visible:ring-cyan-600;

        .dark-sun-icon {
            @apply transform transition-transform scale-0 duration-500;
        }

        .light-moon-icon {
            @apply ml-3.5 transform transition-transform scale-100 duration-300;
        }

        .light-sun-icon {
            @apply flex-none transition duration-500 transform text-cyan-500 opacity-100 scale-100;
        }

        .dark-moon-icon {
            @apply flex-none -ml-6 transition duration-500 transform text-slate-700 opacity-0 scale-0;
        }

        .slider {
            @apply absolute top-0.5 left-0.5 bg-white w-8 h-8 rounded-full flex items-center justify-center transition duration-500 transform;
        }
    }

    .dark-mode-switch-btn-checked {
        @apply relative inline-flex items-center py-1.5 px-2 rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus:outline-none bg-slate-700 text-slate-400 focus-visible:ring-slate-500;

        .dark-sun-icon {
            @apply transform transition-transform scale-100 duration-300;
        }

        .light-moon-icon {
            @apply ml-3.5 transform transition-transform scale-0 duration-500;
        }

        .light-sun-icon {
            @apply flex-none transition duration-500 transform text-cyan-500 opacity-0 scale-0;
        }

        .dark-moon-icon {
            @apply flex-none -ml-6 transition duration-500 transform text-slate-700 opacity-100 scale-100;
        }

        .slider {
            @apply absolute top-0.5 left-0.5 bg-white w-8 h-8 rounded-full flex items-center justify-center transition duration-500 transform translate-x-[2.625rem];
        }
    }


    .img-container-light {
        @apply absolute top-0 left-[23.66%] w-[55%];

        img {
            @apply absolute left-0 top-0 shadow-xl rounded-lg;
            transition: opacity 0.5s ease !important;
        }

        .light-img {
            @apply opacity-100;
        }

        .dark-img {
            @apply opacity-0;
        }
    }

    .img-container-dark {
        @apply absolute top-0 left-[23.66%] w-[55%];

        img {
            @apply absolute left-0 top-0 shadow-xl rounded-lg;
            transition: opacity 0.5s ease !important;
        }

        .light-img {
            @apply opacity-0;
        }

        .dark-img {
            @apply opacity-100;
        }
    }

}

.dark {
    .content {
        @apply text-slate-400;
    }

    .bg-img {
        background-image: url(/img/features/dark-mode-bg-dark.png);
    }
}
</style>