import { FaLinkedin, FaEnvelope, FaGithub, FaDiscord } from 'react-icons/fa';
import { MdHome } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-scroll';
import { MdEmojiEvents } from "react-icons/md";
import './index.css';
import img from './assets/logo.png';
const events = [
  {
    title: 'Coming Soon...',
    description: 'Coming soon...',
    date: 'Will be updated soon...',
  },
  // Add more events as needed
];


export const socialMedias = [
  {
    href: 'mailto:vjn@frenzyvjn.tech',
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
    title: 'Hand Cricket Score Calculator',
    description: 'I developed a two-player hand gesture-based cricket game using OpenCV and a custom Hand Tracking Module, showcasing my proficiency in computer vision and interactive application development.',
    languages: ['Python', 'OpenCV'],
    githubLink: 'https://github.com/FrenzyVJN/hcsc',
  },
  {
    title: 'Quiz Application',
    description: 'I designed an interactive Quiz Portal using Python\'s tkinter library. This application facilitates teacher-student interactions, allowing teachers to add questions and students to access quiz results. The user-friendly interface enhances the learning experience.',
    languages: ['Python', 'tkinter'],
    githubLink: 'https://github.com/FrenzyVJN/quiz_app',
  },
  {
    title: 'Physics Virtual Lab',
    description: 'I developed a Physics Virtual Lab using ReactJS and TailwindCSS. This application allows users to simulate experiments and visualize the results. The user-friendly interface enhances the learning experience.',
    languages: ['ReactJS', 'Tailwind CSS'],
    githubLink: 'https://github.com/FrenzyVJN/PhysicsLab2.0',
    projectLink: 'https://physics.frenzyvjn.tech/'
  },
  {
    title: 'Proximity Social Media Platform',
    description: 'I designed UI for social media platform using Figma, NextJS and TailwindCSS. This application allows users to post and interact with other users near them.',
    languages: ['Figma', 'NextJS', 'Tailwind CSS'],
    githubLink: 'https://github.com/FrenzyVJN/Proximity-Social-Media'
  },
  {
    title: 'CTF Hosting Platform',
    description: 'I developed a CTF Hosting Platform using NextJS and TailwindCSS. This application allows users to host CTFs and participate in CTFs hosted by others.',
    languages: ['NextJS', 'Tailwind CSS'],
    githubLink:'https://github.com/FrenzyVJN/frenzyctf',
    projectLink: 'https://ctf.frenzyvjn.tech/'
  },
  {
    title: 'FrenzyVJN\'s Portfolio',
    description: 'I designed my portfolio using ReactJS and TailwindCSS. This application allows users to know more about me and my projects.',
    languages: ['ReactJS', 'Tailwind CSS'],
    githubLink: 'https://github.com/FrenzyVJN/FrenzyVJN-Portfolio',
    projectLink: 'https://frenzyvjn.tech/'
  }
];

// ... (Social media and project data)

function Project({ title, description, languages, githubLink, projectLink }: { title: any, description: any, languages: any[], githubLink: any, projectLink?: string }) {
  return (
    <div className="mb-4 p-6 bg-inherit rounded-2xl shadow-white border shadow-md border-white">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start mb-2">
        <div>
          <h3 className="text-white text-2xl font-bold mb-2 lg:mb-0">
            {projectLink ? (
              <a href={projectLink} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            ) : (
              title
            )}
          </h3>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500" title="GitHub Repository">
            View on GitHub
          </a>
        </div>
        <div className="flex lg:mt-0 mt-2">
          {languages.map((language, index) => (
            <span key={index} className="mr-2 px-2 py-1 bg-gray-600 text-white rounded">
              {language}
            </span>
          ))}
        </div>
      </div>
      <p className="text-white text-center">{description}</p>
    </div>
  );
}

// ... (Help component)


function Event({ title, description, date }: { title: any, description: any, date: any }) {
  return (
    <div className="mb-4 p-6 bg-inherit rounded-2xl  shadow-white border shadow-lg border-white">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start mb-2">
        <div>
          <h3 className="text-white text-2xl font-bold mb-2 lg:mb-0">{title}</h3>
          <p className="text-gray-400">{date}</p>
        </div>
      </div>
      <p className="text-white text-center">{description}</p>
    </div>
  );
}
const scores = [
  {
    ctfname: 'Huntress CTF',
    rank: '365/4000',
  },
  // Add more events as needed
];

