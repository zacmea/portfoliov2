<script>

export default {
    name: "ContactView",
};
</script>

<template>
    <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6"> 
        <!-- Note: using flex and flex-col to center the content vertically and horizontally -->
        <div class="bg-white rounded-lg shadow-lg p-8 max-w-2xl text-center">
            <h1 class="text-3xl font-bold text-gray-800 mb-4">
                Say Hello! 
            </h1>
            <p class="text-lg text-gray-600 mt-4">
                You can contact me at <router-link to="mailto:zach.mears@gmail.com" class="text-blue-700">zach.mears@gmail.com</router-link>, reach out to me on <router-link to="https://www.linkedin.com/in/zacharykyler/" class="text-blue-700">LinkedIn</router-link>, or find me on <router-link to="https://github.com/zacmea" class="text-blue-700">GitHub</router-link>.
            </p> 
        </div>
        <br>
        <div class="bg-white rounded-lg shadow-lg p-8 max-w-2xl text-center">
            <h1 class="text-3xl font-bold text-gray-800 mb-4">
                ¡Escríbame!
            </h1>
            <p class="text-lg text-gray-600 mt-4">
                También me puedo comunicar en español con fluidez, oralmente y por escrito, si prefiere comunicarse en español.
            </p>
            <p class="text-lg text-gray-600 mt-4">
                Puede contactarme en <router-link to="mailto:zach.mears@gmail.com" class="text-blue-700">zach.mears@gmail.com</router-link>, o me puede hallar en <router-link to="https://www.linkedin.com/in/zacharykyler/" class="text-blue-700">LinkedIn</router-link> o <router-link to="https://github.com/zacmea" class="text-blue-700">GitHub</router-link>.
            </p> 
        </div>
    </div>
    
</template>