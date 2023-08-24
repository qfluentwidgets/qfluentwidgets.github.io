<template>
    <div class="author-comment-card">
        <h2>{{ home.author.title }}</h2>
        <figure>
            <blockquote>
                <p v-html="home.author.comment"></p>
            </blockquote>
            <figcaption>
                <img src="/img/shoko.jpg" alt="" loading="lazy" decoding="async">
                <div>
                    <div class="name">{{ home.author.name }}</div>
                    <div class="desc">{{ home.author.description }}</div>
                </div>
            </figcaption>
        </figure>
    </div>
</template>

<script setup>
import { localeConfig } from "../utils/locale";

let home = localeConfig('home');

</script>

<style>
.author-comment-card {
    @apply text-center px-8 mt-20 mb-20 sm:mt-32 sm:mb-32 md:mt-40 md:mb-40;

    h2 {
        @apply text-slate-900 text-4xl m-0 p-0 tracking-tight font-extrabold sm:text-5xl dark:text-white before:contents;
    }

    blockquote {
        @apply bg-transparent border-l-transparent mt-0 p-0;

        p {
            @apply mt-6 max-w-3xl mx-auto text-lg text-slate-500;

            a {
                @apply text-sky-500 font-semibold dark:text-sky-400
            }
        }
    }

    figcaption {
        @apply mt-6 flex items-center justify-center space-x-4 text-left;

        img {
            @apply w-14 h-14 rounded-full;
        }

        .name {
            @apply text-slate-900 font-semibold dark:text-white;
        }

        .desc {
            @apply mt-0.5 text-sm leading-6;
        }
    }

}
</style>