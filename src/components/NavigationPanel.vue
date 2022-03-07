<template>
  <div class="navigation">
    <div class="navigation__button" @click="openNav">
      <img src="../assets/icons/menu.svg" />
    </div>
    <img
      v-if="showTitle"
      class="navigation__logo"
      src="../assets/images/rain_bk3.png"
    />
    <div
      v-if="showTitle"
      class="navigation__title"
      :class="{ 'navigation__title-big': title.length < 20 }"
    >
      {{ title }}
    </div>
  </div>
  <div id="mySidepanel" ref="mySidePanel" class="sidepanel" :style="{'width': (show? '100vw':'0')}">
    <a href="javascript:void(0)" class="sidepanel__closebtn" @click="closeNav">×</a>
    <router-link :to="{name: 'Home', hash: '#main', replace: true}" class="sidepanel__link" @click="closeNav">Главная</router-link>
    <router-link :to="{name: 'Home', hash: '#info'}" class="sidepanel__link" @click="closeNav">Информация о тесте</router-link>
    <router-link :to="{name: 'TestForm', params: {id: 1}}" class="sidepanel__link link-selected" @click="closeNav">Пройти тест</router-link
    >
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "NavigationPanel",
  data() {
    return {
      show: false
    }
  },
  computed: {
    ...mapState({
      showTitle: (state) => state.showNavigationTitle,
      title: (state) => state.title,
    }),
  },
  methods: {
    openNav() {
      this.show = true
    },

    closeNav() {
      this.show = false
    },
  },
};
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
    cursor: pointer;
  }
  &__logo {
    width: 48px;
    height: 47px;
    margin-left: 9px;
    margin-right: 7px;
  }

  &__title {
    font-family: "Yeseva One";
    font-size: 12px;
    text-transform: uppercase;
    color: #ffc700;

    &-big {
      font-size: 20px;
      white-space: pre;
    }
  }
}
.sidepanel {
  width: 0;
  position: fixed;
  z-index: 1000;
  height: 100vh;
  max-width: 600px;
  top: 0;
  left: 0;
  background-color: #181818;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 110px;
  &__closebtn {
      position: absolute;
      top: 18px;
      right: 13px;
      font-size: 28px;
        color: #FFC700;
        text-decoration: none;
    }
  &__link {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  color: white;
  text-transform: uppercase;
    clear: both;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    width: 600px;
    transition: 0.3s;
  }
  .link-selected {

    color: #F4CE0C !important;
  }

}
</style>