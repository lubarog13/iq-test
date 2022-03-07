<template>
  <div class="loading_page">
    <custom-progress-bar class="loading_page__progress" :progress="100" />
    <div class="loading_page__loading loading">
      <div class="loading__title">
        Обработка<br />
        результатов
      </div>
      <div class="loading__spinner">
        <img id="loading__spinner__img" src="../assets/icons/spinner.svg" />
      </div>
      <div class="loading__text">
        Определение стиля мышления...........<br />....
        ...................................................
      </div>
    </div>
  </div>
</template>

<script>
import CustomProgressBar from "../components/UI/CustomProgressBar.vue";
export default {
  components: { CustomProgressBar },
  name: "LoadingPage",
  data() {
    return {
      timer: null
    }
  },
  mounted() {
      this.timer = setInterval(() => {
          this.$router.push({name: 'ResultPage'})
      }, 5000)
  },
  unmounted() {
    clearTimeout(this.timer)
  }
};
</script>

<style lang="less" scoped>
.loading_page {
  background: url(../assets/images/rain_bk2.png);
  box-shadow: inset 0 0 0 1000px rgba(13, 12, 17, 0.728);
  display: flex;
  flex-direction: column;
  align-items: center;
  &__progress {
    width: 81.25%;
    margin-top: 17px;
    align-items: flex-start;
    .progress {
      width: 100%;
    }
  }

  &__loading {
    margin: 9.39% 6.875% 0;
  }

  .loading {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    text-align: center;
    font-family: "PT Serif";

    &__title {
      font-size: 23px;
    }

    &__text {
      font-size: 14px;
    }

    &__spinner {
      height: 68.32px;
      width: auto;
      margin-top: 33px;
      margin-bottom: 27.68px;

      #loading__spinner__img {
        -webkit-animation: rotation 2s infinite linear;
      }

      @-webkit-keyframes rotation {
        from {
          -webkit-transform: rotate(359deg);
        }
        to {
          -webkit-transform: rotate(0deg);
        }
      }
    }
  }
}
</style>