import store from "@/store";

const permission = {
  inserted(el, binding) {
    const { value } = binding;
    const { els } = store.state.permission;

    if (value && value instanceof Array && value.length > 0) {
      const hasPermission = els.some(e => {
        return value.includes(e);
      });

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else {
      throw new Error(`need permission`);
    }
  }
};

const install = function(Vue) {
  Vue.directive("permission", permission);
};

if (window.Vue) {
  window["permission"] = permission;
  Vue.use(install); // eslint-disable-line
}

permission.install = install;
export default permission;
