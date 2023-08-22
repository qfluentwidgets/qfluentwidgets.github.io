import { nextTick, onUnmounted } from "vue";

export default function () {
    nextTick(() => {
        document.body.id = "custom-body";

        let contents = document.getElementsByClassName('theme-reco-default-content');
        if (contents.length) {
            contents.item(0).id = "theme-reco-custom-content";
        }
    });

    onUnmounted(() => {
        document.body.id = "body";
    });
}