<template>
  <div class="row">
    <div class="col-12 col-md-12 col-xs-12">
      <!-- Image background headers -->
      <q-img
        transition="flip-right"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsvpool.com%2Fwp-content%2Fuploads%2F2018%2F10%2F14-arrested-alleged-discount-bitcoin-mining-south-korea.jpg&f=1&nofb=1"
        style="width: 100%;height:25vh"
      >
        <div class="column absolute-right text-center bg-transparent">
          <!-- Avatar -->
          <q-avatar size="96px" class="q-ma-md shadow-10">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.G93kCBjK6aDrjCbDNJ0dBAAAAA%26pid%3DApi&f=1" />
          </q-avatar>
        </div>

        <div class="column absolute-left text-center" style="max-width: 80%">
          <div class="text-grey-12" style="max-width: 70%; min-width: 50%;">
            <!-- Name -->
            <p class="text-h4 text-bold q-pa-none">
              <u>{{ user.name }}</u>
            </p>
            <!-- Email -->
            <p class="q-pa-xs">{{ user.email }}</p>
            <!-- Mobile -->
            <p class="text-h6 q-pa-xs">{{ user.mobile }}</p>
            <!-- ID -->
            <p class="text-h6 q-pa-xs">ID: {{ user.id }}</p>
          </div>
        </div>

      </q-img>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderUserId',
  // Import data from components parents
  props: {
    user: {
      type: Object
    }
  }
}
</script>
