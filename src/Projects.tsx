import { FaLinkedin, FaEnvelope, FaGithub, FaDiscord } from 'react-icons/fa';

function Project({ title, description, languages, githubLink }: { title: any, description: any, languages: any[], githubLink: any }) {
  return (
    <div className="mb-4 p-6 bg-slate-900 rounded-2xl shadow-white border shadow-lg border-white">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start mb-2">
        <div>
          <h3 className="text-white text-2xl font-bold mb-2 lg:mb-0">{title}</h3>
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

function Projects() {
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
      description: 'I developed a Physics Virtual Lab using ReactJS and TailwindCSS. This application allows users to simulate experiments and visualize the results. The user-friendly interface enhances the learning experience. ',
      languages: ['ReactJS', 'Tailwind CSS'],
      githubLink: 'https://github.com/FrenzyVJN/PhysicsLab2.0',
    },
    {
      title: 'Proximity Social Media Platform',
      description: 'I designed UI for social media platform using Figma, NextJS and TailwindCSS. This application allows users to post and interact with other users near them.',
      languages: ['Figma','NextJS', 'Tailwind CSS'],
      githubLink: 'https://github.com/FrenzyVJN/Proximity-Social-Media'
    }
  ];

  const socialMedias = [
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

  return (
    <main id='scrollfix1' className="min-h-screen flex flex-col items-center bg-slate-900 text-white p-4 overflow-y-hidden">
      <section className="w-full md:w-2/3 lg:w-1/2 border shadow-lg shadow-white rounded-xl mt-10 mb-10 py-16 p-6">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </section>
      <section className=" w-full md:w-2/3 lg:w-1/2">
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

export default Projects;
