<template>
  <router-link to="/" class="fixed flex py-2 px-4 rounded-md	top-5 left-5 bg-yellow-400 text-white hover:bg-black">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.99 11H20V13H7.99V16L4 12L7.99 8V11Z" fill="white"/>
    </svg>
    Return Gallery
  </router-link>
  <img class="animate-bounce fixed bottom-0 right-0" src="../../assets/images/sticker.png" alt="">
</template>

<script>
export default {
  name: 'ReturnPage'
}
</script>
