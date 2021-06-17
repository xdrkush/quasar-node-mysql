<template>
  <q-card class="col-md-3 col-xs-3 text-center">
    <p class="text-h4">Post</p>
    <q-separator/>

    <!-- Formulaire -->
    <q-form class='q-pa-md' @submit='formCreateUser'  method="post">

      <!-- Input -->
      <q-input class='q-my-sm' rounded outlined v-model="form.name" label="first name" />
      <q-input class='q-my-sm' rounded outlined v-model="form.mobile" label="mobile" />
      <q-input class='q-my-sm' rounded outlined v-model="form.email" label="email" />

      <!-- Boutton submit -->
      <q-btn class='q-my-sm' dense rounded icon-right="send" label="Submit" type="submit" color="primary"/>

    </q-form>

  </q-card>
</template>

<script>
// Improt Actions
import { mapActions } from 'vuex'

export default {
  name: 'post',
  // Data in components
  data () {
    return {
      form: {
        name: '',
        mobile: '',
        email: ''
      }
    }
  },
  // Functions
  methods: {
    formCreateUser () {
      this.createUser(this.form)
    },
    ...mapActions('user', ['createUser'])
  }
}
</script>
