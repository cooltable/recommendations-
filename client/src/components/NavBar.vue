<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'NavBar',
  mounted: function() {
    let user = JSON.parse(localStorage.getItem('user'));
    let token = localStorage.getItem('token');
    console.log(user);
    if (user) {
      this.$store.dispatch('getRecs', { token, user });
    }
  },
  computed: mapState({
    loggedIn: state => state.loggedIn,
    user: state => state.user,
  }),
  methods: mapActions(['logOut']),
};
</script>

<template>
  <div class="nav">
      <div class="nav-brand">
        <router-link to="/">
          <h2 class="nav__rec">Recs</h2>
        </router-link>
      </div>
			<div v-if="loggedIn" class="nav__links">
				
				<router-link to="/profile" class="nav__link">Profile</router-link>
      	<!-- <router-link to="/send" class="nav__link">Send Recommnedation</router-link> -->
      	<router-link  to="/recs" class="nav__link">Your Recs</router-link>
				<a @click.prevent="logOut">Log Out {{user.username}}</a>
			</div>
			<div v-else class="nav__links">
      <router-link  to="/register" class="nav__link">Sign Up</router-link>
      <router-link  to="/login" class="nav__link">Sign In</router-link>
			</div>
      
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../variables';
.nav {
  display: flex;
  align-items: center;
  padding: 3rem 0;
  background-color: $color-primary;
  color: $color-white;

  .nav__rec {
    display: inline;
    font-family: Charmonman;
    font-weight: 700;
    font-size: 40px;
    margin-left: 40px;
    &:hover {
      color: $color-secondary;
    }
  }

  .nav__links {
    margin-right: 30px;
  }

  .nav__link {
    &:hover {
      color: $color-secondary;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    font-size: inherit;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 2rem;
    }

    &:hover {
      color: teal;
    }
  }

  &-brand {
    flex-grow: 1;
  }
}
</style>
