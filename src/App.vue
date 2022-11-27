<template>
	<MainContainer>
		<SideBar />
		<TopHeader />
		<router-view/>
	</MainContainer>
</template>

<script>
	import MainContainer from "./components/Layouts/MainContainer"
	import SideBar from "./components/SideBar"
	import TopHeader from "./components/TopHeader"

	export default {
		name: 'App',
		components: {
			MainContainer,
			SideBar,
			TopHeader,
		}
	}
</script>

<style scoped>

</style>
