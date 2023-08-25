<template>
    <div class="HomeContainer">
        <Banner />

        <!-- 作者评论 -->
        <AuthorCommentCard />

        <!-- 用户评论 -->
        <UserCommentCardContainer>
            <template v-slot:column-1>
                <UserCommentCard
                    :name="c.name"
                    :avatar="c.avatar"
                    :job="c.job"
                    :comment="c.comment"
                    v-for="c in comments.column1"
                />
            </template>

            <template v-slot:column-2>
                <UserCommentCard
                    :name="c.name"
                    :avatar="c.avatar"
                    :job="c.job"
                    :comment="c.comment"
                    v-for="c in comments.column2"
                />
            </template>

            <template v-slot:column-3>
                <UserCommentCard
                    :name="c.name"
                    :avatar="c.avatar"
                    :job="c.job"
                    :comment="c.comment"
                    v-for="c in comments.column3"
                />
            </template>
        </UserCommentCardContainer>

        <!-- 特性 -->
        <div class="feature-container">
            <ComponentsFeatureCard/>
            <DesignerFeatureCard/>
            <DarkModeFeatureCard/>
        </div>

        <!-- 页脚 -->
        <Footer />
    </div>
</template>

<script setup>
import useCustomPage from "../utils/useCustomPage";
import { localeConfig } from "../utils/locale";

useCustomPage();
let comments = localeConfig('comments');
let home = localeConfig('home');
document.title = 'QFluentWidgets - ' + home.value.title;
</script>

<style>
.feature-container {
    @apply pt-20 mb-10 flex flex-col gap-y-20 overflow-hidden sm:pt-32 sm:mb-32 sm:gap-y-32 md:pt-20 md:mb-0 md:gap-y-40;
}
</style>