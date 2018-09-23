<script>
import RegisterFormComp from '@/components/registerForm.vue';
import axios from 'axios';

export default {
  name: 'register',
  components: {
    RegisterFormComp,
  },
  methods: {
    register: function(username, password, first_name, last_name, email) {
      axios
        .post('http://localhost:8000/auth/login', {
          username,
          password,
          first_name,
          last_name,
          email,
        })
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
  <div class="register">
    <h1>SignUp</h1>
    <register-form-comp is-register v-on:submission="register" />
  </div>
</template>
