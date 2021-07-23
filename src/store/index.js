import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: [],
  },

  mutations: {
    setPaymentListData(state, payload) {
      state.paymentsList = [...state.paymentsList,...payload];
    },
    addDataToPaymentsList(state, payload) {
      state.paymentsList.push(payload);
    },
    setCategoryList(state, payload) {
      state.categoryList = payload;
    },
  },

  actions: {
    addData({commit}, payload){
      console.log(commit, payload)
    },
    fetchData({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = [];
          for (let i = 1; i < 50; i++) {
            items.push({
              date: "23.12.2020",
              category: "Sport",
              value: i,
              id: i,
            });
          }
          resolve(items);
        }, 1000);
      }).then((res) => {
        commit("setPaymentListData", res);
      });
    },
    fetchCategory({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(["Food", "Sport", "Education", "Auto", "Health", "Family"]);
        }, 500);
      }).then((res) => {
        commit("setCategoryList", res);
      });
    },
  },

  getters: {
    getPaymentList: (state) => state.paymentsList,

    getFullPyamentValue: (state) => {
      return state.paymentsList.reduce((res, cur) => res + cur.value, 0);
    },
    getCategoryList: (state) => state.categoryList,
  },
});
