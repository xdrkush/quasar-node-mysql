<template>
  <q-page class='q-pa-md'>

    <q-form @submit='formEditUser' class='col-md-12 col-12 col-xs-12 q-pa-md q-gutter-md'>
      <div class='row justify-around col-md-12 col-12 col-xs-12 '>

        <q-input class='col-md-4 col-12 col-xs-12 q-pa-xs'
          rounded v-model="form.id" label="ID" disable/>
        <q-input class='col-md-4 col-12 col-xs-12 q-pa-xs'
          rounded v-model="form.email" label="Email" />
        <q-input class='col-md-4 col-12 col-xs-12 q-pa-xs'
          rounded v-model="form.name" label="Name" />
        <q-input class='col-md-4 col-12 col-xs-12 q-pa-xs'
          rounded v-model="form.mobile" label="Mobile" />

        <q-btn label='Submit'
          type='submit' class="col-md-4 q-mt-md bg-grey-10 text-primary" rounded />

      </div>
    </q-form>

  </q-page>
</template>

<script>
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
  computed: {
    ...mapGetters('user', ['userID'])
  },
  props: {
    user: {
      type: Object
    }
  },
  mounted () {
    this.mountedData()
  }
}
</script>
