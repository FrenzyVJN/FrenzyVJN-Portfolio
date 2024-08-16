<script>
    let darkMode = false;
  
    function toggleDarkMode() {
      darkMode = !darkMode;
      document.documentElement.classList.toggle('dark', darkMode);
    }
  
    let navBar = 0;
    function showNavBar() {
      navBar = navBar === 0 ? 1 : 0;
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
    .translucent-container {
  background: rgba(255, 255, 255, 0.1); /* Transparent white background */
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px); /* Blurs the background behind the container */
  -webkit-backdrop-filter: blur(10px); /* For Safari support */
  border: 1px solid rgba(255, 255, 255, 0.2); /* Optional border for better separation */
}

    .hero-text {
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
    .intro-text {
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    }
    .project-list {
      margin-top: 20px;
      list-style-type: none;
      padding: 0;
    }
    .project-item {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  transition: background 0.3s, box-shadow 0.3s, transform 0.3s; /* Add transition for transform */
}

.project-item:hover {
  background: linear-gradient(to bottom, #4481eb 0%, #04befe 100%);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  transform: scale(1.05); /* Scale down the item */
}


  </style>
  
  <main class="gradient-background min-h-screen flex flex-col items-center  justify-center">
    <div class="flex flex-col items-center w-full max-w-screen-xl px-6 py-4">
      <h1 class="text-5xl font-extrabold text-white mb-4 font-mono hero-text">My Projects</h1>
      <p class="text-xl text-white mb-6 font-light intro-text font-mono">
        A showcase of my work and achievements.
      </p>
    
      <div class="project-list">
        <div class="project-item translucent-container text-white font-mono">
          <h2 class="text-2xl font-bold mb-2 ">Cache Simulator</h2>
          <p>Developed a cache simulator to model L1, L2, and victim cache interactions, enhancing understanding of memory hierarchies and system performance</p>
        </div>
        <div class="project-item translucent-container text-white font-mono">
          <h2 class="text-2xl font-bold mb-2">SNUC GPA Calculator</h2>
          <p>Created the SNU Chennai GPA Calculator, a user-friendly tool for SNU Chennai students to effortlessly calculate SGPA and CGPA with pre-loaded courses and local grade storage.</p>
        </div>
        <div class="project-item translucent-container text-white font-mono">
          <h2 class="text-2xl font-bold mb-2">Lab Partner AI</h2>
          <p>Developed LabPartnerAI, an AI-powered web application that provides tailored guidance and code generation for Python and C++ assignments, streamlining the learning process for students.</p>
        </div>
        <div class="project-item translucent-container text-white font-mono">
          <h2 class="text-2xl font-bold mb-2">Edita Discord Bot</h2>
          <p>Developed a versatile Discord bot to enhance Capture The Flag (CTF) competitions by automating challenge management, providing real-time updates, and facilitating team coordination.</p>
        </div>
        <a href="https://github.com/FrenzyVJN" target="_blank" class="text-white font-mono underline underline-offset-2">
          More projects in github...
        </a>
      </div>
      <button on:click={showNavBar} class="py-2 px-6 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
      </button>
      {#if (navBar === 1)}
      <nav class="flex flex-row mt-4 items-center justify-center bg-white sticky text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
        <a href="/" class="py-2 px-6 ">Home</a>
        <a href="/about" class="py-2 px-6 ">About</a>
        <a href="/projects" class="py-2 px-6 ">Projects</a>
        <a href="/ctf" class="py-2 px-6 ">CTF</a>
        <a href="/contact" class="py-2 px-6 ">Contact</a>
      </nav>
      {/if}
  
    </div>
  </main>
  