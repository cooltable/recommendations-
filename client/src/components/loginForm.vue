<script>
export default {
  name: 'login-form-comp',
  data: function() {
    return {
      username: '',
      password: '',
    };
  },
};
</script>

<template>
  <div>
    <form v-on:submit.prevent="$emit('submission', username, password)" class="form">
      <div class="input-wrapper">
        <input v-model ='username' class="input" type="text" placeholder="Username">
        <span class ='border'></span>
      </div>
      <div class="input-wrapper">
        <input v-model='password' class="input" type="password" placeholder="Password">
        <span class ='border'></span>
      </div>
      <button class="button">Submit</button>
    </form>
  </div>
</template>

