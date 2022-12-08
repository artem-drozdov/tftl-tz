<template>
    <div class="circle-text-block">
        <svg
            class="circle-text-svg"
            viewBox="0 0 100 100"
            width="100"
            height="100"
        >
            <defs>
                <path
                    id="circle"
                    d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
                />
            </defs>
            <text font-size="17">
                <textPath class="text" xlink:href="#circle">
                    showreel showreel showreel
                </textPath>
            </text>
            <circle cx="50" cy="50" r="5" />
        </svg>
    </div>
</template>

<script>
export default {
    name: "CircleTextBlock",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.circle-text-block {
    width: 116px;
    height: 114px;

    @media screen and (max-width: 1024px) {
        width: 109px;
        height: 108px;
    }

    @media screen and (max-width: 560px) {
        width: 88px;
        height: 87px;
    }

    &:hover {
        .circle-text-svg {
            animation: rotate-counterclock-wise linear 8s infinite;
        }
    }

    .circle-text-svg {
        fill: currentColor;
        max-width: 66vmin;
        transform-origin: center;
        width: 100%;
        height: 100%;
        transform: rotate(-90deg);
        pointer-events: none;

        .text {
            font-family: "Grtsk Giga";
            font-style: normal;
            font-weight: 700;
            font-size: 9px;
            color: $white-color;
        }
    }
}

@keyframes rotate-counterclock-wise {
    0% {
        transform: rotate(-90deg);
    }

    100% {
        transform: rotate(-450deg);
    }
}
</style>
