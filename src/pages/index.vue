<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative bg-white overflow-hidden">
    <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
        <div class="sm:max-w-lg">
          <h1 class="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Gallery Creative Programming p5
          </h1>
          <p class="mt-4 text-xl text-gray-500">
            This page organized my gallery study and concepts using library <a href="https://p5js.org/">p5.js</a>. I hope you like what you will find here and if you like any study.
          </p>
        </div>
        <div>
          <div class="mt-10">
            <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
              <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div class="flex items-center space-x-6 lg:space-x-8">
                  <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                      <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg" alt="" class="w-full h-full object-center object-cover">
                    </div>
                    <div class="w-44 h-64 rounded-lg overflow-hidden">
                      <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg" alt="" class="w-full h-full object-center object-cover">
                    </div>
                  </div>
                  <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="w-44 h-64 rounded-lg overflow-hidden">
                      <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg" alt="" class="w-full h-full object-center object-cover">
                    </div>
                    <div class="w-44 h-64 rounded-lg overflow-hidden">
                      <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg" alt="" class="w-full h-full object-center object-cover">
                    </div>
                    <div class="w-44 h-64 rounded-lg overflow-hidden">
                      <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg" alt="" class="w-full h-full object-center object-cover">
                    </div>
                  </div>
                  <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="w-44 h-64 rounded-lg overflow-hidden">
                      <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" alt="" class="w-full h-full object-center object-cover">
                    </div>
                    <div class="w-44 h-64 rounded-lg overflow-hidden">
                      <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg" alt="" class="w-full h-full object-center object-cover">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="#show-gallery" class="inline-block text-center bg-yellow-400 border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-yellow-500">Inspire your mind brow!</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="show-gallery" class="container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
    <section class="py-20">
      <h1 class="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
        Introduce you to my gallery
      </h1>
      <p class="mt-4 mb-16 text-xl text-gray-500">
        Feel free or check out each link and experience in a unique way each page.
      </p>

      <div class="flex flex-wrap -mx-4 -mb-8">
        <router-link class="md:w-1/4 px-4 mb-8" to="/gallery/one">
          <img class="rounded shadow-md" src="../assets/images/one-draw.gif" alt="hello world gif">
        </router-link>
        <router-link class="md:w-1/4 px-4 mb-8" to="/gallery/one">
          <img class="rounded shadow-md" src="../assets/images/one-draw.gif" alt="hello world gif">
        </router-link>
        <router-link class="md:w-1/4 px-4 mb-8" to="/gallery/one">
          <img class="rounded shadow-md" src="../assets/images/one-draw.gif" alt="hello world gif">
        </router-link>
        <router-link class="md:w-1/4 px-4 mb-8" to="/gallery/one">
          <img class="rounded shadow-md" src="../assets/images/one-draw.gif" alt="hello world gif">
        </router-link>
      </div>
    </section>
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
          <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-500">
            Get started
          </a>
        </div>
        <div class="ml-3 inline-flex rounded-md shadow">
          <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-yellow-400 bg-white hover:bg-yellow-50">
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