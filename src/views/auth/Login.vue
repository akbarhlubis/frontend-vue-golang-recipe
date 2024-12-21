<template>
  <div class="flex justify-center">
    <div class="card w-96 bg-base-100 shadow-xl mt-20 mb-20">
      <div class="card-body">
        <h2 class="card-title">Login Page</h2>
        <form @submit.prevent="handleSubmit">
          <div class="items-center mt-2">
            <label class="input input-bordered flex items-center gap-2 mb-2">
              <input type="email" class="grow" placeholder="Alamat Email" v-model="email" />
            </label>
            <label class="input input-bordered flex items-center gap-2 mb-2">
              <input type="password" class="grow" placeholder="password" v-model="password" />
            </label>
          </div>
          <div class="card-actions justify-end">
            <button class="btn btn-primary w-full">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../../axios';
// import API from '../../api';
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async handleSubmit(){
      if (!this.email || !this.password) {
        alert("Email dan password harus diisi!");
        return;
      }
      try {
        const response = await axios.post('auth/login',{
          email: this.email,
          password: this.password,
        });

        localStorage.setItem('token',response.data.token);
      } catch (error) {
        console.error(error.response ? error.response.data : error.message);
        alert("Login gagal. Silakan periksa email dan password Anda.");
      }
    }
  }
}
</script>