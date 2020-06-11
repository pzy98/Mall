<template>
    <tabbar>
		<tabbarItem path="/home">
			<div slot="item-icon" class="img-box">
				<img src="@/assets/img/tabbar/home.svg" alt="">
			</div>
			<div slot="item-icon-active" class="img-box">
				<img src="@/assets/img/tabbar/home_active.svg" alt="">
			</div>
			<span slot="item-text">首页</span>
		</tabbarItem>
		<tabbarItem path="/category">
			<div slot="item-icon" class="img-box">
				<img src="~@/assets/img/tabbar/category.svg" alt="">
			</div>
			<div slot="item-icon-active" class="img-box">
				<img src="~@/assets/img/tabbar/category_active.svg" alt="">
			</div>
			<span slot="item-text">分类</span>
		</tabbarItem>
		<tabbarItem path="/shopcart">
			<div slot="item-icon" class="img-box">
				<img src="~@/assets/img/tabbar/shopcart.svg" alt="">
			</div>
			<div slot="item-icon-active" class="img-box">
				<img src="~@/assets/img/tabbar/shopcart_active.svg" alt="">
			</div>
			<span slot="item-text">购物车</span>
		</tabbarItem>
		<tabbarItem path="/profile">
			<div slot="item-icon" class="img-box">
				<img src="~@/assets/img/tabbar/profile.svg" alt="">
			</div>
			<div slot="item-icon-active" class="img-box">
				<img src="~@/assets/img/tabbar/profile_active.svg" alt="">
			</div>
			<span slot="item-text">我的</span>
		</tabbarItem>
	</tabbar>
</template>

<script>
import tabbar from '../common/tabbar/tabbar'
import tabbarItem from '../common/tabbar/tabbar-item.vue'
    export default {
        components: {
            tabbar,
            tabbarItem
        }
    }
</script>

<style scoped>

</style>