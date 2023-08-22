<template>
    <div class="code-card">
        <div class="code-card-container">
            <!-- 标题栏 -->
            <div class="title-bar-container">
                <div class="title-bar">
                    <div class="traffic-light"></div>
                    <div class="traffic-light"></div>
                    <div class="traffic-light"></div>
                </div>
            </div>

            <!-- 代码体 -->
            <div class="code-container">
                <div class="code-wrapper" style="opacity: 1;">
                    <div class="code-inner-wrapper">
                        <div class="code-inner-inner-wrapper">
                            <pre class="code-inner-container">
                                <!-- 代码体 -->
                                <code ref="codeBlock" class="code-block">{{ html }}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, nextTick } from "vue";
import buildCodeBlock from "../utils/code-block";

export default {
    name: 'CodeCard',
    props: {
        // 代码文件路径
        fileUrl: {
            type: String,
            require: true
        },
    },
    setup(props) {
        let html = ref('');
        let codeBlock = ref();

        fetch(props.fileUrl)
            .then(response => response.text())
            .then(code => {
                html.value = code;

                // 代码高亮
                nextTick(() => {
                    buildCodeBlock(codeBlock.value);
                });
            })
            .catch(error => {
                console.error('读取文件时出错：', error);
            });

        return { html, codeBlock };
    }
}
</script>

<style>
.code-card {
    @apply relative overflow-hidden shadow-xl flex bg-slate-800 h-[31.625rem] max-h-[60vh] sm:max-h-[none] sm:rounded-xl lg:h-[34.6875rem] xl:h-[31.625rem] dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10;

    .code-card-container {
        @apply relative w-full flex flex-col;
    }
}

.title-bar-container {
    @apply flex-none border-b border-slate-500/30;

    .title-bar {
        @apply flex items-center h-8 space-x-1.5 px-3;

        .traffic-light {
           @apply w-2.5 h-2.5 bg-slate-600 rounded-full;
        }
    }
}

.code-container {
    @apply relative min-h-0 flex-auto flex flex-col;

    .code-wrapper {
        @apply w-full flex-auto flex min-h-0;

        .code-inner-wrapper {
            @apply w-full flex-auto flex min-h-0 overflow-auto;

            .code-inner-inner-wrapper {
                @apply w-full relative flex-auto;

            }

            pre.code-inner-container {
                @apply flex min-h-full text-sm leading-6;

                .line-number-bar {
                    @apply hidden md:block text-slate-600 flex-none py-4 pr-4 text-right select-none w-[3.125rem];
                }

                .code-block {
                    @apply flex-auto relative block text-slate-50 overflow-auto p-4 bg-transparent;
                }
            }
        }
    }
}
</style>