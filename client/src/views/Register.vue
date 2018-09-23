<script>
import FormComp from '@/components/Form.vue';
import axios from 'axios';

export default {
  name: 'register',
  components: {
    FormComp,
  },
  data: function() {
    return {
      errors: [],
      username: '',
      password: '',
      password2: '',
      firstname: '',
      lastname: '',
      email: '',
    };
  },
  methods: {
    register: function(e) {
      this.errors = [];
      if (
        !this.username ||
        !this.password ||
        !this.password2 ||
        !this.firstname ||
        !this.lastname ||
        !this.email
      ) {
        this.errors.push('Please complete the required fields.');
      }
      if (this.password !== this.password2) {
        this.errors.push('The passwords do not match.');
      }
      if (
        this.username &&
        this.password &&
        this.firstname &&
        this.lastname &&
        this.email &&
        this.password === this.password2
      )
        this.$store.dispatch('signUp', {
          username: this.username,
          password: this.password,
          first_name: this.firstname,
          last_name: this.lastname,
          email: this.email,
        });
    },
  },
};
</script>

<template>
  <div class="register">
    <h1>SignUp</h1>
    <form-comp 
      :username.sync="username" 
      :password.sync="password" 
      :password2.sync="password2"
      :firstname.sync="firstname"
      :lastname.sync="lastname"
      :email.sync="email"
      v-on:handle-submit="register" 
      :errors="errors"
      :is-register="true"
    />
    
  </div>
</template>
