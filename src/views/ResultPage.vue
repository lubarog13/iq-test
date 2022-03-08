<template>
  <div class="result_page">
    <img
      class="result_page__decoration-left"
      src="../assets/images/lightning_PNG9.png"
    />
    <img
      class="result_page__decoration-right"
      src="../assets/images/lightning_PNG9.png"
    />
    <div class="result_page__title">Ваш результат рассчитан:</div>
    <div class="result_page__main" v-html="result_main" />
    <div class="result_page__faster">Скорее получите свой результат!</div>
    <div class="result_page__security_info">
      В целях защиты персональных данных результат теста, их подробная
      интерпретация и рекомендации доступны в виде голосового сообщения по
      звонку с вашего мобильного телефона
    </div>
    <div class="result_page__timer">
      Звоните скорее, запись доступна всего<br />
      <span class="result_page__timer-time">{{ time }}</span> минут
    </div>
    <button
      :disabled="currentTime == 0"
      @click="fetchResult"
      class="result_page__call_button call_button"
    >
      <img src="../assets/icons/call.svg" />
      <div class="call_button__text">
        Позвонить и прослушать результат
      </div>
    </button>
    <div class="result_page__result_content result_content" v-if="result">
      <div class="result_content__name">Вы {{ result.name }}</div>
      <div class="result_content__line">
        <b>Рост:</b><span>{{ result.height }}см.</span>
      </div>
      <div class="result_content__line">
        <b>Вес:</b><span>{{ result.mass }}кг.</span>
      </div>
      <div class="result_content__line">
        <b>Дата рождения:</b><span>{{ result.birth_year }}</span>
      </div>
    </div>
    <div class="result_page__footer-show" v-intersection="showFooter" v-unintersection="hideFooter"/>
    <div class="result_page__footer" ref="bottom" >
      TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN
      FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI,
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "ResultPage",
  data() {
    return {
      currentTime: 600,
      timer: null,
    };
  },
  computed: {
    ...mapState({
      result_main: (state) => state.results.result_main,
      result: (state) => state.results.result,
    }),
    time() {
      let minutes = Math.floor(this.currentTime / 60);
      let seconds = this.currentTime - minutes * 60;
      return (
        this.str_pad_left(minutes, "0", 2) +
        ":" +
        this.str_pad_left(seconds, "0", 2)
      );
    },
  },
  methods: {
    ...mapMutations({
      setTitle: "setTitle",
      setShowTitle: "setShowTitle",
      setResult: "results/setResult"
    }),
    ...mapActions({
      fetchResult: "results/fetchResult",
    }),
    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime--;
      }, 1000);
    },
    stopTimer() {
      clearTimeout(this.timer);
    },
    str_pad_left(string, pad, length) {
      return (new Array(length + 1).join(pad) + string).slice(-length);
    },
    hideFooter() {
      this.$refs.bottom.style.bottom = '-11px'
    },
    showFooter() {
      this.$refs.bottom.style.bottom = 0
    }

  },
  watch: {
    currentTime(time) {
      if (time === 0) {
        this.stopTimer();
      }
    },
  },
  mounted() {
    this.startTimer();
    this.setTitle("   ГОТОВО!");
    console.log(this.result)
    this.setShowTitle(true)
  },
  beforeUnmount() {
    this.setResult(null)
    this.stopTimer();
  },
};
</script>

<style lang="less" scoped>
.result_page {
  background: url(../assets/images/rain_bk2.png);
  box-shadow: inset 0 0 0 1000px rgba(13, 12, 17, 0.728);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: sticky;
  font-family: "PT Serif";
  &__decoration {
    &-left {
      transform: rotate(-53.15deg);
      left: -84.01px;
      bottom: 0;
      position: absolute;
      
      z-index: -1;
      width: 165px;
      height: 165px;
    }

    &-right {
      transform: rotate(-53.15deg);
      right: -123.46px;
      bottom: -55.47px;
      position: absolute;
      z-index: -1;
      width: 165px;
      height: 165px;
    }
  }

  &__title {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
    margin-top: 36px;
  }

  &__footer {
    text-transform: uppercase;
    font-family: "Roboto";
    font-size: 7px;
    line-height: 9px;
    letter-spacing: 3px;
    width: 294px;
    position: fixed;
    color: rgba(255, 255, 255, 0.5);
    bottom: -11px;

    &-show {
      position: absolute;
      bottom: -10px;
    }
  }

  &__main {
    margin: 13px 26px 22px;
    line-height: 18px;
    max-width: 400px;
  }

  &__faster {
    text-transform: uppercase;
    color: #3bde7c;
    font-size: 18px;
    width: 268px;
    line-height: 22px;
  }

  &__security_info {
    font-family: "Roboto";
    text-transform: uppercase;
    margin: 12px 32px 2px;
    max-width: 400px;
    background: #1c2741;
    border-radius: 6px;
    line-height: 14px;
    padding: 15px 16px 19px;
    font-size: 8px;
  }

  &__timer {
    font-size: 11px;
    color: #3bde7c;
    &-time {
      font-size: 20px;
    }
  }

  &__call_button {
    width: 290px;
    margin-top: 6px;
  }
  .call_button {
    display: flex;
    align-items: center;
    background: #eb1b00;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    padding: 31px 22px 25px 15px;
    border: none;
    margin-bottom: 24px;

    &__text {
      font-family: "Roboto";
      font-weight: 900;
      font-size: 15px;
      line-height: 18px;
      text-align: left;
      margin-left: 18px;
    }

    &:hover {
      background: #af1500;
    }

    &:disabled {
      background: #DADADA;
        box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
        color: #8E8E8E;
    }
  }

  .result_content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 24px;

    &__name {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 12px;
    }

    &__line {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
  }
}
</style>