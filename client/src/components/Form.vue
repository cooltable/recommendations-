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
          <li :key="error" v-for="error in errors">{{ error }}</li>
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
        <input :value='password2' @input="$emit('update:password2', $event.target.value)" class="input" type="password" placeholder="Repeat Password">
        <span class='border'></span>
      </div>
      <button class="button"><i class="material-icons">send</i><span>Submit</span></button>
    </form>
  </div>
</template>

<style scoped lang="scss">
@import '../variables';

.input {
  padding: 10px;
  display: block;
  width: 100%;
  border-radius: 3px;
  font-size: inherit;
  font-family: inherit;
  color: inherit;
  border: none;

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  &:focus {
    outline: none;

    & + .border::after {
      transform: scale(1);
    }
  }
}

.input-wrapper {
  position: relative;
}

.border {
  &,
  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: darken($color-white, 20%);
    border-radius: 30px;
  }

  &::after {
    content: '';
    background-color: $color-secondary;
    transform: scaleX(0);
    transition: all 0.4s;
  }
}

.button {
  border-radius: 3px;
  border: 1px solid $color-secondary;
  padding: 5px 10px;
  margin: 5px 0;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: $color-secondary;
  cursor: pointer;
  font-size: 14px;
  font-family: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: $color-secondary;
    color: $color-white;
  }

  .material-icons {
    margin-right: 5px;
    font-size: 18px;
  }
}
</style>