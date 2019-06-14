<template>
  <div class="menu-container">
    <template v-for="v in menus">
      <el-submenu :index="v.path" v-if="v.children&&v.children.length>0" :key="v.path">
        <template slot="title">
          <i v-if="v.icon" :class="v.icon"></i>
          <span>{{v.name}}</span>
        </template>
        <sl-menu :menus="v.children"></sl-menu>
      </el-submenu>
      <el-menu-item :key="v.path" :index="v.path" v-else @click="gotoRoute(v.path)">
        <i v-if="v.icon" :class="v.icon"></i>
        <span slot="title">{{v.name}}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: "sl-menu",
  props: {
    menus: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  methods: {
    gotoRoute(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-menu-item {
  display: flex;
  align-items: center;
}
</style>