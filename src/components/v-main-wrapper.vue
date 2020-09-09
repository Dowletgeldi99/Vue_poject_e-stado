<template>
    <div class="v-main-wrapper">
        <vInfo/>

        <div class="v-quiz">
            <div class="v-quiz_container">
                <div class="v-quiz_container__top">
                    <div class="top_rectangle">
                        <div class="top_rectangle__circle activeCircle"></div>
                        <div class="top_rectangle__inner inner_left" :class="{activeRect: isActiveMore1}"></div>
                        <div class="top_rectangle__circle" :class="{activeCircle: isActiveMore1}"></div>
                        <div class="top_rectangle__inner inner_right" :class="{activeRect: isActiveMore2}"></div>
                        <div class="top_rectangle__circle" :class="{activeCircle: isActiveMore2}"></div>
                    </div>
                </div>

                <div class="v-quiz_container__bottom">
                    <vQuiz_1 v-if="quiz == 1" />
                    <vQuiz_2 v-if="quiz == 2" />
                    <vQuiz_3 v-if="quiz == 3" />
                    <vQuiz_4 v-if="quiz == 4" />
                </div>

                <div class="v-quiz_container__btn">
                    <button v-if="quiz < 4" @click="nextQuiz">Далее</button>
                    <button class="btn_submit" v-else>Отправить и получить ответ</button>
                </div>

            </div>
        </div>
        <div class="v-reverse-cow"></div>
        <div class="v-reverse-bush-left">
            <img :src="require('../images/Bush.svg').default " alt="">
        </div>
        <div class="v-reverse-bush-right"></div>
    </div>
</template>

<script>
    import vInfo from './v-info';
    import vQuiz_1 from './v-quiz_1';
    import vQuiz_2 from './v-quiz_2';
    import vQuiz_3 from './v-quiz_3';
    import vQuiz_4 from './v-quiz_4';

    export default {
        name: 'v-main-wrapper',
        components: {
            vInfo,
            vQuiz_1,
            vQuiz_2,
            vQuiz_3,
            vQuiz_4
        },
        props: {},
        data() {
            return {
                quiz: 1,
                isActiveInner: false,
                isActiveCircle: false
            }
        },
        computed: {
            isActiveMore1() {
                return (this.quiz > 1) ? 1 : 0; 
            },
            isActiveMore2() {
                return (this.quiz > 2) ? 1 : 0; 
            }
        },
        methods: {
            nextQuiz() {
                return this.quiz++;
            },
            validate() {

            }
        },
        watch: {}
    }
</script>

<style lang="scss">
    .v-main-wrapper {
        position: relative;
        background: url('../images/image_bg.svg') no-repeat;
        background-size: cover;
        width: 100%;
        height: 100%;

        .v-quiz {
            width: 50%;
            margin: 30px auto 0;

            &_container {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 5px;
                background: #FFFFFF;
                box-shadow: 0px 20px 80px rgba(0, 0, 0, 0.2);
                border-radius: 8px;
                margin-bottom: 50px;

                &__top {
                    width: 100%;
                    border: 1px dashed rgba(0, 0, 0, 0.08);
                    border-radius: 8px;
                    filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.06));
                    padding: 20px;

                    .top_rectangle {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        height: 16px;
                        width: 98%;
                        position: relative;

                        &__inner {
                            position: absolute;
                            width: 49%;
                            height: 100%;
                            background: #F4F4F4;
                            box-shadow: inset 0px 10px 20px rgba(255, 255, 255, 0.16);
                        }

                        .inner_left {
                            left: 5px;
                        }

                        .inner_right {
                            right: 5px;
                        }

                        .activeRect {
                            transform: scaleX(1);
                            transition: .3s ease;
                            background: #00800081;
                        }

                        .activeCircle {
                            border: 0;
                            background: linear-gradient(0deg, #50B520, #50B520);
                            box-shadow: inset 0px 10px 20px rgba(255, 255, 255, 0.16);
                            border-radius: 999px;
                            transform: scaleX(1);
                            transition: .5s ease 1s;
                        }

                        &__circle {
                            background: linear-gradient(0deg, #FFFFFF, #FFFFFF);
                            border: 3px solid #F5F5F5;
                            box-shadow: inset 0px 10px 20px rgba(255, 255, 255, 0.16);
                            border-radius: 999px;
                            border-radius: 999px;
                            width: 20px;
                            height: 20px;
                            z-index: 2;
                        }



                        .top_rectangle__circle + .top_rectangle__circle {
                            background: linear-gradient(0deg, #FFFFFF, #FFFFFF);
                        }

                    }

                }

                &__bottom {
                    width: 100%;
                    border: 1px dashed rgba(0, 0, 0, 0.08);
                    border-radius: 8px;
                    filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.06));
                    padding: 20px;
                    margin-top: 10px;
                    height: 400px;
                    z-index: 4;
                }

                &__btn {
                    position: absolute;
                    bottom: -25px;
                    margin-top: 30px;
                    width: 28%;
                    text-align: center;
                    cursor: pointer;
                    z-index: 100;
                    
                    button {
                        width: 56%;
                        background: linear-gradient(98.61deg, #FBDB6A 5.19%, #FFEBA3 49.97%, #FBDB6A 95.49%);
                        box-shadow: inset 0px 0px 26px rgba(255, 255, 255, 0.54);
                        border-radius: 52px;
                        text-align: center;
                        padding: 17px 0;
                        outline: none;
                        border: 0;
                        color: #242424;
                    }

                    .btn_submit {
                        width: 100%;
                        font-weight: 500;
                        font-size: 16px;
                        line-height: 19px;
                        text-align: center;
                    }
                }
            }
        } 

        .v-reverse-cow {
            position: absolute;
            bottom: 0;
            background: url('../images/reverseCow.svg') no-repeat;
            background-size: cover;
            width: 380px;
            height: 46%;
            z-index: 2;
        }

        .v-reverse-bush-left {
            position: absolute;
            bottom: -2px;
            left: 120px;
            width: 42%;
            z-index: 3;

            img {
                max-width: 100%;
            }
        }
    }
</style>