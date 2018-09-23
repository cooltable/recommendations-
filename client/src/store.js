import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
    user: null,
  },
  mutations: {
    setLoggedIn(state, val) {
      state.loggedIn = val;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    logIn({ state, commit }, user) {
      commit('setLoggedIn', true);
      commit('setUser', user);
      router.push('/profile');
    },
    logOut({ state, commit }) {
      commit('setLoggedIn', false);
      commit('setUser', null);
      router.push('/');
    },
  },
});
