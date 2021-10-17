<template>
  <section class="py-20">
  <h1 class="text-4xl font font-extrabold  text-gray-900 sm:text-6xl">
    🖼 Introduce you to my gallery
  </h1>
  <p class="mt-4 mb-16 text-xl text-gray-500">
    Feel free or check out each link and experience in a unique way each page.
  </p>

  <div class="flex flex-wrap -mx-4 -mb-8">
    <CardGallery 
      v-for="(art, index) in gallery" 
      :link="art.link" 
      :tag="art.tag" 
      :image="art.imgUrl"
      :title="art.title"
      :disponibility="art.disponibility"
      :key="`art-${index}`" 
    />
  </div>
</section>
</template>

<script>
import CardGallery from "../cards/CardGallery.vue"

export default {
  name: 'SectionGallery',
  data() {
    return {
      gallery: [
        {
          link: '/gallery/one',
          tag: 'Interaction',
          imgUrl: new URL('../../assets/images/one-draw.gif', import.meta.url).href,
          title: 'Hello World',
          disponibility: {
            desktop: true,
            mobile: false
          }
        },
      ]
    }
  },
  components: {
    CardGallery,
  }
}
</script>