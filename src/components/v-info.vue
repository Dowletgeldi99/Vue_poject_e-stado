<template>
    <div class="v-info">
        <div class="v-info_logo">
            <div class="logo">
                <img :src="require('../images/logo.svg').default " alt="">
            </div>
            <p>Система комплексного мониторинга состояния молочных коров</p>
        </div>

        <div class="v-info_title">
            <p class="v-info_title__top">Ответьте на 3 вопроса и узнайте</p>
            <p class="v-info_title__bottom">Как <strong class="v-info_title__strong">увеличить удой каждой коровы до 15%</strong> путем</p>
        </div>

        <div class="v-info_about">
            <div v-for="block in info_blocks" class="v-info_about__block" :key='block.id'>
                <div class="logo">
                    <img :src="require('../images/' + block.img).default " alt="">
                </div>
                <div class="text">
                    <p class="strong">{{block.b}}</p>
                    <p>{{block.p}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: 'v-info',
        components: {
        },
        props: {},
        data() {
            return {
                info_blocks: [
                    {
                        id: 1,
                        img: 'block_1.svg',
                        b: 'Своевременного определения половой охоты',
                        p: 'особенно если она не заметна по внешним признакам'
                    },
                    {
                        id: 2,
                        img: 'block_2.svg',
                        b: 'Анализом состояния здоровья коровы',
                        p: 'при наблюдении за жвачкой, активностью и температурой тела'
                    },
                    {
                        id: 3,
                        img: 'block_3.svg',
                        b: 'Выявление хромоты',
                        p: 'предупреждением и выявлением развития хромоты'
                    }
                ] 
            } 
        },
        computed: {},
        methods: {},
        watch: {},
        mounted() {}
    }
</script>

<style lang="scss">
    .v-info {
        padding-top: 30px;

        &_logo {
            display: flex;
            justify-content: space-between;
            width: 420px;
            align-items: center;
            font-family: gilroy;
            margin: 0 auto 70px;

            .logo {
                margin-right: 15px;
                img {
                    max-width: 100%;
                }
            }

            p {
                font-size: 13px;
                line-height: 18px;
            }
        }

        &_title {
            width: 414px;
            margin: 0 auto;
            text-align: center;

            &__top {
                font-size: 17px;
            }

            &__bottom {
                font-size: 24px;
                line-height: 34px;
            }

            &__strong {
                color: #50B520;
            }
        }

        &_about {
            display: flex;
            justify-content: space-around;
            width: 60%;
            margin: 0 auto;

            &__block {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 260px;
                
                .text {
                    width: 180px;

                    .strong {
                        font-weight: 800;
                    }

                    p {
                        font-size: 12px;
                        line-height: 18px;
                        margin: 0;
                    }
                }
            }
        }
    }
</style>