import Vue from "vue";
// import Vuex from "vuex";
import Vuex from "../vuex.js"; // 手写Vuex

Vue.use(Vuex); // install方法
// 全局状态管理
// 1.组件状态共享 2.兄弟组件传值 3.跨组件传值
export default new Vuex.Store({
    // 数据仓库
    state: {
        name: "火花同学",
        age: 7
    },
    // 计算属性
    getters: {
        addName(state) {
            return `${state.name} 是一个神人`;
        }
    },
    // 修改数据
    mutations: {
        syncAdd(state, payload) {
            // console.log(state, payload);
            state.age += payload;
        }
    },
    // 异步处理
    actions: {},
    // 模块化 -> 
    modules: {}
});
