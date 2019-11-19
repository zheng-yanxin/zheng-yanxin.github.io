Vue.component('dLee',{
		template:'#d',
		mounted(){
			var no2_dom = document.getElementsByClassName('no2')[0].offsetHeight
			this.no2_dom = no2_dom
	},
		methods:{
		l_btn(){
			this.index++
			if(this.index>=this.arr.length){
				this.index=0
			}
	},
		r_btn(){
			this.index--
			if(this.index<=-1){
				this.index=this.arr.length-1
			}
		}
	},
		props:['imgarr'],
		data:function(){
			return{
				no2_dom:0,
				index:0,
				arr:this.imgarr
			}
		}
}),
	
	new Vue({
		el:'#box',
		data:{
			arr:[
			'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=a62e824376d98d1069d40a31113eb807/838ba61ea8d3fd1fc9c7b6853a4e251f94ca5f46.jpg',
			'https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=05b297ad39fa828bce239be3cd1e41cd/0eb30f2442a7d9337119f7dba74bd11372f001e0.jpg',
			'https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=d985fb87d81b0ef473e89e5eedc551a1/b151f8198618367aa7f3cc7424738bd4b31ce525.jpg'
			]
		}
	})