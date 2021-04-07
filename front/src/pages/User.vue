<template>
  <q-page class='q-pa-md'>

    <p>{{ this.userID }}</p>

    <headerUser :data='this.userID'/>

    <formEditUser :data='this.userID'/>

    <!-- <tableBook :user='this.userID' /> -->

  </q-page>
</template>

<script>
import headerUser from '../components/headerUserId'
// import tableBook from '../components/tableBook'
import formEditUser from '../components/formEditUser'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PageUser',
  components: {
    headerUser,
    // tableBook
    formEditUser
  },
  computed: {
    ...mapGetters('user', ['userID'])
  },
  methods: {
    ...mapActions('user', ['editOneUser', 'getUserId'])
  },
  mounted () {
    this.getUserId(this.$route.params.id)
  }
}
</script>
