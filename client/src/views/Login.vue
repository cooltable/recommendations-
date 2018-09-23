<script>
import FormComp from '@/components/Form.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'login',
  components: {
    FormComp,
  },
  data: function() {
    return {
      errors: [],
      username: '',
      password: '',
    };
  },
  methods: {
    logInUser() {
      this.errors = [];
      if (!this.username || !this.password) {
        this.errors.push('Please complete the required fields.');
      }
      if (this.username && this.password)
        this.$store.dispatch('logIn', {
          username: this.username,
          password: this.password,
        });
    },
  },
};
</script>

<template>
  <div class="login">
    <h1>Login</h1>
    <form-comp 
      :username.sync="username" 
      :password.sync="password" 
      v-on:handle-submit="logInUser" 
      :errors="errors"
    />
  </div>
</template>
