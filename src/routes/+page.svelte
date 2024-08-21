<script>
  let darkMode = false;

  function toggleDarkMode() {
    darkMode = !darkMode;
    document.documentElement.classList.toggle('dark', darkMode);
  }
  let navBar = 0;
  function showNavBar() {
    if (navBar == 0) {
      navBar = 1;
    } else {
      navBar = 0;
    }
  }
</script>

<style>
  .gradient-background {
    background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
    background-size: 100% 100%;
  }
  .gradient-background-rev {
    background-image: linear-gradient(to bottom, #4481eb 0%, #04befe 100%);
    background-size: 100% 100%;
  }
  .hero-text {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  .intro-text {
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  }

</style>

<main class="gradient-background min-h-screen flex flex-col items-center justify-center">
  <div class="flex flex-col items-center w-full max-w-screen-xl px-6 py-4">
    <h1 class="text-5xl font-extrabold text-white mb-4 font-mono hero-text">FrenzyVJN</h1>
    <p class="text-xl text-white mb-6 font-light intro-text font-mono">
      I don't just code, I break it... to fix it better.
    </p>
    <button on:click={showNavBar} class="py-2 px-6 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
    </button>
    {#if (navBar == 1)}
    <nav class="flex navbar flex-row mt-40 items-center absolute justify-center bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
      <a href="/" class="py-2 px-6 ">Home</a>
      <a href="/about" class="py-2 px-6 ">About</a>
      <a href="/projects" class="py-2 px-6 ">Projects</a>
      <a href="/ctf" class="py-2 px-6 ">CTF</a>
      <a href="/contact" class="py-2 px-6 ">Contact</a>
    </nav>
    {/if}

  </div>
</main>

