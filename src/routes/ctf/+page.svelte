<script>
    let challengeSolved = false;
    let userAnswer = '';
    const correctAnswer = 'vijayan';
  
    function checkAnswer() {
      if (userAnswer.trim().toLowerCase().includes(correctAnswer)) {
        challengeSolved = true;
      } else {
        alert('Incorrect answer. Try again!');
      }
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
    .ctf-container {
  background: rgba(255, 255, 255, 0.1); /* Transparent white background */
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px); /* Blurs the background behind the container */
  -webkit-backdrop-filter: blur(10px); /* For Safari support */
  border: 1px solid rgba(255, 255, 255, 0.2); /* Optional border for better separation */
}

    .challenge-text {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }
    .input-field {
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-bottom: 1rem;
      width: 100%;
    }
    .submit-button {
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
  </style>
  
  <main class="flex flex-col items-center justify-center min-h-screen p-4 gradient-background">
    <div class="ctf-container ">
      <h1 class="text-2xl font-bold mb-4 text-white font-mono">CTF Challenge (MORE CHALLENGES COMING SOON...)</h1>
      <p class="challenge-text text-white font-mono">
        Welcome to the CTF challenge! Solve the following puzzle to get the flag:
      </p>
      <h1 class="text-2xl font-bold text-white font-mono">OSINT</h1>
      <p class="challenge-text text-white font-mono">
        What is my real name?
      </p>
      {#if !challengeSolved}
      <form on:submit={checkAnswer}>
        <input type="text" bind:value={userAnswer} class="input-field placeholder:font-mono" placeholder="Enter your answer here" />
        <button class="submit-button ctf-container hover:bg-blue-300 hover:bg-opacity-90 font-mono">Submit</button>
      </form>
      {/if}
      {#if challengeSolved}
        <p class="text-white font-semibold mt-4 font-mono">Congratulations! You've solved the challenge.</p>
      {/if}
      
    </div>
    <button on:click={showNavBar} class="py-2 px-6 mt-10 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
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
  </main>
  