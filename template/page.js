/**
 * pages模版快速生成脚本,执行命令 yarn run page `文件名`
 */

const fs = require("fs");
const { titleCase } = require("./utils");

const dirName = process.argv[2];

if (!dirName) {
  console.log("文件夹名称不能为空！");
  console.log("示例：yarn run page test");
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

export default {
  data() {
    return {};
  },
  
  components: {
  },

  async mounted() {

  },

  computed: {
  },

  methods: {
  }
};
</script>

<style>
.${l} {
}
</style>
`;

fs.writeFileSync(`src/pages/${u}.vue`, pageTep);

console.log(`page模版${dirName}已创建`);

process.exit(0);
