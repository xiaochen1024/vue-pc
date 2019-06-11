/**
 * pages模版快速生成脚本,执行命令 yarn run page_store `文件名`
 */

const fs = require("fs");

const dirName = process.argv[2];

if (!dirName) {
  console.log("文件夹名称不能为空！");
  console.log("示例：yarn run page_store test");
  process.exit(0);
}

const { l, u } = titleCase(dirName);

// 页面模版
const pageTep = `<template>
  <div class="${l}">
    ${l}
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  
  components: {
  },

  computed: {
    ...mapGetters([])
  },

  methods: {
    ...mapMutations([])
  }
};
</script>

<style>
.${l} {
}
</style>
`;

// store模版
const storeTep = `import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  getters: {}
});
`;


fs.writeFileSync(`src/pages/${u}.vue`, pageTep);
fs.writeFileSync(`src/store/${l}.js`, storeTep);

console.log(`模版${dirName}和store已创建, 请引入路由和store`);

function titleCase(str) {
  const f = str.slice(0, 1);
  const e = str.slice(1);
  const l = f.toLocaleLowerCase();
  const u = f.toUpperCase();
  return {
    l: `${l}${e}`,
    u: `${u}${e}`
  };
}

process.exit(0);
