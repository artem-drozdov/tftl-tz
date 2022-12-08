<template>
    <div class="wrapper-link" :class="positionLink">
        <router-link :to="path">
            <p class="name-page">{{ namePage }}</p>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "LinkToPage",

    props: {
        namePage: {
            type: String,
            require: true,
        },

        path: {
            type: String,
            require: true,
        },

        positionLink: {
            type: String,
            default: "",
            require: true,
        },
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.wrapper-link {
    position: absolute;
    display: none;

    @media screen and (max-width: 560px) {
        display: none;
    }

    &.left {
        display: block;
        top: 50%;
        left: -10px;
        transform: rotate(-90deg);

        @media screen and (max-width: 560px) {
            display: none;
        }
    }

    &.right {
        display: block;
        top: 50%;
        right: 0;
        transform: rotate(90deg);

        @media screen and (max-width: 560px) {
            display: none;
        }
    }

    &.bottom {
        width: 100%;
        display: flex;
        justify-content: center;
        bottom: 20px;
        left: 0;

        @media screen and (max-width: 560px) {
            display: none;
        }
    }

    .name-page {
        width: max-content;
        font-family: "Grtsk Giga";
        font-size: 16px;
        line-height: 140%;
        font-weight: 700;
        transition: color 0.3s;
        color: $dark-gray-color;
        text-transform: lowercase;

        &:hover {
            color: $white-color;

            &::after {
                width: 100%;
            }
        }

        &::after {
            content: "";
            display: block;
            width: 0;
            height: 2px;
            background: $white-color;
            transition: width 0.3s;
        }
    }
}
</style>
