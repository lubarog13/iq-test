<template>
  <div class="home">
    <home-component-1 id="main" ref="main" v-intersection="showButton"/>
    <div class="home__flex">
    <home-component-2 id="info" class="home__flex__col1"/>
    <home-component-3 class="home__flex__col12"/>
    </div>
    <home-component-4/>
    <a href="#info" class="home__more" ref="more_button">
      <button class="home__more__button">
        <img src="../assets/icons/arrow.svg">
      </button>
      <div class="home__more__text">
        Подробнее
      </div>
    </a>
  </div>
</template>

<script>
import HomeComponent1 from '../components/HomeComponent1.vue'
import HomeComponent2 from '../components/HomeComponent2.vue'
import HomeComponent3 from '../components/HomeComponent3.vue'
import HomeComponent4 from '../components/HomeComponent4.vue'
import { mapMutations} from 'vuex'
// @ is an alias to /src

export default {
  components: { HomeComponent1, HomeComponent2, HomeComponent3, HomeComponent4 },
  name: 'Home',
  methods: {
    ...mapMutations({
          setShowTitle: 'setShowTitle',
      }),
      showButton() {
        this.$refs.more_button.style.visibility="visible"
      }
  },
  mounted() {
    this.setShowTitle(false)
  }
}
</script>

<style lang="less" scoped>
.home {
  &__more {
    position: fixed;
    bottom: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 50%;
    width: 68px;
    flex-direction: column;
    margin-left: -34px;

    &__button {
      border-radius: 50%;
      background: white;
      width: 16px;
      height: 16px;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 7.27px;
        height: 7.27px;
      }
    }

    &__text {
      color: white;
      font-family: "PT Serif";
      font-size: 8px;
      line-height: 11px;
      text-align: center;
      text-decoration: none;
      letter-spacing: 0.05em;
      margin-top: 3px;
    }
  }

  &__flex {
    display: flex;
    flex-direction: column; 
    @media(min-width: 900px){
      flex-direction: row; 
    }
  }
}
</style>
