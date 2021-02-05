<template>
  <q-page class='q-pa-md row'>

    <!-- Components get -->
    <get/>

    <!-- Components post -->
    <post/>

    <!-- Components put -->
    <put/>

    <!-- Components delete -->
    <dele/>

  </q-page>
</template>

<script>
import get from '../components/get'
import post from '../components/post'
import put from '../components/put'
import dele from '../components/delete'

export default {
  name: 'PageIndex',
  components: {
    get, post, put, dele
  }
}
</script>
