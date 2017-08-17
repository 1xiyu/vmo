<template>
    <span class="badge">
        <slot></slot>
    </span>
</template>

<script>

export default {
    props: {
    },
    created:function () {
    },
    methods:{
    }
}
</script>
<style scoped lang="scss">
    $red-color : #ed3f14;
    .badge{
        display: inline-block;
        padding: 0 10px;
        background-color: $red-color;
        font-size: 22px;
        color: #fff;
        line-height: 32px;
        border-radius: 32px;
    }
</style>