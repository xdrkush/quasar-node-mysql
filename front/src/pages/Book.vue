<template>
  <q-page class='q-pa-md'>

    <p class="text-h4">Page Book</p>

    <q-table
      v-if='gettListUser.length > 0'
      title="Treats"
      :data="this.setListBook"
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

        <q-select
          debounce="300"
          color="primary"
          :options="gettListUser"
          option-label='name'
          option-value='id'
          v-model="form.author_id"
          label='Author ID'
          :rules="[ val => val && val.length > 0 || 'Vous devez selectionner un utilisateur !']"
        />
        <q-space />

        <q-btn color="primary" :disable="loading" icon='add' @click="createBook(form)" />
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
            <p>{{ props.row.author_id }}</p>
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
    <p v-else >Vous devez d'abord ajouter un utilisateur</p>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PageBook',
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      form: {
        title: '',
        description: '',
        author_id: ''
      },
      body: {},
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
        { name: 'author_id', label: 'AuthorID', align: 'left', field: 'author_id', sortable: true },
        { name: 'actions', label: 'Actions', align: 'center' }
      ]
    }
  },
  methods: {
    submitDeleteBook (id) {
      this.body = { id, join: false }
      this.deleteOneBook(this.body)
    },
    ...mapActions('book', ['getListBook', 'createBook', 'deleteOneBook'])
  },
  computed: {
    ...mapGetters('book', ['setListBook']),
    ...mapGetters('user', ['gettListUser'])
  },
  mounted () {
    this.getListBook()
  }
}
</script>
