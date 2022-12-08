<template>
    <div class="full-cycle-block">
        <div class="yellow-circle"></div>
        <div
            class="text-block"
            :style="{
                transform: `translateX(${getPositionText.x}px) translateY(${getPositionText.y}px)`,
            }"
        >
            <p class="text">FULL-CYCLE</p>
            <p class="text">EVENT AGENCY</p>
        </div>
        <circle-text-block :class="'position-circle-block'" />
    </div>
</template>

<script>
import CircleTextBlock from "./CircleTextBlock.vue";

export default {
    name: "FullCycleBlock",

    components: { CircleTextBlock },

    data() {
        return {
            mouseX: 0,
            mouseY: 0,
        };
    },

    computed: {
        getPositionText() {
            const centerTextX = window.innerWidth / 2;
            const centerTextY = window.innerHeight / 2;

            if (this.mouseX === 0 && this.mouseY === 0) {
                return {
                    x: 0,
                    y: 0,
                };
            }

            return {
                x: -(centerTextX - this.mouseX) / 50,
                y: -(centerTextY - this.mouseY) / 50,
            };
        },
    },

    methods: {
        parallax({ pageX, pageY }) {
            this.mouseX = pageX;
            this.mouseY = pageY;
        },
    },

    mounted() {
        document.addEventListener("mousemove", this.parallax);
    },

    destroyed() {
        document.removeEventListener("mousemove", this.parallax);
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.full-cycle-block {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .yellow-circle {
        width: 578px;
        height: 578px;
        border-radius: 50%;
        background-color: $yellow-color;
        filter: blur(38px);

        @media screen and (max-height: 780px) {
            width: 450px;
            height: 450px;
        }

        @media screen and (max-width: 768px) and (max-height: 1024px) {
            width: 482px;
            height: 482px;
        }

        @media screen and (max-width: 560px) {
            width: 294px;
            height: 294px;
        }
    }

    .text-block {
        position: absolute;
        width: 80%;
        transition: all 0.2s;

        @media screen and (max-width: 560px) {
            width: 90%;
        }

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
.position-circle-block {
    position: absolute;
    top: calc(50% + 150px);
    left: calc(50% + 120px);

    @media screen and (max-height: 780px) {
        top: calc(50% + 130px);
        left: calc(50% + 60px);
    }

    @media screen and (max-width: 560px) {
        top: calc(50% + 60px);
        left: calc(50% + 20px);
    }
}
</style>
