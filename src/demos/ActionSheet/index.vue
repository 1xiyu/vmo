<template>
    <div>
        <mo-button
          :text = " 'test actionsheet ios' " 
          @click.native = "test('ios')"
        ></mo-button>
        <mo-button
          style="margin-top: 50px;"
          :text = " 'test actionsheet android' " 
          @click.native = "test('android')"
        ></mo-button>
    </div>
</template>

<script>
import Button from '@/components/Button/index'
import SelectAction from '@/components/ActionSheet/index.js'
export default {
    components: {
        SelectAction,
        'mo-button': Button
    },
    data() {
        return {
            datalist: [
                {
                    text: 'test1',
                    id: 1
                },
                {
                    text: 'test2',
                    id: 2
                }
            ],
            isShow: false
        }
    },
    methods: {
        test (val) {
            console.log(this)
            this.$actionSheet ({
                list: this.datalist,
                title: "请选择",
                platform: val,
                callback: function(val) {
                    console.log(val)
                }
            }) 
        },
        jump (val) {
            console.log(val.id)
        }
    }
}
</script>



