<template>
  <div class="flex justify-center">
    <div class="card w-96 bg-base-100 shadow-xl mt-20 mb-20">
      <div class="card-body">
        <h2 class="card-title">Register Page</h2>
        <form @submit.prevent="handleSubmit">
          <div class="items-center mt-2">
            <label class="input input-bordered flex items-center gap-2 mb-2">
              <input type="email" v-model="email" class="grow" placeholder="Email" />
            </label>
            <label class="input input-bordered flex items-center gap-2 mb-2">
              <input type="text" v-model="name" class="grow" placeholder="Nama Lengkap" />
            </label>
            <label class="input input-bordered flex items-center gap-2 mb-2">
              <input type="text" v-model="username" class="grow" placeholder="Username" />
            </label>
            <input type="hidden" name="role" value="member">
            <label class="input input-bordered flex items-center gap-2 mb-2">
              <input type="password" class="grow" placeholder="Password" v-model="password" />
            </label>
          </div>
          <div class="card-actions justify-end">
            <button class="btn btn-primary w-full">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import API from '../../api';
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      name: '',
      role: '',
      username: '',
    }
  },
  methods: {
    async handleSubmit(){
      if (!this.email || !this.password || !this.name || !this.username) {
        alert("Email, Nama, Username dan Password harus diisi!");
        return;
      }
      try {
        const response = await API.post('auth/register',{
          email: this.email,
          password: this.password,
          username: this.username,
          name: this.name,
          role: this.role
        });

        // localStorage.setItem('token',response.data.token);
        alert("Berhasil Register Akun! ",response.email);
      } catch (error) {
        console.error(error.response ? error.response.data : error.message);
        alert("Register gagal. Silakan periksa data inputan Anda.",error);
      }
    }
  }
}
</script>