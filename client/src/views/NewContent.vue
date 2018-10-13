<script>
import Modal from '../components/Modal';
export default {
  name: 'newContent',

  components: {
    Modal,
  },
  data: function() {
    return {
      showModal: false,
      title: '',
    };
  },
};
</script>

<template>
  <div class="new-content">
    <button class="Main__recButton" @click="showModal = true">
      <p>R</p>
    </button>
    
    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">Recommend</h3>
    </modal>
  </div>
</template>

<style scoped lang='scss'>
@import '../variables';
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
</style>