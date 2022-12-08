<template>
    <div class="about-page">
        <Header />
        <div class="text-block">
            <p class="text">About Agency</p>
        </div>
        <link-to-page :namePage="'Home'" :path="'/'" :positionLink="'left'" />
        <link-to-page :namePage="'Home'" :path="'/'" :positionLink="'right'" />
        <link-to-page :namePage="'Home'" :path="'/'" :positionLink="'bottom'" />
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import LinkToPage from "@/components/LinkToPage.vue";

export default {
    name: "AboutPage",

    components: { Header, LinkToPage },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.about-page {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: $main-gray-color;

    .text-block {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .text {
            text-align: center;
            z-index: 2;
            font-family: "Grtsk Giga Bold";
            font-style: normal;
            font-weight: 700;
            font-size: 82px;
            line-height: 110%;
            text-transform: uppercase;
            color: $dark-gray-color;

            @media screen and (max-width: 1024px) {
                font-size: 58px;
            }

            @media screen and (max-width: 560px) {
                font-size: 34px;
            }
        }
    }
}
</style>
