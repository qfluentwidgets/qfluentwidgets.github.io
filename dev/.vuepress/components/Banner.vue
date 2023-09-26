<template>
    <div class="banner">
        <div class="banner-header-container">
            <!-- 背景图像 -->
            <div class="bg-img-container">
                <div class="bg-grid" style="-webkit-mask-image: linear-gradient(transparent, black);"></div>
            </div>

            <!-- 标题和描述 -->
            <div class="banner-header">
                <div class="banner-title">{{ home.title }}</div>
                <p class="banner-description" v-html="home.description"></p>

                <!-- 按钮和搜索框 -->
                <div class="button-container">
                    <!-- 快速开始按钮 -->
                    <div class="started-button" @click="quickStart">{{ home.quickStart.text }}</div>

                    <!-- 搜索框 -->
                    <button type="button" class="search-line-edit">
                        <!-- 图标 -->
                        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="search-icon" aria-hidden="true">
                            <path d="m19 19-3.5-3.5"></path>
                            <circle cx="11" cy="11" r="6"></circle>
                        </svg>

                        <span class="search-hint">{{ home.search.text }}.</span>

                        <!-- 快捷键 -->
                        <kbd class="search-hot-key"><abbr title="Control" class="search-key-text">Ctrl </abbr> K</kbd>
                    </button>
                </div>
            </div>
        </div>

        <!-- 例子 -->
        <div class="banner-example-container">
            <!-- 代码块 -->
            <div class="code-card-container">
                <div class="code-card-wrapper">
                    <CodeCard fileUrl="/code/teaching_tip.py" />
                </div>
            </div>

            <!-- 例子卡 -->
            <div class="example-card-container">
                <figure class="example-card">
                    <!-- 左侧图像 -->
                    <img class="example-img" src="/img/SBR.jpg" alt="">

                    <!-- 右侧文本 -->
                    <div class="example-content-container">
                        <p class="quote-content">
                            “触网而起的网球会落到哪一侧，谁也无法知晓。如果那种时刻到来，我希望「女神」是存在的。这样的话，不管网球落到哪一边，我都会坦然接受的吧。”
                        </p>

                        <figcaption>
                            <div class="quote-name">
                                Gyro Zeppeli
                            </div>

                            <div class="quote-job">
                                Steel Ball Run
                            </div>
                        </figcaption>
                    </div>
                </figure>
            </div>
        </div>
    </div>
</template>

<script setup>
import { localeConfig } from '../utils/locale';

let home = localeConfig('home');

let quickStart = () => {
    window.open(home.value.quickStart.url, '_blank');
}
</script>

<style>
.banner {
    @apply relative -mt-16;

    .banner-header-container {
        @apply px-4 sm:px-6 md:px-8;

        .bg-img-container {
            @apply absolute inset-0 bottom-10 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120];
            background-image: url(/img/home-background-light.jpg);
            background-size: 150rem;

            .bg-grid {
                @apply absolute inset-0 bg-[bottom_1px_center] dark:bg-bottom dark:border-b dark:border-slate-100/5;
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
            }
        }

        .banner-header {
            @apply relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32;

            .banner-title {
                @apply text-slate-900 mt-16 font-extrabold text-4xl sm:text-5xl lg:text-6xl !leading-tight tracking-tight text-center dark:text-white;
            }

            .banner-description {
                @apply mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400;
            }
        }

        .button-container {
            @apply mt-6 sm:mt-10 flex justify-center space-x-6 text-sm;

            .started-button {
                @apply cursor-pointer bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:hover:bg-sky-400;
            }

            .search-line-edit {
                @apply transition-all hidden text-sm sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:hover:bg-slate-700;

                .search-icon {
                    @apply flex-none text-slate-300 dark:text-slate-400;
                }

                .search-hint {
                    @apply flex-auto text-sm;
                }

                .search-hot-key {
                    @apply font-sans font-semibold dark:text-slate-500 border-none;

                    .search-key-text {
                        @apply no-underline text-slate-300 dark:text-slate-500 bg-none text-sm;
                    }
                }
            }
        }
    }

    .banner-example-container {
        @apply max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-20 sm:mt-24 lg:mt-32 lg:grid lg:gap-8 lg:grid-cols-12 lg:items-center;

        .code-card-container {
            @apply relative row-start-1 col-start-6 xl:col-start-7 col-span-7 xl:col-span-6;

            .code-card-wrapper {
                @apply -mx-4 sm:mx-0;
            }
        }

        .example-card-container {
            @apply relative row-start-1 col-start-1 col-span-5 xl:col-span-6 -mt-10 shadow-xl rounded-lg lg:mr-[-4.5rem] z-10;

            .example-card {
                @apply md:flex bg-white rounded-lg p-8 md:p-0 dark:bg-slate-800;

                .example-img {
                    @apply object-cover w-24 h-24 md:w-48 md:h-auto mx-auto rounded-full md:rounded-l-lg md:rounded-r-none;
                }

                .example-content-container {
                    @apply rounded-lg pt-6 md:p-8 text-center md:text-left space-y-4;

                    .quote-content {
                        @apply text-lg font-medium my-0 text-slate-800 dark:text-slate-300;
                    }

                    figcaption {
                        @apply font-medium;

                        .quote-name {
                            @apply text-sky-500 dark:text-sky-400;
                        }

                        .quote-job {
                            @apply text-slate-700 dark:text-slate-500;
                        }
                    }
                }
            }
        }
    }
}

.dark {

    .banner-header-container {
        .bg-img-container {
            background-image: url(/img/home-background-dark.jpg);
        }

        .bg-grid {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }

        .button-container {
            .started-button {
                box-shadow: inset 0 1px 0 0 #fff3;
            }

            .search-line-edit {
                box-shadow: inset 0 1px 0 0 #ffffff0d !important;
            }
        }
    }
}

.component {
    @apply font-mono font-medium text-lg text-sky-500 dark:text-sky-400 bg-transparent px-0 mx-0 !important;
}
</style>