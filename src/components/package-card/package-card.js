export default {
  name: 'package-card',
  props: ['package'],
  data() {
    return {
      isWish: false
    };
  },
  methods: {
    toggleWishList(id) {
      if (this.package.wish.id) {
        const wid = this.package.wish.id;
        this.$http.delete(`wish-list/${wid}`)
          .then((res) => {
            if (res.body.error) {
              this.$notify({
                type: 'error',
                title: 'Error',
                text: `${res.body.message}`,
                duration: 1000
              });
              return;
            }
            this.$notify({
              type: 'success',
              title: 'Deleted from Wish List',
              text: 'Package successfully deleted from your wish list.',
              duration: 1000
            });
            this.isWish = false;
            this.package.wish = {};
          })
          .catch((err) => {
            console.log('error', err);
          });
      } else {
        const data = {
          email: localStorage.getItem('ft_email'),
          package_id: id
        };
        this.$http.post('wish-list', data)
          .then((res) => {
            if (res.body.error) {
              this.$notify({
                type: 'error',
                title: 'Error',
                text: `${res.body.message}`,
                duration: 1000
              });
              return;
            }
            this.$notify({
              type: 'success',
              title: 'Added Wish List',
              text: 'Package successfully added to your wish list.',
              duration: 1000
            });
            this.package.wish = {
              id: res.body.id,
              package_id: id
            };
            this.isWish = true;
          })
          .catch((err) => {
            console.log('error', err);
          });
      }
    }
  },
  created() {
    if (this.package.wish) {
      if (this.package.wish.id) {
        this.isWish = true;
      } else {
        this.isWish = false;
      }
    }
  }
};
