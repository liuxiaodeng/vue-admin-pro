<template>
  <div class="admin-pro-header">
    <div class="header-fold-toggle" @click="handlerToggle">
      <i v-if="!isCollapse" class="el-icon-s-fold"></i>
      <i v-else class="el-icon-s-unfold"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse
    }
  },
  methods: {
    handlerToggle() {
      this.$store.commit('setSiderbarCollapse', !this.isCollapse)
    }
  }
}
</script>
<style lang="scss" scoped>
.header-fold-toggle {
  padding: 0.8em;
  font-size: 1.25rem;
}
</style>
