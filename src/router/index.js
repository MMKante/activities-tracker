import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '../views/DashboardPage'
import TodoPage from '../views/TodoPage'
import SkillPage from '../views/SkillPage'
import ExpensePage from '../views/ExpensePage'

const routes = [
	{
		path: '/dashboard',
		name: 'dashboard',
		component: DashboardPage
	}, {
		path: '/todo',
		name: 'todo',
		component: TodoPage
	}, {
		path: '/skills',
		name: 'skills',
		component: SkillPage
	}, {
		path: '/expenses',
		name: 'expenses',
		component: ExpensePage
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
