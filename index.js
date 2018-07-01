const fantasy = require('fantasy-land')

export default {
  install: (Vue) => {
    Object.defineProperty(Vue.prototype, '$fantasy', { value: fantasy })
  }
}
