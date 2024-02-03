<template>
<div class="container mt-5">
  <form class="row justify-content-center" @submit.prevent="login">
    <div class="col-md-6">
      <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
      <div class="mb-2">
        <label for="inputEmail" class="sr-only">Email address</label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          required
          autofocus
          v-model="state.username"
        />
      </div>
      <div class="mb-2">
        <label for="inputPassword" class="sr-only">Password</label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required
          v-model="state.password"
        />
      </div>
  
      <div class="text-end mt-4">
        <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
      </div>
    </div>
  </form>
</div>
</template>

<script setup>
import { reactive } from 'vue';
import { login as loginRequest } from '../apis/user';
import { useRouter } from 'vue-router';
import Cookies from 'js-cookie';

const router = useRouter();
const state = reactive({
  username: '',
  password: ''
})

const login = () => {
  loginRequest(state)
  .then(res => {
    console.log(res);
    console.log(res.data.success);
    if (res.data.success) {
      const { token, expired } = res.data;
      // document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
      Cookies.set('hexToken', token, { expires: new Date(expired) })
      router.push({ name: 'home' });
    }
  })
  .catch(err => {
    console.error(err)
  })
}

</script>

<style lang="scss" scoped>

</style>