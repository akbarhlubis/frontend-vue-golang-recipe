<script setup>
import { onMounted, ref } from 'vue';
import api from '../../api';

// const recipes = ref([]);

// const fetchDataRecipes = async () => {
//     // await api.get('/api/recipes')
//     await api.get('https://jsonplaceholder.typicode.com/todos/')
//     .then(response => {
//         recipes.value = response.data
//     })
// }

// console.log(recipes);
// onMounted(()=>{
//     fetchDataRecipes();
// })
</script>
<template>
    <p class="text-center">Halaman Resep</p>
    <!-- <div v-if="recipes.length == 0">
        <p>Data Kosong</p>
    </div>
    <div v-else v-for="(recipe,index) in recipes" :key="index">
        <div>{{ recipe.name }}</div>
    </div> -->
</template>