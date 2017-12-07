<template>
  <div class="body">
		<div class="banner-ppal"></div>

		<div class="banner-info">
			<div class="banner-info__img">
				<img src="../assets/macbook_air.png" alt="">
			</div>
			<div class="banner-info__text">
				<h3>DESARROLLO WEB FRONTEND</h3>
				<h5>PAGINAS WEB</h5>
				<p>Desarrollamos paginas web con elegantes diseños y hechos a tu medida</p>
			</div>
		</div>

		<div class="banner-project">
			<div class="banner-project__target"></div>
			<div class="banner-project__target"></div>
			<div class="banner-project__target"></div>
			<div class="banner-project__target"></div>
			<div class="banner-project__target"></div>
			<div class="banner-project__target"></div>
		</div>

		<div class="banner-perfil">

		</div>
  </div>

</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.body{
		width: 100vw;
		padding-left: 80px;
		position: relative;
	}
  .banner-ppal{
		width: 100%;
		height: 100vh;
		background-image: url('../assets/fondo.jpg');
		background-size: cover;
		position: relative;
		-webkit-filter: contrast(110%) brightness(110%) saturate(130%);
		filter: contrast(110%) brightness(110%);
  }
  .banner-ppal::before{
		content: "";
		display: block;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		position: absolute;
		pointer-events: none;
		mix-blend-mode: screen;
		background: rgba(243, 106, 188, 0.3);
		box-shadow: inset 0px -100px 100px rgba(0,0,0,.5);
  }

	.banner-info{
		position: relative;
		width: 100%;
		height: 100vh;
		background: #fffcfa;
		padding-top: 50px;
		overflow: hidden;
	}
	.banner-info::before{
		position: absolute;
		content: "";
		width: 1700px;
		height: 1700px;
		border-radius: 50%;
		top: -950px;
		right: -600px;
		background: #FEF2F2;
	}
	.banner-info__img{
		position: absolute;
		width: 80%;
		margin-left: 50px;
		z-index: 10;;
	}
	.banner-info__img img{
		width: 100%;
	}
	.banner-info__text{
		position: absolute;
		width: 500px;
		height: 500px;
		top: 100px;
		right: 100px;
	}
	.banner-info h3{
		font-size: 3em;
		font-weight: 700;
	}
	.banner-info h5{
		font-size: 1.7em;
		margin: 50px 0 10px 0;
	}
	.banner-info p{
		font-size: 1.3em;
	}

	.banner-project{
		width: 100%;
		min-height: 100vh;
		padding: 40px 0;
		background: #fffcfa;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.banner-project__target{
		width: 300px;
		height: 400px;
		margin: 20px 40px;
		background: #fffcfa;
		box-shadow: 0px 0px 20px rgba(0,0,0,.1);
		border-radius: 10px;
		transition: all .3s;
	}
	.banner-project__target:hover{
		box-shadow: 0px 0px 30px rgba(0,0,0,.15);
	}

	.banner-perfil{
		position: relative;
		overflow: hidden;
		width: 100%;
		height: 100vh;
		background: #fffcfa;
	}
	.banner-perfil::before{
		position: absolute;
		content: "";
		width: 1500px;
		height: 1500px;
		border-radius: 50%;
		bottom: -700px;
		left: -300px;
		background: #FEF2F2;
	}
</style>