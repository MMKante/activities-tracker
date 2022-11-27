<template>
	<div class="sidebar">
		<div class="brand">
			<i class="material-icons brand__icon">fitness_center</i>
		</div>
		<div class="action">
			<router-link :to="{name: 'dashboard'}" class="action__item">
				<i class="material-icons">analytics</i>
			</router-link>
			<router-link :to="{name: 'todo'}" class="action__item">
				<i class="material-icons">checklist</i>
			</router-link>
			<router-link :to="{name: 'skills'}" class="action__item">
				<i class="material-icons">psychology</i>
			</router-link>
			<router-link :to="{name: 'expenses'}" class="action__item">
				<i class="material-icons">credit_card</i>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'SideBar',
	}
</script>

<style scoped>
	.sidebar {
		grid-row: span 2;
		width: 64px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: var(--component-white);
		box-shadow: 1px 0px 4px var(--shadow-color);
	}
	.brand {
		margin: 16px 0 48px 0;
	}
	.brand__icon {
		color: var(--primary-color);
		font-size: 42px;
		text-shadow: 2px 2px 1px var(--shadow-color);
	}
	.action {
		display: flex;
		flex-direction: column;
		row-gap: 8px;
	}
	.action__item {
		width: 36px;
		height: 36px;
		text-align:	center;
		cursor: pointer;
	}
	.action__item i {
		line-height: 34px;
		vertical-align: middle;
		font-size: 24px;
		color: var(--secondary-color);
	}
	.router-link-active.action__item {	
		background-color: var(--primary-color);
		border-radius: 4px;
		box-shadow: 2px 2px 1px var(--shadow-color);
	}
	.router-link-active.action__item i {
		color: var(--component-white);
	}
</style>