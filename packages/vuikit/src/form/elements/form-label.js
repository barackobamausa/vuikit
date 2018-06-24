import { mergeData } from 'vuikit/src/_core/utils/vue'

export default {
  functional: true,
  render (h, { data, children }) {
    return h('label', mergeData(data, {
      class: 'uk-form-label'
    }), children)
  }
}