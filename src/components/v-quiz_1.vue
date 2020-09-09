<template>
    <div class="v-quiz-block-1">
       <p class="v-quiz-block-1_title">Вопрос 1</p>
       <p class="v-quiz-block-1_question">Сколько у вас <strong>двойных коров?</strong></p>
       <input type="number" name="cow_count" placeholder="Например: 45">
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: 'v-quiz-block-1',
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
    
    .v-quiz-block-1 {
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

        input {
            background: #FFFFFF;
            box-shadow: 0px 20px 80px rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            font-size: 16px;
            line-height: 20px;
            padding: 20px 10px;
            outline: none;
            z-index: 10;
        }
        
        
    }
</style>