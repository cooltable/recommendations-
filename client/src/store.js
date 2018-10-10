import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "./router";

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
			axios
				.post("http://localhost:7000/auth/login", user)
				.then(response => {
					commit("setLoggedIn", true);
					commit("setUser", user);
					localStorage.setItem("token", response.data.token);
					this.dispatch("getRecs", response.data.token);
					router.push("/profile");
				})
				.catch(err => console.log(err));
		},
		signUp({ state, commit }, user) {
			axios
				.post("http://localhost:7000/auth/register", user)
				.then(response => {
					commit("setLoggedIn", true);
					commit("setUser", user);
					localStorage.setItem("token", response.data.token);
					router.push("/profile");
				})
				.catch(err => console.log(err));
		},
		getRecs({ state, commit }, token) {
			console.log(token);
			axios({
				method: "GET",
				url: "http://localhost:7000/content/",
				headers: {
					Authorization: token,
				},
			}).then(response => {
				commit("setRecs", response.data);
			});
		},
		logOut({ state, commit }) {
			commit("setLoggedIn", false);
			commit("setUser", null);
			router.push("/");
		},
	},
});
