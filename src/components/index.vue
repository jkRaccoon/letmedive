<template>
	<div class="hello">
		<div>
			<b-jumbotron class="mainJumnotron">
				<template slot="header">
					<span class="nameHolder"><b-img rounded="circle" width="75" height="75" alt="img" class="m-1" :src="require('../assets/img/logo2.jpg')" />괴물너구리의</span>Let Me DIVE
				</template>
				<template slot="lead">
					Let me dive 는 다이빙 샵&리조트를 찾다가 승질나서 직접만든 다이빙 정보 공유 사이트입니다.
				</template>
				<hr class="my-4">
				<p>
					모든 정보는 최신 정보와 다를 수 있으므로 반드시 해당샵에 직접 다시 확인하시기 바랍니다.
				</p>
				<p>
					이 사이트는 정보만 공유할뿐 예약 및 투어 진행에 어떠한 책임도 지지 않습니다.
				</p>
			</b-jumbotron>
		</div>
		<div class="contents"><b-table striped hover :items="items" :fields="fields"></b-table></div>
	</div>
</template>

<script>
import headers from './common/headers';
const fields = [
	{
		key: 'country',
		label: '국가',
		sortable: true
	},
	{
		key: 'area',
		label: '지역',
		sortable: true
	},
	{
		key: 'title',
		label: '이름',
		sortable: true
	},
	{
		key: 'certificatePackage',
		label: 'C-CARD코스',
		sortable: true
	},
	{
		key: 'fundivePackage',
		label: '펀다이빙',
		sortable: true
	}
];
const items = [
	{ 'country': '일본', 'area': '오키나와', 'title': '홍스타', 'certificatePackage': 1, 'fundivePackage': 5, updateAt: '2018-09-21' },
	{ 'country': '일본', 'area': '오키나와', 'title': '씨써', 'certificatePackage': 1, 'fundivePackage': 5, updateAt: '2018-09-21' },
	{ 'country': '일본', 'area': '오키나와', 'title': '마레아오키나와', 'certificatePackage': 1, 'fundivePackage': 5, updateAt: '2018-09-21' },
	{ 'country': '일본', 'area': '오키나와', 'title': '탑마린잔파', 'certificatePackage': 1, 'fundivePackage': 5, updateAt: '2018-09-21' }
];

export default {
	name: 'index',
	components: {
		headers: headers
	},
	data () {
		return {
			items: items,
			fields: fields
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainJumnotron {
	background-image: url('../assets/img/bgimg_re.jpg');
	background-position: center center;
	-webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #e0e0e0;
	text-shadow: 1px 2px #222222;
	border-radius: 0;
}
.lead {
}
.nameHolder {
	font-size: 12px;
	position: relative;
}
.nameHolder > img {
	position: absolute;
	left: -75px;
}
.contents {
	padding: 1em;
}
</style>
