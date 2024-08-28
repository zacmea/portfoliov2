<script>
export default {
    name: "NavBar",
};
</script>

<template>
      <nav class="bg-blue-500 p-4 fixed top-0 w-full">
            <div class="container mx-auto flex justify-between items-center">
                <router-link to="/home" class="text-black text-2xl font-bold">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                    </svg>
                </router-link>
                <ul class="flex space-x-4">
                    <li>
                        <router-link to="/projects" class="text-black hover:text-gray-300"
                            >Projects</router-link
                        >
                    </li>
                    <li>
                        <router-link to="/services" class="text-black hover:text-gray-300"
                            >Services</router-link
                        >
                    </li>
                    <li>
                        <router-link to="/contact" class="text-black hover:text-gray-300"
                            >Contact</router-link
                        >
                    </li>
                </ul>
            </div>
        </nav>
</template>


<style>
/* No scoped styles needed, Tailwind CSS handles styling */
</style>