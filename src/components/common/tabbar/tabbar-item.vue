<template>
	<div class="tabbar-item" @click="itemclick">
		<!-- 也可以用div来包装插槽 -->
		<div v-if="!isActive"><slot  name="item-icon"></slot></div>
		<div v-else><slot  name="item-icon-active"></slot></div>
		<div :class="{active:isActive}">
			<slot name="item-text"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'tabbar-item',
		props: {
			// 获取动态路径
			path:{
				type:String
			},
			activetextcolor:{
				type:String,
				default:'red'
			}
		},
		data () {
			return {
				// isActive:true,
			}
		},
		computed: {
			isActive(){
				return this.$route.path.indexOf(this.path)!==-1;
			}
		},
		methods: {
			itemclick(){
				// this.isActive=!this.isActive;
				this.$router.replace(this.path)
			}
		}
	}
</script>

<style scoped>
	.tabbar-item {
		flex: 1;
		text-align: center;
		height: 49px;
		font-size: 14px;
		background: rgb(216, 208, 208);
	}

	.tabbar-item span {
		display: block;
	}

	.img-box {
		margin: 0 auto;
		padding: 3px;
		width: 24px;
		height: 20px;
		text-align: center;
		line-height: 24px;
	}

	.img-box img {
		width: 100%;
		vertical-align: middle;
	}
	/* 活跃时的字体颜色 */
	.active{
		color:#FF5777;
	}
</style>
