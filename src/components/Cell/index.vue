<template>
	<div class="cell-container" style="styleObject">
		<img class="cell-avator" :src="avator" v-if="avator">
		<div class="cell-detail">
			<p class="cell-main"> {{ main }} </p>
			<p class="cell-sex">
				<i class="cell-level">{{ level }}</i>
			</p>
			<p class="cell-sup"> {{ sup }} </p>
		</div>
		<span class="cell-num"> {{ num }} </span>
	</div>
</template>
<script>
	export default({
		name: 'cell',
		props: {
			type: {

			},
			avator: '',
			main: '',
			sup: '',
			num: '',
			sex: '',
			level: ''
		},
		computed: {
			// styleObject: {
			// 	return {
			// 		'height': '100px'
			// 	}
			// }
		}
	})

</script>
<style lang="scss">
	.cell-1 {
		height: 100px;
		line-height: 100px;
	}
	.cell-container {
		height: 190px;
		background-color: #fff;
		position: relative;
		.cell-avator {
			position: absolute;
			left: 24px;
			top: 25px;
			width: 140px;
			height: 140px;
			border-radius: 10px;
		}
		.cell-detail {
			padding-left: 188px;
			.cell-main {
				padding-top: 33px;
				font-size: 32px;
				color: #1e1e1e;
				height: 45px;
			}
			.cell-sup {
				height: 37px;
				font-size: 26px;
				color: #9b9b9b;
			}
			.cell-level {

			}
		}
		.cell-num {
			position: absolute;
			top: 45px;
			right: 29px;
			font-size: 24px;
			color: #9b9b9b;
		}
	}
</style>