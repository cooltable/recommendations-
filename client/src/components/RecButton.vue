<script>
export default {
  name: 'RecButton',
  props: ['add'],
  data: function() {
    return {
      addRec: 'add-rec',
      content: 'content',
      main: 'Main__recButton',
    };
  },
};
</script>

<template>
  <button v-bind:class="[main, add ? addRec : content ]" @click="showModal = true">
    <p>R</p>
  </button>
</template>


<style scoped lang="scss">
@import '../variables';

.Main__recButton {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  color: $color-white;
  text-align: center;
  font-family: Charmonman;
  font-size: 30px;
  font-weight: 700;
  cursor: pointer;

  p {
    margin-right: 8px;
  }
}

.add-rec {
  transform: scaleX(-1);
  filter: FlipH;
  background-color: #cc4040;
}

.content {
  background-color: $color-secondary;
  position: fixed;
  bottom: 40px;
  right: 40px;
}
</style>