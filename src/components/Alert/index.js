import Vue from 'vue';

function isObject(x) {
    return x != null && typeof x === 'object';
}

function hasOwnProperty(object, prop) {
    return Object.prototype.hasOwnProperty.call(object, prop);
}

const AlertConstructor = Vue.extend((require('./index.vue')));
let instance;
let seed = 1;
const Alert = (options = {}) => {
    if (Vue.prototype.$isServer) {
        return;
    }
    if (!isObject(options)) {
        return
    }
    let id = 'Alert' + seed++;
    const requiredProps = ['title'];
    for (let i = 0, j = requiredProps.length; i < j; i++) {
        if (!hasOwnProperty(options, requiredProps[i])) {
            throw Error(`Missed required prop:${requiredProps[i]}`);
        }
    }
    instance = new AlertConstructor({
        data: options
    });
    instance.id = id;
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);
    instance.vm.visible = true;
    instance.dom = instance.vm.$el;
    return instance.vm;
}
Vue.prototype.$alert = (options) => {
    return Alert(options);
};
Alert.colse = () => {
    instance.close();
}
export default Alert;