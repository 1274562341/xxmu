<template>
<div>
   <div class="lbt">
        <mt-swipe :auto="3000">
        <mt-swipe-item v-for="item in imgs" :key="item.id"><img :src="item.img" width="100%" height="100%"></mt-swipe-item>
    </mt-swipe>
   </div>
</div>
</template>

<script>
	import { Toast } from 'mint-ui';
export default{
    data(){
        return{
			imgs:[]
		}
    },
	methods:{
		getLunbotu(){
			this.$axios.get('http://www.liulongbin.top:3005/api/getlunbo').then(result=>{
				Toast('数据加载中');
				this.imgs = result.data.message
			})
		}
	},
	created(){
		this.getLunbotu()
	}
}
</script>

<style>
.lbt{
    height: 250px;
}
.mint-swipe-item:nth-child(1){
    background: url('../images/1.jpg')
}
.mint-swipe-item:nth-child(2){
    background-color: blueviolet
}
.mint-swipe-item:nth-child(3){
    background-color: orangered
}
</style>
