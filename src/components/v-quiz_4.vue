<template>
    <div class="v-quiz-block-4">
        <p class="v-quiz-block-4_question"><strong>Куда прислать вам ответ?</strong></p>
        <div class="v-quiz-block-4_inputs">
            <label>
                <input type="radio" name="position" value="tel" v-model="picked" checked>
                <span>По телефону</span>
            </label>
            <label>
                <input type="radio" name="position" value="mail" v-model="picked">
                <span>E-mail</span>
            </label>
            <label>
                <input type="radio" name="position" value="viber" v-model="picked">
                <span>Viber</span>
            </label>
            <label>
                <input type="radio" name="position" value="telegram" v-model="picked">
                <span>Telegram</span>
            </label>
            <label>
                <input type="radio" name="position" value="whatsapp" v-model="picked">
                <span>Whatsapp</span>
            </label>
        </div>
        <div class="v-quiz-block-4_inputTel">
            <label v-if="picked !== 'mail'">
                <span>Введите ваш номер телефона</span>
                <input type="number" placeholder="+375 (__)___-__-__">
            </label>
            <label v-else>
                <span>Введите ваш e-mail</span>
                <input type="text" placeholder="simple@example.com">
            </label>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: 'v-quiz-block-4',
        components: {
        },
        props: {},
        data() {
            return {
                picked: 'tel'
            } 
        },
        computed: {},
        methods: {},
        watch: {},
        mounted() {}
    }
</script>

<style lang="scss">

    .v-quiz-block-4 {
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
            align-content: center;
            justify-content: space-around;
            flex-wrap: wrap;
            width: 56%;

            label {
                width: 160px;
                border: 1px solid rgba(0, 0, 0, 0.1);
                box-sizing: border-box;
                filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.06));
                border-radius: 4px;
                padding: 6px;

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

            label:nth-child(n+4) {
                margin-top: 10px;
            }
            

        }

        &_inputTel {
            margin-top: 50px;
            width: 35%;
            background: rgba(250, 250, 250, 0.62);
            box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.01);
            border-radius: 4px;

            label {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 10px;

                span {
                    font-weight: 300;
                    font-size: 13px;
                    line-height: 15px;
                    color: rgba(36, 36, 36, 0.5);
                    margin-bottom: 5px;
                }

                input {
                    background: rgba(250, 250, 250, 0.62);
                    font-size: 20px;
                    line-height: 32px;
                    outline: none;
                    border: 0;
                }
            }
        }
    }
</style>