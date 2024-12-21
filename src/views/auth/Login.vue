<template>
  <div class="flex justify-center">
    <div class="card w-96 bg-base-100 shadow-xl mt-20 mb-20">
      <div class="card-body">
        <h2 class="card-title">Login Page</h2>
        <div class="items-center mt-2">
          <label class="input input-bordered flex items-center gap-2 mb-2">
            <input type="text" class="grow" placeholder="Email" />
          </label>
          <label class="input input-bordered flex items-center gap-2 mb-2">
            <input type="password" class="grow" value="password" />
          </label>
        </div>
        <div class="card-actions justify-end">
          <button class="btn btn-primary w-full">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>
