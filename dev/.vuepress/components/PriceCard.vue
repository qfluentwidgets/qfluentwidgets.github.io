<template>
    <div :class="cardClass">
        <!-- 标题 -->
        <div class="price-title-container">
            <h3 class="price-title">{{ title }}</h3>
            <p class="most-popular-badge">{{ pricePlan.badge }}</p>
        </div>

        <!-- 描述 -->
        <p class="price-desc">{{ desc }}</p>

        <!-- 价格 -->
        <p class="price-container">
            <span class="price-value">{{ price }}</span>
            <span class="price-period">{{ period }}</span>
        </p>

        <!-- 购买按钮 -->
        <div @click="openLink" class="buy-btn">{{ pricePlan.buyPlan }}</div>

        <!-- 特性 -->
        <ul role="list" class="features-container">
            <li class="feature-item" v-for="item in features">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="feature-icon">
                    <path fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd">
                    </path>
                </svg>{{ item.feature }}
            </li>
        </ul>
    </div>
</template>

<script>
import "inter-ui/inter.css";
import { ref, reactive, computed } from "vue";
import { localeConfig } from "../utils/locale";

export default {
    name: 'PriceCard',
    props: {
        title: {
            type: String,
            require: true
        },
        desc: {
            type: String,
            require: true
        },
        price: {
            type: String,
            require: true
        },
        year: {
            type: Boolean,
            require: true
        },
        permanent: {
            type: Boolean,
            require: true
        },
        url: {
            type: String,
            require: true
        },
        recommend: {
            type: Boolean,
            default: false
        },
        contactSales: {
            type: Boolean,
            default: false
        },
        features: {
            type: Array,
            require: true
        }
    },
    setup(props) {
        let pricePlan = localeConfig('prices');
        let period = props.permanent ? ref(`/${pricePlan.value.permanent}`) : ref(`/${props.year ? pricePlan.value.year : pricePlan.value.month}`);
        if (props.contactSales) {
            period = ref("");
        }

        let cardClass = reactive(['price-card']);
        if (props.recommend) {
            cardClass.push('price-card-recommend');
        }

        let openLink = () => {
            window.open(props.url, '_blank');
        }

        return { period, cardClass, openLink, pricePlan };
    }
};
</script>

<style>
.price-card {
    @apply p-10 sm:p-6 xl:p-10 ring-1 ring-gray-200 rounded-3xl dark:ring-white/10;

    .price-title-container {
        @apply flex items-center justify-between gap-x-4 tracking-tight;

        h3 {
            @apply text-gray-900 pt-0 dark:text-white;
            line-height: 2rem;
            font-weight: 600;
            font-size: 1.125rem;
            margin: 0;
        }

        .most-popular-badge {
            display: none
        }
    }

    .price-desc {
        @apply text-gray-600 pt-3 tracking-normal dark:text-gray-300;
        margin-top: 1rem;
        line-height: 1.5rem;
        font-size: 0.875rem;
        margin: 0;
    }

    .price-container {
        margin: 0;
        margin-top: 1.5rem;
        display: flex;
        align-items: baseline;
        column-gap: 0.25rem;

        .price-value {
            @apply text-gray-900 dark:text-white;
            letter-spacing: -0.025rem;
            font-weight: 700;
            font-size: 2.25rem;
            line-height: 2.5rem;
        }

        .price-period {
            @apply text-gray-600 dark:text-gray-300;
            line-height: 1.5rem;
            font-weight: 600;
            font-size: 0.875rem;
        }
    }

    .buy-btn {
        @apply ring-1 ring-inset ring-sky-200 text-sky-500 dark:ring-0 dark:bg-white/10 dark:text-white;
        text-decoration: none;
        margin-top: 1.5rem;
        display: block;
        border-radius: 0.375rem;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        text-align: center;
        font-size: 0.875rem;
        font-weight: 600;
        line-height: 1.5rem;
        cursor: pointer
    }

    .features-container {
        @apply p-0 m-0 mt-8 text-sm leading-6 text-gray-600 dark:text-gray-300 xl:mt-10 list-none;

        .feature-item {
            @apply mt-3;
            display: flex;
            column-gap: 0.75rem;
            line-height: 1.5rem;
            font-size: 0.875rem;

            .feature-icon {
                @apply text-sky-500 dark:text-white;
                display: block;
                vertical-align: middle;
                height: 1.5rem;
                width: 1.25rem;
                flex: none;
            }
        }
    }
}

.price-card-recommend {
    @apply ring-2 ring-sky-500 dark:ring-sky-500 dark:bg-white/5;

    .price-title-container {
        .price-title {
            @apply text-sky-500;
        }

        .most-popular-badge {
            @apply block rounded-full text-sky-500 dark:bg-sky-500 dark:text-white bg-sky-500/10 m-0 tracking-tight;
            padding-left: 0.625rem;
            padding-right: 0.625rem;
            padding-top: 0.25rem;
            padding-bottom: 0.25rem;
            font-size: 0.75rem;
            font-weight: 600;
            line-height: 1.25rem;
        }
    }

    .buy-btn {
        @apply ring-0 ring-inset ring-indigo-200 text-white bg-sky-500 dark:bg-sky-500;
    }
}
</style>