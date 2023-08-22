<template>
    <div class="price-page">
        <!-- 标题 -->
        <div class="price-header">
            <div class="price-title-container">
                <h1 class="price-title">{{ pricePlan.title }}</h1>
                <p class="price-big-title">{{ pricePlan.subTitle }}</p>
                <p class="price-desc">{{ pricePlan.description }}</p>
            </div>
        </div>

        <!-- 分段导航栏 -->
        <div class="segmented-nav">
            <div class="segmented-container">
                <div @click="onPySide6Clicked" :class="pyside6NavItemClass">PySide6</div>
                <div @click="onPySide2Clicked" :class="pyside2NavItemClass">PySide2</div>
            </div>
        </div>

        <!-- 价格卡 -->
        <div class="price-card-container">
            <div class="price-card-list">
                <PriceCard
                    :title="p.title"
                    :desc="p.desc"
                    :price="p.price"
                    :year="p.year"
                    :url="p.url"
                    :recommend="p.recommend"
                    :features="p.features"
                    v-show="isPySide6"
                    v-for="p in pricePlan.pyside6"
                 />
                <PriceCard
                    :title="p.title"
                    :desc="p.desc"
                    :price="p.price"
                    :year="p.year"
                    :url="p.url"
                    :recommend="p.recommend"
                    :features="p.features"
                    v-show="!isPySide6"
                    v-for="p in pricePlan.pyside2"
                 />
            </div>
        </div>

        <!-- 页脚 -->
        <Footer />
    </div>
</template>

<script setup>
import useCustomPage from '../utils/useCustomPage';
import { ref, computed } from "vue";
import { localeConfig } from "../utils/locale";

useCustomPage();
let isPySide6 = ref(true);

let pricePlan = localeConfig('prices');

let pyside6NavItemClass = computed(() => {
    return isPySide6.value ? "nav-item-selected" : "nav-item";
});

let pyside2NavItemClass = computed(() => {
    return !isPySide6.value ? "nav-item-selected" : "nav-item";
});

let onPySide6Clicked = () => {
    isPySide6.value = true;
};

let onPySide2Clicked = () => {
    isPySide6.value = false;
};

</script>

<style>
.price-header {
    @apply relative z-20 mx-auto max-w-[85rem] px-4 pt-14 sm:px-6 sm:pt-20 lg:px-8;


    .price-title-container {
        @apply mx-auto max-w-[48rem] text-center;

        .price-title {
            @apply text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400 block mb-0 !important;
        }

        .price-big-title {
            @apply mt-4 text-5xl font-bold leading-[3.5rem] tracking-tight text-slate-900 dark:text-white;
        }

        .price-desc {
            @apply mt-4 max-w-[48rem] tracking-normal text-lg leading-8 text-gray-600 dark:text-slate-300;
        }
    }
}

.segmented-nav {
    @apply mt-16 flex justify-center;

    .segmented-container {
        @apply grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200 dark:bg-white/5 dark:ring-0;

        .nav-item-selected {
            @apply text-white py-1 px-[0.625rem] bg-indigo-600 rounded-full cursor-pointer tracking-tight;
        }

        .nav-item {
            @apply text-gray-500 py-1 px-[0.625rem] rounded-full cursor-pointer tracking-tight;
        }
    }
}

.price-card-container {
    @apply mx-auto max-w-7xl mt-10 px-6 lg:px-8;

    .price-card-list {
        @apply isolate m-auto mt-10 grid grid-cols-1 gap-8 lg:m-0 lg:grid-cols-3 tracking-normal;
    }
}

</style>