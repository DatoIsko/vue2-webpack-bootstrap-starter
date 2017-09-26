<template>
  <div id="app">
    <v-navbar></v-navbar>
    <main class="bg-main">
      <router-view></router-view>
    </main>
    <v-footer></v-footer>
    <notifications animation-type="velocity" position="top left"></notifications>
  </div>
</template>
<script>
  /* ============
   * Entry Point
   * ============
   *
   * The entry point of the application
   */

  import VNavbar from '@/components/navbar';
  import VFooter from '@/components/footer';

  export default {
    /**
     * The name of the application.
     */
    name: 'fomo-app',

    /**
     * Components.
     */
    components: {
      VNavbar,
      VFooter
    },

    /**
     * Fires when the app has been mounted.
     */
    mounted() {
      // If the user is authenticated,
      // fetch the data from the API
      if (this.$store.state.auth.authenticated) {
        this.$store.dispatch('account/find');
      }
    },
  };
</script>
<style>
  body {
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .bg-main {
    width: 100%;
    min-height: 310px;
    background-image: url('./assets/img/background.png');
    background-repeat: no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
    background-color: #FFF;
    background-position: center bottom;
    z-index: 1;
    position: relative;
    padding-bottom: 110px;
  }
  @media screen and (max-width:767px){
    main {
      padding-bottom: 60px;
    }
  }
</style>
