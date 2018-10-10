<script>
export default {
  name: 'login-form-comp',
  props: [
    'username',
    'password',
    'firstname',
    'lastname',
    'email',
    'errors',
    'isRegister',
    'password2',
  ],
};
</script>

<template>
  <div class="wrapper">
    <form v-on:submit.prevent="$emit('handle-submit')" class="form">
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <!-- <li v-for="error in errors">{{ error }}</li> -->
        </ul>
      </p>
      <div v-if="isRegister" class="input-wrapper">
        <input :value='firstname' @input="$emit('update:firstname', $event.target.value)" class="input" type="text" placeholder="First">
        <span class='border'></span>
      </div>
      <div v-if="isRegister" class="input-wrapper">
        <input :value='lastname' @input="$emit('update:lastname', $event.target.value)" class="input" type="text" placeholder="Last">
        <span class='border'></span>
      </div>
      <div v-if="isRegister" class="input-wrapper">
        <input :value='email' @input="$emit('update:email', $event.target.value)" class="input" type="email" placeholder="Email">
        <span class='border'></span>
      </div>
      <div class="input-wrapper">
        <input :value='username' @input="$emit('update:username', $event.target.value)" class="input" type="text" placeholder="Username">
        <span class='border'></span>
      </div>
      <div class="input-wrapper">
        <input :value='password' @input="$emit('update:password', $event.target.value)" class="input" type="password" placeholder="Password">
        <span class='border'></span>
      </div>
      <div v-if="isRegister" class="input-wrapper">
        <input :value='password2' @input="$emit('update:password2', $event.target.value)" class="input" type="password" placeholder="Password">
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