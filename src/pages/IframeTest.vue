<template>
  <div class="iframeTest">
    <hp-iframe :src="src"/>
  </div>
</template>

<script>
import HpIframe from "@/components/hp-iframe";

export default {
  data() {
    return {
      src: "https://fanyi.baidu.com/"
    };
  },

  components: {
    HpIframe
  },

  async mounted() {},

  computed: {},

  methods: {}
};
</script>

<style>
.iframeTest {
  width: 100%;
  height: 100%;
}
</style>
