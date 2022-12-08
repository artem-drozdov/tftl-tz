<template>
    <header class="header">
        <button-menu :class="'btn-menu-left'" />
        <main-title />
        <burger-menu />
    </header>
</template>

<script>
import BurgerMenu from "./BurgerMenu.vue";
import ButtonMenu from "./ButtonMenu.vue";
import MainTitle from "./MainTitle.vue";

export default {
    name: "Header",

    components: { MainTitle, ButtonMenu, BurgerMenu },
};
</script>

<style lang="scss" scoped>
.header {
    position: absolute;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    padding: 24px;
    background-color: transparent;
    z-index: 10;

    @media screen and (max-width: 768px) {
        padding: 20px;
    }

    .btn-menu-left {
        position: absolute;
        top: 28px;
        left: 24px;

        @media screen and (max-width: 768px) {
            top: 16px;
        }
    }
}
</style>
