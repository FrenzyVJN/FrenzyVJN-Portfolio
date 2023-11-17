import { FaLinkedin, FaEnvelope, FaGithub, FaDiscord } from 'react-icons/fa';
function Project() {
    function Project({ title ,description } : {title : any, description : any}) {
        return (
          <div className="mb-4 p-6 bg-black rounded-2xl shadow-white border shadow-lg border-white">
            <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
            <p className="text-white text-justify">{description}</p>
          </div>
        );
      }
      
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
        <main id='scrollfix1' className="min-h-screen flex flex-col items-center bg-black text-white p-4 overflow-y-hidden">
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

export default Project;