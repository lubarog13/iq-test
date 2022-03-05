<template>
    <div class="iq_info">
      <img class="iq_info__quote quote-left" src="../assets/icons/1quote.svg" />
      <div class="iq_info__message">
        Профессиональный IQ-тест позволяет не только определить коэффициент
        вашего интеллекта,<br />
        но и выработать список рекомендаций для повышения этого показателя.
      </div>
      <img
        class="iq_info__quote quote-right"
        src="../assets/icons/2quote.svg"
      />
    </div>
</template>

<script>
export default {
  name: "HomeComponent2",
};
</script>

<style lang="less" scoped>
.iq_info {
    border-color: white;
  background-image: radial-gradient(84.34% 50.29% at 48.75% 49.71%, #2950C2 0%, rgba(38, 91, 199, 0.96) 40.62%, rgba(39, 98, 187, 0) 85.42%), url("../assets/images/image.png");

  background-repeat: no-repeat;
  background-position: center center;
  min-height: 200px;
  background-size: 100%;
  display: flex;
  position: sticky;
  padding: 83px 36px 55px;
  justify-content: center;
  align-items: center;

  &__message {
    font-family: "Yeseva One";
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.05em;

    color: #ffffff;
  }

  &__quote {
    width: 23px;
    height: 22.35px;
    position: absolute;
  }

  .quote-left {
    left: 7.6%;
    top: 14%;
  }

  .quote-right {
      right: 9%;
      bottom: 9.6%;
}
}
</style>