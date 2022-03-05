<template>
    <div class="navigation">
        <div class="navigation__button">
            <img src="../assets/icons/menu.svg">
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavigationPanel"
    }
</script>

<style lang="less" scoped>
    .navigation {
        width: 100vw;
        background: #181818;
        display: flex;
        padding: 17px 17px 13px 15px;
        &__button {
            width: 24px;
            height: 16px;
        }
    }

</style>