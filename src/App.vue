<template>
  <v-app class="lighten-4">
    <Navbar />
    <v-main class="grey lighten-4">
      <router-view/>
    </v-main>

  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data: () => ({
    //
  })
}
</script>
