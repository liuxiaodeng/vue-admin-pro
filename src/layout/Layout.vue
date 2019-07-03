<template>
  <div class="admin-pro-layout">
    <Sidebar />
    <div class="admin-pro-content">
      <Header />
      <routerView />
    </div>
  </div>
</template>
<script>
import Sidebar from './sidebar/Sidebar'
import Header from './header/Header'
export default {
  name: 'Layout',
  components: { Sidebar, Header }
}
</script>
