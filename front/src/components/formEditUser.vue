<template>
  <q-page class='q-pa-md'>

    <!-- Form Edit User -->
    <q-form @submit='formEditUser' class='col-md-12 col-12 col-xs-12 q-pa-md q-gutter-md'>
      <div class='row justify-around col-md-12 col-12 col-xs-12 '>

        <!-- Input ID Disable -->
        <q-input class='col-md-4 col-12 col-xs-12 q-pa-xs'
          rounded v-model="form.id" label="ID" disable/>
        <!-- Input Email Disable -->
        <q-input class='col-md-4 col-12 col-xs-12 q-pa-xs'
          :rules="[ val => val && val.length > 0 || 'Vous devez ajouter du texte !']"
          rounded v-model="form.email" label="Email" />
        <!-- Input Name Disable -->
        <q-input class='col-md-4 col-12 col-xs-12 q-pa-xs'
          :rules="[ val => val && val.length > 0 || 'Vous devez ajouter du texte !']"
          rounded v-model="form.name" label="Name" />
        <!-- Input Mobile Disable -->
        <q-input class='col-md-4 col-12 col-xs-12 q-pa-xs'
          :rules="[ val => val && val.length > 0 || 'Vous devez ajouter du texte !']"
          rounded v-model="form.mobile" label="Mobile" />

        <!-- Button submit form -->
        <q-btn label='Submit'
          type='submit' class="col-md-4 q-mt-md bg-grey-10 text-primary" rounded />

      </div>
    </q-form>

  </q-page>
</template>

<script>
// Import Actions & Getters
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'FormEditUser',
  data () {
    return {
      form: {
        id: '',
        email: '',
        name: '',
        mobile: ''
      }
    }
  },
  // Functions
  methods: {
    formEditUser () {
      this.editOneUser(this.form)
    },
    mountedData () {
      console.log('COMPFormEditUser: ', this.userID.name)
      this.form = this.userID
    },
    ...mapActions('user', ['editOneUser'])
  },
  // Functions Calculed
  computed: {
    ...mapGetters('user', ['userID'])
  },
  // Data in components
  props: {
    user: {
      type: Object
    }
  },
  // Function run on charged components
  mounted () {
    this.mountedData()
  }
}
</script>
