import { mergeData } from 'vuikit/src/_core/utils/vue'
import { elements as IconElements } from 'vuikit/src/icon'

const { ElIcon } = IconElements

export default {
  functional: true,
  props: {
    href: String,
    target: String,
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  render (h, { props, data, slots }) {
    const _slots = slots()
    const { active, title, href, target } = props

    let content = title

    if (_slots.icon) {
      content = [
        h(ElIcon, {
          class: 'uk-margin-small-right'
        }, [ _slots.icon ]),
        h('span', {
          class: 'uk-text-middle'
        }, title)
      ]
    }

    return h('li', mergeData(data, {
      class: { 'uk-active': active }
    }), [
      h('a', {
        attrs: { href, target }
      }, content)
    ])
  }
}