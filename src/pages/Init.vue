<template>
  <div class="init">
    <div>
      <div>{{count}}</div>
      <el-button @click="addCount">点击增加</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },

  components: {},

  async mounted() {},

  computed: {
    ...mapGetters({
      count: "init/count"
    })
  },

  methods: {
    ...mapMutations({
      addCount: "init/addCount"
    })
  }
};
</script>

<style>
.init {
}
</style>
