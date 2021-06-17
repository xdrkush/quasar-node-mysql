<template>
  <q-card class="col-md-3 col-xs-3 text-center">

    <!-- Title of components -->
    <p class="text-h4">{{ title }}</p>
    <q-separator/>

    <q-list bordered>
      <!-- While in listUser  -->
      <q-item v-for="user in listUser"
        :key="user.id" class="q-my-sm"
        clickable  v-ripple
        :to='{ path: "/user/" + user.id }'
      >
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
          <q-icon name="edit" color="warning"/>
        </q-item-section>
      </q-item>

      <q-separator />
    </q-list>

  </q-card>
</template>

<script>
export default {
  name: 'put',
  // Data in components
  data () {
    return {
      title: 'Put'
    }
  },
  // Import data from components parents
  props: {
    listUser: Array
  }
}
</script>
