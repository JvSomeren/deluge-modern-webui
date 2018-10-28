<template>
  <div class="container">
    <MenuBar></MenuBar>
    <TorrentList></TorrentList>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuBar from "@/components/MenuBar";
import TorrentList from "@/components/TorrentList";

export default {
  name: 'home',
  components: {
    MenuBar,
    TorrentList,
  },
  mounted() {
    this.$store.dispatch( 'getTorrentsStatus' );

    this.interval = setInterval( () => {
      this.$store.dispatch( 'getTorrentsStatus' );
    }, 1000 );
  },
  beforeDestroy() {
    clearInterval( this.interval );
  },
}
</script>

<style lang="scss">
  .container {
    height: 100%;
    display: flex;

    flex-direction: column;
  }
</style>
