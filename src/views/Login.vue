<template>
  <main>
    <form class="login-modal" @submit.prevent="login">
      <h2>Login</h2>

      <input type="password" placeholder="Password" v-model="password">

      <button type="submit">Login</button>
    </form>
  </main>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    password: ''
  }),
  methods: {
    login() {
      this.$store.dispatch( 'login', this.password )
        .then( () => {
          this.$router.push( { name: 'home' } );
        } )
        .catch( err => this.$store.dispatch( 'error', err ) );
    }
  },
  mounted() {
    this.$store.dispatch( 'checkSession' )
      .then( (res) => {
        if(res)
          this.$router.push( { name: 'home' } );
      } )
      .catch( err => this.$store.dispatch( 'error', err ) );
  }
}
</script>

<style lang="scss">

</style>