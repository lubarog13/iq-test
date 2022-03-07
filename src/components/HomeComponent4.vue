<template>
    <div class="test_info">
        <img class="test_info__decoration-left" src="../assets/images/lightning_PNG9.png">
        <img class="test_info__decoration-right" src="../assets/images/lightning_PNG9.png">
        <div class="test_info__rules">
            Прохождение теста займет у вас не более <b>12 минут</b>, а его <b class="white">результаты</b> вы сможете <b>использовать всю жизнь</b>. 
        </div>
        <div class="test_info__content">
            Профессиональная интерпретация и детально <b>проработанные рекомендации</b> позволят вам качественно <b>изменить все аспекты своей жизни</b> от финансового до любовного.
        </div>
        <router-link  class="test_info__button" :to="{ name: 'TestForm', params: { id: 1 } }"> <basic-button :outline="true">пройти тест</basic-button></router-link>
    </div>
</template>

<script>
import BasicButton from './UI/BasicButton.vue'
    export default {
  components: { BasicButton },
        name: "HomeComponent4"
    }
</script>

<style lang="less" scoped>
.test_info {
    background: top url('../assets/images/rain_bk2.png');
    background-size: 100%;
    display: flex;
    flex-direction: column;
    height:  calc(~"100vh - 46px");
    position: sticky;
    overflow: hidden;

    @media(min-width: 750px) {
        flex-direction: row;
        height: fit-content;
        justify-content: center;
    }

    &__decoration {
        &-left {
            transform: rotate(-31.55deg);
            left: -63.03px;
            bottom: 63.03px;
            position: absolute;
            z-index: -1;
            width: 165px;
            height: 165px;
        }

        &-right {
            transform: rotate(19.42deg);
            right: -60.74px;
            top: 88.74px;
            position: absolute;
            z-index: -1;
            width: 165px;
            height: 165px;
        }
    }

    &__rules {
        width: 262px;
        color: white;
        font-family: "Merriweather";
        font-size: 15px;
        margin-top: 56px;
        line-height: 20px;
        margin-left: 6%;

        b {
            color: #FFC700;
            &.white {
                color: white;
            }
        }
    }

    &__content {
        margin-top: 25px;
        background: rgba(243, 243, 242, 0.8);
        padding: 29px 15px 31px 14px;
        border-radius: 20px;
        font-family: "Merriweather";
        font-size: 16px;
        line-height: 23px;
        color: #181818;
        align-self: center;
        width: 303px;
         @media(min-width: 750px) {
            margin-left: 25px;
            margin-bottom: 25px;
        }
    }

    &__button {
        align-self: center;
        margin-top: 33px;
        @media(min-width: 750px) {
            margin: 0 25px;
        }
    }
}
</style>