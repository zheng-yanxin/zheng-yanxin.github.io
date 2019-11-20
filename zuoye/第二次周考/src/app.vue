<template>
	<div id="app">
		<div class="container">
			<div class="header_t">
				<h2 style="font-size:60px;font-weight:normal;font-style:normal;color:#ffffff;margin-bottom:20px;">起飞页自助建站平台</h2>
				<div
					style="font-weight:normal;font-style:normal;color:#ffffff;margin-bottom:20px;border-top:2px solid #fff;border-bottom:2px solid #fff;background:rgba(0,0,0,.3);"
				>
					<ul>
						<li>
							云建站自助平台,
							<span style="color:red">成就梦想</span>
						</li>
						<li>
							与创业为伴,点亮创新,
							<span style="color:red">是云建站的使命.</span>
						</li>
					</ul>
				</div>
				<div>
					<p>自助建站平台</p>
					<div class="imgs"><img v-for="i in arr" :src="i" alt="" /></div>
				</div>
			</div>
		</div>
		<div class="cont">
			<div class="cont_t">
				<p class="tit">您的创业梦想需要一个非同凡响的网站</p>
				<p class="txt">云建站倾力打造的一个从网站建设.网网站运营管理到网站推广的自动化免费建站平台</p>
			</div>
			<div class="cont_b">
				<!-- <aaa :haha='data'></aaa> -->
				<div v-for="i in arr1"><aaa :value="i.img" :value2="i.title" :value3="i.cont"></aaa></div>
			</div>
		</div>
		<div class="cont_2">
			<div class="cont_2_head">
				<p style="color:#fff;">云建站自助平台</p>
				<p style="color:red;">上手快.颜值高.跨多屏.自传播.全免费.</p>
			</div>
			<div style="padding:100px 200px;box-sizing: border-box;">
				<p style="color:#fff;font-size:20px;line-height:40px;">
					在起飞页自助建站平台，您不需要任何编程基础，就能做出功能强大，效果出众的专业级网站，您所要做的仅是选择网站模板、输入图片文字，以及鼠标拖拉拽；真正的响应式建站，无论是在电脑的大屏幕，还是手机小屏幕上，网站都能友好地展示；您的访客还可以注册成为会员，并进行在线购物；当然，如果您需要多语言版本，起飞页也可以轻松为您实现。
				</p>
			</div>
		</div>
		<div class="cont_3">
			<div>
				<h3 style="color:red;">云建站，一站式的在线H5建站平台</h3>
				<p>云建站倾力打造的一个从网站建设.网网站运营管理到网站推广的自动化免费建站平台</p>
			</div>
			<div>
				<img
					src="https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDIvNTE1Y2RhYTQxNDg0YWRiZDY4Mjg1NmU0OGNkZjFlYWYucG5n.png"
					alt=""
				/>
			</div>
		</div>
		<div class="cont_4">
			<div v-for="i in arr2"><bbb :v1="i.img" :v2="i.title" :v3="i.cont"></bbb></div>
			<div v-for="i in arr2"><bbb :v1="i.img" :v2="i.title" :v3="i.cont"></bbb></div>
		</div>
		<div class="cont_5">
			<div>
				<h3 style="color:red;">云建站，一站式的在线H5建站平台</h3>
				<p>云建站倾力打造的一个从网站建设.网网站运营管理到网站推广的自动化免费建站平台</p>
			</div>
			<div>
				<img
					src="https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDIvMTQ1NTY0OTU4ODE0NTU2NDk0MTNiZzUtNDAweDMwMC5qcGc_p_p100_p_3D.jpg"
					alt=""
				/>
				<img
					src="https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDIvMTQ1NTY0OTU4ODE0NTU2NDk0MTNiZzUtNDAweDMwMC5qcGc_p_p100_p_3D.jpg"
					alt=""
				/>
				<img
					src="https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDIvMTQ1NTY0OTU4ODE0NTU2NDk0MTNiZzUtNDAweDMwMC5qcGc_p_p100_p_3D.jpg"
					alt=""
				/>
				<img
					src="https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDIvMTQ1NTY0OTU4ODE0NTU2NDk0MTNiZzUtNDAweDMwMC5qcGc_p_p100_p_3D.jpg"
					alt=""
				/>
				<img
					src="https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDIvMTQ1NTY0OTU4ODE0NTU2NDk0MTNiZzUtNDAweDMwMC5qcGc_p_p100_p_3D.jpg"
					alt=""
				/>
				<img
					src="https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDIvMTQ1NTY0OTUyMjE3LTQwMHgzMDAuanBn.jpg"
					alt=""
				/>
				<img
					src="https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDIvMTQ1NTY0OTUyMjE3LTQwMHgzMDAuanBn.jpg"
					alt=""
				/>
				<img
					src="https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDIvMTQ1NTY0OTUyMjE3LTQwMHgzMDAuanBn.jpg"
					alt=""
				/>
			</div>
		</div>

		<!-- ditu -->
		<template>
			<div>
				<!-- <div id="container"></div> -->
				<div id="allmap" style="height: 500px;padding: 0 20px;width:90%;margin: auto;"></div>
			</div>
		</template>
		<div class="footer">
			本网站由 <span style="color:red">起飞页 </span>提供技术支持
		</div>
	</div>
