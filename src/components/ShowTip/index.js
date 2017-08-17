import Vue from 'vue';
const MessageConstructor = Vue.extend(require('./index.vue'));
import { isObject, hasOwnProperty } from '@/utils/mixin';

let instance;

var Message = function (str) {
    if (Vue.prototype.$isServer) return;
    //TODO  if is string

    instance = new MessageConstructor({
        data: {
            message: str
        }
    });

    instance = instance.$mount();
    
    document.body.appendChild(instance.$el);
    
    return instance.vm;
};

Vue.prototype.$showTip = (options) => {
    return Message(options);
}; 

export default Message;