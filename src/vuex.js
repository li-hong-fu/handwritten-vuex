
let Vue;
class Store {
    constructor(options = {}) {
        // Vuex核心,数据响应式
        // new一个Vue事例
        this.s = new Vue({
            // 把数据放到Vue事例data里，实现数据响应式
            data() {
                return { state: options.state };
            }
        });

        let getters = options.getters;
        this.getters = {};
        // 获取getter对象的key
        Object.keys(getters).forEach((getterName) => {
            // console.log(getterName);
            // 劫持所有属性、数据
            Object.defineProperty(this.getters, getterName, {
                get: () => {
                    return getters[getterName](this.state);
                }
            });
        });

        let mutations = options.mutations;
        this.mutations = {};
        // 获取mutations的key值
        Object.keys(mutations).forEach((mutationName) => {
            // 当前事例上，通过方法名找到对应的方法
            this.mutations[mutationName] = (payload) => {
                mutations[mutationName](this.state, payload);
            };
        });

    }
    // 创建commit方法
    commit = (mutationName, payload) => {
        this.mutations[mutationName](payload);
    }

    // 创建类访问器
    get state() {
        return this.s.state;
    }
}

const install = (_Vue) => {
    Vue = _Vue;
    // mixin方法混入Vue的生命周期
    Vue.mixin({
        // 混入组件创建之前
        beforeCreate() {
            // new Vue一次 渲染APP一次
            if (this.$options && this.$options.store) {
                // $store变量挂载跟组件
                this.$store = this.$options.store;
            } else {
                // $store变量挂载子组件
                this.$store = this.$parent && this.$parent.$store;
            }
        }
    });
};

export default {
    Store,
    install
};