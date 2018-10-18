<script>
import Modal from '../components/Modal';
import RecButton from '../components/RecButton.vue';
import ContentSearch from './ContentSearch';
import { StarRating } from 'vue-rate-it';

export default {
  name: 'newContent',

  components: {
    Modal,
    StarRating,
    ContentSearch,
    RecButton,
  },

  data: function() {
    return {
      isSearch: true,
      showModal: false,
      title: '',
      type: '',
      toFriends: [],
      poster: '',
      rating: 0,

      description: '',
    };
  },
  methods: {
    handleSubmit: function() {
      console.log(this.toFriends);
      let to_idARR = this.toFriends.map(friend => {
        console.log(friend.id);
        return friend.id;
      });
      this.$store.dispatch('addRec', {
        title: this.title,
        description: this.description,
        type: this.type.type,
        rating: this.rating,
        to_idARR: to_idARR,
        image: this.poster,
      });
    },
    handleClose: function() {
      Object.assign(this.$data, this.$options.data.call(this));
    },
  },
};
</script>

<template>
  <div class="new-content">
    <!-- on click: all content slide to left, button change from yellow to red, text field appear on button
    sidebar get replaced by filter tool- default to movie (default to last thing user searched for)  -->
    <!-- <button class="Main__recButton" @click="showModal = true">
      <p>R</p>
    </button>

    <modal v-if="showModal" @close="handleClose">
      <h1 slot="header">New Req</h1>
      <div slot="body">

        
          <content-search v-if="isSearch" :title.sync="title" :toFriends.sync="toFriends"/>
            
          <div v-else>
          <form v-on:submit.prevent="handleSubmit">
            <p>Recommend {{title}} to {{tofriends.map(friend => friend.username)}}</p>
            <img :src="poster">
            <star-rating v-model="rating"></star-rating>
            <textarea v-model="description" placeholder="Description"></textarea>
            <input :disabled="!rating" value="Recommend" type="submit">
          </form>
          </div>
        

      </div>
    </modal> -->
    <div class="rec-search"> 
    <input v-model="title" placeholder="search" class="search"/>
    <rec-button :add="true"/>
    </div>
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

.rec-search {
  position: fixed;
  bottom: 40px;
  right: 40px;
  display: flex;
  align-items: center;
}

.search {
  font-size: 18px;
  padding: 8px;
  outline: none;
  border: 1px solid rgba(60, 60, 60, 0.26);
  border-radius: 4px;
  margin-right: -7px;
  caret-color: #cc4040;

  &::placeholder {
    color: #b9b9b9;
  }
}
</style>