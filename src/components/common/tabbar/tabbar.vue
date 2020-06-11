<template>
	<div id="tabbar">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name:'Tabbar'
	}
</script>

<style scoped>
	#tabbar{
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		background: #f6f6f6;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		/* 第一个参数是x轴，第二个参数是y轴，第三个是模糊程度，第四个是颜色 */
		box-shadow: 0 -3px 1px rgba(100,100,100,.5);
	}
</style>