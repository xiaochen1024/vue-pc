# vue-pc

## 安装项目依赖

```
yarn install
```

### 开发环境启动

```
yarn run serve
```

### 生产环境编译

```
yarn run build
```

### 生成 page 和 store 模版

```
yarn run page_store 页面名称
```

### 生成组件模版

```
yarn run component 组件名
```

### 开发一个页面流程

- yarn run page_store test

- 在 router.js 中添加 page 路由

### 开发一个页面流程

- yarn run component test

- 通用组件命名 Hapi+组件名

- 业务组件命名 Sl+组件名

- 在相应的 page 引入组件

### 注意事项

- 在使用 elementUi 的时候需要在 plugins 中引入相应的组件 懒加载使用

- 在 store 新增 mutations、getters 之后需要在 page 中使用 mapGetters, mapMutations 引入
