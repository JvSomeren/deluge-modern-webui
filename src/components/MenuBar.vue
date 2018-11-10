<template>
  <header class="menu-bar">
    <!-- icons for adding torrent, remove torrent, pausing all torrents and resuming all torrents -->
    <MenuButton icon="add" text="Add" @click.native="addTorrent"></MenuButton>
    <MenuButton icon="pause" text="Pause all" @click.native="pauseAllTorrents"></MenuButton>
    <MenuButton icon="play_arrow" text="Resume all" @click.native="resumeAllTorrents"></MenuButton>
    <MenuButton icon="remove" text="Remove all" @click.native="removeAllTorrents"></MenuButton>
    <MenuButton icon="sync" text="Movies" @click.native="refreshLibrary( 1 )"></MenuButton>
    <MenuButton icon="sync" text="TV Shows" @click.native="refreshLibrary( 2 )"></MenuButton>
  </header>
</template>

<script>
import MenuButton from '@/components/MenuButton'

export default {
  name: "MenuBar",
  components: {
    MenuButton
  },
  methods: {
    addTorrent() {
      this.$router.push( { name: 'add' } );
    },

    pauseAllTorrents() {
      this.$store.dispatch( 'pauseAllTorrents' )
        .catch( err => this.$store.dispatch( 'error', err ) );
    },

    resumeAllTorrents() {
      this.$store.dispatch( 'resumeAllTorrents' )
        .catch( err => this.$store.dispatch( 'error', err ) );
    },

    removeAllTorrents() {
      this.$store.dispatch( 'removeAllTorrents' )
        .catch( err => this.$store.dispatch( 'error', err ) );
    },

    refreshLibrary( libraryId ) {
      this.$store.dispatch( 'refreshLibrary', libraryId )
        .catch( err => this.$store.dispatch( 'error', err ) );
    },
  }
}
</script>

<style lang="scss">

</style>