/**
 * pages模版快速生成脚本,执行命令 yarn run component `文件名`
 */

const fs = require("fs");

const dirName = process.argv[2];

if (!dirName) {
  console.log("文件夹名称不能为空！");
  console.log("示例：yarn run component test");
  process.exit(0);
}

const { l, u } = titleCase(dirName);

// 页面模版
const cTep = `
<template>
  <div class="${l}">${l}</div>
</template>

<script>
export default {
  name: ${u},

  props: {},

  data() {
    return {};
  },

  computed: {},

  methods: {}
};
</script>

<style>
.${l} {
}
</style>
`;

fs.writeFileSync(`src/components/${u}.vue`, cTep);

console.log(`组件${dirName}已创建`);

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
