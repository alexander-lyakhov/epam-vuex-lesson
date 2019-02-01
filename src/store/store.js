import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		accountName: 'Alexander',
		accountAvatar: 'https://bit.ly/2S11Lkn',
		userList: [],
		//userList:  [{"id":1,"name":"Leanne Graham","username":"Bret"},{"id":2,"name":"Ervin Howell","username":"Antonette"},{"id":3,"name":"Clementine Bauch","username":"Samantha"},{"id":4,"name":"Patricia Lebsack","username":"Karianne"},{"id":5,"name":"Chelsey Dietrich","username":"Kamren"},{"id":6,"name":"Mrs. Dennis Schulist","username":"Leopoldo_Corkery"},{"id":7,"name":"Kurtis Weissnat","username":"Elwyn.Skiles"},{"id":8,"name":"Nicholas Runolfsdottir V","username":"Maxime_Nienow"},{"id":9,"name":"Glenna Reichert","username":"Delphine"},{"id":10,"name":"Clementina DuBuque","username":"Moriah.Stanton"}],
		/*
		userList: [
			{id: 1, name: 'Саша'},
			{id: 2, name: 'Петя'},
			{id: 3, name: 'Вася'},
			{id: 4, name: 'Гриша'},
		],
		*/
	},

	getters: {
		account(state) {
			return {
				name: state.accountName,
				avatar: state.accountAvatar
			}
		},

		userCount(state) {
			return state.userList.length;
		},
	},
	
	mutations: {
		addUser(state, name) {
			const id = Math.floor(Math.random() * new Date().getTime()).toString(16);
			state.userList = [{id, name}, ...state.userList];
		},

		removeUser(state, id) {
			this.state.userList = this.state.userList.filter(item => item.id !== id);
		},

		populateUserList(state, data) {
			state.userList = [...data, ...state.userList];
		}
	},

	actions: {
		fetchUsers({commit}) {
			return fetch('https://jsonplaceholder.typicode.com/users')
				.then(res => res.json())
				.then(users => commit('populateUserList', users))
		}
	}
});
