import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalPages: 0,
    currentPage: 1,
    users: [],
    positions: [],
  },
  getters: {
    getAllUsers(state) {
      return state.users;
    },
    getAllPositions(state) {
      return state.positions;
    },
  },
  mutations: {
    setDefaultUserData(state) {
      state.currentPage = 1;
      state.users = [];
    },
    setUserData(state, data) {
      state.totalPages = data.total_pages;
      state.users.push(...data.users);
    },
    setPositions(state, positions) {
      state.positions = positions;
    },
    updateCurrentPage(state) {
      state.currentPage += 1;
    },
  },
  actions: {
    async getUsers({ state }) {
      return await axios.get(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${state.currentPage}&count=6`
      );
    },
    async getPositions() {
      return await axios.get(
        "https://frontend-test-assignment-api.abz.agency/api/v1/positions"
      );
    },
    async getToken() {
      return await axios.get(
        "https://frontend-test-assignment-api.abz.agency/api/v1/token"
      );
    },
    async signUpUser(context, { userData, token }) {
      return await axios.post(
        "https://frontend-test-assignment-api.abz.agency/api/v1/users",
        userData,
        {
          headers: {
            Token: token,
          },
        }
      );
    },
  },
});
