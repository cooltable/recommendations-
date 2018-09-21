<template>
  <div class="nav">
      <div class="nav-brand">
        <router-link to="/">
          <h2>Recommendations</h2>
        </router-link>
      </div>
      <router-link to="/register">Sign Up</router-link>
      <router-link to="/login">Sign In</router-link>
      <router-link to="/profile">Profile</router-link>
      <router-link to="/send">Send Recommnedation</router-link>
  </div>
</template>

<script>
export default {
	name: "NavBar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../variables";
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
