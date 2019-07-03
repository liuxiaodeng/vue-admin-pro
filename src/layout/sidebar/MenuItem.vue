<!--
如果使用模版组件，外层必须嵌套一次div，
导致elment的导航菜单在收缩时会导致样式问题
因此采用函数式组件避免
-->
<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  render: function(createElement, context) {
    let item = context.props.item
    if (item.children) {
      return createElement(
        'el-submenu',
        {
          props: {
            index: item.path
          }
        },
        [
          createElement(
            'template',
            {
              slot: 'title'
            },
            [
              createElement('i', {
                class: item.meta.icon ? 'el-icon-s-' + item.meta.icon : ''
              }),
              createElement('span', item.meta.title)
            ]
          ),
          item.children.map(child => {
            return createElement('menu-item', {
              props: {
                item: child,
                key: child.path
              }
            })
          })
        ]
      )
    } else {
      return createElement(
        'el-menu-item',
        {
          props: {
            index: item.path
          }
        },
        [
          createElement('i', {
            class: item.meta.icon ? 'el-icon-s-' + item.meta.icon : ''
          }),
          createElement(
            'span',
            {
              slot: 'title'
            },
            item.meta.title
          )
        ]
      )
    }
  }
}
</script>
