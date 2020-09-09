<template>
    <div class="v-quiz-block-3">
        <p class="v-quiz-block-3_title">Вопрос 3</p>
        <p class="v-quiz-block-3_question"><strong>Вы являетесь?</strong></p>
        <div class="v-quiz-block-3_inputs">
            <label>
                <input type="radio" name="position" checked>
                <span>Руководителем фермы</span>
            </label>
            <label>
                <input type="radio" name="position">
                <span>Зоотехником</span>
            </label>
            <label>
                <input type="radio" name="position">
                <span>Ветеренаром</span>
            </label>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: 'v-quiz-block-3',
        components: {
        },
        props: {},
        data() {
            return {
                
            } 
        },
        computed: {},
        methods: {},
        watch: {},
        mounted() {}
    }
</script>

<style lang="scss">

    .v-quiz-block-3 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &_title {
            font-size: 14px;
            line-height: 17px;
            text-align: center;
            letter-spacing: 0.05em;
        }

        &_question {
            width: 70%;
            font-size: 24px;
            line-height: 29px;
            text-align: center;
            color: #242424;

            strong {
                color: #50B520;
            }
        }

        &_inputs {
            display: flex;
            flex-direction: column;
            align-content: center;
            z-index: 10;

            label {
                width: 280px;
                border: 1px solid rgba(0, 0, 0, 0.1);
                box-sizing: border-box;
                filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.06));
                border-radius: 4px;
                padding: 12px;

                input {

                    &:checked {
                        background: linear-gradient(180deg, #FEE9A1 0%, #FFDD64 100%);
                        box-shadow: inset 0px 10px 20px rgba(255, 255, 255, 0.16);
                        border-radius: 999px;
                    }
                }

                span {
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 26px;
                    color: #242424;
                }
            }

            label + label {
                margin-top: 20px;
            }
        }
    }
</style>