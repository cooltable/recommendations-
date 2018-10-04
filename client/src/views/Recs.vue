<script>
export default {
	name: "recs",
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
            <div class="Movies List">
                <h2 class="List__heading">Movies:</h2>
                <div class="Rec">
                    <img class="Rec__image" src="../assets/logo.png" alt="">
                    <hr>
                    <h3 class="Rec__Title">Brazil</h3>
                    <p class="Rec__description">The best movie ever</p>
                </div>
                <div class="Rec">
                    <img class="Rec__image" src="../assets/logo.png" alt="">
                    <hr>

                    <h3 class="Rec__Title">Rushmore</h3>
                    <p class="Rec__description">The second best movie ever</p>
                </div>
                <div class="Rec">
                    <img class="Rec__image" src="../assets/logo.png" alt="">
                    <hr>

                    <h3 class="Rec__Title">Spirited Away</h3>
                    <p class="Rec__description">The third best movie ever</p>
                </div>
            </div>

            <div class="Books List">
                <h2 class="List__heading">Books:</h2>
                <div class="Rec">
                    <img class="Rec__image" src="../assets/logo.png" alt="">
                    <hr>

                    <h3 class="Rec__Title">The Idiot</h3>
                    <p class="Rec__description">The best book ever</p>
                </div>
                <div class="Rec">
                    <img class="Rec__image" src="../assets/logo.png" alt="">
                    <hr>

                    <h3 class="Rec__Title">Pale Fire</h3>
                    <p class="Rec__description">The second best book ever</p>
                </div>
            </div>

            <div class="Music List">
                <h2 class="List__heading">Music:</h2>
                <div class="Rec">
                    <img class="Rec__image" src="../assets/logo.png" alt="">
                    <hr>

                    <h3 class="Rec__Title">Blood on the Tracks</h3>
                    <p class="Rec__description">The best album ever</p>
                </div>
                <div class="Rec">
                    <img class="Rec__image" src="../assets/logo.png" alt="">
                    <hr>

                    <h3 class="Rec__Title">Pink Moon</h3>
                    <p class="Rec__description">The second best album ever</p>
                </div>
                <div class="Rec">
                    <img class="Rec__image" src="../assets/logo.png" alt="">
                    <hr>

                    <h3 class="Rec__Title">The Hounds of Love</h3>
                    <p class="Rec__description">The third best album ever</p>
                </div>
                <div class="Rec">
                    <img class="Rec__image" src="../assets/logo.png" alt="">
                    <hr>

                    <h3 class="Rec__Title">Hunky Dory</h3>
                    <p class="Rec__description">The fourth best album ever</p>
                </div>
            </div>
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