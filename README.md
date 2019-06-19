# vue-pc

```
开发前先安装node yarn
```

## 1. 拉取代码的方式创建项目

#### 安装项目依赖

```
git clone url
cd project
yarn install
```

#### 生成 page 和 store 模版

```
yarn run page_store 页面名称
```

#### 生成组件模版

```
yarn run component 组件名
```

#### 生成 page

```
yarn run page page名
```

#### 生成 store

```
yarn run store store名
```

#### 开发一个页面流程

- yarn run page_store test 用不到 store 的话可以单独 yarn run page test 生成页面模版

- 在 router.js 中添加 page 路由

- 在 store/index 中添加 store

### 开发一个组件流程

- yarn run component test

- 通用组件命名 hp-组件名

- 业务组件命名 sl-组件名

- 在相应的 page 引入组件

# 2. 脚手架自动生成的方式创建(推荐)

```
npm install -g yo
npm install -g generator-vue-pc
mkdir projectDir
cd projectDir
yo vue-pc
```

### 生成页面

```
yo vue-pc:page pageName
```

### 生成组件

```
yo vue-pc:component componentName
```

### 生成 store

```
yo vue-pc:store storeName
```

### 开发一个页面流程

- yo vue-pc:page pageName

- yo vue-pc:store storeName

- 在 router.js 中添加 page 路由

- 在 store/index 中添加 store

### 开发一个组件流程

- yo vue-pc:component componentName

- 通用组件命名 hp-组件名

- 业务组件命名 sl-组件名

- 在相应的 page 引入组件

# 3. 注意事项

- 在使用 elementUi 的时候需要在 plugins 中引入相应的组件 懒加载使用

- 在 store 新增 mutations、getters 之后需要在 page 中使用 mapGetters, mapMutations 引入

- 开发环境存在跨域请配置 vue.config.js 中的 devserver

- 生产环境打包需要配置.env.production

- vue.config.js 中 outputDir 可以配置生产环境打包后的路径

- api 文件夹中可以创建请求相关的文件

#### 开发环境启动

```
yarn run serve
```

#### 生产环境编译

```
yarn run build
```
