<template>
  <div class="torrent-list">
    <Loader v-if="loading"></Loader>
    <div v-else-if="Object.keys(torrents).length === 0 && torrents.constructor === Object"
         class="torrent no-torrents">
      <span>Empty</span>
    </div>
    <Torrent v-else
             v-for="(torrent, index) in torrents"
             :torrent="torrent"
             :key="index"></Torrent>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Loader from "./Loader";
import Torrent from "./Torrent";

export default {
  name: "TorrentList",
  components: { Loader, Torrent },
  data: () => ({}),
  computed: {
    ...mapState( [
      'loading',
      'torrents'
    ] )
  }
}
</script>

<style lang="scss">

</style>