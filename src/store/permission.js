import { fetchPermission } from "@/api/permission";

export default {
  namespaced: true,
  state: {
    menus: []
  },
  mutations: {
    SET_MENUS: (state, menus) => {
      state.menus = menus;
    }
  },
  actions: {
    async fetchPermission({ commit }) {
      const res = await fetchPermission();
      commit("SET_MENUS", res.menus || []);
      return res;
    }
  }
};
