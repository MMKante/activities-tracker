<template>
	<div class="container">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "MainContainer",
	}
</script>

<style scoped>
	.container {
		display: grid;
		grid-template: auto 1fr / auto 1fr;
		grid-gap: 16px;
	}
</style>