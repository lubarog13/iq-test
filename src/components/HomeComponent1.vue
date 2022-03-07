<template>
  <div class="brain_page">
    <div class="brain_pade__title">
      <div class="brain_page__title__1">Пройдите точный и быстрый</div>
      <div class="brain_page__title__2">тест на<br />определение<br> IQ</div>
    </div>
    <div class="brain_page__content content">
      <router-link :to="{ name: 'TestForm', params: { id: 1 } }"> <basic-button class="content__button">пройти тест</basic-button></router-link>
      <div class="content__text text-yellow">
        И получите рекомендации по развитию своего интеллекта
      </div>
      <div class="content__text text-white">
        и улучшению финансового благосостояния и личной жизни
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeComponent1",
};
</script>

<style lang="less" scoped>
.brain_page {
  background: top url("../assets/images/rain_bk.png");
  height:  calc(~"100vh - 46px");
  display: flex;
  padding: 0 17px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  @media(min-width: 600px) {
    background-position: center;
  }
  

  &__title {
    &__1 {
        margin-top: 27px;
      color: white;
      font-family: "PT Serif", serif;
      font-size: 18px;
      letter-spacing: 5%;
    }

    &__2 {
      margin-top: 20px;
      font-family: "Yeseva One", cursive;
      font-size: 30px;
      line-height: 35px;
      text-align: center;
      text-transform: uppercase;
      color: #ffc700;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }

  &__content {
    margin-bottom: 54px;
  }
  .content {
    &__text {
      font-family: PT Serif;
      font-style: normal;
      font-weight: bold;
      font-size: 15px;
      line-height: 19px;
      text-align: center;
      letter-spacing: 0.05em;
    }
    .text-yellow {
      color: #ffc700;
      margin-top: 22px;
    }
    .text-white {
      color: white;
      margin: 0;
    }
  }
}
</style>
