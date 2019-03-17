<template>
  <div class="container">
    <header class="menu-bar">
      <MenuButton icon="arrow_back" text="Back" @click.native="back"></MenuButton>

      <MenuButton icon="add" text="Add" @click.native="addTorrent" class="justify-self-end"></MenuButton>
    </header>
    <div class="torrent-add">
      <textarea rows="5" class="torrent" placeholder="MagnetUri"
                @change="onChange"
                v-model="magnetUri"></textarea>

      <div class="torrent path">
        <pre>{{ extendedPath }}</pre>
      </div>

      <select class="torrent"
              v-model="path.base">
        <option value=""
                disabled>Pick destination
        </option>
        <option v-for="(destination, index) in destinations"
                :key="index"
                :value="destination">{{ destination }}
        </option>
      </select>

      <select class="torrent"
              v-model="path.show"
              v-if="path.base === '/tv-shows'">
        <option value=""
                disabled>Pick series
        </option>
        <option v-for="(show, index) in destinationsTvShows"
                :key="index"
                :value="show">{{ show }}
        </option>
        <option value="new">New series</option>
      </select>

      <input class="torrent"
             v-model="newShow"
             v-if="path.show === 'new'">

      <select class="torrent"
              v-model="path.season"
              v-if="path.show !== ''">
        <option value=""
                disabled>Pick season
        </option>

        <option v-for="n in 9"
                :key="n"
                :value="'/season-' + n">/season-{{ n }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MenuButton from '@/components/MenuButton'

export default {
  name: "TorrentAdd",
  components: { MenuButton },
  data: () => ({
    magnetUri: '',
    path: {
      base: '',
      show: '',
      season: ''
    },
    newShow: '',
  }),
  computed: {
    extendedPath() {
      let path = this.path.base;

      if ( this.path.base === '/tv-shows' ) {
        if ( this.path.show === 'new' )
          path += '/' + this.newShow + this.path.season;
        else
          path += this.path.show + this.path.season;
      }

      return path;
    },

    fullPath() {
      const basePath = '/mnt/ext-hdd/plex';

      return basePath + this.extendedPath;
    },

    torrent() {
      const matches = this.magnetUri.match( /dn=(.+)s(\d{1,2})e(\d{1,2})/i );

      if ( !matches )
        return false;

      return {
        show: matches[1].replace( /\./g, ' ' ).trim(),
        season: Number(matches[2]),
        episode: Number(matches[3])
      };
    },

    ...mapState( [
      'destinations',
      'destinationsTvShows',
    ] ),
  },
  methods: {
    onChange() {
      if ( !this.torrent )
        return;

      if ( this.destinationsTvShows.indexOf( '/' + this.torrent.show ) !== -1 )
        this.path.show = '/' + this.torrent.show;

      this.path.season = '/season-' + this.torrent.season;
    },

    addTorrent() {
      if ( this.magnetUri === '' )
        return;

      if ( this.path.base === '' )
        return;
      else if ( this.path.base === '/tv-shows' ) {
        if ( this.path.show === '' )
          return;

        if ( this.path.show === 'new' && this.newShow === '' )
          return;
      }

      this.$store.dispatch( 'addTorrent', [ this.magnetUri, this.fullPath ] );
      this.back();
    },

    back() {
      this.$router.back();
    },
  },
  mounted() {
    this.$store.dispatch( 'getDestinations' );
  }
}
</script>

<style lang="scss">

</style>