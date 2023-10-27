<template>
    <div class="showcase-card">
        <!-- 封面 -->
        <div class="cover-container">
            <img alt="" fetchpriority="high" width="672" height="494" decoding="async" data-nimg="1"
                class="cover-img" :src="cover"
                style="color: transparent;"
                data-zoomable="false"
                ref="coverEl"
            >
        </div>

        <!-- 信息 -->
        <div class="showcase-info" @click="openUrl" >
            <!-- 标题 -->
            <div class="showcase-title">{{ name }}</div>

            <!-- 超链接箭头 -->
            <svg class="href-indicator" viewBox="0 0 24 24" fill="none">
                <path d="M9.75 15.25L15.25 9.75M15.25 9.75H10.85M15.25 9.75V14.15" stroke="#0EA5E9" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>

            <!-- 描述 -->
            <p class="desc">{{ description }}</p>
        </div>
    </div>
</template>

<script>
import { nextTick, ref } from "vue";

export default {
    name: 'ShowcaseCard',
    props: ['name', 'description', 'url', 'cover'],
    setup(props) {
        let coverEl = ref();

        let openUrl = () => {
            window.open(props.url, '_blank');
        };

        nextTick(() => {
            coverEl.value.removeAttribute('data-nimg');
        });

        return { openUrl, coverEl };
    }
}
</script>

<style>
.showcase-card {
    @apply relative rounded-3xl bg-slate-50 p-6 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700/50;


    .cover-container {
        @apply aspect-[672/494] transition-all duration-200 relative rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200 dark:bg-slate-700;

        img {
            @apply absolute inset-0 w-full h-full object-cover;
            backface-visibility: hidden
        }
    }

    .showcase-info {
        @apply flex flex-wrap items-center mt-6 cursor-pointer;

        .showcase-title {
            @apply transition-all duration-200 z-50 cursor-pointer text-sm leading-6 py-0 my-0 before:contents text-slate-900 dark:text-white font-semibold !important;
        }

        .href-indicator {
            @apply w-6 h-6 flex-none opacity-0 transition-all duration-200 ;
        }

        .desc {
            @apply w-full flex-none text-[0.8125rem] leading-6 text-slate-500 dark:text-slate-400 py-0 my-0;
        }

        &:hover {
            .showcase-title {
                @apply text-sky-500 dark:text-sky-400 !important;
            }

            .href-indicator {
                @apply opacity-100;
            }
        }
    }

}

.dark {
    .showcase-card {
        box-shadow: inset 0 1px 0 0 #ffffff0d;
    }
}
</style>