</template>

<script>
import aaa from './aa.vue';
import bbb from './bbb.vue';
export default {
	components: {
		aaa,
		bbb
	
	},
	// components: {
	// 	bbb
	
	// },
	data() {
		return {
			data: '父组件',
			arr: [
				'https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDcvYjgxZjYwZjI5NWFlMzgzODExMzliNDU2ZTkwMGUyYTEtNDd4NDcucG5n.png',
				'https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDcvODUyMjA2ZWViZDZiMmY0YjU1ZjkwZGI3MjNhODRjNWMtNDd4NDcucG5n.png',
				'https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDcvZjU4N2RiMTkzOWE0YjI4NTk0NzA3MjFjYTJhZTYwMDAtNDd4NDcucG5n.png',
				'https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDcvOWIxMTg4ODYwZDI4MzE0MTlmNjkyZjJhM2Y5ZTY5OGUtNDd4NDcucG5n.png',
				'https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDcvZDczNTgwOTlmZWEzN2UyY2E4YTVjZWVjNmIxMDU4NmUtNDd4NDcucG5n.png',
				'https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDcvZjcxMDlkMGU1YmUwZWQ1MjA5ZTk0YjFlYjMwMzY3YjYtNDd4NDcucG5n.png'
			],
			arr1: [
				{
					img:
						'https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDIvZjgxMjkwZTg3YTEzM2ZkNWFiM2IzY2ExNjdhNTA3ZDgucG5n.png',
					title: '页面要炫酷,颜值要高',
					cont:
						'人靠衣装马靠鞍,一个炫酷的网站才配得上创业者的新潮创 意.微企点采用HTML5最新技术,拥有大气舒适的界面和众多 精美模板,用起飞页制作一个高逼格.高颜值的炫酷网站, 让您的创业项目脱颖而出,非同凡响.'
				},
				{
					img:
						'https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDIvY2JmYjViODAyM2M4ZjczMzU4YmY0OGIxMmEwNmRjNDkucG5n.png',
					title: '简单易用,随需而变',
					cont:
						'互联网创业瞬息万变,天下武功,唯快不破.创业者可以按需选择起飞页中精美的网页模板,预置栏目,快速添加和编辑网页无需编程,一步即创建一个炫酷高颜值的网站.网站从无到有,倚马可待.'
				},
				{
					img:
						'https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDIvMzY3N2Y5N2FhMjQ5YThmNmFlODUxNGJiM2E1NWExZGEucG5n.png',
					title: '支持多终端跨屏展示',
					cont:
						'在移动互联网全面渗透时,创业者需要一个随屏幕大小不同而自动伸缩的网站,这样同一份内容都可为不同终端用户带来最佳用户体验.微企点使用最新的HTML5响应式技术,网页界面随不同屏幕尺寸自动伸缩.'
				}
			],
			arr2: [
				{
					img:
						'https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDcvODUyMjA2ZWViZDZiMmY0YjU1ZjkwZGI3MjNhODRjNWMtNDd4NDcucG5n.png',
					title: '1111111',
					cont:
						'1111111111'
				},
				{
					img:
						'https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDcvODUyMjA2ZWViZDZiMmY0YjU1ZjkwZGI3MjNhODRjNWMtNDd4NDcucG5n.png',
					title: '2222222',
					cont:
						'22222222222222'
				},
				{
					img:
						'https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDcvODUyMjA2ZWViZDZiMmY0YjU1ZjkwZGI3MjNhODRjNWMtNDd4NDcucG5n.png',
					title: '333333',
					cont:
						'3333333333333'
				},
				{
					img:
						'https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDcvODUyMjA2ZWViZDZiMmY0YjU1ZjkwZGI3MjNhODRjNWMtNDd4NDcucG5n.png',
					title: '444444',
					cont:
						'44444444444444'
				}
			]
			
		};
	},
	mounted() {
		var map = new BMap.Map('allmap');
		// var point = new BMap.Point(116.331398, 39.897445);北京的经纬度
		map.addControl(new BMap.NavigationControl());
		map.addControl(new BMap.ScaleControl());
		map.addControl(new BMap.OverviewMapControl());
		map.addControl(new BMap.MapTypeControl());
		map.centerAndZoom('苏州市外河桥', 11);
	},
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
	list-style: none;
	text-decoration: none;
}
.container {
	padding-top: 300px;
	background-image: url(https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDMvNzIzNGQ1MjBkZjBiODhiMDIwYTc3ZmYwZjk1MGM3OGEuanBn.jpg);
	background-size: 100% 700px;
	background-repeat: no-repeat;
	background-attachment: fixed;
}
.header_t {
	width: 50%;
	padding: 0 30px;
	margin: 0 auto;
	text-align: center;
}

