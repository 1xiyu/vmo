### Loading

#### Usage
```
    <loading 
      :show="showLoading"
      :isFixed="true">
    </loading>
```
#### API

| 属性 | 说明 | 类型 | 默认值 |
|----|------|----|----|
| show | loading icon 是否展示  | Boolean | true |
| isFixed | loadingi icon 是否固定在屏幕中央  | Boolean | true |

### Mask

#### Usage
```
    <mo-mask></mo-mask>
```
#### API

| 属性 | 说明 | 类型 | 默认值 |
|----|------|----|----|
| show | 蒙层是否展示  | Boolean | true |
| click | 点击蒙层触发的事件  | Function | － |

### Switch

#### Usage
```
     <el-switch 
      :value="checked" 
      :sync="true" 
      @change="switchOpen">
    </el-switch>
```
#### API

| 属性 | 说明 | 类型 | 默认值 |
|----|------|----|----|
| value | switch开关是否被选中 | Boolean | false |
| disabled | switch开关是否设置为不可用  | Boolean | false |
| color | switch开关的背景颜色  | String | - |
| labels | switch开关的text文本是否显示  | Boolean | false |
| change | switch开关点击触发的事件 | Function | - |

### CountDown

#### Usage
```
    <count-down
        holder-text="请输入短信验证码"
        :countTime="5"
        :vericode.sync="code">
    </count-down>
```
#### API

| 属性 | 说明 | 类型 | 默认值 |
|----|------|----|----|
| holderText | input的默认文案 | String | 请输入手机验证码 |
| initText | 初始时获取验证码按钮的文案  | String | 获取验证码 |
| countTime | 计数器的限定秒数  | Number | 120 |
| vericode | 输入的验证码用于验证表单  | Number or String | - |
| clickText | 按完获取验证码后的文案 | String | 重新获取 |

### Tab TabItem

#### Usage
```
    <tab :activeIndex="activeIndex">
      <tab-item  v-for="(item,index) in tabs" 
        :key="item.id"
        @click.native="switchTab(index)">
          {{ item.text }}
      </tab-item>
    </tab>
```
#### API
* tab组件上的props

| 属性 | 说明 | 类型 | 默认值 |
|----|------|----|----|
| activeIndex | 对应active的tab的索引 | Number | 0 |
| adsorb | tab是否具有sticky效果  | Boolean | true |

### Alert

#### Usage
```
    this.$alert({
        title: '111',
        content: '22444',
        theme: '',
        button: 'ok',
        confirmCallBack: function(){
            console.log(1)
        },
    })
```

#### API

| 属性 | 说明 | 类型 | 默认值 |
|----|------|----|----|
| show | Alert是否显示 | Boolean | true |
| title | 提示框title | String | 提示 | 
| content | 提示框content  | String | - | 
| theme | 提示框的平台样式  | String | andorid || iphone | 
| button | 提示框的按钮文字  | Boolean | true | 
| platform | 提示框对应的平台 | String | andorid || iphone | 
| occupied | 表情链接  | String | - | 

### Confirm

#### Usage
```
    this.$confirm({
        title: '111111',
        cancelText: 'cancel',
        confirmText: 'ok',
        confirmCallBack () {
            console.log('ok')
        },
        cancelCallBack () {
            console.log('cancel')
        } 
    })
```

#### API

| 属性 | 说明 | 类型 | 默认值 |
|----|------|----|----|
| title | 提示框title | String | 提示 | 
| message | 提示框内容  | String | - | 
| confirmText | 确认按钮的文本  | String | ok | 
| cancelText | 取消按钮的文本  | String | cancel | 
| confirmCallBack | 确认函数的回调 | Function | - | 
| cancelCallBack | 取消函数的回调  | Function | - | 

### showTip

#### Usage
```
    this.$showTip('This is a test')
```
                visible: true,
                message: '',
                duration: 2000,
                type: 'info',
                iconClass: '',
                customClass: '',
                showClose: false,
                closed: false,
                timer: null
#### API

| 属性 | 说明 | 类型 | 默认值 |
|----|------|----|----|
| message | 提示框内容  | String | - | 
| duration | 提示框消失的时间  | Number | 2000 | 

### ActionSheet

#### Usage
```
    this.$actionSheet ({
        list: this.datalist,
        title: "请选择",
        platform: val,
        callback: function(val) {
            console.log(val)
        }
    }) 
```
                list: [],
                title: '',
                tail: '取消',
                show: true,
                platform: '',
                callback: null
#### API

| 属性 | 说明 | 类型 | 默认值 |
|----|------|----|----|
| list | 展示的列表需含有text字段  | Array | - | 
| title | actionsheet的表头字段  | String | - | 
| tail | actionsheet尾巴字段  | String | - | 
| callback | actionsheet的选择回调  | Function | - | 

