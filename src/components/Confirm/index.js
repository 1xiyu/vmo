import Vue from 'vue';
import { isObject, hasOwnProperty } from '@/utils/mixin';
const ComfirmConstructor = Vue.extend((require('./index.vue')));
let instance;

const Confirm = (options = {}) => {
    if (Vue.prototype.$isServer) {
        return;
    }
    if (!isObject(options)) {
        return
    }

    const requiredProps = ['title', 'cancelText', 'confirmText'];
    for (let i = 0, j = requiredProps.length; i < j; i++) {
        if (!hasOwnProperty(options, requiredProps[i])) {
            throw Error(`Missed required prop:${requiredProps[i]}`);
        }
    }
    instance = new ComfirmConstructor({
        data: options
    });
    instance = instance.$mount();
    document.body.appendChild(instance.$el);
    return instance.vm;
}

Vue.prototype.$confirm = (options) => {
    return Confirm(options);
};

export default Confirm;