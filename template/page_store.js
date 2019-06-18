/**
 * pages和store模版快速生成脚本,执行命令 yarn run page_store `文件名`
 */

const fs = require("fs");
const { titleCase } = require("./utils");

const dirName = process.argv[2];

if (!dirName) {
  console.log("文件夹名称不能为空！");
  console.log("示例：yarn run page_store test");
  process.exit(0);
}

const { l, u } = titleCase(dirName);

const f = fs.existsSync(`src/pages/${u}.vue`);
const f1 = fs.existsSync(`src/store/${l}.js`);
if (f) {
  console.log(`文件${u}.vue已存在`);
  process.exit(0);
}
if (f1) {
  console.log(`文件${l}.js已存在`);
  process.exit(0);
}

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

  async mounted() {
    
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

process.exit(0);
