<script>
import Modal from '../components/Modal';
import axios from 'axios';
import { mapState } from 'vuex';
import { StarRating } from 'vue-rate-it';

export default {
  name: 'newContent',

  components: {
    Modal,
    StarRating,
  },
  computed: mapState({
    friends: state => state.friends,
    types: state => state.types,
  }),
  data: function() {
    return {
      isSearch: true,
      showModal: false,
      title: '',
      type: '',
      tofriends: [],
      poster: '',
      rating: 0,

      description: '',
    };
  },
  methods: {
    handleSubmit: function() {
      console.log(this.tofriends);
      let to_idARR = this.tofriends.map(friend => {
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
    handleSearch: function() {
      if (this.type.type === 'movie') {
        let movie = this.title.replace(/\s/g, '+');
        axios
          .get(`http://www.omdbapi.com/?t=${movie}&apikey=30939ebf`)
          .then(
            response => (
              (this.poster = response.data.Poster), (this.isSearch = false)
            ),
          );
      }
    },
    handleClose: function() {
      Object.assign(this.$data, this.$options.data.call(this));
    },
  },
};
</script>

<template>
  <div class="new-content">
    <button class="Main__recButton" @click="showModal = true">
      <p>R</p>
    </button>

    <modal v-if="showModal" @close="handleClose">
      <h1 slot="header">New Req</h1>
      <div slot="body">

        <form v-on:submit.prevent="handleSubmit">
          <div v-if="isSearch">
            <div class="row">
              <p>Recommend a </p>
              <v-select class="type" v-model="type" :options="types" label="type"></v-select>
            </div>
            <div class="row">
              <p>to</p>
              <v-select multiple v-model="tofriends" :options="friends" label="username"></v-select>
            </div>
            <div class="row">
              <input v-if="type" class="input" v-model="title" placeholder="Title...">
              <button class="search" v-if="title" @click.prevent="handleSearch" >Go</button>
            </div>
          </div>
          <div v-else>
            <p>Recommend {{title}} to {{tofriends.map(friend => friend.username)}}</p>
            <img :src="poster">
            <star-rating v-model="rating"></star-rating>
            <textarea v-model="description" placeholder="Description"></textarea>
            <input :disabled="!rating" value="Recommend" type="submit">
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
  // justify-content: center;
  margin: 5px 0;
  p {
    padding-right: 5px;
  }
}

.search {
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 1px solid rgba(60, 60, 60, 0.26);
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 300;
  color: rgba(60, 60, 60, 0.8);
  margin-bottom: 5px;
  text-align: center;
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