import { FaLinkedin, FaEnvelope, FaGithub, FaDiscord } from 'react-icons/fa';

function Home() {
    const socialMedias = [
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
      
    return (       
        <main className="h-screen flex flex-col items-center bg-black text-white p-4 overflow-y-hidden">
            <div className="w-full md:w-1/2 h-auto shadow-white rounded-2xl shadow-lg border border-white py-24 mt-10 mb-10">
                <div className='flex justify-center'>
                <img className="flex" src = "https://i.imgur.com/skwUD9f.png" alt="FrenzyVJN" width="100" height="100" />
                </div>
                <h1 className="text-6xl text-center font-bold mb-4">FrenzyVJN</h1>

                <div className='mb-4'>
                <h2 className="text-2xl text-center">
                    Tech Enthusiast | Full-Stack Developer | Cybersecurity Enthusiast
                </h2>
                </div>
            </div> 
            <section className="w-full md:w-2/3 lg:w-1/2">
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

export default Home;