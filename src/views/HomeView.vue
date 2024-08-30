<script>
import headshot from "../assets/headshot.jpg"; // Import the image
export default {
    name: "HomeView",
    data() {
        return {
            headshot, // Ensures image is available in the component's data
        };
    },
};
</script>

<template>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div class="bg-white rounded-lg shadow-lg p-8 max-w-2xl text-center">
            <h1 class="text-3xl font-bold text-gray-800 mb-4">
                Welcome!  ¡Bienvenides!
            </h1>
            <img :src="headshot" alt="headshot of developer" class="rounded-lg max-h-80 mx-auto mb-4" />
            <p class="text-lg text-gray-600">
                I’m Zachary Mears, a budding full-stack engineer transitioning from a decade of experience in K-12 education. Over the years, I’ve honed my ability to ask the right questions to discover what people really need, beyond what they initially say.
            </p>
            <p class="text-lg text-gray-600 mt-4">
                In approaching software development, I use this knowledge to build solutions that not only meet users’ needs but also support adoption and ease of use.  
            </p>
            
        </div>
    </div>
</template>