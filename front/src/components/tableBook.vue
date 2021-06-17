<template>
  <div class="q-pa-md">
    <p>ferfer</p>
    <q-table
      title="Treats"
      :data="this.listBookUserId"
      :columns="columns"
      row-key="id"
      :filter="filter"
      :loading="loading"
    >

      <template v-slot:top>
        <q-input debounce="300" color="primary" v-model="form.title" label='Title'
          :rules="[ val => val && val.length > 0 || 'Vous devez ajouter du texte !']"
        />
        <q-space />

        <q-input debounce="300" color="primary" v-model="form.description" label='Description'
          :rules="[ val => val && val.length > 0 || 'Vous devez ajouter du texte !']"
        />
        <q-space />

        <q-input debounce="300" disable color="primary" v-model="form.id" label='Author ID'/>
        <q-space />

        <q-btn color="primary" :disable="loading" icon='add' @click="formCreateBook" />
        <q-space />

        <q-input debounce="300" color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>

      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto>
            <p>{{ props.row.title }}</p>
          </q-td>

          <q-td auto>
            <p>{{ props.row.description }}</p>
          </q-td>

          <q-td auto>
            <p>{{ props.row.name }}</p>
          </q-td>

          <q-td class="text-center">
            <q-btn
              size="sm"
              class="q-ma-xs"
              color="grey-10"
              text-color="red"
              @click="submitDeleteBook(props.row.id)"
              round
              dense
              icon="close"
            />
          </q-td>
        </q-tr>
      </template>

    </q-table>
  </div>
</template>

<script>
// Import Actions & Getters
import { mapActions, mapGetters } from 'vuex'

export default {
  // Data in components
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      // Data form
      form: {
        title: '',
        description: '',
        author_id: this.user.id,
        join: true
      },
      body: {},
      // Column in table
      columns: [
        {
          name: 'title',
          required: true,
          label: 'Titre',
          align: 'left',
          field: row => row.title,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'descritption', align: 'left', label: 'Description', field: 'description', sortable: true },
        { name: 'author', label: 'Author', align: 'left', field: 'name', sortable: true },
        { name: 'actions', label: 'Actions', align: 'center' }
      ]
    }
  },
  // Functions
  methods: {
    formCreateBook () {
      this.createBook(this.form)
    },
    submitDeleteBook (id) {
      this.body = { id, join: true }
      this.deleteOneBook(this.body)
    },
    ...mapActions('book', ['createBook', 'getBookUserId', 'deleteOneBook'])
  },
  // Functions calculed
  computed: {
    ...mapGetters('book', ['listBookUserId'])
  },
  // Import data from components parents
  props: {
    user: {
      type: Object
    }
  },
  // Function run on charged components
  mounted () {
    this.form.id = this.user.id
    this.getBookUserId(this.$route.params.id)
  }
}
</script>
