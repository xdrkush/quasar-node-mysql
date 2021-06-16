<template>
  <q-page class='q-pa-md'>

    <p>{{ this.userID }}</p>

    <headerUser :user='this.userID'/>

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
          <q-tab-panel name="account">
            <formEditUser :user='this.userID'/>
          </q-tab-panel>

          <q-tab-panel name="book">
            <tableBook :user='this.userID' />
          </q-tab-panel>

        </q-tab-panels>
      </q-card>

  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PageUser',
  data () {
    return {
      tab: 'account'
    }
  },
  components: {
    headerUser: () => import('../components/headerUserId.vue'),
    tableBook: () => import('../components/tableBook.vue'),
    formEditUser: () => import('../components/formEditUser.vue')
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
