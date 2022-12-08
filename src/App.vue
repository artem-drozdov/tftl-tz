<template>
    <div id="app">
        <div class="router-overlay-block" />
        <router-view />
    </div>
</template>

<style lang="scss">
@import "@/assets/scss/variables.scss";

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

a {
    text-decoration: none;
}

button {
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
}

#app {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .router-overlay-block {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        display: none;
        border-top-right-radius: 70%;
        z-index: 5;
        transform: translateX(-100%);
        background-color: $yellow-color;
        animation: navigate-is-active 1.5s ease-in infinite;
        animation-play-state: paused;
    }

    &.animate-route {
        .router-overlay-block {
            display: block;
            animation-play-state: running;
        }
    }
}

@keyframes navigate-is-active {
    0% {
        border-top-right-radius: 70%;

        transform: translateX(-100%);
    }

    50% {
        border-top-right-radius: 0%;
        transform: translateX(0%);
    }

    60% {
        border-top-right-radius: 0%;
        transform: translateX(0%);
    }

    65% {
        border-top-right-radius: 0%;
        transform: translateX(0%);
    }

    70% {
        border-top-right-radius: 0%;
        transform: translateX(0%);
    }

    100% {
        border-top-right-radius: 0%;
        transform: translateX(100%);
    }
}

@font-face {
    font-family: "Grtsk Giga";
    src: local("fonts"),
        url("@/assets/fonts/GrtskGiga-Semibold.ttf") format("truetype");
}

@font-face {
    font-family: "Grtsk Giga Bold";
    src: local("fonts"),
        url("@/assets/fonts/GrtskGiga-Bold.ttf") format("truetype");
}
</style>
