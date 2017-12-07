<template>
  <div class="nav-bar">
	  <div class="nav-bar__menu">
		  <i class="icon ion-ios-home-outline" id="home"></i>
		  <i class="icon ion-ios-compose-outline" id="info"></i>
		  <i class="icon ion-ios-briefcase-outline" id="project"></i>
		  <i class="icon ion-ios-person-outline" id="porfile"></i>
	  </div>
  </div>
</template>

<script>
export default {
  name: 'Nav-bar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav-bar{
	position: fixed;
	z-index: 90;;
	height: 100vh;
	width: 80px;
	top: 0;
	left: 0;
	background: #FEF2F2;
	box-shadow: 0px 5px 40px rgba(0,0,0,.1);
  }
  .nav-bar__menu{
	  position: absolute;
	  width: 100%;
	  height: 260px;
	  top: calc(50% - 130px);
  }
  .nav-bar__menu i{
		position: relative;
		width: 50px;
		height: 50px;
		border-radius: 50%;
	  display: block;
	  font-size: 1.7em;
	  text-align: center;
	  margin: 0 auto;
	  cursor: pointer;
		transition: all .3s;
		padding-top: 4px;
		color: #b2a2a2;
  }
	.nav-bar__menu i:hover{
		background: #e8d7d7;
		color: white;
		overflow: visible;
	}
</style>