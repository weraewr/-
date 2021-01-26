import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    loginUser: ""
  },
  // 同步操作，不同步操作速度慢，可能返回不出
  mutations: {
    storeLoginUser(state, user){
      state.loginUser = user
    }
  },
  // 异步操作
  actions: {
    setToken: (state, token) => {
      state.token = token;
      localStorage.setItem("mytoken", token);
    },
    logout: state => {
      state.token = null;
      localStorage.removeItem('mytoken');
    }
  },
  modules: {}
});
