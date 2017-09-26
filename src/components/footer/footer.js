export default {
  name: 'footer',
  data() {
    return {
      subEmail: ''
    };
  },
  methods: {
    subscribe() {
      this.$validator.validateAll().then((result) => {
        if (!result) {
          this.$swal('Error', 'Please type your email and try again', 'error');
          return;
        }
        const data = {
          email: this.subEmail,
          type: 2
        };
        this.$http.post('newsletter/subscriptions', data)
          .then((res) => {
            if (res.body.error) {
              this.$swal('Error', res.body.error, 'error');
            } else {
              this.subEmail = '';
              this.$validator.clean();
              this.$swal('Ok', 'You are successfully Subscribed', 'success');
            }
          });
      });
    }
  }
};
