<template>
	<div id="bbb">
		<div style="float: left;">
			<img :src="a" alt="">
			<h5>{{b}}</h5>
			<p>{{c}}</p> 
		</div>
		
	</div>
</template>

<script>
export default {
	props: ['v1', 'v2', 'v3'],
	data() {
		return {
			a: this.v1,
			b: this.v2,
			c: this.v3
		};
	}
};
</script>
<!--  -->
<!--  -->
<style>
* {
	margin: 0;
	padding: 0;
	list-style: none;
	text-decoration: none;
}

#bbb h5 {
	font-weight: normal;
	font-size: 20px;
	line-height: 40px;
	margin-bottom: 20px;
}
#bbb p {
	font-size: 14px;
	line-height: 30px;
}
</style>
