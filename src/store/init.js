export default {
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    addCount(state) {
      state.count += 1;
    }
  },
  getters: {
    count: state => state.count
  }
};
