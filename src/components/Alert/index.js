import Vue from 'vue';
import { isObject, hasOwnProperty } from '@/utils/mixin';
const AlertConstructor = Vue.extend((require('./index.vue')));
let instance;

const Alert = (options = {}) => {
    if (Vue.prototype.$isServer) {
        return;
    }
    if (!isObject(options)) {
        return
    }

    const requiredProps = ['content', 'button'];

    for (let i = 0, j = requiredProps.length; i < j; i++) {
        if (!hasOwnProperty(options, requiredProps[i])) {
            throw Error(`Missed required prop:${requiredProps[i]}`);
        }
    }

    instance = new AlertConstructor({
        data: options
    });

    instance = instance.$mount();
    document.body.appendChild(instance.$el);

    return instance;
}

Vue.prototype.$alert = (options) => {
    return Alert(options);
}; 

export default Alert;