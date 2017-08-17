import Vue from 'vue';
import { isObject, hasOwnProperty } from '@/utils/mixin';
const SelectConstructor = Vue.extend((require('./index.vue')));
let instance;

const SelectAction = (options = {}) => {
    if (Vue.prototype.$isServer) {
        return;
    }
    if (!isObject(options)) {
        return
    }

    const requiredProps = ['list'];

    for (let i = 0, j = requiredProps.length; i < j; i++) {
        if (!hasOwnProperty(options, requiredProps[i])) {
            throw Error(`Missed required prop:${requiredProps[i]}`);
        }
    }

    instance = new SelectConstructor({
        data: options
    });

    instance = instance.$mount();
    document.body.appendChild(instance.$el);

    return instance;
}

Vue.prototype.$actionSheet = (options) => {
    return SelectAction(options);
}

export default SelectAction;