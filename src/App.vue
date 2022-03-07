<template>
  <navigation-panel class="navigation"/>
  <router-view class="router"/>
</template>

<script>
import NavigationPanel from './components/NavigationPanel.vue'
export default {
  name: "App",
  components: {NavigationPanel}
}
</script>

<style lang="less">
@import (css) url("https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap");
@import (css) url("https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap");
@import (css) url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap");
@import (css) url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap");
body {
  margin: 0;
}
.router {
  height: calc(~"100vh - 46px");
  margin-top: 46px;
  overflow-y: auto;
  overflow-x: hidden;
}

.navigation {
  position: fixed;
  top: 0;
  z-index: 1000;
}

</style>
