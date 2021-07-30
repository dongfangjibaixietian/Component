import Selector from "./Selector/index";

let xtUI = {};

xtUI.install = function(Vue) {
  Vue.component(Selector.name, Selector);
};

export default xtUI;
