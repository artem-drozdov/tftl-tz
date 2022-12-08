<template>
    <button @click="handleClickBurgerMenu" class="btn-burger-menu">
        <span class="line-menu"></span>
        <span class="line-menu"></span>
    </button>
</template>

<script>
export default {
    name: "BurgerMenu",

    data() {
        return {};
    },

    methods: {
        handleClickBurgerMenu() {
            const nextPath = this.$route.path === "/about" ? "/" : "/about";

            this.$router.push(nextPath);
        },
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.btn-burger-menu {
    position: absolute;
    width: 22px;
    height: 11px;
    display: none;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 560px) {
        display: flex;
        top: 28px;
        right: 16px;
    }

    .line-menu {
        width: 100%;
        height: 1px;
        display: block;
        background-color: $black-color;
    }
}
</style>
