<script>
import RecRow from "../components/RecRow.vue";
import { mapState } from "vuex";
import lodash from "lodash";

export default {
	name: "recs",
	components: { RecRow },
	computed: mapState({
		recs: state => lodash.groupBy(state.recs, "type"),
		categories: state => Object.keys(lodash.groupBy(state.recs, "type")),
	}),
};
</script>

<template>
    <div class="Wrapper">
        <div class="Sidebar">
            <h3 class="Sidebar__header">Friends:</h3>
            <a class="Sidebar__friend" href="">Ash</a>
            <a class="Sidebar__friend" href="">Lauren</a>
            <a class="Sidebar__friend" href="">Liz</a>
        </div>

        <div class="Main">
            <RecRow v-for="category in categories" v-bind:key="category" v-bind:type="category" v-bind:items="recs[category]"></RecRow>
            <button class="Main__recButton">
                <p>R</p>
            </button>
        </div>
    </div>
</template>

<style scoped lang='scss'>
@import "../variables";

.Wrapper {
	display: flex;
}

.Sidebar {
	display: flex;
	flex-direction: column;
	width: 10%;
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
}

.Main__recButton p {
	margin-right: 8px;
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