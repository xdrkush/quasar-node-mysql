<template>
  <q-page class='q-pa-md'>

    <!-- Json User selected (getter) -->
    <p>{{ this.userID }}</p>

    <!-- Component header with props -->
    <headerUser :user='this.userID'/>

    <!-- Tab Panel with choose Account / Book -->
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="account" label="Account" />
        <q-tab name="book" label="Books" />
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <!-- Tab Account -->
        <q-tab-panel name="account">
          <formEditUser :user='this.userID'/>
        </q-tab-panel>

        <!-- Tab Book -->
        <q-tab-panel name="book">
          <tableBook :user='this.userID' />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>

  </q-page>
</template>

<script>
// Import Actions & Getters of all store
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PageUser',
  data () {
    return {
      tab: 'account'
    }
  },
  // Import components
  components: {
    headerUser: () => import('../components/headerUserId.vue'),
    tableBook: () => import('../components/tableBook.vue'),
    formEditUser: () => import('../components/formEditUser.vue')
  },
  // Functions calculed
  computed: {
    ...mapGetters('user', ['userID'])
  },
  // Functions
  methods: {
    ...mapActions('user', ['editOneUser', 'getUserId'])
  },
  // function run on charged components or Pages
  mounted () {
    this.getUserId(this.$route.params.id)
  }
}
</script>
