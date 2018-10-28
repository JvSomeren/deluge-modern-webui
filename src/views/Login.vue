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
  main {
    height: 100%;
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: #2c3e50;
  }

  .login-modal {
    height: 140px;
    width: 250px;
    display: flex;

    flex-direction: column;
    justify-content: space-between;

    padding: 5px;

    border-top: #42b983 5px solid;
    border-radius: 3px;
    background: #fff;
    color: rgba(0, 0, 0, 0.85);

    h2 {
      margin: 0;
      margin-top: 0.4rem;
    }

    input {
      height: 1.5rem;

      padding-left: 0.3rem;

      border: #42b983 1px solid;
      border-radius: 2px;

      font-size: 1rem;

      outline: none;

      &:focus {
      }
    }

    button {
      padding: 5px;

      background: #42b983;
      color: white;

      border-radius: 2px;

      font-size: 1rem;

      outline: none;
    }
  }
</style>