import Vue from 'vue';

function isObject(x) {
    return x != null && typeof x === 'object';
}

function hasOwnProperty(object, prop) {
    return Object.prototype.hasOwnProperty.call(object, prop);
}


const ComfirmConstructor = Vue.extend((require('./index.vue')));
let instance;
let seed = 1;
const Confirm = (options = {}) => {
    if (Vue.prototype.$isServer) {
        return;
    }
    if (!isObject(options)) {
        return
    }
    let id = 'comfirm' + seed++;
    const requiredProps = ['title', 'cancelText', 'confirmText'];
    for (let i = 0, j = requiredProps.length; i < j; i++) {
        if (!hasOwnProperty(options, requiredProps[i])) {
            throw Error(`Missed required prop:${requiredProps[i]}`);
        }
    }
    instance = new ComfirmConstructor({
        data: options
    });
    instance.id = id;
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);
    instance.vm.visible = true;
    instance.dom = instance.vm.$el;
    return instance.vm;
}
Confirm.open = (options) => {
    return Confirm(options);
};
Confirm.colse = () => {
    instance.close();
}
export default Confirm;