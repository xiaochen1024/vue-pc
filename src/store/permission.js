import { fetchPermission } from "@/api/permission";

export default {
  namespaced: true,
  state: {
    menus: [],
    els: []
  },
  mutations: {
    SET_MENUS: (state, menus) => {
      state.menus = menus;
    },
    SET_ELS: (state, menus) => {
      state.els = menus;
    }
  },
  actions: {
    async fetchPermission({ commit }) {
      const res = await fetchPermission();
      commit("SET_MENUS", res.menus || []);
      commit("SET_ELS", res.els || []);
      return res;
    }
  }
};
