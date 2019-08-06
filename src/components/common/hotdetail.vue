<template>
	<div>我是detail{{ids}}</div>
</template>
<script type="text/javascript">
	export default {
		created () {
			this.ids = this.$route.params.id
		},
		data () {
			return {
				ids: ''
			}
		}
	}
</script>