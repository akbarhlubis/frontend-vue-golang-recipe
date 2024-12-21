<template>
<header class="grid place-items-center">
    <img 
        src="https://cdn.pixabay.com/photo/2022/11/18/14/49/shapes-7600305_960_720.jpg" 
        alt="Centered Image" 
        class="w-2/4 rounded-2xl object-cover"
    >
</header>
<div class="hero py-8">
    <div class="hero-content text-center">
        <div class="max-w-xl">
            <span class="text-lg text-purple-500 font-medium block mb-3">Early access sign up</span>
            <h1 class="text-3xl md:text-5xl text-gray-900 font-bold dark:text-white">The modern beginner's guide to UI/UX design.</h1>
            <p class="py-6 px-5 md:px-16 text-xl">Sign up now for completely free access to omegas's modern guide to UI/UX design.</p>
            <div class="flex items-center justify-center gap-6 mt-2 flex-wrap">
                <input type="email" placeholder="email@example.com" class="input w-full max-w-xs bg-purple-100 placeholder-purple-500 font-medium" />
                <router-link :to="{ name: 'Register' }" class="btn btn-primary border-none bg-purple-500 hover:bg-indigo-700 normal-case px-6 text-base tracking-wider">Sign Up</router-link>
            </div>
        </div>
    </div>
</div>
</template>

<style>
header {
  min-height: clamp(12.5rem, 60vw, 21rem);
}
</style>