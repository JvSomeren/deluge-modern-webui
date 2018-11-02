<template>
  <div class="container">
    <header class="menu-bar">

      <MenuButton icon="arrow_back" text="Back" @click.native="back"></MenuButton>
      <MenuButton icon="pause" text="Pause" @click.native="pauseTorrent"></MenuButton>
      <MenuButton icon="play_arrow" text="Resume" @click.native="resumeTorrent"></MenuButton>
      <MenuButton icon="remove" text="Remove" @click.native="removeTorrent"></MenuButton>
    </header>
    <main class="torrent-details">
      <div class="progress-bar"
           :style="downloadProgressStyle">&nbsp;
      </div>

      <div class="torrent blue">
        <span>{{ torrent.name }}</span>
      </div>

      {{ torrent.eta | etaToString }}
      {{ torrent.move_on_completed_path }}
      {{ torrent.files }}
      {{ torrent.state }}
      {{ torrent.progress | round }}
      {{ torrent.download_payload_rate | downloadRateToString }}

      <!--<pre v-for="(prop, index) in torrent"-->
      <!--:key="index">{{ index }}: {{ prop }}-->
      <!--</pre>-->
    </main>
  </div>
</template>

<script>
import MenuButton from '@/components/MenuButton'

export default {
  name: "TorrentDetails",
  components: {
    MenuButton
  },
  computed: {
    torrent() {
      return this.$store.state.torrents[ this.$route.params.hash ];
    },
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
            'transparent ' + progress + '%, ' +
            'transparent 100%)'
        }
      }
    },
  },
  methods: {
    pauseTorrent() {
      this.$store.dispatch( 'pauseTorrent', this.torrent.hash )
        .catch( err => this.$store.dispatch( 'error', err ) );
    },

    resumeTorrent() {
      this.$store.dispatch( 'resumeTorrent', this.torrent.hash )
        .catch( err => this.$store.dispatch( 'error', err ) );
    },

    removeTorrent() {
      this.$store.dispatch( 'removeTorrent', [ this.torrent.hash ] )
        .catch( err => this.$store.dispatch( 'error', err ) );

      this.back();
    },

    back() {
      this.$router.back();
    }
  },
  mounted() {
    this.$store.dispatch( 'getTorrentStatus', this.torrent.hash );

    this.interval = setInterval( () => {
      this.$store.dispatch( 'getTorrentStatus', this.torrent.hash );
    }, 1000 );
  },
  beforeDestroy() {
    clearInterval( this.interval );
  },
}
</script>

<style lang="scss">
  .progress-bar {
    height: 6px;
    width: 100%;
  }

  .torrent-details {
    height: 100%;
    display: flex;

    flex-direction: column;
    justify-content: flex-start;

    background: #2c3e50;
  }

  .blue {
    height: fit-content;

    padding-top: 5px;
    padding-bottom: 5px;

    background: #526476 !important;
    color: white !important;

    font-weight: bold;

    span {
      word-break: break-all;
    }
  }
</style>