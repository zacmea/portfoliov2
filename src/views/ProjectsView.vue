<script>
import ProjectCard from '../components/ProjectCard.vue';
import projects from '../assets/projects';



export default {
    name: "ProjectsView",
    components: {
        ProjectCard,
    },
    data() {
        return {
            projects: projects,
        };
    }
};
</script>

<template>
    <div class="bg-blue-100">
        <h1 class="mt-50 pt-8 flex justify-center font-bold text-2xl">Past and Current Projects</h1>
        <div class="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <ProjectCard v-for="project in projects" 
            :key="project.id" 
            :imgSrc="project.imgSrc" 
            :title="project.title"
            :description="project.description" 
            :liveLink="project.liveLink" 
            :githubLink="project.githubLink" 
            />
        </div>
    </div>
</template>

<style>
/* Additional styling can be added here if needed */
</style>
