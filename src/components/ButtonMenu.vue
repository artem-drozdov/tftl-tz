<template>
    <div
        class="wrapper"
        @mouseenter="openMenu(true)"
        @mouseleave="openMenu(false)"
    >
        <button class="btn-menu">
            <img src="@/assets/images/menu-img.png" alt="menu" />
        </button>
        <ul class="list-language" :class="{ opened: isOpenMenu }">
            <li
                @click="openMenu(false)"
                v-for="(item, index) in languageList"
                :key="item + index"
                class="item-language"
            >
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "ButtonMenu",

    data() {
        return {
            isOpenMenu: false,

            languageList: ["ua", "ru"],
        };
    },

    methods: {
        openMenu(value) {
            this.isOpenMenu = value;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.wrapper {
    display: flex;
    align-items: center;

    @media screen and (max-width: 560px) {
        flex-direction: column;
        align-items: flex-start;
    }

    .btn-menu {
        display: block;
        border-radius: 50%;
        padding: 10px;
        border: 1px solid $white-color;
        z-index: 5;

        @media screen and (max-width: 768px) {
            padding: 8px;
        }

        img {
            display: block;
        }
    }

    .list-language {
        display: flex;
        width: 0;
        opacity: 0;
        transform: translateX(-50px);
        transition: all 0.4s;
        padding-right: 20px;

        @media screen and (max-width: 560px) {
            transform: translateY(-50px) translateX(0px);
            flex-direction: column;
        }

        &.opened {
            width: auto;
            margin-left: 20px;
            opacity: 1;
            transform: translateX(0px);

            @media screen and (max-width: 560px) {
                margin-left: 0;
            }

            .item-language {
                pointer-events: all;

                &:last-child {
                    transform: translateX(0px);
                    opacity: 1;
                }
            }
        }

        .item-language {
            display: block;
            font-family: "Grtsk Giga";
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 110%;
            text-transform: uppercase;
            color: $dark-gray-color;
            transition: all 0.4s;
            pointer-events: none;
            cursor: pointer;
            margin-left: 3px;

            &:hover {
                color: $yellow-color;
            }

            &:not(:last-child) {
                margin-right: 12px;

                @media screen and (max-width: 560px) {
                    margin: 12px 0 12px 3px;
                }
            }

            &:last-child {
                transition-delay: 0.2s;
                opacity: 0;
                transform: translateX(-50px);

                @media screen and (max-width: 560px) {
                    transform: translateX(0px);
                }
            }
        }
    }
}
</style>
