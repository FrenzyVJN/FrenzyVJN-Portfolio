import { FaLinkedin, FaEnvelope, FaGithub, FaDiscord } from 'react-icons/fa';

function AboutMe() {
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
        <main className="h-screen flex flex-col items-center bg-slate-900 text-white p-4 overflow-y-hidden">            
            <section className="mb-10 mt-10 w-full py-10 md:w-2/3 lg:w-1/2 border border-white rounded-2xl shadow-white shadow-lg p-6">
                <h2 className="text-5xl font-bold mb-4">About Me</h2>
                <br/>
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
            <section className="mb-auto w-full md:w-2/3 lg:w-1/2">
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

export default AboutMe;