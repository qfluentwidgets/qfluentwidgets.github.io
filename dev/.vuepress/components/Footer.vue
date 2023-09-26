<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-title">
                <img src="/img/logo.png" alt="logo">
                <div class="footer-name">QFluentWidgets</div>
            </div>

            <div class="footer-copyright">
                © {{ year }} Shokokawaii Inc. All rights reserved.
            </div>

        </div>
    </footer>
</template>

<script setup>
import { ref } from "vue";
let year = ref(new Date().getFullYear());
</script>

<style>
.footer {
    @apply mx-auto mt-32 w-full max-w-[85rem] px-4 sm:px-6 lg:px-8;
}

.footer-container {
    @apply border-t border-slate-900/5 pt-10 dark:border-white/10;

    .footer-title {
        @apply flex justify-center;

        img {
            @apply w-6 h-6;
        }

        .footer-name {
            @apply text-black dark:text-white text-base pl-2 font-semibold;
        }
    }

    .footer-copyright {
        @apply mt-5 text-center text-sm leading-6 text-slate-500 dark:text-slate-400 tracking-normal;
    }
}
</style>