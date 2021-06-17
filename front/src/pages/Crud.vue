<template>
  <q-page class='q-pa-md row'>

    <!-- Components get -->
    <get :listUser='listUser'/>

    <!-- Components post -->
    <post/>

    <!-- Components put -->
    <put :listUser='listUser'/>

    <!-- Components delete -->
    <dele :listUser='listUser'/>

  </q-page>
</template>

<script>
// Import Getters & Actions of all Store
import { mapState, mapActions } from 'vuex'

export default {
  name: 'PageIndex',
  // Import components
  components: {
    get: () => import('../components/get'),
    post: () => import('../components/post'),
    put: () => import('../components/put'),
    dele: () => import('../components/delete')
  },
  // Functions
  methods: {
    ...mapActions('user', ['getListUser'])
  },
  // Function Calculed
  computed: {
    ...mapState('user', ['listUser'])
  },
  // Function actived on charged components or Pages
  mounted () {
    this.getListUser()
  }
}
</script>
