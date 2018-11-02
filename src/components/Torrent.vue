<template>
  <div class="torrent"
       :style="downloadProgressStyle"
       @click="gotoTorrentDetails">
    <p>{{ torrent.name }}</p>
    <p class="status">{{ torrent.progress | round }}% | {{ torrent.state }} | {{ torrent.eta | etaToString }} | {{ torrent.download_payload_rate | downloadRateToString }}</p>
  </div>
</template>

<script>
export default {
  name: "Torrent",
  props: {
    torrent: Object
  },
  computed: {
    downloadProgressStyle() {
      if ( this.torrent.is_finished ) {
        return {
          background: '#39a071'
        }
      } else {
        let progress = this.torrent.progress;
        return {
          background: 'linear-gradient(to right, ' +
            '#39a071 0%, ' +
            '#39a071 ' + progress + '%, ' +
            '#42b983 ' + progress + '%, ' +
            '#42b983 100%)'
        }
      }
    }
  },
  methods: {
    gotoTorrentDetails() {
      this.$router.push( { name: 'torrent', params: { hash: this.torrent.hash } } )
    }
  }
}
</script>

<style lang="scss">

</style>