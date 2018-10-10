<script>
import Rec from "./Rec.vue";
export default {
	name: "RecRow",
	props: ["type", "items"],
	components: { Rec },
};
</script>

<template>
    <div class='rowWrapper'>
        <h3>{{type}}</h3>
        <Rec v-for="item in items" v-bind:key="item.title" v-bind:rec="item"></Rec>
    </div>
</template>

