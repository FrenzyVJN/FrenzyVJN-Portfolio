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
        <main className="h-screen flex flex-col items-center bg-black text-white p-4 overflow-y-hidden">            
            <section className="mb-10 mt-10 w-full py-32 md:w-2/3 lg:w-1/2 border border-white rounded-2xl shadow-white shadow-lg p-6">
                <h2 className="text-5xl font-bold mb-4">About Me</h2>
                <br/>
                <p className="text-center text-xl">
                Hi, I am FrenzyVJN. I am a College Student who is into Cybersecurity (Ethical hacking, CTFs) and Full-Stack Development. I have expertise in Python and JS with knowledge of Flask, React. I also know C and R.        
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