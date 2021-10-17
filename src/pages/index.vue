<template>
  <!-- <NotificationGlobal /> -->
  <div class="relative bg-white overflow-hidden">
    <div class="relative top-0 left-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <img class="h-30 w-30 hidden sm:block" src="../assets/images/sticker.png" alt="brand">
      <img class="mt-5 h-20 w-20 block sm:hidden" src="../assets/images/sticker.png" alt="brand">
    </div>
    <div class="pt-5 pb-80 sm:pt-14 sm:pb-14 lg:pt-16 lg:pb-16">
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
        <div class="sm:max-w-lg">
          <h1 class="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Gallery Creative Programming p5
          </h1>
          <p class="mt-4 text-xl text-gray-500">
            This page organized my gallery study and concepts using library <a class="text-blue-500 underline" href="https://p5js.org/" target="_blank">p5.js</a>. I hope you like what you will find here and if you like any study.
          </p>
        </div>
        <div>
          <div class="mt-10">
            <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
              <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div class="flex items-center space-x-6 lg:space-x-8">
                  <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="w-72 h-44 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                      <img src="../assets/images/one-screenshot.png" alt="" class="w-full h-full object-center object-cover">
                    </div>
                    <div class="w-72 h-44 rounded-lg overflow-hidden">
                      <img src="../assets/images/one-screenshot.png" alt="" class="w-full h-full object-center object-cover">
                    </div>
                  </div>
                  <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="w-72 h-44 rounded-lg overflow-hidden">
                      <img src="../assets/images/one-screenshot.png" alt="" class="w-full h-full object-center object-cover">
                    </div>
                    <div class="w-72 h-44 rounded-lg overflow-hidden">
                      <img src="../assets/images/one-screenshot.png" alt="" class="w-full h-full object-center object-cover">
                    </div>
                    <div class="w-72 h-44 rounded-lg overflow-hidden">
                      <img src="../assets/images/one-screenshot.png" alt="" class="w-full h-full object-center object-cover">
                    </div>
                  </div>
                  <!-- <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="w-72 h-44 rounded-lg overflow-hidden">
                      <img src="../assets/images/one-screenshot.png" alt="" class="w-full h-full object-center object-cover">
                    </div>
                    <div class="w-72 h-44 rounded-lg overflow-hidden">
                      <img src="../assets/images/one-screenshot.png" alt="" class="w-full h-full object-center object-cover">
                    </div>
                  </div> -->
                </div>
              </div>
            </div>

            <a href="#show-gallery" class="inline-block text-center bg-white border border-black rounded-md py-3 px-8 font-medium hover:text-white hover:bg-black">Inspire my mind!</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="show-gallery" class="container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
    <SectionGallery />
  </div>

  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span class="block">Ready to dive in?</span>
        <span class="block text-yellow-500">Start your free trial today.</span>
      </h2>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:opacity-90">
            Get started
          </a>
        </div>
        <div class="ml-3 inline-flex rounded-md shadow">
          <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-black text-base font-medium rounded-md text-black bg-white hover:text-white hover:bg-black">
            Learn more
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<route>
{
  name: "name-override",
  meta: {requiresAuth: false}
}
</route>

<script>
  import SectionGallery from "../components/sections/SectionGallery.vue";
  import NotificationGlobal from "../components/notifications/NotificationGlobal.vue";

  export default {
    components: {
      SectionGallery,
      NotificationGlobal,
    }
  }
</script>