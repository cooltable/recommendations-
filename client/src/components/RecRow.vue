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
		<div class="title">
        <h3>{{type}}s</h3>
		</div>
		<div class="recs">
        <Rec class="rec" v-for="item in items" v-bind:key="item.title" v-bind:rec="item"></Rec>
		</div>
    </div>
</template>

<style scoped lang='scss'>
.rowWrapper {
	margin: 40px;

	.title {
		padding-bottom: 20px;
		h3 {
			text-align: left;
			text-transform: uppercase;
		}
	}
}

.recs {
	display: flex;

	.rec {
		margin-right: 50px;
		max-width: 220px;
		border: 1px solid lightgray;
		border-radius: 5px;
		padding: 10px;
	}
}
</style>


