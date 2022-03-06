<template>
    <div class="activity_result">
        <div class="activity_result__content">
            Также по результатам теста <b>вы получите</b> подробные <b>советы</b> 
            по определению наиболее перспективной <b>для вашего типа </b>
            <b class="lowercase">интеллекта</b> <b>сферы деятельности</b>, 
            которая принесет вам скорейший финансовый результат.
        </div>
        <img class="activity_result__image" src="../assets/images/325-01.png">
        <router-link :to="{ name: 'TestForm', params: { id: 1 } }"> <basic-button class="activity_result__button">пройти тест</basic-button></router-link>
    </div>
</template>

<script>
import BasicButton from './UI/BasicButton.vue'
    export default {
  components: { BasicButton },
        name: "HomeComponent3"
    }
</script>

<style lang="less" scoped>
.activity_result {
    display: flex;
    padding: 38px 11px 40px;
    align-items: center;
    flex-direction: column;

    &__content {
        font-family: "PT Serif", serif;
        font-size: 16px;
        line-height: 24px;
        padding-right: 4px;
        letter-spacing: 0.05em;
        color: #272727;

        b {
            text-transform: uppercase;
            &.lowercase {
                text-transform: none;
            }
        }
    }

    &__image {
        margin: 25px 44px 0px;
    }
}
</style>