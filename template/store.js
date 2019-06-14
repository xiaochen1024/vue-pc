/**
 * store模版快速生成脚本,执行命令 yarn run store `文件名`
 */

const fs = require("fs");
const { titleCase } = require("./utils");

const dirName = process.argv[2];

if (!dirName) {
  console.log("文件夹名称不能为空！");
  console.log("示例：yarn run store test");
  process.exit(0);
}

const { l, u } = titleCase(dirName);

// store模版
const storeTep = `
export default {
  namespaced: true,
  state: {},
  mutations: {},
  getters: {}
};
`;

fs.writeFileSync(`src/store/${l}.js`, storeTep);

console.log(`store${dirName}已创建`);

process.exit(0);
