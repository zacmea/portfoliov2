<script>
export default {
    name: "ProjectCard",
    props: {
        imgSrc: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        liveLink: {
            type: String,
            required: true,
        },
        githubLink: {
            type: String,
            required: true,
        },
    },
};
</script>

<template>
    <div class="max-w-sm pt-5 rounded overflow-hidden shadow-lg bg-gray-100 border-2 mx-auto ">
        <div class="flex justify-center items-center"><img class="w-9/12" :src="imgSrc" :alt="title" />
            </div>
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 flex justify-center">{{ title }}</div>
            <p class="text-gray-700 text-base">
                {{ description }}
            </p>
        </div>
        <div class="pt-4 pb-4 flex justify-around ">
            <a
                :href="liveLink"
                target="_blank"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
                Live
            </a>
            <a
                :href="githubLink"
                target="_blank"
                class="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
            >
                GitHub
            </a>
        </div>
    </div>
</template>

<style scoped>
/* Tailwind CSS handles most of the styling */
</style>
