<template>
    <div id="app">
        <MainWrapper/>
    </div>
</template>

<script>
    import axios from 'axios';
    import MainWrapper from '../components/v-main-wrapper';

    export default {
        name: 'app',
        components: {
            MainWrapper
        },
        data() {
            return {
            }
        },
        methods: {
        
        },
        mounted() {
            
        }
    }
</script>

<style lang = 'scss'>
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;

        #app {
            height: 947px;
        }
    }

</style>