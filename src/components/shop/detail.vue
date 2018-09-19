<template>
	<div class="details">
		<div class="carousel">
			<b-carousel
				id="carousel1"
				style="text-shadow: 1px 1px 2px #333;"
				controls
				indicators
				background="#ababab"
				:interval="4000"
				img-width="1024"
				img-height="480"
				v-model="slide"
				@sliding-start="onSlideStart"
				@sliding-end="onSlideEnd">

				<!-- Text slides with image -->
				<b-carousel-slide caption="First slide" text="Nulla vitae elit libero, a pharetra augue mollis interdum." img-src="https://picsum.photos/1024/480/?image=52"></b-carousel-slide>
			</b-carousel>
		</div>
		<div class="desc">
			<h2>멋진 다이브</h2>
			<p>샵 소개가 아직 없습니다</p>
		</div>
		<div>
			<address class="address">
				서울특별시 강동구 강동주민회관
			</address>
		</div>
		<div class="map">
			지도서비스는 준비중이에요
		</div>
	</div>
</template>

<script>
import headers from '../common/headers';

export default {
	name: 'index',
	components: {
		headers: headers
	},
	data () {
		return {};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
