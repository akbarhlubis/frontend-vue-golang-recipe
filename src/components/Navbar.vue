<template>
  <div class="navbar bg-base-100 shadow-md fixed">
    <div class="flex-1">
      <router-link :to="{ name: 'Landing' }" class="btn btn-ghost text-xl">ResepKu</router-link>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
      <li>
          <router-link :to="{ name: 'About' }">About Us</router-link>
      </li>
      <li>
          <router-link :to="{ name: 'Recipe' }">Recipe</router-link>
      </li>
        <li>
          <details>
            <summary>Auth Page</summary>
            <ul class="bg-base-100 rounded-t-none p-2 p">
              <li>
                <router-link :to="{ name: 'Login' }" class="navbar-brand">Login</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Register' }" class="navbar-brand">Register</router-link>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
</div>
</template>