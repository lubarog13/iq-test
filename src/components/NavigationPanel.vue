<template>
    <div class="navigation">
        <div class="navigation__button">
            <img src="../assets/icons/menu.svg">
        </div>
        <img v-if="showTitle" class="navigation__logo" src="../assets/images/rain_bk3.png">
        <div v-if="showTitle" class="navigation__title">{{title}}</div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name: "NavigationPanel",
        computed: {
            ...mapState({
                showTitle: state => state.showNavigationTitle,
                title: state => state.title
            })
        }
    }
</script>

<style lang="less" scoped>
    .navigation {
        width: 100vw;
        background: #181818;
        display: flex;
        height: 46px;
        align-items: center;
        &__button {
            width: 24px;
            height: 16px;
            margin-left: 15px;
        }
        &__logo {
            width: 48px;
            height: 47px;
            margin-left: 9px;
            margin-right: 7px;
        }

        &__title{
            font-family: "Yeseva One";
            font-size: 12px;
            text-transform: uppercase;
            color: #FFC700;
        }
    }

</style>