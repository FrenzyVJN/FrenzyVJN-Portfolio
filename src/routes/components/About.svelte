<script>
  let navBar = 0;
  function showNavBar() {
    if (navBar == 0) {
      navBar = 1;
    } else {
      navBar = 0;
    }
  }

</script>
<section id="about" class="section about">
  <div class="flex flex-col items-center w-full max-w-screen-xl px-6 py-4">
    <h2 class="text-3xl font-bold mb-4">About Me</h2>
    <p class="text-lg text-center">
      Here is a bit about who I am and what I do. I am passionate about coding and love to take on new challenges. This section is where you can learn more about my journey and experiences.
    </p>
  </div>
</section>
<button on:click={showNavBar} class="py-2 px-6 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
</button>
{#if (navBar == 1)}
<nav class="flex flex-row mt-40 items-center absolute justify-center bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
  <a href="/about" class="py-2 px-6">About</a>
  <a href="/projects" class="py-2 px-6">Projects</a>
  <a href="/contact" class="py-2 px-6">Contact</a>
</nav>
{/if}