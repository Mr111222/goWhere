<template>
	<div class="footers">
		<ul>
			<li><router-link to="/home">主页</router-link>	</li>
			<li><router-link to="play">玩</router-link>	</li>
			<li><router-link to="learn">学习</router-link>	</li>
			<li><router-link to="/my">我的</router-link>	</li>
		</ul>
	</div>
</template>
<style type="text/scss" lang="scss" scoped>
	.footers{
		width:100%;
		height:44px;
		text-align: center;
		line-height:44px;
		background: #349acd;
		ul{
			li{
				float: left;
				width:25%;
				text-align:center;
				line-height:44px;
				a{
					display:inline-block;
					width:100%;
				}
			}
			.router-link-active{
				background:#dfa123;
				color:red;
			}
		}
	}
</style>
