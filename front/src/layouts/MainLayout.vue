<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Navbar -->
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App vs Node (Express) & MySQL
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <!-- Sidebar -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>

        <!-- Item Home -->
        <q-item
          clickable
          tag="a"
          to="/"
        >
          <q-item-section
            avatar
          >
            <q-icon name="apps" />
          </q-item-section>

          <q-item-section>
            <q-item-label>HOME</q-item-label>
          </q-item-section>
        </q-item>

        <!-- Item CRUD -->
        <q-item
          clickable
          tag="a"
          to="/crud"
        >
          <q-item-section
            avatar
          >
            <q-icon name="apps" />
          </q-item-section>

          <q-item-section>
            <q-item-label>CRUD</q-item-label>
          </q-item-section>
        </q-item>

        <!-- Item BOOK -->
        <q-item
          clickable
          tag="a"
          to="/book"
        >
          <q-item-section
            avatar
          >
            <q-icon name="school" />
          </q-item-section>

          <q-item-section>
            <q-item-label>BOOK</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
