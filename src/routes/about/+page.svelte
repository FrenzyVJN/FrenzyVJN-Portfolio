<script>
  function scrollToAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
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
  
    html {
      scroll-behavior: smooth;
    }
  
    .section {
      padding: 4rem 2rem;
    }
  
    .about {
      background-color: #f0f4f8;
      color: #333;
    }
  
    .about h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  
    .about p {
      font-size: 1.125rem;
      line-height: 1.6;
    }
  </style>

<section id="about" class="section about gradient-background min-h-screen flex flex-col items-center justify-center font-mono">
    <div class="flex flex-col items-center w-full max-w-screen-xl px-6 py-4">
      <h2 class="text-3xl font-bold text-white mb-4 hero-text">About Me</h2>
      <p class="text-lg text-white intro-text md:w-3/4 text-center">
        Cybersecurity student who thrives on solving CTF challenges and coding for fun. When I’m not diving into security challenges, you’ll find me building web projects just because I enjoy it. 
      </p>
    </div>
    <div class="text-white flex flex-col justify-center items-center">
    <h1 class="text-2xl hero-text font-bold">
    Achievements
    </h1>
    <p class="intro-text font-bold">
Top 3% on TryHackMe—breaking into systems, but not into the top 1% (yet).
    </p>
    <p class="intro-text text-[5px]">
    2nd at Enigma Quest CTF organised at SSN on 1st March 2024
    </p>
    <p class="intro-text">
    12th at Nexus CTF organised by YCF CTF team on April 20 2024
  </p>
  <p class="intro-text">
    3rd at Password CTF organised at VIT Chennai on 29th January 2024
  </p>
  <p class="intro-text">
    Participated in 30+ CTFs
  </p>
  <script src="https://tryhackme.com/badge/2064469"></script>
  <div>
    
  </div>
</div>
    <button on:click={showNavBar} class="py-2 px-6 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
    </button>
    <div class="mt-40"></div>
    {#if (navBar == 1)}
    <nav class="flex flex-row absolute md:mt-64 mt-44 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
    <a href="/" class="py-2 px-6">Home</a>
    <a href="/about" class="py-2 px-6">About</a>
    <a href="/projects" class="py-2 px-6">Projects</a>
    <a href="/ctf" class="py-2 px-6 ">CTF</a>
    <a href="/contact" class="py-2 px-6">Contact</a>
    </nav>
    {/if}
  </section>
 
  