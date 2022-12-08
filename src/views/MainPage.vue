<template>
    <main class="main-page">
        <Header />
        <section class="content-section">
            <ticker :backTicker="true" />
            <ticker />
            <link-to-page
                :namePage="'Where?'"
                :path="'/about'"
                :positionLink="'left'"
            />
            <link-to-page
                :namePage="'What?'"
                :path="'/about'"
                :positionLink="'right'"
            />
            <link-to-page
                :namePage="'Where?'"
                :path="'/about'"
                :positionLink="'bottom'"
            />
            <full-cycle-block />
        </section>
    </main>
</template>

<script>
import Header from "@/components/Header.vue";
import LinkToPage from "@/components/LinkToPage.vue";
import FullCycleBlock from "@/components/FullCycleBlock.vue";
import Ticker from "@/components/Ticker.vue";

export default {
    name: "MainPage",

    components: { Header, LinkToPage, FullCycleBlock, Ticker },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.main-page {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: $main-gray-color;

    .content-section {
        position: relative;
        width: 100%;
        height: 100%;
    }
}
</style>
