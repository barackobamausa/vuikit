// icon-arrow-up
export default {
  functional: true,
  props: {
    ratio: {
      type: [Number, String],
      default: 1
    }
  },
  render: function (h, { props, data }) {
    const { ratio } = props
    let {
      width = 20,
      height = 20,
      viewBox = '0 0 20 20'
    } = (data.attrs || {})

    if (ratio !== 1) {
      width *= ratio
      height *= ratio
    }

    return h('svg', {
      attrs: {
        version: '1.1',
        meta: 'vk-icons-arrow-up',
        width,
        height,
        viewBox,
        ratio
      },
      domProps: {
        innerHTML: '<polygon points="10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4" /><line fill="none" stroke="#000" x1="10.5" y1="16" x2="10.5" y2="5" />'
      }
    })
  }
}