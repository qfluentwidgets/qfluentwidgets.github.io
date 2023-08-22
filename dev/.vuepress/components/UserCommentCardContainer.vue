<template>
    <section :class="containerClass">
        <div class="card-grid">
            <div class="card-column">
                <slot name="column-1"></slot>
            </div>
            <div class="card-column">
                <slot name="column-2"></slot>
            </div>
            <div class="card-column">
                <slot name="column-3"></slot>
            </div>
        </div>
        <div ref="mask" class="mask">
            <button type="button" @click="toggle">
                {{ home.showMore }}
            </button>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, reactive } from "vue";
import { localeConfig } from "../utils/locale";

let home = localeConfig('home');

let isExpand = ref(false);
let mask = ref();

let containerClass = computed(() => {
    return isExpand.value ? 'user-comment-card-container-expand' : 'user-comment-card-container' ;
});

const toggle = (event) => {
    isExpand.value = !isExpand.value;
    event.target.innerText = isExpand.value ? "收起" : home.showMore;
}

</script>

<style>
    .user-comment-card-container {
        @apply relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5;

        .card-grid {
           @apply grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-h-[33rem] overflow-hidden;

           .card-column {
            @apply space-y-8;
           }
        }

        .mask {
            @apply inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8 pointer-events-none dark:from-slate-900 absolute;

            button {
                @apply relative bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center dark:bg-slate-700 dark:hover:bg-slate-600 pointer-events-auto;
            }
        }
    }

    .user-comment-card-container-expand {
        @apply relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5;

        .card-grid {
            @apply grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 gap-y-6;
        }

        .mask {
            @apply inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8 pointer-events-none dark:from-slate-900 sticky -mt-52 transition-opacity duration-300 opacity-0;

            button {
                @apply relative bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center dark:bg-slate-700 dark:hover:bg-slate-600 transition-transform translate-y-4;
            }
        }
    }
</style>