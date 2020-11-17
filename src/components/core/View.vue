<template>
  <div>
    <welcome />

    <recent-projects />

    <skills-Technologies />

    <about-me />

    <get-in-touch />
  </div>
</template>

<script>
  export default {
    name: 'CoreView',

    components: {
      AboutMe: () => import('@/components/AboutMe'),
      GetInTouch: () => import('@/components/GetInTouch'),
      RecentProjects: () => import('@/components/RecentProjects'),
      skillsTechnologies: () => import('@/components/Skills'),
      Welcome: () => import('@/components/Welcome'),
    },
  }
</script>
