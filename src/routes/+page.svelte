<script>
    let darkMode = false;
  
    function toggleDarkMode() {
      darkMode = !darkMode;
      document.documentElement.classList.toggle('dark', darkMode);
    }
  </script>
  
  <style>
    .gradient-background {
      background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
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
      <a href="/" class="py-2 px-6 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
      </a>
    </div>
  </main>
  