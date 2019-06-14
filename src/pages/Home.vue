<template>
  <el-container class="home">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
          :default-active="activeMenu"
          background-color="#304156"
          text-color="#eee"
          active-text-color="#4dbcff"
        >
          <sl-menu :menus="menus"></sl-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import SlMenu from "@/components/sl-menu";

export default {
  data() {
    return {};
  },

  components: { SlMenu },

  async mounted() {},

  computed: {
    ...mapGetters([]),
    ...mapState({
      menus: state => state.permission.menus
    }),
    activeMenu() {
      const route = this.$route;
      const { path } = route;
      return path;
    }
  },

  methods: {
    ...mapMutations([])
  }
};
</script>

<style lang="scss">
.home {
  border: 1px solid #eee;
  .el-submenu__title {
    width: 200px;
  }
  .el-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }
  .el-menu {
    height: 100%;
  }
  .el-scrollbar {
    height: 100%;
  }
  .scrollbar-wrapper {
    overflow-x: hidden !important;
    .el-scrollbar__view {
      height: 100%;
    }
  }
  .el-scrollbar__bar.is-vertical {
    right: 0px;
  }
}
</style>
