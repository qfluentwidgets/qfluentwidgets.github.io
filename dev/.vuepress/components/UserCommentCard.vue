<template>
    <div class="user-comment-card">
        <figure>
            <div class="comment">{{comment}}</div>
            <figcaption>
                <img :src="avatar" alt=""  loading="lazy" decoding="async">
                <div>
                    <div class="name">
                        <span></span>{{name}}
                    </div>
                    <div class="job">{{ job }}</div>
                </div>
            </figcaption>
        </figure>
    </div>
</template>

<script>
export default {
    name: 'UserCommentCard',
    props: {
        name: {
            type: String,
            require: true,
        },
        job: {
            type: String,
            require: true,
        },
        avatar: {
            type: String,
            require: true,
        },
        comment: {
            type: String,
            require: true,
        },
    }
}
</script>

<style>
.user-comment-card {
    @apply text-sm leading-6 mb-7;

    figure {
        @apply relative flex flex-col-reverse bg-slate-50 rounded-lg p-6 dark:bg-slate-800;
    }

    .comment {
        @apply mt-6 text-slate-700 dark:text-slate-300 mb-0;
    }

    figcaption {
        @apply flex items-center space-x-4;

        img {
            @apply flex-none w-14 h-14 rounded-full object-cover;
        }

        div {
            @apply flex-auto;

            .name {
                @apply text-base text-slate-900 font-semibold dark:text-slate-300;

                span {
                    @apply absolute inset-0;
                }
            }

            .job {
                @apply mt-0.5;
            }
        }
    }
}
</style>