.header_t div:nth-of-type(1) {
	height: 100px;
	line-height: 100px;
	font-size: 30px;
	color: #fff;

	overflow: hidden;
	text-align: center;
}
.header_t div:nth-of-type(2) p {
	font-size: 30px;
	color: #fff;
	line-height: 50px;
	text-align: center;
}
.imgs img {
	margin: 5px;
}
.cont {
	width: 100%;
	background: #fff;
	text-align: center;
	padding-top: 100px;
	margin-bottom: 100px;
}
.tit {
	color: red;
	font-size: 30px;
	line-height: 100px;
}
.txt {
	color: #999;
}
.cont_2 {
	width: 100%;
	min-height: 254px;
	background-image: url(https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDIvMWYyYjI0N2JjYTc5MjhkYzIyOTRiMjc0M2UyZDI1MWQuanBn.jpg);
	background-size: 100% 100%;
	/* background-repeat: no-repeat; */
	background-attachment: fixed;
	margin-bottom: 20px;
}
.cont_2_head {
	background: rgba(0, 0, 0, 0.5);
	text-align: center;
}
.cont_2_head p {
	font-size: 20px;
	line-height: 50px;
}
.cont_b{
	padding: 0 40px;
	box-sizing: border-box;
	margin-top: 40px;
	margin-bottom: 40px;
	overflow: hidden;
}
.cont_b>div{
	float: left;
	width: 30%;
	margin-right: 3%;
	text-align: center;
	color: #999;
	padding: 0 30px;
	box-sizing: border-box;
}
.cont_3 {
	text-align: center;
}
.cont_3 div h3 {
	font-size: 40px;
	line-height: 100px;
	font-weight: normal;
}
.cont_3 div p {
	color: #959595;
	font-size: 20px;
	line-height: 40px;
}

.cont_4 {
	/* margin: 0 -40px;
		padding:0 40px; */
	padding: 100px 100px;
	min-height: 400px;
	background-image: url(https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDIvMGIwYWIwZWU0YWRjNDQ5Yjg2YzFhZjMyOWNkZDc1MDYuanBn.jpg);
	background-size: 100% 700px;
	background-repeat: no-repeat;
	background-attachment: fixed;
	overflow: hidden;
	text-align: center;
}
.cont_4 div{
	float: left;
	width:25%;
	/* min-height: 200px; */
	text-align: center;
	color:#fff;
	margin-bottom:20px;
	padding-left:20px;
	box-sizing: border-box;
}
.cont_4 div img{
	width:80px;
	height:80px;
}
.cont_4 div h3 {
	width:100%;
	font-size: 50px;
	line-height: 100px;
	font-weight: normal;
	text-align: center;
}
.cont_4 div p {
	color: #959595;
	font-size: 30px;
	line-height: 40px;
	text-align: center;
}

.cont_5 {
	text-align: center;
	margin-bottom: 30px;
}
.cont_5 img{
	width:24%;
	margin-rigth:0.5%;
}
.cont_5 div h3 {
	font-size: 40px;
	line-height: 100px;
	font-weight: normal;
}
.cont_5 div p {
	color: #959595;
	font-size: 20px;
	line-height: 40px;
}
.footer{
	width:100%;
	line-height: 100px;
	font-size:30px;
	background: rgba(0,0,0,.5);
	text-align: center;
	color:#fff;
	margin-top:20px;
}
</style>
