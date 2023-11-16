import { FaLinkedin, FaEnvelope, FaGithub, FaDiscord } from 'react-icons/fa';

export const socialMedias = [
  {
    href: 'mailto:svijayan01@gmail.com',
    ariaLabel: 'Compose an email to FrenzyVJN',
    title: 'Write an Email to FrenzyVJN',
    Icon: FaEnvelope,
  },
  {
    href: 'https://www.linkedin.com/in/vijayan-sankar/',
    ariaLabel: 'Goes to Vijayan Sankar\'s LinkedIn profile',
    title: 'LinkedIn Profile',
    Icon: FaLinkedin,
  },
  {
    href: 'https://github.com/FrenzyVJN',
    ariaLabel: 'Goes to FrenzyVJN\'s GitHub profile',
    title: 'GitHub Profile',
    Icon: FaGithub,
  },
  {
    href: 'https://discord.com/users/813371659738021919',
    ariaLabel: 'Goes to FrenzyVJN\'s Discord profile',
    title: 'Discord Profile',
    Icon: FaDiscord,
  },
];

const projects = [
  {
    title: 'Project 1',
    description: 'Will be updated soon',
  },
  {
    title: 'Project 2',
    description: 'Will be updated soon',
  },
  // Add more projects as needed
];

function Project({ title ,description } : {title : any, description : any}) {
  return (
    <div className="mb-4 p-6 bg-black rounded-2xl shadow-white border shadow-lg border-white">
      <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
      <p className="text-white text-justify">{description}</p>
    </div>
  );
}

function App() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-black text-white p-4">
      <div className="w-full md:w-1/2 shadow-white h-auto rounded-2xl shadow-lg border border-white my-8 p-6">
        <div className='flex justify-center'>
          <img className="flex" src = "https://i.imgur.com/skwUD9f.png" alt="FrenzyVJN" width="100" height="100" />
        </div>
        <h1 className="text-4xl text-center font-bold mb-4">FrenzyVJN</h1>

        <div className='mb-4'>
          <h2 className="text-lg text-center">
            Tech Enthusiast | Full-Stack Developer | Cybersecurity Enthusiast
          </h2>
        </div>
      </div>

      <section className="my-8 w-full md:w-2/3 lg:w-1/2 border border-white rounded-2xl shadow-white shadow-lg p-6">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-center text-lg">
          Hi, I am FrenzyVJN. I am a College Student who is into Cybersecurity (Ethical hacking, CTFs) and Full-Stack Developing. I have expertise in Python and JS with knowledge of Flask, React. I also know C and R.        
        </p>
      </section>

      <section className="my-8 w-full md:w-2/3 lg:w-1/2 border shadow-lg shadow-white rounded-xl p-6">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </section>

      <section className="my-8 w-full md:w-2/3 lg:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Social</h2>
        <div className="flex items-center mt-2">
          {socialMedias.map((socialMedia, index) => (
            <a
              key={index}
              href={socialMedia.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={socialMedia.ariaLabel}
              title={socialMedia.title}
              className="text-white mr-4"
            >
              <socialMedia.Icon className="w-8 h-8" />
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
