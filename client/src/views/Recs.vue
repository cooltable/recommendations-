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
                    <h3 class="Rec__Title">Brazil</h3>
                    <p class="Rec__description">The best movie ever</p>
                </div>
                <div class="Rec">
                    <img class="Rec__image" src="../assets/logo.png" alt="">
                    <h3 class="Rec__Title">Rushmore</h3>
                    <p class="Rec__description">The second best movie ever</p>
                </div>
                <div class="Rec">
                    <img class="Rec__image" src="../assets/logo.png" alt="">
                    <h3 class="Rec__Title">Spirited Away</h3>
                    <p class="Rec__description">The third best movie ever</p>
                </div>
            </div>

            <div class="Books List">
                <h2 class="List__heading">Books:</h2>
                <div class="Rec">
                    <img class="Rec__image" src="../assets/logo.png" alt="">
                    <h3 class="Rec__Title">The Idiot</h3>
                    <p class="Rec__description">The best book ever</p>
                </div>
                <div class="Rec">
                    <img class="Rec__image" src="../assets/logo.png" alt="">
                    <h3 class="Rec__Title">Pale Fire</h3>
                    <p class="Rec__description">The second best book ever</p>
                </div>
            </div>

            <div class="Music List">
                <h2 class="List__heading">Music:</h2>
                <div class="Rec">
                    <img class="Rec__image" src="../assets/logo.png" alt="">
                    <h3 class="Rec__Title">Blood on the Tracks</h3>
                    <p class="Rec__description">The best album ever</p>
                </div>
                <div class="Rec">
                    <img class="Rec__image" src="../assets/logo.png" alt="">
                    <h3 class="Rec__Title">Pink Moon</h3>
                    <p class="Rec__description">The second best album ever</p>
                </div>
                <div class="Rec">
                    <img class="Rec__image" src="../assets/logo.png" alt="">
                    <h3 class="Rec__Title">The Hounds of Love</h3>
                    <p class="Rec__description">The third best album ever</p>
                </div>
                <div class="Rec">
                    <img class="Rec__image" src="../assets/logo.png" alt="">
                    <h3 class="Rec__Title">Hunky Dory</h3>
                    <p class="Rec__description">The fourth best album ever</p>
                </div>
            </div>
        <div class="Main__recButton">R</div>
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
}

.Main__recButton {
	border-radius: 50%;
	background-color: $color-secondary;
	height: 70px;
	width: 70px;
	position: fixed;
	bottom: 40px;
	right: 40px;
	color: $color-white;
	text-align: center;
	font-family: Charmonman;
	font-size: 30px;
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
	&:not(:last-child) {
		margin-right: 40px;
	}
}
</style>



