<template>
    <div class="tab-container">
        <ul class="tab-title-container">
            <slot></slot>
        </ul>
    </div>
</template>

<script>

    export default {
        props: {
           
        },
        data() {
            return {
                
            };
        },
        mounted(){
           
        },
        methods: {
            
        }
    };
</script>

<style scoped>

    ::-webkit-scrollbar  
    {  
        width: 0px;  
    }  

    .tab-title-container{
        position: relative;
        height: 82px;
        -webkit-tap-highlight-color:rgba(0,0,0,0);
        margin: 0 auto;
        list-style: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        text-decoration: none;
        -webkit-user-select: none;
        outline: none;
        border-bottom: 1px solid #dddddd;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        width: 100%;
        -webkit-appearance:none;
        text-decoration: none;
    }
</style>
