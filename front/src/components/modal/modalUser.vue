<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="modal" medium persistent>
      <q-card style="min-width: 80vh">

        <q-bar class="bg-grey-10">
          <q-btn class="text-primary" @click="$emit('closeModalUser')" dense flat icon="close" clickable v-close-popup></q-btn>
        </q-bar>

        <headerUser :user='$props.data' />

        <q-item v-if="this.delete" class="column col-md-12 col-12 text-center">
          <p class="text-h6">Êtes-vous sur de vouloir supprimer <u>{{ $props.data.name }}</u> ?</p>
          <q-btn label='Annuler' class="col-md-4 q-mt-md bg-warning text-primary"
            rounded icon="close" clickable @click="$emit('closeModalUser')" />
          <q-btn label='Confirmer' class="col-md-4 q-mt-md bg-primary text-warning"
            rounded icon="check" clickable @click="submitDeleteUser($props.data.id)" />
        </q-item>

      </q-card>
    </q-dialog>
  </div>
</template>

<script>
// Import Actions form store
import { mapActions } from 'vuex'

export default {
  name: 'modalUser',
  // Components
  components: {
    headerUser: () => import('../headerUserId')
  },
  // Function
  methods: {
    submitDeleteUser (id) {
      this.deleteOneUser(id)
      this.$emit('closeModalUser')
    },
    ...mapActions('user', ['deleteOneUser'])
  },
  // import data from parent components
  props: {
    modal: {
      default: false
    },
    data: {
      type: Object
    },
    delete: {
      type: Boolean
    }
  }
}
</script>
