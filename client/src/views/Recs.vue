<script>
import RecRow from '../components/RecRow.vue';
import RecButton from '../components/RecButton.vue';
import NewContent from './NewContent.vue';
import { mapState } from 'vuex';
import lodash from 'lodash';

export default {
  name: 'recs',
  components: { RecRow, NewContent, RecButton },

  computed: mapState({
    recs: state => lodash.groupBy(state.recs, 'type'),
    categories: state => Object.keys(lodash.groupBy(state.recs, 'type')),
    friends: state => state.friends,
  }),
};
</script>

<template>
    <div class="Wrapper">
        <div class="Sidebar">
            <h3 class="Sidebar__header">Friends:</h3>
						<div v-for="friend in friends" v-bind:key="friend.id">
							<a class="Sidebar__friend" href="">{{friend.username}}</a>
						</div>
            <!-- <a class="Sidebar__friend" href="">Ash</a>
            <a class="Sidebar__friend" href="">Lauren</a>
            <a class="Sidebar__friend" href="">Liz</a> -->
        </div>

        <div class="Main">
            <RecRow v-for="category in categories" v-bind:key="category" v-bind:type="category" v-bind:items="recs[category]"></RecRow>
						<!-- <new-content/> -->
            <router-link to="/send"><rec-button /></router-link>
            	
            
            <!-- <button class="Main__recButton" @click="showModal = true">
                <p>R</p>
            </button> -->
						
        </div>
    </div>
</template>

<style scoped lang='scss'>
@import '../variables';

.Wrapper {
  display: flex;
}

.Sidebar {
  display: flex;
  flex-direction: column;
  width: 10%;
  height: 100vh;
  background-color: $color-primary;
}

.Sidebar__header {
  color: $color-white;
  margin-left: 15px;
}

.Sidebar__friend {
  margin-left: 30px;
}

.Sidebar__friend {
  text-decoration: none;
  color: $color-white;

  &:hover {
    color: $color-secondary;
  }
}

.Main {
  margin-top: 20px;
}

.List {
  display: flex;

  &:not(:last-child) {
    margin-bottom: 40px;
  }
}

.List__heading {
  margin: 10px 40px 10px 10px;
  width: 100px;
}

.Rec {
  border: 1px solid gray;
  border-radius: 4px;
  padding: 15px;

  .Rec__Title {
    margin-top: 10px;
  }

  &:not(:last-child) {
    margin-right: 40px;
  }
}
</style>