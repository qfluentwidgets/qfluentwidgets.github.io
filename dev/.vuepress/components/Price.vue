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
                <div @click="onPythonClicked" :class="pythonNavItemClass">Python</div>
                <div @click="onCppClicked" :class="cppNavItemClass">C++</div>
            </div>
        </div>

        <!-- 价格卡 -->
        <div class="price-card-container">
            <div class="price-card-list">
                <PriceCard :title="p.title" :desc="p.desc" :price="p.price" :year="p.year" :permanent="p.permanent"
                    :url="p.url" :recommend="p.recommend" :contactSales="p.contactSales" :features="p.features" v-show="isPython"
                    v-for="p in pricePlan.python" />
                <PriceCard :title="p.title" :desc="p.desc" :price="p.price" :year="p.year" :permanent="p.permanent"
                    :url="p.url" :recommend="p.recommend" :contactSales="p.contactSales" :features="p.features" v-show="isCpp"
                    v-for="p in pricePlan.cpp" />
            </div>
        </div>

        <!-- 用户评论 -->
        <div class="comments-section">
            <div class="comments-container">
                <div v-for="comment in pricePlan.comments" :class="comment.id == 2 ? 'comments-card-right' : 'comments-card'">
                    <div class="comments-logo-container">
                        <img class="comments-logo" :src="comment.logo" alt="" />
                        <span class="comments-logo-name">{{ comment.title }}</span>
                    </div>
                    <figure class="comments-wrapper">
                        <blockquote class="comments-content">
                            <p>{{ comment.content }}</p>
                        </blockquote>
                        <figcaption class="comments-user-container">
                            <img class="comments-user-avatar" :src="comment.avatar" alt="" />
                            <div class="comments-user-info">
                                <div class="comments-user-name">{{ comment.name }}</div>
                                <div class="comments-user-job">{{ comment.job }}</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>

        <!-- 常见问题 -->
        <div class="faq-container">
            <h2 class="faq-title">{{ faqs.title }}</h2>
            <p class="faq-desc" v-html="faqs.description"></p>
            <dl class="faq-wrapper">
                <div v-for="faq in faqs.items">
                    <dt class="faq-question">{{ faq.question }}</dt>
                    <dd class="faq-answer">{{ faq.answer }}</dd>
                </div>
            </dl>
        </div>

        <!-- 页脚 -->
        <Footer />
    </div>
</template>

<script setup>
import useCustomPage from '../utils/useCustomPage';
import { ref, computed, reactive } from "vue";
import { localeConfig } from "../utils/locale";

useCustomPage();
let isPython = ref(true);
let isCpp = ref(false);
let isCharts = ref(false);

let pricePlan = localeConfig('prices');
let faqs = localeConfig('faqs');

let pythonNavItemClass = computed(() => {
    return isPython.value ? "nav-item-selected" : "nav-item";
});

let cppNavItemClass = computed(() => {
    return isCpp.value ? "nav-item-selected" : "nav-item";
});

let chartsNavItemClass = computed(() => {
    return isCharts.value ? "nav-item-selected" : "nav-item";
});

let onPythonClicked = () => {
    isPython.value = true;
    isCpp.value = false;
    isCharts.value = false;
};

let onCppClicked = () => {
    isPython.value = false;
    isCpp.value = true;
    isCharts.value = false;
};

let onChartsClicked = () => {
    isPython.value = false;
    isCpp.value = false;
    isCharts.value = true;
};

</script>

<style>
.price-header {
    @apply relative mx-auto max-w-[85rem] px-4 pt-14 sm:px-6 sm:pt-20 lg:px-8;


    .price-title-container {
        @apply mx-auto max-w-[48rem] text-center;

        .price-title {
            @apply text-base font-semibold leading-7 text-sky-500 dark:text-sky-400 block mb-0 !important;
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
            @apply text-white py-1 px-[0.625rem] bg-sky-500 rounded-full cursor-pointer tracking-tight;
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

.faq-container {
    @apply mx-auto mt-24 max-w-7xl px-6 sm:mt-56 lg:px-8;

    .faq-title {
        @apply text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white;

        &::before {
            @apply border-t-0
        }
    }

    .faq-desc {
        @apply mt-6 max-w-2xl text-base leading-7 dark:text-gray-300;

        .faq-email {
            @apply font-semibold text-indigo-400 hover:text-indigo-300;
        }
    }

    .faq-wrapper {
        @apply mt-20 space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10;

        .faq-question {
            @apply text-base font-semibold leading-7 text-gray-900 dark:text-white;
        }

        .faq-answer {
            @apply mt-2 text-base leading-7 text-gray-600 dark:text-gray-300;
        }
    }
}

.comments-section {
    @apply mx-auto mt-24 max-w-7xl px-6 sm:mt-56 lg:px-8;

    .comments-container {
        @apply mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2;

        .comments-card {
            @apply flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20;
        }

        .comments-card-right {
            @apply flex flex-col border-t dark:border-white/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20;
        }

        .comments-logo-container {
            @apply flex items-center;

            .comments-logo {
                @apply h-12 self-start;
            }

            .comments-logo-name {
                @apply font-bold text-2xl px-4 dark:text-white
            }
        }

        .comments-wrapper {
            @apply mt-10 flex flex-auto flex-col justify-between;

            .comments-content {
                @apply text-lg border-l-0 my-0 p-0 leading-8 bg-transparent dark:text-white;
            }

            .comments-user-container {
                @apply mt-10 flex items-center gap-x-6;

                .comments-user-avatar {
                    @apply h-14 w-14 rounded-full dark:bg-none;
                }

                .comments-user-info {
                    @apply text-base;

                    .comments-user-name {
                        @apply font-semibold dark:text-white;
                    }

                    .comments-user-job {
                        @apply mt-1 dark:text-gray-400;
                    }
                }
            }
        }
    }
}
</style>