<script>
  export default {
    name: 'login-form-comp',
    data: function () {
      return {
        errors: [],
        username: '',
        password: '',
      };
    },
    methods: {
      checkForm: function (e) {
        this.errors = [];
        if (!this.username || !this.password) {
          this.errors.push('Please complete the required fields.');
        }

        if (this.username && this.password)
          this.$emit('submission', this.username, this.password);
      },
    },
  };
</script>

<template>
  <div class="wrapper">
    <form v-on:submit.prevent="checkForm" class="form">
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </p>
      <div class="input-wrapper">
        <input v-model='username' class="input" type="text" placeholder="Username">
        <span class='border'></span>
      </div>
      <div class="input-wrapper">
        <input v-model='password' class="input" type="password" placeholder="Password">
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