function Scores({ ctfname, rank }: { ctfname: any, rank: any}) {
  return(
      <div className='flex flex-col lg:flex-row lg:justify-between items-center lg:items-start mb-2'>
        <div>
          <h3 className='text-white text-xl font-bold mb-2 lg:mb-0'>{ctfname}</h3>
          <p className='text-gray-400'>Rank - {rank}</p>
        </div>
        <p className='text-white text-center'></p>
      </div>
  )
}
function Help() {
  return (
    <main className="home min-h-screen flex flex-col items-center bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 text-white p-4 animate-movingBg">
      <div className="flex justify-center w-full fixed top-0">
        <div>
          <div className="flex mx-auto mt-6 border rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-inherit duration-300 bg-white bg-opacity-20 items-center justify-center border-white">
            <Link to="home" smooth={true} offset={-70} duration={500}>
              <h1 className="text-white text-2xl text-bold md:text-3xl rounded-xl text-center flex justify-center w-fit p-2 mx-2 md:mx-5 h-fit">
                <MdHome />
              </h1>
            </Link>
            <Link to="about" smooth={true} offset={-48} duration={500}>
              <h1 className="text-white text-2xl text-bold md:text-3xl rounded-xl text-center flex justify-center w-fit p-2 mx-2 md:mx-5 h-fit">
                <FaRegUser />
              </h1>
            </Link>
            <Link to="project" smooth={true} offset={-50} duration={500} className="projects-link">
              <h1 className="text-white text-2xl text-bold md:text-3xl rounded-xl text-center flex justify-center w-fit p-2 mx-2 md:mx-5 h-fit">
                <AiOutlineFundProjectionScreen />
              </h1>
            </Link>
            <Link to="Scores" smooth={true} duration={500} className='events-link'>
              <h1 className='text-white text-2xl text-bold md:text-3xl rounded-xl text-center flex justify-center w-fit p-2 mx-2 md:mx-5 h-fit'>
                <MdEmojiEvents />
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-auto md:w-1/2  shadow-white rounded-2xl shadow-lg border border-white my-8 p-6">
        <div className='flex justify-center'>
          <img className="flex" src={img} alt="FrenzyVJN" width="100" height="100" />
        </div>
        <h1 className="text-4xl text-center font-bold mb-4">FrenzyVJN</h1>

        <div className='mb-4'>
          <h2 className="text-lg text-center">
          Cybersecurity Enthusiast | Tech Enthusiast | Full-Stack Developer
          </h2>
        </div>
      </div>

      <section className="about my-8 w-full md:w-2/3 lg:w-1/2 border border-white rounded-2xl shadow-white shadow-lg p-6">
        <a href='about'>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
        </a>
        <p className=' text-lg'>
          👋 Greetings! I'm FrenzyVJN, a tech-savvy sophomore on a journey through Computer Science Engineering. I'm a Cybersecurity Enthusiast.
        </p>
        <p className=' text-lg'>
          💡 My quest for knowledge takes me to CTFs, conferences, and meetups, where I connect with like-minded individuals and stay on the cutting edge.
        </p>
        <p className=' text-lg'>
          👨‍💻 Fluent in Python, Javascript, React, R, and C, I'm a versatile developer. I've crafted projects that reflect my expertise in Cybersecurity, Ethical Hacking, and Full-Stack Development.
        </p>
        <p className=' text-lg'>
          🎓 A College Student deeply involved in Cybersecurity and Full-Stack Development, I excel in Python and JS. Proficient in Flask and React, I also navigate the realms of C and R, providing diverse solutions to varied projects.
        </p>

      </section>
      <section id="project" className="my-8 w-full md:w-2/3 lg:w-1/2 border shadow-lg shadow-white rounded-xl p-6">
        <a href='projects'>
          <h2 className="text-3xl font-bold text-idk mb-4">Projects</h2>
        </a>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </section>
      <section className='my-8 w-full md:w-2/3 lg:w-1/2 border shadow-lg shadow-white rounded-xl p-6' id="Scores">
        <a href='scores'>
          <h2 className='text-3xl font-bold text-idk mb-4'>Scores</h2>
        </a>
        {scores.map((score, index) => (
          <Scores key={index} {...score} />
        ))}
      </section>
      <section id="events" className="my-8 w-full md:w-2/3 lg:w-1/2 border shadow-lg shadow-white rounded-xl p-6">
        <a href='events'>
          <h2 className="text-3xl font-bold text-idk mb-4">Events Hosted</h2>
        </a>
        {events.map((event, index) => (
          <Event key={index} {...event} />
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

      <p className="text-center text-white text-sm mt-4">© 2023 FrenzyVJN</p>
    </main>
  );
}

export default Help;

