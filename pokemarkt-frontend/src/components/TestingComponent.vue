<template>
	<div class="pt-5 card w-50 container pb-2">
		<form @submit.prevent="login">

			<label for="user">User</label>
			<input type="text" v-model="user" id="user"/>
			<br /><br />
			<label for="password">Password</label>
			<input type="text" v-model="password" id="password"/>
			<br /><br />
			<input type="submit" value="Login" />
		</form>

		<button @click="checkLoged()" > Check Loged </button>
		<button @click="logout()" > Logout </button>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	data() {
		return {
			user: '',
			password: ''
		}
	},
	methods: {
		login() {

			axios.post('http://localhost:3000/login', {
				nick: this.user,
				password: this.password
			}).then(res => {
				alert(res.data.auth)
			}).catch(err => alert(err))
		},
		checkLoged() {
			axios.get('http://localhost:3000/loged')
				.then(res => {
					alert(res.data.loged)
				}).catch(err => alert(err))
		},
		logout() {
			axios.get('http://localhost:3000/logout')
				.then(res => {
					alert('done')
				}).catch(err => alert(err))
		}
	}
}
</script>

<style>

</style>
