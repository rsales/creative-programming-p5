<template>
  <router-link class="gallery-link md:w-1/4 px-4 mb-8" to="/gallery/one">
    <img class="rounded shadow-md" :src="image" alt="hello world gif">
    <h3 class="mt-6 text-sm text-gray-500">
      <span class="absolute inset-0"></span>
      Interaction
    </h3>
    <p class="text-base font-semibold text-gray-900">Hello World</p>
  </router-link>  
</template>

<script>
export default {
  name: 'CardGallery',
  props: {
    link: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="postcss">
  .gallery-link {
    transition: 0.3s;
  }
  .gallery-link:hover {
    transform: scale(1.05);
    transition: 0.3s;
  }
  .gallery-link:hover > img {
    @apply shadow-2xl
  }
</style>