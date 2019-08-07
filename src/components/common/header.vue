<template>
	<div class="headers">
		<input type="text" placeholder="输入拼音或文字" @blur="isShowSeach = !isShowSeach" @focus="isShowSeach = !isShowSeach" class="inps">
		<span class="">{{defaultCity}}</span>
		<span @click="showList" class="">△</span>
		<cityList v-if="isShowCitylist"/>
		<Search v-if="isShowSeach"/>
	</div>
</template>
<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import cityList from '@/components/common/citylist'
import Search from '@/components/common/search'
export default {
	data () {
		return {
			isShowSeach: false
		}
	},
	components: {
		cityList,
		Search
	},

	computed: {
		...mapGetters(['defaultCity', 'isShowCitylist'])
	},
	methods: {
		...mapActions(['showList']),
		choiceCity () {
			console.log('选择城市')
		},
		getSearch () {
			this.isShowSeach = !this.isShowSeach
		}
	}
}
</script>
<style lang="scss" scoped>
	.headers{
		width:100%;
		height:80px;
		color:#fff;
		background:#12345f;
		span:nth-child(1){
			line-height: 80px;
			margin-left:30px;
		}
		span:nth-child(2){
			line-height: 80px;
			margin-left:30px;
		}
		.inps{
			width:70%;
			height:40px;
			margin-left:20px;
		}
	}
</style>
