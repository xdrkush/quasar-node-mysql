<template>
  <q-card class="col-md-3 col-xs-3 text-center">
    <p class="text-h4">{{ title }}</p>
    <q-separator/>

    <q-list bordered>
      <!-- While in listUser  -->
      <q-item v-for="user in listUser" :key="user.id" @click="showModalUser(user)" class="q-my-sm" clickable v-ripple>
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
          <q-icon name="close" color="red" />
        </q-item-section>
      </q-item>

      <q-separator />
    </q-list>

    <!-- Modal User -->
    <modalUser
      v-if='modalUser'
      :modal.sync='modalUser'
      :data='user'
      :delete='formDelete'
      @closeModalUser='closeModal()'
    />
    <!-- / Modal User -->

  </q-card>
</template>

<script>
export default {
  name: 'delete',
  // Data in components
  data () {
    return {
      title: 'Delete',
      modalUser: null,
      formDelete: null
    }
  },
  // Import Components
  components: {
    modalUser: () => import('./modal/modalUser')
  },
  // Functions
  methods: {
    showModalUser (data) {
      this.user = data
      this.modalUser = true
      this.formDelete = true
    },
    closeModal () {
      this.modalUser = false
      this.formDelete = null
    }
  },
  // Import data from components parents
  props: {
    listUser: Array
  }
}
</script>
