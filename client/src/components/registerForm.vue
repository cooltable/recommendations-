<script>
export default {
  name: 'register-form-comp',
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
    checkForm: function(e) {
      this.errors = [];
      if (
        !username ||
        !password ||
        !password2 ||
        !firstname ||
        !lastname ||
        !email
      ) {
        this.errors.push('Please complete the required fields.');
      }
      if (password !== password2) {
        this.errors.push('The passwords do not match.');
      }
      if (
        username &&
        password &&
        firstname &&
        lastname &&
        email & (password === password2)
      )
        $emit('submission', username, password, firstname, lastname, email);
    },
  },
};
</script>

<template>
  <div>
    <form @submit.prevent="checkForm" class="form">
      <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>
      <div class="input-wrapper">
        <input v-model ='firstname' class="input" type="text" placeholder="First">
        <span class ='border'></span>
      </div>
      <div class="input-wrapper">
        <input v-model ='lastname' class="input" type="text" placeholder="Last">
        <span class ='border'></span>
      </div>
      <div class="input-wrapper">
        <input v-model ='email' class="input" type="email" placeholder="Email">
        <span class ='border'></span>
      </div>
      <div class="input-wrapper">
        <input v-model ='username' class="input" type="text" placeholder="Username">
        <span class ='border'></span>
      </div>
      <div class="input-wrapper">
        <input v-model='password' class="input" type="password" placeholder="Password">
        <span class ='border'></span>
      </div>
      <div class="input-wrapper">
        <input v-model='password2' class="input" type="password" placeholder=" Re-enter Password">
        <span class ='border'></span>
      </div>
      <button class="button">Submit</button>
    </form>
  </div>
</template>

