import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "./router";

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
			console.log(user);
			axios
				.post("http://localhost:8000/auth/login", user)
				.then(response => {
					console.log(response);
					commit("setLoggedIn", true);
					commit("setUser", user);
					localStorage.setItem("token", response.data.token);
					router.push("/profile");
				})
				.catch(err => console.log(err));
		},
		signUp({ state, commit }, user) {
			axios
				.post("http://localhost:8000/auth/register", user)
				.then(response => {
					commit("setLoggedIn", true);
					commit("setUser", user);
					localStorage.setItem("token", response.data.token);
					router.push("/profile");
				})
				.catch(err => console.log(err));
		},
		logOut({ state, commit }) {
			commit("setLoggedIn", false);
			commit("setUser", null);
			router.push("/");
		},
	},
});
