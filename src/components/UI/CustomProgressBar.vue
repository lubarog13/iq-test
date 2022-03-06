<template>
    <div class="progress_bar">
        <div class="progress_bar__progress" :style="{'width': progress + '%'}">
        </div>
    </div>
</template>

<script>
    export default {
        name: "CustomProgressBar",
        props: ["progress"]
    }
</script>

<style lang="less" scoped>
.progress_bar{
    background: rgba(242, 243, 243, 0.59);
    mix-blend-mode: normal;
    height: 11px;
    border-radius: 10.5px;
    &__progress {
        height: 100%;
        background: #3BDE7C;
        border-radius: 10.5px;
    }
}
</style>