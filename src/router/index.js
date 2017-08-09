import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/demos/Main/index'
import Loading from '@/demos/Loading/index'
import ShowTip from '@/demos/ShowTip/index'
import Switch from '@/demos/Switch/index'
import Mask from '@/demos/Mask/index'
import Button from '@/demos/Button/index'
import Confirm from '@/demos/Confirm/index'
import Tab from '@/demos/Tab/index'
import InfiniteScroll from '@/demos/InfiniteScroll/index'
import Alert from '@/demos/Alert/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
		{
			path: '/',
			name: 'Main',
			component: Main
		},
		{
			path: '/loading',
			name: 'Loading',
			component: Loading
		},
		{
			path: '/showtip',
			name: 'ShowTip',
			component: ShowTip
		},
		{
			path: '/switch',
			name: 'Switch',
			component: Switch
		},
		{
			path: '/mask',
			name: 'Mask',
			component: Mask
		},
		{
			path: '/button',
			name: 'Button',
			component: Button
		},
		{
			path: '/confirm',
			name: 'Confirm',
			component: Confirm
		},
		{
			path: '/tab',
			name: 'Tab',
			component: Tab
		},
		{
			path: '/infinitescroll',
			name: 'InfiniteScroll',
			component: InfiniteScroll
		},
		{
			path: '/alert',
			name: 'Alert',
			component: Alert
		}
  ]
})
