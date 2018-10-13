import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
    user: null,
    recs: [],
  },
  mutations: {
    setLoggedIn(state, val) {
      state.loggedIn = val;
    },

    setUser(state, user) {
      state.user = user;
    },

    setRecs(state, recs) {
      state.recs = recs;
    },
  },
  actions: {
    logIn({ state, commit }, user) {
      console.log(user);
      axios
        .post('http://localhost:7000/auth/login', user)
        .then(response => {
          console.log(response);
          commit('setLoggedIn', true);
          commit('setUser', response.data.user);
          localStorage.setItem('token', response.data.token);
          //hacky way change dis shit later kthnx
          localStorage.setItem('user', JSON.stringify(response.data.user));
          this.dispatch('getRecs', {
            token: response.data.token,
            user: response.data.user,
          });
          router.push('/profile');
        })
        .catch(err => console.log(err));
    },
    signUp({ state, commit }, user) {
      axios
        .post('http://localhost:7000/auth/register', user)
        .then(response => {
          commit('setLoggedIn', true);
          commit('setUser', user);
          localStorage.setItem('token', response.data.token);
          router.push('/profile');
        })
        .catch(err => console.log(err));
    },
    getRecs({ state, commit }, { token, user }) {
      console.log(token, user);
      axios({
        method: 'GET',
        url: 'http://localhost:7000/content/',
        headers: {
          Authorization: token,
        },
      }).then(response => {
        commit('setRecs', response.data);
        commit('setUser', user);
        commit('setLoggedIn', true);
      });
    },
    logOut({ state, commit }) {
      commit('setLoggedIn', false);
      commit('setUser', null);
      router.push('/');
    },
  },
});
