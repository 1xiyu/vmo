<template>
    
    <div v-bind:class="classObject" v-show="show"></div>

</template>

<script>

    export default {
        props: {
            show:{
                default: true
            },
            isFixed:{
                default:false
            }
        },
        computed:{
            classObject:function (){
                return {
                    'loading':true,
                    'loading-fixed':this.isFixed
                }
            }
        }
    }

</script>
<style scoped>

    .loading{
        width: 64px;
        height: 64px;
        background-image: url("https://s.momocdn.com/w/static/_public/img/ic_loading_v1.0.png");
        background-size:100%;
        animation: rotate-loading 1s ease-in-out infinite;
    }
    .loading-fixed{
        position: fixed;
        left: 50%;
        top: 50%;
        text-align: center;
        margin-top: -32px;
        margin-left: -32px;
        z-index: 101;
    }
    @keyframes rotate-loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
      
       }
    }
</style>
