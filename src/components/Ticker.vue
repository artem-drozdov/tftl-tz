<template>
    <div class="ticker-wrapper" :class="{ back: backTicker }">
        <div class="ticker">
            <span class="text">
                FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT
                AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY
            </span>
            <span class="text">
                FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT
                AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Ticker",

    props: {
        backTicker: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="scss" scoped>
.ticker-wrapper {
    position: absolute;
    top: 42%;
    left: -10%;
    overflow: hidden;
    width: 120%;
    transform: rotate(-30deg);
    pointer-events: none;

    @media screen and (max-width: 768px) and (min-height: 1024px) {
        top: 37%;
        left: -38%;
        width: 185%;
        transform: rotate(-52deg);
    }

    @media screen and (max-width: 560px) {
        top: 49%;
        left: -45%;
        width: 200%;
        transform: rotate(-61deg);
    }

    &.back {
        top: 52%;
        transform: rotate(150deg);

        @media screen and (max-width: 768px) and (min-height: 1024px) {
            top: 43%;
            left: -32%;
            width: 185%;
            transform: rotate(128deg);
        }

        @media screen and (max-width: 560px) {
            top: 46%;
            left: -54%;
            width: 200%;
            transform: rotate(119deg);
        }
    }
}

.ticker {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    animation: move-ticker 150s linear infinite;

    .text {
        display: inline-block;
        font-family: "Grtsk Giga";
        font-size: 42px;
        line-height: 110%;
        text-transform: uppercase;
        opacity: 0.1;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
        -ms-text-fill-color: transparent;
        -o-text-fill-color: transparent;
        -webkit-text-stroke: 1px;

        @media screen and (max-width: 560px) {
            font-size: 28px;
        }
    }
}

@keyframes move-ticker {
    0% {
        transform: translate3d(0, 0, 0);
    }

    100% {
        transform: translate3d(-50%, 0, 0);
    }
}
</style>
