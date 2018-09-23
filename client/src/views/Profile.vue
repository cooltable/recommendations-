<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'profile',
  computed: mapState({
    user: state => state.user,
  }),
};
</script>

<template>
  <div class="profile">
    <h1>{{user.first_name}}</h1>
  </div>
</template>
