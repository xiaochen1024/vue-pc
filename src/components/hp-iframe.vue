
<template>
  <iframe
    :src="src"
    width="100%"
    height="100%"
    frameborder="0"
    sandbox="allow-scripts allow-same-origin"
    ref="iframe"
  />
</template>

<script>
export default {
  name: "hp-iframe",

  props: {
    src: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      // iframeWin: {}
    };
  },

  mounted() {
    // window.addEventListener("message", event => {
    //   const data = event.data;
    //   switch (data.cmd) {
    //     case "":
    //       // 业务逻辑
    //       break;
    //     case "":
    //       // 业务逻辑
    //       break;
    //   }
    // });
    // this.iframeWin = this.$refs.iframe.contentWindow;
  },

  computed: {},

  methods: {
    // sendMessage() {
    //   this.iframeWin.postMessage(
    //     {
    //       cmd: "",
    //       params: {}
    //     },
    //     "*"
    //   );
    // }
  }
};
</script>

<style>
.hp-iframe {
}
</style>
