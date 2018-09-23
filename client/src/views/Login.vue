<script>
import LoginFormComp from '@/components/loginForm.vue';
import axios from 'axios';

export default {
  name: 'login',
  components: {
    LoginFormComp,
  },
  methods: {
    login: function(username, password) {
      axios
        .post('http://localhost:8000/auth/login', { username, password })
        .then(response => {
          console.log(response);
          localStorage.setItem('token', response.data.token);
          this.$store.dispatch('logIn', response.data.user);
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
};
</script>

<template>
  <div class="login">
    <h1>Login</h1>
    <login-form-comp v-on:submission="login"/>
  </div>
</template>
