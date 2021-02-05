<template>
  <q-card class="col-md-3 col-xs-3 text-center">
    <p class="text-h4">Delete</p>
    <q-separator/>

    <q-list bordered>
      <q-item v-for="contact in contacts" :key="contact.id" class="q-my-sm" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ contact.letter }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ contact.name }}</q-item-label>
          <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="close" color="red" @click="deleteUser(contact.id)" />
        </q-item-section>
      </q-item>

      <q-separator />
    </q-list>

  </q-card>
</template>

<script>
import axios from 'axios'

export default {
  name: 'get',
  data () {
    return {
      contacts: []
    }
  },
  methods: {
    getUser () {
      axios
        .get('/article')
        .then(res => { this.contacts = res.data.dbArticle })
    },
    deleteUser (id) {
      axios
        .delete(`/article/${id}`)
        .then(res => { this.contacts = res.data.dbArticle })
    }
  },
  mounted () {
    this.getUser()
  }
}
</script>
