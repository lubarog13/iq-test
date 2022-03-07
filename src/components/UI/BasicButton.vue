<template>
    <button class="button" :disabled="disabled" :class="{'button_outline': outline}">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "BasicButton",
        props: ["disabled", "outline"]
    }
</script>

<style lang="less" scoped>
button.button {
    width: 189px;
    height: 41px;
    font-family: 'Merriweather', serif;
    border-radius: 20px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    line-height: 18px;
    border: none;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #0D0C11;
    background: radial-gradient(50% 50% at 50% 50%, #FFC700 0%, #FFC700 100%);

    &:hover {
        background: radial-gradient(50% 50% at 50% 50%, #ddad01 0%, #ddad01  100%);
    }

    &:disabled {
        background: #DADADA;
        box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
        color: #8E8E8E;
    }

    &_outline {
        background: transparent;
        border: 1px solid #FFFFFF;
        color: white;

        &:hover {
            background: transparent;
            border-color: rgba(255, 255, 255, 0.7);
        }
    }

}
</style>