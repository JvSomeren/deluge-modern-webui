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
  .torrent-list {
    height: 100%;
    display: flex;

    flex-direction: column;

    background: #2c3e50;
  }

  .no-torrents {
    width: min-content;
    align-self: center;
    padding-left: 25px;
    padding-right: 25px;

    background: #526476;
    color: white;

    font-weight: bold;
    font-size: 1.5rem;
  }
</style>