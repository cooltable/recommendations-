<script>
export default {
	name: "Rec",
	props: ["rec"],
};
</script>

<template>
  <div class="Rec">
    <img class="Rec__image" src="../assets/logo.png" alt="">
    <hr>
    <h3 class="Rec__Title">{{rec.title}}</h3>
    <p class="Rec__description">{{rec.description}}</p>
  </div>
</template>
