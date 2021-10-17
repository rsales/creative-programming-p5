<template>
  <div class="gallery-link md:w-1/4 px-4 mb-8">
    <router-link :to="link">
      <div class="image-area relative">
        <div class="disponibility-area absolute flex bottom-1 right-1">
          <svg
            v-if="disponibility.desktop"
            id="desktopTippy"
            class="w-8 h-8 mr-1"
            width="73"
            height="73"
            viewBox="0 0 73 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="73" height="73" rx="17.3832" fill="#F5F31B" />
            <path
              d="M30.3833 46.05H41.8304V56.3525H30.3833V46.05Z"
              stroke="black"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M55.5669 18.577H16.6466C15.3822 18.577 14.3572 19.602 14.3572 20.8665V43.7607C14.3572 45.0251 15.3822 46.0502 16.6466 46.0502H55.5669C56.8313 46.0502 57.8563 45.0251 57.8563 43.7607V20.8665C57.8563 19.602 56.8313 18.577 55.5669 18.577Z"
              stroke="black"
              stroke-width="4"
            />
            <path
              d="M33.8174 40.3265H38.3962"
              stroke="black"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M24.6597 56.3525H47.5539"
              stroke="black"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            v-if="disponibility.mobile"
            id="mobileTippy"
            class="w-8 h-8"
            width="73"
            height="73"
            viewBox="0 0 73 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="73" height="73" rx="17.3832" fill="#F5F31B" />
            <path
              d="M47.5537 13.9982H24.6595C22.7629 13.9982 21.2253 15.5357 21.2253 17.4323V56.3526C21.2253 58.2492 22.7629 59.7867 24.6595 59.7867H47.5537C49.4504 59.7867 50.9879 58.2492 50.9879 56.3526V17.4323C50.9879 15.5357 49.4504 13.9982 47.5537 13.9982Z"
              stroke="black"
              stroke-width="4"
            />
            <path
              d="M33.8171 20.8665H38.396"
              stroke="black"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M31.5278 52.9185H40.6856"
              stroke="black"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <img class="rounded shadow-md" :src="image" alt="hello world gif" />
      </div>
      <h3 class="mt-6 text-sm text-gray-500">
        {{ tag }}
      </h3>
      <p class="text-base font-semibold text-gray-900">{{ title }}</p>
    </router-link>
  </div>
</template>

<script>
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

export default {
  name: "CardGallery",
  components: {
    tippy
  },
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
    },
    disponibility: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    tippy('#desktopTippy', {
      content: 'On in Desktop',
    });
    tippy('#mobileTippy', {
      content: 'On in Mobile',
    });
  }
};
</script>

<style lang="postcss">
.gallery-link {
  transition: 0.3s;
}
.gallery-link:hover {
  transform: scale(1.05);
  transition: 0.3s;
}
.gallery-link:hover img {
  @apply shadow-2xl;
}
</style>
