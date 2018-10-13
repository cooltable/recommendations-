<script>
import Modal from '../components/Modal';
import { mapState } from 'vuex';
export default {
  name: 'newContent',

  components: {
    Modal,
  },
  computed: mapState({
    friends: state => state.friends,
  }),
  data: function() {
    return {
      showModal: false,
      title: '',
      type: '',
      tofriends: [],
      types: ['movie', 'book', 'album'],
    };
  },
  methods: {
    handleSubmit: function() {},
  },
};
</script>

<template>
  <div class="new-content">
    <button class="Main__recButton" @click="showModal = true">
      <p>R</p>
    </button>
    
    <modal v-if="showModal" @close="showModal = false">
      <h1 slot="header">New Req</h1>
      <div slot="body">
        
        <form v-on:submit.prevent="handleSubmit">
          <div class="row">
          <p>Recommend a </p>
         <v-select class="type" v-model="type" :options="types"></v-select>  
          </div><div class="row">
        <p>to</p>
         <v-select multiple v-model="tofriends" :options="friends" label="username"></v-select>
         </div>
         <div class="row">
      <input class="input" v-model="title" placeholder="Title...">
      <input class="submit" type="submit" value="Go">
      </div>
      </form>
      
      </div>
    </modal>
  </div>
</template>

<style scoped lang='scss'>
@import '../variables';

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.Main__recButton {
  display: flex;
  justify-content: center;
  align-items: cetner;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: $color-secondary;
  height: 100px;
  width: 100px;
  position: fixed;
  bottom: 40px;
  right: 40px;
  color: $color-white;
  text-align: center;
  font-family: Charmonman;
  font-size: 30px;
  font-weight: 700;
  cursor: pointer;
}

.Main__recButton p {
  margin-right: 8px;
}

.type {
  width: 200px;
}

.row {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 5px 0;
  p {
    padding-right: 5px;
  }
}

.input {
  font-size: 18px;
  padding: 4px;
  border: 1px solid rgba(60, 60, 60, 0.26);
  border-radius: 4px;
  margin-top: 15px;
  width: 75%;
}

.submit {
  height: 100%;
  padding: 10px;
}
</style>