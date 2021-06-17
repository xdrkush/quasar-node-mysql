<template>
  <q-card class="col-md-3 col-xs-3 text-center">
    <!-- Title of components -->
    <p class="text-h4">{{ title }}</p>
    <q-separator/>

    <q-list bordered>
      <!-- While in listUser  -->
      <q-item v-for="user in listUser" :key="user.id" class="q-my-sm" @click="showModalUser(user)" clickable v-ripple>
        <!-- Icon -->
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ user.id }}
          </q-avatar>
        </q-item-section>

        <!-- Name & Email -->
        <q-item-section>
          <q-item-label>{{ user.name }}</q-item-label>
          <q-item-label caption lines="1">{{ user.email }}</q-item-label>
        </q-item-section>

        <!-- Icon -->
        <q-item-section side>
          <q-icon name="visibility" color="green"/>
        </q-item-section>
      </q-item>
      <q-separator />
    </q-list>

    <!-- Modal User -->
    <modalUser
      v-if='modalUser'
      :modal.sync='modalUser'
      :data='user'
      @closeModalUser='closeModal()'
    />
    <!-- / Modal User -->

  </q-card>
</template>

<script>
export default {
  name: 'get',
  // Data in components
  data () {
    return {
      title: 'Get',
      modalUser: false,
      user: null
    }
  },
  // Import Components
  components: {
    modalUser: () => import('./modal/modalUser')
  },
  // Function
  methods: {
    showModalUser (data) {
      this.user = data
      this.modalUser = true
    },
    closeModal () {
      this.modalUser = false
    }
  },
  // Import data from components parents
  props: {
    listUser: Array
  }
}
</script>
