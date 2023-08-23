<template>
    <div class="showcase-page">
        <!-- 背景 -->
        <div class="bg-container">
            <div class="bg-wrapper">
                <picture>
                    <source srcset="/img/showcase/right-bg-light.avif" type="image/avif">
                    <img src="/img/showcase/right-bg-light.png" alt="" class="right-light-bg-img" decoding="async">
                </picture>

                <picture>
                    <source srcset="/img/showcase/right-bg-dark.avif" type="image/avif">
                    <img src="/img/showcase/right-bg-dark.png" alt="" class="right-dark-bg-img" decoding="async">
                </picture>
            </div>
        </div>

        <!-- 浅色背景 -->
        <img alt="" fetchpriority="high" decoding="async" style="color: transparent;" class="light-bg-img" src="/img/showcase/bg-light.jpg">

        <!-- 深色背景 -->
        <img alt="" fetchpriority="high" width="1318" height="1190" decoding="async" class="dark-bg-img" style="color:transparent" src="/img/showcase/bg-dark.jpg">

        <!-- 标题 -->
        <div class="showcase-header">
            <div class="showcase-title-container">
                <h1 class="showcase-title">{{ showcases.title }}</h1>
                <p class="showcase-big-title">{{ showcases.subTitle }}</p>
                <p class="showcase-desc">{{ showcases.description }}</p>
            </div>
        </div>

        <!-- 案例卡 -->
        <div class="showcase-card-container">
            <ShowcaseCard
                v-for="s in showcases.data"
                :name="s.name"
                :description="s.description"
                :cover="s.cover"
                :url="s.url"
            />
        </div>

        <!-- 页脚 -->
        <Footer />
    </div>
</template>

<script setup>
import useCustomPage from '../utils/useCustomPage';
import { localeConfig } from "../utils/locale";

useCustomPage();
let showcases = localeConfig('showcases');

</script>

<style>
.showcase-page {
    .bg-container {
        @apply absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none;

        .bg-wrapper {
            @apply w-[108rem] flex-none flex justify-end;

            .right-light-bg-img {
                @apply w-[71.75rem] flex-none max-w-none dark:hidden;
            }

            .right-dark-bg-img {
                @apply w-[90rem] flex-none max-w-none hidden dark:block;
            }
        }
    }

    .light-bg-img {
        @apply absolute hidden dark:sm:hidden sm:block absolute top-[-6.25rem] left-1/2 max-w-none w-[67.8125rem] ml-[-46.875rem] pointer-events-none;
    }

    .dark-bg-img {
        @apply hidden dark:block absolute top-[-5rem] left-1/2 max-w-none w-[41.1875rem] ml-[-40rem] pointer-events-none;
    }

    .showcase-header {
        @apply relative z-20 mx-auto max-w-[85rem] px-4 pt-14 sm:px-6 sm:pt-20 lg:px-8 ;


        .showcase-title-container {
            @apply mx-auto max-w-[48rem] text-center;

            .showcase-title {
                @apply text-base font-semibold leading-7 text-sky-500 dark:text-sky-500 block mb-0 !important;
            }

            .showcase-big-title {
                @apply mt-4 text-5xl font-bold leading-[3.5rem] tracking-tight text-slate-900 dark:text-white;
            }

            .showcase-desc {
                @apply mt-4 max-w-[48rem] tracking-normal text-lg leading-8 text-gray-600 dark:text-slate-300;
            }
        }
    }

    .showcase-card-container {
        @apply grid max-w-[26rem] sm:max-w-[52.5rem] mt-16 sm:mt-20 md:mt-32 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 lg:gap-y-8 xl:gap-x-8 lg:max-w-7xl px-4 sm:px-6 lg:px-8;


    }
}

</style>