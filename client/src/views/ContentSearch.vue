<script>
import axios from 'axios';
import { mapState } from 'vuex';

export default {
  name: 'contentSearch',
  props: ['title', 'toFriends'],
  computed: mapState({
    friends: state => state.friends,
    types: state => state.types,
  }),
  data: function() {
    return {
      type: '',
    };
  },
  methods: {
    handleSearch: function() {
      if (this.type === 'movie' || this.type === 'series') {
        let search = this.title.replace(/\s/g, '+');
        axios
          .get(
            `http://www.omdbapi.com/?s=${search}&type=${
              this.type
            }&apikey=30939ebf`,
          )
          .then(
            response => console.log(response.data),
            // ((this.poster = response.data.Poster)),
            // (this.isSearch = false)
          );
      }
    },
  },
};
</script>

<template>
  <form v-on:submit.prevent="handleSearch">
  <div class="row">
    <p>Recommend a </p>
    <v-select class="type" :value="type" :options="types" label="type" ></v-select>
  </div>
  <div class="row">
    <p>to</p>
    <v-select multiple :value="toFriends" :options="friends" label="username"></v-select>
  </div>
  <div class="row">
    <input v-if="type" class="input" :value="title" placeholder="Title...">
    <input class="search" v-if="title" @click.prevent="handleSearch" value="Search" type="submit">
  </div>
  </form>
</template>

<style scoped lang='scss'>
@import '../variables';

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
</style>