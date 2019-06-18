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

const f = fs.existsSync(`src/store/${l}.js`);
if (f) {
  console.log(`文件${l}已存在`);
  process.exit(0);
}

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

// let storeStr = fs.readFileSync(`src/store/index.js`, { encoding: "utf-8" });
// const pStr = "modules: {";
// const p = storeStr.indexOf(pStr) + pStr.length;
// if (p !== -1) {
//   storeStr = storeStr.slice(0, p) + `\n    ${l},` + storeStr.slice(p);
// }
// const appendStore = `import ${l} from "./${l}";`;
// fs.writeFileSync("src/store/index.js", `${appendStore}\n${storeStr}`);

console.log(`store${dirName}已创建`);

process.exit(0);
