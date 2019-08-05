<template>
	<div class="headers">
		<input type="text" placeholder="输入拼音或文字" @blur="isShowSeach = !isShowSeach" @focus="isShowSeach = !isShowSeach" class="inps">
		<span>{{defaultCity}}</span>
		<span @click="showList">△</span>
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
		height:44px;
		color:#fff;
		background:#12345f;
		.inps{
			width:70%;
			height:20px;
			margin:8px 0 0 20px;
		}
	}
</style>
