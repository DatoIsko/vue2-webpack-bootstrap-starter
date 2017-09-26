export default {
  name: 'nav',
  data() {
    return {
      isAuth: null
    };
  },
  created() {
    this.isAuth = this.$auth.isAuthenticated();
  },
  methods: {
    logout() {
      this.$auth.destroyToken();
      localStorage.clear();
      location.href = '/fomo/auth';
    }
  }
};
