import NwButton from './src/button';

/* istanbul ignore next */
// NwButton.install = function(Vue) { // 待规划
NwButton.install = function() {
  Vue.component(NwButton.name, NwButton);
};

export default NwButton;