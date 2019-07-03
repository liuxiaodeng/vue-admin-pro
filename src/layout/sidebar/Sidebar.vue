<template>
  <div :class="[{ 'siderbar-collapsed': isCollapse }, 'admin-pro-sidebar']">
    <div class="siderbar-logo">
      <a href="/">
        <h2 class="text">Vue Admin Pro</h2>
      </a>
    </div>
    <el-menu
      class="sidebar-menu"
      :default-active="activeIndex"
      :background-color="variables.siderBg"
      :text-color="variables.siderText"
      :active-text-color="variables.siderActiveMenu"
      :router="true"
      :collapse="isCollapse"
    >
      <menu-item
        v-for="menu in menus"
        :key="menu.path"
        :item="menu"
      ></menu-item>
    </el-menu>
  </div>
</template>
<script>
import variables from '@/styles/variables.scss'
import MenuItem from './MenuItem'
export default {
  name: 'Sidebar',
  components: { MenuItem },
  computed: {
    menus() {
      return this.$store.state.routerMenus
    },
    activeIndex() {
      return this.$route.path
    },
    variables() {
      return variables
    },
    isCollapse() {
      return this.$store.state.isCollapse
    }
  }
}
</script>
