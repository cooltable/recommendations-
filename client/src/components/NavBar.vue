<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'NavBar',
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
          <h2>Recommendations</h2>
        </router-link>
      </div>
			<div v-if="loggedIn">
				
				<router-link to="/profile">Profile</router-link>
      	<router-link to="/send">Send Recommnedation</router-link>
				<a @click.prevent="logOut">Log Out {{user.username}}</a>
			</div>
			<div v-else>
      <router-link  to="/register">Sign Up</router-link>
      <router-link  to="/login">Sign In</router-link>
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
