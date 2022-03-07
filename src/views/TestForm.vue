<template>
  <div class="test_form">
    <div class="test_form__progress">
      <custom-progress-bar :progress="progress"></custom-progress-bar>
    </div>
    <div class="spacer" v-if="small_form"/>
    <div class="spacer"/>
    <div
      class="test_form__title"
      :class="{
        'test_form__title-md':
          question.type === 'grid' || question.title.length > 40,
        'test_form__title-sm':
          question.title.length > 50 && question.type !== 'grid',
        'test_form__title-xs':
          question.title.length > 75 && question.type !== 'grid',
        'test_form__title-small_flex': question.options.length === 2,
        'test_form__title-big_flex': question.type === 'grid',
      }"
      v-html="question.title"
    ></div>
    <div class="spacer" :class="{'spacer-sm': small_form}"/>
      <img
        class="test_form__image"
        :src="require(`../assets/images/${question.image}`)"
        v-if="question.image"
      />
      <div class="spacer-xs" v-if="question.image"/>
      <div class="test_form__decoration" v-if="question.decoration"/>
      <div class="spacer-xs" v-if="question.decoration"/>
      <list-form
        v-if="question.type == 'list'"
        :values="question.options"
        :imaged="question.image"
        v-model="selectedValue"
      />
      <grid-form
        v-else-if="question.type == 'grid'"
        :values="question.options"
        v-model="selectedValue"
      />
      <row-form
        v-else-if="question.type == 'row'"
        :values="question.options"
        v-model="selectedValue"
      />
      <div class="spacer"/>
      <div class="spacer-xs"></div>
    <div class="test_form__button">
      <basic-button :disabled="!selectedValue" @click="next"
        >Далее</basic-button
      >
    </div>
  </div>
</template>

<script>
import ListForm from "../components/ListForm.vue";
import GridForm from "../components/GridForm.vue";
import RowForm from "../components/RowForm.vue";
import {mapGetters, mapMutations} from 'vuex'
export default {
  components: {  ListForm, GridForm, RowForm },
  name: "TestForm",
  data() {
    return {
      selectedValue: null,
    };
  },
  computed: {
    ...mapGetters({
        getQuestion: 'getQuestion',
        qLength: 'getQuestionLength',
        getProgress: 'getProgress'
    }),
    question() {
      const { id } = this.$route.params;
      return this.getQuestion({ id: id });
    },
    progress() {
      return this.getProgress({ id: this.question.id });
    },
    small_form() {
        return this.question.options.length<3;
    }
  },
  methods: {
      ...mapMutations({
          setSelectedValue: 'setSelectedValue',
          setShowTitle: 'setShowTitle',
          setTitle: 'setTitle'
      }),
    next() {
      this.setSelectedValue({
        question: this.question.id,
        answer: this.selectedValue,
      });
      const next_id = this.question.id + 1;
      if (this.qLength !== next_id - 1) {
        this.selectedValue = null;
        this.$router.push({ name: "TestForm", params: { id: next_id } });
      } else {
          this.$router.push({name: 'LoadingPage'})
      }
    },
  },
  mounted() {
      this.setTitle('тест на определение IQ')
      this.setShowTitle(true)
  }
};
</script>

<style lang="less" scoped>
.test_form {
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
  &__title {
    font-family: "PT Serif";
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    color: #ffffff;

    &-md {
      font-size: 19px;
    }
    &-sm {
      font-size: 18px;
    }
    &-xs {
      font-size: 16px;
    }

    &-small_flex {
      flex: 0.25;
    }
    &-big_flex {
      flex: 1;
    }
  }

    &__decoration {
        height: 4px;
        width: 100%;
        max-width: 700px;
        background: #F2F3F3;
        opacity: 0.15;
    }

  &__button {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 4.4%;
  }

  .spacer {
      flex: 1;
      &-sm {
          flex: 0.75;
      }
      &-xs {
          flex: 0.5;
      }
  }
}
</style>