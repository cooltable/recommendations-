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
        this.$emit(
          'submission',
          this.username,
          this.password,
          this.firstname,
          this.lastname,
          this.email,
        );
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <form @submit.prevent="checkForm" class="form">
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </p>
      <div class="input-wrapper">
        <input v-model='firstname' class="input" type="text" placeholder="First">
        <span class='border'></span>
      </div>
      <div class="input-wrapper">
        <input v-model='lastname' class="input" type="text" placeholder="Last">
        <span class='border'></span>
      </div>
      <div class="input-wrapper">
        <input v-model='email' class="input" type="email" placeholder="Email">
        <span class='border'></span>
      </div>
      <div class="input-wrapper">
        <input v-model='username' class="input" type="text" placeholder="Username">
        <span class='border'></span>
      </div>
      <div class="input-wrapper">
        <input v-model='password' class="input" type="password" placeholder="Password">
        <span class='border'></span>
      </div>
      <div class="input-wrapper">
        <input v-model='password2' class="input" type="password" placeholder=" Re-enter Password">
        <span class='border'></span>
      </div>
      <button class="button">Submit</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
@import '../variables';

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  .input {
    padding: 5px 10px;
    margin: 5px 0;
  }

  .button {
    border-radius: 2px;

    border: 1px solid $color-secondary;
    padding: 5px 10px;
    margin: 5px 0;
    width: 100%;

    text-transform: uppercase;
    letter-spacing: 2px;
    color: $color-secondary;
  }
}
</style>