<template>
	<div id="aaa">
		<div style="float: left;">
			<img :src="a" alt="">
			<h5>{{b}}</h5>
			<p>{{c}}</p> 
		</div>
		
	</div>
</template>

<script>
export default {
	props: ['value', 'value2', 'value3'],
	data() {
		return {
			a: this.value,
			b: this.value2,
			c: this.value3
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
/* #aaa {
	padding: 0 40px;
	box-sizing: border-box;
	margin-top: 40px;
	margin-bottom: 40px;
	overflow: hidden;
	
}
#aaa div {
	float: left;
	text-align: center;
	color: #999;
	padding: 0 30px;
	box-sizing: border-box;
} */
#aaa h5 {
	font-weight: normal;
	font-size: 20px;
	line-height: 40px;
	margin-bottom: 20px;
}
#aaa p {
	font-size: 14px;
	line-height: 30px;
}
</style>
