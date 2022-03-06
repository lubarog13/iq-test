<template>
    <div class="test_form">
        <div class="test_form__progress" >
        <custom-progress-bar :progress="progress"></custom-progress-bar>
        </div>
            <div class="test_form__title" :class="{'test_form__title-md': question.type==='grid' || question.title.length>40, 
            'test_form__title-sm': question.title.length>50 && question.type!=='grid',
            'test_form__title-xs': question.title.length>75 && question.type!=='grid',
            'test_form__title-small_flex': question.options.length===2,
            'test_form__title-big_flex': question.type==='grid'
            }" v-html="question.title">
            </div>
            <list-form v-if="question.type=='list'" :values="question.options" :imaged="question.image" v-model="selectedValue"/>
            <grid-form v-else-if="question.type=='grid'" :values="question.options" v-model="selectedValue"/>
        <div class="test_form__button">
        <basic-button  :disabled="!selectedValue" @click="next">Далее</basic-button>
        </div>
    </div>
</template>

<script>
import ListForm from '../components/ListForm.vue';
import GridForm from '../components/GridForm.vue'
import BasicButton from '../components/UI/BasicButton.vue';
import CustomProgressBar from '../components/UI/CustomProgressBar.vue';
    export default {
  components: { CustomProgressBar, ListForm, BasicButton, GridForm },
        name: "TestForm",
        data() {
            return {
                selectedValue: null
            }
        },
        computed: {
            question() {
                const {id} = this.$route.params;
                return this.$store.getters['getQuestion']({id: id})
            },
            qLength() {
                return this.$store.getters['getQuestionLength']
            },
            progress() {
                return this.$store.getters['getProgress']({id: this.question.id})
            }
        },
        methods: {
            next() {
                this.$store.commit('setSelectedValue', {question: this.question.id, answer: this.selectedValue})
                const next_id = this.question.id + 1
                if(this.qLength !== next_id-1){
                    this.selectedValue = null
                    console.log(this.selectedValue)
                    this.$router.push({name: "TestForm", params: { id: next_id }})
                }
            }
        },
    }
</script>

<style lang="less" scoped>
    .test_form {
        background: url(../assets/images/rain_bk2.png);
        box-shadow: inset 0 0 0 1000px rgba(13, 12, 17, 0.728);
        position: sticky;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 20px;

        &__progress {
            width: 81.25%;
            flex: 0.5;
            margin-top: 17px;
            align-items: flex-start;
            .progress {
                width: 100%;
            }
        }
            &__title {
                font-family: 'PT Serif';
                font-size: 20px;
                line-height: 26px;
                text-align: center;
                flex: 0.5;
                color: #FFFFFF;

                &-md {
                    font-size: 19px;
                }
                &-sm{
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
        &__button {
                flex: 1;
                display: flex;
                align-items: flex-end;
                justify-content: center;
                margin-bottom: 4.4%;
            }
    
    }
</style>